import { Resolver } from 'types';
import { DATE_LOCALE, DATE_OPTIONS } from '@config/date';
import { MATERIALS_QUERY_RESOLVERS } from '@graphql/server/query/materials';

const resolvers: Resolver = {
  Material: {
    createdAt: (parent, args, context) =>
      parent.createdAt.toLocaleDateString(DATE_LOCALE, DATE_OPTIONS),
  },
  Query: {
    ...MATERIALS_QUERY_RESOLVERS,
  },
  Mutation: {
    createMaterial: async (parent, { name, price, user }, { db }) =>
      await db.material.create({
        data: {
          name,
          price,
          createdById: user,
        },
      }),
  },
};

export { resolvers };
