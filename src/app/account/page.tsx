
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {LogOutButton} from "@/app/components/auth-buttons";

export default async function AccountPage() {
    const session = await getServerSession();

    if (!session) {
        redirect('/');
    }

    const user = {
        first_name: session.user?.name?.split(' ')[0],
        second_name: session.user?.name?.split(' ')[1],
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
                        <p className="text-md text-muted-foreground">First Name</p>
                        <p className="font-medium">{user.first_name}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-md text-muted-foreground">Last Name</p>
                        <p className="font-medium">{user.second_name}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-md text-muted-foreground">Email</p>
                        <p className="font-medium">{user.email}</p>
                    </div>
                    <LogOutButton/>
                </CardContent>
            </Card>
        </div>
    )
}