"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const {push} = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    })
    if(res.status === 200) {
      e.target.reset();
      push("/login");
      setIsLoading(false);
    } else {
      setError("Email Already Exist");
      setIsLoading(false);
    }
  }
    return (
        <>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 h-screen py-12 lg:px-8 ">
        
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto "
            src="/logopharmadent.png"
            alt="Your Company"
            width={300}
            height={100}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Daftar Akun
          </h2>
        </div>
        {error !== "" && (
          <div className="text-center border border-red-200 bg-red-200 text-red-700 px-2 py-2 rounded max-w-md w-full">{error}</div>
        )}
        <div className="max-w-md w-full mt-10 sm:mx-auto p-5 rounded-md shadow-lg border border-slate-300">
          <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="fullname"
                  autoComplete="fullname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-5" 
              >
                {isLoading ? "Loading..." : "Daftar"}
              </button>
            </div>
          </form>

          
          <div className="text-center">
            Anda sudah punya akun? 
            <Link href="/login">
              <span className="font-semibold text-blue-600 hover:text-blue-500"> Klik disini</span>
            </Link>
          </div>
        </div>
      </div>
    </>
    )
}