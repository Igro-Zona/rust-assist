<template>
	<UiLink
		:to="to"
		:class="
			twMerge(
				!unstyled &&
					'bg-obscure hover:bg-dimmed group active:bg-highlighted active:text-obscure flex aspect-square flex-col items-center justify-center gap-2.5 rounded-xs md:gap-5',
				props.class,
			)
		"
	>
		<Icon
			v-if="icon"
			v-bind="normalizeIconProps(icon)"
			class="size-17.5 md:size-20"
		/>

		<span class="-tracking-2 text-sm leading-2 font-semibold md:text-base md:font-bold">{{ title }}</span>
	</UiLink>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface UiItemProps extends StyledComponentProps {
	title: string;
	icon?: string | IconProps;
	to?: string;
}

const props = defineProps<UiItemProps>();
</script>
