import { getProductById, getProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

const ProductQuery = (id?: Number | String) => {
    const { data, ...rest } = useQuery({
        queryKey: ["PRODUCT_KEY", id],
        queryFn: async () => {
            return id ? await getProductById(id) : await getProducts();
        },
    });
    return { data, ...rest };
};

export default ProductQuery;
