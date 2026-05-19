<template>
	<div
		:class="
			twMerge(
				!unstyled &&
					'group has-hover:bg-dimmed has-active:bg-highlighted has-active:text-obscure bg-obscure pc:p-5 relative flex flex-col gap-2.5 rounded-sm p-3.75 transition-colors sm:gap-3.75',
				props.class,
			)
		"
	>
		<div class="flex items-center gap-1.5">
			<div class="bg-primary aspect-square w-5 rounded-sm" />
			<p class="-tracking-2 text-sm leading-2 font-semibold transition-colors sm:text-base md:font-bold">{{ title }}</p>
		</div>

		<ServersMeta
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
import type { ServersMetaProps } from "./ServersMeta.vue";
import type { UiLinkProps } from "~/components/ui/UiLink.vue";
import { twMerge } from "tailwind-merge";

export interface ServersCardProps extends StyledComponentProps {
	title: string;
	meta?: ServersMetaProps;
	link?: UiLinkProps;
}

const props = defineProps<ServersCardProps>();
</script>
