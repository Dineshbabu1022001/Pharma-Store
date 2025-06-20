import { FaUsers, FaChartBar, FaCheckCircle, FaRegSmile } from "react-icons/fa";
import useProducts from "../../../../hooks/Products/useProducts";
import useAllOrderPages from "../../../../hooks/Orders/useAllOrderPages";
import type { OrderPayload } from "../../../../types/order";

const AdminStatsCard = () => {
  const { data: productData = [] } = useProducts();
  const { data: orderData = [] } = useAllOrderPages();
  console.log(orderData);
  const totalSales = orderData.reduce(
    (acc: number, order: OrderPayload) => acc + order.totalAmount,
    0
  );
  const productLength = productData.length;
  const orderLength = orderData.length;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-orange-400 text-white p-6 rounded-md shadow-md flex items-center justify-between">
        <div>
          <p className="text-sm">Users</p>
          <h2 className="text-2xl font-semibold">1,294</h2>
        </div>
        <FaUsers className="text-4xl" />
      </div>
      <div className="bg-green-500 text-white p-6 rounded-md shadow-md flex items-center justify-between">
        <div>
          <p className="text-sm">Sales</p>
          <h2 className="text-2xl font-semibold">Rs. {totalSales}</h2>
        </div>
        <FaChartBar className="text-4xl" />
      </div>
      <div className="bg-blue-600 text-white p-6 rounded-md shadow-md flex items-center justify-between">
        <div>
          <p className="text-sm">Order</p>
          <h2 className="text-2xl font-semibold">{orderLength}</h2>
        </div>
        <FaCheckCircle className="text-4xl" />
      </div>
      <div className="bg-blue-600 text-white p-6 rounded-md shadow-md flex items-center justify-between">
        <div>
          <p className="text-sm">All Products</p>
          <h2 className="text-2xl font-semibold">{productLength}</h2>
        </div>
        <FaCheckCircle className="text-4xl" />
      </div>
      <div className="bg-indigo-600 text-white p-6 rounded-md shadow-md flex items-center justify-between">
        <div>
          <p className="text-sm">Happy Customers</p>
          <h2 className="text-2xl font-semibold">1,000+</h2>
        </div>
        <FaRegSmile className="text-4xl" />
      </div>
    </div>
  );
};

export default AdminStatsCard;
