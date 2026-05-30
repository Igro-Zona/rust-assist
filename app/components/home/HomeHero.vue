<template>
	<UiSection
		class="border-muted pc:gap-21.5 relative -mx-7.5 gap-14 overflow-visible border-b p-7.5 pt-2.5 sm:hidden"
		title="Rust Assist — ваш ассистент в мире Rust"
	>
		<template #title="{ title }">
			<div class="flex flex-col gap-2.5">
				<h1 class="pc:text-4xl max-w-70 text-[2rem] leading-1 font-bold tracking-normal text-balance">{{ title }}</h1>
				<p class="text-toned max-w-80 text-sm leading-3 font-medium">
					Небольшой текст, бла бла бла, вставлю пример позже, вставлю пример позже, вставлю пример позже, вставлю пример позже
				</p>
			</div>
		</template>

		<div class="-mx-7.5 overflow-hidden">
			<HeroMarquee :items="items" />
		</div>

		<div class="flex flex-col gap-2.5">
			<UiLink
				class="bg-primary justify-center rounded-xs p-3 leading-none font-semibold"
				label="Скачать приложение"
			/>
			<UiLink
				class="bg-dimmed justify-center rounded-xs p-3 leading-none font-semibold"
				label="Таблица рейда"
			/>
		</div>

		<div class="absolute inset-0 -top-30 -z-1 bg-[url('/static/hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-40" />
	</UiSection>

	<UiGrid
		unstyled
		class="hidden h-100 grid-cols-2 gap-5 sm:grid"
	>
		<UiSection
			class="bg-obscure relative auto-rows-max justify-between rounded-xs p-7.5 md:p-10"
			title="Rust Assist — ваш ассистент в мире Rust"
		>
			<template #title="{ title }">
				<div class="relative z-10 flex flex-col gap-3.75 md:gap-5">
					<h1 class="text-[2rem] leading-1 font-bold tracking-normal text-balance md:text-4xl lg:text-5xl xl:text-[3.25rem]">
						{{ title }}
					</h1>
					<p class="text-toned max-w-80 text-sm leading-3 font-medium md:text-base">
						Небольшой текст, бла бла бла, вставлю пример позже, вставлю пример позже, вставлю пример позже, вставлю пример позже
					</p>
				</div>
			</template>

			<div class="relative z-10 flex flex-col gap-2.5">
				<UiLink
					class="bg-primary justify-center rounded-xs p-3 leading-none font-semibold md:p-4.25"
					label="Скачать приложение"
				/>
				<UiLink
					class="bg-dimmed justify-center rounded-xs p-3 leading-none font-semibold md:p-4.25"
					label="Таблица рейда"
				/>
			</div>

			<div class="absolute inset-0 bg-[url('/static/hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-40" />
		</UiSection>

		<div>hola</div>
	</UiGrid>
</template>

<script setup lang="ts">
import type { MarqueeNode } from "./hero/HeroMarquee.vue";

const items: MarqueeNode[] = [
	{
		image: "/static/hero-bomb.png",
		link: {
			label: "Нажми на меня",
		},
	},
	{
		subitems: [
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
		],
	},

	{
		subitems: [
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
		],
	},
	{
		image: "/static/hero-bomb.png",
		link: {
			label: "Нажми на меня",
		},
	},
	{
		image: "/static/hero-bomb.png",
		link: {
			label: "Нажми на меня",
		},
	},
	{
		subitems: [
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
		],
	},

	{
		subitems: [
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
		],
	},
	{
		image: "/static/hero-bomb.png",
		link: {
			label: "Нажми на меня",
		},
	},
	{
		image: "/static/hero-bomb.png",
		link: {
			label: "Нажми на меня",
		},
	},
	{
		subitems: [
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
		],
	},
	{
		subitems: [
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
			{
				image: "/static/hero-bomb.png",
				link: {
					label: "Нажми на меня",
				},
			},
		],
	},
	{
		image: "/static/hero-bomb.png",
		link: {
			label: "Нажми на меня",
		},
	},
];
</script>
