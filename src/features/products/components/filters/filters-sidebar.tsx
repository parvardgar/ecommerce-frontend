import { CategoryFilter, type CategoryOption } from "./category-filter"
import { BrandFilter, type BrandOption } from "./brand-filter"
import { PriceFilter } from "./price-filter"
import {
    RatingFilter,
    type RatingOption,
} from "./rating-filter"
import {
    AvailabilityFilter,
    type AvailabilityOption,
} from "./availability-filter"

import { cn } from "@/lib/utils"

interface FiltersSidebarProps {
    categories: CategoryOption[]
    selectedCategories: number[]
    onSelectedCategoriesChange: (value: number[]) => void

    brands: BrandOption[]
    selectedBrands: number[]
    onSelectedBrandsChange: (value: number[]) => void

    priceRange: [number, number]
    onPriceRangeChange: (value: [number, number]) => void

    ratings: RatingOption[]
    selectedRatings: number[]
    onSelectedRatingsChange: (value: number[]) => void

    availabilityOptions: AvailabilityOption[]
    selectedAvailability: number[]
    onSelectedAvailabilityChange: (value: number[]) => void

    className?: string
}

export function FiltersSidebar({
    categories,
    selectedCategories,
    onSelectedCategoriesChange,

    brands,
    selectedBrands,
    onSelectedBrandsChange,

    priceRange,
    onPriceRangeChange,

    ratings,
    selectedRatings,
    onSelectedRatingsChange,

    availabilityOptions,
    selectedAvailability,
    onSelectedAvailabilityChange,

    className,
}: FiltersSidebarProps) {
    return (
        <aside
            className={cn(
                "sticky top-24 h-fit rounded-xl border border-border bg-card p-5",
                className,
            )}
        >
            <div className="mb-6">
                <h2 className="text-lg font-semibold">
                    Filters
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    Narrow down products
                </p>
            </div>

            <div className="space-y-6">
                <CategoryFilter
                    categories={categories}
                    value={selectedCategories}
                    onValueChange={onSelectedCategoriesChange}
                />

                <BrandFilter
                    brands={brands}
                    value={selectedBrands}
                    onValueChange={onSelectedBrandsChange}
                />

                <PriceFilter
                    range={[0, 5000]}
                    value={priceRange}
                    onValueChange={onPriceRangeChange}
                />

                <RatingFilter
                    ratings={ratings}
                    value={selectedRatings}
                    onValueChange={onSelectedRatingsChange}
                />

                <AvailabilityFilter
                    options={availabilityOptions}
                    value={selectedAvailability}
                    onValueChange={onSelectedAvailabilityChange}
                />
            </div>
        </aside>
    )
}




// One improvement I'd make before we continue

// This component now has 15+ props, which is a sign that we're passing around related state individually.

// Once we connect this page to TanStack Router
//  search params (or a dedicated filter hook), I would introduce a ProductFilters model, for example:

// interface ProductFilters {
//     categories: number[]
//     brands: number[]
//     priceRange: [number, number]
//     ratings: number[]
//     availability: number[]
// }