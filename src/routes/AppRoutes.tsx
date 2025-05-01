import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterProducts from '../pages/RegisterProducts';
import ListProducts from '../pages/ListProducts';
import Categories from "../pages/Categories";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListProducts />} />
                <Route path="/register-products" element={<RegisterProducts />} />
                <Route path="/categories" element={<Categories />} />
            </Routes>
        </BrowserRouter >
    );
};

export default AppRoutes;