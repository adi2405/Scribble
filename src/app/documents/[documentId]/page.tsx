import { auth } from "@clerk/nextjs/server";
import { preloadQuery } from "convex/nextjs";

import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { DocumentIdView } from "@/features/documents/views/document-id-view";

export default async function DocumentIdPage({
  params,
}: {
  params: Promise<{ documentId: Id<"documents"> }>;
}) {
  const { documentId } = await params;

  const { getToken } = await auth();
  const token = (await getToken({ template: "convex" })) ?? undefined;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const preloadedDocument = await preloadQuery(
    api.documents.getById,
    { id: documentId },
    { token },
  );

  return <DocumentIdView preloadedDocument={preloadedDocument} />;
}
