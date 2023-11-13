import Welcome from "@/emails/Welcome";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const data = await resend.emails.send({
    from: "sheninthjr.com",
    to: "sheninthjr23@gmail.com",
    subject: "Hey",
    react: <Welcome />,
  });
  return NextResponse.json({
    status: "ok",
  });
}
