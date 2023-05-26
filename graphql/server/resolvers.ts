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
    createdAt: (parent, args, context) =>
      parent.createdAt.toLocaleDateString(DATE_LOCALE, DATE_OPTIONS),
  },
  Material: {
    createdAt: (parent, args, context) =>
      parent.createdAt.toLocaleDateString(DATE_LOCALE, DATE_OPTIONS),
  },
  Movement: {
    createdAt: (parent, args, context) =>
      parent.createdAt.toLocaleDateString(DATE_LOCALE, DATE_OPTIONS),
    movementType: async (parent, args, { db }) =>
      await db.movementType.findUnique({
        where: {
          id: parent.movementTypeId,
        },
      }),
    material: async (parent, args, { db }) =>
      await db.material.findUnique({
        where: {
          id: parent.materialId,
        },
      }),
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

      return await db.user.findMany({
        orderBy: [{ createdAt: 'desc' }],
      });
    },
    user: async (parent, { email }, { db }) =>
      await db.user.findFirst({ where: { email } }),
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
        orderBy: [{ createdAt: 'desc' }],
      });
    },
    roles: async (parent, args, { db }) => await db.role.findMany(),
    movementsByUser: async (parent, args, { db, session }) => {
      if (!session) return null;
      const email = session?.user?.email ?? '';

      return await db.movement.findMany({
        where: {
          createdBy: {
            email,
          },
        },
        orderBy: [{ createdAt: 'desc' }],
      });
    },
    movementsByMaterial: async (parent, { materialId }, { db, session }) => {
      if (!session) return null;

      const email = session?.user?.email ?? '';

      return await db.movement.findMany({
        where: {
          materialId,
          createdBy: {
            email,
          },
        },
        orderBy: [{ createdAt: 'desc' }],
      });
    },
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
    createMovement: async (
      parent,
      { materialId, quantity, type },
      { db, session }
    ) => {
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

      return await db.movement.create({
        data: {
          material: {
            connect: {
              id: materialId,
            },
          },
          quantity,
          movementType: {
            connect: {
              name: type,
            },
          },
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
