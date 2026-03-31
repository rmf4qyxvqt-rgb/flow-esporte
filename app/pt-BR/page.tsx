
export default function Home() {
  return (
    <main>
      <section style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 420, marginBottom: 48,
        background: 'linear-gradient(120deg, #7c3aed 0%, #38bdf8 100%)',
        borderRadius: 32,
        boxShadow: '0 12px 48px #7c3aed44, 0 0 0 8px #18181b22',
        position: 'relative',
        overflow: 'hidden',
        animation: 'heroFadeIn 1.2s cubic-bezier(.4,0,.2,1)'
      }}>
        {/* Partículas animadas */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0
        }}>
          {[...Array(18)].map((_, i) => (
            <span key={i} style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 10 + Math.random() * 16,
              height: 10 + Math.random() * 16,
              borderRadius: '50%',
              background: i % 2 === 0 ? '#fff4' : '#38bdf8aa',
              filter: 'blur(1.5px)',
              opacity: 0.7,
              animation: `floatParticle 4.${i % 3 + 1}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`
            }} />
          ))}
        </div>
        <span style={{
          fontSize: 90,
          color: '#fff',
          filter: 'drop-shadow(0 4px 24px #0008)',
          marginBottom: 8,
          marginTop: 32,
          animation: 'bounce 2.2s infinite cubic-bezier(.4,0,.2,1)',
          zIndex: 1
        }}>⚽</span>
        <h1 style={{ fontSize: 48, fontWeight: 900, color: '#fff', textShadow: '0 2px 16px #18181b99', marginBottom: 10, textAlign: 'center', letterSpacing: 1, zIndex: 1 }}>
          FlowAI Sports
        </h1>
        <div style={{ fontSize: 20, color: '#f8fafc', marginBottom: 10, fontWeight: 700, letterSpacing: 0.5, textShadow: '0 2px 8px #0006', zIndex: 1 }}>
          <span style={{ background: 'linear-gradient(90deg,#fff,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 900 }}>Sua inteligência esportiva premium</span>
        </div>
        <p style={{ fontSize: 24, color: '#f8fafc', maxWidth: 540, textAlign: 'center', marginBottom: 32, textShadow: '0 2px 8px #0006', zIndex: 1 }}>
          Análises de futebol com IA, estatísticas avançadas e tendências em tempo real.<br />
          Plataforma premium para apaixonados por esportes e inteligência de dados.
        </p>
        <a
          href="/pt-BR/football"
          style={{
            fontSize: 22,
            marginTop: 8,
            background: '#18181b',
            color: '#7c3aed',
            border: '2px solid #fff',
            borderRadius: 18,
            padding: '16px 38px',
            fontWeight: 900,
            boxShadow: '0 2px 16px #0006',
            textShadow: 'none',
            transition: 'all .22s cubic-bezier(.4,0,.2,1)',
            zIndex: 1,
            cursor: 'pointer',
          }}
          className="hero-btn-premium"
        >
          Ver Jogos de Hoje
        </a>
        <style>{`
          @keyframes heroFadeIn {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: none; }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-18px); }
          }
          @keyframes floatParticle {
            0% { transform: translateY(0) scale(1); opacity: 0.7; }
            100% { transform: translateY(-32px) scale(1.2); opacity: 1; }
          }
          .hero-btn-premium:hover {
            background: #38bdf8 !important;
            color: #fff !important;
            border-color: #7c3aed !important;
          }
        `}</style>
      </section>

      <section style={{ display: 'flex', justifyContent: 'center', gap: 32, margin: '32px 0' }}>
        <div className="card" style={{ minWidth: 180, textAlign: 'center' }}>
          <span style={{ fontSize: 36, color: '#38bdf8' }}>⚽</span>
          <h3>Futebol</h3>
          <p>Jogos, estatísticas e análises de todas as ligas do mundo.</p>
        </div>
        <div className="card" style={{ minWidth: 180, textAlign: 'center' }}>
          <span style={{ fontSize: 36, color: '#a78bfa' }}>📊</span>
          <h3>IA & Dados</h3>
          <p>Comparativos, gráficos e insights automáticos para decisões inteligentes.</p>
        </div>
        <div className="card" style={{ minWidth: 180, textAlign: 'center' }}>
          <span style={{ fontSize: 36, color: '#fbbf24' }}>⭐</span>
          <h3>Premium</h3>
          <p>Área exclusiva com relatórios, tendências e suporte prioritário.</p>
        </div>
      </section>

      <section style={{ margin: '40px 0', textAlign: 'center' }}>
        <h2 style={{ color: '#38bdf8', fontWeight: 800 }}>Como funciona?</h2>
        <ol style={{ display: 'inline-block', textAlign: 'left', color: '#f8fafc', fontSize: 18, lineHeight: 1.7 }}>
          <li>1. Escolha o jogo ou campeonato</li>
          <li>2. Veja estatísticas e análises de IA</li>
          <li>3. Receba alertas e tendências exclusivas</li>
          <li>4. Aproveite o melhor do esporte com inteligência</li>
        </ol>
      </section>

      <section style={{ margin: '40px 0', textAlign: 'center' }}>
        <h2 style={{ color: '#a78bfa', fontWeight: 800 }}>Benefícios Premium</h2>
        <ul style={{ display: 'inline-block', textAlign: 'left', color: '#f8fafc', fontSize: 18, lineHeight: 1.7 }}>
          <li>✔ Análises exclusivas de IA</li>
          <li>✔ Relatórios detalhados por time e rodada</li>
          <li>✔ Tendências de gols, cartões, escanteios e mais</li>
          <li>✔ Previsões de resultados com inteligência estatística</li>
          <li>✔ Suporte prioritário</li>
        </ul>
        <a href="/premium.md" style={{ fontSize: 18, marginTop: 18 }}>Conheça a área premium</a>
      </section>

      <footer style={{ marginTop: 48, textAlign: 'center', color: '#7c3aed', fontWeight: 700, fontSize: 18 }}>
        FlowAI Sports © {new Date().getFullYear()} — Todos os direitos reservados
      </footer>
    </main>
  );
}