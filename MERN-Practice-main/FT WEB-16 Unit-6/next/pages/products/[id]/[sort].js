import {useRouter} from "next/router"

export default function productsSort(){
    const {query}=useRouter()
    return (
        <dib>Product Details id is {query.id} is srted by {query.sort}</dib>
    )
}