import { twMerge } from "tailwind-merge";

export default function (props?: string | IconProps, classes?: string) {
	if (!props) return { name: "assist:x" };

	return typeof props === "string"
		? { name: props, class: classes }
		: "class" in props
			? { ...props, class: twMerge(classes, props.class) }
			: { ...props, class: classes };
}
