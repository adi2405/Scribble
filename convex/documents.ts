import { ConvexError, v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {
    title: v.optional(v.string()),
    initialContent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError({
        message: "Unauthorized",
        code: 401,
      });
    }

    const organizationId = (user.o as { id?: string } | undefined)?.id;

    return await ctx.db.insert("documents", {
      title: args.title ?? "Untitled document",
      ownerId: user.subject,
      organizationId,
      initialContent: args.initialContent,
    });
  },
});

export const get = query({
  args: {
    paginationOpts: paginationOptsValidator,
    search: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const search = args.search;

    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError({
        message: "Unauthorized",
        code: 401,
      });
    }

    const organizationId = (user.o as { id?: string } | undefined)?.id;

    if (search && organizationId) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("organizationId", organizationId),
        )
        .paginate(args.paginationOpts);
    }

    if (search) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("ownerId", user.subject),
        )
        .paginate(args.paginationOpts);
    }

    if (organizationId) {
      return await ctx.db
        .query("documents")
        .withIndex("by_organization_id", (q) =>
          q.eq("organizationId", organizationId),
        )
        .paginate(args.paginationOpts);
    }

    return await ctx.db
      .query("documents")
      .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject))
      .paginate(args.paginationOpts);
  },
});

export const removeById = mutation({
  args: {
    id: v.id("documents"),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError({
        message: "Unauthorized",
        code: 401,
      });
    }

    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new ConvexError({
        message: "Document not found",
        code: 404,
      });
    }

    const isOwner = document.ownerId === user.subject;

    if (!isOwner) {
      throw new ConvexError({
        message: "Unauthorized",
        code: 401,
      });
    }

    return await ctx.db.delete(args.id);
  },
});

export const updateById = mutation({
  args: {
    id: v.id("documents"),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError({
        message: "Unauthorized",
        code: 401,
      });
    }

    const organizationId = (user.o as { id?: string } | undefined)?.id;

    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new ConvexError({
        message: "Document not found",
        code: 404,
      });
    }

    const isOwner = document.ownerId === user.subject;
    const isOrganizationMember = !!(
      document.organizationId && document.organizationId === organizationId
    );

    if (!isOwner && !isOrganizationMember) {
      throw new ConvexError({
        message: "Unauthorized",
        code: 401,
      });
    }

    return await ctx.db.patch(args.id, { title: args.title });
  },
});

export const getById = query({
  args: { id: v.id("documents") },
  handler: async (ctx, { id }) => {
    const document = await ctx.db.get(id);

    if (!document) {
      throw new ConvexError({
        message: "Document not found",
        code: 404,
      });
    }

    return document;
  },
});
