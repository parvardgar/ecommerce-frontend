import { MainHeader } from "./main-header"
import { Navigation } from "./navigation"
import { TopBar } from "./top-bar"

export function Header() {
    return (
        <header className="sticky top-0 z-40 bg-background">
            <TopBar />

            <MainHeader />

            <Navigation />
        </header>
    )
}