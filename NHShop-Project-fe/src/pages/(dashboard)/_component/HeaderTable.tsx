import { ChevronDown, PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const HeaderTable = ({ table }: any) => {
    return (
        <div>
            <div className="flex items-center py-4">
                <Input
                    placeholder="Tìm kiếm theo tên..."
                    value={
                        (table.getColumn("name")?.getFilterValue() as string) ??
                        ""
                    }
                    onChange={(event) =>
                        table
                            .getColumn("name")
                            ?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-5">
                            Lọc theo <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <Button size="sm" className="max-h-10 gap-1 ml-5 float-end">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <Link
                            to={"/admin/products/add"}
                            className="sr-only sm:not-sr-only sm:whitespace-nowrap"
                        >
                            Thêm sản phẩm
                        </Link>
                    </Button>
                    <Button size="sm" className="max-h-10 gap-1 ml-5 float-end">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <Link
                            to={"/admin/categories/add"}
                            className="sr-only sm:not-sr-only sm:whitespace-nowrap"
                        >
                            Thêm danh mục
                        </Link>
                    </Button>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column: any) => column.getCanHide())
                            .map((column: any) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default HeaderTable;
