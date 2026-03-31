# FlowAI Sports

Plataforma SaaS de inteligência esportiva por IA, 100% serverless, multilíngue, com autenticação, pagamentos e análise avançada. Deploy Cloudflare Pages + Workers.

## Tecnologias
- Next.js 15.5.2 (App Router)
- React
- TailwindCSS
- next-intl
- Supabase (DB/Auth)
- Stripe (Assinatura)
- Cloudflare Pages/Workers
- TheSportsDB, Balldontlie, OpenAI

## Estrutura
- app/[locale]/...
- app/api/...
- lib/...
- public/manifest.json, sw.js, icons/

## Como rodar
1. Copie `.env.example` para `.env.local` e preencha as variáveis.
2. `npm install`
3. `npm run dev`


## Deploy Cloudflare Pages/Workers

1. Crie um projeto no Cloudflare Pages e conecte este repositório.
2. Configure as variáveis de ambiente no painel do Pages:
	- NEXT_PUBLIC_SUPABASE_URL
	- NEXT_PUBLIC_SUPABASE_ANON_KEY
	- OPENAI_API_KEY
	- STRIPE_SECRET_KEY
	- STRIPE_PRICE_ID
	- STRIPE_WEBHOOK_SECRET
	- NEXT_PUBLIC_BASE_URL
3. Configure o build command:
	npm run build
4. Configure o output directory:
	.output/public
5. Ative "Functions" (Edge Runtime) no Cloudflare Pages.
6. Para Workers, use o wrangler.toml e rode:
	npx wrangler pages deploy .output/public --project-name=flowai-sports

## Observações
- Nunca recomenda apostas, apenas análises estatísticas.
- Multilíngue: pt-BR (padrão), en, es.
- PWA: instalável, mobile-first.
