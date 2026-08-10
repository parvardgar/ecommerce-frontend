import type {
    Product,
    ProductImage,
} from "@/types/product"

import type { ApiProduct } from "../types/product-api"

function mapProductImage(
    image: ApiProduct["images"][number],
): ProductImage {
    return {
        id: image.id,
        image: image.image,
        altText: image.alt_text,
        sortOrder: image.sort_order,
    }
}

export function mapProduct(
    product: ApiProduct,
): Product {
    return {
        id: product.id,
        name: product.name,
        slug: product.slug,

        price: Number(product.price),

        compareAtPrice:
            product.compare_at_price !== null
                ? Number(product.compare_at_price)
                : null,

        images: product.images.map(
            mapProductImage,
        ),

        rating: product.rating,

        reviewsCount: product.reviews_count,

        badge: product.badge,
    }
}