import * as React from "react"

import { cn } from "@/lib/utils"

interface PageLayoutProps {
    sidebar?: React.ReactNode

    children: React.ReactNode

    className?: string
    sidebarClassName?: string
    contentClassName?: string
}

export function PageLayout({
    sidebar,
    children,
    className,
    sidebarClassName,
    contentClassName,
}: PageLayoutProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-8 lg:flex-row",
                className,
            )}
        >
            {sidebar && (
                <aside
                    className={cn(
                        "w-full lg:w-72 lg:shrink-0",
                        sidebarClassName,
                    )}
                >
                    {sidebar}
                </aside>
            )}
            <main
                className={cn(
                    "min-w-0 flex-1 space-y-8",
                    contentClassName,
                )}
            >
                {children}
            </main>
        </div>
    )
}