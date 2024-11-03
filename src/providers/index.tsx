'use client';

import { ThirdwebProvider } from "thirdweb/react";
import { type ReactNode } from "react";
import { client } from "@/lib/thirdweb";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThirdwebProvider 
      client={client}
    >
      {children}
    </ThirdwebProvider>
  );
}
