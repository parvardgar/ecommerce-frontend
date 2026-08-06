import { Grid2X2, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type ProductView = "grid" | "list"

interface ViewSwitcherProps {
    value: ProductView

    onValueChange: (value: ProductView) => void
}

export function ViewSwitcher({
    value,
    onValueChange,
}: ViewSwitcherProps) {
    return (
        <div className="flex items-center rounded-md border border-border p-1">
            <Button
                type="button"
                size="icon"
                variant={value === "grid" ? "default" : "ghost"}
                onClick={() => onValueChange("grid")}
                aria-label="Grid view"
            >
                <Grid2X2 className="size-4" />
            </Button>

            <Button
                type="button"
                size="icon"
                variant={value === "list" ? "default" : "ghost"}
                onClick={() => onValueChange("list")}
                aria-label="List view"
            >
                <List className="size-4" />
            </Button>
        </div>
    )
}


// One improvement I'd make

// Since you're using TanStack Router, I would not keep sort and view in React state for very long.

// Instead, once the page is working, I'd move them into the route's search params.

// For example:

// /products?sort=price-desc&view=grid&page=2

// That gives you several benefits automatically:

// Users can bookmark or share the exact catalog view.
// Browser back/forward buttons behave as expected.
// Refreshing the page preserves the selected sort and view.
// It integrates naturally with future filters (brand, category, price, etc.).

// So for now we'll use useState to keep development simple,
//  but when we connect the Products page to real data, I recommend migrating
//   these controls to URL search parameters rather than a local store.
//    That fits very well with TanStack Router's strengths.