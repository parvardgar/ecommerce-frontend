import { useQuery } from "@tanstack/react-query"

import { getProducts } from "./get-products"

import type { ProductsQueryParams } from "../types"
import { getProductFilters } from "./get-product-filters"

export function useProductsQuery(
    params: ProductsQueryParams,
) {
    return useQuery({
        queryKey: [
            "products",
            params,
        ],

        queryFn: () => getProducts(params),
    })
}

export function useProductFiltersQuery() {
    return useQuery({
        queryKey: ["product-filters"],

        queryFn: getProductFilters,

        staleTime: Infinity,
    })
}