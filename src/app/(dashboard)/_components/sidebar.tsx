"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { menuLinks } from "./mobile_sidebar";
import MobileSidebar from "./mobile_sidebar";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Logo from "@/app/assets/images/inventrack_logo.png";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (href: string) => {
    if (pathname !== "/" && href === "/") {
      return false;
    }
    return pathname?.startsWith(href);
  };

  return (
    <div>
      <div>
        <AnimatePresence>
          {isSidebarOpen && (
            <MobileSidebar
              onClose={() => {
                setIsSidebarOpen(false);
                document.body.style.overflow = isSidebarOpen ? "auto" : "hidden";
              }}
            />
          )}
        </AnimatePresence>
        <nav
          className={
            "sticky w-screen top-0 z-[90] flex max-w-full items-center justify-between border-b lg:hidden bg-white p-4 py-[1rem] lg:ml-[18rem] lg:justify-between lg:pr-16 xl:pr-24"
          }
        >
          <div className=" flex w-full items-center justify-between">
            <div onClick={() => router.push("/")}>
              <Image src={Logo} alt="logo" width={130} height={130} />
            </div>
            <button
              className={"btn btn-icon bg-gray-300 flex items-center justify-center rounded-lg size-10 lg:hidden"}
              onClick={() => {
                setIsSidebarOpen(!isSidebarOpen);
                document.body.style.overflow = isSidebarOpen ? "auto" : "hidden";
              }}
            >
              <Icon icon={"solar:hamburger-menu-line-duotone"} width={20} />
            </button>
          </div>
        </nav>
      </div>
      <aside className={"fixed p-4 left-0 top-0 border-r hidden min-h-dvh w-[18rem] flex-col bg-white lg:flex"}>
        <div className="">
          <Image src={Logo} alt={"logo"} width={130} height={130} />
        </div>
        <nav className={"scrollbar flex-1 overflow-y-auto mt-4 pr-4"}>
          <div className="">
            <span className={"mb-3 inline-block text-xs font-semibold capitalize text-gray-600"}>menu</span>
            <ul className={"flex max-h-[3rem] flex-col gap-4"}>
              {menuLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.name} className="last:pb-6">
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2 justify-start p-2 rounded-full text-sm text-gray-700 transition-colors focus-visible:ring-primary-800 ${
                        active ? "bg-primary text-white" : "hover:bg-primary/10"
                      }`}
                    >
                      <Icon icon={active ? link.activeIcon : link.icon} width={18} />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </aside>
    </div>
  );
};

export default Sidebar;
