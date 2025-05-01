import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className=" bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SmartMark Solutions</h1>

                <div className="flex md:order-2 space-x-3 md:space-x-0 ">
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 ">
                            <li>
                                <Link to="/" className="block py-2 px-3 text-white md:hover:text-blue-700">Produtos</Link>
                            </li>
                            <li>
                                <Link to="/register-products" className="block py-2 px-3 text-white md:hover:text-blue-700" aria-current="page">Cadastro de produtos</Link>
                            </li>
                            <li>
                                <Link to="#" className="block py-2 px-3 text-white md:hover:text-blue-700" >Categorias</Link>
                            </li>
                            <li>
                                <Link to="#" className="block py-2 px-3 text-white md:hover:text-blue-700">Vendas</Link>
                            </li>
                            <li>
                                <Link to="#" className="block py-2 px-3 text-white md:hover:text-blue-700">Gráficos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;