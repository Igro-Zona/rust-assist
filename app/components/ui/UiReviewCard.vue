<template>
	<article
		:aria-label="title"
		:class="twMerge(!unstyled && 'bg-muted rounded-[4px]', props.class)"
	>
		<slot name="header">
			<NuxtPicture
				v-if="src"
				:src="src"
				width="420"
				height="145"
				class="aspect-[2.9] w-full"
			/>
		</slot>

		<slot name="content">
			<div class="space-y-2.5 p-5">
				<slot name="body">
					<div class="flex flex-col gap-2.5">
						<h3 class="text-heading-sm">{{ title }}</h3>

						<div>hi</div>

						<p class="description line-clamp-4 text-[14px]">{{ descrption }}</p>
					</div>
				</slot>

				<slot name="footer">
					<div class="flex justify-end">
						<div v-if="to">Подробнее</div>
					</div>
				</slot>
			</div>
		</slot>
	</article>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface UiReviewCardProps extends StyledComponentProps {
	title: string;
	descrption?: string;
	src?: string;
	to?: string;
}

const props = defineProps<UiReviewCardProps>();
</script>

<style scoped>
.description {
	line-height: 1.3;
	letter-spacing: -0.03em;
}
</style>
