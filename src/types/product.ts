export type Products = {
    id?:number | string,
  name: string;
  category: string;
  price: number | null;
  stock: number | null;
  expiryDate: string;
  rating?: number | null;
  reviews?: Review[];
  dosage: string;
  image: string;
};
export type Review = {
  username: string;
  comment: string;
  rating: number;
  date: string;
};
export type CreatedProduct = Products & {id:number}

export type UpdatedProduct = Omit<Products, "expiryData" | "image">

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  stock:number
  quantity?:number
}
export type CartProduct = {
  id: number | string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock: number
};
