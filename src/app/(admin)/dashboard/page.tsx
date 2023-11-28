"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    return (
        <div className="w-full h-96 bg-gray-400 rounded-lg flex justify-center items-center">
          <h1>Dashboard</h1>        
        </div>
    )
}