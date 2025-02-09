import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-500">
          Moje Aplikace
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-blue-500">
            O nás
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500">
            Kontakt
          </Link>
          <Link
            href="/login"
            className="text-blue-500 font-semibold hover:text-blue-600"
          >
            Přihlásit se
          </Link>
        </div>
      </nav>
    </header>
  );
};
