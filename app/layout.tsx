import Header from "@/components/header";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "Asam Mohamed | Software Engineer",
  description: "Software Engineer with 2+ years of experience in backend development, cloud technologies, and microservices architecture.",
  keywords: "Software Engineer, Golang, Kotlin, Python, React, Microservices, Cloud, AWS, GCP, Docker, Kubernetes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.className} bg-slate-950 text-gray-50 text-opacity-90 relative overflow-x-hidden`}
      >
        {/* Animated gradient background */}
        <div className="fixed inset-0 -z-20 bg-slate-950"></div>
        
        {/* Gradient orbs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Main gradient mesh */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
          
          {/* Top left orb - animated */}
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-600/25 via-purple-600/15 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-morph"></div>
          
          {/* Top right orb - animated */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-600/20 via-blue-600/15 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 animate-morph" style={{ animationDelay: '-5s' }}></div>
          
          {/* Bottom center orb - animated */}
          <div className="absolute bottom-0 left-1/2 w-[700px] h-[700px] bg-gradient-to-t from-purple-600/20 via-pink-600/15 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-morph" style={{ animationDelay: '-10s' }}></div>
          
          {/* Floating particle orbs */}
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-3xl animate-float-3d"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-purple-500/15 rounded-full blur-3xl animate-float-3d" style={{ animationDelay: '-3s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-pink-500/10 rounded-full blur-3xl animate-float-3d" style={{ animationDelay: '-6s' }}></div>
          <div className="absolute top-2/3 left-1/3 w-[180px] h-[180px] bg-cyan-500/10 rounded-full blur-3xl animate-float-3d" style={{ animationDelay: '-9s' }}></div>
          
          {/* Moving gradient lines */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-scan-horizontal"></div>
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-scan-horizontal" style={{ animationDelay: '-4s' }}></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-scan-horizontal" style={{ animationDelay: '-8s' }}></div>
          </div>
          
          {/* Floating particles */}
          <div className="particles-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
        </div>
        
        {/* Noise texture overlay */}
        <div className="fixed inset-0 -z-5 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster 
              position="top-right"
              toastOptions={{
                style: {
                  background: '#1e293b',
                  color: '#f1f5f9',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                },
              }}
            />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
