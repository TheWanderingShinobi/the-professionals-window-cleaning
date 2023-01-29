import { defineConfig } from "astro/config";

// https://astro.build/config
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
export default defineConfig({
  site: "https://selfhostlab.com",
  integrations: [tailwind(), compress(), robotsTxt(), sitemap(), rome()],
  output: "server",
  adapter: netlify()
});