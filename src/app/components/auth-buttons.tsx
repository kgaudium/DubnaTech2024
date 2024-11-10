'use client'
import {signIn, signOut} from 'next-auth/react';
import {Button} from "@/components/ui/button";

export function LogOutButton(){
    return (
        <Button
            className="bg-black text-white w-full"
            onClick={() => {signOut()}}
        >Log Out</Button>
    )
}

export function SignInButton(){
    const handleSignIn = async () => {
        const result = await signIn("keycloak", { callbackUrl: "/" });
        if (result?.error) {
            console.error("Sign in error:", result.error);
        }
    };
    return (
        <Button
            onClick={handleSignIn}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
            Sign in with Keycloak
        </Button>
    )
}