import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export interface Context {
  db: PrismaClient;
  req: NextApiRequest;
  res: NextApiResponse;
}

interface ResolverFunction {
  // eslint-disable-next-line no-unused-vars
  [key: string]: (parent: any, args: any, context: Context) => Promise<any>;
}

export interface Resolver {
  Query: ResolverFunction;
  Mutation: ResolverFunction;
  [key: string]: ResolverFunction;
}
