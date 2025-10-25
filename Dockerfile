# Use bun as the base image
FROM oven/bun:latest AS deps
# Install dependencies only when needed
WORKDIR /app

COPY package.json next.config.ts ./

# Install dependencies including devDependencies
RUN bun install --frozen-lockfile

# Build the application
FROM oven/bun:latest AS builder
WORKDIR /app

# Copy dependencies and config files
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./
COPY --from=deps /app/next.config.ts ./

# Copy source code
COPY . .


ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV SKIP_ENV_VALIDATION=1
ENV BETTER_AUTH_TELEMETRY=0


# Build Next.js application
RUN bun run build

# Production image
FROM oven/bun:latest AS runner
WORKDIR /app

ENV NODE_ENV=production


# Copy Next.js build artifacts
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./

ENV TZ="CET"
ENV LANG="de_DE.UTF-8"
ENV LANGUAGE="de_DE:de"
ENV LC_ALL="de_DE.UTF-8"
ENV PORT=3000

EXPOSE 3000


# Start the application
CMD ["bun", "server.js"]

