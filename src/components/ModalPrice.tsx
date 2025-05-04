import { useState } from "react";

import { useApi } from "../hooks/useApi";
import { IModalPrice } from "../interfaces/IModalPrice";


const ModalPrice = ({ isOpenPrice, setOpenPrice, name, product_id, price, fetchData }: IModalPrice) => {
    const api = useApi();
    const [newPrice, setNewPrice] = useState("");

    function closeModal() {
        setOpenPrice(false);
    }

    const formatNumber = (number: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(number);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.updatePrice(Number(product_id), parseFloat(newPrice));
            if (response.status === 200) {
                setOpenPrice(false);
                fetchData();
            }
        } catch (error) {
            setOpenPrice(false);
            console.error("Erro ao atualizar o preço do produto:", error);
        }
    };

    if (isOpenPrice) {
        return (
            <div>
                <div className="fixed inset-0 flex z-50 justify-center items-center w-full">
                    <div className="relative p-4 w-200 max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">

                            <div className="flex">
                                <button onClick={closeModal} className="text-gray-400 m-2 bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    ✕
                                </button>
                            </div>
                            <h3 className="text-lg text-center font-semibold text-gray-900 dark:text-white">
                                Editar Preço do Produto
                            </h3>

                            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                                <div className="flex mb-4 flex-col">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Nome: <span className="underline ml-2">{name}</span>
                                    </label>

                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Preço Atual: R$<span className="underline ml-2">{formatNumber(price)}</span>
                                    </label>

                                    <div className="flex items-center">
                                        <label htmlFor="price" className="block mb-2 text-sm mr-4 font-medium text-gray-900 dark:text-white">Novo Preço:</label>
                                        <input
                                            required
                                            type="number"
                                            step="0.01"
                                            value={newPrice}
                                            onChange={(e) => setNewPrice(e.target.value)}
                                            name="price"
                                            id="price"
                                            className="w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button type="submit" className="w-40 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm px-5 py-2.5">
                                        Atualizar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ModalPrice;




