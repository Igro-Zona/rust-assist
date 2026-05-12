<template>
	<nav :class="twMerge(!unstyled && 'w-full', props.class)">
		<div
			v-for="(item, index) in items"
			:key="index"
			class="flex break-inside-avoid flex-col gap-3.5"
		>
			<h3 class="text-xl leading-1 font-semibold">{{ item.title }}</h3>
			<ul
				v-if="item.links"
				class="space-y-2.25"
			>
				<li
					v-for="(link, idx) in item.links"
					:key="idx"
					class="text-toned text-xs leading-2"
				>
					<UiLink v-bind="link" />
				</li>
			</ul>
		</div>

		<slot />
	</nav>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import type { FooterItem } from "./AppFooter.vue";
import { twMerge } from "tailwind-merge";

export interface FooterColumnsProps extends StyledComponentProps {
	items?: FooterItem[];
}

const props = defineProps<FooterColumnsProps>();
</script>
