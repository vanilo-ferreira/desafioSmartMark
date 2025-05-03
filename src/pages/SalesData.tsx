import { useEffect, useState } from 'react';

import Navbar from "../components/NavBar";
import { useApi } from "../hooks/useApi";

import { Chart } from "react-google-charts";

const SalesData = () => {

    const api = useApi();

    const [chartData, setChartData] = useState([]);

    const fetchSalesAndProducts = async () => {
        try {
            const [sales, products] = await Promise.all([
                api.listSales(),
                api.listProducts()
            ]);

            const summary = {};

            sales.forEach((sale) => {
                const id = sale.product_id;
                summary[id] = (summary[id] || 0) + sale.quantity;
            });

            const data = [
                ["Produtos vendidos no último ano", "Quantidade Vendida"],
                ...Object.entries(summary).map(([productId, quantity]) => {
                    const product = products.find(p => p.id === parseInt(productId));
                    return [product ? product.name : "Desconhecido", quantity];
                })
            ];

            setChartData(data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    useEffect(() => {
        fetchSalesAndProducts();
    }, []);

    return (
        <div>
            <Navbar />

            <div className="w-full mt-30 mb-20 flex flex-col items-center">
                <h1 className="text-gray-500 font-bold text-2xl mb-7">Produtos Vendidos no Último Ano</h1>
                <div className="w-full flex justify-center items-center">

                    <Chart
                        className='p-10'
                        chartType="Bar"
                        width="100%"
                        height="400px"
                        data={chartData}
                        options={{
                            title: "Produtos vendidos",
                            chartArea: { width: "10%" },
                            hAxis: {
                                title: "Quantidade Vendida",
                                minValue: 0,
                            },
                            vAxis: {
                                title: "Produtos vendidos no último ano",
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SalesData;
