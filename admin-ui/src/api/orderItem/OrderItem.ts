import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type OrderItem = {
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  products?: Array<Product>;
  updatedAt: Date;
};
