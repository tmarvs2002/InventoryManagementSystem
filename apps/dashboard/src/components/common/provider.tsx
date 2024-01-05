import AuthProvider from "@auth/provider";
import ThemeProvider from "@core/theme-provider";
import { PropsWithChildren } from "react";
import { Amplify } from "@aws-amplify/core";
// import config from "@aws/aws-exports";
import ReduxProvider from "@/redux/provider";

// Amplify.configure({ ...config });

export default async function Provider({ children }: PropsWithChildren) {
    return (
        <ReduxProvider>
            <AuthProvider >
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </AuthProvider>
        </ReduxProvider>
    )
}