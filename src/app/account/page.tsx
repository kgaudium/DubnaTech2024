
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {LogOutButton} from "@/app/components/auth-buttons";

export default async function AccountPage() {
    const session = await getServerSession();

    if (!session) {
        redirect('api/auth/signin');
    }

    const user = {
        name: session.user?.name,
        email: session.user?.email,
    }

    return (
        <div className="w-96 mx-auto shadow-md rounded-lg">
            <Card className="rounded-lg">
                <CardHeader>
                    <CardTitle className="text-2xl">Personal Account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <p className="text-md text-muted-foreground">Name</p>
                        <p className="font-medium">{user.name}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-md text-muted-foreground">Email</p>
                        <p className="font-medium">{user.email}</p>
                    </div>
                    <LogOutButton />
                </CardContent>
            </Card>
        </div>
    )
}