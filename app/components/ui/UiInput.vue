<!-- eslint-disable vue/html-self-closing -->
<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		:class="twMerge(!unstyled && 'relative inline-flex items-center', props.class)"
	>
		<span
			v-if="icon || $slots.leading"
			class="absolute inset-y-0 inset-s-0 flex items-center ps-3.75"
		>
			<slot name="leading">
				<Icon
					v-if="icon"
					v-bind="normalizeIconProps(icon)"
				/>
			</slot>
		</span>

		<input
			v-model="model"
			class="w-full appearance-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-75"
			v-bind="input"
		/>

		<span
			v-if="trailingIcon || $slots.trailing"
			class="absolute inset-y-0 inset-e-0 flex items-center pe-3.75"
		>
			<slot name="trailing">
				<Icon
					v-if="trailingIcon"
					v-bind="normalizeIconProps(trailingIcon)"
				/>
			</slot>
		</span>
	</Primitive>
</template>

<script setup lang="ts">
import type { StyledPrimitiveComponentProps } from "~/global";
import type { InputHTMLAttributes } from "vue";
import { twMerge } from "tailwind-merge";

export interface UiInputProps extends StyledPrimitiveComponentProps {
	input?: InputHTMLAttributes;
	icon?: string | IconProps;
	trailingIcon?: string | IconProps;
}

const props = defineProps<UiInputProps>();
const model = defineModel<string>();
</script>
