import { useState } from "react";
import { IModal } from "../interfaces/IModal";

import { useApi } from "../hooks/useApi";

const Modal = ({ isOpen, setOpen, name, product_id, price }: IModal) => {

    const api = useApi();
    const [quantity, setQuantity] = useState("");
    const [saleDate, setSaleDate] = useState("");

    function closeModal() {
        setOpen(false);
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

        const totalPrice = parseFloat(quantity) * parseFloat(price);

        try {
            const response = await api.registerSale({
                product_id: Number(product_id),
                quantity: parseInt(quantity),
                total_price: totalPrice,
                date: saleDate
            });

            if (response.status === 200) {
                setOpen(!open);
            }

        } catch (error) {
            setOpen(!open);
            console.error("Erro ao vender produto:", error);
        }
    };

    if (isOpen) {
        return (

            <div>
                <div id="crud-modal" aria-hidden="true" className="fixed inset-0 flex z-50 justify-center items-center w-full md:inset-0 z-50">
                    <div className="relative p-4 w-200 max-w-md max-h-full">

                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">

                            <div className="flex">
                                <button onClick={() => closeModal()} className="text-gray-400 m-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <h3 className="text-lg text-center font-semibold text-gray-900 dark:text-white">
                                Produto
                            </h3>

                            <form className="p-4 md:p-5" onSubmit={handleSubmit}>

                                <div className="flex mb-4">
                                    <div className="flex flex-col items-baseline">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Name: <span className="text-gray-900 text-sm font-medium  dark:text-white underline ml-2">
                                                {name}
                                            </span>
                                        </label>

                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Preço: R$<span className="text-gray-900 text-sm font-medium  dark:text-white underline ml-2">
                                                {formatNumber(price)}
                                            </span>
                                        </label>

                                        <div className="flex justify-center items-center  col-span-2 sm:col-span-1">
                                            <label htmlFor="quantity"
                                                className="block mb-2 text-sm mr-4 font-medium text-gray-900 dark:text-white">Quantidade:</label>
                                            <input required type="number"
                                                value={quantity}
                                                onChange={(e) => setQuantity(e.target.value)}
                                                name="quantity"
                                                id="quantity" className="w-30 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                                        </div>

                                        <div className="flex justify-center items-center mt-4">
                                            <label htmlFor="date" className="block mb-2 text-sm mr-4 font-medium text-gray-900 dark:text-white">Data da Venda:</label>
                                            <input required type="date"
                                                value={saleDate}
                                                onChange={(e) => setSaleDate(e.target.value)}
                                                name="date" id="date" className="w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                                        </div>
                                    </div>

                                </div>
                                <div className="flex justify-center">
                                    <button type="submit" className="w-40 flex justify-center items-center text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Vender
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div >
                </div >
            </div>
        );
    };
};

export default Modal;




