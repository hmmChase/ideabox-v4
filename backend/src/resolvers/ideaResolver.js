export default {
  Query: {
    idea: (parent, args, ctx, info) => {
      return ctx.prisma.query.idea({ where: { id: args.id } });
    },

    ideas: (parent, args, ctx, info) => {
      return ctx.prisma.query.ideas();
    }
  },

  Mutation: {
    createIdea: async (parent, args, ctx, info) => {
      return await ctx.prisma.mutation.createIdea({
        data: { idea: args.idea }
      });
    },
    updateIdea: async (parent, args, ctx, info) => {
      return await ctx.prisma.mutation.updateIdea({
        data: { idea: args.idea },
        where: { id: args.id }
      });
    },
    deleteIdea: async (parent, args, ctx, info) => {
      return await ctx.prisma.mutation.deleteIdea({
        where: { id: args.id }
      });
    }
  }
};
