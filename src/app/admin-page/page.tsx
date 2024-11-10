import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-center">Hello, Admin</h1>
            <div className="flex justify-center gap-4">
                <Link href="/account">
                    <Button variant="outline">Go to Personal Account</Button>
                </Link>
                <Button className={"bg-black white"}>Logout</Button>
            </div>
        </div>
    )
}