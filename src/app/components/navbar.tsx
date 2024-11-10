import Link from "next/link"
import { UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {getServerSession} from "next-auth";


export default async function NavBar() {
    const session = await getServerSession()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="flex h-16 items-center justify-between px-4">
                <Link className="flex items-center gap-2 font-semibold" href="/">
                    2o3x231
                </Link>
                <div className="flex items-center gap-4">

                    {!session ?
                        <Button className="h-10">
                            <Link href="/api/auth/signin">Login</Link>
                        </Button>
                        :
                        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                            <Link href="/account">
                                <UserCircle className="h-10 w-10"/>
                                <span className="sr-only">User account</span>
                            </ Link>
                        </Button>
                    }


                </div>
            </div>
        </header>
    )
}