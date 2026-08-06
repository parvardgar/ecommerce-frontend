import { FooterBottom } from "./footer-bottom"
import { FooterMain } from "./footer-main"

export function Footer() {
    return (
        <footer className="mt-auto border-t bg-muted/20">
            <FooterMain />

            <FooterBottom />
        </footer>
    )
}