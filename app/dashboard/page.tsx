import { Skeleton } from "@/components/ui/skeleton";

const DashboardPage = () => {
  return (
    <div className="grid size-full grid-cols-2 grid-rows-7 gap-2">
      <Skeleton className="col-span-1 row-span-2" />
      <Skeleton className="col-span-1 row-span-3" />
      <Skeleton className="col-span-1 row-span-3" />
      <Skeleton className="col-span-1 row-span-2" />
      <Skeleton className="col-span-1 row-span-1" />
      <Skeleton className="col-span-1 row-span-2" />
      <Skeleton className="col-span-1 row-span-1" />
    </div>
  );
};
export default DashboardPage;
