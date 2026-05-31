<template>
	<div class="contents gap-5 sm:flex sm:pt-10 md:pt-15">
		<div class="flex-1 lg:flex-2">
			<UiSection
				class="pc:gap-21.5 border-muted sm:bg-obscure relative -mx-7.5 h-full justify-between gap-14 overflow-visible rounded-xs border-b p-7.5 pt-2.5 sm:mx-0 sm:gap-2.5 sm:border-none sm:pt-7.5 md:p-10 lg:grid lg:grid-flow-col lg:grid-cols-[1fr_270px] lg:gap-5"
				title="Rust Assist — ваш ассистент в мире Rust"
			>
				<template #title="{ title }">
					<div class="md: relative z-10 flex flex-col gap-2.5 sm:gap-3.75 md:gap-5">
						<h1
							class="pc:text-4xl max-w-70 text-[2rem] leading-1 font-bold tracking-normal text-balance sm:max-w-none sm:text-[2rem] md:text-4xl xl:text-5xl 2xl:text-[3.25rem]"
						>
							{{ title }}
						</h1>
						<p class="text-toned max-w-80 text-sm leading-3 font-medium md:text-base">
							Небольшой текст, бла бла бла, вставлю пример позже, вставлю пример позже, вставлю пример позже, вставлю пример
							позже
						</p>
					</div>
				</template>

				<div class="relative z-10 -mx-7.5 overflow-hidden sm:hidden">
					<HeroMarquee :items="items" />
				</div>

				<div class="relative z-10 flex flex-col gap-2.5 lg:mt-auto lg:max-w-95">
					<UiLink
						class="bg-primary hover:text-default/40 justify-center rounded-xs p-3 leading-none font-semibold md:p-4.25"
						label="Скачать приложение"
					/>
					<UiLink
						class="bg-dimmed hover:text-default/40 justify-center rounded-xs p-3 leading-none font-semibold md:p-4.25"
						label="Таблица рейда"
					/>
				</div>

				<UiGrid
					unstyled
					class="relative z-10 row-span-2 hidden max-w-67.5 grid-flow-row auto-rows-max grid-cols-2 gap-2.5 self-center lg:grid"
				>
					<template
						v-for="(item, index) in items.slice(0, 8)"
						:key="index"
					>
						<HeroMarqueeItem
							v-if="!('subitems' in item)"
							v-bind="item as HeroMarqueeItemProps"
							class="max-w-32.5 p-3.75"
						/>

						<UiGrid
							v-else
							unstyled
							class="grid grid-cols-2 grid-rows-2 gap-2.5"
						>
							<HeroMarqueeItem
								v-for="(subitem, idx) in item.subitems"
								:key="idx"
								v-bind="subitem"
								class="max-w-15 p-1.75"
							/>
						</UiGrid>
					</template>
				</UiGrid>

				<div class="absolute inset-0 -top-30 bg-[url('/static/hero/bg.png')] bg-cover bg-center bg-no-repeat opacity-40 sm:top-0" />
			</UiSection>
		</div>

		<div class="hidden flex-1 sm:block">
			<UiSection
				title="Некоторые статьи"
				unstyled
				class="flex flex-1 flex-col gap-5"
			>
				<template #title="{ title }">
					<h2 class="sr-only">{{ title }}</h2>
				</template>

				<HeroReviewsCard
					v-for="(review, index) in reviews"
					:key="index"
					v-bind="review"
				/>

				<UiLink
					class="bg-primary hover:text-default/40 justify-center rounded-xs p-3 leading-none font-semibold md:p-4.25"
					label="Другие статьи"
				/>
			</UiSection>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { MarqueeNode } from "./HeroMarquee.vue";
import type { HeroReviewsCardProps } from "./HeroReviewsCard.vue";
import type { HeroMarqueeItemProps } from "./HeroMarqueeItem.vue";

const items: MarqueeNode[] = [
	{
		image: "/static/hero/bomb.png",
		link: {
			label: "Нажми на меня",
		},
	},
	{
		subitems: [
			{
				image: "/static/hero/powder.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/honey.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/supply.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/sulfur.png",
				link: {
					label: "Нажми на меня",
				},
			},
		],
	},

	{
		subitems: [
			{
				image: "/static/hero/bullet-1.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/dynamite.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/bullet-2.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/bullet-3.png",
				link: {
					label: "Нажми на меня",
				},
			},
		],
	},
	{
		image: "/static/hero/scraps.png",
		link: {
			label: "Нажми на меня",
		},
	},
	{
		image: "/static/hero/hazmat.png",
		link: {
			label: "Нажми на меня",
		},
	},
	{
		subitems: [
			{
				image: "/static/hero/powder.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/honey.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/supply.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/sulfur.png",
				link: {
					label: "Нажми на меня",
				},
			},
		],
	},

	{
		subitems: [
			{
				image: "/static/hero/bullet-1.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/dynamite.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/bullet-2.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/bullet-3.png",
				link: {
					label: "Нажми на меня",
				},
			},
		],
	},
	{
		image: "/static/hero/rocket-launcher.png",
		link: {
			label: "Нажми на меня",
		},
	},
	{
		image: "/static/hero/bomb.png",
		link: {
			label: "Нажми на меня",
		},
	},
	{
		subitems: [
			{
				image: "/static/hero/powder.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/honey.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/supply.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/sulfur.png",
				link: {
					label: "Нажми на меня",
				},
			},
		],
	},

	{
		subitems: [
			{
				image: "/static/hero/bullet-1.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/dynamite.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/bullet-2.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero/bullet-3.png",
				link: {
					label: "Нажми на меня",
				},
			},
		],
	},
	{
		image: "/static/hero/scraps.png",
		link: {
			label: "Нажми на меня",
		},
	},
];

const reviews: HeroReviewsCardProps[] = [
	{
		src: "/images/image.jpg",
		title: "Как поменять язык в Раст: полная инструкция",
		date: "15.06.2025",
		meta: ["Обучение", "Рейд"],
	},
	{
		src: "/images/image.jpg",
		title: "Как поменять язык в Раст: полная инструкция",
		date: "15.06.2025",
		meta: ["Обучение", "Рейд"],
	},
];
</script>
