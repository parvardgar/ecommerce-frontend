export interface Product {
    id: number
    name: string
    slug: string
    image: string

    price: number
    originalPrice?: number

    rating: number
    reviews: number

    badge?: {
        label: string
        variant:
            | "sale"
            | "new"
            | "success"
            | "warning"
            | "destructive"
    }
}