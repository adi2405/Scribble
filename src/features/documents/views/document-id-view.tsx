import { Editor } from "../components/editor"
import { Toolbar } from "../components/toolbar";

interface DocumentIdViewProps {
  documentId: string;
}

export function DocumentIdView({ documentId }: DocumentIdViewProps) {
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
}
