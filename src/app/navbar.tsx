import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname} from "next/navigation";
import {useSession} from "next-auth/react";

export default function Navbar() {
  const pathname = usePathname();
  const {data:session, status}: { data: any, status: string} = useSession();
    return (
        <nav className="flex justify-between items-center  px-5 bg-gray-700 p-2">
            <div className="flex ">
              <Link href={"/dashboard"}>
                <h1 className="text-white">Navbar</h1>
              </Link>
            <ul className="flex ml-5">
              <Link href="/">
                <li 
                className={`mr-5 ${pathname === "/" ? "text-red-500" : "text-white"} cursor-pointer`}>
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className={`mr-5 ${pathname === "/about" ? "text-red-500" : "text-white"} cursor-pointer`}>About</li>
              </Link>
              <Link href="/product">
                <li className={`mr-5 ${pathname === "/product" ? "text-red-500" : "text-white"} cursor-pointer`}>Product</li>
              </Link>
              <Link href="about/profile">
                <li className={`mr-5 ${pathname === "/profile" ? "text-red-500" : "text-white"} cursor-pointer`}>Profil</li>
              </Link>                
            </ul>
            </div>
            <div>
              {status === "authenticated" ? (
                <div className="flex items-center md:text-base sm:text-xs">
                  <h4 className="text-white mr-3">{session?.user.fullname}</h4>
                  <button 
                  className="bg-white px-3 py-1 rounded-lg cursor-pointer"
                  onClick={() => signOut()}
                  >Logout
                  </button>
                </div>
              ) : (
                <button 
                className="bg-white px-3 py-1 rounded-lg cursor-pointer"
                onClick={() => signIn()}
                >Login
                </button>                
              )}
            </div>
            
        </nav>
    )
}