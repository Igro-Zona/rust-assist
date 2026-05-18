import { twMerge } from "tailwind-merge";

export default function (props: string | IconProps, classes?: string) {
	return typeof props === "string" ? { name: props } : { ...props, class: twMerge(classes, props.class) };
}
