'use client'
import {signOut} from 'next-auth/react';
import {Button} from "@/components/ui/button";

export function LogOutButton(){
    return (
        <Button
            className="bg-black text-white w-full"
            onClick={() => {signOut()}}
        >Log Out</Button>
    )
}