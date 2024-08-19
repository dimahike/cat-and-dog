/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn2.thecatapi.com",
			},
			{
				protocol: "https",
				hostname: "cdn2.thedogapi.com",
			},
		],
	}
};

export default nextConfig;
