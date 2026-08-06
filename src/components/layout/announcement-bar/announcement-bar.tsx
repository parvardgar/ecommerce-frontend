import { Link } from "@tanstack/react-router"

import { Container } from "@/components/common/container"
import { cn } from "@/lib/utils"

interface AnnouncementBarProps {
    message: React.ReactNode
    href?: string
    className?: string
}

export function AnnouncementBar({
    message,
    href,
    className,
}: AnnouncementBarProps) {
    return (
        <aside
            className={cn(
                "bg-primary text-primary-foreground text-sm",
                className,
            )}
        >
            <Container>
                <div className="flex h-10 items-center justify-center">
                    {href ? (
                        <Link
                            to={href}
                            className="hover:underline"
                        >
                            {message}
                        </Link>
                    ) : (
                        message
                    )}
                </div>
            </Container>
        </aside>
    )
}