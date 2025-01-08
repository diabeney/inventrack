"use client";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog } from "@/components/ui/dialog";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@/components/ui/button";
import { Row } from "@tanstack/react-table";
import { ReagentData } from "./dummy_data";
import { useReagentsModal } from "@/utils/store/modals";

export default function AdminTableRowActions({ row }: { row: Row<ReagentData> }) {
  const { open } = useReagentsModal();
  const reference = row.original;

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 bg-gray-100 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="gap-2">
            <p>
              <Icon icon={"hugeicons:view"} />
            </p>
            <button onClick={() => open(reference)}>View reagent details</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  );
}
