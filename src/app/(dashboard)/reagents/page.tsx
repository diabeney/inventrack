import { DataTable } from "./_components/data_table";
import { columns } from "./_components/columns";
import { reagentDummyData } from "./_components/dummy_data";
import AnalyticsCards from "../_components/analytics_cards";
import Image from "next/image";
import Beaker from "@/app/assets/images/reagent.jpeg";
export default function EquipmentPage() {
  return (
    <div className="w-full">
      <div className=" group hidden md:block mb-6 overflow-hidden relative w-full h-[20rem] rounded-lg">
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
        <div className="relative flex h-full flex-col justify-center items-center  p-6 text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
          <h3 className="text-4xl font-semibold mb-6">Lab Reagents</h3>
          <p>Manage the available reagents in the lab.</p>
        </div>
      </div>
      <h3 className="text-4xl font-semibold mb-6 md:hidden">Lab Reagents</h3>
      <AnalyticsCards />
      <section className=" mt-6">
        <DataTable columns={columns} data={reagentDummyData} />
      </section>
    </div>
  );
}
