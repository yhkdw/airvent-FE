import React from "react";
import { useProduct } from "@/hooks/useProduct";

import ProductDetail from "@/components/Product/ProductDetail";
import Information from "@/components/Product/Information";
import Benefits from "@/components/Product/Benefits";
import Specs from "@/components/Product/Specs";

const Product = () => {
  const { product, productType, isLoading } = useProduct();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProductDetail productType={productType} {...product} />
      <Information productType={productType} />
      <Benefits />
      <Specs productType={productType} />
    </>
  );
};

export default Product;
