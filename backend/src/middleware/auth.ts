// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: any;
}

// Mock JWT secret key (in a real app, this would be in environment variables)
const JWT_SECRET = 'mock_jwt_secret';

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required. No token provided.'
      });
    }
    
    // Verify token
    const token = authHeader.split(' ')[1];
    
    // In a real app, this would verify a real JWT token
    // For this mock API, we'll simulate the verification and user data
    
    // Mock different users based on the token value (for testing)
    let user;
    if (token === 'admin_token') {
      user = {
        id: 'admin_123',
        name: 'Library Admin',
        email: 'admin@example.com',
        role: 'ADMIN',
        libraryId: 'lib_123'
      };
    } else if (token === 'super_token') {
      user = {
        id: 'super_123',
        name: 'Super Admin',
        email: 'super@example.com',
        role: 'SUPER_ADMIN'
      };
    } else {
      user = {
        id: 'user_123',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'MEMBER',
        plan: 'PREMIUM',
        libraryId: 'lib_123'
      };
    }
    
    // Set user data in request
    req.user = user;
    
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
      error: error.message
    });
  }
};

export const authorizeRoles = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Not authorized to perform this action.'
      });
    }
    next();
  };
};