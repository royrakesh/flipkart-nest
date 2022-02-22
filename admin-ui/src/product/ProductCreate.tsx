import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Featured Image" source="featuredImage" />
        <NumberInput label="Item Price" source="itemPrice" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Sale Price" source="salePrice" />
      </SimpleForm>
    </Create>
  );
};
