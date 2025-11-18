import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongoDB';

export async function POST(request) {
  try {
    const blogData = await request.json();
    
    const client = await clientPromise;
    const db = client.db('blogsite');
    const collection = db.collection('blogs');
    
    const blog = {
      ...blogData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await collection.insertOne(blog);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Blog created successfully',
      blogId: result.insertedId
    });
    
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create blog' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('blogsite');
    const collection = db.collection('blogs');
    
    const blogs = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    
    return NextResponse.json({ success: true, blogs });
    
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}
