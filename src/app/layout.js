import "./globals.css";
import QueryProvider from "@/providers/query-provider";

export const metadata = {
  title: "WorkConnect",
  description: "Job platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
