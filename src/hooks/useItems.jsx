import axios from "axios"
import { useEffect, useState } from "react"

const useItems = () => {
    const [items,setItems] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/home/items'
        axios.get(url)
        .then(res => {
            setItems(res.data)
        })
    },[])
    return [items,setItems]
}
export default useItems