import "./globals.css";


export const metadata = {
  title: "Docable - edit your documents",
  description: "Edit your documents with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-background text-white/80`}>
        {children}
      </body>
    </html>
  );
}
