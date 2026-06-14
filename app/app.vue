<template>
	<ConfigProvider :use-id="() => useId()">
		<AppHeader />

		<main class="overflow-x-clip">
			<UiContainer class="flex flex-col gap-10 pb-10 md:gap-15 md:pb-15">
				<HomeHero />
				<HomeChapters />
				<HomePromo />
				<HomeStats />
				<HomeSkins />
				<HomeItems />
				<HomeServers />
				<HomeReviews />
				<HomeFAQ />
			</UiContainer>
		</main>

		<AppFooter />
	</ConfigProvider>
</template>
