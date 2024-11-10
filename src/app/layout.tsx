
import {ReactNode} from "react"

import './globals.css';
import NavBar from "@/app/components/navbar";

export default function Layout({ children }: { children: ReactNode }) {



    return (
        <html className="h-full">
        <head>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <meta name="apple-mobile-web-app-title" content="2o3x231"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <title>2o3x231 - DubnaTech2024</title>
        </head>
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