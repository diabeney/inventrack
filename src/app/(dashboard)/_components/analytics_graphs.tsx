"use client";
import { OverviewBars } from "./bars";
import { OverviewPieChart } from "./pie";

export default function AnalyticsGraph() {
  return (
    <div className="mt-6 grid h-fit gap-4 md:grid-cols-2">
      <OverviewBars />
      <OverviewPieChart />
    </div>
  );
}
