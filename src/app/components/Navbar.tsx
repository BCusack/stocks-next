
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center">
        <Link href="/" className="text-4xl text-white">
          Stocks Digital
        </Link>
        <ul className="hidden md:flex space-x-6 ">
          <li>
            <Link
              href="#funds"
              className="hover:text-primary transition-colors"
            >
              Our Portfolios
            </Link>
          </li>
          <li>
            <Link
              href="#process"
              className="hover:text-primary transition-colors"
            >
              Investment Process
            </Link>
          </li>
          <li>
            <Link
              href="#esg"
              className="hover:text-primary transition-colors"
            >
              ESG
            </Link>
          </li>
          <li>
            <Link
              href="#awareness"
              className="hover:text-primary transition-colors"
            >
              Awareness Program
            </Link>
          </li>
          <li>
            <Link
              href="#contact-us"
              className="hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <button className="md:hidden px-4 py-2 bg-gray-800 text-gray-100 rounded hover:bg-gray-700 transition-colors">
          Menu
        </button>
      </nav>
    )
}