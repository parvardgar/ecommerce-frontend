import {
    CheckboxFilterGroup,
    type CheckboxFilterOption,
} from "./checkbox-filter-group"

export interface CategoryOption extends CheckboxFilterOption {}

interface CategoryFilterProps {
    categories: CategoryOption[]

    value: string[]

    onValueChange: (value: string[]) => void
}

export function CategoryFilter(props: CategoryFilterProps) {
    return (
        <CheckboxFilterGroup
            title="Categories"
            options={props.categories}
            value={props.value}
            onValueChange={props.onValueChange}
        />
    )
}