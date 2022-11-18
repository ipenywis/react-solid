import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Product } from "./product";
import { Rating } from "react-simple-star-rating";
import { Filter, filterProducts } from "./filter";
import { useProducts } from "./hooks/useProducts";
import { useRateFilter } from "./hooks/useRateFilter";

export function Good() {
  const { products } = useProducts();

  const { filterRate, handleRating } = useRateFilter();

  return (
    <div className="flex flex-col h-full">
      <Filter
        filterRate={filterRate as number}
        handleRating={handleRating}
      />
      <div className="h-full flex flex-wrap justify-center">
        {filterProducts(products, filterRate).map((product: any) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}
