import Navbar from "../components/NavBar";

const ListSales = () => {
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

                        <tr>
                            <td className="px-4 py-2 border text-center">1</td>
                            <td className="px-4 py-2 border text-center">1</td>
                            <td className="px-4 py-2 border text-center">12</td>
                            <td className="px-4 py-2 border text-center">15599.88</td>
                            <td className="px-4 py-2 border text-center">2025-01-15</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border text-center">2</td>
                            <td className="px-4 py-2 border text-center">1</td>
                            <td className="px-4 py-2 border text-center">8</td>
                            <td className="px-4 py-2 border text-center">10399.92</td>
                            <td className="px-4 py-2 border text-center">2025-03-22</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border text-center">3</td>
                            <td className="px-4 py-2 border text-center">1</td>
                            <td className="px-4 py-2 border text-center">15</td>
                            <td className="px-4 py-2 border text-center">19499.85</td>
                            <td className="px-4 py-2 border text-center">2025-07-05</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border text-center">4</td>
                            <td className="px-4 py-2 border text-center">1</td>
                            <td className="px-4 py-2 border text-center">10</td>
                            <td className="px-4 py-2 border text-center">12999.9</td>
                            <td className="px-4 py-2 border text-center">2025-10-18</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border text-center">5</td>
                            <td className="px-4 py-2 border text-center">2</td>
                            <td className="px-4 py-2 border text-center">6</td>
                            <td className="px-4 py-2 border text-center">8999.94</td>
                            <td className="px-4 py-2 border text-center">2025-02-12</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border text-center">6</td>
                            <td className="px-4 py-2 border text-center">2</td>
                            <td className="px-4 py-2 border text-center">11</td>
                            <td className="px-4 py-2 border text-center">16499.89</td>
                            <td className="px-4 py-2 border text-center">2025-05-30</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border text-center">7</td>
                            <td className="px-4 py-2 border text-center">2</td>
                            <td className="px-4 py-2 border text-center">9</td>
                            <td className="px-4 py-2 border text-center">13499.91</td>
                            <td className="px-4 py-2 border text-center">2025-09-14</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border text-center">8</td>
                            <td className="px-4 py-2 border text-center">2</td>
                            <td className="px-4 py-2 border text-center">7</td>
                            <td className="px-4 py-2 border text-center">10499.93</td>
                            <td className="px-4 py-2 border text-center">2025-12-01</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border text-center">9</td>
                            <td className="px-4 py-2 border text-center">3</td>
                            <td className="px-4 py-2 border text-center">5</td>
                            <td className="px-4 py-2 border text-center">9499.95</td>
                            <td className="px-4 py-2 border text-center">2025-01-28</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border text-center">9</td>
                            <td className="px-4 py-2 border text-center">3</td>
                            <td className="px-4 py-2 border text-center">8</td>
                            <td className="px-4 py-2 border text-center">15199.92</td>
                            <td className="px-4 py-2 border text-center">2025-04-10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListSales;