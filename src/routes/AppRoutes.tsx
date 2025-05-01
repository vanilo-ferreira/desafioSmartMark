import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterProducts from '../pages/RegisterProducts';
import ListProducts from '../pages/ListProducts';
import Categories from "../pages/Categories";
import ListSales from '../pages/ListSales';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListProducts />} />
                <Route path="/register-products" element={<RegisterProducts />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/sales" element={<ListSales />} />
            </Routes>
        </BrowserRouter >
    );
};

export default AppRoutes;