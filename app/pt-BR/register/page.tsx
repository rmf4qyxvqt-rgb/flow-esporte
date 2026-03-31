import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #7c3aed 0%, #38bdf8 100%)',
      padding: 0,
      position: 'relative',
    }}>
      <section style={{
        background: '#18181b',
        borderRadius: 28,
        boxShadow: '0 8px 40px #7c3aed33, 0 0 0 4px #38bdf822',
        padding: '48px 32px 36px 32px',
        minWidth: 340,
        maxWidth: 380,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        animation: 'fadeInUp 1.1s cubic-bezier(.4,0,.2,1)'
      }}>
        <span style={{
          fontSize: 54,
          color: '#7c3aed',
          marginBottom: 8,
          filter: 'drop-shadow(0 2px 12px #38bdf888)'
        }}>📝</span>
        <h1 style={{
          fontSize: 32,
          fontWeight: 900,
          color: '#fff',
          marginBottom: 6,
          letterSpacing: 0.5,
          textAlign: 'center',
          textShadow: '0 2px 8px #38bdf844'
        }}>
          Criar Conta
        </h1>
        <div style={{
          color: '#cbd5e1',
          fontSize: 16,
          marginBottom: 22,
          textAlign: 'center',
          fontWeight: 500
        }}>
          Junte-se ao FlowAI Sports<br />e tenha acesso ao melhor do futebol premium.
        </div>
        <RegisterForm />
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