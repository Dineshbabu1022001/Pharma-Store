export type OrderPayload = {
  id: string;
  userId: string;
  userEmail: string | null;
  items: {
    quantity: number;
    id: number | string;
    name: string;
    price: number;
    image: string;
    stock: number;
  }[];
  address: {
    fullName: string;
    phone: string;
    email: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  email: string;
  totalAmount: number;
  placedAt: string;
};
