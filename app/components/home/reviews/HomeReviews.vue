<template>
	<UiSection title="статьи о раст">
		<UiGrid class="hidden lg:grid">
			<ReviewsCard
				v-for="(item, index) in items"
				v-bind="item"
				:key="index"
				class="max-w-75 shrink-0 grow md:max-w-100"
			/>
		</UiGrid>

		<div class="-mr-7.5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto sm:mr-0 sm:gap-5 lg:hidden">
			<ReviewsCard
				v-for="(item, index) in items"
				v-bind="item"
				:key="index"
				class="has-hover:bg-dimmed sm:has-hover:bg-obscure sm:has-active:bg-obscure has-active:bg-muted max-w-75 shrink-0 grow md:max-w-100"
			>
				<UiLink
					v-bind="item.link"
					:aria-label="'Перейти на статью: ' + item.title"
					class="absolute inset-0 focus:ring-inset sm:hidden"
				/>
			</ReviewsCard>
		</div>
	</UiSection>
</template>

<script setup lang="ts">
import type { ReviewsCardProps } from "./ReviewsCard.vue";

const items: ReviewsCardProps[] = [
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
