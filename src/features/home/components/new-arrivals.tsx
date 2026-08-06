import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"

import { ProductCard } from "@/components/common/product-card"
import { ProductGrid } from "@/components/common/product-grid"

import type { Product } from "@/types/product"

const products: Product[] = [
    {
        id: 101,
        slug: "macbook-air-m4",
        name: "MacBook Air M4",
        image: "/images/products/macbook-air-m4.webp",
        price: 1299,
        originalPrice: 1399,
        rating: 4.9,
        reviews: 32,
        badge: {
            label: "New",
            variant: "sale",
        },
    },
    {
        id: 102,
        slug: "galaxy-s26",
        name: "Samsung Galaxy S26",
        image: "/images/products/galaxy-s26.webp",
        price: 999,
        rating: 4.8,
        reviews: 21,
    },
    {
        id: 103,
        slug: "airpods-pro-3",
        name: "AirPods Pro 3",
        image: "/images/products/airpods-pro-3.webp",
        price: 299,
        rating: 4.7,
        reviews: 45,
        badge: {
            label: "Hot",
            variant: "destructive",
        },
    },
    {
        id: 104,
        slug: "steam-deck-oled",
        name: "Steam Deck OLED",
        image: "/images/products/steam-deck-oled.webp",
        price: 649,
        rating: 4.9,
        reviews: 67,
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