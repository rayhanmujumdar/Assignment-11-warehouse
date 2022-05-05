import axios from "axios"
import { useEffect, useState } from "react"

const useItems = () => {
    const [items,setItems] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const url = 'http://localhost:5000/items'
        axios.get(url)
        .then(res => {
            setItems(res.data)
            setLoading(false)
        })
    },[])
    return [items,setItems,loading]
}
export default useItems