<template>
	<section
		:aria-label="title"
		:class="twMerge(!unstyled && 'flex flex-col gap-2.5 sm:gap-5', props.class)"
	>
		<h2 class="text-2xl leading-none font-semibold uppercase md:text-4xl">{{ title }}</h2>

		<slot />
	</section>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface UiSectionProps extends StyledComponentProps {
	title: string;
}

const props = defineProps<UiSectionProps>();
</script>
