import {getServerSession} from 'next-auth'
import {authOptions} from './api/auth/[...nextauth]/route'
import {LogOutButton} from "@/app/components/auth-buttons";


async function Home() {
    const session = await getServerSession(authOptions)

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <h1>Welcome, {session ? session.user?.name : "Guest"}!</h1>
            {
                session ? (
                    <div className="flex justify-center gap-4">
                        <LogOutButton/>
                    </div>
                ) : (
                    <div className="flex gap-4">

                    </div>
                )
            }
        </div>
    )
}

export default async function Home1() {
    const session = await getServerSession(authOptions)

    return (

            <div className="bg-white p-8 rounded-lg shadow-md m-auto">
                <h1 className="text-3xl font-bold mb-4">Welcome, {session ? session.user?.name : "Guest"}!</h1>
                <p className="mb-4">This page is accessible to everyone.</p>
            </div>

    );
}