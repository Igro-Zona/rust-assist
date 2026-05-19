<template>
	<ConfigProvider :use-id="() => useId()">
		<AppHeader />

		<main>
			<UiContainer class="flex flex-col gap-10 py-10 md:gap-15 md:py-15">
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
