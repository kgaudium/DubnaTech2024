import Link from "next/link"
import { UserCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="flex h-16 items-center justify-between px-4">
                <Link className="flex items-center gap-2 font-semibold" href="/">
                    Auth App
                </Link>
                <div className="flex items-center gap-4">
                    <Button variant="ghost">
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button>Register</Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Link href="/account">
                            <UserCircle className="h-5 w-5" />
                            <span className="sr-only">User account</span>
                        </ Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}