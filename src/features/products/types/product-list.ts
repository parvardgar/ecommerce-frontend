import type { Product } from "@/types/product"

export interface ProductsQueryParams {
    page: number

    sort: string

    categories: number[]

    brands: number[]

    ratings: number[]

    availability: number[]

    minPrice: number

    maxPrice: number
}

export interface ProductsResponse {
    count: number

    next: string | null

    previous: string | null

    results: Product[]
}