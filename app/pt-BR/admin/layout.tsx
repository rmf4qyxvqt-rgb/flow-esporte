export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-zinc-800 p-6">
        <h1 className="text-xl font-bold mb-8">
          FlowAI Admin
        </h1>
        <nav className="space-y-4">
          <a href="/pt-BR/admin">Dashboard</a>
          <a href="/pt-BR/admin/users">Usuários</a>
          <a href="/pt-BR/admin/subscriptions">Assinaturas</a>
          <a href="/pt-BR/admin/analytics">Análises</a>
          <a href="/pt-BR/admin/settings">Configurações</a>
        </nav>
      </aside>
      {/* CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}