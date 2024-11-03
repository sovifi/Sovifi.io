-- Drop existing table
DROP TABLE IF EXISTS "artist_profiles";

-- Create new table with updated schema
CREATE TABLE "artist_profiles" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" uuid,
  "total_sales" integer DEFAULT 0,
  "fan_count" integer DEFAULT 0,
  "social_links" jsonb DEFAULT '{}',
  "streaming_links" jsonb DEFAULT '{}',
  "created_at" timestamp DEFAULT now(),
  "updated_at" timestamp DEFAULT now(),
  "artist_name" text,
  "email" text
); 