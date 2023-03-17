import { Bad } from "./bad";
import { Good } from "./good";
import { GPT4 } from "./GPT4";
import { Product } from "./product";

export function ISP() {
  const PRODUCT = {
    title: "Iphone 14 pro max",
    id: "4",
    rating: { rate: 5 },
    price: 200,
    image: "example.com/image",
  };

  return <Bad product={PRODUCT} />;
  return <Good product={PRODUCT} />;
  return <GPT4 product={PRODUCT} />;
}
