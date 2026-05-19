<template>
	<UiLink
		to="/"
		:class="twMerge(!unstyled && 'group hover:text-toned flex items-center gap-2.5 md:text-xl lg:text-2xl', props.class)"
		v-bind="link"
	>
		<slot>
			<div
				class="bg-highlighted group-hover:bg-toned group-active:bg-inverted aspect-square w-6 rounded-sm lg:w-7.5"
				data-trc
			/>
			<Primitive
				:as="as ?? 'p'"
				:as-child
				class="leading-none font-bold uppercase"
				data-trc
			>
				rust assist
			</Primitive>
		</slot>
	</UiLink>
</template>

<script setup lang="ts">
import type { StyledPrimitiveComponentProps } from "~/global";
import type { UiLinkProps } from "./UiLink.vue";
import { twMerge } from "tailwind-merge";

export interface UiLogoProps extends StyledPrimitiveComponentProps {
	link?: UiLinkProps;
}
const props = defineProps<UiLogoProps>();
</script>
