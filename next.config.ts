import type { NextConfig } from "next";

// Instância CTESK do canônico tributos-web: servida no Portal CTESK
// (ctesk) via Multi-Zones, sob /tributos — o rewrite está no next.config.ts
// do portal-ctesk (endereço em src/config/portal.ts de lá).
const basePath = "/tributos";

const nextConfig: NextConfig = {
  basePath,
  // Exposto ao cliente p/ chamadas fetch às rotas de API (ex.: /api/perguntar).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // pdf.js referencia 'canvas' (dependência opcional só usada em Node) na leitura
  // de PDF no navegador — aponta para um stub vazio para não quebrar o build.
  turbopack: {
    resolveAlias: {
      canvas: "./src/empty-module.js",
    },
  },
};

export default nextConfig;
