import { NextResponse } from "next/server";
import { Resend } from "resend";

// Best practice: use environment variables in production
const resend = new Resend("re_84HPAmGu_3rcpx6zp3GjqDqF8o7xurqyj");

export async function POST(req: Request) {
    try {
        const { firstName, lastName, email, message } = await req.json();

        const data = await resend.emails.send({
            from: "no-reply@chimonsolutions.com",
            to: "hr@chimonsolutions.com",
            subject: `Contact Form Submission from ${firstName} ${lastName}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
    }
}
