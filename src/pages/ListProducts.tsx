import { useEffect, useState } from 'react';
import Navbar from "../components/NavBar";

import { useApi } from "../hooks/useApi";
import { IModal } from '../interfaces/IModal';
import Modal from '../components/Modal';
import { IModalPrice } from '../interfaces/IModalPrice';
import ModalPrice from '../components/ModalPrice';

const ListProducts = () => {

    const api = useApi();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState<IModal | null>(null);
    const [selectedPriceProduct, setSelectedPriceProduct] = useState<IModalPrice | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [openPrice, setOpenPrice] = useState<boolean>(false);

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

    const handleOpenModal = (product: IModal) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const handleOpenModalPrice = (product: { id: number; name: string; price: number }) => {
        setSelectedPriceProduct(product);
        setOpenPrice(true);
    };

    return (
        <div>
            <Navbar />

            <div className="h-full w-full mt-25 mb-20 flex flex-col justify-star items-center">

                <h1 className="text-gray-500 font-bold text-2xl mb-7"> Produtos</h1>

                <table className="table-auto">
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
                                    <td className="px-4 py-2 border text-center">
                                        <button
                                            onClick={() => handleOpenModal(product)}
                                            className="flex justify-center items-center text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
                                            Vender
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <button
                                            onClick={() => handleOpenModalPrice(product)}
                                            className="flex justify-center items-center text-white inline-flex items-center focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700">
                                            Editar Preço
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                {selectedProduct && open && (
                    <Modal
                        isOpen={open}
                        setOpen={() => setOpen(false)}
                        name={selectedProduct.name}
                        product_id={selectedProduct.id}
                        price={selectedProduct.price}
                    />
                )}

                {selectedPriceProduct && openPrice && (
                    <ModalPrice
                        isOpenPrice={openPrice}
                        setOpenPrice={() => setOpenPrice(false)}
                        name={selectedPriceProduct.name}
                        product_id={selectedPriceProduct.id}
                        price={selectedPriceProduct.price}
                        fetchData={fetchData}
                    />
                )}
            </div>
        </div>
    );
};

export default ListProducts;