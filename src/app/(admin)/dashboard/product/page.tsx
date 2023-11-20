"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdminProductPage() {
    const [status, setStatus] = useState("")
    const revalidate = async () => {
        const res = await fetch(
            "http://localhost:3000/api/revalidate?tag=products&secret=Tama12345",
            {
                method: "POST",                
            }
        )

        if(!res.ok) {
            setStatus("Error Revalidating")
        } else {
            const response = await res.json()
            if (response.revalidate) {
                setStatus("Revalidated")
            }
        }
    }
    return (
        <div>
            <h1>Status: {status}</h1>
            <button className="flex bg-blue-500 h-10 w-24 justify-center items-center m-5 p-5 rounded-md text-white" onClick={() => revalidate()}>Revalidate</button>
            <div>
                <Link href="/product">
                    <button className="flex bg-blue-700 h-10 w-24 justify-center items-center m-5 p-5 rounded-md text-white">Product</button>
                
                </Link>
            </div>
        </div>
    )
}