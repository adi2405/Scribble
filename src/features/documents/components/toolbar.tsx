"use client";

import { useState } from "react";
import { useEditorState } from "@tiptap/react";
import type { Level } from "@tiptap/extension-heading";
import { type ColorResult, SketchPicker } from "react-color";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ChevronDownIcon,
  HighlighterIcon,
  ImageIcon,
  ItalicIcon,
  Link2Icon,
  ListCollapseIcon,
  ListIcon,
  ListOrderedIcon,
  ListTodoIcon,
  LucideIcon,
  MessagesSquareIcon,
  MinusIcon,
  PlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SearchIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
  UploadIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/store/use-editor-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
} from "@/components/ui/dialog";

function LineHeightButton() {
  const { editor } = useEditorStore();

  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => {
      if (!editor) return { currentLineHeight: "normal" };

      return {
        currentLineHeight:
          editor.getAttributes("paragraph").lineHeight || "normal",
      };
    },
  });

  const lineHeights: {
    label: string;
    value: string;
  }[] = [
    {
      label: "Default",
      value: "normal",
    },
    {
      label: "Single",
      value: "1",
    },
    {
      label: "1.15",
      value: "1.15",
    },
    {
      label: "1.5",
      value: "1.5",
    },
    {
      label: "Double",
      value: "2",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <ListCollapseIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-full p-1 flex flex-col gap-y-1"
      >
        {lineHeights.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => editor?.chain().focus().setLineHeight(value).run()}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              editorState?.currentLineHeight === value && "bg-neutral-200/80",
            )}
          >
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function FontSizeButton() {
  const { editor } = useEditorStore();

  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => {
      if (!editor) {
        return { currentFontSize: "16" };
      }

      const fontSize = editor.getAttributes("textStyle").fontSize;

      return {
        currentFontSize: fontSize ? fontSize.replace("px", "") : "16",
      };
    },
  });

  const currentFontSize = editorState?.currentFontSize ?? "16";

  const [inputValue, setInputValue] = useState(currentFontSize);
  const [isEditing, setIsEditing] = useState(false);

  const clampFontSize = (value: number) => Math.min(32, Math.max(10, value));

  const updateFontSize = (newSize: string) => {
    const size = parseInt(newSize, 10);

    if (!editor || isNaN(size)) {
      setInputValue(currentFontSize);
      setIsEditing(false);
      return;
    }

    const clampedSize = clampFontSize(size);

    editor.chain().focus().setFontSize(`${clampedSize}px`).run();
    setInputValue(String(clampedSize));
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    updateFontSize(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateFontSize(inputValue);
      editor?.commands.focus();
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setInputValue(currentFontSize);
      setIsEditing(false);
      editor?.commands.focus();
    }
  };

  const increment = () => {
    const newSize = clampFontSize(parseInt(currentFontSize, 10) + 1);
    updateFontSize(String(newSize));
  };

  const decrement = () => {
    const newSize = clampFontSize(parseInt(currentFontSize, 10) - 1);
    updateFontSize(String(newSize));
  };

  return (
    <div className="flex items-center gap-0.5">
      <button
        onClick={decrement}
        className="h-7 w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80"
      >
        <MinusIcon className="size-4" />
      </button>

      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="h-7 w-10 p-1 text-sm text-center border border-neutral-400 rounded-sm bg-transparent focus:outline-none focus:ring-0"
        />
      ) : (
        <button
          onClick={() => {
            setIsEditing(true);
            setInputValue(currentFontSize);
          }}
          className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm bg-transparent cursor-text"
        >
          {currentFontSize}
        </button>
      )}

      <button
        onClick={increment}
        className="h-7 w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80"
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
}

