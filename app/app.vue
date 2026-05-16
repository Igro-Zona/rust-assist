<template>
	<UiContainer>
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

		<RustServers />

		<RustReviews />

		<RustFAQ />
	</UiContainer>

	<AppFooter />
</template>

<script setup lang="ts">
import type { UiItemProps } from "./components/ui/UiItem.vue";

const items: UiItemProps[] = [
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

const items2: UiItemProps[] = [
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
