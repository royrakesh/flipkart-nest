import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  featuredImage?: SortOrder;
  id?: SortOrder;
  itemPrice?: SortOrder;
  name?: SortOrder;
  orderItemId?: SortOrder;
  salePrice?: SortOrder;
  updatedAt?: SortOrder;
};
