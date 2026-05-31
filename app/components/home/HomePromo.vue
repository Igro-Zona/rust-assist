<template>
	<UiSection
		title="удобный калькулятор рейда прямо в твоём телефоне"
		unstyled
		class="relative grid grid-cols-1 items-center gap-2.5 overflow-visible sm:grid-cols-2 sm:gap-x-4 md:gap-5"
	>
		<template #title>
			<div class="order-3 flex shrink-0 justify-center sm:order-1 md:justify-start">
				<NuxtPicture
					quality="90"
					densities="1x 2x"
					format="avif"
					legacy-format="webp"
					src="/images/phone.png"
					width="300"
					height="280"
					class="block aspect-square w-full max-w-75 md:max-w-120 2xl:max-w-140"
					:img-attrs="{
						alt: '',
						class: 'object-contain w-full h-full',
					}"
					sizes="300px pc:420px xl:510px 2xl:600px"
				/>
			</div>
		</template>

		<div class="order-1 contents flex-col gap-2.5 sm:flex md:gap-5">
			<h2 class="order-1 text-2xl leading-2 font-semibold uppercase sm:order-2 md:text-4xl">
				удобный калькулятор рейда прямо в твоём телефоне
			</h2>

			<p class="text-toned order-2 text-sm leading-3 font-medium sm:order-3 md:text-base">
				Считай ресурсы, планируй рейды и контролируй окупаемость за секунды. Без лишних таблиц и сложных формул — всё уже рассчитано
				за тебя. Быстро, удобно, прямо в телефоне.
			</p>

			<UiLink
				label="Скачать приложение на IOS"
				class="bg-primary hover:text-default/40 order-4 justify-center rounded-xs p-3 leading-none font-semibold sm:order-4 md:p-4"
			/>
		</div>

		<div
			style="
				background: linear-gradient(
					180deg,
					hsla(10, 55%, 35%, 0.75) 0%,
					hsla(10, 35%, 20%, 0.75) 55%,
					hsla(10, 20%, 10%, 0.75) 85%,
					hsla(0, 0%, 9%, 0.75) 100%
				);
			"
			class="absolute inset-x-0 -top-10 -z-1 mx-[-100%] h-256.25"
		/>
	</UiSection>
</template>
