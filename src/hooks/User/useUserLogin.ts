import { useQuery } from "@tanstack/react-query"
import Api from "../../api/Api"

const useUserLogin = () => {
return useQuery({
    queryKey:["login"],
    queryFn: async() =>{
        const res = await Api.get('/users')
        return res.data
    }
})
}

export default useUserLogin