<!-- eslint-disable vue/html-self-closing -->
<template>
	<footer class="bg-obscure">
		<UiContainer>
			<div class="border-muted flex flex-col justify-between gap-10 border-b pt-7.5 pb-20 md:flex-row md:border-none">
				<div class="contents shrink-0 grow flex-col justify-between gap-10 md:flex">
					<div class="space-y-5">
						<AppLogo />
						<p class="text-2xl leading-1 font-semibold md:max-w-47.5 md:text-xl">
							Надёжный <br />
							источник гайдов, калькуляторов <br />
							и новостей по Rust
						</p>
					</div>

					<FooterDownloadButton
						class="md:max-w-105"
						to="#!"
					/>
				</div>

				<nav class="h-81 w-140 columns-3 gap-5 lg:w-160 lg:gap-4">
					<FooterColumn
						v-for="(column, index) in links"
						:key="index"
						v-bind="column"
					/>

					<FooterSocials
						v-bind="socials"
						class="hidden md:flex"
					/>

					<FooterLangSwitch class="hidden md:flex" />
				</nav>
			</div>
		</UiContainer>

		<!-- bottom footer -->
		<UiContainer class="md:border-muted text-xs leading-2 md:max-w-none md:border-t">
			<div class="text-toned flex flex-col justify-between gap-7.5 py-7.5 pt-14 sm:pt-7.5 md:flex-row md:items-center md:gap-16">
				<div class="flex flex-col gap-1.5 xl:mr-20">
					<UiLink
						to="mailto:help@rustassist.com"
						label="help@rustassist.com"
					/>

					<div class="flex justify-between md:hidden">
						<FooterSocials v-bind="socials" />

						<FooterLangSwitch class="self-end" />
					</div>
				</div>

				<div class="flex flex-col-reverse gap-1.5 md:contents md:text-balance">
					<p class="md:basis-200 md:text-center">
						© 2025 Rust Assist • Обзор продукта Facepunch Studio. Все права на оригинальные изображения принадлежат
						правообладателю.
					</p>

					<UiLink
						class="underline underline-offset-3 md:text-right"
						label="Политика по обработке персональных данных"
					/>
				</div>
			</div>
		</UiContainer>
	</footer>
</template>

<script setup lang="ts">
import type { FooterColumnProps } from "./FooterColumn.vue";
import type { FooterSocialsProps } from "./FooterSocials.vue";

const links: FooterColumnProps[] = [
	{
		title: "Предметы",
		items: [
			{
				name: "Боеприпасы",
				to: "#",
			},
			{
				name: "Электричество",
				to: "#",
			},
			{
				name: "Ресурсы",
				to: "#",
			},
			{
				name: "Ловушки",
				to: "#",
			},
			{
				name: "Оружие",
				to: "#",
			},
			{
				name: "Конструкции",
				to: "#",
			},
			{
				name: "Развлечение",
				to: "#",
			},
			{
				name: "Еда",
				to: "#",
			},
			{
				name: "Одежда",
				to: "#",
			},
			{
				name: "Медикаменты",
				to: "#",
			},
			{
				name: "Компоненты",
				to: "#",
			},
			{
				name: "Инструменты",
				to: "#",
			},
		],
	},
	{
		title: "Мир",
		items: [
			{
				name: "Контейнеры",
				to: "#",
			},
			{
				name: "Собираемое",
				to: "#",
			},
			{
				name: "Деревья",
				to: "#",
			},
			{
				name: "Руды",
				to: "#",
			},
			{
				name: "Животные",
				to: "#",
			},
			{
				name: "Другое",
				to: "#",
			},
			{
				name: "Строительные блоки",
				to: "#",
			},
		],
	},
	{
		title: "Утилиты",
		items: [
			{
				name: "Калькулятор рейда",
				to: "#",
			},
			{
				name: "Калькулятор экскаватора",
				to: "#",
			},
			{
				name: "Калькулятор генов",
				to: "#",
			},
		],
	},
	{
		title: "Информация",
		items: [
			{
				name: "О нас",
				to: "#",
			},
			{
				name: "Контакты",
				to: "#",
			},
			{
				name: "Поддержка",
				to: "#",
			},
		],
	},
	{
		title: "Блог",
		items: [
			{
				name: "Обучающие",
				to: "#",
			},
			{
				name: "Электричество",
				to: "#",
			},
		],
	},
];
const socials: FooterSocialsProps = {
	items: [
		{ label: "Ссылка на соц. сеть" },
		{ label: "Ссылка на соц. сеть" },
		{ label: "Ссылка на соц. сеть" },
		{ label: "Ссылка на соц. сеть" },
	],
};
</script>

<style>
nav > * + * {
	margin-top: 1.5rem; /* same as space-y-6 */
}
</style>
