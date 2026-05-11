<template>
	<NuxtLink
		to="#"
		:class="twMerge(!unstyled && 'bg-muted flex aspect-square flex-col items-center justify-center gap-5 rounded-[4px]', props.class)"
	>
		<Icon
			v-if="icon"
			v-bind="normalizeIconProps(icon)"
		/>
		<p class="text-button-bold">{{ title }}</p>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface UiItemProps extends StyledComponentProps {
	title: string;
	icon?: string | IconProps;
}

const props = defineProps<UiItemProps>();
</script>
