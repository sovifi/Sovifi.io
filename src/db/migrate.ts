import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db } from './index';

async function runMigration() {
  try {
    await migrate(db, { migrationsFolder: 'drizzle' });
    console.log('Migration completed');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigration(); 