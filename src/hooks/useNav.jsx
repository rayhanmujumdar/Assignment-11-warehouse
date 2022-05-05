import { useEffect, useState } from "react"

const useNav = () => {
    const [nav,setNav] = useState(false)
    useEffect(() => {
        let prevScrollpos = window.scrollY
        window.onscroll = function () {
            const currentScrollPos = window.scrollY
            if(prevScrollpos > currentScrollPos){
                setNav(true)
            }
            else{
                setNav(false)
            }
            prevScrollpos = currentScrollPos
        }
    },[])
    return [nav,setNav]
}
export default useNav