import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterProducts from '../pages/registerProducts';
import ListProducts from '../pages/listProducts';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListProducts />} />
                <Route path="/register-products" element={<RegisterProducts />} />
            </Routes>
        </BrowserRouter >
    );
};

export default AppRoutes;