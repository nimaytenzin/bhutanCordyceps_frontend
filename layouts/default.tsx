import { Head } from "./head";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

//light green background style       style={{ background: "#f8fbf5" }}

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`relative flex flex-col h-screen `}>
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
