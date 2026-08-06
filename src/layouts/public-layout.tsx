import { Outlet } from "@tanstack/react-router"

import { AnnouncementBar } from "@/components/layout/announcement-bar/announcement-bar"
import { Footer } from "@/components/layout/footer/footer"
import { Header } from "@/components/layout/header/header"

export function PublicLayout() {
    return (
        <div className="flex min-h-dvh flex-col bg-background">
            <AnnouncementBar
                message="🎉 ارسال رایگان برای خریدهای بیشتر از 1 میلیون تومان"
                href="/products"
            />

            <Header />

            <main
                id="main-content"
                className="flex-1"
            >
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}