<template>
	<button
		:disabled="disabled"
		:type="type ?? 'button'"
		:class="twMerge(!unstyled && 'inline-flex cursor-pointer transition-colors disabled:cursor-default', props.class)"
	>
		<slot>
			{{ label }}
		</slot>
	</button>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface UiButtonProps extends StyledComponentProps {
	type?: "button" | "submit" | "reset";
	label?: string;
	disabled?: boolean;
}

const props = defineProps<UiButtonProps>();
</script>
