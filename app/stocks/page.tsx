import { Skeleton } from "@/components/ui/skeleton";

const StockPage = () => {
  return (
    <div className="flex size-full flex-col gap-3">
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="w-full flex-1" />
    </div>
  );
};
export default StockPage;
