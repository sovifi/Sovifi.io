import { pgTable, serial, text, timestamp, boolean, uuid, integer, jsonb } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull(),
  username: text('username').notNull(),
  password: text('password').notNull(),
  created_at: timestamp('created_at').defaultNow()
});

export const artistProfiles = pgTable('artist_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  user_id: uuid('user_id'),
  total_sales: integer('total_sales').default(0),
  fan_count: integer('fan_count').default(0),
  social_links: jsonb('social_links').default('{}'),
  streaming_links: jsonb('streaming_links').default('{}'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
  artist_name: text('artist_name'),
  email: text('email')
}); 