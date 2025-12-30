import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import PlausibleProvider from "@/components/plausible-provider"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What Next Studio",
  description:
    "What Next Studio is your one-stop marketing solution! We specialize in SEO, PPC Ads, Social Media Marketing (SMM), Content Creation, Email Marketing, Advertising, and Tracking. Boost your brand's online presence, drive traffic, and maximize ROI with our expert strategies. Let's create what's next for your business",
  alternates: {
    types: {
      'application/rss+xml': 'https://whatnextstudio.com/feed.xml',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="alternate" 
          type="application/rss+xml" 
          title="What Next Studio Blog RSS Feed" 
          href="/feed.xml" 
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PlausibleProvider /> 
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}