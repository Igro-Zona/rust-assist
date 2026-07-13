<!-- eslint-disable vue/html-self-closing -->
<template>
	<div class="flex flex-col gap-2.5 sm:hidden">
		<UiItem
			v-for="(item, index) in itemsExt"
			v-bind="item"
			:key="index"
			:class="['pc:p-5 relative aspect-auto items-stretch gap-4 p-3.75', index > 6 && 'pc:flex hidden']"
		>
			<div class="relative z-1 flex flex-col justify-between gap-1.5">
				<p class="pc:-tracking-2 text-sm leading-2 font-semibold transition-colors">{{ item.title }}</p>
				<p
					v-if="item.description"
					class="text-toned group-active:text-obscure text-xs leading-1 font-medium transition-colors"
				>
					{{ item.description }}
				</p>
			</div>

			<template #footer>
				<div
					v-if="item.images"
					class="relative z-1 flex shrink-0 items-center"
				>
					<img
						v-for="(image, idx) in item.images.slice(0, 3)"
						:key="idx"
						:src="image"
						class="pc:size-14.5 size-10"
						alt=""
					/>
				</div>

				<div class="absolute inset-0 z-0 flex items-center justify-end">
					<div
						class="pc:max-h-20 pc:max-w-57 h-full max-h-17 w-full max-w-43 mask-[linear-gradient(70deg,rgba(34,34,34,0)_0%,rgba(34,34,34,1)_100%)] text-[#484848]/30 group-hover:text-[#939393]/30 group-active:text-[#242424]/30"
					>
						<Icon
							name="assist:points"
							class="pc:max-h-20 pc:max-w-57 h-full max-h-17 w-full max-w-43"
						/>
					</div>
				</div>
			</template>
		</UiItem>
	</div>

	<UiSection
		title="предметы"
		class="hidden sm:flex"
	>
		<UiGrid class="sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
			<UiItem
				v-for="(item, index) in items"
				v-bind="item"
				:key="index"
				class="flex-col items-center justify-center"
			/>
		</UiGrid>
	</UiSection>

	<UiSection
		title="мир"
		class="hidden sm:flex"
	>
		<UiGrid class="sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
			<UiItem
				v-for="(item, index) in world"
				v-bind="item"
				:key="index"
				class="flex-col items-center justify-center"
			/>
		</UiGrid>
	</UiSection>
</template>

<script setup lang="ts">
import type { UiItemProps } from "../ui/UiItem.vue";

type HomeItem = Omit<UiItemProps, "image" | "description">;
type HomeItemExt = {
	images?: string[];
} & Omit<UiItemProps, "icon" | "image">;

const itemsExt: HomeItemExt[] = [
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

const items: HomeItem[] = [
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

const world: HomeItem[] = [
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
