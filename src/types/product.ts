export interface Product {
    id: string
    name: string
    slug: string

    price: number
    compareAtPrice?: number | null

    images: ProductImage[]

    rating: number
    reviewsCount: number

    badge?: ProductBadge | null
}

export interface ProductImage {
    id: string
    image: string
    altText?: string | null
    sortOrder: number
}

export interface ProductBadge {
    label: string
    variant:
        | "sale"
        | "new"
        | "success"
        | "warning"
        | "destructive"
}