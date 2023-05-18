export enum RoutersPath {
    products = '/product'
}

export type SizeT =
    '35.5'
    | '36'
    | '36.5'
    | '37'
    | '37.5'
    | '38'
    | '38.5'
    | '39'
    | '40'
    | '40.5'
    | '41'
    | '42'
    | '42.5'
    | '43';

export type ProductData = {
    id: string;
    idProduct: string;
    name: string;
    size: Array<{ name: SizeT; priceEuro: string; inStock: boolean }>;
    colorway: Array<string>;
    description: string;
    releaseDate: string;
    img: string;
};

export enum SchemaName {
    product = 'product'
}