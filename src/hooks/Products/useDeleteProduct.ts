import { useMutation, useQueryClient } from "@tanstack/react-query"
import Api from "../../api/Api"

const useDeleteProduct = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn:async(productId:string | number)=>{
        await Api.delete(`/products/${productId}`)
    },
    onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:["products"]})
    }
  })
}

export default useDeleteProduct