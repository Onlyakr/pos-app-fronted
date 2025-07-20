const CartSummary = () => {
  return (
    <ul className="grid grid-cols-7 gap-2 text-center">
      <li className="bg-muted border-border col-span-4 rounded-lg border py-3">
        Total
      </li>
      <li className="bg-muted border-border col-span-1 rounded-lg border py-3">
        ??
      </li>
      <li className="bg-muted border-border col-span-1 rounded-lg border py-3">
        ??
      </li>
    </ul>
  );
};
export default CartSummary;
