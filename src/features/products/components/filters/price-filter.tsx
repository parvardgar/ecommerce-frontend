import { useEffect, useState } from "react"

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
    const [localValue, setLocalValue] =
        useState<[number, number]>(value)

    /*
     * Keep local state synchronized with the URL/search params.
     *
     * This is important when the user changes another filter,
     * clears filters, changes pages, etc.
     */
    useEffect(() => {
        setLocalValue(value)
    }, [value])

    /*
     * Commit the local value after the user stops changing it.
     *
     * This prevents navigate() from being called for every
     * single slider movement / keystroke.
     */
    useEffect(() => {
        if (
            localValue[0] === value[0] &&
            localValue[1] === value[1]
        ) {
            return
        }

        const timeout = setTimeout(() => {
            onValueChange(localValue)
        }, 400)

        return () => clearTimeout(timeout)
    }, [localValue, value, onValueChange])

    function handleSliderChange(
        nextValue: number | readonly number[],
    ) {
        if (typeof nextValue === "number") {
            return
        }

        const [min, max] = nextValue

        setLocalValue([
            Math.max(range[0], Math.min(min, max)),
            Math.min(range[1], Math.max(max, min)),
        ])
    }

    function handleMinChange(min: number) {
        if (Number.isNaN(min)) {
            return
        }

        setLocalValue([
            Math.max(
                range[0],
                Math.min(min, localValue[1]),
            ),
            localValue[1],
        ])
    }

    function handleMaxChange(max: number) {
        if (Number.isNaN(max)) {
            return
        }

        setLocalValue([
            localValue[0],
            Math.min(
                range[1],
                Math.max(max, localValue[0]),
            ),
        ])
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
                value={localValue}
                onValueChange={handleSliderChange}
            />

            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                    <label
                        htmlFor="price-min"
                        className="text-xs text-muted-foreground"
                    >
                        Min
                    </label>

                    <Input
                        id="price-min"
                        type="number"
                        min={range[0]}
                        max={localValue[1]}
                        value={localValue[0]}
                        onChange={(event) => {
                            handleMinChange(
                                Number(event.target.value),
                            )
                        }}
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="price-max"
                        className="text-xs text-muted-foreground"
                    >
                        Max
                    </label>

                    <Input
                        id="price-max"
                        type="number"
                        min={localValue[0]}
                        max={range[1]}
                        value={localValue[1]}
                        onChange={(event) => {
                            handleMaxChange(
                                Number(event.target.value),
                            )
                        }}
                    />
                </div>
            </div>
        </section>
    )
}






// import { Input } from "@/components/ui/input"
// import { Slider } from "@/components/ui/slider"

// interface PriceFilterProps {
//     range: [number, number]

//     value: [number, number]

//     onValueChange: (value: [number, number]) => void
// }

// export function PriceFilter({
//     range,
//     value,
//     onValueChange,
// }: PriceFilterProps) {
//     function handleSliderChange(
//         value: number | readonly number[],
//     ) {
//         if (typeof value === "number") {
//             return
//         }

//         const [min, max] = value

//         onValueChange([min, max])
//     }

//     function handleMinChange(min: number) {
//         onValueChange([Math.min(min, value[1]), value[1]])
//     }

//     function handleMaxChange(max: number) {
//         onValueChange([value[0], Math.max(max, value[0])])
//     }

//     return (
//         <section className="space-y-4 border-t border-border pt-6">
//             <h3 className="text-sm font-semibold">
//                 Price
//             </h3>

//             <Slider
//                 min={range[0]}
//                 max={range[1]}
//                 step={1}
//                 value={value}
//                 onValueChange={handleSliderChange}
//             />

//             <div className="grid grid-cols-2 gap-3">
//                 <div className="space-y-2">
//                     <label className="text-xs text-muted-foreground">
//                         Min
//                     </label>

//                     <Input
//                         type="number"
//                         min={range[0]}
//                         max={value[1]}
//                         value={value[0]}
//                         onChange={(event) =>
//                             handleMinChange(
//                                 Number(event.target.value),
//                             )
//                         }
//                     />
//                 </div>

//                 <div className="space-y-2">
//                     <label className="text-xs text-muted-foreground">
//                         Max
//                     </label>

//                     <Input
//                         type="number"
//                         min={value[0]}
//                         max={range[1]}
//                         value={value[1]}
//                         onChange={(event) =>
//                             handleMaxChange(
//                                 Number(event.target.value),
//                             )
//                         }
//                     />
//                 </div>
//             </div>
//         </section>
//     )
// }