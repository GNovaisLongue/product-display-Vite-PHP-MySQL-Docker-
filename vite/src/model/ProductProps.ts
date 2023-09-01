export interface ProductProps {
  sku: string;
  name: string;
  price: string;
  product_type: string;
  product_attribute: string;
}

export interface DVDAttributes {
  type: "DVD";
  size: string;
}

export interface BookAttributes {
  type: "Book";
  weight: string;
}

export interface FurnitureAttributes {
  type: "Furniture";
  height: string;
  width: string;
  length: string;
}
export type ProductAttributes =
  | DVDAttributes
  | BookAttributes
  | FurnitureAttributes;
