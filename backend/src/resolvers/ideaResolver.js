import * as auth from '../utils/auth';

export default {
  Query: {
    idea: async (parent, args, ctx, info) => {
      await auth.isAuthenticated(ctx.me);

      return await ctx.prisma.query.idea({ where: { id: args.id } });
    },

    ideas: async (parent, args, ctx, info) => {
      await auth.isAuthenticated(ctx.me);

      return await ctx.prisma.query.ideas();
    }
  },

  Mutation: {
    createIdea: async (parent, args, ctx, info) => {
      await auth.isAuthenticated(ctx.me);

      return await ctx.prisma.mutation.createIdea({
        data: {
          content: args.content,
          author: { connect: { id: ctx.me.user.id } }
        }
      });
    },

    updateIdea: async (parent, args, ctx, info) => {
      await auth.isAuthenticated(ctx.me);

      return await ctx.prisma.mutation.updateIdea({
        where: { id: args.id },
        data: { content: args.content }
      });
    },

    deleteIdea: async (parent, args, ctx, info) => {
      await auth.isAuthenticated(ctx.me);

      return await ctx.prisma.mutation.deleteIdea({
        where: { id: args.id }
      });
    }
  }
};
