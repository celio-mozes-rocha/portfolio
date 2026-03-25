import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  env: {
    BREVO_SMTP_USER: process.env.BREVO_SMTP_USER,
    BREVO_SMTP_PASS: process.env.BREVO_SMTP_PASS,
  },
};

export default nextConfig;
