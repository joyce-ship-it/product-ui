"use client";
import React from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { useSidebar } from "@/Providers/SidebarProvider";

export default function Sidebar() {
  const { open, setOpen } = useSidebar();
  function closeSidebar() {
    setOpen(false);
  }
  const containerClass = open
    ? "min-h-dvh bg-black/50  z-30  absolute top-0 w-full transition-transform duration-200 ease-out"
    : "min-h-dvh bg-none  z-30  absolute top-0 w-full -translate-x-full transition-duration-250 transition-transform duration-250 ease-in";
  return (
    <div className={containerClass}>
      <div
        className="min-w-[250px] min-h-screen absolute top-0 pt-20 pl-5 
      bg-white"
      >
        <nav className="flex flex-col gap-4">
          <Link href={"#"} className="font-bold hover:text-slate-400">
            Collections
          </Link>
          <Link href={"#"} className="font-bold hover:text-slate-400">
            Men
          </Link>
          <Link href={"#"} className="font-bold hover:text-slate-400">
            Women
          </Link>
          <Link href={"#"} className="font-bold hover:text-slate-400">
            About
          </Link>
          <Link href={"#"} className="font-bold hover:text-slate-400">
            Contact
          </Link>
        </nav>
      </div>
      <X
        onClick={closeSidebar}
        className="absolute top-5 left-5 hover:text-red-500  cursor-pointer"
      />
    </div>
  );
}
