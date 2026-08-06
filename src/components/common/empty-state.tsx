import { PackageSearch } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EmptyStateProps {
    title?: string
    description?: string
    actionLabel?: string
    onAction?: () => void
    className?: string
}

export function EmptyState({
    title = "Nothing found",
    description = "There is nothing to display.",
    actionLabel,
    onAction,
    className,
}: EmptyStateProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center gap-4 py-16 text-center",
                className,
            )}
        >
            <PackageSearch className="size-10 text-muted-foreground" />

            <div className="space-y-1">
                <h3 className="text-lg font-semibold">
                    {title}
                </h3>

                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>

            {actionLabel && onAction && (
                <Button
                    variant="outline"
                    onClick={onAction}
                >
                    {actionLabel}
                </Button>
            )}
        </div>
    )
}