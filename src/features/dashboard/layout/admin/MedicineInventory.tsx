import AdminSidebar from "../common/AdminSidebar";
import AdminNavbar from "../common/AdminNavbar";
import { AdminFooter } from "../common/AdminFooter";
import { Link, useNavigate } from "react-router-dom";
import useProducts from "../../../../hooks/Products/useProducts";
import useDeleteProduct from "../../../../hooks/Products/useDeleteProduct";
import Table from "../../../../components/Table/Table";
import { useMemo } from "react";
import { getColumnsMedicalInventory } from "./getColumnMedicalInventory";

const MedicineInventory = () => {
  const { data: MedData } = useProducts();
  const deleteMutation = useDeleteProduct();

  const navigate = useNavigate();

  const handleEditButton = (id: string | number) => {
    navigate(`/edit-medicine/${id}`);
  };
  const handleDeleteButton = (id: string | number) => {
    deleteMutation.mutate(id);
  };
  const column = useMemo(() => {
    return getColumnsMedicalInventory(handleEditButton, handleDeleteButton);
  }, [handleEditButton, handleDeleteButton]);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="flex-1 p-6 bg-gray-100">
          <div className="bg-white rounded shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Medicine Inventory</h2>
              <Link to="/medicines/add-medicine">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Add new Medicine
                </button>
              </Link>
            </div>

            <h3 className="text-lg font-semibold mb-2">Inventory List</h3>

            <Table data={MedData} columns={column} />
          </div>
        </main>
        <AdminFooter />
      </div>
    </div>
  );
};

export default MedicineInventory;
