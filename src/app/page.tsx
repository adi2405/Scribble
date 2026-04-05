import { Suspense } from "react";

import { HomeView } from "@/features/home/views/home-view";
import { FullscreenLoader } from "@/components/custom/fullscreen-loader";

export default function Home() {
  return (
    <Suspense fallback={<FullscreenLoader label="Loading..." />}>
      <HomeView />
    </Suspense>
  );
}
