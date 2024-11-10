'use client'

import {ReactNode} from "react"

import './globals.css';
import NavBar from "@/app/components/navbar";

export default function Layout({ children }: { children: ReactNode }) {

    return (
        <html className="h-full">
        <body className="h-full">
        <div className="h-full bg-background w-full">
            <NavBar/>
            <main
                className="min-h-svh min-w-full flex items-center justify-center bg-gray-100"
            >{children}</main>
            </div>
        </body>
        </html>
)
}