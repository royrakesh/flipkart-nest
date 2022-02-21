import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  discount?: FloatNullableFilter;
  id?: StringFilter;
  orderitem?: OrderItemWhereUniqueInput;
  quantity?: IntNullableFilter;
  shippingCost?: FloatNullableFilter;
  tax?: FloatNullableFilter;
  totalPrice?: IntNullableFilter;
};
