import { useEffect, useState } from "react";

import { Chart } from "react-google-charts";
import { useApi } from "../hooks/useApi";
import Navbar from "../components/NavBar";

const ProfitData = () => {
    const [chartData, setChartData] = useState([]);

    const api = useApi();

    useEffect(() => {
        const fetchChartData = async () => {
            const sales = await api.listSales();
            const products = await api.listProducts();

            const productMap = {};
            products.forEach(p => {
                productMap[p.id] = p.name;
            });

            const months = [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ];

            const salesByMonth = Array.from({ length: 12 }, (_, i) => ({
                month: months[i],
                products: {},
            }));

            sales.forEach(sale => {
                const month = new Date(sale.date).getMonth(); // 0-11
                const name = productMap[sale.product_id] || `Produto ${sale.product_id}`;
                salesByMonth[month].products[name] = (salesByMonth[month].products[name] || 0) + sale.total_price;
            });

            const allProductNames = [...new Set(sales.map(s => productMap[s.product_id]))];

            const data = [
                ['Mês', ...allProductNames]
            ];

            salesByMonth.forEach(({ month, products }) => {
                const row = [month];
                allProductNames.forEach(name => {
                    row.push(products[name] || 0);
                });
                data.push(row);
            });

            setChartData(data);
        };

        fetchChartData();
    }, []);

    return (
        <div>
            <Navbar />

            <div className="w-full mt-25 flex flex-col items-center">
                <h1 className="text-gray-500 font-bold text-2xl mb-7">Análise dos Lucros</h1>
                <div className="w-full flex justify-center items-center">

                    <Chart
                        className='p-10'
                        chartType="Line"
                        width="100%"
                        height="500px"
                        data={chartData}
                        options={{
                            chart: {
                                title: "Vendas por Produto ao Longo do Ano",
                                subtitle: "Total vendido por mês",
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfitData;
