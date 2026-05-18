<template>
	<article
		:aria-label="title"
		:class="twMerge(!unstyled && 'group bg-obscure relative overflow-hidden rounded-xs transition-colors', props.class)"
	>
		<slot name="header">
			<div class="overflow-hidden">
				<NuxtPicture
					v-if="src"
					quality="90"
					densities="1x 2x"
					format="avif"
					legacy-format="webp"
					:src="src"
					width="400"
					height="130"
					class="block h-32.5 w-full 2xl:h-36.25"
					:img-attrs="{
						alt: '',
						class: 'object-cover w-full h-full group-hover:scale-105 group-active:scale-105 transition-transform',
					}"
					sizes="400px"
				/>
			</div>
		</slot>

		<slot name="content">
			<div class="flex flex-col gap-2.5 p-3.75 md:p-5">
				<slot name="body">
					<div class="flex flex-col gap-2.5">
						<h3 class="-tracking-2 sm:-tracking-3 leading-2 font-semibold sm:leading-1 md:text-xl">{{ title }}</h3>

						<div
							v-if="date || meta"
							class="flex gap-1.5"
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

						<p
							v-if="descrption"
							class="line-clamp-4 pr-5 text-xs leading-2 md:text-sm md:leading-3"
						>
							{{ descrption }}
						</p>
					</div>
				</slot>

				<slot name="footer">
					<div class="mt-auto hidden justify-end sm:flex">
						<UiLink
							v-bind="link"
							label="Подробнее"
							class="-tracking-2 bg-dimmed hover:bg-default rounded-[2px] px-2.5 py-1.5 text-xs leading-none md:px-7 md:py-2.25"
						/>
					</div>
				</slot>
			</div>
		</slot>

		<slot />
	</article>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import type { UiLinkProps } from "./UiLink.vue";
import { twMerge } from "tailwind-merge";

export interface UiReviewCardProps extends StyledComponentProps {
	title: string;
	descrption?: string;
	src?: string;
	link?: UiLinkProps;
	date?: string;
	meta?: string[];
}

const props = defineProps<UiReviewCardProps>();
const meta = ref([props.date, ...(props.meta ? props.meta : [])]);
</script>
