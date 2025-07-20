"use client";
// import { users } from "@/utils/data";
import CashierMenu from "@/components/sidebar/CashierMenu";
import ManagerMenu from "@/components/sidebar/ManagerMenu";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import Logo from "@/components/Logo";
import Role from "@/components/sidebar/Role";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// const user = users[0];

const AppSidebar = () => {
  const [cashier, setCashier] = useState(true);

  return (
    <Sidebar variant="floating" collapsible="offcanvas" className="border-none">
      <SidebarHeader className="relative my-3 items-center gap-2">
        <Logo />
        <SidebarTrigger className="absolute top-0 right-2" />
        <Role />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="mt-3">
        <SidebarGroup className="flex grow flex-col gap-10">
          {/* {user.role === "cashier" && <CashierMenu />}
          {user.role === "manager" && <ManagerMenu />} */}
          {cashier === true ? <CashierMenu /> : <ManagerMenu />}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="destructive" onClick={() => setCashier((crr) => !crr)}>
          Change Role
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
