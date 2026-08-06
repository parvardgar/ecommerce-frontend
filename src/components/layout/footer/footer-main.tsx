import { Link } from "@tanstack/react-router"

import { Container } from "@/components/common/container"

export function FooterMain() {
    return (
        <Container>
            <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-5">
                <div className="lg:col-span-2">
                    <Link
                        to="/"
                        className="text-xl font-bold"
                    >
                        سیرجان مال
                    </Link>

                    <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                        اعتماد شما به کیفیت ما در قیمت رقابتی است.
                    </p>
                </div>

                <div>
                    <h3 className="font-medium">
                        فروشگاه
                    </h3>
                </div>

                <div>
                    <h3 className="font-medium">
                        کارخانه
                    </h3>
                </div>

                <div>
                    <h3 className="font-medium">
                        پشتیبانی
                    </h3>
                </div>
            </div>
        </Container>
    )
}