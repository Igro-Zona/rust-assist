import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/fonts", "@nuxt/image", "@nuxt/hints", "@nuxt/a11y", "@nuxtjs/seo", "reka-ui/nuxt"],
	vite: {
		plugins: [tailwindcss({ optimize: true })],
		optimizeDeps: { include: ["tailwind-merge", "@vueuse/core"] },
		build: {
			rollupOptions: {
				onwarn(warning, warn) {
					if (warning.code === "SOURCEMAP_BROKEN") return;
					warn(warning);
				},
			},
		},
	},

	app: { rootAttrs: { class: "isolate" }, head: { htmlAttrs: { class: "dark" } } },
	components: [{ path: "~/components", pathPrefix: false }],
	css: ["~/assets/css/main.css"],
	typescript: { typeCheck: "build" },

	fonts: {
		defaults: {
			weights: ["400 700"],
			styles: ["normal"],
			subsets: ["latin-ext", "latin", "cyrillic", "cyrillic-ext"],
		},
	},

	icon: {
		provider: "none",
		serverBundle: false,
		clientBundle: { scan: true, includeCustomCollections: true, sizeLimitKb: 4096 },
		customCollections: [{ prefix: "assist", dir: "./app/assets/icons", recursive: true }],
	},

	site: {
		// url: <site-hosting-url>,
		// name: <site-name>,
		// defaultLocale: <site-locale>,
		// title: <site-title>,
		// description: <site-description>,
	},

	robots: {
		blockAiBots: true,
		blockNonSeoBots: true,
		autoI18n: false,
	},

	sitemap: { zeroRuntime: true },
	ogImage: false,
});
