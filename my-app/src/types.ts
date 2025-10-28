export interface Data {
  id: number;
  title: string;
  price: number;
  category: string;
}

export interface ListItemsProps {
  data: Data[];
}

export interface ListItemProps {
  item: Data;
}

export type ProductFormData = Omit<Data, "id">;

export interface Form {
  createProduct: (formData: ProductFormData) => Promise<void>;
  setSuccess: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
}
