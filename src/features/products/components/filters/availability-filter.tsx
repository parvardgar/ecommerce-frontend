import type { Availability } from "../../types"
import {
    CheckboxFilterGroup,
    type CheckboxFilterOption,
} from "./checkbox-filter-group"

export interface AvailabilityOption extends CheckboxFilterOption<Availability> {}

interface AvailabilityFilterProps {
    options: AvailabilityOption[]

    value: Availability[]

    onValueChange: (value: Availability[]) => void
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