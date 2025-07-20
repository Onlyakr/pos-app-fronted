type Header = string;

const ProductsHeaders: Header[] = [
  "ID",
  "Category",
  "Name",
  "Quantity",
  "Price",
];

const ProductsHeader = () => {
  return (
    <ul className="grid min-h-14 grid-cols-7 gap-2 text-center font-medium">
      {ProductsHeaders.map((header, i) =>
        header === "Name" ? (
          <li
            key={i}
            className="bg-muted border-border col-span-3 flex items-center justify-center rounded-lg border py-3"
          >
            {header}
          </li>
        ) : (
          <p
            key={i}
            className="bg-muted border-border flex items-center justify-center rounded-lg border py-3"
          >
            {header}
          </p>
        ),
      )}
    </ul>
  );
};
export default ProductsHeader;
