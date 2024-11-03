import { db } from './index';
import { users } from './schema';
import { eq } from 'drizzle-orm';

// Create a new user
export async function createUser(name: string, email: string) {
  try {
    const newUser = await db.insert(users).values({
      name,
      email,
    }).returning();
    return newUser[0];
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

// Get all users
export async function getAllUsers() {
  try {
    return await db.select().from(users);
  } catch (error) {
    console.error('Error getting users:', error);
    throw error;
  }
}

// Get user by email
export async function getUserByEmail(email: string) {
  try {
    const user = await db.select().from(users).where(eq(users.email, email));
    return user[0];
  } catch (error) {
    console.error('Error getting user:', error);
    throw error;
  }
}

// Update user
export async function updateUser(email: string, newName: string) {
  try {
    const updated = await db.update(users)
      .set({ name: newName })
      .where(eq(users.email, email))
      .returning();
    return updated[0];
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

// Delete user
export async function deleteUser(email: string) {
  try {
    const deleted = await db.delete(users)
      .where(eq(users.email, email))
      .returning();
    return deleted[0];
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
} 