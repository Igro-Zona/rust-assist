<template>
	<div :class="twMerge(!unstyled && 'text-toned flex gap-1.5 text-base', props.class)">
		<UiButton
			:class="['hover:text-default leading-1 uppercase', locale === 'ru' && 'text-highlighted font-semibold']"
			aria-label="Переключиться на русский"
			label="ru"
			@click="setLocale('ru')"
		/>

		<div class="bg-toned w-0.5" />

		<UiButton
			:class="['hover:text-default leading-1 uppercase', locale === 'en' && 'text-highlighted font-semibold']"
			aria-label="Переключиться на английский"
			label="en"
			@click="setLocale('en')"
		/>
	</div>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

const { locale, setLocale } = useLocale();
const props = defineProps<StyledComponentProps>();
</script>
