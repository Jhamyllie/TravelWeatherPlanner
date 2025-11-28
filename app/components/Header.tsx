"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-gray-800">MySite</h1>

      <nav className="flex space-x-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium ${
              pathname === link.href
                ? "text-blue-600 underline"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}