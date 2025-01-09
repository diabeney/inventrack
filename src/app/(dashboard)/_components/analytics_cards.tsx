"use client";

import { Microscope, FlaskConicalIcon, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AnalyticsCards() {
  const cardsdetails = [
    {
      id: 1,
      title: "Equipment in Use",
      icon: <Microscope size={20} className="text-secondary" />,
      value: 42,
      bottomtext: "Total equipment currently in use",
    },
    {
      id: 2,
      title: "Reagents Stocked",
      icon: <FlaskConicalIcon size={20} className="text-secondary" />,
      value: 320,
      bottomtext: "Different reagents available in inventory",
    },
  ];

  return (
    <section className="flex flex-col flex-wrap gap-4 md:flex-row">
      <Card className="min-w-[18rem] flex-grow rounded-lg border bg-primary p-4 text-white">
        <span className="flex items-center justify-between">
          <p className="text-sm">Total Inventory</p>
          <p className="rounded-md bg-white p-1">
            <Database size={20} className="text-primary" />
          </p>
        </span>
        <p className="my-2 text-2xl">362</p>
        <small className="text-white/80">All items currently in the lab</small>
      </Card>
      {cardsdetails.map((item) => (
        <Card key={item.id} className="min-w-[18rem] flex-grow rounded-lg border bg-white p-4">
          <span className="flex items-center justify-between">
            <p className="text-sm">{item.title}</p>
            <p className="rounded-md bg-primary p-1">{item.icon}</p>
          </span>
          <p className="my-2 text-2xl">{item.value}</p>
          <small className="text-gray-600">{item.bottomtext}</small>
        </Card>
      ))}
    </section>
  );
}
