export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/fonts", "@nuxt/image", "@nuxt/hints", "@nuxt/a11y", "@nuxtjs/seo"],
	vite: {
		optimizeDeps: { include: ["@vue/devtools-core", "@vue/devtools-kit"] },
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
			subsets: ["latin-ext", "latin"],
		},
	},

	icon: {
		provider: "none",
		serverBundle: false,
		clientBundle: { scan: true, includeCustomCollections: true, sizeLimitKb: 4096 },
		// customCollections: [{ prefix: <custom-name>, dir: <relative-path> }],
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
