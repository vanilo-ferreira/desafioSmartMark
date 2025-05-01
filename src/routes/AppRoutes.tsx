import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterProducts from '../pages/registerProducts';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegisterProducts />} />
            </Routes>
        </BrowserRouter >
    );
};

export default AppRoutes;