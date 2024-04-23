import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";

import ProductQuery from "@/common/hooks/ProductQuery";
import { useState } from "react";
import DataTable from "./DataTable";
import FooterTable from "./FooterTable";
import { columns } from "./columns";
import HeaderTable from "../../_component/HeaderTable";

const ProductList = () => {
    const { data } = ProductQuery();
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
        {}
    );
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable({
        data: data ?? [],
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <HeaderTable table={table} />
            </div>
            <div className="rounded-md border">
                <DataTable table={table} />
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <FooterTable table={table} />
            </div>
        </div>
    );
};

export default ProductList;
