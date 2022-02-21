import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrderItemTitle } from "../orderItem/OrderItemTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Featured Image" source="featuredImage" />
        <NumberInput label="Item Price" source="itemPrice" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="orderitem.id"
          reference="OrderItem"
          label="Order Items"
        >
          <SelectInput optionText={OrderItemTitle} />
        </ReferenceInput>
        <NumberInput label="Sale Price" source="salePrice" />
      </SimpleForm>
    </Edit>
  );
};
