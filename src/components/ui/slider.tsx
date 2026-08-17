import { Slider as SliderPrimitive } from "@base-ui/react/slider"

import { cn } from "@/lib/utils"

function Slider({
    className,
    defaultValue,
    value,
    min = 0,
    max = 100,
    ...props
}: SliderPrimitive.Root.Props) {
    const values = Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max]

    return (
        <SliderPrimitive.Root
            data-slot="slider"
            className={cn(
                "data-horizontal:w-full data-vertical:h-full",
                className,
            )}
            defaultValue={defaultValue}
            value={value}
            min={min}
            max={max}
            thumbAlignment="edge"
            {...props}
        >
            <SliderPrimitive.Control
                className={cn(
                    "relative flex w-full touch-none items-center select-none",
                    "data-disabled:opacity-50",
                    "data-vertical:h-full",
                    "data-vertical:min-h-40",
                    "data-vertical:w-auto",
                    "data-vertical:flex-col",
                )}
            >
                <SliderPrimitive.Track
                    data-slot="slider-track"
                    className={cn(
                        "relative grow overflow-hidden bg-input/50 select-none",
                        "data-horizontal:h-1",
                        "data-horizontal:w-full",
                        "data-vertical:h-full",
                        "data-vertical:w-1",
                    )}
                >
                    <SliderPrimitive.Indicator
                        data-slot="slider-range"
                        className="bg-primary select-none"
                    />
                </SliderPrimitive.Track>

                {values.map((_, index) => (
                    <SliderPrimitive.Thumb
                        key={index}
                        data-slot="slider-thumb"
                        className={cn(
                            "block size-4 shrink-0 rounded-full",
                            "border-2 border-background",
                            "bg-primary",
                            "shadow-sm",
                            "transition-shadow",
                            "hover:ring-4 hover:ring-ring/20",
                            "focus-visible:ring-4 focus-visible:ring-ring/20",
                            "focus-visible:outline-none",
                            "disabled:pointer-events-none",
                            "disabled:opacity-50",
                        )}
                    />
                ))}
            </SliderPrimitive.Control>
        </SliderPrimitive.Root>
    )
}

export { Slider }




// import { Slider as SliderPrimitive } from "@base-ui/react/slider"

// import { cn } from "@/lib/utils"

// function Slider({
//   className,
//   defaultValue,
//   value,
//   min = 0,
//   max = 100,
//   ...props
// }: SliderPrimitive.Root.Props) {
//   const _values = Array.isArray(value)
//     ? value
//     : Array.isArray(defaultValue)
//       ? defaultValue
//       : [min, max]

//   return (
//     <SliderPrimitive.Root
//       className={cn("data-horizontal:w-full data-vertical:h-full", className)}
//       data-slot="slider"
//       defaultValue={defaultValue}
//       value={value}
//       min={min}
//       max={max}
//       thumbAlignment="edge"
//       {...props}
//     >
//       <SliderPrimitive.Control className="relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col">
//         <SliderPrimitive.Track
//           data-slot="slider-track"
//           className="relative grow overflow-hidden bg-input/50 select-none data-horizontal:h-0.5 data-horizontal:w-full data-vertical:h-full data-vertical:w-0.5"
//         >
//           <SliderPrimitive.Indicator
//             data-slot="slider-range"
//             className="bg-primary select-none data-horizontal:h-full data-vertical:w-full"
//           />
//         </SliderPrimitive.Track>
//         {Array.from({ length: _values.length }, (_, index) => (
//           <SliderPrimitive.Thumb
//             data-slot="slider-thumb"
//             key={index}
//             className="block size-3 shrink-0 border-none bg-primary transition-colors select-none hover:ring-2 hover:ring-ring/30 focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
//           />
//         ))}
//       </SliderPrimitive.Control>
//     </SliderPrimitive.Root>
//   )
// }

// export { Slider }
