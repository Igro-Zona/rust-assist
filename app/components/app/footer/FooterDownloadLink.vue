<template>
	<UiLink
		v-bind="props"
		:class="
			twMerge(
				!unstyled &&
					'group bg-highlighted hover:bg-default active:bg-dimmed text-muted flex items-center gap-2.5 rounded-xs p-5 **:data-trans:transition-colors md:p-4 lg:p-5',
				props.class,
			)
		"
	>
		<div class="bg-primary aspect-square w-9 rounded-xs" />

		<div class="flex grow flex-col justify-between">
			<p
				class="text-dimmed group-hover:text-highlighted group-active:text-highlighted text-xl leading-none font-bold uppercase"
				data-trans
			>
				rust assist
			</p>
			<p
				ref="el"
				class="group-hover:text-default group-active:text-default text-xs leading-2 font-medium"
				data-trans
			>
				{{ displayText }}
			</p>
		</div>

		<Icon
			class="group-hover:text-default group-active:text-default"
			name="assist:chevron-right"
			size="22px"
			data-trans
		/>
	</UiLink>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import type { UiLinkProps } from "~/components/ui/UiLink.vue";
import { twMerge } from "tailwind-merge";

export interface FooterDownloadLinkProps extends StyledComponentProps, UiLinkProps {}

const props = defineProps<FooterDownloadLinkProps>();

const el = useTemplateRef("el");
const { displayText } = useResponsiveText(el, "Установить приложение сейчас", "Скачать приложение", 70);
</script>
