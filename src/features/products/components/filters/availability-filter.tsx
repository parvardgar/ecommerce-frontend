import {
    CheckboxFilterGroup,
    type CheckboxFilterOption,
} from "./checkbox-filter-group"

export interface AvailabilityOption extends CheckboxFilterOption {}

interface AvailabilityFilterProps {
    options: AvailabilityOption[]

    value: number[]

    onValueChange: (value: number[]) => void
}

export function AvailabilityFilter(props: AvailabilityFilterProps) {
    return (
        <CheckboxFilterGroup
            title="Availability"
            options={props.options}
            value={props.value}
            onValueChange={props.onValueChange}
        />
    )
}