import api from "../services/service";

export const useApi = () => ({
  listProducts: async () => {
    try {
      const response = await api.get("/products/");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  },

  searchCategories: async () => {
    try {
      const response = await api.get("/categories/");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  },
});
