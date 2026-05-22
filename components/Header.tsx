import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="border-b py-2 px-1 flex justify-between items-center">
      <Link href="/" className="text-xl font-semibold">
        Lazydev
      </Link>

      <Button>Connect Wallet</Button>
    </header>
  );
}
