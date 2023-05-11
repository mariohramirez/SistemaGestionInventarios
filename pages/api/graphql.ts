import { NextApiRequest, NextApiResponse } from 'next';
import { startServerAndCreateNextHandler as init } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { resolvers } from '@graphql/server/resolvers';
import { typeDefs } from '@graphql/server/types';
import prisma from '@config/prisma';
import { Context } from 'types';

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default init<NextApiRequest, Context>(server, {
  context: async (req: NextApiRequest, res: NextApiResponse) => ({
    req,
    res,
    db: prisma,
  }),
});
