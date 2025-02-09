import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
};
