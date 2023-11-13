import Welcome from "@/emails/Welcome";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_BTkbkGmj_fWZCxzki9aqvDez3wRysz1fy");

export async function POST() {
  const data = await resend.emails.send({
    from: "todo.sheninthjr.com",
    to: "sheninthjr@gmail.com",
    subject: "Hello World",
    react: <Welcome />,
  });
  return NextResponse.json({
    status: "ok",
  });
}
