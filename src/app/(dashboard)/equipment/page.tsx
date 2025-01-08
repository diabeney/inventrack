import { DataTable } from "./_components/data_table";
import { columns } from "./_components/columns";
import { labEquipmentDummyData } from "./_components/dummy_data";
import AnalyticsCards from "../_components/analytics_cards";
export default function EquipmentPage() {
  return (
    <div className="w-full ">
      <h3 className="text-4xl font-semibold mb-6">Lab Equipment</h3>
      <AnalyticsCards />
      <section className=" mt-6 ">
        <DataTable columns={columns} data={labEquipmentDummyData} />
      </section>
    </div>
  );
}
