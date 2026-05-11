<template>
	<div :class="twMerge(!unstyled && 'bg-muted flex flex-col gap-2.5 rounded-[4px] p-5 md:gap-4', props.class)">
		<div class="flex items-center gap-1.5">
			<div class="bg-primary aspect-square w-5 rounded-[4px]" />
			<p class="text-button-bold">{{ title }}</p>
		</div>

		<div>
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface UiServerCardProps extends StyledComponentProps {
	title: string;
}

const props = defineProps<UiServerCardProps>();
</script>
