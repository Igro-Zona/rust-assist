<template>
	<UiSection title="часто задаваемые вопросы">
		<TabsRoot default-value="1">
			<TabsList class="flex flex-wrap gap-2.5">
				<TabsTrigger
					class="bg-obscure rounded-xs px-2 py-2.5 text-sm leading-1 font-semibold"
					value="1"
					>Общие вопросы</TabsTrigger
				>
				<TabsTrigger
					class="bg-obscure rounded-xs px-2 py-2.5 text-sm leading-1 font-semibold"
					value="2"
					>Общие вопросы</TabsTrigger
				>
				<TabsTrigger
					class="bg-obscure rounded-xs px-2 py-2.5 text-sm leading-1 font-semibold"
					value="3"
					>Общие вопросы</TabsTrigger
				>
				<TabsTrigger
					class="bg-obscure rounded-xs px-2 py-2.5 text-sm leading-1 font-semibold"
					value="4"
					>Общие вопросы</TabsTrigger
				>
				<TabsTrigger
					class="data-[state=active]:bg-primary bg-obscure rounded-xs px-2 py-2.5 text-sm leading-1 font-semibold"
					value="5"
					>Общие вопросы</TabsTrigger
				>
				<TabsTrigger
					class="bg-obscure rounded-xs px-2 py-2.5 text-sm leading-1 font-semibold"
					value="6"
					>Общие вопросы</TabsTrigger
				>
			</TabsList>
			<TabsContent value="1"> bla </TabsContent>
			<TabsContent value="5"> bleh </TabsContent>
		</TabsRoot>
	</UiSection>
</template>
