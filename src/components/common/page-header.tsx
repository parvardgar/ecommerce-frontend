import { cn } from "@/lib/utils"

interface PageHeaderProps {
    title: string
    description?: string
    action?: React.ReactNode
    className?: string
}

export function PageHeader({
    title,
    description,
    action,
    className,
}: PageHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between",
                className,
            )}
        >
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight">
                    {title}
                </h1>

                {description && (
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>

            {action && (
                <div className="shrink-0">
                    {action}
                </div>
            )}
        </div>
    )
}