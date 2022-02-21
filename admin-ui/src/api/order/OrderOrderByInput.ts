import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  orderitemId?: SortOrder;
  quantity?: SortOrder;
  shippingCost?: SortOrder;
  tax?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
