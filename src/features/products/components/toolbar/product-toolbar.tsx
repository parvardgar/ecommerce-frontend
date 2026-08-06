import { SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductToolbarProps {
    totalProducts: number

    sort?: React.ReactNode

    view?: React.ReactNode

    onFilterClick?: () => void

    className?: string
}

export function ProductToolbar({
    totalProducts,
    sort,
    view,
    onFilterClick,
    className,
}: ProductToolbarProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-4 rounded-lg border border-border bg-card p-4 md:flex-row md:items-center md:justify-between",
                className,
            )}
        >
            <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-medium text-foreground">
                    {totalProducts}
                </span>{" "}
                products
            </p>

            <div className="flex items-center gap-3">
                <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    onClick={onFilterClick}
                >
                    <SlidersHorizontal className="mr-2 size-4" />

                    Filters
                </Button>

                {sort}

                {view}
            </div>
        </div>
    )
}


{/* <ProductToolbar
    total={124}
    onFilterClick={() => setOpen(true)}
    sort={<SortDropdown />}
    view={<ViewSwitcher />}
/>

Notice the toolbar doesn't know what the sort component
or view switcher look like. It just places them correctly. */}


// Why use sort and view as ReactNode?

// Instead of coupling the toolbar to specific components:

// <ProductToolbar />

// that internally imports:

// <SortDropdown />
// <ViewSwitcher />

// we compose it:

// <ProductToolbar
//     total={products.length}
//     sort={<SortDropdown />}
//     view={<ViewSwitcher />}
// />

// This makes the toolbar reusable and easier to test.