import { useToast } from "@/components/ui/use-toast";
import {
    addProduct,
    deleteProduct,
    updateProduct,
} from "@/services/product.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../types/product.ts";

type MutationQueryProps = {
    action: "UPDATE" | "DELETE" | "CREATE";
};

const MutationQuery = ({ action }: MutationQueryProps) => {
    const { toast } = useToast();
    const form = useForm();
    const queryClient = useQueryClient();

    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: IProduct) => {
            switch (action) {
                case "CREATE":
                    await addProduct(product);
                    toast({
                        title: "Thêm sản phẩm thành công",
                        description: `${product.name} đã được thêm vào hệ thống`,
                        variant: "success",
                    });
                    break;
                case "UPDATE":
                    await updateProduct(product);
                    toast({
                        title: "Sửa sản phẩm thành công",
                        description: `${product.name} đã được cập nhật`,
                        variant: "success",
                    });
                    break;
                case "DELETE":
                    const confirm = window.confirm(
                        "Bạn có chắc chắn muốn xoá sản phẩm này không ?"
                    );
                    if (confirm) {
                        await deleteProduct(product._id as number | string);
                        toast({
                            title: "Xoá sản phẩm thành công",
                            description: `${product.name} đã được xoá khỏi hệ thống`,
                            variant: "success",
                        });
                    }
                    break;
                default:
                    return null;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
        onError: (error) => {
            toast({
                title: "Có lỗi xảy ra",
                variant: "destructive",
            });
            console.log(error);
        },
    });

    const onSubmit: SubmitHandler<IProduct> = (data) => {
        mutate(data);
    };

    return { mutate, form, onSubmit, ...rest };
};

export default MutationQuery;
