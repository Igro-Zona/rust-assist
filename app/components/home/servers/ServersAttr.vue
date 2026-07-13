<template>
	<div :class="twMerge(!unstyled && 'bg-muted/20 flex items-center gap-1.25 rounded-[2px] p-1.5', props.class)">
		<Icon
			v-if="icon"
			v-bind="normalizeIconProps(icon, 'size-3.25 sm:size-4 transition-colors')"
		/>

		<span
			v-if="$slots.default"
			class="transition-colors"
		>
			<slot />
		</span>

		<slot name="trailing" />
	</div>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface ServersAttrProps extends StyledComponentProps {
	icon?: string | IconProps;
}

const props = defineProps<ServersAttrProps>();
</script>
