export type Locale = "ru" | "en";

const locale = ref("ru");

export default function () {
	function setLocale(value: Locale) {
		if (locale.value === value) return;

		locale.value = value;
	}

	return { locale, setLocale };
}
