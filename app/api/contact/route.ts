import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');


const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD; //TODO: replace
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: username,
    pass: password
  }
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      emailAddress,
      phoneNumber,
      state,
      howCanWeHelp
    } = body;
    await transporter.sendMail({
      from: username,
      to: username,
      replyTo: emailAddress,
      subject: `Contact from ${fullName}`,
      html: `
      <p>Name: ${fullName} </p>
      <p>Phone: ${phoneNumber} </p>
      <p>State: ${state} </p>
      <p>Message: ${howCanWeHelp} </p>
      `,
    });

    console.log(body);
    return NextResponse.json({ message: "Success: email was sent" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}