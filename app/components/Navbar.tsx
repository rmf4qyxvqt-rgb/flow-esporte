"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar-premium flex justify-between items-center p-4">
      <Link href="/pt-BR" style={{ fontWeight: 900, fontSize: 28, letterSpacing: 1, color: "#7c3aed", textShadow: "0 2px 8px #7c3aed33" }}>
        <span style={{ fontFamily: 'Poppins, Inter, Arial, sans-serif' }}>FlowAI Sports</span>
      </Link>
      <div>
        <Link href="/pt-BR/football" className="mr-2">Jogos</Link>
        <Link href="/pt-BR/dashboard" className="mr-2">Dashboard</Link>
        <Link href="/pt-BR/ranking" className="mr-2">Ranking</Link>
        <Link href="/pt-BR/login">Entrar</Link>
      </div>
    </nav>
  );
}
