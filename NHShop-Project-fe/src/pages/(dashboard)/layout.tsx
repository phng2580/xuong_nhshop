import { Outlet } from "react-router-dom";
import AsideAdmin from "./_component/aside";

import Header from "./_component/Header";
const LayoutAdmin = () => {
    return (
        <>
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <AsideAdmin />
            </aside>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default LayoutAdmin;
