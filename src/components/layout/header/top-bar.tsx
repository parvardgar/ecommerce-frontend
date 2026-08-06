import { Link } from "@tanstack/react-router"

import { Container } from "@/components/common/container"

export function TopBar() {
    return (
        <div className="hidden border-b bg-muted/30 text-muted-foreground md:block">
            <Container>
                <div className="flex h-9 items-center justify-between text-xs">
                    <div className="flex items-center gap-4">
                        <span>پشتیبانی: support@example.com</span>
                    </div>

                    <nav className="flex items-center gap-4">
                        <Link
                            to="/help"
                            className="transition-colors hover:text-foreground"
                        >
                            کمک
                        </Link>

                        <Link
                            to="/track-order"
                            className="transition-colors hover:text-foreground"
                        >
                            پیگیری سفارش
                        </Link>
                    </nav>
                </div>
            </Container>
        </div>
    )
}