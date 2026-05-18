<!-- eslint-disable vue/html-self-closing -->
<template>
	<footer class="bg-obscure">
		<UiContainer>
			<div class="border-muted flex flex-col justify-between gap-13.5 border-b pt-7.5 md:flex-row md:border-none md:pb-20">
				<div class="contents shrink-0 grow flex-col justify-between gap-10 md:flex">
					<div class="space-y-5">
						<AppLogo />
						<p class="text-2xl leading-1 font-semibold md:max-w-47.5 md:text-xl">
							Надёжный <br />
							источник гайдов, калькуляторов <br />
							и новостей по Rust
						</p>
					</div>

					<FooterDownloadLink class="md:max-w-105" />
				</div>

				<FooterAccordion
					class="md:hidden"
					:items="items"
				/>

				<FooterColumns
					:items="items"
					class="hidden h-81 max-w-140 columns-3 gap-0 md:block 2xl:max-w-160 2xl:gap-4 [&>*+*]:mt-7.5"
				>
					<FooterSocials v-bind="socials" />

					<FooterLangSwitch />
				</FooterColumns>
			</div>
		</UiContainer>

		<UiContainer class="md:border-muted text-xs leading-2 md:max-w-none md:border-t">
			<div class="text-toned md:links-center flex flex-col justify-between gap-7.5 py-7.5 pt-14 sm:pt-7.5 md:flex-row md:gap-16">
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
import type { UiLinkProps } from "~/components/ui/UiLink.vue";
import type { FooterSocialsProps } from "./FooterSocials.vue";

export type FooterItem = {
	title: string;
	links?: UiLinkProps[];
};

const items: FooterItem[] = [
	{
		title: "Предметы",
		links: [
			{ label: "Боеприпасы" },
			{ label: "Электричество" },
			{ label: "Ресурсы" },
			{ label: "Ловушки" },
			{ label: "Оружие" },
			{ label: "Конструкции" },
			{ label: "Развлечение" },
			{ label: "Еда" },
			{ label: "Одежда" },
			{ label: "Медикаменты" },
			{ label: "Компоненты" },
			{ label: "Инструменты" },
		],
	},
	{
		title: "Мир",
		links: [
			{ label: "Контейнеры" },
			{ label: "Собираемое" },
			{ label: "Деревья" },
			{ label: "Руды" },
			{ label: "Животные" },
			{ label: "Другое" },
			{ label: "Строительные блоки" },
		],
	},
	{
		title: "Утилиты",
		links: [{ label: "Калькулятор рейда" }, { label: "Калькулятор экскаватора" }, { label: "Калькулятор генов" }],
	},
	{
		title: "Информация",
		links: [{ label: "О нас" }, { label: "Контакты" }, { label: "Поддержка" }],
	},
	{
		title: "Блог",
		links: [{ label: "Обучающие" }, { label: "Электричество" }],
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
