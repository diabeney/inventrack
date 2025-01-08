"use client";

import { AnimatePresence } from "framer-motion";
import { useEquipmentModal, useReagentsModal } from "@/utils/store/modals";
import EquipmentDetailPanel from "@/app/(dashboard)/equipment/_components/detail_panel";
import ReagentDetailPanel from "@/app/(dashboard)/reagents/_components/detail_panel";

const ModalConfigs = () => {
  const { isOpen: isEquipmentTableRowModalOpen, close } = useEquipmentModal();
  const { isOpen: isReagentModalOpen } = useReagentsModal();

  return (
    <>
      <AnimatePresence>{isEquipmentTableRowModalOpen && <EquipmentDetailPanel />}</AnimatePresence>
      <AnimatePresence>{isReagentModalOpen && <ReagentDetailPanel />}</AnimatePresence>
    </>
  );
};

export default ModalConfigs;
