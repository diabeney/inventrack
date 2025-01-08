"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function TopButtons() {
  return (
    <div className=" mb-4 flex justify-end">
      <Button>
        Export data <Icon icon={"circum:export"} className=" w-4 h-4" />
      </Button>
    </div>
  );
}
