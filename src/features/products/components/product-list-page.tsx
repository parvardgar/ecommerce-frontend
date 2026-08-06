import type { Product } from "@/types/product"
import { useState } from "react"

import { Breadcrumb } from "@/components/common/breadcrumb"
import { Container } from "@/components/common/container"
import { PageHeader } from "@/components/common/page-header"

import { ProductCard } from "@/components/common/product-card"
import { ProductGrid } from "@/components/common/product-grid"

import { FiltersSidebar } from "@/features/products/components/filters/filters-sidebar"
import { ProductPagination } from "@/features/products/components/pagination/pagination"

import {
    ProductToolbar,
} from "@/features/products/components/toolbar/product-toolbar"

import {
    SortDropdown,
    type ProductSort,
} from "@/features/products/components/toolbar/sort-dropdown"

import {
    ViewSwitcher,
    type ProductView,
} from "@/features/products/components/toolbar/view-switcher"

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

const categories = [
    { id: 1, label: "Electronics", count: 42 },
    { id: 2, label: "Fashion", count: 18 },
    { id: 3, label: "Accessories", count: 33 },
]

const brands = [
    { id: 1, label: "Apple", count: 18 },
    { id: 2, label: "Sony", count: 9 },
    { id: 3, label: "Samsung", count: 14 },
]

const ratings = [
    { value: 4, count: 52 },
    { value: 3, count: 81 },
    { value: 2, count: 97 },
]

const availabilityOptions = [
    { id: 1, label: "In Stock" },
    { id: 2, label: "On Sale" },
]

export function ProductListPage() {
    const [sort, setSort] =
        useState<ProductSort>("featured")

    const [view, setView] =
        useState<ProductView>("grid")

    const [page, setPage] =
        useState(1)

    const [selectedCategories, setSelectedCategories] =
        useState<number[]>([])

    const [selectedBrands, setSelectedBrands] =
        useState<number[]>([])

    const [priceRange, setPriceRange] =
        useState<[number, number]>([0, 5000])

    const [selectedRatings, setSelectedRatings] =
        useState<number[]>([])

    const [selectedAvailability, setSelectedAvailability] =
        useState<number[]>([])
    return (
        <Container className="py-10">
            <div className="space-y-8">
                <Breadcrumb
                    items={[
                        {
                            label: "Products",
                            to: "/products",
                        },
                        {
                            label: "Headphones",
                        },
                    ]}
                />

                <PageHeader
                    title="Products"
                    description="Showing 12 products"
                />

                <div className="flex flex-col gap-8 lg:flex-row">
                    <aside className="w-full lg:w-[280px] lg:flex-shrink-0">
                        <FiltersSidebar
                            categories={categories}
                            selectedCategories={selectedCategories}
                            onSelectedCategoriesChange={setSelectedCategories}

                            brands={brands}
                            selectedBrands={selectedBrands}
                            onSelectedBrandsChange={setSelectedBrands}

                            priceRange={priceRange}
                            onPriceRangeChange={setPriceRange}

                            ratings={ratings}
                            selectedRatings={selectedRatings}
                            onSelectedRatingsChange={setSelectedRatings}

                            availabilityOptions={availabilityOptions}
                            selectedAvailability={selectedAvailability}
                            onSelectedAvailabilityChange={setSelectedAvailability}
                        />
                    </aside>
                    <div className="min-w-0 flex-1 space-y-8">
                        <ProductToolbar
                            totalProducts={products.length}
                            sort={
                                <SortDropdown
                                    value={sort}
                                    onValueChange={setSort}
                                />
                            }
                            view={
                                <ViewSwitcher
                                    value={view}
                                    onValueChange={setView}
                                />
                            }
                        />

                        <ProductGrid>
                            {products.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </ProductGrid>

                        <ProductPagination
                            page={page}
                            totalPages={8}
                            onPageChange={setPage}
                        />
                    </div>
                    
                </div>
            </div>
        </Container>
    )
}





// I would change one thing

// Now that we've reached the end of the Products page UI, I would not keep page, sort, view, and all filter selections in useState.

// Your stack includes TanStack Router, and this is exactly what its typed search parameters are designed for.

// Instead of:

// const [page, setPage] = useState(1)
// const [sort, setSort] = useState("featured")

// I'd aim for URLs like:

// /products?page=2
// /products?page=2&sort=price-desc
// /products?page=2&sort=price-desc&brand=3&category=5

// That gives you:

// Refresh-safe state
// Shareable URLs
// Browser back/forward support
// Better SEO and analytics
// A single source of truth for the catalog state