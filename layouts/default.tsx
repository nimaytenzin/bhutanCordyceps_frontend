import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";

 


export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`relative flex flex-col h-screen `} style={{background:"#f8fbf5"}}>
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16" >
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
         <p className="text-primary"> 
            © Bhutan Wild Cordyceps

         </p>
      </footer>
    </div>
  );
}
