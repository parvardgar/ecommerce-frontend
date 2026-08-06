import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export type ProductSort =
    | "featured"
    | "newest"
    | "price_asc"
    | "price_desc"
    | "rating"

interface SortDropdownProps {
    value: ProductSort

    onValueChange: (value: ProductSort) => void
}

export function SortDropdown({
    value,
    onValueChange,
}: SortDropdownProps) {
    return (
        <Select
            value={value}
            onValueChange={(value) =>
                onValueChange(value as ProductSort)
            }
        >
            <SelectTrigger className="w-[220px]">
                <SelectValue />
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="featured">
                    Featured
                </SelectItem>

                <SelectItem value="newest">
                    Newest
                </SelectItem>

                <SelectItem value="price-asc">
                    Price: Low to High
                </SelectItem>

                <SelectItem value="price-desc">
                    Price: High to Low
                </SelectItem>

                <SelectItem value="rating">
                    Highest Rated
                </SelectItem>

                <SelectItem value="name">
                    Name (A–Z)
                </SelectItem>
            </SelectContent>
        </Select>
    )
}