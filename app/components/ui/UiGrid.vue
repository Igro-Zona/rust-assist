<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		:class="twMerge(!unstyled && 'grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3', props.class)"
	>
		<slot />
	</Primitive>
</template>

<script setup lang="ts">
import type { StyledPrimitiveComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

const props = defineProps<StyledPrimitiveComponentProps>();
</script>
