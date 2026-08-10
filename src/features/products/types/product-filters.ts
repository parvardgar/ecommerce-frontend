import type { CheckboxFilterOption } from "../components/filters/checkbox-filter-group"

import type { Availability } from "./product-list"

export interface ProductFiltersResponse {
    categories: CheckboxFilterOption<string>[]
    brands: CheckboxFilterOption<string>[]
    ratings: CheckboxFilterOption<number>[]
    availability: CheckboxFilterOption<Availability>[]

    priceRange: {
        min: number
        max: number
    }
}