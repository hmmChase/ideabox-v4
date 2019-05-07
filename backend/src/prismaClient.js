const { Prisma } = require('prisma-binding');

const prisma = new Prisma({
  typeDefs: __dirname + '/schema/schema_prep.graphql',
  endpoint: 'https://us1.prisma.sh/chase-c544a8/ideabox-v4/dev',
  secret: process.env.PRISMA_SECRET
});

module.exports = prisma;
