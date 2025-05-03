import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterProducts from '../pages/RegisterProducts';
import ListProducts from '../pages/ListProducts';
import Categories from "../pages/Categories";
import ListSales from '../pages/ListSales';
import DataAnalysis from '../pages/SalesData';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListProducts />} />
                <Route path="/register-products" element={<RegisterProducts />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/sales" element={<ListSales />} />
                <Route path="/sales-quantity" element={<DataAnalysis />} />
            </Routes>
        </BrowserRouter >
    );
};

export default AppRoutes;