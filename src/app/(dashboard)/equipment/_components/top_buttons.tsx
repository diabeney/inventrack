"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  exportHandler?: () => void;
  addHandler?: () => void;
};

export default function TopButtons({ exportHandler, addHandler }: Props) {
  return (
    <div className=" mb-4 flex gap-4 justify-end">
      <Button onClick={addHandler} className=" w-full sm:w-fit">
        Add <Icon icon={"mdi-light:plus"} className=" w-4 h-4" />
      </Button>
      <Button onClick={exportHandler} variant={"outline"} className="w-full sm:w-fit">
        Export data <Icon icon={"circum:export"} className=" w-4 h-4" />
      </Button>
    </div>
  );
}
