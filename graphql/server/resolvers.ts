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
    users: async (parent, args, { db }) => await db.user.findMany(),
    user: async (parent, args, { db }) =>
      await db.user.findUnique({ where: { id: args.id } }),
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
  },
  Mutation: {
    createMaterial: async (parent, { name, price }, { db, session }) => {
      if (!session) return null;
      const email = session?.user?.email ?? '';

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
    //Crear un nuevo usuario
    createUser(parent, args, { db }) {
      return db.user.create({ data: args });
    },

    // Actualizar un usuario existente
    updateUser(parent, args, { db }) {
      return db.user.update({ where: { id: args.id }, data: args });
    },

    // Eliminar un usuario existente
    deleteUser(parent, args, { db }) {
      return db.user.delete({ where: { id: args.id } });
    },

    // Actualizar el rol
    updateUserRole(parent, args, { db }) {
      return db.user.update({
        where: { id: args.id },
        data: { role: args.role },
      });
    },
  },
};

export { resolvers };
