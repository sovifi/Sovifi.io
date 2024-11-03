import { createUser, getAllUsers, getUserByEmail, updateUser, deleteUser } from './queries';

async function testDatabaseOperations() {
  try {
    // Create a user
    console.log('Creating user...');
    const newUser = await createUser('John Doe', 'john@example.com');
    console.log('Created user:', newUser);

    // Get all users
    console.log('\nGetting all users...');
    const allUsers = await getAllUsers();
    console.log('All users:', allUsers);

    // Get user by email
    console.log('\nGetting user by email...');
    const user = await getUserByEmail('john@example.com');
    console.log('Found user:', user);

    // Update user
    console.log('\nUpdating user...');
    const updatedUser = await updateUser('john@example.com', 'John Smith');
    console.log('Updated user:', updatedUser);

    // Delete user
    console.log('\nDeleting user...');
    const deletedUser = await deleteUser('john@example.com');
    console.log('Deleted user:', deletedUser);

  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    process.exit(0);
  }
}

testDatabaseOperations(); 