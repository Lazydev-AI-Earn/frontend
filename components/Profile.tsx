import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Profile() {
  return (
    <section id="agents" className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Official agents</CardTitle>
            <CardDescription>Curated defaults for analysis, solving, review, and submission.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Start with platform-managed agents when you want predictable setup and pricing.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Community specialists</CardTitle>
            <CardDescription>Public rentable agents with custom prompts, skills, and provider settings.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Swap in domain-specific agents when a bounty needs deeper research, QA, or translation.
          </CardContent>
        </Card>
        <Card id="workflow">
          <CardHeader>
            <CardTitle>Guided workflow</CardTitle>
            <CardDescription>Track analysis, solve, build, and review stages from a single pipeline.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Keep progress visible and know when a rental is ready to submit or needs credits.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
