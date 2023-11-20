import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
    return (
        <nav className="flex justify-between px-5 bg-gray-700 p-2">
            <div className="flex ">
            <h1 className="text-white">Navbar</h1>
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
              <button 
              className="bg-white px-3 py-1 rounded-lg cursor-pointer"
              onClick={() => router.push("/login")}
              >Login</button>
            </div>
        </nav>
    )
}