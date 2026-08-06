import * as React from "react"

import { cn } from "@/lib/utils"

const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    "2xl": "max-w-screen-2xl",
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: keyof typeof sizes
    fluid?: boolean
}

export function Container({
    className,
    size = "xl",
    fluid = false,
    ...props
}: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full px-4 sm:px-6 lg:px-8",
                !fluid && sizes[size],
                className,
            )}
            {...props}
        />
    )
}