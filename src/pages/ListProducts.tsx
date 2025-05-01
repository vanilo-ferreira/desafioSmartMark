import Navbar from "../components/NavBar";

const ListProducts = () => {
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
                        <tr>
                            <td className="px-4 py-2 border text-center">1</td>
                            <td className="px-4 py-2 border">Samsung 65" QLED TV	</td>
                            <td className="px-4 py-2 border">65-inch 4K Smart TV with HDR and quantum dot technology</td>
                            <td className="px-4 py-2 border">1299.99</td>
                            <td className="px-4 py-2 border text-center">1</td>
                            <td className="px-4 py-2 border">Samsung</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">2</td>
                            <td className="px-4 py-2 border">LG OLED55C1</td>
                            <td className="px-4 py-2 border">55-inch OLED 4K Smart TV with AI ThinQ and G-Sync compatibility</td>
                            <td className="px-4 py-2 border">1499.99</td>
                            <td className="px-4 py-2 border">1</td>
                            <td className="px-4 py-2 border">LG</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">2</td>
                            <td className="px-4 py-2 border">Sony Bravia XR</td>
                            <td className="px-4 py-2 border">65-inch 8K LED Smart TV with cognitive processor XR</td>
                            <td className="px-4 py-2 border">1899.99</td>
                            <td className="px-4 py-2 border">1</td>
                            <td className="px-4 py-2 border">Sony</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">4</td>
                            <td className="px-4 py-2 border">LG French Door Refrigerator</td>
                            <td className="px-4 py-2 border">26.2 cu. ft. smart refrigerator with ice maker and door-in-door</td>
                            <td className="px-4 py-2 border">2199.99</td>
                            <td className="px-4 py-2 border">2</td>
                            <td className="px-4 py-2 border">LG</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">5</td>
                            <td className="px-4 py-2 border">Samsung Family Hub</td>
                            <td className="px-4 py-2 border">27 cu. ft. smart refrigerator with touchscreen and cameras</td>
                            <td className="px-4 py-2 border">2799.99</td>
                            <td className="px-4 py-2 border">2</td>
                            <td className="px-4 py-2 border">Samsung</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">6</td>
                            <td className="px-4 py-2 border">Whirlpool Side-by-Side</td>
                            <td className="px-4 py-2 border">25 cu. ft. fingerprint resistant stainless steel refrigerator</td>
                            <td className="px-4 py-2 border">1499.99</td>
                            <td className="px-4 py-2 border">2</td>
                            <td className="px-4 py-2 border">Whirlpool</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">7</td>
                            <td className="px-4 py-2 border">Dell XPS 15</td>
                            <td className="px-4 py-2 border">15.6-inch touchscreen laptop with Intel i9 and 32GB RAM</td>
                            <td className="px-4 py-2 border">1999.99</td>
                            <td className="px-4 py-2 border">3</td>
                            <td className="px-4 py-2 border">Dell</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">8</td>
                            <td className="px-4 py-2 border">MacBook Pro 16</td>
                            <td className="px-4 py-2 border">16-inch laptop with M1 Pro chip and 16GB unified memory</td>
                            <td className="px-4 py-2 border">2499.99</td>
                            <td className="px-4 py-2 border">3</td>
                            <td className="px-4 py-2 border">Apple</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">9</td>
                            <td className="px-4 py-2 border">Lenovo ThinkPad X1</td>
                            <td className="px-4 py-2 border">14-inch business laptop with Intel i7 and 16GB RAM</td>
                            <td className="px-4 py-2 border">1699.99</td>
                            <td className="px-4 py-2 border">3</td>
                            <td className="px-4 py-2 border">Lenovo</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">10</td>
                            <td className="px-4 py-2 border">Panasonic Countertop Microwave</td>
                            <td className="px-4 py-2 border">1.3 cu. ft. 1100W microwave with inverter technology</td>
                            <td className="px-4 py-2 border">179.99</td>
                            <td className="px-4 py-2 border">4</td>
                            <td className="px-4 py-2 border">Panasonic</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">11</td>
                            <td className="px-4 py-2 border">GE Profile Smart Microwave</td>
                            <td className="px-4 py-2 border">1.7 cu. ft. convection microwave with scan-to-cook technology</td>
                            <td className="px-4 py-2 border">349.99</td>
                            <td className="px-4 py-2 border">4</td>
                            <td className="px-4 py-2 border">GE</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">12</td>
                            <td className="px-4 py-2 border">Samsung Countertop Microwave</td>
                            <td className="px-4 py-2 border">1.1 cu. ft. microwave with sensor cooking</td>
                            <td className="px-4 py-2 border">159.99</td>
                            <td className="px-4 py-2 border">4</td>
                            <td className="px-4 py-2 border">Samsung</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">13</td>
                            <td className="px-4 py-2 border">iPhone 13 Pro Max</td>
                            <td className="px-4 py-2 border">6.7-inch Super Retina XDR display with ProMotion and A15 Bionic chip</td>
                            <td className="px-4 py-2 border">1099.99</td>
                            <td className="px-4 py-2 border">5</td>
                            <td className="px-4 py-2 border">Apple</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">14</td>
                            <td className="px-4 py-2 border">Samsung Galaxy S22 Ultra</td>
                            <td className="px-4 py-2 border">6.8-inch Dynamic AMOLED 2X with S Pen and 108MP camera</td>
                            <td className="px-4 py-2 border">1199.99</td>
                            <td className="px-4 py-2 border">5</td>
                            <td className="px-4 py-2 border">Samsung</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">15</td>
                            <td className="px-4 py-2 border">Google Pixel 6 Pro</td>
                            <td className="px-4 py-2 border">6.7-inch LTPO OLED with Google Tensor processor and 50MP camera</td>
                            <td className="px-4 py-2 border">899.99</td>
                            <td className="px-4 py-2 border">5</td>
                            <td className="px-4 py-2 border">Google</td>
                            <td className="px-4 py-2 border text-center">Vender</td>
                            <td className="px-4 py-2 border">Editar</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListProducts;