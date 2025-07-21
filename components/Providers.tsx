"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/AppSidebar";
// import { users } from "@/utils/data";
import { LoginForm } from "./login/LoginForm";
import AppHeader from "@/components/header/AppHeader";
import { useState } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isUser, setIsUser] = useState(false);
  // const user = users[0];
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        {/* {!user ? (
          <LoginForm />
        ) : (
          <>
            <AppSidebar />
            <main className="flex flex-1 flex-col p-2 pl-0">
              <AppHeader />
              <div className="bg-card border-border flex max-h-[973px] flex-1 items-center justify-center rounded-lg border p-2">
                {children}
              </div>
            </main>
          </>
        )} */}
        {!isUser ? (
          <LoginForm setIsUser={setIsUser} />
        ) : (
          <>
            <AppSidebar setIsUser={setIsUser} />
            <main className="flex flex-1 flex-col p-2 pl-0">
              <AppHeader />
              <div className="bg-card border-border flex flex-1 items-center justify-center rounded-lg border p-2">
                {children}
              </div>
            </main>
          </>
        )}
      </SidebarProvider>
    </ThemeProvider>
  );
};
export default Providers;
