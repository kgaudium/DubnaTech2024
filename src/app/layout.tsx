import {ReactNode} from "react"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import './globals.css';

export default function Layout({children}: { children: ReactNode }) {
    return (
        <html>
        <body>
        <div className="min-h-screen bg-background">
            <header className="border-b">
                <nav className="container flex items-center justify-between h-16">
                    <Link href="/" className="font-semibold text-lg">
                        Auth App
                    </Link>
                    <div className="flex gap-4">
                        <Link href="/login">
                            <Button variant="ghost">Login</Button>
                        </Link>
                        <Link href="/register">
                            <Button>Register</Button>
                        </Link>
                    </div>
                </nav>
            </header>
            <main className="container py-6">{children}</main>
        </div>
        </body>
        </html>
    )
}