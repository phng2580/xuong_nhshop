import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "./_component/SignIn";
import SignUp from "./_component/SignUp";

const AuthPage = () => {
    return (
        <Tabs defaultValue="signin" className="w-[80%] container">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Đăng nhập</TabsTrigger>
                <TabsTrigger value="signup">Đăng ký</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
                <Card>
                    <CardHeader>
                        <CardTitle>Đăng nhập</CardTitle>
                        <CardDescription>
                            Đăng nhập để sử dụng các tính năng của trang web.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <SignIn />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="signup">
                <Card>
                    <CardHeader>
                        <CardTitle>Đăng ký</CardTitle>
                        <CardDescription>
                            Đăng ký để sử dụng các tính năng của trang web.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <SignUp />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
};

export default AuthPage;
