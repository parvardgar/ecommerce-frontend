import * as React from "react"

import { cn } from "@/lib/utils"

import { Container } from "./container"

const sectionSizes = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24",
} as const

const backgrounds = {
    default: "",
    muted: "bg-muted/30",
    card: "bg-card",
    transparent: "bg-transparent",
} as const

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    size?: keyof typeof sectionSizes
    background?: keyof typeof backgrounds
    container?: boolean
    containerSize?: React.ComponentProps<typeof Container>["size"]
}

export function Section({
    children,
    className,
    size = "lg",
    background = "default",
    container = false,
    containerSize = "xl",
    ...props
}: SectionProps) {
    return (
        <section
            className={cn(
                sectionSizes[size],
                backgrounds[background],
                className,
            )}
            {...props}
        >
            {container ? (
                <Container size={containerSize}>
                    {children}
                </Container>
            ) : (
                children
            )}
        </section>
    )
}