import "./globals.css";

export const metadata = {
  title: "ToDo DevOps",
  description: "Next.js ToDo application for a DevOps activity"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
