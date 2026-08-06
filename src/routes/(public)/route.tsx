import { createFileRoute } from "@tanstack/react-router"

import { PublicLayout } from "@/layouts/public-layout"

export const Route = createFileRoute("/(public)")({
    component: PublicLayout,
})