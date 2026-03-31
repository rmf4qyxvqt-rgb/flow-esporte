export const runtime = "edge";

// Simulação de endpoint para cadastro de alertas (email ou push)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Aqui você pode integrar com serviço de email/push real
    // Exemplo: salvar no banco, enviar email, etc.
    // body: { email, type: "gol|inicio|final", matchId }
    return Response.json({ success: true, message: "Alerta cadastrado!" });
  } catch {
    return Response.json({ success: false, message: "Erro ao cadastrar alerta." });
  }
}
