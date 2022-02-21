import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <NumberInput label="Discount" source="discount" />
        <ReferenceInput
          source="orderitem.id"
          reference="OrderItem"
          label="Orderitem"
        >
          <SelectInput optionText={OrderItemTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput label="Shipping Cost" source="shippingCost" />
        <NumberInput label="Tax" source="tax" />
        <NumberInput step={1} label="Total Price" source="totalPrice" />
      </SimpleForm>
    </Create>
  );
};
