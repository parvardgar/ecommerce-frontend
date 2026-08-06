import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface ProductPaginationProps {
    page: number

    totalPages: number

    onPageChange: (page: number) => void
}

export function ProductPagination({
    page,
    totalPages,
    onPageChange,
}: ProductPaginationProps) {
    function getVisiblePages() {
        const pages: (number | "ellipsis")[] = []

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }

            return pages
        }

        pages.push(1)

        if (page > 3) {
            pages.push("ellipsis")
        }

        const start = Math.max(2, page - 1)
        const end = Math.min(totalPages - 1, page + 1)

        for (let i = start; i <= end; i++) {
            pages.push(i)
        }

        if (page < totalPages - 2) {
            pages.push("ellipsis")
        }

        pages.push(totalPages)

        return pages
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={(event) => {
                            event.preventDefault()

                            if (page > 1) {
                                onPageChange(page - 1)
                            }
                        }}
                    />
                </PaginationItem>

                {getVisiblePages().map((item, index) =>
                    item === "ellipsis" ? (
                        <PaginationItem key={`ellipsis-${index}`}>
                            <PaginationEllipsis />
                        </PaginationItem>
                    ) : (
                        <PaginationItem key={item}>
                            <PaginationLink
                                href="#"
                                isActive={item === page}
                                onClick={(event) => {
                                    event.preventDefault()

                                    onPageChange(item)
                                }}
                            >
                                {item}
                            </PaginationLink>
                        </PaginationItem>
                    ),
                )}

                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={(event) => {
                            event.preventDefault()

                            if (page < totalPages) {
                                onPageChange(page + 1)
                            }
                        }}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}