import { ResolverFunction } from 'types';

export const MATERIALS_QUERY_RESOLVERS: ResolverFunction = {
  materials: async (parent, args, { db }) => await db.material.findMany(),
  materialsByUser: async (parent, { user }, { db }) =>
    await db.material.findMany({
      where: {
        createdById: user,
      },
    }),
};
