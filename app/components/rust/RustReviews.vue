<template>
	<UiSection title="статьи о раст">
		<UiGrid class="hidden lg:grid">
			<UiReviewCard
				v-for="(item, index) in items3"
				v-bind="item"
				:key="index"
				class="max-w-75 shrink-0 grow md:max-w-100"
			/>
		</UiGrid>

		<div class="-mr-7.5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto sm:mr-0 sm:gap-5 lg:hidden">
			<UiReviewCard
				v-for="(item, index) in items3"
				v-bind="item"
				:key="index"
				class="max-w-75 shrink-0 grow snap-start focus:ring-inset md:max-w-100"
				tabindex="0"
			/>
		</div>
	</UiSection>
</template>

<script setup lang="ts">
import type { UiReviewCardProps } from "../ui/UiReviewCard.vue";

const items3: UiReviewCardProps[] = [
	{
		src: "/images/image.jpg",
		title: "Как поменять язык в Раст: полная инструкция",
		date: "15.06.2025",
		meta: ["Обучение", "Рейд"],
		descrption:
			"На результат сражения может повлиять даже малейшая задержка. Шанс на победу во многом зависит от реакции и точности. Но не всегда они зависят от самого игрока. Если пинг…",
	},
	{
		src: "/images/image.jpg",
		title: "Как поменять язык в Раст: полная инструкция",
		date: "15.06.2025",
		meta: ["Обучение", "Рейд"],
		descrption:
			"На результат сражения может повлиять даже малейшая задержка. Шанс на победу во многом зависит от реакции и точности. Но не всегда они зависят от самого игрока. Если пинг…",
	},
	{
		src: "/images/image.jpg",
		title: "Как поменять язык в Раст: полная инструкция",
		date: "15.06.2025",
		meta: ["Обучение", "Рейд"],
		descrption:
			"На результат сражения может повлиять даже малейшая задержка. Шанс на победу во многом зависит от реакции и точности. Но не всегда они зависят от самого игрока. Если пинг…",
	},
];
</script>
