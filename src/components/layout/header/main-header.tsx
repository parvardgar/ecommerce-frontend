import { Link } from "@tanstack/react-router"
import {
    Heart,
    Menu,
    Search,
    ShoppingCart,
    User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/common/container"

export function MainHeader() {
    return (
        <Container>
            <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
                {/* Mobile menu */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                >
                    <Menu className="size-5" />
                </Button>

                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl font-bold tracking-tight"
                >
                    سیرجان مال
                </Link>

                {/* Search */}
                <div className="hidden flex-1 lg:block">
                    <div className="flex h-11 items-center rounded-md border bg-background px-3">
                        <Search className="mr-2 size-4 text-muted-foreground" />

                        <input
                            className="flex-1 bg-transparent text-sm outline-none"
                            placeholder="جستجو محصولات ..."
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hidden md:flex"
                    >
                        <Search className="size-5 lg:hidden" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                    >
                        <Heart className="size-5" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                    >
                        <ShoppingCart className="size-5" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                    >
                        <User className="size-5" />
                    </Button>
                </div>
            </div>
        </Container>
    )
}