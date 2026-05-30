<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		:class="twMerge(!unstyled && 'relative mx-auto w-full max-w-(--ui-container) px-7.5 sm:px-17.5', props.class)"
	>
		<slot />
	</Primitive>
</template>

<script setup lang="ts">
import type { StyledPrimitiveComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

const props = defineProps<StyledPrimitiveComponentProps>();
</script>
