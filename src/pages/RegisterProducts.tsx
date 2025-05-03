import { useEffect, useState } from 'react';

import Navbar from "../components/NavBar";
import Alert from "../components/Alert";

import { useApi } from "../hooks/useApi";

const RegisterProducts = () => {


    const api = useApi();
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [open, setOpen] = useState<boolean>(false);

    const searchCategories = async () => {
        try {
            const response = await api.searchCategories();
            setCategories(response);

        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    useEffect(() => {
        searchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.registerProducts({
                name,
                description,
                price: parseFloat(price),
                category_id: categoryId,
                brand,
            });

            if (response.status === 200) {
                setOpen(!open);
                setAlertSuccess(!alertSuccess);
            }

            setName("");
            setDescription("");
            setBrand("");
            setPrice("");
            setCategoryId("");
        } catch (error) {
            setOpen(!open);
            console.error("Erro ao cadastrar produto:", error);
        }
    };

    return (
        <div>
            <Navbar />

            <div className="h-screen w-full flex flex-col justify-center items-center">

                <h1 className="text-gray-500 font-bold text-2xl mb-7"> Cadastrar Produtos</h1>

                <div className="w-full max-w-sm mb-8 bg-white border border-gray-200 p-8 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <form
                        onSubmit={handleSubmit}
                        className=" flex flex-col justify-center  max-w-md mx-auto"
                    >

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">

                            <textarea id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4} required className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "></textarea>
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descrição</label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text"
                                id="brand"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Marca</label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Preço</label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <select id="categories"
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                <option value="" disabled>Selecione uma categoria</option>

                                {categories?.slice()
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map((category) => (
                                        <option key={category.id} value={category.id} className="px-4 py-2 border">{category.name}</option>
                                    ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Cadastrar
                        </button>
                    </form>
                </div>

                <Alert
                    isOpen={open}
                    setOpen={setOpen}
                    alertType={alertSuccess}
                />
            </div>
        </div >
    );
};

export default RegisterProducts;