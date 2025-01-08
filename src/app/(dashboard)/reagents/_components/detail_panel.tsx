import React, { useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import Beaker from "@/app/assets/images/beaker.jpeg";
import Image from "next/image";
import { useReagentsModal } from "@/utils/store/modals";

export default function ReagentDetailPanel() {
  const { data, close, isOpen } = useReagentsModal();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        document.body.style.overflow = isOpen ? "auto" : "hidden";
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [close, isOpen]);

  return (
    <motion.div
      transition={{ ease: [0.76, 0, 0.24, 1] }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex min-h-dvh items-center justify-center bg-black/60 backdrop-blur-md"
    >
      <motion.div
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.5,
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        className="no-scrollbar absolute bottom-0 right-0 z-50 flex h-full w-full flex-col overflow-y-auto bg-white shadow-md md:max-w-md"
      >
        <div className="sticky top-0 z-10 flex w-full items-center justify-between border-b bg-white p-4">
          <div className="flex items-center gap-2 uppercase font-bold">{data?.name || "Equipment"}</div>
          <button
            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={() => {
              close();
              document.body.style.overflow = isOpen ? "auto" : "hidden";
            }}
          >
            <Icon icon="ph:x" width={16} />
          </button>
        </div>
        <div className=" min-h-[20rem] max-h-[30rem]">
          <Image src={Beaker} alt="equipment details" />
        </div>
        <dl className="pb-5 p-4">
          <div className=" items-center gap-2 border-slate-300 pb-2.5">
            <dt className=" text-gray-800">Description</dt>
            <p className=" text-sm mt-1">{data?.description}</p>
          </div>
          <div className=" items-center mt-2 gap-2 border-slate-300 pb-2.5">
            <dt className=" text-gray-800">Storage</dt>
            <p className=" text-sm mt-1">{data?.storageConditions}</p>
          </div>
          <ul className="space-y-3 py-4  text-sm text-gray-600">
            <li className="flex justify-between gap-2 rounded-r-md border-l-2 border-gray-400 bg-gray-50 p-4">
              <div className="flex items-center justify-between">Type</div>
              <div className="flex items-center justify-between gap-3">
                <dd className={`flex items-center gap-3 text-sm font-medium capitalize leading-6 text-gray-800`}>{data?.type}</dd>
              </div>
            </li>
            <li className="flex justify-between gap-2 rounded-r-md border-l-2 border-gray-400 bg-gray-50 p-4">
              <div className="flex items-center justify-between">Quantity</div>
              <div className="flex items-center justify-between gap-3">
                <dd className={`flex items-center gap-3 text-sm font-medium capitalize leading-6 text-gray-800`}>{data?.quantity}</dd>
              </div>
            </li>
            <li className="flex justify-between gap-2 rounded-r-md border-l-2 border-gray-400 bg-gray-50 p-4">
              <div className="flex items-center justify-between">Created At</div>
              <div className="flex items-center justify-between gap-3">
                <dd className={`flex items-center gap-3 text-sm font-medium capitalize leading-6 text-gray-800`}>
                  {formatDistanceToNow(data?._createdAt!, { addSuffix: true })}
                </dd>
              </div>
            </li>
          </ul>
        </dl>
      </motion.div>
    </motion.div>
  );
}
