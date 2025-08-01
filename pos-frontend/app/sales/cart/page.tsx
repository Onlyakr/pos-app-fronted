"use client";

import CartFooter from "@/components/sales/CartFooter";
import CartHeader from "@/components/sales/CartHeader";
import CartList from "@/components/sales/CartList";
import CartSummary from "@/components/sales/CartSummary";
import AppLayout from "@/components/layout/AppLayout";

const Page = () => {
  return (
    <AppLayout>
      <div className="flex h-full w-full flex-col gap-2 text-sm font-medium">
        <CartHeader />
        <CartList />
        <CartSummary />
        <CartFooter />
      </div>
    </AppLayout>
  );
};
export default Page;
