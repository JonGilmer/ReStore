import {Grid} from "@mui/material";
import {IProduct} from "../../app/models/IProduct";
import ProductCard from "./ProductCard";

interface Props {
    products: IProduct[];
}

export default function ProductList({products}: Props){
    return(
            <Grid container spacing={4} columns={{xs: 4, sm: 8, lg: 12 }}>
                    {products.map((product: IProduct) => (
                        <Grid key={product.id} item xs={12} md={6} lg={3} xl={1}>
                            <ProductCard key={product.id} product={product}/>
                        </Grid>
                    ))}
            </Grid>
    )
}
