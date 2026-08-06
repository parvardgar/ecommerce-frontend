import { Checkbox } from "@/components/ui/checkbox"

export interface CheckboxFilterOption {
    id: number
    label: string
    count?: number
}

interface CheckboxFilterGroupProps {
    title: string

    options: CheckboxFilterOption[]

    value: number[]

    onValueChange: (value: number[]) => void
}

export function CheckboxFilterGroup({
    title,
    options,
    value,
    onValueChange,
}: CheckboxFilterGroupProps) {
    function toggle(id: number) {
        if (value.includes(id)) {
            onValueChange(value.filter((item) => item !== id))
        } else {
            onValueChange([...value, id])
        }
    }

    return (
        <section className="space-y-4 border-t border-border pt-6 first:border-0 first:pt-0">
            <h3 className="text-sm font-semibold">
                {title}
            </h3>

            <div className="space-y-3">
                {options.map((option) => (
                    <label
                        key={option.id}
                        className="flex cursor-pointer items-center justify-between"
                    >
                        {option.count !== undefined && (
                            <span className="text-xs text-muted-foreground">
                                ({option.count})
                            </span>
                        )}

                        <div className="flex items-center gap-3">
                            <span className="text-sm">
                                {option.label}
                            </span>

                            <Checkbox
                                checked={value.includes(option.id)}
                                onCheckedChange={() =>
                                    toggle(option.id)
                                }
                            />
                        </div>
                    </label>
                ))}
            </div>
        </section>
    )
}