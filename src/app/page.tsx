import {getServerSession} from 'next-auth'
import {authOptions} from './api/auth/[...nextauth]/authOptions'
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function Home1() {
    const session = await getServerSession(authOptions)

    return (

            <div className="bg-white p-8 rounded-lg shadow-md m-auto">
                <h1 className="text-3xl font-bold mb-4">Welcome, {session ? session.user?.name : "Guest"}!</h1>
                <p className="mb-4">This page is accessible to everyone.</p>
                {session && session?.user?.roles?.includes('be-admin') ?
                    <Button className="w-full">
                        <Link href="/admin-page">Secret Admin Button</Link>
                    </Button>
                    :
                    <></>
                }
            </div>

    );
}