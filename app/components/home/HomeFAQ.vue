<!-- eslint-disable vue/no-v-html -->
<template>
	<UiSection title="часто задаваемые вопросы">
		<UiTabs
			:items="items"
			class="flex flex-col gap-2.5 sm:gap-5"
			list-class="flex flex-wrap gap-1.25 md:gap-2.5"
		>
			<template #trigger="{ item }: { item: TabsItem }">
				<UiButton
					class="bg-obscure hover:bg-dimmed active:bg-primary data-active:bg-primary pc:px-4 rounded-xs px-2 py-2.5 text-sm leading-1 font-semibold sm:px-6 sm:py-3 md:px-8 md:py-3.75 md:text-base lg:px-10 lg:text-xl"
				>
					{{ item.label }}
				</UiButton>
			</template>

			<template #default="{ item }: { item: TabsItem }">
				<UiTabs
					:items="item.entries"
					orientation="vertical"
					class="hidden items-stretch gap-5 sm:flex"
					list-class="flex flex-1 flex-col gap-2.5"
					content-class="bg-obscure flex-1 rounded-xs"
				>
					<template #trigger="{ item: entry }">
						<UiButton
							class="bg-obscure active:bg-highlighted active:text-obscure data-active:bg-highlighted data-active:text-obscure flex items-center justify-between gap-4 rounded-xs py-2.5 pr-3 pl-5 text-left text-sm leading-none font-semibold md:text-base"
						>
							<span>{{ entry.title }}</span>

							<Icon
								name="assist:plus"
								size="24px"
								class="text-default shrink-0 md:size-7.5"
							/>
						</UiButton>
					</template>

					<template #default="{ item: entry }">
						<div class="text-toned flex flex-col gap-6 p-3.75 text-xs leading-2 md:justify-between md:text-sm [&_li]:ml-5">
							<p class="text-default text-sm leading-none font-semibold md:text-base">{{ entry.title }}</p>

							<div v-html="entry.value" />
						</div>
					</template>
				</UiTabs>

				<UiAccordion
					class="sm:hidden"
					:items="item.entries"
				>
					<template #trigger="{ modelValue, item: entry, index: idx }">
						<UiButton
							unstyled
							class="px-3.75 text-left"
						>
							<span class="text-sm leading-none font-semibold">
								{{ entry.title }}
							</span>

							<Icon
								name="assist:plus"
								size="24px"
								:class="modelValue === String(idx) && 'text-obscure transition-colors'"
							/>
						</UiButton>
					</template>

					<template #default="{ item: entry }">
						<div
							class="text-toned px-3.75 pb-6 text-xs leading-3 font-medium [&_li]:ml-5"
							v-html="entry.value"
						/>
					</template>
				</UiAccordion>
			</template>
		</UiTabs>
	</UiSection>
</template>

<script setup lang="ts">
import type { Class } from "~/global";

type Entry = {
	title: string;
	value?: string;
	class?: Class;
};

type TabsItem = {
	label: string;
	entries: Entry[];
};

