import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  featuredImage?: StringNullableFilter;
  id?: StringFilter;
  itemPrice?: FloatNullableFilter;
  name?: StringNullableFilter;
  orderItem?: OrderItemWhereUniqueInput;
  salePrice?: FloatNullableFilter;
};
