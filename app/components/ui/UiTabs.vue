<template>
	<TabsRoot
		default-value="0"
		:orientation="orientation"
		:class="props.class"
	>
		<TabsList :class="listClass">
			<TabsTrigger
				v-for="(item, index) in items"
				:key="index"
				:value="String(index)"
				as-child
			>
				<slot
					name="trigger"
					:item="item"
					:index="index"
				/>
			</TabsTrigger>
		</TabsList>
		<TabsContent
			v-for="(item, index) in items"
			:key="index"
			:value="String(index)"
			:class="contentClass"
		>
			<slot
				:item="item"
				:index="index"
			/>
		</TabsContent>
	</TabsRoot>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import type { Class, StyledComponentProps } from "~/global";
import type { TabsRootProps } from "reka-ui";

export interface UiTabsProps extends StyledComponentProps, TabsRootProps {
	items: any[];
	listClass?: Class;
	contentClass?: Class;
}

const props = defineProps<UiTabsProps>();
</script>
