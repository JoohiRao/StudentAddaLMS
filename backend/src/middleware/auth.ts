// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUserPayload, IUserRequest } from '../types/user';

export const authenticate = (req: IUserRequest, res: Response, next: NextFunction) => {
  // token verification logic
};

export const authorizeRoles = (...roles: string[]) => {
  return (req: IUserRequest, res: Response, next: NextFunction) => {
    // role checking logic
  };
};
