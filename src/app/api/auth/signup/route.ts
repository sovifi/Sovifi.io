import { NextResponse } from 'next/server';
import { db } from '@/db';
import { users, artistProfiles } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(request: Request) {
  console.log('API route hit');
  
  try {
    const body = await request.json();
    console.log('Parsed request body:', body);

    // Create user
    try {
      const newUser = await db.insert(users)
        .values({
          username: body.username,
          email: body.email,
          password: body.password,
          created_at: new Date()
        })
        .returning();

      console.log('User created:', newUser[0]);

      // If they're signing up as an artist, create artist profile
      let artistProfile = null;
      if (body.isArtist) {
        artistProfile = await db.insert(artistProfiles)
          .values({
            user_id: newUser[0].id,
            artist_name: body.artistName,
            email: body.email,
            total_sales: 0,
            fan_count: 0,
            social_links: '{}',
            streaming_links: '{}',
            created_at: new Date(),
            updated_at: new Date()
          })
          .returning();

        console.log('Artist profile created:', artistProfile[0]);
      }

      return NextResponse.json({
        success: true,
        user: newUser[0],
        artistProfile: artistProfile ? artistProfile[0] : null
      });

    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to create user', details: dbError },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Unhandled error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error },
      { status: 500 }
    );
  }
} 