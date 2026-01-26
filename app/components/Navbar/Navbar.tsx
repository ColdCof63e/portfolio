import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul 
            className="flex gap-x 
            justify-evenly 
            items-center 
            h-16 
            bg-gray-800">
                <li 
                className="hover:text-gray-600 
                hover:underline 
                cursor-pointer">
                    <Link href="/">Home</Link>
                </li>
              
                {/* <li 
                className="hover:text-gray-600 
                hover:underline 
                cursor-pointer">
                    <Link href="/about">About</Link>
                </li> */}

                <li 
                className="hover:text-gray-600 
                hover:underline 
                cursor-pointer">
                    <Link href="/projects">Projects</Link>
                </li>

                <li 
                className="hover:text-gray-600 
                hover:underline 
                cursor-pointer">
                    Contact
                </li>
            </ul>
        </nav>
    );
}
