"use client";

import { ColumnDef } from "@tanstack/react-table";
import { z, z as zod } from "zod";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
const ExampleSchema = zod.object({
  id: zod.string(),
  title: zod.string(),
  status: zod.enum(["pending", "processing", "success", "failed"]),
  subtitle: zod.string(),
  number: zod.number(),
});

export type Example = z.infer<typeof ExampleSchema>;

export const ExampleColDef: ColumnDef<Example>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "subtitle",
    header: "Subtitle",
  },
  {
    accessorKey: "number",
    header: "Number",
  },
];
