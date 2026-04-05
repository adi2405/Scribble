"use server";

import { ConvexHttpClient } from "convex/browser";
import { auth, clerkClient } from "@clerk/nextjs/server";

import { hslToHex } from "@/lib/utils";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function getDocuments(ids: Id<"documents">[]) {
  return await convex.query(api.documents.getByIds, { ids });
}

function getUserColor(name: string) {
  const nameToNumber = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const hue = Math.abs(nameToNumber) % 360;

  return hslToHex(hue, 80, 60);
}

export async function getUsers() {
  const { orgId } = await auth();

  if (!orgId) {
    throw new Error("No active organization found");
  }

  const clerk = await clerkClient();

  const response = await clerk.users.getUserList({
    organizationId: [orgId],
  });

  const users = response.data.map((user) => {
    const name =
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous";

    return {
      id: user.id,
      name,
      avatar: user.imageUrl,
      color: getUserColor(name),
    };
  });

  return users;
}
