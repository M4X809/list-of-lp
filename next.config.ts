const nextConfig: import("next").NextConfig = {
	output: "standalone",
	experimental: {
		viewTransition: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	reactCompiler: true,
};

module.exports = nextConfig;
