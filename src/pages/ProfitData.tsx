import { useEffect, useState } from "react";

import { Chart } from "react-google-charts";
import { useApi } from "../hooks/useApi";
import Navbar from "../components/NavBar";
import { ISales } from "../interfaces/ISales";
import { IGetProducts } from "../interfaces/IGetProducts"

const ProfitData = () => {
    const [chartData, setChartData] = useState<(string | number)[][]>([]);

    const api = useApi();

    useEffect(() => {
        const fetchChartData = async () => {
            const sales = await api.listSales();
            const products = await api.listProducts();

            const productMap: { [key: number]: string } = {};
            products.forEach((p: IGetProducts) => {
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

            const salesByMonth: { month: string, products: { [name: string]: number } }[] = Array.from({ length: 12 }, (_, i) => ({
                month: months[i],
                products: {},
            }));

            sales.forEach((sale: ISales) => {
                const month = new Date(sale.date).getMonth();
                const name = productMap[sale.product_id] || `Produto ${sale.product_id}`;

                if (!salesByMonth[month]) {
                    salesByMonth[month] = { month: months[month], products: {} };
                }

                salesByMonth[month].products[name as string] = (salesByMonth[month].products[name as string] || 0) + sale.total_price;
            });

            const allProductNames = [...new Set(sales.map((s: ISales) => productMap[s.product_id]))];

            const data = [
                ['Mês', ...allProductNames]
            ];

            salesByMonth.forEach(({ month, products }) => {
                const row: (string | number)[] = [month];
                (allProductNames as string[]).forEach((name) => {

                    const productName = String(name);
                    row.push(products[productName] || 0);
                });
                data.push(row);
            });

            setChartData(data as (string | number)[][]);

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
                            pointsVisible: true,
                            pointSize: 5,
                            curveType: "function",
                            legend: { position: "bottom" },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfitData;
