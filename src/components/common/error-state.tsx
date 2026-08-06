import { AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ErrorStateProps {
    title?: string
    description?: string
    retryLabel?: string
    onRetry?: () => void
    className?: string
}

export function ErrorState({
    title = "Something went wrong",
    description = "An unexpected error occurred. Please try again.",
    retryLabel = "Try Again",
    onRetry,
    className,
}: ErrorStateProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center gap-4 py-16 text-center",
                className,
            )}
        >
            <AlertCircle className="size-10 text-destructive" />

            <div className="space-y-1">
                <h3 className="text-lg font-semibold">
                    {title}
                </h3>

                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>

            {onRetry && (
                <Button
                    onClick={onRetry}
                    variant="outline"
                >
                    {retryLabel}
                </Button>
            )}
        </div>
    )
}