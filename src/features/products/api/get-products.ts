import { publicClient } from "@/lib/axios/public-client"
import { extractData } from "@/lib/axios/extract-data"

import type {
    ProductsQueryParams,
    ProductsResponse,
} from "../types"

import type { ApiProduct } from "../types/product-api"

import { mapProduct } from "./product-mappers"

export async function getProducts(
    params: ProductsQueryParams,
) {
    const response = await publicClient.get(
        "products/",
        {
            params: {
                page: params.page,

                ordering: params.sort,

                categories:
                    params.categories.length > 0
                        ? params.categories.join(",")
                        : undefined,

                brands:
                    params.brands.length > 0
                        ? params.brands.join(",")
                        : undefined,

                ratings:
                    params.ratings.length > 0
                        ? params.ratings.join(",")
                        : undefined,

                availability:
                    params.availability.length > 0
                        ? params.availability.join(",")
                        : undefined,

                min_price: params.minPrice,
                max_price: params.maxPrice,
            },
        },
    )

    const data = extractData<{
        items: ApiProduct[]

        pagination: {
            page: number
            page_size: number
            total_items: number
            total_pages: number
            has_next: boolean
            has_previous: boolean
        }
    }>(response)

    return {
        items: data.items.map(mapProduct),

        pagination: data.pagination,
    } satisfies ProductsResponse
}