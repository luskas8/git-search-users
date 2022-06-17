import React, { HTMLProps } from "react"

interface LayoutProps extends HTMLProps<HTMLDivElement> {
}

export const PageLayout = ({ children }: LayoutProps) => {
    return (
        <div className="page-layout">
            <header className="page-layout__navbar">
                <h1>HEADER</h1>
            </header>
            <main className="page-layout__main">
                {children}
            </main>
        </div>
    )
}