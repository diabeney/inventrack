import Sidebar from "./_components/sidebar";
import ModalConfigs from "@/config/modal";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      <ModalConfigs />
      <div className={"flex min-h-[calc(100dvh-70px)] p-4 pt-8 lg:pl-[19rem] bg-gray-50"}>{children}</div>
    </div>
  );
}
