import { Star, StarHalf } from "lucide-react"

import { cn } from "@/lib/utils"

interface RatingProps {
    value: number

    reviews?: number

    showValue?: boolean

    className?: string
}

export function Rating({
    value,
    reviews,
    showValue = true,
    className,
}: RatingProps) {
    const rating = Math.max(0, Math.min(5, value))
    const roundedRating = Math.round(rating * 2) / 2
    const fullStars = Math.floor(roundedRating)
    const hasHalfStar = roundedRating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
        <div
            className={cn(
                "flex items-center gap-1.5 text-sm",
                className,
            )}
        >
            <div className="flex items-center">
                {Array.from({ length: fullStars }).map((_, index) => (
                    <Star
                        key={`full-${index}`}
                        className="size-4 fill-yellow-400 text-yellow-400"
                    />
                ))}

                {hasHalfStar && (
                    <StarHalf
                        className="size-4 fill-yellow-400 text-yellow-400"
                    />
                )}

                {Array.from({ length: emptyStars }).map((_, index) => (
                    <Star
                        key={`empty-${index}`}
                        className="size-4 text-muted-foreground"
                    />
                ))}
            </div>

            {showValue && (
                <span className="font-medium">
                    {rating.toFixed(1)}
                </span>
            )}

            {reviews !== undefined && (
                <span className="text-muted-foreground">
                    ({reviews})
                </span>
            )}
        </div>
    )
}