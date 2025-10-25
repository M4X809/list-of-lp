const nextConfig: import("next").NextConfig = {
	experimental: {
		viewTransition: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	reactCompiler: true,
};

module.exports = nextConfig;
