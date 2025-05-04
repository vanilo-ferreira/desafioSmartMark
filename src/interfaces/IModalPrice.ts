export interface IModalPrice {
  isOpenPrice: boolean;
  setOpenPrice: (isOpen: boolean) => void;
  name: string;
  product_id: number;
  price: number;
  fetchData: () => void;
}
