import { useLocalStorage } from "@/common/hooks/useStorage";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
type childrenProps = {
    children: React.ReactNode;
};
const PrivateRoute = ({ children }: childrenProps) => {
    const [user] = useLocalStorage("user", {});
    const userId = user?.user?.role;
    if (userId != "admin") {
        return <Navigate to={"/"} />;
    }
    return children ? children : <Outlet />;
};

export default PrivateRoute;
