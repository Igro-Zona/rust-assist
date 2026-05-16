<template>
	<div :class="twMerge(!unstyled && 'bg-muted/20 flex items-center gap-1.25 rounded-[2px] p-1.5', props.class)">
		<Icon
			v-if="icon"
			class="size-3.25 sm:size-4"
			v-bind="normalizeIconProps(icon)"
		/>

		<slot />
	</div>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface UiServerAttrProps extends StyledComponentProps {
	icon?: string | IconProps;
}

const props = defineProps<UiServerAttrProps>();
</script>
