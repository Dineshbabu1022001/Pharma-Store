import { AdminFooter } from "../common/AdminFooter";
import AdminNavbar from "../common/AdminNavbar";
import AdminSidebar from "../common/AdminSidebar";
import AdminStatsCard from "../common/AdminStatsCards";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex font-sans">
      <div className="w-64 h-screen fixed top-0 left-0 z-40 bg-white shadow">
        <AdminSidebar />
      </div>

      <div className="flex flex-col flex-1 ml-64">
        <div className="sticky top-0 z-30 bg-white shadow">
          <AdminNavbar />
        </div>

        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto min-h-[calc(100vh-4rem)]">
          <AdminStatsCard />
        </main>

        <AdminFooter />
      </div>
    </div>
  );
}
