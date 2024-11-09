'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WelcomePage() {
    return (
        <div className="max-w-2xl mx-auto text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight">Hello, Guest</h1>
            <p className="text-muted-foreground text-lg">
                Welcome to our application. Please login or register to continue.
            </p>
            <div className="flex justify-center gap-4">
                <Link href="/login">
                    <Button size="lg">Login</Button>
                </Link>
                <Link href="/register">
                    <Button size="lg" variant="outline">
                        Register
                    </Button>
                </Link>
            </div>
        </div>
    )
}