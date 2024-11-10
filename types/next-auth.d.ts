

declare module "next-auth" {
  interface Session {
    accessToken?: string
    user: {
      id: string
      name?: string | null
      email?: string | null
      roles?: string[]
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    roles?: string[]
  }
}

import { DefaultSession } from "next-auth";

// this process is know as module augmentation
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}