import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { Gamepad2, Trophy, Heart } from 'lucide-react';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Free Online Games - Play Instantly | AxLudi',
  description: 'Play the best free online games instantly. No downloads, no login. Enjoy puzzle games, arcade classics, and more on any device.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                <Gamepad2 size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                AxLudi
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <Gamepad2 size={16} /> All Games
              </Link>
              <span className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5">
                <Trophy size={16} /> Popular
              </span>
              <span className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5">
                <Heart size={16} /> Favorites
              </span>
            </nav>

            <div className="flex items-center gap-2">
               {/* Placeholder for future auth/settings */}
               <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
                  Play Random
               </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 stretch mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t bg-white">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} AxLudi. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-foreground">Privacy Policy</a>
                <a href="#" className="hover:text-foreground">Terms of Service</a>
                <a href="#" className="hover:text-foreground">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
