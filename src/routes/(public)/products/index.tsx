import { createFileRoute } from "@tanstack/react-router"

import { ProductListPage } from "@/features/products/components/product-list-page"

export const Route = createFileRoute("/(public)/products/")({
    component: ProductListPage,
})
