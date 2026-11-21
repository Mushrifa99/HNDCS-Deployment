
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fathima Mushrifa | Freelancer & Full Stack Web Developer",
  description:
    "Welcome to Fathima Mushrifa's portfolio. Explore web development services, technical skills, projects and contact information.",
  keywords: [
    "Fathima Mushrifa",
    "Freelancer",
    "Full Stack Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
  ],
  authors: [{ name: "Fathima Mushrifa" }],
  openGraph: {
    title: "Fathima Mushrifa | Full Stack Web Developer",
    description:
      "Creative freelancer and full stack web developer building modern digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
