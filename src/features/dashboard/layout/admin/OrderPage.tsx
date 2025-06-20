import AdminSidebar from "../common/AdminSidebar";
import AdminNavbar from "../common/AdminNavbar";
import { AdminFooter } from "../common/AdminFooter";
import useAllOrderPages from "../../../../hooks/Orders/useAllOrderPages";
import { useMemo } from "react";
import { getOrderPageColumns } from "./getOrderPageColumn";
import Table from "../../../../components/Table/Table";

const AllOrderPage = () => {
  const { data: ordersPage = [] } = useAllOrderPages();
  const columns = useMemo(() => getOrderPageColumns(), []);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="flex-1 p-6 bg-gray-100">
          <div className="bg-white rounded shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">All Orders</h2>
            </div>
            <Table data={ordersPage} columns={columns} />
          </div>
        </main>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AllOrderPage;
