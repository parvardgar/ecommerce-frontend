import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"

import { ProductCard } from "@/components/common/product-card"
import { ProductGrid } from "@/components/common/product-grid"

import type { Product } from "@/types/product"

const products: Product[] = [
    {
        id: "featured-1",
        slug: "iphone-16-pro",
        name: "iPhone 16 Pro",

        images: [
            {
                id: "featured-image-1",
                image: "/images/products/iphone-16-pro.webp",
                altText: "iPhone 16 Pro",
                sortOrder: 0,
            },
        ],

        price: 999,
        compareAtPrice: 1099,

        rating: 4.8,
        reviewsCount: 124,

        badge: {
            label: "New",
            variant: "new",
        },
    },

    {
        id: "featured-2",
        slug: "sony-wh1000xm6",
        name: "Sony WH-1000XM6",

        images: [
            {
                id: "featured-image-2",
                image: "/images/products/sony-wh1000xm6.webp",
                altText: "Sony WH-1000XM6",
                sortOrder: 0,
            },
        ],

        price: 399,
        compareAtPrice: 449,

        rating: 4.9,
        reviewsCount: 89,

        badge: {
            label: "Sale",
            variant: "sale",
        },
    },

    {
        id: "featured-3",
        slug: "apple-watch-ultra-2",
        name: "Apple Watch Ultra 2",

        images: [
            {
                id: "featured-image-3",
                image: "/images/products/apple-watch-ultra.webp",
                altText: "Apple Watch Ultra 2",
                sortOrder: 0,
            },
        ],

        price: 799,

        rating: 4.7,
        reviewsCount: 56,
    },

    {
        id: "featured-4",
        slug: "ipad-air-m3",
        name: "iPad Air M3",

        images: [
            {
                id: "featured-image-4",
                image: "/images/products/ipad-air.webp",
                altText: "iPad Air M3",
                sortOrder: 0,
            },
        ],

        price: 699,
        compareAtPrice: 749,

        rating: 4.8,
        reviewsCount: 73,

        badge: {
            label: "Popular",
            variant: "success",
        },
    },
]

export function NewArrivals() {
    return (
        <Section className="py-16">
            <Container>
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold">
                            جدیدترین ها
                        </h2>

                        <p className="mt-2 text-muted-foreground">
                            محصولات تازه که در فروشگاه ما اضافه شدند.
                        </p>
                    </div>

                    <Link
                        to="/products"
                        search={{ sort: "newest" }}
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