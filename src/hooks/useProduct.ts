import { useParams } from "react-router-dom";
import { PRODUCTS, type ProductType } from "../constants/products";

export const useProduct = () => {
  const { productType } = useParams<{ productType: string }>();
  const product = PRODUCTS[productType as ProductType];

  return {
    product,
    productType: productType as ProductType,
    isLoading: !product,
  };
};
