"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "../../../lib/auth";

export default function Premium() {
  const router = useRouter();
  useEffect(() => {
    getSession().then(({ data }) => {
      // Exemplo: plano do usuário pode ser obtido do token ou Supabase
      const plan = data.session?.user?.plan || "free";
      if (plan !== "premium") {
        router.replace("/pt-BR/premium");
      }
    });
  }, [router]);
  return (
    <main>
      <h1>Assinatura Premium</h1>
      {/* Detalhes do plano, botão de upgrade */}
    </main>
  );
}