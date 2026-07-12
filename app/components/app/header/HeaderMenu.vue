<template>
	<UiContainer class="h-[85%]">
		<UiTabs
			:items="items"
			class="flex h-full overflow-x-auto py-5"
			list-class="shrink-0 w-40 border-r border-white/30 flex flex-col gap-5"
		>
			<template #trigger="{ item }">
				<UiButton
					class="text-default/40 hover:text-default active:text-default data-active:text-default [font-size:inherit] leading-none font-semibold transition-[font-size_color] active:text-xl data-active:text-xl"
					:label="item.label"
				/>
			</template>

			<template #default="{ item }">
				<nav class="flex gap-5 pl-11.5">
					<div
						v-for="(section, index) in item.sections"
						:key="index"
						class="text-default/40 flex w-50 flex-col gap-2.5 text-sm"
					>
						<h3 class="pb-1.25 text-base leading-none font-medium">{{ section.label }}</h3>

						<ul class="flex flex-col gap-2.5">
							<li
								v-for="(link, idx) in visibleLinks(section, index as number)"
								:key="idx"
								:style="{ transitionDelay: (idx as number) * 25 + 'ms' }"
							>
								<UiLink
									v-bind="link"
									class="hover:text-toned text-default leading-2 text-balance"
								/>
							</li>
						</ul>

						<UiButton
							v-if="section.items.length > 7"
							class="hover:text-toned items-center gap-1.25 leading-2 font-semibold"
							@click="toggleSection(index as number)"
						>
							{{ expandedSections.get(index as number) ? "Скрыть" : "Ещё" }}

							<Icon
								name="assist:chevron-down"
								size="12px"
								:class="expandedSections.get(index as number) ? 'rotate-180' : 'rotate-0'"
							/>
						</UiButton>
					</div>
				</nav>
			</template>
		</UiTabs>
	</UiContainer>
</template>

<script setup lang="ts">
import type { UiLinkProps } from "~/components/ui/UiLink.vue";

type Section = {
	label: string;
	items: UiLinkProps[];
};

export interface HeaderMenuProps {
	items: {
		label: string;
		sections: Section[];
	}[];
}

defineProps<HeaderMenuProps>();

const expandedSections = ref(new Map<number, boolean>());

function toggleSection(index: number) {
	expandedSections.value.set(index, !expandedSections.value.get(index));
}

function visibleLinks(section: Section, index: number) {
	return expandedSections.value.get(index) ? section.items : section.items.slice(0, 8);
}
</script>
