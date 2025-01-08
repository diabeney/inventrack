"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ReagentData } from "./dummy_data";
import AdminTableRowActions from "./row_actions";

export const columns: ColumnDef<ReagentData>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "_createdAt",
    header: "Date added",
    cell: ({ row }) => {
      const date = row.getValue("_createdAt");
      const formatted = format(new Date(date as string), "dd/MM/yyyy");
      return <div>{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <AdminTableRowActions row={row} />;
    },
  },
];
