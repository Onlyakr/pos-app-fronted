import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Warehouse,
} from "lucide-react";

interface menuItem {
  label: string;
  icon: React.ElementType;
  href: string;
}

export const cashierMenuItems: menuItem[] = [
  {
    label: "Products",
    icon: Package,
    href: "/products",
  },
  {
    label: "Sales",
    icon: ShoppingCart,
    href: "/sales",
  },
];

export const managerMenuItems: menuItem[] = [
  {
    label: "Products",
    icon: Package,
    href: "/products",
  },
  {
    label: "Sales",
    icon: ShoppingCart,
    href: "/sales",
  },
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Stocks",
    icon: Warehouse,
    href: "/stocks",
  },
];
