import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export interface Context {
  db: PrismaClient;
  req: NextApiRequest;
  res: NextApiResponse;
}

export interface ResolverFunction {
  [key: string]: (parent: any, args: any, context: Context) => Promise<any>;
}

export interface Resolver {
  Query: ResolverFunction;
  Mutation: ResolverFunction;
  [key: string]: ResolverFunction;
}
