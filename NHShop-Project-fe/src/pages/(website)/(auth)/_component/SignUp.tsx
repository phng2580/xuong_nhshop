import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Joi from "joi";
import { useForm } from "react-hook-form";
const signupSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(3)
        .required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});
const SignUp = () => {
    const form = useForm({
        resolver: joiResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    const { mutate } = useMutation({
        mutationFn: async (formData: {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
        }) => {
            await axios.post(
                `http://localhost:8080/api/v1/auth/signup`,
                formData
            );
        },
        onSuccess: (data) => {
            toast({
                title: "Đăng ký thành công!",
                variant: "success",
            });
            return data;
        },
        onError: (error) => {
            toast({
                title: "Đăng ký thất bại !",
                description: "Email đã trùng !",
                variant: "destructive",
            });
            console.log(error);
        },
    });
    const onSubmit = (data: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }) => {
        mutate(data);
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="name">Họ và tên:</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Nhập họ và tên..."
                                    type="text"
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="email">Email:</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Nhập email..."
                                    type="email"
                                    {...field}
                                    id="email"
                                ></Input>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="password">Mật khẩu:</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Nhập mật khẩu..."
                                    type="password"
                                    {...field}
                                    id="password"
                                ></Input>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="confirmPassword">
                                Xác nhận mật khẩu:
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Nhập mật khẩu..."
                                    type="password"
                                    {...field}
                                    id="confirmPassword"
                                ></Input>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>

                <Button>Đăng ký</Button>
            </form>
        </Form>
    );
};

export default SignUp;
