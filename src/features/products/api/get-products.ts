import { publicClient } from "@/lib/axios/public-client"
import { extractData } from "@/lib/axios/extract-data"

import type {
    ProductsQueryParams,
    ProductsResponse,
} from "../types"

export async function getProducts(
    params: ProductsQueryParams,
) {
    const response =
        await publicClient.get("/products/", {
            params,
        })

    return extractData<ProductsResponse>(response)
}