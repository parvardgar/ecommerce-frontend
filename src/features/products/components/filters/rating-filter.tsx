import { Star } from "lucide-react"

import type { CheckboxFilterOption } from "./checkbox-filter-group"

import { Checkbox } from "@/components/ui/checkbox"

export interface RatingOption
    extends CheckboxFilterOption<number> {}

interface RatingFilterProps {
    ratings: RatingOption[]

    value: number[]

    onValueChange: (value: number[]) => void
}

export function RatingFilter({
    ratings,
    value,
    onValueChange,
}: RatingFilterProps) {
    function toggleRating(rating: number) {
        if (value.includes(rating)) {
            onValueChange(
                value.filter((item) => item !== rating),
            )
        } else {
            onValueChange([
                ...value,
                rating,
            ])
        }
    }

    return (
        <section className="space-y-4 border-t border-border pt-6">
            <h3 className="text-sm font-semibold">
                Rating
            </h3>

            <div className="space-y-3">
                {ratings.map((rating) => (
                    <label
                        key={rating.id}
                        className="flex cursor-pointer items-center justify-between"
                    >
                        {rating.count !== undefined && (
                            <span className="text-xs text-muted-foreground">
                                ({rating.count})
                            </span>
                        )}

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star
                                        key={index}
                                        className={
                                            index < rating.id
                                                ? "size-4 fill-current text-yellow-500"
                                                : "size-4 text-muted-foreground"
                                        }
                                    />
                                ))}

                                <span className="ms-1 text-sm">
                                    & Up
                                </span>
                            </div>

                            <Checkbox
                                checked={value.includes(rating.id)}
                                onCheckedChange={() =>
                                    toggleRating(rating.id)
                                }
                            />
                        </div>
                    </label>
                ))}
            </div>
        </section>
    )
}