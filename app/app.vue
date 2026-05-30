<template>
	<ConfigProvider :use-id="() => useId()">
		<AppHeader />

		<main class="relative">
			<UiContainer class="relative z-1 flex flex-col gap-10 pb-10 md:gap-15 md:pb-15">
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

			<div class="absolute inset-x-0 top-200 h-346.25 bg-[url('/static/bg.svg')] bg-cover bg-no-repeat" />
		</main>

		<AppFooter />
	</ConfigProvider>
</template>
