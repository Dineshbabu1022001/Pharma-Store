import { useQuery } from "@tanstack/react-query"
import Api from "../../api/Api"
const useAllOrderPages = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await Api.get('/orders')
      return res.data
    },
    placeholderData: []
  })
}

export default useAllOrderPages