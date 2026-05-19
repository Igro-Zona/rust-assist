<!-- eslint-disable vue/html-self-closing -->
<template>
	<UiLink
		:to="to"
		:class="
			twMerge(
				!unstyled &&
					'bg-obscure hover:bg-dimmed group active:bg-highlighted active:text-obscure flex aspect-square min-h-auto justify-between gap-2.5 rounded-xs md:gap-5',
				props.class,
			)
		"
	>
		<slot name="header">
			<Icon
				v-if="icon"
				v-bind="normalizeIconProps(icon, 'size-17.5 md:size-20 transition-colors')"
			/>

			<img
				v-if="image"
				:src="image"
				alt=""
				class="pc:mt-1.5 pc:size-20 relative z-1 mt-2.5 size-17.5 self-center sm:size-17.5 md:mt-2.5 md:size-20"
			/>
		</slot>

		<slot>
			<p class="-tracking-2 text-sm leading-2 font-semibold transition-colors md:text-base md:font-bold">{{ title }}</p>
		</slot>

		<slot name="footer" />
	</UiLink>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface UiItemProps extends StyledComponentProps {
	title: string;
	description?: string;
	image?: string;
	icon?: string | IconProps;
	to?: string;
}

const props = defineProps<UiItemProps>();
</script>
