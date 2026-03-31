
"use client";
import "../globals.css";
import Navbar from "./components/Navbar";
import RegisterSW from "./components/RegisterSW";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#5B21B6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="description" content="Análises de futebol com IA, estatísticas e tendências em tempo real. FlowAI Sports." />
        <meta property="og:title" content="FlowAI Sports" />
        <meta property="og:description" content="Análises de futebol com IA, estatísticas e tendências em tempo real." />
        <meta property="og:image" content="/icons/icon-512x512.png" />
        <meta property="og:url" content="https://flowai-sports.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <Navbar />
        <RegisterSW />
        <button
          style={{ position: "fixed", top: 16, right: 16, zIndex: 1000 }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "🌙" : "☀️"} Mudar tema
        </button>
        {children}
      </body>
    </html>
  );
}
