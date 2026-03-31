"use client";

import { useQuery } from "convex/react";

import { Navbar } from "../components/navbar";
import { api } from "../../../../convex/_generated/api";
import { TemplatesGallery } from "../components/templates-gallery";

export function HomeView() {
  const documents = useQuery(api.documents.get);

  if (documents === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 p-4 bg-white">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        {documents?.map((document) => (
          <span key={document._id}>{document.title}</span>
        ))}
      </div>
    </div>
  );
}
