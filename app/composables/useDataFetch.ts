import type { UiLinkProps } from "~/components/ui/UiLink.vue";
import { useFuse } from "@vueuse/integrations/useFuse.js";
import { refThrottled } from "@vueuse/core";

type Section = {
	name: string;
	to?: string;
	items?: Item[];
};

type Item = {
	label?: string;
	title?: string;
	icon?: string;
	link?: UiLinkProps;
};

const sections: Section[] = [
	{
		name: "Оружие",
		items: [{ label: "Оружие", title: "Пример оружия", icon: "/static/hero/rocket-launcher.png" }],
	},
	{
		name: "Скины",
		items: [
			{ label: "Скин один", title: "Скин пример", icon: "/static/hero/rocket-launcher.png" },
			{ label: "Скин еще какой-то", title: "Пример скина наименование", icon: "/static/hero/rocket-launcher.png" },
			{ label: "Скин один", title: "Скин пример", icon: "/static/hero/rocket-launcher.png" },
			{ label: "Оружие", title: "Пример оружия", icon: "/static/hero/rocket-launcher.png" },
		],
	},
	{
		name: "Разное",
		items: [{ label: "Оружие", title: "Пример оружия", icon: "/static/hero/rocket-launcher.png" }],
	},
	{
		name: "Оружие",
		items: [{ label: "Оружие", title: "Пример оружия", icon: "/static/hero/rocket-launcher.png" }],
	},
	{
		name: "Скины",
		items: [
			{ label: "Скин один", title: "Скин пример", icon: "/static/hero/rocket-launcher.png" },
			{ label: "Скин еще какой-то", title: "Пример скина наименование", icon: "/static/hero/rocket-launcher.png" },
			{ label: "Скин один", title: "Скин пример", icon: "/static/hero/rocket-launcher.png" },
			{ label: "Оружие", title: "Пример оружия", icon: "/static/hero/rocket-launcher.png" },
		],
	},
	{
		name: "Разное",
		items: [{ label: "Оружие", title: "Пример оружия", icon: "/static/hero/rocket-launcher.png" }],
	},
];

export default function (query: Ref<string>) {
	const allItems = computed(() => sections.flatMap((section) => section.items?.map((item) => ({ ...item, section: section.name }))));

	const fuse = {
		fuseOptions: { ignoreLocation: true, threshold: 0.3, keys: ["title"] },
		resultLimit: 30,
		matchAllWhenSearchEmpty: false,
	};
	const { results: fuseResults } = useFuse(query, allItems, fuse);
	const throttledFuseResults = refThrottled(fuseResults, 16, true);

	const filteredSections = computed(() => {
		const items = throttledFuseResults.value.map((r) => r.item);
		return sections
			.map((section) => ({
				name: section.name,
				to: section.to,
				items: items.filter((item) => item?.section === section.name),
			}))
			.filter((section) => section.items.length > 0);
	});
	return { sections, filteredSections };
}
