import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export const menuLinks = [
  {
    name: "Overview",
    href: "/",
    icon: "clarity:analytics-line",
    activeIcon: "clarity:analytics-solid",
  },

  {
    name: "Equipment",
    href: "/equipment",
    icon: "icomoon-free:lab",
    activeIcon: "icomoon-free:lab",
  },

  {
    name: "Reagents",
    href: "/reagents",
    icon: "game-icons:chemical-drop",
    activeIcon: "game-icons:chemical-drop",
  },
  {
    name: "Students",
    href: "/students",
    icon: "solar:users-group-rounded-line-duotone",
    activeIcon: "solar:users-group-rounded-bold-duotone",
  },
];

const MobileSidebar = ({ onClose }: { onClose: () => void }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (pathname !== "/" && href === "/") {
      return false;
    }
    return pathname?.startsWith(href);
  };

  return (
    <motion.aside
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose();
        }
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
      transition={{
        ease: [0.76, 0, 0.24, 1],
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className={"fixed lg:hidden inset-0 z-[99] w-full bg-black/50 backdrop-blur"}
    >
      <motion.div
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.5,
        }}
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: -100,
        }}
        className="h-full w-full max-w-2xl overflow-auto border-r relative bg-white p-4 pb-12"
      >
        {/* <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
        >
          <Image src={"/logo_dark.png"} alt={"BOTR's logo"} width={100} height={80} className={"mx-auto mb-16"} />
        </motion.span> */}
        <div className=" absolute right-4">
          <button className={"btn btn-icon bg-gray-300 flex items-center justify-center rounded-lg size-10 lg:hidden"} onClick={onClose}>
            <Icon icon={"ei:close"} width={20} />
          </button>
        </div>
        <nav className=" mt-12">
          <span className={"mb-3 inline-block pl-2 text-xs font-semibold uppercase text-gray-600"}>menu</span>
          <ul className={"flex flex-col gap-4"}>
            {menuLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.name}>
                  <Link
                    onClick={onClose}
                    href={link.href}
                    className={`flex items-center gap-2 justify-start p-2 rounded-full text-sm text-gray-700 transition-colors focus-visible:ring-primary-800 ${
                      active ? "bg-primary text-white" : "hover:bg-primary/10"
                    }`}
                  >
                    <Icon icon={active ? link.activeIcon : link.icon} width={20} />
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className=" flex gap-4 w-full mt-6">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </motion.div>
    </motion.aside>
  );
};

export default MobileSidebar;
