import MutationQuery from "@/common/hooks/MutationQuery";
import { IProduct } from "@/common/types/product";

export const useDeleteProduct = () => {
    const { mutate } = MutationQuery({
        action: "DELETE",
    });

    return (product: IProduct) => mutate(product);
};
