import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import AppLayout from "@/components/layout/AppLayout";

const SalesPage = () => {
  return (
    <AppLayout>
      <div className="flex size-full flex-col items-center justify-center gap-5">
        <ShoppingBag size={150} />
        <Link href="/sales/cart">
          <Button className="w-42">Make Sale</Button>
        </Link>
      </div>
    </AppLayout>
  );
};
export default SalesPage;
