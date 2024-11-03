'use client';

import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import { MainNav } from "./main-nav";
import { client } from "@/lib/thirdweb";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-[120px] h-[40px]">
              <Image
                src="/images/sovifi-logo.png"
                alt="Sovifi"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <MainNav />
        </div>
        <ConnectButton 
          client={client}
          theme="dark"
          connectModal={{
            title: "Welcome to Sovifi",
            modalSize: "wide",
            mode: "split",
            footer: {
              content: (
                <div className="flex justify-center w-full mt-4">
                  <Image
                    src="/images/sovifi-logo.png"
                    alt="Sovifi"
                    width={100}
                    height={30}
                    className="object-contain"
                  />
                </div>
              )
            }
          }}
        />
      </div>
    </header>
  );
} 