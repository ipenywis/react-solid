import { IProduct } from "./product";

interface IThumbnailProps {
  // product: IProduct;
  imageUrl: string;
}

export function Thumbnail(props: IThumbnailProps) {
  // const { product } = props;
  const { imageUrl } = props;

  return (
    <img
      className="p-8 rounded-t-lg h-48"
      src={imageUrl}
      alt="product image"
    />
  );
}
