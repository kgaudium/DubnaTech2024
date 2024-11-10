'use client'

import {ReactNode} from "react"

import './globals.css';
import {useAuth} from "@/app/hooks/use-auth";
import NavBar from "@/app/components/navbar";

export default function Layout({ children }: { children: ReactNode }) {
    const { authenticated, login, logout, register } = useAuth()

    return (
        <html>
        <body>
        <div className="min-h-screen bg-background w-full">
            <NavBar/>
            <main className="">{children}</main>
        </div>
        </body>
        </html>
    )
}