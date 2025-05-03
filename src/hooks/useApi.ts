import { IProduts } from "../interfaces/IProducts";
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

  listSales: async () => {
    try {
      const response = await api.get("/sales/");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  },

  registerCategory: async ({ name }: { name: string }) => {
    const response = await api.post("/categories/", {
      name,
    });
    return response.data;
  },

  registerProducts: async ({
    name,
    description,
    price,
    category_id,
    brand,
  }: IProduts) => {
    const response = await api.post("/products/", {
      name,
      description,
      price,
      category_id,
      brand,
    });

    return response;
  },
});
