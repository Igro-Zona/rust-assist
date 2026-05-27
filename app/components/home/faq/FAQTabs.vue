<!-- eslint-disable vue/no-v-html -->
<template>
	<TabsRoot
		default-value="0"
		:unmount-on-hide="false"
		:class="twMerge('flex flex-col gap-2.5 sm:gap-5', props.class)"
	>
		<TabsList class="flex flex-wrap gap-1.25 md:gap-2.5">
			<TabsTrigger
				v-for="(item, index) in items"
				:key="index"
				:value="String(index)"
				as-child
				class="text-sm leading-1 font-semibold md:text-base lg:text-xl"
			>
				<UiButton
					class="bg-obscure hover:bg-dimmed active:bg-primary data-active:bg-primary pc:px-4 rounded-xs px-2 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.75 lg:px-10"
				>
					{{ item.label }}
				</UiButton>
			</TabsTrigger>
		</TabsList>
		<TabsContent
			v-for="(item, index) in items"
			:key="index"
			:value="String(index)"
		>
			<UiAccordion :items="item.entries">
				<template #trigger="{ modelValue, item: entry, index: idx }">
					<UiButton
						unstyled
						class="px-3.75 text-left"
					>
						<span class="text-sm leading-none font-semibold">
							{{ entry.title }}
						</span>

						<Icon
							name="assist:plus"
							size="24px"
							:class="modelValue === String(idx) && 'text-obscure transition-colors'"
						/>
					</UiButton>
				</template>

				<template #default="{ item: entry }">
					<div
						class="text-toned px-3.75 pb-6 text-xs leading-3 font-medium [&_li]:ml-5"
						v-html="entry.value"
					/>
				</template>
			</UiAccordion>
		</TabsContent>
	</TabsRoot>
</template>

<script setup lang="ts">
import type { Class, StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

type TabsItem = {
	label: string;
	entries: {
		title: string;
		value?: string;
		class?: Class;
	}[];
};

export interface FAQTabsProps extends StyledComponentProps {
	items: TabsItem[];
}

const props = defineProps<FAQTabsProps>();
</script>