const items: TabsItem[] = [
	{
		label: "Общие вопросы",
		entries: [
			{
				title: "Как начать играть в Rust?",
				class: "bg-obscure rounded-xs",
				value: `
					<p>В Rust есть несколько режимов игры, которые определяют геймплей и взаимодействие с другими игроками. Основные:</p>
					<ul class="list-disc">
						<li>Выживание (Survival) - классический PvP-режим с рейдами и строительством.</li>
						<li>Творческий (Creative) - режим для тестирования и строительства без ограничений.</li>
						<li>Softcore - упрощённый режим с возможностью частичного сохранения лута после смерти.</li>
						<li>Hardcore - сложный режим с ограниченным количеством спавнов и без карты.</li>
						<li>PvE (на некоторых серверах) - режим без PvP, ориентированный на выживание и строительство.</li>
					</ul>`,
			},
			{
				title: "Какие есть режимы игры?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Rust предлагает разные режимы для разных стилей игры.</p>
                    <ul class="list-disc">
                        <li>PvP — классическое выживание с рейдами.</li>
                        <li>PvE — акцент на строительство.</li>
                        <li>Softcore — сохранение части инвентаря.</li>
                        <li>Hardcore — минимальные ресурсы.</li>
                        <li>Творческий — свободное строительство.</li>
                    </ul>`,
			},
			{
				title: "Что делать, если меня постоянно убивают?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Частые смерти можно минимизировать стратегией.</p>
                    <ul class="list-disc">
                        <li>Избегайте популярных точек спавна.</li>
                        <li>Стройте базу в укромных местах.</li>
                        <li>Не носите лишний лут.</li>
                        <li>Играйте в команде.</li>
                        <li>Учитесь быстро крафтить оружие.</li>
                    </ul>`,
			},
			{
				title: "Как работают сейвы и прогресс?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Прогресс зависит от сервера и его правил.</p>
                    <ul class="list-disc">
                        <li>Вайпы происходят каждые 1–2 недели.</li>
                        <li>Постройки и предметы удаляются при вайпе.</li>
                        <li>Приватные сервера сохраняют дольше.</li>
                        <li>Рейды могут уничтожить базу.</li>
                        <li>Сейвы не переносятся между серверами.</li>
                    </ul>`,
			},
			{
				title: "Как добывать ресурсы?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Эффективная добыча ускоряет развитие.</p>
                    <ul class="list-disc">
                        <li>Используйте улучшенные инструменты.</li>
                        <li>Собирайте рядом с базой.</li>
                        <li>Ищите руды в горах.</li>
                        <li>Фармите животных.</li>
                        <li>Следите за временем суток.</li>
                    </ul>`,
			},
		],
	},
	{
		label: "Рейд",
		entries: [
			{
				title: "Как подготовиться к рейду?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Рейды требуют тщательной подготовки.</p>
                    <ul class="list-disc">
                        <li>Соберите взрывчатку.</li>
                        <li>Продумайте маршрут отхода.</li>
                        <li>Берите оружие и броню.</li>
                        <li>Используйте скрытность.</li>
                        <li>Рейдите ночью.</li>
                    </ul>`,
			},
			{
				title: "Какие ресурсы нужны для рейда?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Для успешного рейда нужны ключевые материалы.</p>
                    <ul class="list-disc">
                        <li>Взрывчатка (С4, ракеты).</li>
                        <li>Металл для оружия.</li>
                        <li>Дерево для лестниц.</li>
                        <li>Еда и медикаменты.</li>
                        <li>Боеприпасы.</li>
                    </ul>`,
			},
			{
				title: "Как защитить базу от рейда?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Защита базы — важная часть игры.</p>
                    <ul class="list-disc">
                        <li>Стройте многоуровневые стены.</li>
                        <li>Используйте металлические двери.</li>
                        <li>Ставьте турели.</li>
                        <li>Прячьте лут в разных местах.</li>
                        <li>Регулярно укрепляйте постройки.</li>
                    </ul>`,
			},
			{
				title: "Какие ошибки совершают новички?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Новички часто допускают ошибки при рейдах.</p>
                    <ul class="list-disc">
                        <li>Недостаток ресурсов.</li>
                        <li>Плохая разведка.</li>
                        <li>Рейд в одиночку.</li>
                        <li>Игнорирование защиты базы.</li>
                        <li>Неправильный выбор времени.</li>
                    </ul>`,
			},
			{
				title: "Стоит ли рейдить ночью?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Ночные рейды имеют плюсы и минусы.</p>
                    <ul class="list-disc">
                        <li>Сложнее заметить игроков.</li>
                        <li>Меньше активности на сервере.</li>
                        <li>Труднее ориентироваться.</li>
                        <li>Нужны факелы или приборы ночного видения.</li>
                        <li>Риск попасть в засаду.</li>
                    </ul>`,
			},
		],
	},
	{
		label: "Калькулятор",
		entries: [
			{
				title: "Как рассчитать стоимость постройки?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Стоимость зависит от материалов и уровня укрепления.</p>
                    <ul class="list-disc">
                        <li>Дерево — дешёвое, но слабое.</li>
                        <li>Камень — средняя защита.</li>
                        <li>Металл — высокая прочность.</li>
                        <li>HQM — максимальная защита.</li>
                        <li>Учитывайте количество дверей и этажей.</li>
                    </ul>`,
			},
			{
				title: "Как рассчитать расход топлива?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Топливо используется для генераторов и транспорта.</p>
                    <ul class="list-disc">
                        <li>Факелы и костры — минимальный расход.</li>
                        <li>Генераторы — высокий расход.</li>
                        <li>Транспорт — зависит от модели.</li>
                        <li>Запасайте топливо заранее.</li>
                        <li>Используйте альтернативные источники энергии.</li>
                    </ul>`,
			},
			{
				title: "Как рассчитать время рейда?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Время зависит от ресурсов и защиты базы.</p>
                    <ul class="list-disc">
                        <li>Количество дверей и стен.</li>
                        <li>Прочность материалов.</li>
                        <li>Скорость взлома.</li>
                        <li>Количество игроков в команде.</li>
                        <li>Наличие турелей.</li>
                    </ul>`,
			},
			{
				title: "Как рассчитать лут?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Лут зависит от типа контейнеров и их уровня.</p>
                    <ul class="list-disc">
                        <li>Малые ящики — базовые ресурсы.</li>
                        <li>Средние — оружие и броня.</li>
                        <li>Большие — редкие предметы.</li>
                        <li>Сейфы — максимальная ценность.</li>
                        <li>Рандомизация влияет на результат.</li>
                    </ul>`,
			},
			{
				title: "Как рассчитать прочность базы?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Прочность базы зависит от материалов и конструкции.</p>
                    <ul class="list-disc">
                        <li>Дерево легко ломается.</li>
                        <li>Камень держит средние атаки.</li>
                        <li>Металл выдерживает ракеты.</li>
                        <li>HQM почти неуязвим.</li>
                        <li>Многоуровневые стены повышают защиту.</li>
                    </ul>`,
			},
		],
	},
	{
		label: "Мир",
		entries: [
			{
				title: "Какие биомы есть в Rust?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Мир Rust разделён на разные биомы.</p>
                    <ul class="list-disc">
                        <li>Лес — много дерева и животных.</li>
                        <li>Горы — ресурсы руды.</li>
                        <li>Пустыня — редкие ресурсы.</li>
                        <li>Снег — суровые условия.</li>
                        <li>Берег — доступ к воде и рыбалке.</li>
                    </ul>`,
			},
			{
				title: "Какие есть памятники?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Памятники — ключевые точки для лута.</p>
                    <ul class="list-disc">
                        <li>Аэродром — оружие и техника.</li>
                        <li>Радиовышка — электроника.</li>
                        <li>Супермаркет — базовые ресурсы.</li>
                        <li>Нефтяная вышка — топливо.</li>
                        <li>Военные тоннели — редкий лут.</li>
                    </ul>`,
			},
			{
				title: "Как ориентироваться на карте?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Ориентация помогает выжить и найти ресурсы.</p>
                    <ul class="list-disc">
                        <li>Используйте компас.</li>
                        <li>Запоминайте ландшафт.</li>
                        <li>Отмечайте базу.</li>
                        <li>Изучайте памятники.</li>
                        <li>Следите за биомами.</li>
                    </ul>`,
			},
			{
				title: "Как работает погода?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Погода влияет на выживание.</p>
                    <ul class="list-disc">
                        <li>Дождь снижает видимость.</li>
                        <li>Снег требует тёплой одежды.</li>
                        <li>Жара в пустыне опасна.</li>
                        <li>Ночь скрывает игроков.</li>
                        <li>Погода влияет на фарм.</li>
                    </ul>`,
			},
			{
				title: "Как найти безопасное место?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Безопасное место помогает выжить дольше.</p>
                    <ul class="list-disc">
                        <li>Стройте вдали от памятников.</li>
                        <li>Выбирайте укромные биомы.</li>
                        <li>Избегайте популярных точек.</li>
                        <li>Используйте скрытые пещеры.</li>
                        <li>Следите за активностью игроков.</li>
                    </ul>`,
			},
		],
	},
	{
		label: "Предметы",
		entries: [
			{
				title: "Какие есть виды оружия?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Оружие делится на несколько категорий.</p>
                    <ul class="list-disc">
                        <li>Холодное — копья, ножи.</li>
                        <li>Огнестрельное — пистолеты, автоматы.</li>
                        <li>Взрывчатка — гранаты, С4.</li>
                        <li>Луки и арбалеты.</li>
                        <li>Импровизированное оружие.</li>
                    </ul>`,
			},
			{
				title: "Какая броня доступна?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Броня защищает от урона и повышает выживаемость.</p>
                    <ul class="list-disc">
                        <li>Кожаная — базовая защита.</li>
                        <li>Металлическая — средняя защита.</li>
                        <li>Тяжёлая — максимальная защита.</li>
                        <li>Импровизированная броня.</li>
                        <li>Комбинируйте разные элементы для эффективности.</li>
                    </ul>`,
			},
			{
				title: "Какие инструменты нужны?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Инструменты помогают добывать ресурсы и строить.</p>
                    <ul class="list-disc">
                        <li>Камень — базовый инструмент.</li>
                        <li>Топор — для дерева.</li>
                        <li>Кирка — для руды.</li>
                        <li>Молот — для строительства.</li>
                        <li>Продвинутые инструменты ускоряют фарм.</li>
                    </ul>`,
			},
			{
				title: "Какие медикаменты есть?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Медикаменты помогают выжить в бою и после него.</p>
                    <ul class="list-disc">
                        <li>Бинты — остановка кровотечения.</li>
                        <li>Аптечки — восстановление здоровья.</li>
                        <li>Шприцы — быстрое лечение.</li>
                        <li>Еда — восполнение энергии.</li>
                        <li>Вода — поддержание выносливости.</li>
                    </ul>`,
			},
			{
				title: "Какие редкие предметы есть?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Редкие предметы дают преимущество в игре.</p>
                    <ul class="list-disc">
                        <li>Компоненты для крафта.</li>
                        <li>Редкие чертежи.</li>
                        <li>Электроника для механизмов.</li>
                        <li>Редкие виды оружия.</li>
                        <li>Особые ресурсы для HQM.</li>
                    </ul>`,
			},
		],
	},
	{
		label: "Другое",
		entries: [
			{
				title: "Как общаться с другими игроками?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Коммуникация помогает выжить и строить альянсы.</p>
                    <ul class="list-disc">
                        <li>Используйте голосовой чат.</li>
                        <li>Пишите в текстовый чат.</li>
                        <li>Создавайте кланы.</li>
                        <li>Д договаривайтесь о торговле.</li>
                        <li>Будьте осторожны — не все игроки дружелюбны.</li>
                    </ul>`,
			},
			{
				title: "Как работает торговля?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Торговля позволяет обмениваться ресурсами.</p>
                    <ul class="list-disc">
                        <li>Используйте верстаки для обмена.</li>
                        <li>Создавайте магазины.</li>
                        <li>Обменивайтесь напрямую.</li>
                        <li>Следите за ценностью предметов.</li>
                        <li>Будьте осторожны с мошенниками.</li>
                    </ul>`,
			},
			{
				title: "Как настроить графику?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Настройки графики влияют на производительность.</p>
                    <ul class="list-disc">
                        <li>Снижайте качество теней.</li>
                        <li>Отключайте лишние эффекты.</li>
                        <li>Используйте низкое разрешение.</li>
                        <li>Настройте дальность прорисовки.</li>
                        <li>Оптимизируйте под свой ПК.</li>
                    </ul>`,
			},
			{
				title: "Как улучшить производительность?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Производительность зависит от настроек и железа.</p>
                    <ul class="list-disc">
                        <li>Закрывайте фоновые программы.</li>
                        <li>Обновляйте драйверы.</li>
                        <li>Используйте SSD.</li>
                        <li>Настройте параметры игры.</li>
                        <li>Регулярно чистите систему.</li>
                    </ul>`,
			},
			{
				title: "Какие советы для новичков?",
				class: "bg-obscure rounded-xs",
				value: `
                    <p>Новичкам стоит следовать простым правилам.</p>
                    <ul class="list-disc">
                        <li>Стройте маленькие базы.</li>
                        <li>Не храните всё в одном месте.</li>
                        <li>Изучайте карту.</li>
                        <li>Играйте с друзьями.</li>
                        <li>Учитесь быстро крафтить.</li>
                    </ul>`,
			},
		],
	},
];
</script>
