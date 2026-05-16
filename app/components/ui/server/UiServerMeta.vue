<template>
	<div
		:class="
			twMerge(!unstyled && 'text-toned/50 flex flex-wrap gap-x-1.25 gap-y-1.5 text-xs leading-0 sm:gap-2.5 sm:text-sm', props.class)
		"
	>
		<UiServerAttr
			v-if="players"
			icon="assist:server-people"
			class="order-1"
		>
			<span>{{ players }}/200</span>
		</UiServerAttr>

		<UiServerAttr
			v-if="defence"
			icon="assist:server-security-shield"
			class="order-2 md:order-3"
		>
			<span class="uppercase">{{ defence }}</span>
		</UiServerAttr>

		<UiServerAttr
			v-if="map"
			:icon="{
				name: 'assist:server-map',
				class: 'size-4',
			}"
			class="pc:order-5 order-3 py-0.5 text-sm sm:hidden md:flex lg:hidden xl:order-4 xl:flex"
		>
			<span>{{ map === "procedural" ? "Procedural Map" : "" }}</span>
		</UiServerAttr>

		<UiServerAttr
			v-if="type"
			class="pc:order-3 order-5 xl:order-5"
		>
			<span>{{ type === "pve" ? "PvE" : "PvP" }}</span>
		</UiServerAttr>

		<UiServerAttr
			v-if="ip"
			:icon="{
				name: 'assist:server-russian-flag',
				class: 'size-3.75 sm:size-4.5',
			}"
			class="order-6 p-1.25 md:order-2"
		>
			<span>{{ ip }}</span>

			<span class="inline-flex gap-0.5">
				<Icon
					name="assist:server-files-copy"
					class="size-3.75 sm:size-4"
				/>
				<Icon
					name="assist:server-play-button"
					class="size-3.75 sm:size-4"
				/>
			</span>
		</UiServerAttr>

		<UiServerAttr
			v-if="connects"
			icon="assist:server-usb-port"
			class="pc:flex pc:order-4 order-7 hidden xl:order-6"
		>
			<span>{{ connects }}</span>
		</UiServerAttr>

		<UiServerAttr class="order-last min-h-6.25 pr-1.75"> +1 </UiServerAttr>
	</div>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface UiServerMetaProps extends StyledComponentProps {
	players?: number;
	defence?: "vac";
	type?: "pve" | "pvp";
	connects?: number;
	map?: "procedural";
	ip?: string;
}

const props = defineProps<UiServerMetaProps>();
</script>
