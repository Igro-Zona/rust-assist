<template>
	<UiLink
		v-bind="props"
		:class="twMerge(!unstyled && 'bg-highlighted flex items-center gap-2.5 rounded-xs p-5', props.class)"
	>
		<div class="bg-primary aspect-square w-9 rounded-xs" />

		<div class="flex grow flex-col justify-between">
			<p class="text-dimmed text-xl leading-none font-bold uppercase">rust assist</p>
			<p
				ref="el"
				class="text-muted text-xs leading-2 font-medium"
			>
				{{ displayText }}
			</p>
		</div>

		<Icon
			class="text-muted"
			name="assist:chevron-right"
			size="22px"
		/>
	</UiLink>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import type { UiLinkProps } from "~/components/ui/UiLink.vue";
import { twMerge } from "tailwind-merge";

export interface FooterDownloadButtonProps extends StyledComponentProps, UiLinkProps {}

const props = defineProps<FooterDownloadButtonProps>();

const el = useTemplateRef("el");
const { displayText } = useResponsiveText(el, "Установить приложение сейчас", "Скачать приложение");
</script>
