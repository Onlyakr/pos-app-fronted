import { Product, products } from "@/utils/data";
import AdjustButton from "@/components/sales/AdjustButton";

const CartList = () => {
  return (
    <div className="flex flex-col gap-2 overflow-auto">
      {products.map((product: Product) => (
        <ul
          className="border-border bg-muted grid min-h-13 grid-cols-7 gap-2 rounded-lg border p-2 text-center"
          key={product.id}
        >
          <li className="col-span-4 flex items-center justify-center">
            {product.name}
          </li>
          <li className="flex items-center justify-center">
            {product.quantity}
          </li>
          <li className="flex items-center justify-center">{product.price}</li>
          <li className="flex items-center justify-center gap-2">
            <AdjustButton product={product} />
          </li>
        </ul>
      ))}
    </div>
  );
};
export default CartList;
