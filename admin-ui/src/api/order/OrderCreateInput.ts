import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  orderitem?: OrderItemWhereUniqueInput | null;
  quantity?: number | null;
  shippingCost?: number | null;
  tax?: number | null;
  totalPrice?: number | null;
};
