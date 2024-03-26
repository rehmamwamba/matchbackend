import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import  User  from '../models/user';

const secretKey = 'ray-mwamba';
const revokedTokens: string[] = [];

const AuthService = {
  async login(username: string, password: string): Promise<string> {
    try {
      // Find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error('User not found');
      }

      // Verify password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error('Invalid password');
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

      return token;
    } catch (error) {
      console.error('Error during login:', error);
      throw new Error('Login failed');
    }
  },

  async logout(token: string): Promise<void> {
    try {
      // Add token to the list of revoked tokens
      revokedTokens.push(token);
    } catch (error) {
      console.error('Error during logout:', error);
      throw new Error('Logout failed');
    }
  },
};

export default AuthService;
