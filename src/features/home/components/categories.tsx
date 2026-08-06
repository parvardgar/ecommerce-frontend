import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"

const categories = [
    {
        id: 1,
        name: "الکترونیکی",
        slug: "electronics",
        image: "/images/categories/electronics.webp",
        products: 248,
    },
    {
        id: 2,
        name: "مد",
        slug: "fashion",
        image: "/images/categories/fashion.webp",
        products: 173,
    },
    {
        id: 3,
        name: "خانه و آشپزخانه",
        slug: "home-kitchen",
        image: "/images/categories/home.webp",
        products: 95,
    },
    {
        id: 4,
        name: "ورزشی",
        slug: "sports",
        image: "/images/categories/sports.webp",
        products: 132,
    },
]

export function Categories() {
    return (
        <Section className="py-16">
            <Container>
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold">
                            خرید با دسته بندی
                        </h2>

                        <p className="mt-2 text-muted-foreground">
                            کاوش در معروف ترین دسته بندی های ما.
                        </p>
                    </div>

                    <Link
                        to="/categories"
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                        مشاهده همه
                        <ArrowRight className="size-4" />
                    </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to="/categories/$slug"
                            params={{ slug: category.slug }}
                            className="group overflow-hidden rounded-xl border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="font-semibold">
                                    {category.name}
                                </h3>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    {category.products} محصولات
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </Section>
    )
}