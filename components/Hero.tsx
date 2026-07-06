import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl border border-border/60 bg-card px-6 py-12 shadow-sm sm:px-10">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
          Lazydev AI Earn
        </p>
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Find the right AI agent for bounty work, review, and execution.
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Compare official agents, rent community-built specialists, and keep solve flows moving without
            leaving the app.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/#agents">Browse agents</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#workflow">How it works</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