function ListButton() {
  const { editor } = useEditorStore();

  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => {
      if (!editor) {
        return {
          isBulletList: false,
          isOrderedList: false,
        };
      }

      return {
        isBulletList: editor.isActive("bulletList"),
        isOrderedList: editor.isActive("orderedList"),
      };
    },
  });

  const lists: {
    label: string;
    icon: LucideIcon;
    isActive: boolean | undefined;
    onClick: () => void;
  }[] = [
    {
      label: "Bullet List",
      icon: ListIcon,
      isActive: editorState?.isBulletList,
      onClick: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Ordered List",
      icon: ListOrderedIcon,
      isActive: editorState?.isOrderedList,
      onClick: () => editor?.chain().focus().toggleOrderedList().run(),
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <ListIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-full p-1 flex flex-col gap-y-1"
      >
        {lists.map(({ label, icon: Icon, isActive, onClick }) => (
          <button
            key={label}
            onClick={onClick}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              isActive && "bg-neutral-200/80",
            )}
          >
            <Icon className="size-4" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AlignButton() {
  const { editor } = useEditorStore();

  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => {
      if (!editor) {
        return {
          currentAlign: "left" as "left" | "center" | "right" | "justify",
        };
      }

      if (editor.isActive({ textAlign: "center" })) {
        return { currentAlign: "center" as const };
      }

      if (editor.isActive({ textAlign: "right" })) {
        return { currentAlign: "right" as const };
      }

      if (editor.isActive({ textAlign: "justify" })) {
        return { currentAlign: "justify" as const };
      }

      return { currentAlign: "left" as const };
    },
  });

  const alignments: {
    label: string;
    value: "left" | "center" | "right" | "justify";
    icon: LucideIcon;
  }[] = [
    {
      label: "Align Left",
      value: "left",
      icon: AlignLeftIcon,
    },
    {
      label: "Align Center",
      value: "center",
      icon: AlignCenterIcon,
    },
    {
      label: "Align Right",
      value: "right",
      icon: AlignRightIcon,
    },
    {
      label: "Align Justify",
      value: "justify",
      icon: AlignJustifyIcon,
    },
  ];

  const ActiveIcon =
    alignments.find(
      (alignment) => alignment.value === editorState?.currentAlign,
    )?.icon ?? AlignLeftIcon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <ActiveIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-full p-1 flex flex-col gap-y-1"
      >
        {alignments.map(({ label, value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => editor?.chain().focus().setTextAlign(value).run()}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              editorState?.currentAlign === value && "bg-neutral-200/80",
            )}
          >
            <Icon className="size-4" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ImageButton() {
  const { editor } = useEditorStore();

  const [imageUrl, setImageUrl] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onChange = (src: string) => {
    editor?.chain().focus().setImage({ src }).run();
  };

  const onUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];

      if (file) {
        const imageUrl = URL.createObjectURL(file);
        onChange(imageUrl);
      }
    };

    input.click();
  };

  const handleImageUrlSubmit = () => {
    if (imageUrl) {
      onChange(imageUrl);
      setImageUrl("");
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
            <ImageIcon className="size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-full">
          <DropdownMenuItem onClick={onUpload}>
            <UploadIcon className="size-4 mr-2" />
            Upload
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
            <SearchIcon className="size-4 mr-2" />
            Paste image URL
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Insert image URL</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Insert image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleImageUrlSubmit();
              }
            }}
          />
          <DialogFooter>
            <Button onClick={handleImageUrlSubmit}>Insert</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function LinkButton() {
  const { editor } = useEditorStore();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => {
      if (!editor) {
        return {
          href: "",
          selectedText: "",
          isSelectionEmpty: true,
        };
      }

      const { from, to, empty } = editor.state.selection;

      return {
        href: editor.getAttributes("link").href || "",
        selectedText: empty ? "" : editor.state.doc.textBetween(from, to, " "),
        isSelectionEmpty: empty,
      };
    },
  });

  const normalizeUrl = (url: string) => {
    const trimmed = url.trim();

    if (!trimmed) return "";

    if (/^(https?:\/\/|mailto:|tel:)/i.test(trimmed)) {
      return trimmed;
    }

    return `https://${trimmed}`;
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (nextOpen) {
      setValue(editorState?.href ?? "");
      setText(editorState?.selectedText ?? "");
    }
  };

  const onApply = () => {
    if (!editor) return;

    const normalizedHref = normalizeUrl(value);
    if (!normalizedHref) return;

    const displayText = text.trim();
    const { from, to, empty } = editor.state.selection;

    if (displayText) {
      editor
        .chain()
        .focus()
        .insertContentAt(
          { from, to },
          {
            type: "text",
            text: displayText,
            marks: [
              {
                type: "link",
                attrs: { href: normalizedHref },
              },
            ],
          },
        )
        .run();
    } else if (!empty) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: normalizedHref })
        .run();
    } else {
      editor
        .chain()
        .focus()
        .insertContent({
          type: "text",
          text: normalizedHref,
          marks: [
            {
              type: "link",
              attrs: { href: normalizedHref },
            },
          ],
        })
        .run();
    }

    setOpen(false);
    setValue("");
    setText("");
  };

  return (
    <DropdownMenu open={open} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <Link2Icon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-full">
        <div className="p-2.5 flex items-end gap-x-2">
          <div className="flex flex-col gap-y-2">
            <Input
              placeholder="Display text..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Input
              placeholder="Past link..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <Button onClick={onApply}>Apply</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function HighlightColorButton() {
  const { editor } = useEditorStore();

  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => {
      if (!editor) {
        return { highlightColor: null };
      }

      return {
        highlightColor: editor.getAttributes("highlight").color || null,
      };
    },
  });

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };

  const sketchPickerColor = editorState?.highlightColor || "#FFFFFF";
  const highlighterIconColor = editorState?.highlightColor || "#000000";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <HighlighterIcon color={highlighterIconColor} className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-full overflow-hidden p-0"
      >
        <SketchPicker color={sketchPickerColor} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function TextColorButton() {
  const { editor } = useEditorStore();

  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => {
      if (!editor) {
        return { color: "#000000" };
      }

      return {
        color: editor.getAttributes("textStyle").color || "#000000",
      };
    },
  });

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <span className="text-xs">A</span>
          <div
            style={{ backgroundColor: editorState?.color }}
            className="h-0.5 w-full"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-full overflow-hidden p-0"
      >
        <SketchPicker color={editorState?.color} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function HeadingLevelButton() {
  const { editor } = useEditorStore();

  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => {
      if (!editor) {
        return { heading: "Normal text" };
      }

      for (let level = 1; level <= 5; level++) {
        if (editor.isActive("heading", { level })) {
          return { heading: `Heading ${level}` };
        }
      }

      return { heading: "Normal text" };
    },
  });

  const headings: {
    label: string;
    value: number;
    fontSize: string;
  }[] = [
    {
      label: "Heading 1",
      value: 1,
      fontSize: "32px",
    },
    {
      label: "Heading 2",
      value: 2,
      fontSize: "24px",
    },
    {
      label: "Heading 3",
      value: 3,
      fontSize: "20px",
    },
    {
      label: "Heading 4",
      value: 4,
      fontSize: "18px",
    },
    {
      label: "Heading 5",
      value: 5,
      fontSize: "16px",
    },
    {
      label: "Normal text",
      value: 0,
      fontSize: "16px",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 w-[140px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <span className="truncate">{editorState?.heading}</span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-full p-1 flex flex-col gap-y-1"
      >
        {headings.map(({ label, value, fontSize }) => (
          <button
            key={value}
            style={{ fontSize }}
            onClick={() => {
              if (value === 0) {
                editor?.chain().focus().setParagraph().run();
              } else {
                editor
                  ?.chain()
                  .focus()
                  .toggleHeading({ level: value as Level })
                  .run();
              }
            }}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              (value === 0 && !editor?.isActive("heading")) ||
                (editor?.isActive("heading", { level: value }) &&
                  "bg-neutral-200/80"),
            )}
          >
            {label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function FontFamilyButton() {
  const { editor } = useEditorStore();

  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => {
      if (!editor) {
        return { fontFamily: "Inter" };
      }

      return {
        fontFamily: editor.getAttributes("textStyle").fontFamily || "Inter",
      };
    },
  });

  const fonts: {
    label: string;
    value: string;
  }[] = [
    {
      label: "Arial",
      value: "Arial",
    },
    {
      label: "Courier New",
      value: "Courier New",
    },
    {
      label: "Georgia",
      value: "Georgia",
    },
    {
      label: "Inter",
      value: "Inter",
    },
    {
      label: "Times New Roman",
      value: "Times New Roman",
    },
    {
      label: "Verdana",
      value: "Verdana",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 w-[140px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <span className="truncate">{editorState?.fontFamily}</span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-full p-1 flex flex-col gap-y-1"
      >
        {fonts.map(({ label, value }) => (
          <button
            key={value}
            style={{ fontFamily: value }}
            onClick={() => editor?.chain().focus().setFontFamily(value).run()}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              editor?.getAttributes("textStyle").fontFamily === value &&
                "bg-neutral-200/80",
            )}
          >
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface ToolbarButtonProps {
  icon: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
}

function ToolbarButton({ onClick, isActive, icon: Icon }: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80",
      )}
    >
      <Icon className="size-4" />
    </button>
  );
}

export function Toolbar() {
  const { editor } = useEditorStore();

  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => ({
      isBold: editor?.isActive("bold") ?? false,
      isItalic: editor?.isActive("italic") ?? false,
      isUnderline: editor?.isActive("underline") ?? false,
      isTaskList: editor?.isActive("taskList") ?? false,
    }),
  });

  const sections: {
    label: string;
    icon: LucideIcon;
    isActive?: boolean;
    onClick: () => void;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false",
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        onClick: () => editor?.chain().focus().toggleBold().run(),
        isActive: editorState?.isBold,
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        onClick: () => editor?.chain().focus().toggleItalic().run(),
        isActive: editorState?.isItalic,
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
        isActive: editorState?.isUnderline,
      },
    ],
    [
      {
        label: "Comment",
        icon: MessagesSquareIcon,
        onClick: () => console.log("Clicked comment"),
        isActive: false, // TODO: Enable this functionality
      },
      {
        label: "List Todo",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editorState?.isTaskList,
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <div className="bg-neutral-300 h-7 w-px rounded-full" />
      <FontFamilyButton />
      <div className="bg-neutral-300 h-7 w-px rounded-full" />
      <HeadingLevelButton />
      <div className="bg-neutral-300 h-7 w-px rounded-full" />
      <FontSizeButton />
      <div className="bg-neutral-300 h-7 w-px rounded-full" />
      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <TextColorButton />
      <HighlightColorButton />
      <div className="bg-neutral-300 h-7 w-px rounded-full" />
      <LinkButton />
      <ImageButton />
      <AlignButton />
      <LineHeightButton />
      <ListButton />
      {sections[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
}
