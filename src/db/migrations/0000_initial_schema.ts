import { pgTable, serial, text, timestamp, boolean, uuid, integer, jsonb } from 'drizzle-orm/pg-core';

export async function up(db) {
  // Drop the existing artist_profiles table
  await db.schema.dropTable('artist_profiles').execute();

  // Create the new artist_profiles table with correct schema
  await db.schema.createTable('artist_profiles')
    .addColumn('id', uuid('id').primaryKey().defaultRandom())
    .addColumn('user_id', uuid('user_id'))
    .addColumn('total_sales', integer('total_sales').default(0))
    .addColumn('fan_count', integer('fan_count').default(0))
    .addColumn('social_links', jsonb('social_links').default('{}'))
    .addColumn('streaming_links', jsonb('streaming_links').default('{}'))
    .addColumn('created_at', timestamp('created_at').defaultNow())
    .addColumn('updated_at', timestamp('updated_at').defaultNow())
    .addColumn('artist_name', text('artist_name'))
    .addColumn('email', text('email'))
    .execute();
}

export async function down(db) {
  // Revert to the original schema
  await db.schema.dropTable('artist_profiles').execute();
  
  await db.schema.createTable('artist_profiles')
    .addColumn('id', serial('id').primaryKey())
    .addColumn('email', text('email').notNull().unique())
    .addColumn('username', text('username').notNull())
    .addColumn('artist_name', text('artist_name'))
    .addColumn('created_at', timestamp('created_at').defaultNow())
    .addColumn('updated_at', timestamp('updated_at').defaultNow())
    .addColumn('wallet_address', text('wallet_address'))
    .addColumn('is_artist', boolean('is_artist').default(true))
    .addColumn('verified', boolean('verified').default(false))
    .execute();
} 