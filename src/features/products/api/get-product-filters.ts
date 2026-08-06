import { publicClient } from "@/lib/axios/public-client"
import { extractData } from "@/lib/axios/extract-data"

import type { ProductFiltersResponse } from "../types"

export async function getProductFilters() {
    const response =
        await publicClient.get("/products/filters/")

    return extractData<ProductFiltersResponse>(response)
}