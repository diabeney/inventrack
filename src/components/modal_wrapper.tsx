import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

type ModalProps = {
  children: React.ReactNode;
  loading?: boolean;
  close?: () => void;
};
const ModalWrapper = ({ children, close, loading }: ModalProps) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="fixed inset-0 z-[99] flex min-h-dvh items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 10,
          }}
          className="absolute z-[999] max-h-[95dvh] w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-4 pb-5 shadow-md sm:p-6"
        >
          {close && (
            <button className="btn btn-icon absolute -right-4 -top-4" onClick={close} disabled={loading}>
              <Icon icon={"ph:x"} width={18} />
            </button>
          )}

          {children}
        </motion.div>
      </motion.div>
    </>
  );
};
export default ModalWrapper;
