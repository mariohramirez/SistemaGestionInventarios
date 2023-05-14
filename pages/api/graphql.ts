import { NextApiRequest, NextApiResponse } from 'next';
import { startServerAndCreateNextHandler as init } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { resolvers } from '@graphql/server/resolvers';
import { typeDefs } from '@graphql/server/types';
import prisma from '@config/prisma';
import { Context } from 'types';
import { authOptions } from './auth/[...nextauth]';
import { getServerSession } from 'next-auth';

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const serverHandler = init<NextApiRequest, Context>(server, {
  context: async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions);
    return { req, res, db: prisma, session };
  },
});

const graphqlServer = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (process.env.NODE_ENV == 'production' && !session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  return serverHandler(req, res);
};

export default graphqlServer;
