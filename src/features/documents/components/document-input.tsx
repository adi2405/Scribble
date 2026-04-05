import { toast } from "sonner";
import { useMutation } from "convex/react";
import { useStatus } from "@liveblocks/react";
import { useEffect, useRef, useState } from "react";
import { BsCloudCheck, BsCloudSlash } from "react-icons/bs";

import { Spinner } from "@/components/ui/spinner";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface DocumentInputProps {
  title: string;
  id: Id<"documents">;
}

export function DocumentInput({ title, id }: DocumentInputProps) {
  const status = useStatus();

  const [value, setValue] = useState(title);
  const [isPending, setIsPending] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const mutate = useMutation(api.documents.updateById);

  useEffect(() => {
    setValue(title);
  }, [title]);

  const startEditing = () => {
    setValue(title);
    setIsEditing(true);

    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 0);
  };

  const cancelEditing = () => {
    setValue(title);
    setIsEditing(false);
  };

  const saveTitle = async () => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      toast.error("Title cannot be empty");
      setValue(title);
      setIsEditing(false);
      return;
    }

    if (trimmedValue === title) {
      setIsEditing(false);
      return;
    }

    try {
      setIsPending(true);
      await mutate({ id, title: trimmedValue });
      toast.success("Document renamed successfully");
      setIsEditing(false);
    } catch {
      toast.error("Oops! Something went wrong");
    } finally {
      setIsPending(false);
    }
  };

  const showLoader =
    isPending || status === "connecting" || status === "reconnecting";
  const showError = status === "disconnected";

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <div className="relative w-fit max-w-[50ch]">
          <span className="invisible whitespace-pre px-1.5 text-lg">
            {value || " "}
          </span>
          <input
            type="text"
            ref={inputRef}
            value={value}
            disabled={isPending}
            onChange={(e) => setValue(e.target.value)}
            onBlur={cancelEditing}
            onKeyDown={async (e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                await saveTitle();
              }

              if (e.key === "Escape") {
                e.preventDefault();
                cancelEditing();
              }
            }}
            className="absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate"
          />
        </div>
      ) : (
        <span
          onClick={startEditing}
          className="text-lg px-1.5 cursor-pointer truncate"
        >
          {title}
        </span>
      )}
      {!showError && !showLoader && <BsCloudCheck />}
      {showLoader && <Spinner className="text-muted-foreground" />}
      {showError && <BsCloudSlash />}
    </div>
  );
}
