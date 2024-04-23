export interface ICategory {
    _id?: number | string;
    name: string;
}

export interface IProduct {
    _id?: number | string;
    category: ICategory;
    name: string;
    price: number;
    gallery?: string[];
    discount: number;
    image: string;
    featured: boolean;
    description: string;
    countInStock: number;
}
