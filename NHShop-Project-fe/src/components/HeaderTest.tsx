import * as React from "react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const HeaderTest = () => {
    const { data } = useQuery({
        queryKey: ["CATEGORY_LIST"],
        queryFn: async () => {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/categories`
            );
            return data;
        },
    });
    console.log(data);

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link to="/">
                            <NavigationMenuLink
                                className={
                                    (navigationMenuTriggerStyle(),
                                    "font-semibold text-xl p-3 uppercase")
                                }
                            >
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="font-semibold text-xl p-3 uppercase">
                            Shop
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[300px]">
                                <ListItem
                                    key={"all"}
                                    title={"Tất cả sản phẩm"}
                                    href="/shop"
                                ></ListItem>
                                {data?.map((category: any) => (
                                    <ListItem
                                        key={category._id}
                                        title={category.name}
                                        href={`/categories/${category._id}`}
                                    ></ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/docs">
                            <NavigationMenuLink
                                className={
                                    (navigationMenuTriggerStyle(),
                                    "font-semibold text-xl p-3 uppercase")
                                }
                            >
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/docs">
                            <NavigationMenuLink
                                className={
                                    (navigationMenuTriggerStyle(),
                                    "font-semibold text-xl p-3 uppercase")
                                }
                            >
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    to={props.href || "/"}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none ">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});

export default HeaderTest;
