import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"

import { ProductListPage } from "@/features/products/components/product-list-page"


const productsSearchSchema = z.object({
    page: z.number().catch(1),

    sort: z
        .enum([
            "featured",
            "newest",
            "price_asc",
            "price_desc",
            "rating",
        ])
        .catch("featured"),

    view: z
        .enum([
            "grid",
            "list",
        ])
        .catch("grid"),

    categories: z.array(z.number()).catch([]),

    brands: z.array(z.number()).catch([]),

    ratings: z.array(z.number()).catch([]),

    availability: z.array(z.number()).catch([]),

    minPrice: z.number().catch(0),

    maxPrice: z.number().catch(5000),
})

export const Route = createFileRoute("/(public)/products/")({
    validateSearch: productsSearchSchema,
    component: ProductListPage,
})
