import React, { useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import Beaker from "@/app/assets/images/beaker.jpeg";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEquipmentModal, useReagentsModal, useStudentsModal } from "@/utils/store/modals";
import StudentYear from "./get_year";

export default function StudentDetailPanel() {
  const { data, close, isOpen } = useStudentsModal();
  const { close: closeEquipment, open: openEquipment } = useEquipmentModal();
  const { close: closeReagent, open: openReagent } = useReagentsModal();
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
          <div className="flex items-center gap-2 uppercase font-bold">Student details</div>
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
        <div className=" group overflow-hidden relative w-full min-h-[20rem] max-h-[25rem]">
          <div className="absolute h-full w-full inset-0">
            <Image
              src={Beaker}
              width={2000}
              height={2000}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              alt="hero image"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
          </div>
          <div className="relative flex h-full flex-col justify-end p-6 text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
            <h3 className=" text-2xl mb-2">Project Topic</h3>
            <p>{data?.projectTitle}</p>
          </div>
        </div>
        <dl className="pb-5 p-4">
          <ul className="space-y-3 py-4  text-sm text-gray-600">
            <li className="flex justify-between gap-2 rounded-r-md border-l-2 border-gray-400 bg-gray-50 p-4">
              <div className="flex items-center justify-between">Name</div>
              <div className="flex items-center justify-between gap-3">
                <dd className={`flex items-center gap-3 text-sm capitalize leading-6 text-gray-800`}>{data?.leaderName}</dd>
              </div>
            </li>
            <li className="flex justify-between gap-2 rounded-r-md border-l-2 border-gray-400 bg-gray-50 p-4">
              <div className="flex items-center justify-between">Index Number</div>
              <div className="flex items-center justify-between gap-3">
                <dd className={`flex items-center gap-3 text-sm capitalize leading-6 text-gray-800`}>{data?.indexNumber}</dd>
              </div>
            </li>
            <li className="flex justify-between gap-2 rounded-r-md border-l-2 border-gray-400 bg-gray-50 p-4">
              <div className="flex items-center justify-between">Year</div>
              <div className="flex items-center justify-between gap-3">
                <dd className={`flex items-center gap-3 text-sm capitalize leading-6 text-gray-800`}>
                  <StudentYear year={data?.year!} />
                </dd>
              </div>
            </li>
            <li className="flex justify-between gap-2 rounded-r-md border-l-2 border-gray-400 bg-gray-50 p-4">
              <div className="flex items-center justify-between">Supervisor</div>
              <div className="flex items-center justify-between gap-3">
                <dd className={`flex items-center gap-3 text-sm capitalize leading-6 text-gray-800`}>{data?.supervisor}</dd>
              </div>
            </li>
            <li className="flex justify-between gap-2 rounded-r-md border-l-2 border-gray-400 bg-gray-50 p-4">
              <div className="flex items-center justify-between">Number of colleagues</div>
              <div className="flex items-center justify-between gap-3">
                <dd className={`flex items-center gap-3 text-sm capitalize leading-6 text-gray-800`}>{data?.numberOfColleagues}</dd>
              </div>
            </li>
          </ul>
          <div>
            <h3>Equipment ({data?.session.equipment.length})</h3>
            <Accordion type="single" collapsible>
              {data &&
                data.session.equipment.length > 0 &&
                data.session.equipment.map((equipment) => {
                  return (
                    <AccordionItem key={equipment._id} value={equipment._id} className="my-2">
                      <AccordionTrigger>
                        <div className="flex flex-col gap-2">
                          <p className="w-fit capitalize text-gray-500">{equipment.name}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-4">
                        <ul className="">
                          <li className=" flex items-center justify-between">
                            <p className="mb-2 ">&bull; Quantity</p>
                            <p className="mb-2 ">{equipment.quantity}</p>
                          </li>
                          <li className=" flex items-center justify-between">
                            <p className="mb-2 ">&bull; Type</p>
                            <p className="mb-2 ">{equipment.type}</p>
                          </li>
                        </ul>
                        <button
                          onClick={() => {
                            close();
                            closeReagent();
                            openEquipment(equipment);
                          }}
                          className=" underline"
                        >
                          See details
                        </button>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
            </Accordion>
          </div>
          <div className=" mt-4">
            <h3>Reagents ({data?.session.reagents.length})</h3>
            <Accordion type="single" collapsible>
              {data &&
                data.session.reagents.length > 0 &&
                data.session.reagents.map((reagent) => {
                  return (
                    <AccordionItem key={reagent._id} value={reagent._id} className="my-2">
                      <AccordionTrigger>
                        <div className="flex flex-col gap-2">
                          <p className="w-fit capitalize text-gray-500">{reagent.name}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-4">
                        <ul className="">
                          <li className=" flex items-center justify-between">
                            <p className="mb-2 ">&bull; Quantity</p>
                            <p className="mb-2 ">{reagent.quantity}</p>
                          </li>
                          <li className=" flex items-center justify-between">
                            <p className="mb-2 ">&bull; Type</p>
                            <p className="mb-2 ">{reagent.type}</p>
                          </li>
                        </ul>
                        <button
                          onClick={() => {
                            close();
                            closeEquipment();
                            openReagent(reagent);
                          }}
                          className=" underline"
                        >
                          See details
                        </button>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
            </Accordion>
          </div>
        </dl>
      </motion.div>
    </motion.div>
  );
}
