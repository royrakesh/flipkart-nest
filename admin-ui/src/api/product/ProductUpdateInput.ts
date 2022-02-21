import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  featuredImage?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orderItem?: OrderItemWhereUniqueInput | null;
  salePrice?: number | null;
};
