import { Resolver } from 'types';
import { DATE_LOCALE, DATE_OPTIONS } from '@config/date';

const resolvers: Resolver = {

  User: {
    rol: async (parent, args, context) => {
      return await context.db.role.findUnique({
        where: {
          id: parent.rolId,
        },
      })
    }
  },
  Material: {
    createdAt: (parent, args, context) =>
      parent.createdAt.toLocaleDateString(DATE_LOCALE, DATE_OPTIONS),
  },
  Query: {
    users: async (parent, args, { db }) => await db.user.findMany(),
    user: async (parent, args, { db }) => await db.user.findUnique({ where: { id: args.id }}),
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
