"use client";

import { AnimatePresence } from "framer-motion";
import { useEquipmentModal, useReagentsModal, useStudentsModal } from "@/utils/store/modals";
import EquipmentDetailPanel from "@/app/(dashboard)/equipment/_components/detail_panel";
import ReagentDetailPanel from "@/app/(dashboard)/reagents/_components/detail_panel";
import StudentDetailPanel from "@/app/(dashboard)/students/_components/detail_panel";

const ModalConfigs = () => {
  const { isOpen: isEquipmentTableRowModalOpen } = useEquipmentModal();
  const { isOpen: isReagentModalOpen } = useReagentsModal();
  const { isOpen: isStudentModalOpen } = useStudentsModal();

  return (
    <>
      <AnimatePresence>{isEquipmentTableRowModalOpen && <EquipmentDetailPanel />}</AnimatePresence>
      <AnimatePresence>{isReagentModalOpen && <ReagentDetailPanel />}</AnimatePresence>
      <AnimatePresence>{isStudentModalOpen && <StudentDetailPanel />}</AnimatePresence>
    </>
  );
};

export default ModalConfigs;
