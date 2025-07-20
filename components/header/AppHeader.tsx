"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/header/ModeToggle";
import Path from "@/components/header/Path";
import Image from "next/image";
import logo from "@/public/logo.png";
import UserProfile from "@/components/header/UserProfile";

const AppHeader = () => {
  const { open } = useSidebar();

  return (
    <div className="bg-background/30 sticky top-0 z-50 flex h-10 items-center justify-between gap-5 px-2 py-8 backdrop-blur-sm">
      {!open && (
        <div className="flex items-center gap-5">
          <SidebarTrigger />
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>
      )}
      <Path />
      <div className="flex items-center gap-5">
        <UserProfile />
        <ModeToggle />
      </div>
    </div>
  );
};
export default AppHeader;
