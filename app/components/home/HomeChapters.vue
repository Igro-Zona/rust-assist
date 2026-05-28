<template>
	<UiGrid
		as="ol"
		class="relative mb-20 overflow-visible sm:grid-flow-col sm:grid-rows-3"
	>
		<li
			v-for="(chapter, index) in chapters"
			:key="index"
			class="relative pt-8 pl-9"
		>
			<div class="relative z-10 flex flex-col gap-1.25 sm:gap-2.5 md:gap-5">
				<p class="text-2xl leading-none font-semibold uppercase md:text-[2.25rem]">
					{{ chapter.title }}
				</p>
				<p
					v-if="chapter.description"
					class="text-toned text-sm leading-2 font-medium sm:text-xl md:text-2xl"
				>
					{{ chapter.description }}
				</p>
			</div>

			<div class="text-primary absolute inset-0 text-[3.25rem] leading-2 font-bold tracking-normal">
				{{ index < 9 ? `0${index + 1}` : index + 1 }}
			</div>
		</li>

		<div
			class="pc:-mr-30 absolute inset-0 -z-1 -mr-50 bg-[url('/static/human.svg')] bg-contain bg-bottom-right bg-no-repeat sm:top-30 sm:-mr-20 md:top-0 md:-mr-30 lg:bottom-21 xl:mr-0"
		/>
	</UiGrid>
</template>

<script setup lang="ts">
type Chapter = {
	title: string;
	description?: string;
};

const chapters: Chapter[] = [
	{
		title: "Для новичков",
		description: "Полная база знаний по Rust! Подробные карточки предметов, гайды и советы",
	},
	{
		title: "Для профи",
		description: "Глубокий разбор механик, мета-стратегии и лучшие тактики для победы",
	},
	{
		title: "Для новичков",
		description: "RustAssist — проверенный источник знаний для выживания и победы",
	},
	{
		title: "Для новичков",
		description: "Полная база знаний по Rust! Подробные карточки предметов, гайды и советы",
	},
	{
		title: "Для профи",
		description: "Глубокий разбор механик, мета-стратегии и лучшие тактики для победы",
	},
];
</script>
