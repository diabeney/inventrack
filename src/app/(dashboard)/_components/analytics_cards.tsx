"use client";

import { CreditCard, Truck, BanknoteIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AnalyticsCards() {
  const cardsdetails = [
    {
      id: 3,
      title: "Public Stories",
      icon: <CreditCard size={20} className="text-secondary" />,
      value: 128,
      bottomtext: "Public stories shared",
    },
    {
      id: 4,
      title: "Private Stories",
      icon: <BanknoteIcon size={20} className="text-secondary" />,
      value: 140,
      bottomtext: "Private stories shared",
    },
  ];

  return (
    <section className="flex flex-col flex-wrap gap-4 md:flex-row">
      <Card className="min-w-[18rem] flex-grow rounded-lg border bg-primary p-4 text-white">
        <span className="flex items-center justify-between">
          <p className="text-sm">Stories</p>
          <p className="rounded-md bg-white/80 p-1">
            <Truck size={20} className="text-primary" />
          </p>
        </span>
        <p className="my-2 text-2xl">268</p>
        <small className="text-white/80">All stories shared on platform</small>
      </Card>
      {cardsdetails.map((item) => (
        <Card key={item.id} className="min-w-[18rem] flex-grow rounded-lg border bg-white p-4">
          <span className="flex items-center justify-between">
            <p className="text-sm">{item.title}</p>
            <p className="rounded-md bg-gray-200 p-1">{item.icon}</p>
          </span>
          <p className="my-2 text-2xl">{item.value}</p>
          <small className="text-gray-600">{item.bottomtext}</small>
        </Card>
      ))}
    </section>
  );
}
