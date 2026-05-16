<template>
	<UiSection title="рекомендукемые сервера">
		<UiGrid>
			<UiServerCard
				v-for="(server, index) in servers.slice(0, 9)"
				:key="index"
				v-bind="server"
				:class="[index > 4 && 'hidden sm:flex', index > 5 && 'hidden sm:hidden lg:flex']"
			/>
		</UiGrid>
	</UiSection>
</template>

<script setup lang="ts">
import type { UiServerCardProps } from "../ui/server/UiServerCard.vue";

const servers: UiServerCardProps[] = [
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
