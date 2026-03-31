"use client";

import { AuthLoading, Unauthenticated } from "convex/react";

import { AuthLayout } from "../layouts/auth-layout";
import { FullscreenLoader } from "@/components/custom/fullscreen-loader";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthLoading>
        <FullscreenLoader label="Loading..." />
      </AuthLoading>

      <Unauthenticated>
        <AuthLayout>{children}</AuthLayout>
      </Unauthenticated>
    </>
  );
}
