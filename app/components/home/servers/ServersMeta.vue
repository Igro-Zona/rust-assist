<template>
	<div
		:class="
			twMerge(
				!unstyled &&
					'group-active:text-obscure text-toned/50 flex flex-wrap gap-x-1.25 gap-y-1.5 text-xs leading-none sm:gap-2.5 sm:text-sm',
				props.class,
			)
		"
	>
		<ServersAttr
			v-if="players"
			icon="assist:server-people"
			class="order-1"
		>
			{{ players }}/200
		</ServersAttr>

		<ServersAttr
			v-if="defence"
			:icon="{ name: 'assist:server-security-shield', class: 'bla' }"
			class="order-2 uppercase md:order-3"
		>
			{{ defence }}
		</ServersAttr>

		<ServersAttr
			v-if="map"
			:icon="{
				name: 'assist:server-map',
				class: 'size-4',
			}"
			class="pc:order-5 order-3 py-0.5 text-sm sm:hidden md:flex lg:hidden xl:order-4 xl:flex"
		>
			{{ map === "procedural" ? "Procedural Map" : "" }}
		</ServersAttr>

		<ServersAttr
			v-if="type"
			class="pc:order-3 order-5 xl:order-5"
		>
			{{ type === "pve" ? "PvE" : "PvP" }}
		</ServersAttr>

		<ServersAttr
			v-if="ip"
			:icon="{
				name: 'assist:server-russian-flag',
				class: 'size-3.75 sm:size-4.5',
			}"
			class="order-6 p-1.25 md:order-2"
		>
			{{ ip }}

			<template #trailing>
				<span class="inline-flex gap-0.5">
					<Icon
						name="assist:server-files-copy"
						class="size-3.75 transition-colors sm:size-4"
					/>
					<Icon
						name="assist:server-play-button"
						class="size-3.75 transition-colors sm:size-4"
					/>
				</span>
			</template>
		</ServersAttr>

		<ServersAttr
			v-if="connects"
			icon="assist:server-usb-port"
			class="pc:flex pc:order-4 order-7 hidden xl:order-6"
		>
			{{ connects }}
		</ServersAttr>

		<ServersAttr class="order-last min-h-6.25 pr-1.75"> +1 </ServersAttr>
	</div>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/global";
import { twMerge } from "tailwind-merge";

export interface ServersMetaProps extends StyledComponentProps {
	players?: number;
	defence?: "vac";
	type?: "pve" | "pvp";
	connects?: number;
	map?: "procedural";
	ip?: string;
}

const props = defineProps<ServersMetaProps>();
</script>
