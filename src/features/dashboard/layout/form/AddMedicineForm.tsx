import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 as uuid } from "uuid";
import AdminNavbar from "../common/AdminNavbar";
import AdminSidebar from "../common/AdminSidebar";
import { AdminFooter } from "../common/AdminFooter";
import { useNavigate, useParams } from "react-router-dom";
import useCreateProducts from "../../../../hooks/Products/useCreateProducts";
import type { Products } from "../../../../types/product";
import { validationSchema } from "../../../../utils/formValidate";
import {
  AddMedicineFormFields,
  initialValues,
} from "../../../../constants/AddMedicine";
import useUpdateProduct from "../../../../hooks/Products/useUpdateProduct";
import useProducts from "../../../../hooks/Products/useProducts";

const AddMedicine = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const createMutation = useCreateProducts();
  const updateMutation = useUpdateProduct();
  const { data: MedData = [] } = useProducts();
  const existingData = MedData.find((med: Products) => med.id === id);
  console.log(existingData);

  const isEditMode = Boolean(id && existingData);

  const handleSubmit = (values: Products) => {
    if (isEditMode) {
      updateMutation.mutate(
        { ...values, id },
        {
          onSuccess: () => {
            navigate("/medicines");
          },
        }
      );
    } else {
      createMutation.mutate(
        {
          ...values,
          id: uuid(),
        },
        {
          onSuccess: () => {
            navigate("/medicines");
          },
        }
      );
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="flex-1 p-10 bg-gray-100">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
              {isEditMode ? "Update the Product" : "Add the Product"}
            </h2>

            <Formik
              initialValues={isEditMode ? existingData : initialValues}
              enableReinitialize
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="grid grid-cols-2 gap-6 text-sm">
                {AddMedicineFormFields.map((field) => (
                  <div key={field.name}>
                    <label className="block font-semibold mb-1">
                      {field.label}
                    </label>
                    <Field
                      type={field.type || "text"}
                      name={field.name}
                      className="border rounded px-4 py-2 w-full"
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                ))}

                <div className="col-span-2 text-right">
                  <button
                    type="button"
                    onClick={() => navigate("/medicines")}
                    className="bg-gray-200 hover:bg-gray-500 text-black font-bold py-2 px-6 rounded mr-4"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                  >
                    {isEditMode ? "Update" : "Submit"}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </main>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AddMedicine;
