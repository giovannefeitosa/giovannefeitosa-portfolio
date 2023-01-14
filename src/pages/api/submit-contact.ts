// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

type Data = {
  status: string;
  message?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, message } = req.body;
  const from = req.body.from;

  if (!name || !message) {
    res.status(400).json({
      status: 'error',
      message: 'You need to fill name and message fields',
    });
    return;
  }

  const parsedMessage = from ? `From: ${from}\n\n${message}` : message;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: `[Portfolio Message] ${name}`,
    text: parsedMessage,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: String(error) });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ status: 'success' });
    }
  });
}
