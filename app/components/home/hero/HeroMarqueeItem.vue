<!-- eslint-disable vue/html-self-closing -->
<template>
	<UiLink
		v-bind="link"
		:unstyled="unstyled"
		:class="twMerge('bg-default hover:bg-primary active:bg-primary/80 aspect-square rounded-xs transition-colors', props.class)"
		:aria-label="link?.label"
	>
		<img
			:src="image"
			alt=""
			class="block h-full w-full"
		/>
	</UiLink>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import type { UiLinkProps } from "~/components/ui/UiLink.vue";
import { twMerge } from "tailwind-merge";

export interface HeroMarqueeItemProps extends StyledComponentProps {
	image: string;
	link?: UiLinkProps;
}

const props = defineProps<HeroMarqueeItemProps>();
</script>
