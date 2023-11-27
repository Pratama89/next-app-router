"use client";

import {useSession} from "next-auth/react";

export default function Profile() {
    const {data:session, status}: { data: any, status: string} = useSession();
    return (
        <main className="flex flex-col items-center justify-between p-24 font-bold">
            <h1>Profile</h1>
            <h2>{session?.user?.fullname}</h2>
        </main>
    )
}