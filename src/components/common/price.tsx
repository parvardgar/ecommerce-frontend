import { cn } from "@/lib/utils"
import { formatCurrency } from "@/lib/formats"

interface PriceProps {
    price: number
    originalPrice?: number

    className?: string
}

export function Price({
    price,
    originalPrice,
    className,
}: PriceProps) {
    const hasDiscount =
        originalPrice !== undefined &&
        originalPrice > price

    return (
        <div
            className={cn(
                "flex items-center gap-2",
                className,
            )}
        >
            <span className="text-lg font-semibold">
                {formatCurrency(price)}
            </span>

            {hasDiscount && (
                <span className="text-sm text-muted-foreground line-through">
                    {formatCurrency(originalPrice)}
                </span>
            )}
        </div>
    )
}