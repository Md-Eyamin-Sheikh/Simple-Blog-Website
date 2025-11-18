import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongoDB';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('blogsite');
    
    // Check all collections
    const collections = await db.listCollections().toArray();
    console.log('Collections:', collections.map(c => c.name));
    
    // Check blogs collection (old format)
    const blogsCollection = db.collection('blogs');
    const oldBlogs = await blogsCollection.find({}).toArray();
    console.log('Old blogs count:', oldBlogs.length);
    
    return NextResponse.json({ 
      success: true, 
      collections: collections.map(c => c.name),
      oldBlogs: oldBlogs.length,
      sampleBlog: oldBlogs[0] || null
    });
    
  } catch (error) {
    console.error('Debug error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
