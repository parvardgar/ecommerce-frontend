import type { Product } from "@/types/product"

export type Availability =
    | "in_stock"
    | "out_of_stock"

export interface ProductsQueryParams {
    page: number

    sort: string

    categories: string[]

    brands: string[]

    ratings: number[]

    availability: Availability[]

    minPrice: number

    maxPrice: number
}

export interface ProductsResponse {
    items: Product[]

    pagination: {
        page: number
        page_size: number
        total_items: number
        total_pages: number
        has_next: boolean
        has_previous: boolean
    }
}

export const PRODUCTS_PAGE_SIZE = 20