export default function (props: string | IconProps) {
	return typeof props === "string" ? { name: props } : props;
}
