export interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  name: string;
  product_id: number;
  price: number;
}
