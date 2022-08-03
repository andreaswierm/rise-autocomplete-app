import { CSSProperties, FC, PropsWithChildren } from "react";

export type TextColors = "primary" | "secondary";

export type TextProps = {
  color?: TextColors;
} & Pick<CSSProperties, "fontSize" | "fontWeight">;

export type TextComponent = FC<PropsWithChildren<TextProps>>;
