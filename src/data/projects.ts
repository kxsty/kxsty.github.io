export const projects: Project[] = [
	{
		title: "Chattes",
		description:
			"A cross-platform note taking app with the simplicity of a messenger.",
		source_url: "https://github.com/kxsty/chattes",
		image_url: "https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyN21pdmV3c2ZqZjEybmk1Ymt3bmtjdTBiM292ZjYwNXRoaHk2eGxjcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/A06UFEx8jxEwU/source.gif",
		skills: ["Flutter", "Rust", "SQLite", "riverpod"],
	},
	{
		title: "rivyr",
		description: "Fast and minimal image viewer written in rust. Software renderer optimized for image rendering (that i wrote myself) and a lot of the features without gui or bloat.",
		source_url: "https://github.com/kxsty/rivyr",
		image_url: "#",
		skills: ["Rust", "winit", "OpenGL", "libvips"],
	},
	{
		title: "civyr",
		description: "Fast and minimal image viewer",
		source_url: "https://github.com/kxsty/civyr",
		image_url: "#",
		skills: ["C", "GLFW", "OpenGL", "libvips"],
	},
	{
		title: "Messenger",
		description: "Built with Go, WebSockets, and Mac & Cheese. \nA real-time messaging platform utilizing Cassandra for storage and Redis for caching.",
		source_url: "https://github.com/kxsty/messenger",
		image_url:
			"giphy.gif",
		skills: ["Go", "S3", "Redis", "WebSocket", "Cassandra", "gRPC"],
	},
	{
		title: "E-commerce Store",
		description:
			"A robust microservices-based e-commerce backend handling inventory, orders, and payments.",
		source_url: "https://github.com/kxsty/store",
		image_url: "#",
		skills: ["C#", "Entity Framework", "Redis", "PostgreSQL", "RabbitMQ"],
	},
	{
		title: "spotifree",
		description: "An utility to download your spotify library in mp3 format. Own your music.",
		source_url: "https://github.com/kxsty/spotifree",
		image_url: "#",
		skills: ["Python", "SpotDL", "API", "Scraping", "JSON"]
	},
	{
		title: "URL Shortener",
		description: "High-throughput URL shortening service leveraging Kafka for event streaming and MongoDB for analytics.",
		source_url: "https://github.com/kxsty/url-shortener",
		image_url: "#",
		skills: ["C#", "Redis", "MongoDB", "Kafka"],
	},
	{
		title: "HH visualizer",
		description:
			"CLI app to scrape and visualize data about vacancies from hh.ru",
		source_url: "https://github.com/kxsty/hh-visualizer",
		image_url: "#",
		skills: ["Rust", "reqwest", "tokio", "governor", "clap", "regex"],
	},
	{
		title: "File Downloader",
		description:
			"Small cli utility to download files from links in text. Nothing fancy.",
		source_url: "https://github.com/kxsty/downloader",
		image_url: "#",
		skills: ["Python", "urllib3"],
	},
	{
		title: "This site",
		description: "Simple HTML/CSS static site (no javascript at runtime).",
		source_url: "https://github.com/kxsty/kxsty.github.io",
		image_url: "#",
		skills: ["Astro", "HTML", "CSS", "Typescript"]
	}
];

export interface Project {
	title: string;
	description: string;
	source_url: string;
	image_url: string;
	skills: string[];
}
