
"use client";
import React, { useEffect, useState } from "react";

const activityMessages = [
  "Novo usuário entrou",
  "Análise gerada agora",
  "Usuário Premium ativo"
];

export default function SocialProof() {
  const [liveUsers, setLiveUsers] = useState(0);
  const [activity, setActivity] = useState(activityMessages[0]);
  const [statCount, setStatCount] = useState(12000);
  const [uptime, setUptime] = useState(98.2);

  useEffect(() => {
    // Live users: random entre 1800 e 2400
    const updateUsers = () => setLiveUsers(Math.floor(1800 + Math.random() * 600));
    updateUsers();
    const interval = setInterval(updateUsers, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Rotaciona mensagens de atividade
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % activityMessages.length;
      setActivity(activityMessages[idx]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-8 flex flex-col gap-6 items-center">
      <div className="text-lg font-bold">
        🔥 {liveUsers} analistas ativos agora
      </div>
      <div className="bg-black bg-opacity-40 px-4 py-2 rounded-xl text-sm">
        {activity}
      </div>
      <div className="flex gap-8 mt-4">
        <div className="text-center">
          <div className="text-2xl font-bold">+{statCount.toLocaleString("pt-BR")}</div>
          <div className="text-xs">análises geradas</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{uptime}%</div>
          <div className="text-xs">uptime</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">✔</div>
          <div className="text-xs">atualizações automáticas</div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <span className="bg-primary text-xs px-2 py-1 rounded-full">✔ Edge AI Analysis</span>
        <span className="bg-primary text-xs px-2 py-1 rounded-full">✔ Statistical Intelligence</span>
        <span className="bg-primary text-xs px-2 py-1 rounded-full">✔ Daily Automated Updates</span>
      </div>
    </section>
  );
}
