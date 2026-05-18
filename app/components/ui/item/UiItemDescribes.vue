<template>
	<div :class="twMerge(!unstyled && 'flex flex-col items-center gap-1.25 text-center text-balance', props.class)">
		<dt
			class="pc:text-[2.4375rem] -translate-x-2 text-[3.5rem] leading-none font-bold -tracking-widest sm:text-6xl md:text-[4.875rem] lg:text-[5.25rem]"
		>
			{{ term }}
		</dt>
		<dd class="text-toned text-xs leading-2 font-medium sm:text-sm md:text-base md:leading-3">{{ description }}</dd>
	</div>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface UiItemDescribesProps extends StyledComponentProps {
	term: string;
	description: string;
}

const props = defineProps<UiItemDescribesProps>();
</script>
