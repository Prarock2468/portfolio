import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, mobile, message } = await request.json();
console.log(name, mobile, message , 'i am here');
  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "pradeep@ith.tech", // Your email
    subject: `New Message from ${name}`,
    text: `
      Name: ${name}
      Mobile: ${mobile}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
    });
  }
}