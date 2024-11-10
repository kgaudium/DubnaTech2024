import { Button } from "@/components/ui/button"
import Link from "next/link"
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {LogOutButton} from "@/app/components/auth-buttons";

export default async function AdminPage() {
    const session = await getServerSession(authOptions)
    console.log(session);

    if (!session || !session.user.roles?.includes("be-admin")) {
        redirect('/');
    }

    return (
        <div className=" mx-auto space-y-8 bg-white p-10 rounded-lg shadow-md m-auto">
            <h1 className="text-4xl font-bold tracking-tight text-center">Hello, Admin</h1>
            <div className="flex justify-center gap-4">
                <Link href="/account">
                    <Button variant="outline">Go to Personal Account</Button>
                </Link>
                <LogOutButton />
            </div>
        </div>
    )
}