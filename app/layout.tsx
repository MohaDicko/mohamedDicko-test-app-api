import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
