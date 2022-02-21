import { Product } from "../product/Product";

export type Category = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  product?: Array<Product>;
  updatedAt: Date;
};
