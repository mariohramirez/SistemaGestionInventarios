import { Resolver } from 'types';

const resolvers: Resolver = {
  Query: {
    users: async (parent, args, { db }) => await db.user.findMany(),
  },
  Mutation: {},
};

export { resolvers };
