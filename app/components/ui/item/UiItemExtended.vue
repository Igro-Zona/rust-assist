<!-- eslint-disable vue/html-self-closing -->
<template>
	<UiLink
		:to="to"
		:class="
			twMerge(
				!unstyled &&
					'bg-obscure hover:bg-dimmed group active:bg-highlighted active:text-obscure pc:p-5 relative flex items-stretch justify-between gap-4 rounded-xs p-3.75',
				props.class,
			)
		"
	>
		<div class="absolute inset-0 z-0 flex items-center justify-end">
			<Icon
				name="assist:points"
				class="mask-repeat-no-repeat mask-size-cover pc:max-h-20 pc:max-w-57 h-full max-h-17 w-full max-w-43 mask-[linear-gradient(70deg,rgba(34,34,34,0)_0%,rgba(34,34,34,1)_100%)] text-[#484848]/30 group-hover:text-[#939393]/30 group-active:text-[#242424]/30"
			/>
		</div>

		<div class="relative z-1 flex flex-col justify-between gap-1.5">
			<p class="pc:-tracking-2 text-sm leading-2 font-semibold transition-colors">{{ title }}</p>
			<p
				v-if="description"
				class="text-toned group-active:text-obscure text-xs leading-1 font-medium transition-colors"
			>
				{{ description }}
			</p>
		</div>

		<div
			v-if="images"
			class="relative z-1 flex shrink-0 items-center"
		>
			<img
				v-for="(image, index) in images.slice(0, 3)"
				:key="index"
				:src="image"
				class="pc:size-14.5 size-10"
				alt=""
			/>
		</div>
	</UiLink>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface UiItemExtendedProps extends StyledComponentProps {
	title: string;
	description?: string;
	images?: string[];
	to?: string;
}

const props = defineProps<UiItemExtendedProps>();
</script>
