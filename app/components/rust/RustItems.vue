<template>
	<div class="flex flex-col gap-2.5 sm:hidden">
		<UiItemExtended
			v-for="(item, index) in itemsExt"
			:key="index"
			v-bind="item"
			:class="[index > 6 && 'pc:flex hidden']"
		/>
	</div>

	<UiSection
		title="предметы"
		class="hidden sm:flex"
	>
		<UiGrid class="sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
			<UiItemSimplified
				v-for="(item, index) in items"
				v-bind="item"
				:key="index"
			/>
		</UiGrid>
	</UiSection>

	<UiSection
		title="мир"
		class="hidden sm:flex"
	>
		<UiGrid class="sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
			<UiItemSimplified
				v-for="(item, index) in world"
				v-bind="item"
				:key="index"
			/>
		</UiGrid>
	</UiSection>
</template>

<script setup lang="ts">
import type { UiItemSimplifiedProps } from "../ui/item/UiItemSimplified.vue";
import type { UiItemExtendedProps } from "../ui/item/UiItemExtended.vue";

const itemsExt: UiItemExtendedProps[] = [
	{
		title: "Боеприпасы",
		description: "Доступно 198 элементов",
		images: ["/static/items/bullet-1.png", "/static/items/bullet-2.png", "/static/items/bullet-3.png"],
	},
	{
		title: "Одежда",
		description: "Доступно 198 элементов",
		images: ["/static/items/gloves.png", "/static/items/jacket.png", "/static/items/granade.png"],
	},
	{
		title: "Конструкции",
		description: "Доступно 60 строительных блоков",
		images: ["/static/items/turret-1.png", "/static/items/capkan.png", "/static/items/turret-2.png"],
	},
	{
		title: "Боеприпасы",
		description: "Доступно 198 элементов",
		images: ["/static/items/bullet-1.png", "/static/items/bullet-2.png", "/static/items/bullet-3.png"],
	},
	{
		title: "Одежда",
		description: "Доступно 198 элементов",
		images: ["/static/items/gloves.png", "/static/items/jacket.png", "/static/items/granade.png"],
	},
	{
		title: "Конструкции",
		description: "Доступно 60 строительных блоков",
		images: ["/static/items/turret-1.png", "/static/items/capkan.png", "/static/items/turret-2.png"],
	},
	{
		title: "Боеприпасы",
		description: "Доступно 198 элементов",
		images: ["/static/items/bullet-1.png", "/static/items/bullet-2.png", "/static/items/bullet-3.png"],
	},
	{
		title: "Одежда",
		description: "Доступно 198 элементов",
		images: ["/static/items/gloves.png", "/static/items/jacket.png", "/static/items/granade.png"],
	},
	{
		title: "Конструкции",
		description: "Доступно 60 строительных блоков",
		images: ["/static/items/turret-1.png", "/static/items/capkan.png", "/static/items/turret-2.png"],
	},
	{
		title: "Боеприпасы",
		description: "Доступно 198 элементов",
		images: ["/static/items/bullet-1.png", "/static/items/bullet-2.png", "/static/items/bullet-3.png"],
	},
];

const items: UiItemSimplifiedProps[] = [
	{ title: "Боеприпасы", icon: "assist:items-bomb" },
	{ title: "Конструкции", icon: "assist:items-fence" },
	{ title: "Одежда", icon: "assist:items-rober" },
	{ title: "Компоненты", icon: "assist:items-lightbulb" },
	{ title: "Электричество", icon: "assist:items-battery" },
	{ title: "Боеприпасы", icon: "assist:items-bomb" },
	{ title: "Компоненты", icon: "assist:items-lightbulb" },
	{ title: "Конструкции", icon: "assist:items-fence" },
	{ title: "Боеприпасы", icon: "assist:items-bomb" },
	{ title: "Электричество", icon: "assist:items-battery" },
	{ title: "Электричество", icon: "assist:items-battery" },
	{ title: "Одежда", icon: "assist:items-rober" },
	{ title: "Электричество", icon: "assist:items-battery" },
	{ title: "Компоненты", icon: "assist:items-lightbulb" },
	{ title: "Боеприпасы", icon: "assist:items-bomb" },
];

const world: UiItemSimplifiedProps[] = [
	{ title: "Боеприпасы", icon: "assist:items-bomb" },
	{ title: "Конструкции", icon: "assist:items-fence" },
	{ title: "Одежда", icon: "assist:items-rober" },
	{ title: "Компоненты", icon: "assist:items-lightbulb" },
	{ title: "Электричество", icon: "assist:items-battery" },
	{ title: "Боеприпасы", icon: "assist:items-bomb" },
	{ title: "Конструкции", icon: "assist:items-fence" },
	{ title: "Компоненты", icon: "assist:items-lightbulb" },
	{ title: "Одежда", icon: "assist:items-rober" },
];
</script>
