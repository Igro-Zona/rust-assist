<template>
	<UiGrid
		unstyled
		class="grid animate-[marquee-animation_20s_linear_infinite] auto-cols-max grid-flow-col grid-rows-2 gap-2.5 backface-hidden"
	>
		<template
			v-for="i in repeat ?? 3"
			:key="i"
		>
			<template
				v-for="(item, index) in items"
				:key="index"
			>
				<HeroMarqueeItem
					v-if="!('subitems' in item)"
					v-bind="item as HeroMarqueeItemProps"
					class="max-w-24.5 p-3.5"
				/>

				<UiGrid
					v-else
					unstyled
					class="grid grid-cols-2 grid-rows-2 gap-2.5"
				>
					<HeroMarqueeItem
						v-for="(subitem, idx) in item.subitems"
						:key="idx"
						v-bind="subitem"
						class="max-w-11 p-1"
					/>
				</UiGrid>
			</template>
		</template>
	</UiGrid>
</template>

<script setup lang="ts">
import type { HeroMarqueeItemProps } from "./HeroMarqueeItem.vue";

export type MarqueeNode = HeroMarqueeItemProps | { subitems?: HeroMarqueeItemProps[] };

export interface HeroMarqueeProps {
	items: MarqueeNode[];
	repeat?: number;
}

defineProps<HeroMarqueeProps>();
</script>
