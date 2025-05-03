import { useEffect, useState } from 'react';

import Navbar from "../components/NavBar";
import Alert from '../components/Alert';
import { useApi } from "../hooks/useApi";

const Categories = () => {

  const api = useApi();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
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
      const response = await api.registerCategory({ name });

      if (response.status === 200) {
        setOpen(!open);
        setAlertSuccess(!alertSuccess);
      }

      searchCategories();

      setName("");
    } catch (error) {
      setOpen(!open);
      console.error("Erro ao cadastrar categoria:", error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="h-screen w-full mt-20 mb-20 flex flex-col items-center">
        <h1 className="text-gray-500 font-bold text-2xl mb-7">Categorias</h1>
        <div className="w-full flex justify-center">
          <table className="w-md mr-8 able-auto">
            <thead>
              <tr>
                <th className="w-2"></th>
                <th className="px-4 py-2 border">Nome</th>
              </tr>
            </thead>
            <tbody>
              {categories?.slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((category, index) => (
                  <tr key={category.id}>
                    <td className="px-4 py-2 border text-center">{index + 1}</td>
                    <td className="px-4 py-2 border">{category.name}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="w-100 h-50 bg-white border border-gray-200 p-8 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <form className="flex flex-col justify-center mb-20" onSubmit={handleSubmit}>
              <h2 className="text-center text-white font-bold">Adicionar Categoria</h2>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nome
                </label>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cadastrar
              </button>
            </form>

            {alertSuccess ? (
              <Alert
                isOpen={open}
                setOpen={setOpen}
                alertType={alertSuccess}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
