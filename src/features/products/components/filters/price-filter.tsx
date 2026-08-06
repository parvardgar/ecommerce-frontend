import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

interface PriceFilterProps {
    range: [number, number]

    value: [number, number]

    onValueChange: (value: [number, number]) => void
}

export function PriceFilter({
    range,
    value,
    onValueChange,
}: PriceFilterProps) {
    function handleSliderChange(
        value: number | readonly number[],
    ) {
        if (typeof value === "number") {
            return
        }

        const [min, max] = value

        onValueChange([min, max])
    }

    function handleMinChange(min: number) {
        onValueChange([Math.min(min, value[1]), value[1]])
    }

    function handleMaxChange(max: number) {
        onValueChange([value[0], Math.max(max, value[0])])
    }

    return (
        <section className="space-y-4 border-t border-border pt-6">
            <h3 className="text-sm font-semibold">
                Price
            </h3>

            <Slider
                min={range[0]}
                max={range[1]}
                step={1}
                value={value}
                onValueChange={handleSliderChange}
            />

            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">
                        Min
                    </label>

                    <Input
                        type="number"
                        min={range[0]}
                        max={value[1]}
                        value={value[0]}
                        onChange={(event) =>
                            handleMinChange(
                                Number(event.target.value),
                            )
                        }
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">
                        Max
                    </label>

                    <Input
                        type="number"
                        min={value[0]}
                        max={range[1]}
                        value={value[1]}
                        onChange={(event) =>
                            handleMaxChange(
                                Number(event.target.value),
                            )
                        }
                    />
                </div>
            </div>
        </section>
    )
}