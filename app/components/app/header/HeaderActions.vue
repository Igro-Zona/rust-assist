<!-- eslint-disable vue/html-self-closing -->
<template>
	<div :class="twMerge(!unstyled && 'flex shrink-0 items-center gap-1.25', props.class)">
		<UiButton
			aria-label="Поиск"
			aria-haspopup="dialog"
			class="hover:text-toned active:text-highlighted"
			@click="toggleOpen"
		>
			<Icon
				name="assist:search"
				size="21px"
			/>
		</UiButton>
		<UiLink
			aria-label="Оценить наше приложение"
			class="hover:text-toned active:text-highlighted"
		>
			<Icon
				name="assist:heart"
				size="21px"
			/>
		</UiLink>
		<UiButton
			aria-label="Открыть меню"
			class="hover:text-toned active:text-highlighted"
		>
			<Icon
				name="assist:menu"
				size="21px"
			/>
		</UiButton>
	</div>

	<UiModal
		id="slideover"
		v-model:open="open"
		title="Menú"
		description="lol"
		unstyled
		class="bg-default fixed inset-0 p-7.5"
	>
		<form
			class="relative flex h-full flex-col gap-7.5"
			@submit.prevent
		>
			<div class="flex items-center justify-between gap-2.5">
				<Label
					class="sr-only"
					for="search-m"
				>
					Поиск по сайту
				</Label>
				<LazyUiInput
					v-model="query"
					class="w-full ps-6 sm:ps-10"
					:input="{
						placeholder: 'Поиск',
						class: 'h-5 text-sm leading-none w-full sm:h-10 sm:text-base',
						type: 'text',
						id: 'search-m',
						autocomplete: 'off',
					}"
					:icon="{
						name: 'assist:search',
						size: '20px',
						class: 'text-muted in-focus-within:text-default transition-colors -ms-3.75 sm:size-6.25',
					}"
				/>

				<UiButton
					aria-label="Закрыть поиск"
					aria-controls="slideover"
					class="hover:text-toned active:text-highlighted"
					@click="toggleOpen"
				>
					<Icon
						name="assist:x"
						size="20px"
						class="sm:size-6.25"
					/>
				</UiButton>
			</div>

			<div
				v-if="query.length > 0"
				class="relative flex scrollbar-gutter-stable flex-col gap-5 overflow-y-auto"
			>
				<div
					v-for="section in filteredSections"
					:key="section.name"
					class="mr-2 flex flex-col gap-2.5"
				>
					<div class="flex justify-between gap-5 text-[0.625rem] leading-none font-medium sm:text-sm">
						<p class="text-toned">{{ section.name }}</p>

						<UiLink
							class="hover:text-toned active:text-default items-center gap-px text-[#737373]"
							:to="section.to"
						>
							<span>Ещё</span>
							<Icon
								name="assist:arrow-right-down"
								size="10px"
								class="-mr-1 -mb-1 sm:size-4"
							/>
						</UiLink>
					</div>

					<ul class="flex flex-col gap-1.25">
						<li
							v-for="item in section.items"
							:key="item?.title"
							class="bg-obscure p-2.5 sm:p-4"
						>
							<UiLink
								v-bind="item?.link"
								class="group flex items-center gap-2.5"
							>
								<img
									:src="item?.icon"
									alt=""
									class="inline-block aspect-square w-7.5 sm:w-10"
								/>

								<div class="flex flex-col gap-1.25">
									<span
										class="group-hover:text-primary text-toned text-[0.625rem] leading-none font-medium transition-colors sm:text-sm"
									>
										{{ item?.label }}
									</span>
									<p class="group-hover:text-highlighted text-xs leading-1 font-semibold transition-colors sm:text-base">
										{{ item?.title }}
									</p>
								</div>
							</UiLink>
						</li>
					</ul>
				</div>
			</div>

			<div
				v-else
				class="text-toned text-center text-sm sm:text-base"
			>
				No results
			</div>
		</form>
	</UiModal>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

const props = defineProps<StyledComponentProps>();

const query = ref("");
const { filteredSections } = useDataFetch(query);

const open = defineModel<boolean>("open", { default: false });
function toggleOpen() {
	open.value = !open.value;
}

const route = useRoute();
watch(
	() => route.fullPath,
	() => (open.value = false),
);

useHead({
	htmlAttrs: {
		style: computed(() => (open.value === true ? "scrollbar-gutter: auto" : "")),
	},
});
</script>
