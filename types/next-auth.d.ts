

declare module "next-auth" {
  interface Session {
    accessToken?: string
    user: {
      id: string
      name?: string | null
      email?: string | null
      groups?: string[]
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    groups?: string[]
  }
}