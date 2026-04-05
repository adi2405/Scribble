"use client";

import { toast } from "sonner";
import { useParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

import { getDocuments, getUsers } from "../server/actions";
import { Id } from "../../../../convex/_generated/dataModel";
import { FullscreenLoader } from "@/components/custom/fullscreen-loader";
import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from "@/constants/margins";

type User = {
  id: string;
  name: string;
  avatar: string;
};

export function Room({ children }: { children: ReactNode }) {
  const params = useParams();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    let cancelled = false;

    const loadUsers = async () => {
      try {
        const list = await getUsers();
        if (!cancelled) {
          setUsers(list);
        }
      } catch {
        toast.error("Failed to fetch users");
      }
    };

    void loadUsers();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <LiveblocksProvider
      throttle={16}
      authEndpoint={async () => {
        const endpoint = "/api/liveblocks-auth";
        const room = params.documentId as string;

        const response = await fetch(endpoint, {
          method: "POST",
          body: JSON.stringify({ room }),
        });

        return await response.json();
      }}
      resolveUsers={({ userIds }) => {
        return userIds.map(
          (userId) => users.find((user) => user.id === userId) ?? undefined,
        );
      }}
      resolveMentionSuggestions={({ text }) => {
        let filteredUsers = users;

        if (text) {
          filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(text.toLowerCase()),
          );
        }

        return filteredUsers.map((user) => user.id);
      }}
      resolveRoomsInfo={async ({ roomIds }) => {
        const documents = await getDocuments(roomIds as Id<"documents">[]);

        return documents.map((document) => ({
          id: document.id,
          name: document.name,
        }));
      }}
    >
      <RoomProvider
        id={params.documentId as string}
        initialStorage={{
          leftMargin: LEFT_MARGIN_DEFAULT,
          rightMargin: RIGHT_MARGIN_DEFAULT,
        }}
      >
        <ClientSideSuspense
          fallback={<FullscreenLoader label="Loading document..." />}
        >
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
