import type { AsTag } from "reka-ui";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Class = any;
export interface StyledComponentProps {
	class?: Class;
	unstyled?: boolean;
}
export interface PrimitiveComponentProps {
	as?: AsPropDefault;
	asChild?: boolean;
}
export interface StyledPrimitiveComponentProps extends StyledComponentProps, PrimitiveComponentProps {}

declare global {
	type AsPropDefault = AsTag | Component;

	interface IconProps extends HTMLAttributes {
		name: string;
		mode?: "svg" | "css";
		size?: string | number;
		class?: Class;
		customize?: (content: string, name?: string, prefix?: string, provider?: string) => string;
	}
}
