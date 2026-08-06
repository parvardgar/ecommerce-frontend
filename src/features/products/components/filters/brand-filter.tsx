import {
    CheckboxFilterGroup,
    type CheckboxFilterOption,
} from "./checkbox-filter-group"

export interface BrandOption extends CheckboxFilterOption {}

interface BrandFilterProps {
    brands: BrandOption[]

    value: number[]

    onValueChange: (value: number[]) => void
}

export function BrandFilter(props: BrandFilterProps) {
    return (
        <CheckboxFilterGroup
            title="Brands"
            options={props.brands}
            value={props.value}
            onValueChange={props.onValueChange}
        />
    )
}