"use client";
import { useState } from "react";
import { signIn } from "../../../lib/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await signIn(email, password);
    if (error) setError(error.message);
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 18, marginTop: 4 }}
      autoComplete="on"
    >
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        autoComplete="email"
        style={{
          width: '100%',
          padding: '14px 16px',
          borderRadius: 14,
          background: '#23272f',
          color: '#f8fafc',
          border: '2px solid #7c3aed33',
          fontSize: 17,
          fontWeight: 500,
          outline: 'none',
          boxShadow: '0 2px 8px #7c3aed11',
          transition: 'border .18s',
        }}
        onFocus={e => (e.currentTarget.style.border = '2px solid #38bdf8')}
        onBlur={e => (e.currentTarget.style.border = '2px solid #7c3aed33')}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        autoComplete="current-password"
        style={{
          width: '100%',
          padding: '14px 16px',
          borderRadius: 14,
          background: '#23272f',
          color: '#f8fafc',
          border: '2px solid #7c3aed33',
          fontSize: 17,
          fontWeight: 500,
          outline: 'none',
          boxShadow: '0 2px 8px #7c3aed11',
          transition: 'border .18s',
        }}
        onFocus={e => (e.currentTarget.style.border = '2px solid #38bdf8')}
        onBlur={e => (e.currentTarget.style.border = '2px solid #7c3aed33')}
      />
      {error && (
        <div style={{ color: '#f87171', background: '#7c3aed11', borderRadius: 10, padding: '8px 0', textAlign: 'center', fontWeight: 600, fontSize: 15, marginTop: -8 }}>
          {error}
        </div>
      )}
      <button
        type="submit"
        style={{
          width: '100%',
          background: 'linear-gradient(90deg,#7c3aed,#38bdf8)',
          color: '#fff',
          border: 'none',
          borderRadius: 16,
          padding: '14px 0',
          fontWeight: 900,
          fontSize: 19,
          boxShadow: '0 2px 16px #7c3aed33',
          letterSpacing: 0.5,
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1,
          transition: 'all .18s cubic-bezier(.4,0,.2,1)',
        }}
        disabled={loading}
      >
        {loading ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span className="loader" style={{ width: 18, height: 18, border: '3px solid #fff', borderTop: '3px solid #38bdf8', borderRadius: '50%', display: 'inline-block', animation: 'spin 1s linear infinite' }} />
            Entrando...
          </span>
        ) : (
          'Entrar'
        )}
      </button>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2, fontSize: 15 }}>
        <a href="/pt-BR/register" style={{ color: '#38bdf8', fontWeight: 700, textDecoration: 'underline', opacity: 0.92 }}>Criar conta</a>
        <a href="#" style={{ color: '#7c3aed', fontWeight: 700, textDecoration: 'underline', opacity: 0.92 }}>Esqueci a senha</a>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
}
