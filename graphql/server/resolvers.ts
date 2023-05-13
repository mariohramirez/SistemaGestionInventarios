import { Resolver } from 'types';
import { DATE_LOCALE, DATE_OPTIONS } from '@config/date';

const resolvers: Resolver = {
  Material: {
    createdAt: (parent, args, context) =>
      parent.createdAt.toLocaleDateString(DATE_LOCALE, DATE_OPTIONS),
  },
  Query: {
    users: async (parent, args, { db }) => await db.user.findMany(),
    materials: async (parent, args, { db }) => await db.material.findMany(),
    materialsByUser: async (parent, { user }, { db }) =>
      await db.material.findMany({
        where: {
          createdById: user,
        },
      }),
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
