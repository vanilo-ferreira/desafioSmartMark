import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterProducts from '../pages/RegisterProducts';
import ListProducts from '../pages/ListProducts';
import Categories from "../pages/Categories";
import ListSales from '../pages/ListSales';
import DataAnalysis from '../pages/SalesData';
import ProfitData from '../pages/profitData';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListProducts />} />
                <Route path="/register-products" element={<RegisterProducts />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/sales" element={<ListSales />} />
                <Route path="/sales-quantity" element={<DataAnalysis />} />
                <Route path="/profit-analysis" element={<ProfitData />} />
            </Routes>
        </BrowserRouter >
    );
};

export default AppRoutes;