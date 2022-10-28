import axios from "axios"
import { useEffect, useState } from "react"

const useItems = () => {
    const [items,setItems] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const url = 'https://assignment-11-server-side.vercel.app/api/v1/warehouse/items'
        axios.get(url)
        .then(res => {
            setItems(res.data)
            setLoading(false)
        })
    },[])
    return [items,setItems,loading]
}
export default useItems