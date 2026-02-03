import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
    const { password } = await request.json();

    console.log("Login attempt with password:", password); // Debug log

    // Ideally use an environment variable: process.env.ADMIN_PASSWORD
    // For now, hardcoded simple password as requested "easy to handle"
    const VALID_PASSWORD = "admin";

    if (password && password.toLowerCase().trim() === VALID_PASSWORD) {
        const response = NextResponse.json({ success: true });

        // Set cookie using the response object
        response.cookies.set('admin_token', 'authenticated', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/'
        });

        return response;
    }

    return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
}
