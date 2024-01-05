'use client';
import { createGlobalStyle } from "styled-components";
import { usePathname } from "next/navigation";
import { hideLayout } from "./constants";
import { useEffect, useState } from "react";


export const GlobalStyle = () => {

    const path = usePathname();
    const [included, setIncluded] = useState<boolean>(false);
    useEffect(() => {
        setIncluded(hideLayout.filter((entry) => path.includes(entry)).length > 0);
    }, [path])

    const Style = createGlobalStyle(({ theme }) => ({
        body: {
            display: 'grid',
            gridTemplateRows: included ? '1fr' : 'auto 1fr auto',
            margin: 'auto',
            width: '100%',
            flexDirection: 'column',
        },
        section: {
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        'main': {
            width: theme.breakpoints.xl,
            justifySelf: 'center',
            alignSelf: 'center',
            maxWidth: 'calc(100% - 300px)',
            minWidth: theme.breakpoints.sm,            
        },
        '#nav, #footer, #content': {
            width: theme.breakpoints.xl,
            maxWidth: 'calc(100% - 300px)',
            minWidth: theme.breakpoints.sm,
            justifySelf: 'center'
        },
        '#nav': {
            ...(included ? {display: 'none'}: {}),
        },
        '#footer': {
            paddingTop: '80px',
            ...(included ? {display: 'none'}: {})
        },
        '#content': {
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            marginTop: '36px'
        }
    }))
    return (
        <Style />
    )
};