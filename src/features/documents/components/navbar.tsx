"use client";

import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { useMemo, useState } from "react";
import { BsFilePdf } from "react-icons/bs";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";

import { Inbox } from "./inbox";
import { Avatars } from "./avatars";
import { DocumentInput } from "./document-input";
import { api } from "../../../../convex/_generated/api";
import { useEditorStore } from "@/store/use-editor-store";
import { Doc } from "../../../../convex/_generated/dataModel";
import { RenameDialog } from "@/components/custom/rename-dialog";
import { RemoveDialog } from "@/components/custom/remove-dialog";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const MAX_ROWS = 10;
const MAX_COLS = 8;

export function Navbar({ data }: { data: Doc<"documents"> }) {
  const router = useRouter();
  const { editor } = useEditorStore();

  const mutation = useMutation(api.documents.create);

  const onNewDocument = () => {
    mutation({
      title: "Untitled document",
      initialContent: "",
    })
      .then((id) => {
        toast.success("Document created successfully");
        router.push(`/documents/${id}`);
      })
      .catch(() => toast.error("Oops! Something went wrong"));
  };

  const [hoveredRows, setHoveredRows] = useState(0);
  const [hoveredCols, setHoveredCols] = useState(0);

  const cells = useMemo(() => {
    return Array.from({ length: MAX_ROWS }, (_, row) =>
      Array.from({ length: MAX_COLS }, (_, col) => ({
        row: row + 1,
        col: col + 1,
        active: row < hoveredRows && col < hoveredCols,
      })),
    );
  }, [hoveredRows, hoveredCols]);

  const handleInsertTable = (rows: number, cols: number) => {
    editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: false })
      .run();
  };

  const onDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

  const onSaveJSON = () => {
    if (!editor) {
      return;
    }

    const content = editor.getJSON();
    const blob = new Blob([JSON.stringify(content)], {
      type: "application/json",
    });
    onDownload(blob, `${data.title}.json`);
  };

  const onSaveHTML = () => {
    if (!editor) {
      return;
    }

    const content = editor.getHTML();
    const blob = new Blob([content], {
      type: "text/html",
    });
    onDownload(blob, `${data.title}.html`);
  };

  const onSaveText = () => {
    if (!editor) {
      return;
    }

    const content = editor.getText();
    const blob = new Blob([content], {
      type: "text/plain",
    });
    onDownload(blob, `${data.title}.txt`);
  };

  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="Scribble" height={24} width={24} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput title={data.title} id={data._id} />
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  File
                </MenubarTrigger>
                <MenubarContent className="print:hidden">
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FileIcon />
                      Save
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem onClick={onSaveJSON}>
                        <FileJsonIcon />
                        JSON
                      </MenubarItem>
                      <MenubarItem onClick={onSaveHTML}>
                        <GlobeIcon />
                        HTML
                      </MenubarItem>
                      <MenubarItem onClick={() => window.print()}>
                        <BsFilePdf />
                        PDF
                      </MenubarItem>
                      <MenubarItem onClick={onSaveText}>
                        <FileTextIcon />
                        Text
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem onClick={onNewDocument}>
                    <FilePlusIcon />
                    New Document
                  </MenubarItem>
                  <hr className="m-1" />
                  <RenameDialog documentId={data._id} initialTitle={data.title}>
                    <MenubarItem
                      onClick={(e) => e.stopPropagation()}
                      onSelect={(e) => e.preventDefault()}
                    >
                      <FilePenIcon />
                      Rename
                    </MenubarItem>
                  </RenameDialog>
                  <RemoveDialog documentId={data._id}>
                    <MenubarItem
                      onClick={(e) => e.stopPropagation()}
                      onSelect={(e) => e.preventDefault()}
                    >
                      <TrashIcon />
                      Remove
                    </MenubarItem>
                  </RemoveDialog>
                  <hr className="m-1" />
                  <MenubarItem onClick={() => window.print()}>
                    <PrinterIcon />
                    Print
                    <MenubarShortcut>Ctrl+P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Edit
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem
                    onClick={() => editor?.chain().focus().undo().run()}
                  >
                    <Undo2Icon />
                    Undo
                    <MenubarShortcut>Ctrl+Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => editor?.chain().focus().redo().run()}
                  >
                    <Redo2Icon />
                    Redo
                    <MenubarShortcut>Ctrl+Y</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Insert
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Table</MenubarSubTrigger>
                    <MenubarSubContent className="p-2">
                      <div className="w-[220px]">
                        <div className="grid grid-cols-8 gap-1">
                          {cells.flat().map((cell) => (
                            <button
                              key={`${cell.row}-${cell.col}`}
                              type="button"
                              onMouseEnter={() => {
                                setHoveredRows(cell.row);
                                setHoveredCols(cell.col);
                              }}
                              onClick={() =>
                                handleInsertTable(cell.row, cell.col)
                              }
                              className={[
                                "h-5 w-5 rounded-[2px] border",
                                cell.active
                                  ? "border-blue-500 bg-blue-500/20"
                                  : "border-muted-foreground/30 bg-background hover:bg-muted",
                              ].join(" ")}
                              aria-label={`Insert ${cell.row} by ${cell.col} table`}
                            />
                          ))}
                        </div>
                        <div className="mt-2 text-center text-xs text-muted-foreground tabular-nums">
                          {hoveredRows > 0 && hoveredCols > 0
                            ? `${hoveredCols} X ${hoveredRows}`
                            : "Select table size"}
                        </div>
                      </div>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Format
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <TextIcon />
                      Text
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain().focus().toggleBold().run()
                        }
                      >
                        <BoldIcon />
                        Bold<MenubarShortcut>Ctrl+B</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain().focus().toggleItalic().run()
                        }
                      >
                        <ItalicIcon />
                        Italic<MenubarShortcut>Ctrl+I</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain().focus().toggleUnderline().run()
                        }
                      >
                        <UnderlineIcon />
                        Underline<MenubarShortcut>Ctrl+U</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain().focus().toggleStrike().run()
                        }
                      >
                        <StrikethroughIcon />
                        Strikethrough
                        <MenubarShortcut>Ctrl+S</MenubarShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem
                    onClick={() =>
                      editor?.chain().focus().unsetAllMarks().run()
                    }
                  >
                    <RemoveFormattingIcon />
                    Clear formatting
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 pl-6">
        <Avatars />
        <Inbox />
        <OrganizationSwitcher
          afterCreateOrganizationUrl={"/"}
          afterLeaveOrganizationUrl={"/"}
          afterSelectOrganizationUrl={"/"}
          afterSelectPersonalUrl={"/"}
        />
        <UserButton />
      </div>
    </nav>
  );
}
