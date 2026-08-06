import { cn } from "@/lib/utils"

interface BadgeProps {
    children: React.ReactNode

    variant?:
        | "default"
        | "sale"
        | "new"
        | "success"
        | "warning"
        | "destructive"

    className?: string
}

export function Badge({
    children,
    variant = "default",
    className,
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
                {
                    "bg-secondary text-secondary-foreground":
                        variant === "default",

                    "bg-red-500 text-white":
                        variant === "sale",

                    "bg-blue-500 text-white":
                        variant === "new",

                    "bg-green-500 text-white":
                        variant === "success",

                    "bg-yellow-500 text-black":
                        variant === "warning",

                    "bg-destructive text-destructive-foreground":
                        variant === "destructive",
                },
                className
            )}
        >
            {children}
        </span>
    )
}