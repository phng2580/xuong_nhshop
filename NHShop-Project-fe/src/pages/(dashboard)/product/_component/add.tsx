import MutationQuery from "@/common/hooks/MutationQuery";
import { IProduct } from "@/common/types/product";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { uploadFileCloudinary } from "@/common/lib/utils";
import { joiResolver } from "@hookform/resolvers/joi";

const productSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Tên sản phẩm không được để trống",
        "string.empty": "Tên sản phẩm không được để trống",
    }),
    price: Joi.number().required().messages({
        "any.required": "Giá sản phẩm không được để trống",
        "number.base": "Giá sản phẩm phải là số",
    }),
    category: Joi.string().allow("").optional(),
    image: Joi.string().allow("").optional(),
    gallery: Joi.array().items(Joi.string()),
    description: Joi.string().allow("").optional(),
    discount: Joi.number().messages({
        "number.base": "Giảm giá sản phẩm phải là số",
    }),
    featured: Joi.boolean().messages({
        "boolean.base": "Trường này phải là boolean",
    }),
    countInStock: Joi.number().messages({
        "number.base": "Số lượng sản phẩm phải là số",
    }),
});

const ProductAdd = () => {
    const form = useForm({
        resolver: joiResolver(productSchema),
        defaultValues: {
            name: "",
            price: 0,
            category: "",
            image: "",
            gallery: [],
            description: "",
            discount: 0,
            featured: false,
            countInStock: 0,
        },
    });
    const [gallery, setGallery] = useState<string[]>([]);
    const [image, setImage] = useState<string>("");
    const [imagePreview, setImagePreview] = useState<string>("");
    const [galleryPreview, setGalleryPreview] = useState<string[]>([]);
    const { onSubmit } = MutationQuery({
        action: "CREATE",
    });

    const { data: categories } = useQuery({
        queryKey: ["CATEGORY_LIST"],
        queryFn: async () => {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/categories`
            );
            return data;
        },
    });

    const onHandleSubmit = (product: any) => {
        // Kiểm tra 'image' và 'gallery' trước khi gửi form
        if (!image || !gallery.length) {
            toast({
                title: "Vui lòng chọn ảnh cho sản phẩm",
                variant: "destructive",
            });
            return;
        }
        // nếu không có lỗi thì gửi form
        onSubmit({ ...product, gallery, image });
    };

    return (
        <div className=" flex min-h-screen w-[90%] xl:w-full flex-col items-center">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <div className="grid flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 items-center">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onHandleSubmit)}
                            className="space-y-8"
                        >
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Danh mục:</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Chọn danh mục sản phẩm" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {categories?.map(
                                                    (category: any) => {
                                                        return (
                                                            <SelectItem
                                                                value={
                                                                    category._id
                                                                }
                                                                key={
                                                                    category._id
                                                                }
                                                            >
                                                                {category.name}
                                                            </SelectItem>
                                                        );
                                                    }
                                                )}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-3">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="name">
                                                Tên sản phẩm:
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập tên sản phẩm..."
                                                    {...field}
                                                    id="name"
                                                ></Input>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                ></FormField>
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="price">
                                                Giá sản phẩm:
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập giá sản phẩm..."
                                                    {...field}
                                                    id="price"
                                                ></Input>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                ></FormField>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <FormField
                                    control={form.control}
                                    name="image"
                                    render={() => (
                                        <FormItem>
                                            <FormLabel htmlFor="image">
                                                Ảnh sản phẩm:
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    id="image"
                                                    onChange={async (e) => {
                                                        const files =
                                                            e.target.files;
                                                        if (!files) return;
                                                        const urls =
                                                            await Promise.all(
                                                                Array.from(
                                                                    files
                                                                ).map(
                                                                    uploadFileCloudinary
                                                                )
                                                            );
                                                        setImage(urls[0]);
                                                        setImagePreview(
                                                            URL.createObjectURL(
                                                                files[0]
                                                            )
                                                        );
                                                        form.setValue(
                                                            "image",
                                                            urls[0]
                                                        );
                                                    }}
                                                ></Input>
                                            </FormControl>
                                            <FormMessage />
                                            {imagePreview && (
                                                <img
                                                    src={imagePreview}
                                                    alt="product"
                                                    className="h-40 object-contain border border-gray-200 rounded-md outline outline-offset-2 outline-gray-200"
                                                />
                                            )}
                                        </FormItem>
                                    )}
                                ></FormField>
                                <FormField
                                    control={form.control}
                                    name="gallery"
                                    render={() => (
                                        <FormItem>
                                            <FormLabel htmlFor="gallery">
                                                Gallery:
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    multiple
                                                    id="gallery"
                                                    onChange={async (e) => {
                                                        const files =
                                                            e.target.files;
                                                        if (!files) return;
                                                        const urls =
                                                            await Promise.all(
                                                                Array.from(
                                                                    files
                                                                ).map(
                                                                    uploadFileCloudinary
                                                                )
                                                            );
                                                        setGallery(urls);
                                                        setGalleryPreview(
                                                            Array.from(
                                                                files
                                                            ).map((file) =>
                                                                URL.createObjectURL(
                                                                    file
                                                                )
                                                            )
                                                        );
                                                    }}
                                                ></Input>
                                            </FormControl>
                                            <FormMessage />
                                            <div className="grid grid-cols-3 gap-5 justify-items-stretch">
                                                {galleryPreview.map(
                                                    (url, index) => (
                                                        <img
                                                            key={index}
                                                            src={url}
                                                            alt={`product-${index}`}
                                                            className="h-40 object-contain border border-gray-200 rounded-2xl outline outline-offset-2 outline-gray-200 "
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </FormItem>
                                    )}
                                ></FormField>
                            </div>
                            <FormField
                                control={form.control}
                                name="countInStock"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="countInStock">
                                            Số lượng sản phẩm:
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nhập số lượng sản phẩm..."
                                                {...field}
                                                id="countInStock"
                                            ></Input>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            ></FormField>
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mô tả:</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Nhập mô tả sản phẩm..."
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="discount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="discount">
                                            Giảm giá:
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nhập giảm giá..."
                                                {...field}
                                                id="discount"
                                            ></Input>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            ></FormField>
                            <FormField
                                control={form.control}
                                name="featured"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                Sản phẩm nổi bật ?
                                            </FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            ></FormField>
                            <Button>Thêm sản phẩm</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ProductAdd;
