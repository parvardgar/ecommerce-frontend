import type { ProductBadge } from "@/types/product"

export interface ApiProductImage {
    id: string
    image: string
    alt_text: string | null
    sort_order: number
}

export interface ApiProduct {
    id: string
    name: string
    slug: string
    description: string

    price: string
    compare_at_price: string | null

    stock_quantity: number

    category: unknown
    brand: unknown

    images: ApiProductImage[]

    variants: unknown[]

    rating: number
    reviews_count: number

    badge: ProductBadge | null
}