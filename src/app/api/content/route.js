import { NextResponse } from 'next/server';
import { getData, saveData } from '@/lib/store';

export async function GET() {
    const data = getData();
    return NextResponse.json(data);
}

export async function POST(request) {
    const body = await request.json();
    const currentData = getData();

    // Merge new data
    // Expect body to be { services: ..., portfolio: ... } (partial updates allowed)
    const newData = {
        ...currentData,
        ...body
    };

    const success = saveData(newData);

    if (success) {
        return NextResponse.json({ success: true, data: newData });
    } else {
        return NextResponse.json({ success: false, message: 'Failed to save data' }, { status: 500 });
    }
}
