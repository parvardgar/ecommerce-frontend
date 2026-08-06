import { Link } from "@tanstack/react-router"

import { Container } from "@/components/common/container"

const navigation = [
    {
        label: "خانه",
        to: "/",
    },
    {
        label: "محصولات",
        to: "/products",
    },
    {
        label: "دسته ها",
        to: "/categories",
    },
    {
        label: "برندها",
        to: "/brands",
    },
    {
        label: "درباره",
        to: "/about",
    },
    {
        label: "تماس",
        to: "/contact",
    },
]

export function Navigation() {
    return (
        <div className="hidden border-y lg:block">
            <Container>
                <nav className="flex h-12 items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </Container>
        </div>
    )
}