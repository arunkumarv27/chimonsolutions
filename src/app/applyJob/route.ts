import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_84HPAmGu_3rcpx6zp3GjqDqF8o7xurqyj");

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get("email") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const resumeFile = formData.get("resume") as File;

    const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());

    await resend.emails.send({
      from: "no-reply@chimonsolutions.com",
      to: "hr@chimonsolutions.com",
      subject: `Job Application: ${jobTitle}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${coverLetter || "No cover letter provided."}</p>
      `,
      attachments: [
        {
          filename: resumeFile.name,
          content: resumeBuffer.toString("base64"),
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
