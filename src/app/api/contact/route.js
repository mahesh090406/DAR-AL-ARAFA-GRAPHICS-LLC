import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();

        // In a real application, this would save to a database or send an email.
        console.log('Received Contact Message:', data);

        return NextResponse.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
    }
}
