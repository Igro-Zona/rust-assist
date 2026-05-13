<template>
	<AccordionRoot
		as="nav"
		collapsible
		type="single"
		:class="props.class"
		@update:model-value="$emit('update:modelValue', $event)"
	>
		<AccordionItem
			v-for="(item, index) in items"
			:key="index"
			:value="String(index)"
		>
			<AccordionHeader as="h3">
				<AccordionTrigger
					class="flex w-full min-w-0 cursor-pointer items-center justify-between gap-4 py-2.5 transition-[padding] data-[state=open]:pb-0"
				>
					<span class="truncate text-sm leading-1 font-semibold uppercase">
						{{ item.title }}
					</span>

					<Icon
						class="text-default"
						name="assist:chevron-down"
						size="20px"
					/>
				</AccordionTrigger>
			</AccordionHeader>

			<AccordionContent
				v-if="item.links"
				class="overflow-hidden data-[state=closed]:animate-[accordion-animation-up_200ms_ease-out] data-[state=open]:animate-[accordion-animation-down_200ms_ease-out]"
			>
				<ul class="text-toned space-y-1.5 py-2.5 pl-2.5 text-xs leading-2 font-medium">
					<li
						v-for="(link, idx) in item.links"
						:key="idx"
					>
						<UiLink v-bind="link" />
					</li>
				</ul>
			</AccordionContent>
		</AccordionItem>
	</AccordionRoot>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import type { FooterItem } from "./AppFooter.vue";

export interface FooterColumnProps extends StyledComponentProps {
	items?: FooterItem[];
}

defineEmits(["update:modelValue"]);
const props = defineProps<FooterColumnProps>();
</script>
