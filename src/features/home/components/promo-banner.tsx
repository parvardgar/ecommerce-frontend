import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"

export function PromotionalBanner() {
    return (
        <Section className="py-16">
            <Container>
                <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground lg:px-16">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_45%)]" />

                    <div className="relative max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-widest opacity-90">
                            پیشنهاد محدود
                        </span>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
                            فروش تابستانی
                            <br />
                            تا 50 درصد تخفیف
                        </h2>

                        <p className="mt-6 text-lg opacity-90">
                            معاملات باورنکردنی هزاران محصول.
                            تا پیشنهاد تموم نشده بخر.
                        </p>

                        <div className="mt-8">
                            <Link
                                to="/products"
                                className="inline-flex h-11 items-center justify-center rounded-md bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
                            >
                                Shop Sale
                                <ArrowRight className="ml-2 size-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}