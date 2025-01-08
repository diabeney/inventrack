import ModalWrapper from "@/components/modal_wrapper";
import { useEquipmentModal } from "@/utils/store/modals";
import Beaker from "@/app/assets/images/beaker.jpeg";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function EquipmentTableRowModal() {
  const { data, close } = useEquipmentModal();
  return (
    <ModalWrapper>
      <div className="flex flex-col space-y-6 px-3">
        <div className="flex w-full justify-between">
          <h3 className=" text-2xl">Equipment details</h3>
          <button className=" bg-gray-100 hover:bg-gray-200 p-2 rounded-lg" onClick={close}>
            <Icon icon={"ph:x"} width={16} />
          </button>
        </div>
        <section className=" grid grid-cols-2 gap-6">
          <div className=" h-full min-h-[20rem] max-h-[30rem] overflow-hidden rounded-lg">
            <Image src={Beaker} alt="lab equipment" className=" object-cover h-full object-center" />
          </div>
          <div>
            <h2 className=" text-xl">{data?.name}</h2>
            <p className=" mt-2 text-neutral-800">{data?.description}</p>
            <div></div>
            <p>{data?.type}</p>
            <p>{data?.quantity}</p>
          </div>
        </section>
      </div>
    </ModalWrapper>
  );
}
