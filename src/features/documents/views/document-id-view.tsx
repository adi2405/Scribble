import { Editor } from "../components/editor";
import { Toolbar } from "../components/toolbar";

export function DocumentIdView() {
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
}
