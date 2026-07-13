<template>
	<UiGrid
		as="dl"
		class="pc:grid-cols-4 max-w-215 grid-cols-2 self-center sm:grid-cols-4 lg:grid-cols-4"
	>
		<div
			v-for="(stat, index) in stats"
			:key="index"
			class="flex flex-col items-center gap-1.25 text-center text-balance"
			:class="stat.class"
		>
			<dt
				class="pc:text-[2.4375rem] -translate-x-2 text-[3.5rem] leading-none font-bold -tracking-widest text-nowrap sm:text-6xl md:text-[4.875rem] lg:text-[5.25rem]"
			>
				{{ stat.term }}
			</dt>
			<dd class="text-toned text-xs leading-2 font-medium sm:text-sm md:text-base md:leading-3">{{ stat.description }}</dd>
		</div>
	</UiGrid>
</template>

<script setup lang="ts">
import type { Class } from "~/global";

type Stat = {
	term: string;
	description: string;
	class?: Class;
};

const stats: Stat[] = [
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
