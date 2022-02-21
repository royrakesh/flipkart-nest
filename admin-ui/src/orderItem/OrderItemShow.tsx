import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { ORDERITEM_TITLE_FIELD } from "./OrderItemTitle";

export const OrderItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Order"
          target="OrderItemId"
          label="Orders"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Discount" source="discount" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Orderitem"
              source="orderitem.id"
              reference="OrderItem"
            >
              <TextField source={ORDERITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <TextField label="Shipping Cost" source="shippingCost" />
            <TextField label="Tax" source="tax" />
            <TextField label="Total Price" source="totalPrice" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Product"
          target="OrderItemId"
          label="Products"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Featured Image" source="featuredImage" />
            <TextField label="ID" source="id" />
            <TextField label="Item Price" source="itemPrice" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Order Items"
              source="orderitem.id"
              reference="OrderItem"
            >
              <TextField source={ORDERITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sale Price" source="salePrice" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
