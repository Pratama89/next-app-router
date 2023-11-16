import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex px-5 bg-gray-700 p-2">
            <h1 className="text-white">Navbar</h1>
            <ul className="flex ml-5">
              <Link href="/">
                <li className="mr-5 text-white cursor-pointer">Home</li>
              </Link>
              <Link href="/about">
                <li className="mr-5 text-white cursor-pointer">About</li>
              </Link>
              <Link href="about/profile">
                <li className="mr-5 text-white cursor-pointer">Profil</li>
              </Link>                
            </ul>
        </nav>
    )
}