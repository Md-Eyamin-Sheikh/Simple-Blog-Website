import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const blogData = await request.json();
    
    // Add unique ID and timestamp
    const blog = {
      id: Date.now(),
      ...blogData,
      createdAt: new Date().toISOString()
    };
    
    // For now, just return success (later connect to MongoDB)
    console.log('Blog created:', blog);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Blog created successfully',
      blog 
    });
    
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create blog' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Placeholder for fetching blogs
  return NextResponse.json({ blogs: [] });
}
