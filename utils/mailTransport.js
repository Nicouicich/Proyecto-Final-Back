import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "nicouicich@gmail.com",
    pass: "n1col4sui38063621",
  },
});

export default transporter