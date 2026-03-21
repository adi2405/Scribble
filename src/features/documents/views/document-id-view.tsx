import { Editor } from "../components/editor"

interface DocumentIdViewProps {
  documentId: string;
}

export function DocumentIdView({ documentId }: DocumentIdViewProps) {
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  );
}
