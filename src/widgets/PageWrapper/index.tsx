import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { GlobalStyles } from "@/shared/styles/GlobalStyles";
import { FC, ReactNode } from "react"

const PageWrapper = ({ children }: {children: ReactNode}) => {
    return (
        <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
        </StyledComponentsRegistry>
    )
}

export { PageWrapper };
