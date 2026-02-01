import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();

        // In a real application, this would save to a database or send an email.
        console.log('Received Quote Request:', data);

        // Simulate processing delay
        // await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true, message: 'Quote request received successfully' });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to process request' }, { status: 500 });
    }
}
