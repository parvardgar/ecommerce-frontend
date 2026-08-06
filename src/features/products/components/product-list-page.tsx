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
import { PageLayout } from "@/components/common/page-layout"
import { Route } from "@/routes/(public)/products"
import { useProductFiltersQuery, useProductsQuery } from "@/features/products/api"
import { LoadingState } from "@/components/common/loading-state"
import { ErrorState } from "@/components/common/error-state"
import { EmptyState } from "@/components/common/empty-state"

export function ProductListPage() {
    const search = Route.useSearch()
    const navigate = Route.useNavigate()

    const productsQuery = useProductsQuery({
        page: search.page,

        sort: search.sort,

        categories: search.categories,

        brands: search.brands,

        ratings: search.ratings,

        availability: search.availability,

        minPrice: search.minPrice,

        maxPrice: search.maxPrice,
    })
    const filtersQuery = useProductFiltersQuery()
    
    const setPage = (page: number) =>
        navigate({
            search: (prev) => ({
                ...prev,
                page,
            }),
        })

    const setSort = (sort: ProductSort) =>
        navigate({
            search: (prev) => ({
                ...prev,
                page: 1,
                sort,
            }),
        })

    const setView = (view: ProductView) =>
        navigate({
            search: (prev) => ({
                ...prev,
                view,
            }),
        })

    const setCategories = (categories: number[]) =>
        navigate({
            search: (prev) => ({
                ...prev,
                page: 1,
                categories,
            }),
        })

    const setBrands = (brands: number[]) =>
        navigate({
            search: (prev) => ({
                ...prev,
                page: 1,
                brands,
            }),
        })

    const setRatings = (ratings: number[]) =>
        navigate({
            search: (prev) => ({
                ...prev,
                page: 1,
                ratings,
            }),
        })

    const setAvailability = (availability: number[]) =>
        navigate({
            search: (prev) => ({
                ...prev,
                page: 1,
                availability,
            }),
        })

    const setPriceRange = (
        [minPrice, maxPrice]: [number, number],
    ) =>
        navigate({
            search: (prev) => ({
                ...prev,
                page: 1,
                minPrice,
                maxPrice,
            }),
        })
    
    if (productsQuery.isPending || filtersQuery.isPending) {
        return (
            <Container className="py-10">
                <LoadingState
                    title="Loading products"
                    description="Please wait while we fetch the latest products."
                />
            </Container>
        )
    }
    if (productsQuery.isError || filtersQuery.isError) {
        return (
            <Container className="py-10">
                <ErrorState
                    title="Failed to load products"
                    description="We couldn't load the products. Please try again."
                    onRetry={() => productsQuery.refetch()}
                />
            </Container>
        )
    }

    const data = productsQuery.data
    const products = data?.results ?? []
    const filters = filtersQuery.data

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
                    description={`Showing ${data?.count ?? 0} products`}
                />

                <PageLayout
                    sidebar={
                        <FiltersSidebar
                            categories={filters.categories}
                            selectedCategories={search.categories}
                            onSelectedCategoriesChange={setCategories}
                            brands={filters.brands}
                            selectedBrands={search.brands}
                            onSelectedBrandsChange={setBrands}
                            priceRange={[
                                search.minPrice,
                                search.maxPrice,
                            ]}
                            onPriceRangeChange={setPriceRange}
                            ratings={filters.ratings}
                            selectedRatings={search.ratings}
                            onSelectedRatingsChange={setRatings}
                            availabilityOptions={filters.availability}
                            selectedAvailability={search.availability}
                            onSelectedAvailabilityChange={setAvailability}
                        />
                    }
                >
                    <ProductToolbar
                        totalProducts={data?.count ?? 0}
                        sort={
                            <SortDropdown
                                value={search.sort}
                                onValueChange={setSort}
                            />
                        }
                        view={
                            <ViewSwitcher
                                value={search.view}
                                onValueChange={setView}
                            />
                        }
                    />

                    {products.length === 0 ? (
                        <EmptyState
                            title="No products found"
                            description="Try changing your filters or search criteria."
                            actionLabel="Clear filters"
                            onAction={() =>
                                navigate({
                                    search: (prev) => ({
                                        ...prev,
                                        page: 1,
                                        categories: [],
                                        brands: [],
                                        ratings: [],
                                        availability: [],
                                        minPrice: 0,
                                        maxPrice: 5000,
                                    }),
                                })
                            }
                        />
                    ) : (
                        <ProductGrid>
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </ProductGrid>
                    )}

                    <ProductPagination
                        page={search.page}
                        totalPages={
                            Math.max(
                                1,
                                Math.ceil((data?.count ?? 0) / 12),
                            )
                        }
                        onPageChange={setPage}
                    />
                </PageLayout>
            </div>
        </Container>
    )
}