export default function KpiCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl">
      <p className="text-zinc-400">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}
