import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');


const username = process.env.EMAIL_USERNAME;
const password = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
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
      subject: `Lytic Website Request from ${fullName}`,
      html: `
      <p>Name: ${fullName} </p>
      <p>Phone: ${phoneNumber} </p>
      <p>State: ${state} </p>
      <p>Message: ${howCanWeHelp} </p>
      `,
    });

    return NextResponse.json({ message: "Success: email was sent" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error: Unable to send request" }, { status: 500 });
  }
}