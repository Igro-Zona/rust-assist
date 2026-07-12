<!-- eslint-disable vue/html-self-closing -->
<template>
	<form
		class="relative"
		@submit.prevent
	>
		<Label
			class="sr-only"
			for="search"
		>
			Поиск по сайту
		</Label>
		<UiInput
			v-model="query"
			:class="twMerge(!unstyled && 'bg-obscure box-border rounded-xs ps-12 pe-2.5', props.class)"
			:input="{ placeholder: 'Поиск', class: 'h-10', type: 'text', id: 'search', autocomplete: 'off' }"
			:icon="{
				name: 'assist:search',
				size: '24px',
				class: 'text-muted in-focus-within:text-default transition-colors',
			}"
		/>

		<div
			v-if="query.length > 0"
			class="bg-obscure outline-dimmed absolute right-0 mt-2 h-96.5 min-w-68.25 overflow-y-auto rounded-xs p-5 outline"
		>
			<div class="flex flex-col gap-5">
				<div
					v-for="section in filteredSections"
					:key="section.name"
					class="flex flex-col gap-2.5"
				>
					<p class="text-toned text-xs leading-none font-medium">{{ section.name }}</p>
					<ul class="flex flex-col gap-2.5">
						<li
							v-for="item in section.items"
							:key="item?.title"
						>
							<UiLink
								v-bind="item?.link"
								class="group flex items-center gap-2.5"
							>
								<img
									:src="item?.icon"
									alt=""
									class="inline-block aspect-square w-8.75"
								/>

								<div class="flex flex-col gap-1.25">
									<span class="group-hover:text-primary text-toned text-xs leading-none font-medium transition-colors">
										{{ item?.label }}
									</span>
									<p class="group-hover:text-highlighted text-sm leading-none font-semibold transition-colors">
										{{ item?.title }}
									</p>
								</div>
							</UiLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</form>
</template>

<script setup lang="ts">
import type { UiInputProps } from "~/components/ui/UiInput.vue";
import { twMerge } from "tailwind-merge";

const props = defineProps<UiInputProps>();

const query = ref("");
const { filteredSections } = useDataFetch(query);
</script>
