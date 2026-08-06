import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

interface LoadingStateProps {
    title?: string
    description?: string
    className?: string
}

export function LoadingState({
    title = "Loading...",
    description,
    className,
}: LoadingStateProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center gap-4 py-16 text-center",
                className,
            )}
        >
            <Loader2 className="size-10 animate-spin text-primary" />

            <div className="space-y-1">
                <h3 className="text-lg font-semibold">
                    {title}
                </h3>

                {description && (
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>
        </div>
    )
}