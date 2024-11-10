'use client'

import { Button } from "@/components/ui/button"
import { useAuth} from "@/app/hooks/use-auth";

export default function WelcomePage() {
    const { authenticated, user, login, register } = useAuth()

    return (
        <div className="max-w-2xl mx-auto text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight">
                Hello, {user && authenticated ? user.name : 'Guest'}
            </h1>
            <p className="text-muted-foreground text-lg">
                {authenticated
                    ? "Welcome back to our application."
                    : "Welcome to our application. Please login or register to continue."}
            </p>
            {!authenticated && (
                <div className="flex justify-center gap-4">
                    <Button size="lg" onClick={login}>Login</Button>
                    <Button size="lg" variant="outline" onClick={register}>Register</Button>
                </div>
            )}
        </div>
    )
}