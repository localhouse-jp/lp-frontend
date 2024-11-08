"use client";

import {FC, ReactNode, useState} from "react";
import {useIsomorphicEffect} from "@/hook/useIsomorphicEffect";
import {Theme} from "@radix-ui/themes";

type Props = {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<"dark"|"light">("light");
  const isomorphicEffect = useIsomorphicEffect();

  isomorphicEffect(() => {
    const dark = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(dark.matches ? "dark" : "light");
    const listener = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };
    dark.addEventListener("change", listener);
    return () => {
      dark.removeEventListener("change", listener);
    };
  }, []);


  return <Theme appearance={theme}>
    {children}
  </Theme>
}
