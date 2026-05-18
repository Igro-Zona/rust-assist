<template>
	<NuxtLink
		v-bind="linkProps"
		:to="to ?? '#!'"
		:data-active="isActive"
		:external="external ?? isExternal"
		:target="target ?? (external || isExternal ? '_blank' : undefined)"
		:aria-current="resolveAriaCurrent"
		:class="
			twMerge(
				!unstyled && 'hover:text-default active:text-highlighted inline-flex cursor-pointer transition-colors',
				noEvents && 'pointer-events-none cursor-default',
				props.class,
			)
		"
	>
		<slot>
			{{ label }}
		</slot>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import type { NuxtLinkProps } from "#app";
import type { AriaAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { twMerge } from "tailwind-merge";

export interface UiLinkProps extends Omit<NuxtLinkProps, "noPrefetch">, StyledComponentProps {
	label?: string;
	noEvents?: true;
	ariaCurrent?: AriaAttributes["aria-current"];
}

const props = defineProps<UiLinkProps>();
const linkProps = reactiveOmit(props, ["label", "noEvents", "unstyled", "ariaCurrent", "to", "class"]);

const route = useRoute();
const targetPath = computed(() => props.to?.toString());
const resolveAriaCurrent = computed(() => {
	if (props.ariaCurrent) return props.ariaCurrent;
	if (!targetPath.value) return undefined;
	if (route.path === targetPath.value) return "page";
	return route.path.startsWith(targetPath.value) ? "step" : undefined;
});
const isActive = computed(() => route.path === targetPath.value);
const isExternal = computed(() => isExternalUrl(targetPath.value));
</script>
