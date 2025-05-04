import { useEffect, useState } from 'react';
import Navbar from "../components/NavBar";

import { useApi } from "../hooks/useApi";
import { IProduts } from '../interfaces/IProducts';
import { ISales } from '../interfaces/ISales';

const ListSales = () => {

    const api = useApi();
    const [sales, setSales] = useState<ISales[]>([]);
    const [products, setProducts] = useState<IProduts[]>([]);

    const listSales = async () => {
        try {
            const response = await api.listSales();
            setSales(response);

        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    const getProducts = async () => {
        try {
            const response = await api.listProducts();
            setProducts(response);

        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    const getProductName = (id: number) => {
        const product = products.find((prod) => prod.id === id);
        return product ? product.name : "Produto desconhecida";
    };

    const formatDate = (isoDate: string) => {
        const [year, month, day] = isoDate.split("-");
        return `${day}-${month}-${year}`;
    };


    useEffect(() => {
        getProducts();
        listSales();
    }, []);

    return (
        <div>
            <Navbar />

            <div className="h-screen w-full mt-20 mb-20 flex flex-col justify-star items-center">

                <h1 className="text-gray-500 font-bold text-2xl mb-7">Vendas</h1>

                <table className="table-auto mb-20">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="px-4 py-2 border">Produto</th>
                            <th className="px-4 py-2 border">Quantidade</th>
                            <th className="px-4 py-2 border">Valor Total</th>
                            <th className="px-4 py-2 border">Data da Venda</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales?.slice()
                            .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf())
                            .map((sale, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 border text-center">{index + 1}</td>
                                    <td className="px-4 py-2 border text-center">{getProductName(sale.product_id)}</td>
                                    <td className="px-4 py-2 border text-center">(sale.quantity)</td>
                                    <td className="px-4 py-2 border">{
                                        Number(sale.total_price).toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        })}
                                    </td>
                                    <td className="px-4 py-2 border text-center">{formatDate(sale.date)}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListSales;