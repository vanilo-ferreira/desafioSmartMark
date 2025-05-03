import { useEffect, useState } from 'react';
import Navbar from "../components/NavBar";

import { useApi } from "../hooks/useApi";

const ListProducts = () => {

    const api = useApi();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const fetchData = async () => {
        try {
            const response = await api.listProducts();
            setProducts(response);

        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    const searchCategories = async () => {
        try {
            const response = await api.searchCategories();
            setCategories(response);

        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    const getCategoryName = (id: number) => {
        const category = categories.find((cat) => cat.id === id);
        return category ? category.name : "Categoria desconhecida";
    };

    useEffect(() => {
        fetchData();
        searchCategories();
    }, []);

    return (
        <div>
            <Navbar />

            <div className="h-screen w-full mt-20 mb-20 flex flex-col justify-star items-center">

                <h1 className="text-gray-500 font-bold text-2xl mb-7"> Produtos</h1>

                <table className="table-auto mb-20">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border"></th>
                            <th className="px-4 py-2 border">Nome</th>
                            <th className="px-4 py-2 border">Descrição</th>
                            <th className="px-4 py-2 border">Preço</th>
                            <th className="px-4 py-2 border">Categoria</th>
                            <th className="px-4 py-2 border">Marca</th>
                            <th className="px-4 py-2 border">Vender</th>
                            <th className="px-4 py-2 border">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.slice()
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((product, index) => (
                                <tr key={product.id}>
                                    <td className="px-4 py-2 border text-center">{index + 1}</td>
                                    <td className="px-4 py-2 border">{product.name}</td>
                                    <td className="px-4 py-2 border">{product.description}</td>
                                    <td className="px-4 py-2 border">{product.price}</td>
                                    <td className="px-4 py-2 border text-center">{getCategoryName(product.category_id)}</td>
                                    <td className="px-4 py-2 border">{product.brand}</td>
                                    <td className="px-4 py-2 border text-center">Vender</td>
                                    <td className="px-4 py-2 border">Editar</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListProducts;