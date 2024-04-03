import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');


// Handles POST requests to /api
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },

  auth: {
    // user: username,
    // pass: password
  }
});

export async function POST(request: Request) {
  // const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
  // const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  // const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
  try {
    const body = await request.json();

    const {
      fullName,
      emailAddress,
      phoneNumber,
      state,
      howCanWeHelp
    } = body;
    console.log(body);
    return NextResponse.json({ message: "Success: email was sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}