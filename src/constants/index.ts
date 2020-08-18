export const isProdction = process.env.NEXT_PUBLIC_NODE_ENV === "production";
export const isServer = typeof window === "undefined";
