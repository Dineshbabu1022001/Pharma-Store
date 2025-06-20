import { QueryClient, useMutation } from "@tanstack/react-query"
import type { CreatedProduct,Products } from "../../types/product"
import { AxiosError } from "axios"
import Api from "../../api/Api"

const useCreateProducts = () => {
    const queryClient = new QueryClient()
    return useMutation<CreatedProduct, AxiosError, Products>({
        mutationFn: async(newProduct:Omit<Products, 'id'>)=>{
            const res = await Api.post('/products', newProduct)
            return res.data
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["products"]})
        }
    })
}

export default useCreateProducts