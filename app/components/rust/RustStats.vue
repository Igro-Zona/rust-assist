<template>
	<dl class="pc:grid-cols-4 grid max-w-215 grid-cols-2 gap-2.5 self-center sm:gap-5">
		<UiItemDescribes
			v-for="(term, index) in terms"
			:key="index"
			v-bind="term"
		/>
	</dl>
</template>

<script setup lang="ts">
import type { UiItemDescribesProps } from "../ui/item/UiItemDescribes.vue";

const terms: UiItemDescribesProps[] = [
	{
		term: "TOP 1",
		description: "рейд калькулятор в России и СНГ",
		class: "text-primary",
	},
	{
		term: "+300",
		description: "скачиваний приложения по всему миру",
		class: "text-[#4D5839]",
	},
	{
		term: "+235",
		description: "пользователей пользуются ежедневно",
		class: "text-[#785945]",
	},
	{
		term: "+5k",
		description: "пользователей пользуются ежедневно",
		class: "text-[#564E49]",
	},
];
</script>
