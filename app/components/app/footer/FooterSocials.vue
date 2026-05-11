<template>
	<div :class="twMerge(!unstyled && 'flex gap-1.5 md:gap-2.5', props.class)">
		<UiLink
			v-for="(item, index) in items"
			:key="index"
			:aria-label="item.label"
			v-bind="item.link"
			class="bg-highlighted hover:bg-toned active:bg-muted aspect-square w-7.5 rounded-sm"
		/>
	</div>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import type { UiLinkProps } from "~/components/ui/UiLink.vue";
import { twMerge } from "tailwind-merge";

export interface FooterSocialsProps extends StyledComponentProps {
	items: { label?: string; to?: string; icon?: string | IconProps; link?: UiLinkProps }[];
}

const props = defineProps<FooterSocialsProps>();
</script>
