<template>
	<DialogRoot
		v-slot="{ close }"
		:open="open"
		:default-open="defaultOpen"
		:modal="modal"
		v-bind="{ $attrs, class: undefined, id: undefined }"
		@update:open="updateOpen"
	>
		<DialogPortal
			:to="to"
			:force-mount="forceMount"
			:disabled="disabled"
			:defer="defer"
		>
			<DialogOverlay
				v-if="overlay"
				class="bg-obscure/75 fixed inset-0"
			/>

			<DialogContent
				:id="$attrs.id"
				:as="as"
				:as-child="asChild"
				:class="props.class"
				@after-enter="emit('after:enter')"
				@after-leave="emit('after:leave')"
				@pointer-down-outside="pointerDownOutside"
			>
				<DialogTitle
					v-if="title"
					class="sr-only"
				>
					{{ title }}
				</DialogTitle>

				<DialogDescription
					v-if="description"
					class="sr-only"
				>
					{{ description }}
				</DialogDescription>

				<slot :close="close" />
			</DialogContent>
		</DialogPortal>
	</DialogRoot>
</template>

<script setup lang="ts">
import type { StyledPrimitiveComponentProps } from "~/global";
import type { PointerDownOutsideEvent } from "reka-ui";

export interface UiModalProps extends StyledPrimitiveComponentProps {
	open?: boolean;
	defaultOpen?: boolean;
	modal?: boolean;
	to?: string | HTMLElement;
	forceMount?: boolean;
	disabled?: boolean;
	defer?: boolean;
	overlay?: boolean;
	title?: string;
	description?: string;
}

defineOptions({ inheritAttrs: false });
const emit = defineEmits(["update:open", "after:enter", "after:leave"]);
function updateOpen(value: boolean) {
	emit("update:open", value);
}

const props = withDefaults(defineProps<UiModalProps>(), {
	open: false,
	defaultOpen: false,
	modal: true,
	to: "body",
	forceMount: false,
	disabled: false,
	defer: true,
	overlay: true,
	title: undefined,
	description: undefined,
});

function pointerDownOutside(e: PointerDownOutsideEvent) {
	const target = e.detail.originalEvent.target as HTMLElement;
	if (target?.isConnected) return;
	e.preventDefault();
}
</script>
