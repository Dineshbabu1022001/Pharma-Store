import type { Products } from "../types/product";

export const AddMedicineFormFields = [
  { name: "name", label: "Name" },
  { name: "category", label: "Category" },
  { name: "price", label: "Price (₹)", type: "number" },
  { name: "stock", label: "Stock", type: "number" },
  { name: "expiryDate", label: "Expiry Date", type: "date" },
  { name: "dosage", label: "Dosage" },
  { name: "image", label: "Image URL" },
];
export const initialValues: Products = {
  id: "",
  name: "",
  category: "",
  price: 0,
  stock: 0,
  expiryDate: "",
  dosage: "",
  image: "",
};
