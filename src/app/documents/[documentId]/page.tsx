import { DocumentIdView } from "@/features/documents/views/document-id-view";

export default async function DocumentIdPage({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const { documentId } = await params;

  return <DocumentIdView documentId={documentId} />;
}
