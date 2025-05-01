import { Link } from "react-router-dom";

const Navbar = () => {
  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdownNavbar");
    if (dropdown) {
      dropdown.classList.toggle("hidden");
    }
  };

  return (
    <nav className=" bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          SmartMark Solutions
        </h1>

        <div className="flex md:order-2 space-x-3 md:space-x-0 ">
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar"
          >
            <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 ">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white md:hover:text-blue-700"
                >
                  Produtos
                </Link>
              </li>
              <li className="relative inline-block">
                <button
                  onClick={toggleDropdown}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full md:hover:text-blue-700 dark:text-white"
                >
                  Cadastrar
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="absolute right-0 mt-2 z-50 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to="/register-products"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Produtos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/categories"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Categorias
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 text-white md:hover:text-blue-700"
                >
                  Vendas
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 text-white md:hover:text-blue-700"
                >
                  Gráficos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
