import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "@/components/ui";
import { User, ShoppingCart, ArrowRight } from "lucide-react";
import { SearchInput } from "@/components/shared/";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b border-gray-100", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={120} height={45} />
            <div>
              <h1 className="text-2xl uppercase font-black">Mono Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                смачніше вже нікуди
              </p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Log in
          </Button>

          <div>
            <Button className="group relative">
              <b>520 грн.</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
