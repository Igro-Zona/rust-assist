<template>
	<div
		:class="
			twMerge(
				!unstyled &&
					'has-hover:bg-dimmed has-active:bg-dimmed bg-obscure pc:p-5 relative flex flex-col gap-2.5 rounded-sm p-3.75 transition-colors sm:gap-3.75',
				props.class,
			)
		"
	>
		<div class="flex items-center gap-1.5">
			<div class="bg-primary aspect-square w-5 rounded-sm" />
			<p class="-tracking-2 text-sm leading-2 font-semibold sm:text-base md:font-bold">{{ title }}</p>
		</div>

		<UiServerMeta
			v-if="meta"
			v-bind="meta"
		/>

		<UiLink
			v-bind="link"
			:aria-label="'Перейти на ' + title"
			class="absolute inset-0 rounded-sm"
		/>
	</div>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import type { UiServerMetaProps } from "./UiServerMeta.vue";
import type { UiLinkProps } from "../UiLink.vue";
import { twMerge } from "tailwind-merge";

export interface UiServerCardProps extends StyledComponentProps {
	title: string;
	meta?: UiServerMetaProps;
	link?: UiLinkProps;
}

const props = defineProps<UiServerCardProps>();
</script>
