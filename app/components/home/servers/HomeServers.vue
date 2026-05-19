<template>
	<UiSection title="рекомендуемые сервера">
		<UiGrid>
			<ServersCard
				v-for="(server, index) in servers.slice(0, 9)"
				:key="index"
				:class="[index > 4 && 'hidden sm:flex', index > 5 && 'hidden sm:hidden lg:flex']"
				v-bind="server"
			/>
		</UiGrid>
	</UiSection>
</template>

<script setup lang="ts">
import type { ServersCardProps } from "./ServersCard.vue";

const servers: ServersCardProps[] = [
	{
		title: "Сервер «Лучший»",
		meta: {
			players: 5,
			defence: "vac",
			map: "procedural",
			type: "pve",
			ip: "185.189.255.122:08658",
			connects: 2621,
		},
	},
	{
		title: "Сервер «Лучший»",
		meta: {
			players: 5,
			defence: "vac",
			map: "procedural",
			type: "pve",
			ip: "185.189.255.122:08658",
			connects: 2621,
		},
	},
	{
		title: "Сервер «Лучший»",
		meta: {
			players: 5,
			defence: "vac",
			map: "procedural",
			type: "pve",
			ip: "185.189.255.122:08658",
			connects: 2621,
		},
	},
	{
		title: "Сервер «Лучший»",
		meta: {
			players: 5,
			defence: "vac",
			map: "procedural",
			type: "pve",
			ip: "185.189.255.122:08658",
			connects: 2621,
		},
	},
	{
		title: "Сервер «Лучший»",
		meta: {
			players: 5,
			defence: "vac",
			map: "procedural",
			type: "pve",
			ip: "185.189.255.122:08658",
			connects: 2621,
		},
	},
	{
		title: "Сервер «Лучший»",
		meta: {
			players: 5,
			defence: "vac",
			map: "procedural",
			type: "pve",
			ip: "185.189.255.122:08658",
			connects: 2621,
		},
	},
	{
		title: "Сервер «Лучший»",
		meta: {
			players: 5,
			defence: "vac",
			map: "procedural",
			type: "pve",
			ip: "185.189.255.122:08658",
			connects: 2621,
		},
	},
	{
		title: "Сервер «Лучший»",
		meta: {
			players: 5,
			defence: "vac",
			map: "procedural",
			type: "pve",
			ip: "185.189.255.122:08658",
			connects: 2621,
		},
	},
];
</script>
