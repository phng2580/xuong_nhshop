import { useLocalStorage } from "@/common/hooks/useStorage";
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
import { useNavigate } from "react-router-dom";

const signinSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(3)
        .required(),
    password: Joi.string().min(6).required(),
});
const SignIn = () => {
    const [, setUser] = useLocalStorage("user", {});
    const navigate = useNavigate();
    const form = useForm({
        resolver: joiResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const { mutate } = useMutation({
        mutationFn: async (formData: { email: string; password: string }) => {
            const { data } = await axios.post(
                `http://localhost:8080/api/v1/auth/signin`,
                formData
            );
            return data;
        },
        onSuccess: async (data) => {
            await setUser(data);
            setTimeout(() => {
                toast({
                    title: "Đăng nhập thành công!",
                    description: "Chuyển hướng về trang chủ...",
                    variant: "success",
                });
                navigate("/");
            }, 500);
        },
        onError: (error) => {
            toast({
                title: "Đăng nhập thất bại !",
                description: "Email hoặc mật khẩu không đúng !",
                variant: "destructive",
            });
            console.log(error);
        },
    });
    const onSubmit = (data: { email: string; password: string }) => {
        mutate(data);
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

                <Button>Đăng nhập</Button>
            </form>
        </Form>
    );
};

export default SignIn;
