import type { CheckboxFilterOption } from "../components/filters/checkbox-filter-group"

export interface FilterOption {
    value: number
    label: string
    count: number
}

export interface ProductFiltersResponse {
    categories: CheckboxFilterOption<number>[]
    brands: CheckboxFilterOption<number>[]
    ratings: CheckboxFilterOption<number>[]
    availability: CheckboxFilterOption<number>[]

    priceRange: {
        min: number
        max: number
    }
}