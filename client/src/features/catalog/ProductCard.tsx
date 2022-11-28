import {IProduct} from "../../app/models/IProduct";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent, CardHeader,
    CardMedia,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";

interface Props{
    product: IProduct;
}

export default function ProductCard({product}: Props){
    return(
        <>
            <Card>
                <CardHeader title={product.name} titleTypographyProps={
                    {sx: {fontWeight: 'bold', color: 'primary.main'}}
                } avatar={
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }/>
                <CardMedia
                    component="img"
                    sx={{height: 140, objectFit: 'contain', bgcolor: 'primary.light'}}
                    image={product.pictureUrl}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:'text.secondary'}} >
                        ${(product.price/100).toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.brand} / {product.type}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to cart</Button>
                    <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
                </CardActions>
            </Card>
        </>
    )
}
