
function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-6 shadow flex flex-col items-center">
      <div className="text-sm text-zinc-400 mb-2">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">
        Visão Geral
      </h2>
      <div className="grid grid-cols-4 gap-6">
        <Card title="Usuários Totais" value="1,284" />
        <Card title="Premium Ativos" value="312" />
        <Card title="Receita Mensal" value="R$ 3.120" />
        <Card title="Análises Hoje" value="487" />
      </div>
    </div>
  );
}