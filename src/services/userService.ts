import UserModel from '../models/user';

interface User {
  _id: string;
  // Define other user properties here...
}

const userService = {
  async createUser(userData: Partial<User>): Promise<User> {
    try {
      const newUser = await UserModel.create(userData);
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }
  },
  
  async getAllUsers(): Promise<User[]> {
    try {
      const users = await UserModel.find();
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Failed to fetch users');
    }
  },
  
  async getUserById(userId: string): Promise<User | null> {
    try {
      const user = await UserModel.findById(userId);
      return user;
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw new Error('Failed to fetch user by ID');
    }
  },
  
  async updateUser(userId: string, userData: Partial<User>): Promise<User | null> {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(userId, userData, { new: true });
      return updatedUser;
    } catch (error) {
      console.error('Error updating user:', error);
      throw new Error('Failed to update user');
    }
  },
  
  async deleteUser(userId: string): Promise<void> {
    try {
      await UserModel.findByIdAndDelete(userId);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw new Error('Failed to delete user');
    }
  }
};

export default userService;
