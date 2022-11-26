import {IProduct} from "../../app/models/IProduct";
import ProductList from "./ProductList";
import {useEffect, useState} from "react";


export default function Catalog(){
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch('https://localhost:44323/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return(
        <>
            <ProductList products={products} />
        </>
    )
}
