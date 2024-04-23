import { IProduct } from "@/common/types/product.ts";
import instance from "@/config/axios";

export const getProducts = async (): Promise<IProduct[]> => {
    try {
        const { data } = await instance.get("/products");
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};
export const getProductById = async (id: Number | String) => {
    try {
        const { data } = await instance.get(`/products/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const deleteProduct = async (id: Number | String) => {
    try {
        const { data } = await instance.delete(`/products/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const addProduct = async (product: IProduct) => {
    try {
        const { data } = await instance.post("/products", product);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const updateProduct = async (product: IProduct) => {
    try {
        const { data } = await instance.put(
            `/products/${product._id}`,
            product
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};
