import {IProduct} from "../../app/models/IProduct";
import ProductList from "./ProductList";
import {useEffect, useState} from "react";
import agent from "../../app/api/agent";


export default function Catalog(){
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        agent.Catalog.list().then(products => setProducts(products));
    }, [])

    return(
        <>
            <ProductList products={products} />
        </>
    )
}
