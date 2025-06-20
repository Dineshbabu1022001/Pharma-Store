export const AdminFooter = () => {
  return (
    <footer className="bg-white border-t text-sm text-gray-600 py-3 px-6 flex justify-between items-center">
      <div className="ml-[236px]">
        &copy; {new Date().getFullYear()} MediCare Pharma Admin Dashboard. All rights reserved.
      </div>
      <div>
        Designed by MediCare 😊
      </div>
    </footer>
  );
};
