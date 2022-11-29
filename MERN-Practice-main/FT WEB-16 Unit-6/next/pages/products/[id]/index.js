import {useRouter} from "next/router"

export default function productsDetails(){
    const {query}=useRouter()
    return (
        <dib>Product Details id is {query.id}</dib>
    )
}