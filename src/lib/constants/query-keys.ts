export const queryKeys = {
  auth: {
    me: ["auth", "me"] as const,
  },

  products: {
    all: ["products"] as const,

    detail: (slug: string) =>
      ["products", slug] as const,

    category: (slug: string) =>
      ["products", "category", slug] as const,
  },

  cart: {
    current: ["cart"] as const,
  },
}