import '../../App.css';
import Catalog from "../../features/catalog/catalog";
import Header from "./Header";
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactUs from "../../features/contact/ContactUs";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ServerError from "../Errors/ServerError";


function App() {
    const [darkMode, setDarkMode] = useState(true);
    const paletteType = darkMode ? 'dark' : 'light';
    const theme = createTheme({
        palette: {
            mode: paletteType,
            background: {
                default:paletteType==='light'? '#EAEAEA' : '#121212'
            }
        }
    })
    function handleThemeChange() {
        setDarkMode(!darkMode);
    }


  return (
    <ThemeProvider theme={theme}>
        <ToastContainer theme='colored' position='bottom-right' hideProgressBar />
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} theme={theme}/>
        <Container>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/catalog'} element={<Catalog />} />
                <Route path={'/catalog/:id'} element={<ProductDetails />} />
                <Route path={'//about'} element={<AboutPage />} />
                <Route path={'/contact'} element={<ContactUs />} />
                <Route path={'/server-error'} element={<ServerError />} />
            </Routes>
        </Container>
    </ThemeProvider>
  );
}

export default App;
