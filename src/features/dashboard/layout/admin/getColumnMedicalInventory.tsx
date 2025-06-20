import { type ColumnDef } from "@tanstack/react-table";
import { FaEdit, FaTimes } from "react-icons/fa";
import type { Products } from "../../../../types/product";

export const getColumnsMedicalInventory = (
  handleEdit: (id: string | number) => void,
  handleDelete: (id: string | number) => void
): ColumnDef<Products>[] => [
  {
    header: "#",
    cell: (info) => info.row.index + 1,
  },
  {
    header: "Image",
    accessorKey: "image",
    cell: (info) => (
      <img
        src={info.getValue() as string}
        alt="medicine"
        className="w-[130px] h-[87px] object-contain rounded shadow"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Medicine Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "expiryDate",
    header: "Expiry Date",
  },
  {
    accessorKey: "dosage",
    header: "Dosage",
  },
  {
    header: "Action",
    cell: (info) => {
      const row = info.row.original;
      return (
        <div className="flex justify-center items-center gap-2 text-lg">
          <button
            onClick={() => handleEdit(row.id ?? "")}
            className="text-green-600 hover:text-green-800"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(row.id ?? "")}
            className="text-red-500 hover:text-red-700"
          >
            <FaTimes />
          </button>
        </div>
      );
    },
  },
];
