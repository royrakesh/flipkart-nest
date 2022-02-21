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

import { ORDERITEM_TITLE_FIELD } from "./OrderItemTitle";

export const OrderItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
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
