import { Link } from "@tanstack/react-router"

import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"

const brands = [
    {
        id: 1,
        name: "Apple",
        slug: "apple",
        logo: "/images/brands/apple.svg",
    },
    {
        id: 2,
        name: "Samsung",
        slug: "samsung",
        logo: "/images/brands/samsung.svg",
    },
    {
        id: 3,
        name: "Sony",
        slug: "sony",
        logo: "/images/brands/sony.svg",
    },
    {
        id: 4,
        name: "Nike",
        slug: "nike",
        logo: "/images/brands/nike.svg",
    },
    {
        id: 5,
        name: "Adidas",
        slug: "adidas",
        logo: "/images/brands/adidas.svg",
    },
    {
        id: 6,
        name: "Dell",
        slug: "dell",
        logo: "/images/brands/dell.svg",
    },
]

export function Brands() {
    return (
        <Section className="py-16">
            <Container>
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold">
                        خرید با برند
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                        کاوش در محصولات بهترین برند های مورد اعتماد.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
                    {brands.map((brand) => (
                        <Link
                            key={brand.id}
                            to="/brands/$slug"
                            params={{ slug: brand.slug }}
                            className="group flex h-32 items-center justify-center rounded-xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-md"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="max-h-12 w-auto opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                            />
                        </Link>
                    ))}
                </div>
            </Container>
        </Section>
    )
}