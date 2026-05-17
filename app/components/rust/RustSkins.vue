<template>
	<UiSection title="скины">
		<UiGrid class="hidden sm:grid sm:grid-cols-4 lg:grid-cols-6">
			<UiItemSellable
				v-for="(item, index) in items"
				v-bind="item"
				:key="index"
			/>
		</UiGrid>

		<div class="-mr-7.5 flex snap-x snap-mandatory scrollbar-none gap-2.5 overflow-x-auto sm:hidden">
			<UiItemSellable
				v-for="(item, index) in items"
				v-bind="item"
				:key="index"
				class="pc:min-w-51.25 min-w-36.25 snap-start ring-inset"
			/>
		</div>
	</UiSection>
</template>

<script setup lang="ts">
import type { UiItemSellableProps } from "../ui/item/UiItemSellable.vue";

const items: UiItemSellableProps[] = [
	{ title: "Название скина", description: "Объект", image: "/static/skins/bullet-1.png", price: 12.54 },
	{ title: "Название скина", description: "Объект", image: "/static/skins/bullet-2.png", price: 12.54 },
	{ title: "Название скина", description: "Объект", image: "/static/skins/bullet-3.png", price: 12.54 },
	{ title: "Название скина", description: "Объект", image: "/static/skins/bullet-1.png", price: 12.54 },
	{ title: "Название скина", description: "Объект", image: "/static/skins/bullet-2.png", price: 12.54 },
	{ title: "Название скина", description: "Объект", image: "/static/skins/bullet-3.png", price: 12.54 },
	{ title: "Название скина", description: "Объект", image: "/static/skins/bullet-1.png", price: 12.54 },
	{ title: "Название скина", description: "Объект", image: "/static/skins/bullet-2.png", price: 12.54 },
	{ title: "Название скина", description: "Объект", image: "/static/skins/bullet-3.png", price: 12.54 },
	{ title: "Название скина", description: "Объект", image: "/static/skins/bullet-1.png", price: 12.54 },
	{ title: "Название скина", description: "Объект", image: "/static/skins/bullet-2.png", price: 12.54 },
];
</script>
