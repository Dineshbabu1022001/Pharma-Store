import * as Yup from "yup";
export const validationSchema = Yup.object({
    name: Yup.string().required("Medicine name is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Must be greater than 0")
      .required("Price is required"),
    stock: Yup.number()
      .typeError("Stock must be a number")
      .integer("Must be an integer")
      .min(0, "Must be at least 0")
      .required("Stock is required"),
    expiryDate: Yup.date().required("Expiry date is required"),
    dosage: Yup.string().required("Dosage is required"),
    image: Yup.string().url("Must be a valid URL").required("Image URL is required"),
  });