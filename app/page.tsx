

import Hero from "@/components/Hero";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-b from-background via-background to-muted/30">
      <Hero />
      <Profile />
    </main>
  );
}
