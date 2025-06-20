import { useQuery } from "@tanstack/react-query"
import Api from "../../api/Api"
const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await Api.get('/products')
      return res.data
    },
    placeholderData: []
  })
}

export default useProducts