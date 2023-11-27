"use client"

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage({searchParams}: any) {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);
        try {
          const res = await signIn('credentials', {
            redirect: false,
            email: e.target.email.value,
            password: e.target.password.value,
            callbackUrl: searchParams?.callbackUrl || "/dashboard",
          })
          if (!res?.error) {
            e.target.reset();
            setIsLoading(false)
            push(searchParams?.callbackUrl || "/dashboard")
          } else {
            setIsLoading(false)
            if (res.status === 401) {
              setError("Email or Password is incorrect")
            }
          }
        }
        catch (err) {
          console.log(err)
        }
        
    }
    return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 h-screen py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/">
            <Image
              className="mx-auto "
              src="/logopharmadent.png"
              alt="Your Company"
              width={300}
              height={100}
            />          
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="max-w-md w-full mt-10 sm:mx-auto p-5 rounded-md shadow-lg border border-slate-300">
          <form className="space-y-6" onSubmit={(e) => handleLogin(e)} method="POST">
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
                <div className="text-sm">
                  <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </a>
                </div>
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
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>

          <div className="text-center">
            <div>Anda belum punya akun? 
                <Link href="/register">
                <span className="font-semibold text-blue-600 hover:text-blue-500"> Klik disini</span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}