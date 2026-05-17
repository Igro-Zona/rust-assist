<!-- eslint-disable vue/html-self-closing -->
<template>
	<UiLink
		:to="to"
		:class="
			twMerge(
				!unstyled &&
					'bg-obscure hover:bg-dimmed group active:bg-highlighted active:text-obscure pc:p-5 pc:gap-3.75 relative flex aspect-square min-h-auto flex-col justify-between gap-2.5 rounded-xs p-2.5 sm:gap-0 sm:p-2.5 md:gap-1.25 md:p-5 lg:gap-3.75',
				props.class,
			)
		"
	>
		<div class="absolute inset-0 top-3 z-0 flex justify-center">
			<Icon
				name="assist:points-skin"
				class="pc:max-h-27.5 pc:max-w-36.5 h-full max-h-22.5 w-full max-w-30 mask-[radial-gradient(circle_at_center,rgba(53,59,64,1)_0%,rgba(34,34,34,0)_70%)] mask-cover text-[#484848] group-hover:text-[#939393] group-active:text-[#242424] sm:max-h-22.5 sm:max-w-30 md:max-h-27.5 md:max-w-36.5"
			/>
		</div>

		<img
			v-if="image"
			:src="image"
			alt=""
			class="pc:mt-1.5 pc:size-20 relative z-1 mt-2.5 size-17.5 self-center sm:size-17.5 md:mt-2.5 md:size-20"
		/>

		<div class="-tracking-2 text-toned group-active:text-dimmed relative z-1 mt-auto flex flex-col gap-1.25 font-semibold">
			<div class="inline-flex flex-col">
				<span
					v-if="description"
					class="pc:leading-2 text-[0.625rem] leading-1 font-medium transition-colors md:text-xs"
					>{{ description }}</span
				>
				<p class="text-default group-active:text-obscure text-sm leading-2 transition-colors md:text-base md:font-bold">
					{{ title }}
				</p>
			</div>

			<span
				v-if="price"
				class="text-xs leading-2 transition-colors md:text-sm"
				>${{ price }}</span
			>
		</div>
	</UiLink>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface UiItemSellableProps extends StyledComponentProps {
	title: string;
	description?: string;
	image?: string;
	price?: number;
	to?: string;
}

const props = defineProps<UiItemSellableProps>();
</script>
