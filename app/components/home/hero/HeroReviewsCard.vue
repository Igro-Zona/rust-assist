<template>
	<article
		:aria-label="title"
		:class="twMerge(!unstyled && 'group bg-obscure relative overflow-hidden rounded-xs transition-colors', props.class)"
	>
		<NuxtPicture
			v-if="src"
			quality="90"
			densities="1x 2x"
			format="avif"
			legacy-format="webp"
			:src="src"
			width="300"
			height="120"
			class="block h-30 w-full md:h-36.25"
			:img-attrs="{
				alt: '',
				class: 'object-cover w-full h-full',
			}"
			sizes="300px md:400px 2xl:420px"
		/>

		<div class="flex flex-col gap-3.75 p-3.75 md:p-5">
			<h3 class="-tracking-2 leading-1 font-semibold md:text-xl">{{ title }}</h3>

			<div class="flex justify-between gap-4 md:items-center">
				<div
					v-if="date || meta"
					class="inline-flex flex-wrap gap-1 self-start"
				>
					<template
						v-for="(data, index) in meta"
						:key="index"
					>
						<span class="text-toned text-xs leading-3 tracking-normal">{{ data }}</span>

						<span
							v-if="index < meta.length - 1"
							class="bg-toned w-px"
						/>
					</template>
				</div>

				<UiLink
					v-bind="link"
					label="Подробнее"
					class="-tracking-2 bg-dimmed hover:bg-muted mt-2.5 rounded-[2px] px-3.25 py-1.75 text-xs leading-none md:mt-0 md:px-7 md:py-2.25"
				/>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import type { UiLinkProps } from "~/components/ui/UiLink.vue";
import { twMerge } from "tailwind-merge";

export interface HeroReviewsCardProps extends StyledComponentProps {
	title: string;
	descrption?: string;
	src?: string;
	link?: UiLinkProps;
	date?: string;
	meta?: string[];
}

const props = defineProps<HeroReviewsCardProps>();
const meta = ref([props.date, ...(props.meta ? props.meta : [])]);
</script>
