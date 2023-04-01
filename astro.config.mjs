import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import rome from "astro-rome";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
	site: "https://theprofessionalswindowcleaning.com",
	integrations: [
		tailwind(),
		compress(),
		robotsTxt(),
		sitemap({
			customPages: [
				"https://theprofessionalswindowcleaning.com/",
				"https://theprofessionalswindowcleaning.com/about",
				"https://theprofessionalswindowcleaning.com/contact",
				"https://theprofessionalswindowcleaning.com/services",
				"https://theprofessionalswindowcleaning.com/privacy-policy",
				"https://theprofessionalswindowcleaning.com/terms-of-service",
				"https://theprofessionalswindowcleaning.com/cookie-policy",
				"https://theprofessionalswindowcleaning.com/404",
				"https://theprofessionalswindowcleaning.com/projects",
				"https://theprofessionalswindowcleaning.com/brampton-window-cleaning",
				"https://theprofessionalswindowcleaning.com/mississauga-window-cleaning",
				"https://theprofessionalswindowcleaning.com/scarborough-window-cleaning",
				"https://theprofessionalswindowcleaning.com/eavestrough-cleaning",
				"https://theprofessionalswindowcleaning.com/eavestrough-cleaning-ajax",
				"https://theprofessionalswindowcleaning.com/eavestrough-cleaning-pickering",
				"https://theprofessionalswindowcleaning.com/eavestrough-cleaning-richmond-hill",
				"https://theprofessionalswindowcleaning.com/eavestrough-cleaning-scarborough",
				"https://theprofessionalswindowcleaning.com/eavestrough-gutter-repair",
				"https://theprofessionalswindowcleaning.com/etobicoke-eavestrough-cleaning",
				"https://theprofessionalswindowcleaning.com/north-york-window-cleaning",
				"https://theprofessionalswindowcleaning.com/power-washing",
				"https://theprofessionalswindowcleaning.com/toronto-window-cleaning",
				"https://theprofessionalswindowcleaning.com/window-cleaning",
				"https://theprofessionalswindowcleaning.com/window-cleaning-etobicoke",
				"https://theprofessionalswindowcleaning.com/window-cleaning-markham",
				"https://theprofessionalswindowcleaning.com/window-cleaning-thornhill",
				"https://theprofessionalswindowcleaning.com/window-cleaning-vaughan",
			],
		}),
		rome(),
	],
	output: "server",
	adapter: cloudflare(),
});
