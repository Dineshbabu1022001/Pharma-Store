// src/hooks/usePlaceOrder.ts
import { useMutation } from "@tanstack/react-query";
import Api from "../../api/Api";
import type { OrderPayload } from "../../types/order";


const usePlaceOrder = () => {
  return useMutation({
    mutationFn: async (orderData: OrderPayload) => {
      const res = await Api.post("/orders", orderData);
      return res.data;
    },
  });
};

export default usePlaceOrder;
