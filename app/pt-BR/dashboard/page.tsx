
"use client";
import React, { useEffect, useState } from "react";
import { getSession } from "../../../lib/auth";

export default function Dashboard() {
  const [role, setRole] = useState(null);
  useEffect(() => {
    getSession().then(({ data }) => {
      // Exemplo: role do usuário pode ser obtido do token ou Supabase
      setRole(data.session?.user?.role || "user");
    });
  }, []);
  if (role === "admin") {
    return (
      <main style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #7c3aed 0%, #38bdf8 100%)',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <section style={{
          background: '#18181b',
          borderRadius: 28,
          boxShadow: '0 8px 40px #7c3aed33, 0 0 0 4px #38bdf822',
          padding: '48px 32px 36px 32px',
          minWidth: 340,
          maxWidth: 480,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'fadeInUp 1.1s cubic-bezier(.4,0,.2,1)'
        }}>
          <span style={{ fontSize: 44, color: '#7c3aed', marginBottom: 8 }}>👑</span>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 12, letterSpacing: 0.5, textAlign: 'center' }}>
            Painel do Administrador
          </h1>
          <div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
            <div className="card" style={{ background: '#23272f', borderRadius: 14, padding: 18, color: '#fff', minWidth: 110 }}>
              <div style={{ fontSize: 15, opacity: 0.7 }}>Usuários</div>
              <div style={{ fontSize: 22, fontWeight: 800 }}>--</div>
            </div>
            <div className="card" style={{ background: '#23272f', borderRadius: 14, padding: 18, color: '#fff', minWidth: 110 }}>
              <div style={{ fontSize: 15, opacity: 0.7 }}>Premium</div>
              <div style={{ fontSize: 22, fontWeight: 800 }}>--</div>
            </div>
            <div className="card" style={{ background: '#23272f', borderRadius: 14, padding: 18, color: '#fff', minWidth: 110 }}>
              <div style={{ fontSize: 15, opacity: 0.7 }}>Receita</div>
              <div style={{ fontSize: 22, fontWeight: 800 }}>--</div>
            </div>
          </div>
          <div style={{ color: '#cbd5e1', fontSize: 16, marginBottom: 12, textAlign: 'center', fontWeight: 500 }}>
            Gestão de usuários, planos e relatórios.
          </div>
          <button style={{
            background: 'linear-gradient(90deg,#7c3aed,#38bdf8)',
            color: '#fff',
            border: 'none',
            borderRadius: 16,
            padding: '14px 0',
            fontWeight: 900,
            fontSize: 17,
            width: '100%',
            marginTop: 10,
            boxShadow: '0 2px 16px #7c3aed33',
            letterSpacing: 0.5,
            cursor: 'pointer',
            transition: 'all .18s cubic-bezier(.4,0,.2,1)',
          }}>Ver Relatórios</button>
          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(40px); }
              to { opacity: 1; transform: none; }
            }
          `}</style>
        </section>
      </main>
    );
  }
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(120deg, #7c3aed 0%, #38bdf8 100%)',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <section style={{
        background: '#18181b',
        borderRadius: 28,
        boxShadow: '0 8px 40px #7c3aed33, 0 0 0 4px #38bdf822',
        padding: '48px 32px 36px 32px',
        minWidth: 340,
        maxWidth: 480,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        animation: 'fadeInUp 1.1s cubic-bezier(.4,0,.2,1)'
      }}>
        <span style={{ fontSize: 44, color: '#38bdf8', marginBottom: 8 }}>⚽</span>
        <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 12, letterSpacing: 0.5, textAlign: 'center' }}>
          Painel do Usuário
        </h1>
        <div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
          <div className="card" style={{ background: '#23272f', borderRadius: 14, padding: 18, color: '#fff', minWidth: 110 }}>
            <div style={{ fontSize: 15, opacity: 0.7 }}>Assinatura</div>
            <div style={{ fontSize: 22, fontWeight: 800 }}>Premium</div>
          </div>
          <div className="card" style={{ background: '#23272f', borderRadius: 14, padding: 18, color: '#fff', minWidth: 110 }}>
            <div style={{ fontSize: 15, opacity: 0.7 }}>Jogos de Hoje</div>
            <div style={{ fontSize: 22, fontWeight: 800 }}>--</div>
          </div>
        </div>
        <div style={{ color: '#cbd5e1', fontSize: 16, marginBottom: 12, textAlign: 'center', fontWeight: 500 }}>
          Veja jogos, análises e status da sua assinatura premium.
        </div>
        <button style={{
          background: 'linear-gradient(90deg,#7c3aed,#38bdf8)',
          color: '#fff',
          border: 'none',
          borderRadius: 16,
          padding: '14px 0',
          fontWeight: 900,
          fontSize: 17,
          width: '100%',
          marginTop: 10,
          boxShadow: '0 2px 16px #7c3aed33',
          letterSpacing: 0.5,
          cursor: 'pointer',
          transition: 'all .18s cubic-bezier(.4,0,.2,1)',
        }}>Upgrade Premium</button>
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: none; }
          }
        `}</style>
      </section>
    </main>
  );
}