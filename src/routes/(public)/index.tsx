import { createFileRoute } from "@tanstack/react-router"

import {
    Hero,
    Categories,
    FeaturedProducts,
    PromotionalBanner,
    NewArrivals,
    Brands,
    Newsletter,
} from "@/features/home"

export const Route = createFileRoute("/(public)/")({
    component: HomePage,
})

function HomePage() {
    return (
        <>
            <Hero />

            <Categories />

            <FeaturedProducts />

            <PromotionalBanner />

            <NewArrivals />

            <Brands />

            <Newsletter />
        </>
    )
}