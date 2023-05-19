import { Resolver } from 'types';
import { DATE_LOCALE, DATE_OPTIONS } from '@config/date';

const resolvers: Resolver = {
  User: {
    role: async (parent, args, context) =>
      await context.db.role.findUnique({
        where: {
          id: parent.roleId,
        },
      }),
  },
  Material: {
    createdAt: (parent, args, context) =>
      parent.createdAt.toLocaleDateString(DATE_LOCALE, DATE_OPTIONS),
  },
  Query: {
    users: async (parent, args, { db, session }) => {
      if (!session) return null;
      const email = session?.user?.email ?? '';

      const user = await db.user.findUnique({
        where: {
          email,
        },
        include: { role: true },
      });

      const role = user?.role?.name;

      if (!role || role !== 'ADMIN') return null;

      return await db.user.findMany();
    },
    user: async (parent, args, { db, session }) => {
      if (!session) return null;
      const email = session?.user?.email ?? '';

      const user = await db.user.findUnique({
        where: {
          email,
        },
        include: { role: true },
      });

      const role = user?.role?.name;

      if (!role || role !== 'ADMIN') return null;

      return await db.user.findUnique({ where: { id: args.id } });
    },
    materials: async (parent, args, { db, session }) => {
      if (!session) return null;

      return await db.material.findMany();
    },
    materialsByUser: async (parent, args, { db, session }) => {
      if (!session) return null;
      const email = session?.user?.email ?? '';

      return await db.material.findMany({
        where: {
          createdBy: {
            email,
          },
        },
      });
    },
    roles: async (parent, args, { db }) => await db.role.findMany(),
  },
  Mutation: {
    createMaterial: async (parent, { name, price }, { db, session }) => {
      if (!session) return null;
      const email = session?.user?.email ?? '';

      const user = await db.user.findUnique({
        where: {
          email,
        },
        include: { role: true },
      });

      const role = user?.role?.name;

      if (!role || role !== 'ADMIN') return null;

      return await db.material.create({
        data: {
          name,
          price,
          createdBy: {
            connect: {
              email,
            },
          },
        },
      });
    },
    updateUserRole: async (parent, args, { db, session }) => {
      if (!session) return null;
      const email = session?.user?.email ?? '';

      const user = await db.user.findUnique({
        where: {
          email,
        },
        include: { role: true },
      });

      const role = user?.role?.name;

      if (!role || role !== 'ADMIN') return null;

      return db.user.update({
        where: { id: args.id },
        data: {
          role: {
            connect: {
              name: args.role,
            },
          },
        },
      });
    },
  },
};

export { resolvers };
