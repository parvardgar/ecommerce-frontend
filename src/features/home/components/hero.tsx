import {
    ArrowRight,
    Headphones,
    ShieldCheck,
    Truck,
} from "lucide-react"

import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { Button} from "@/components/ui/button"

export function Hero() {
    return (
        <Section className="overflow-hidden py-20">
            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Content */}

                    <div>
                        <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                            کلکسیون جدید 2026
                        </span>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            هرچیز که شما نیاز دارید،
                            <br />
                            همه در یک مکان.
                        </h1>

                        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                            پیدا کردن بهترین محصولات با ارسال سریع، پرداخت امن و قیمت های باور نکردنی.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button to="/products" size="lg">
                                الان بخر
                                <ArrowRight className="ml-2 size-4" />
                            </Button>

                            <Button
                                to="/categories"
                                variant="outline"
                                size="lg"
                            >
                                کاوش در دسته بندی ها
                            </Button>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Truck className="size-5" />
                                <span>ارسال رایگان</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <ShieldCheck className="size-5" />
                                <span>پرداخت امن</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Headphones className="size-5" />
                                <span>پشتیبانی 24 ساعته</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}

                    <div className="relative">
                        <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl" />

                        <img
                            src="/images/home/hero.webp"
                            alt="Featured products"
                            className="relative w-full rounded-3xl object-cover shadow-2xl"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    )
}