import { Mail } from "lucide-react"

import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        // TODO:
        // Connect to newsletter API
    }

    return (
        <Section className="py-20">
            <Container>
                <div className="rounded-3xl border bg-muted/40 px-6 py-12 md:px-12">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Mail className="size-6" />
                        </div>

                        <h2 className="mt-6 text-3xl font-bold">
                            عضویت در مجله ما
                        </h2>

                        <p className="mt-3 text-muted-foreground">
                            اولین نفر باشید که از محصولات جدید، پیشنهاد های منحصر بفرد و 
                            تخفیفات مخصوص با خبر میشید.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 flex flex-col gap-4 sm:flex-row"
                        >
                            <Input
                                type="email"
                                placeholder="ایمیل شما"
                                required
                                className="flex-1"
                            />

                            <Button type="submit">
                                عضویت
                            </Button>
                        </form>

                        <p className="mt-4 text-xs text-muted-foreground">
                            به حریم خصوصی شما احترام گذاشته میشه، می توانید عضویت خود را باطل کنید.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    )
}