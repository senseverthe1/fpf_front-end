export interface Product {
    id?: number;
    name: string;
    description: string;
    category?: number;
    price: string;
}

export interface Category {
    id?: number;
    category_name: string;
}