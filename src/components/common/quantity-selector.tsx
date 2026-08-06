import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface QuantitySelectorProps {
    value: number

    onChange: (value: number) => void

    min?: number

    max?: number

    className?: string
}

export function QuantitySelector({
    value,
    onChange,
    min = 1,
    max = Infinity,
    className,
}: QuantitySelectorProps) {
    const decrease = () => {
        if (value > min) {
            onChange(value - 1)
        }
    }

    const increase = () => {
        if (value < max) {
            onChange(value + 1)
        }
    }

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-lg border",
                className
            )}
        >
            <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={decrease}
                disabled={value <= min}
            >
                <Minus className="size-4" />
            </Button>

            <span className="min-w-12 text-center font-medium">
                {value}
            </span>

            <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={increase}
                disabled={value >= max}
            >
                <Plus className="size-4" />
            </Button>
        </div>
    )
}