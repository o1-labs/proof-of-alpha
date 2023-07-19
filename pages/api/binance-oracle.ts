import { IncomingMessage, ServerResponse } from 'http';
import { isReady, PrivateKey, Field, Signature } from 'snarkyjs';
import jwt from 'jsonwebtoken';

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  async function getTrades() {
    return [];
  }
}
