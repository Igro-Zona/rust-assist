<template>
	<UiItem
		v-bind="props"
		class="pc:p-5 pc:gap-3.75 relative flex-col p-2.5 sm:gap-0 sm:p-2.5 md:gap-1.25 md:p-5 lg:gap-3.75"
	>
		<div class="-tracking-2 text-toned group-active:text-dimmed relative z-1 mt-auto flex flex-col gap-1.25 leading-2 font-semibold">
			<div class="inline-flex flex-col">
				<span
					v-if="description"
					class="pc:leading-2 text-[0.625rem] leading-1 font-medium transition-colors md:text-xs"
				>
					{{ description }}
				</span>
				<p class="text-default group-active:text-obscure text-sm transition-colors md:text-base md:font-bold">
					{{ title }}
				</p>
			</div>

			<span
				v-if="price"
				class="text-xs transition-colors md:text-sm"
			>
				${{ price }}
			</span>
		</div>

		<template #footer>
			<div class="absolute inset-0 top-3 z-0 flex justify-center">
				<Icon
					name="assist:points-skin"
					class="pc:max-h-27.5 pc:max-w-36.5 h-full max-h-22.5 w-full max-w-30 mask-[radial-gradient(circle_at_center,rgba(53,59,64,1)_0%,rgba(34,34,34,0)_70%)] mask-cover text-[#484848] group-hover:text-[#939393] group-active:text-[#242424] sm:max-h-22.5 sm:max-w-30 md:max-h-27.5 md:max-w-36.5"
				/>
			</div>
		</template>
	</UiItem>
</template>

<script setup lang="ts">
import type { UiItemProps } from "~/components/ui/UiItem.vue";

export interface SkinsItemProps extends Omit<UiItemProps, "icon"> {
	price?: number;
}

const props = defineProps<SkinsItemProps>();
</script>
