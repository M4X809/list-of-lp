# Stage 1: Install dependencies with bun
FROM oven/bun:latest AS deps
WORKDIR /app

# Simplified copy of package files
COPY package.json bun.lock next.config.ts  ./
ARG NPM_FONT_AWESOME
RUN bun install

# Stage 2: Build Next.js with bun
FROM node:22-slim AS builder_nextjs
WORKDIR /app

# Copy dependencies and config files
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/bun.lock ./bun.lock
COPY --from=deps /app/next.config.ts ./next.config.ts

# Copy source code
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build
# Check the build output
RUN ls -la .next

# Stage 4: Final runner stage
FROM node:22-slim AS runner
WORKDIR /app

# Copy Next.js build artifacts and dependencies
COPY --from=builder_nextjs /app/.next ./.next
COPY --from=builder_nextjs /app/node_modules ./node_modules
COPY --from=builder_nextjs /app/public ./public
COPY --from=builder_nextjs /app/package.json ./package.json
COPY --from=builder_nextjs /app/next.config.ts ./next.config.ts
# Copy src folder for runtime access
COPY --from=builder_nextjs /app/src ./src


ENV TZ="CET"
ENV LANG="de_DE.UTF-8"
ENV LANGUAGE="de_DE:de"
ENV LC_ALL="de_DE.UTF-8"

EXPOSE 3000

ENV PORT=3000

CMD ["npm", "run", "prod"]