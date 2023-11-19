"use client"

export default function AdminProductPage() {
    const revalidate = async () => {
        await fetch("http://localhost:3000/api/revalidate?tag=products", 
        {
            method: "POST",
        })
    };

    return (
        <div>
            <button 
            className="bg-blue-500 text-white p-3 m-5" 
            onClick={() => revalidate()}
            >
                Revalidate
            </button>
        </div>
    )
}