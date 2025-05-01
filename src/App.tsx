function App() {

  return (

    <div>

      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SmartMark Solutions</h1>

          <div className="flex md:order-2 space-x-3 md:space-x-0 ">
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 ">
                <li>
                  <a href="#" className="block py-2 px-3 text-white md:hover:text-blue-700" aria-current="page">Cadastro de produtos</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-white md:hover:text-blue-700" >Categorias</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-white md:hover:text-blue-700">Produtos</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-white md:hover:text-blue-700">Vendas</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-white md:hover:text-blue-700">Gráficos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>


      <div className="h-screen w-full flex flex-col justify-center items-center">

        <h1 className="text-gray-500 font-bold text-2xl mb-7"> Cadastrar Produtos</h1>


        <div className="w-full max-w-sm bg-white border border-gray-200 p-8 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <form className="max-w-md mx-auto">

            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_first_name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_last_name" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descrição</label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_last_name" id="brand" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Marca</label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_last_name" id="brand" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Preço</label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <select id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled selected>Categorias</option>
                <option>TVs</option>
                <option>Refrigerators</option>
                <option>Laptops</option>
                <option>Microwaves</option>
                <option>Smartphones</option>
              </select>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;