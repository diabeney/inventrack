"use client";
import Image from "next/image";
import { OverviewCurve } from "./_components/overview_curve";
import Welcome from "@/app/assets/images/auth-img.jpeg";
import AnalyticsCards from "./_components/analytics_cards";
import AnalyticsGraph from "./_components/analytics_graphs";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  return (
    <div className="min-h-screen w-full">
      <h3 className=" text-4xl font-semibold mb-6">Overview</h3>
      <div className={"grid gap-6 lg:grid-cols-[65%_auto]"}>
        <div className={"relative max-h-80 w-full !overflow-hidden"}>
          <section className="absolute bottom-0 z-50 p-6 text-white">
            <p className="mb-2 text-3xl font-semibold">Welcome {user?.lastName || "Admin"} 👋</p>
            <p className="text-white/80">Here's what's happening with your account today.</p>
          </section>
          <div className="absolute left-0 top-0 h-full w-full rounded-xl bg-gradient-to-tr from-black/90 via-black/70 to-black/10" />
          <Image src={Welcome} alt={"Welcome image"} className={"h-full w-full rounded-xl object-cover"} width={3000} />
        </div>
        <OverviewCurve />
      </div>
      <div className={"my-6"}>
        <AnalyticsCards />
      </div>
      {/* <section className="my-8">
        <OverviewAreaChart />
      </section> */}
      <div className="">
        <AnalyticsGraph />
      </div>
    </div>
  );
}
