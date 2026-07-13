<template>
	<header class="relative z-10">
		<UiContainer class="flex items-center justify-between py-7.5 sm:py-4.5 md:h-25">
			<UiLogo :class="modelValue !== '' ? '[&>div]:bg-primary [&>div]:group-hover:bg-primary' : ''" />

			<HeaderNav @update:model-value="(val) => (modelValue = val)" />

			<HeaderInput class="hidden max-w-40 lg:inline-flex xl:max-w-none" />

			<HeaderActions class="lg:hidden" />
		</UiContainer>
	</header>
</template>

<script setup lang="ts">
const modelValue = ref("");

useHead({
	bodyAttrs: {
		class: computed(() => (modelValue.value !== "" ? "overflow-hidden" : "")),
	},
});
</script>
