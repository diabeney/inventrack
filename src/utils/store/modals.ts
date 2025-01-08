import { LabEquipmentData } from "@/app/(dashboard)/equipment/_components/dummy_data";
import { ReagentData } from "@/app/(dashboard)/reagents/_components/dummy_data";
import { create } from "zustand";

type ModalProps<T> = {
  isOpen: boolean;
  data: T | null;
  open: (data: T) => void;
  close: () => void;
  loading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

const createModalStore = <T>() =>
  create<ModalProps<T>>((set) => ({
    isOpen: false,
    loading: false,
    data: null,
    startLoading: () => set({ loading: true }),
    stopLoading: () => set({ loading: false }),
    open: (data?: T) => set({ isOpen: true, data }),
    close: () => set({ isOpen: false }),
  }));

export const useEquipmentModal = createModalStore<LabEquipmentData>();
export const useReagentsModal = createModalStore<ReagentData>();
