import { Link } from "@tanstack/react-router"

import { Badge } from "./badge"
import { Price } from "./price"
import { Rating } from "./rating"

import type { Product } from "@/types/product"

interface ProductCardProps {
    product: Product
}

export function ProductCard({
    product,
}: ProductCardProps) {
    const image = product.images[0]

    return (
        <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="group block overflow-hidden rounded-xl border bg-background transition-shadow hover:shadow-md"
        >
            <div className="relative aspect-square overflow-hidden bg-muted">
                {image && (
                    <img
                        src={image.image}
                        alt={
                            image.altText ??
                            product.name
                        }
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                )}

                {product.badge && (
                    <div className="absolute left-3 top-3">
                        <Badge
                            variant={
                                product.badge.variant
                            }
                        >
                            {product.badge.label}
                        </Badge>
                    </div>
                )}
            </div>

            <div className="space-y-3 p-4">
                <h3 className="line-clamp-2 font-medium">
                    {product.name}
                </h3>

                <Rating
                    value={product.rating}
                    reviews={product.reviewsCount}
                />

                <Price
                    price={product.price}
                    originalPrice={
                        product.compareAtPrice ??
                        undefined
                    }
                />
            </div>
        </Link>
    )
}