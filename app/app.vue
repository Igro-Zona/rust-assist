<template>
	<UiContainer>
		<b>I love it</b>
		<UiLogo />
	</UiContainer>
	<UiContainer class="flex flex-col gap-15 py-15">
		<UiSection title="предметы">
			<UiGrid class="md:grid-cols-4 lg:grid-cols-6">
				<UiItem
					v-for="(item, index) in items"
					v-bind="item"
					:key="index"
				/>
			</UiGrid>
		</UiSection>

		<UiSection title="мир">
			<UiGrid class="md:grid-cols-4 lg:grid-cols-6">
				<UiItem
					v-for="(item, index) in items2"
					v-bind="item"
					:key="index"
				/>
			</UiGrid>
		</UiSection>

		<UiSection title="рекомендукемые сервера">
			<UiGrid>
				<UiServerCard
					v-for="(server, index) in servers"
					v-bind="server"
					:key="index"
				/>
			</UiGrid>
		</UiSection>

		<RustReviews />

		<RustFAQ />
	</UiContainer>

	<AppFooter />
</template>

<script setup lang="ts">
import type { UiItemProps } from "./components/ui/UiItem.vue";
import type { UiServerCardProps } from "./components/ui/UiServerCard.vue";

const items: UiItemProps[] = [
	{
		title: "Боеприпасы",
		icon: "assist:bomb",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
];

const items2: UiItemProps[] = [
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
	{
		title: "Боеприпасы",
	},
];

const servers: UiServerCardProps[] = [
	{
		title: "Сервер «Лучший»",
	},
	{
		title: "Сервер «Лучший»",
	},
	{
		title: "Сервер «Лучший»",
	},
	{
		title: "Сервер «Лучший»",
	},
	{
		title: "Сервер «Лучший»",
	},
	{
		title: "Сервер «Лучший»",
	},
	{
		title: "Сервер «Лучший»",
	},
	{
		title: "Сервер «Лучший»",
	},
];
</script>
