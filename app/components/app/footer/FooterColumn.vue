<template>
	<div :class="twMerge(!unstyled && 'flex break-inside-avoid flex-col gap-4', props.class)">
		<h3 class="leading-none">{{ title }}</h3>
		<ul
			v-if="props.items"
			class="space-y-2.5"
		>
			<li
				v-for="(item, index) in props.items"
				:key="index"
				class="text-toned text-xs leading-2 font-medium"
			>
				<a :href="item.to">
					{{ item.name }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface FooterColumnProps extends StyledComponentProps {
	title: string;
	items?: { name: string; to: string }[];
}

const props = defineProps<FooterColumnProps>();
</script>
