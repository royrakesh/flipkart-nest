import { Customer } from "../customer/Customer";
import { OrderItem } from "../orderItem/OrderItem";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  orderItem?: Array<OrderItem>;
  quantity: number | null;
  shippingCost: number | null;
  tax: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
