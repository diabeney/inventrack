"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { StudentData } from "./dummy_data";
import StudentYear from "./get_year";
import StudentTableRowActions from "./row_actions";

export const columns: ColumnDef<StudentData>[] = [
  {
    accessorKey: "leaderName",
    header: "Leader",
  },

  {
    accessorKey: "indexNumber",
    header: "Index Number",
  },
  {
    accessorKey: "supervisor",
    header: "Supervisor",
  },
  {
    accessorKey: "year",
    header: "Year",
    cell: ({ row }) => {
      const year = row.getValue("year") as string;
      return <StudentYear year={year} />;
    },
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
      return <StudentTableRowActions row={row} />;
    },
  },
];
