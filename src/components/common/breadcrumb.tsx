import { Link } from "@tanstack/react-router"
import type { LinkProps } from "@tanstack/react-router"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
    label: string
    to?: LinkProps["to"]
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
    className?: string
}

export function Breadcrumb({
    items,
    className,
}: BreadcrumbProps) {
    if (items.length === 0) {
        return null
    }

    return (
        <nav
            aria-label="Breadcrumb"
            className={cn("text-sm", className)}
        >
            <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1

                    return (
                        <li
                            key={`${item.label}-${index}`}
                            className="flex items-center gap-2"
                        >
                            {isLast ? (
                                <span
                                    aria-current="page"
                                    className="font-medium text-foreground"
                                >
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    to={item.to!}
                                    className="transition-colors hover:text-foreground"
                                >
                                    {item.label}
                                </Link>
                            )}

                            {!isLast && (
                                <ChevronRight
                                    className="size-4 shrink-0"
                                    aria-hidden="true"
                                />
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}