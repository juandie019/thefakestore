import type { Product } from "@/interfaces/products";
import { api } from "@/plugins/api";

export const getProducts = async (category: string = '') : Promise<Product[]> => {
    const endpoint = category.length > 0 ? `/products/category/${category}` : '/products';

    const response = await api.get<Product[]>(endpoint);
    return response.data;
}

export const getCategories = async () : Promise<string[]> => {
    const response = await api.get<string[]>('/products/categories');
    return response.data;
}