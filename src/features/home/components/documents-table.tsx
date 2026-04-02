import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { SiGoogledocs } from "react-icons/si";
import { PaginationStatus } from "convex/react";
import { Building2Icon, CircleUserIcon } from "lucide-react";

import { DocumentMenu } from "./document-menu";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Doc } from "../../../../convex/_generated/dataModel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DocumentsTableProps {
  documents: Doc<"documents">[];
  loadMore: (numItems: number) => void;
  status: PaginationStatus;
}

interface DocumentRowProps {
  document: Doc<"documents">;
}

function DocumentRow({ document }: DocumentRowProps) {
  const router = useRouter();

  const onNewTabClick = (id: string) => {
    window.open(`/documents/${id}`, "_blank");
  };

  const onRowClick = (id: string) => {
    router.push(`/documents/${id}`);
  };

  return (
    <TableRow
      onClick={() => onRowClick(document._id)}
      className="cursor-pointer"
    >
      <TableCell className="w-[50px]">
        <SiGoogledocs className="size-6 fill-blue-500" />
      </TableCell>
      <TableCell className="font-medium md:w-[45%]">{document.title}</TableCell>
      <TableCell className="text-muted-foreground hidden md:flex items-center justify-center gap-2">
        {document.organizationId ? (
          <Building2Icon className="size-4" />
        ) : (
          <CircleUserIcon className="size-4" />
        )}
        {document.organizationId ? "Organization" : "Personal"}
      </TableCell>
      <TableCell className="text-muted-foreground text-center hidden md:table-cell">
        {format(new Date(document._creationTime), "MMM dd, yyyy")}
      </TableCell>
      <TableCell
        onClick={(e) => e.stopPropagation()}
        className="flex justify-end"
      >
        <DocumentMenu
          documentId={document._id}
          title={document.title}
          onNewTab={onNewTabClick}
        />
      </TableCell>
    </TableRow>
  );
}

export function DocumentsTable({
  documents,
  loadMore,
  status,
}: DocumentsTableProps) {
  const isLoadingFirstPage = status === "LoadingFirstPage";

  return (
    <div className="max-w-7xl mx-auto px-16 py-6 flex flex-col gap-5">
      {isLoadingFirstPage ? (
        <div className="flex flex-col items-center justify-center gap-y-2 h-37">
          <Spinner className="size-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Loading documents...
          </span>
        </div>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-none">
                <TableHead>Name</TableHead>
                <TableHead>&nbsp;</TableHead>
                <TableHead className="hidden md:table-cell text-center">
                  Shared
                </TableHead>
                <TableHead className="hidden md:table-cell text-center">
                  Created At
                </TableHead>
              </TableRow>
            </TableHeader>
            {documents.length === 0 ? (
              <TableBody>
                <TableRow className="hover:bg-transparent">
                  <TableCell
                    colSpan={4}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No documents found
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                {documents.map((document) => (
                  <DocumentRow key={document._id} document={document} />
                ))}
              </TableBody>
            )}
          </Table>
          <div className="flex items-center justify-center">
            <Button
              variant={"ghost"}
              size={"sm"}
              onClick={() => loadMore(5)}
              disabled={status !== "CanLoadMore"}
            >
              {status === "CanLoadMore" ? "Load more" : "End of results"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
