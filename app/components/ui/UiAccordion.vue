<!-- eslint-disable vue/no-v-html -->
<template>
	<AccordionRoot
		v-slot="{ modelValue }"
		:as="as"
		default-value="0"
		collapsible
		type="single"
		:unmount-on-hide="false"
		:class="twMerge(!unstyled && 'flex flex-col gap-1.25', props.class)"
	>
		<AccordionItem
			v-for="(item, index) in items"
			:key="index"
			:value="String(index)"
			:class="item.class"
		>
			<AccordionHeader as="h3">
				<AccordionTrigger
					as-child
					class="flex w-full min-w-0 cursor-pointer items-center justify-between gap-4 py-2.5"
				>
					<slot
						name="trigger"
						:item="item"
						:model-value="modelValue"
						:index="index"
					>
						<UiButton
							unstyled
							class="transition-[padding] data-[state=open]:pb-0"
						>
							<span class="truncate text-sm leading-1 font-semibold uppercase">
								{{ item.title }}
							</span>

							<Icon
								class="text-default"
								name="assist:chevron-down"
								size="20px"
							/>
						</UiButton>
					</slot>
				</AccordionTrigger>
			</AccordionHeader>

			<AccordionContent
				class="overflow-hidden data-[state=closed]:animate-[accordion-animation-up_200ms_ease-out] data-[state=open]:animate-[accordion-animation-down_200ms_ease-out]"
			>
				<slot
					:item="item"
					:model-value="modelValue"
					:index="index"
				/>
			</AccordionContent>
		</AccordionItem>
	</AccordionRoot>
</template>

<script setup lang="ts">
import type { Class, StyledPrimitiveComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export type AccordionItem = {
	title: string;
	class?: Class;
	[key: string]: unknown;
};

export interface FooterColumnProps extends StyledPrimitiveComponentProps {
	items?: AccordionItem[];
}

const props = defineProps<FooterColumnProps>();
</script>
