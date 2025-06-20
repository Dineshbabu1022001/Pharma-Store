import { useMutation, useQueryClient } from "@tanstack/react-query";
import Api from "../../api/Api";
import type { AxiosError } from "axios";
import type { UpdatedProduct } from "../../types/product";

const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation<void, AxiosError, UpdatedProduct>({
    mutationFn: async (UpdatedProduct) => {
      const { id, ...rest } = UpdatedProduct;
      await Api.put(`/products/${id}`, rest);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => {
      console.error("Update failed:", err.message);
    },
  });
};
export default useUpdateProduct;
