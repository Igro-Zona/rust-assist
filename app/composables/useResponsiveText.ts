import type { MaybeComputedElementRef } from "@vueuse/core";
import { useElementSize } from "@vueuse/core";

export default function (element: MaybeComputedElementRef, longText: string, shortText: string, margin: number) {
	const { width } = useElementSize(element);
	const longTextWidth = ref(0);

	function measureLongText() {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		ctx.font = getComputedStyle(document.body).font;
		longTextWidth.value = ctx.measureText(longText).width;
	}

	onMounted(() => {
		measureLongText();
	});

	const displayText = computed(() => (width.value + margin >= longTextWidth.value ? longText : shortText));

	return { displayText };
}
