<template>
	<UiSection title="часто задаваемые вопросы">
		<div class="flex flex-wrap gap-2.5">
			<div class="bg-muted text-heading-sm px-10 py-4">Рейд</div>
			<div class="bg-muted text-heading-sm px-10 py-4">Рейд</div>
			<div class="bg-muted text-heading-sm px-10 py-4">Рейд</div>
			<div class="bg-muted text-heading-sm px-10 py-4">Рейд</div>
			<div class="bg-muted text-heading-sm px-10 py-4">Рейд</div>
			<div class="bg-muted text-heading-sm px-10 py-4">Рейд</div>
		</div>

		<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
			<div class="flex h-57.5 snap-y snap-mandatory scrollbar-none flex-col gap-2.5 overflow-y-auto">
				<div class="bg-muted flex snap-start items-center justify-between rounded-[4px] px-4 py-2.5">
					<span>Как начать играть в Rust?</span>
					<span>+</span>
				</div>
				<div class="bg-muted flex snap-start items-center justify-between rounded-[4px] px-4 py-2.5">
					<span>Как начать играть в Rust?</span>
					<span>+</span>
				</div>
				<div class="bg-muted flex snap-start items-center justify-between rounded-[4px] px-4 py-2.5">
					<span>Как начать играть в Rust?</span>
					<span>+</span>
				</div>
				<div class="bg-muted flex snap-start items-center justify-between rounded-[4px] px-4 py-2.5">
					<span>Как начать играть в Rust?</span>
					<span>+</span>
				</div>
				<div class="bg-muted flex snap-start items-center justify-between rounded-[4px] px-4 py-2.5">
					<span>Как начать играть в Rust?</span>
					<span>+</span>
				</div>
				<div class="bg-muted flex snap-start items-center justify-between rounded-[4px] px-4 py-2.5">
					<span>Как начать играть в Rust?</span>
					<span>+</span>
				</div>
				<div class="bg-muted flex snap-start items-center justify-between rounded-[4px] px-4 py-2.5">
					<span>Как начать играть в Rust?</span>
					<span>+</span>
				</div>
				<div class="bg-muted flex snap-start items-center justify-between rounded-[4px] px-4 py-2.5">
					<span>Как начать играть в Rust?</span>
					<span>+</span>
				</div>
			</div>

			<div class="bg-muted flex flex-col gap-5 rounded-[4px] p-5">
				<h3 class="text-button-base">Как начать играть в Rust?</h3>
				<div
					class="text-toned text-body-md html"
					v-html="rustBlock"
				/>
			</div>
		</div>
	</UiSection>
</template>

<script setup lang="ts">
const rustBlock = `
  <p>
    В Rust есть несколько режимов игры, которые определяют геймплей и взаимодействие с другими игроками. Основные:
  </p>
  <ul class='list-disc ml-5'>
    <li>Выживание (Survival) – классический PvP-режим с рейдами и строительством.</li>
    <li>Творческий (Creative) – режим для тестирования и строительства без ограничений.</li>
    <li>Softcore – упрощённый режим с возможностью частичного сохранения лута после смерти.</li>
    <li>Hardcore – сложный режим с ограниченным количеством спавнов и без карты.</li>
    <li>PvE (на некоторых серверах) – режим без PvP, ориентированный на выживание и строительство.</li>
  </ul>
`;
</script>

<style>
.html ul {
	margin-left: 20px !important;
}
</style>
