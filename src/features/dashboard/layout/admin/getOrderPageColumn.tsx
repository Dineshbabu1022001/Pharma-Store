import { type ColumnDef } from "@tanstack/react-table";
import type { OrderPayload } from "../../../../types/order";

export const getOrderPageColumns = (): ColumnDef<OrderPayload>[] => [
  {
    header: "S.no",
    cell: (info) => info.row.index + 1,
  },
  {
    header: "User Info",
    accessorFn: (row) => row.address.fullName,
    cell: (info) => info.getValue(),
  },
  {
    header: "Address",
    accessorFn: (row) => `${row.address.addressLine1}, ${row.address.city}`,
    cell: (info) => info.getValue(),
  },
  {
    header: "Email",
    accessorKey: "userEmail",
  },
  {
    header: "Products",
    accessorFn: (row) => row.items?.length || 0,
    cell: (info) => info.getValue(),
  },
  {
    header: "Quantity",
    accessorFn: (row) =>
      row.items?.reduce((total, item) => total + (item.quantity || 0), 0) || 0,
    cell: (info) => info.getValue(),
  },
  {
    header: "Order Date",
    accessorFn: (row) => new Date(row.placedAt).toLocaleDateString(),
    cell: (info) => info.getValue(),
  },
  {
    header: "Total Price",
    accessorFn: (row) => `₹${row.totalAmount}`,
    cell: (info) => info.getValue(),
  },
];
