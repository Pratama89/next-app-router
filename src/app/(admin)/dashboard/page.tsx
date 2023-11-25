"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const {data: session, status}: {data: any; status: string} = useSession();
    const router = useRouter();
    useEffect(() => {
        if(status === "unauthenticated") {
            router.push("/login");
        } else {
            if (session !== undefined && session?.user.role !== "admin") {
                router.push("/");
            }
        }
    }, [router, session, status, session?.user.role])
    return (
        <div className="w-full h-96 bg-gray-400 rounded-lg flex justify-center items-center">
          <h1>Dashboard</h1>        
        </div>
    )
}