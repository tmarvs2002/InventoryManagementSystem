'use client';

import React, { PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { StyledComponentsRegistry } from "./registery";
import { theme, GlobalStyle } from "@core/theme";


export default function ThemeProvider({ children }: PropsWithChildren) {

    return (
        <StyledComponentsRegistry>
            <StyledThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </StyledThemeProvider>
        </StyledComponentsRegistry>
    );
}