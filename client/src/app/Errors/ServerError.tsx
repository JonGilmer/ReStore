import {Button, Container, Divider, Paper, Typography} from "@mui/material";
import {useNavigate, useLocation} from 'react-router-dom'
export default function ServerError() {
    const history = useNavigate();
    const {state} = useLocation();
    return(
        <Container component={Paper}>

            {state?.error ? (
                <>
                    <Typography variant={'h5'} gutterBottom>ServerError</Typography>
                    <Divider />
                    <Typography>{state.error.detail || 'internal server error'}</Typography>
                </>
            ):(
                <Typography variant={'h5'} gutterBottom>ServerError</Typography>
            )}
            <Button onClick={() => history(-1)}>Go Back</Button>
        </Container>
    )
}
