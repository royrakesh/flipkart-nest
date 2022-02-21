import { Category } from "../category/Category";
import { OrderItem } from "../orderItem/OrderItem";

export type Product = {
  categories?: Array<Category>;
  createdAt: Date;
  description: string | null;
  featuredImage: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orderItem?: Array<OrderItem>;
  salePrice: number | null;
  updatedAt: Date;
};
