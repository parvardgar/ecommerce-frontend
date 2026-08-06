import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { ProductGrid } from "@/components/common/product-grid"
import { ProductCard } from "@/components/common/product-card"
import type { Product } from "@/types/product"

const products: Product[] = [
    {
        id: 1,
        slug: "iphone-16-pro",
        name: "iPhone 16 Pro",
        image: "/images/products/iphone-16-pro.webp",

        price: 999,
        originalPrice: 1099,

        rating: 4.8,
        reviews: 124,

        badge: {
            label: "New",
            variant: "sale",
        },
    },

    {
        id: 2,
        slug: "sony-wh1000xm6",
        name: "Sony WH-1000XM6",
        image: "/images/products/sony-wh1000xm6.webp",

        price: 399,
        originalPrice: 449,

        rating: 4.9,
        reviews: 89,

        badge: {
            label: "Sale",
            variant: "destructive",
        },
    },

    {
        id: 3,
        slug: "apple-watch-ultra-2",
        name: "Apple Watch Ultra 2",
        image: "/images/products/apple-watch-ultra.webp",

        price: 799,

        rating: 4.7,
        reviews: 56,
    },

    {
        id: 4,
        slug: "ipad-air-m3",
        name: "iPad Air M3",
        image: "/images/products/ipad-air.webp",

        price: 699,
        originalPrice: 749,

        rating: 4.8,
        reviews: 73,

        badge: {
            label: "Popular",
            variant: "sale",
        },
    },
]

export function FeaturedProducts() {
    return (
        <Section className="py-16">
            <Container>
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold">
                            محصولات ویژه
                        </h2>

                        <p className="mt-2 text-muted-foreground">
                            محصولات دستچین شده مخصوص شما.
                        </p>
                    </div>

                    <Link
                        to="/products"
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                        مشاهده همه
                        <ArrowRight className="size-4" />
                    </Link>
                </div>

                <ProductGrid>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </ProductGrid>
            </Container>
        </Section>
    )
}