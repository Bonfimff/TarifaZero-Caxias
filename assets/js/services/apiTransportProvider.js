// Provedor que consome a API compartilhada com Magé (app/server/api.js) em api-amarelinho.exksvol.com/api/v1/caxias.
// O relógio da simulação continua no aparelho (play/pausa/velocidade são individuais);
// cada consulta dinâmica envia `at` com o horário simulado atual.
// Se a API ficar indisponível, cai para os dados locais, com o mesmo formato.
import { createMockTransportProvider } from '../data/mock/mockTransportData.js';

export function createApiTransportProvider({ baseUrl, demo, speed, timeoutMs = 6000 }) {
  const local = createMockTransportProvider({ demo, speed });
  const clock = local.clock;
  const at = () => Math.floor(clock.now);

  const get = async (path, params) => {
    const qs = params ? `?${new URLSearchParams(Object.entries(params).filter(([, v]) => v != null && v !== ''))}` : '';
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetch(`${baseUrl}${path}${qs}`, { headers: { Accept: 'application/json' }, signal: ctrl.signal });
      // 404 também cai para os dados locais: pode ser uma API sem o espaço desta cidade (versão
      // antiga no servidor). Os dados locais respondem a mesma pergunta; se o item não existir
      // mesmo, eles devolvem null do mesmo jeito.
      if (!res.ok) throw new Error(`API ${res.status} em ${path}`);
      return await res.json();
    } finally {
      clearTimeout(t);
    }
  };

  const withFallback = (remote, fallback) => async (...args) => {
    try { return await remote(...args); } catch (err) {
      console.warn('API indisponível, usando dados locais:', err.message);
      return fallback(...args);
    }
  };
  const enc = encodeURIComponent;

  return {
    kind: 'api',
    capabilities: { simulation: true },
    clock,
    get demo() { return local.demo; },
    now: () => clock.now,
    getLines: withFallback(() => get('/lines'), () => local.getLines()),
    getLine: withFallback((id) => get(`/lines/${enc(id)}`), (id) => local.getLine(id)),
    getShape: withFallback((l, d) => get(`/lines/${enc(l)}/shape`, { directionId: d }), (l, d) => local.getShape(l, d)),
    getStops: withFallback((l, d) => get('/stops', { lineId: l, directionId: d }), (l, d) => local.getStops(l, d)),
    getVehicles: withFallback(({ lineId } = {}) => get('/vehicles', { lineId, at: at() }), (o) => local.getVehicles(o)),
    getVehicle: withFallback((id) => get(`/vehicle/${enc(id)}`, { at: at() }), (id) => local.getVehicle(id)),
    getArrivals: withFallback((o) => get('/arrivals', { lineId: o.lineId, directionId: o.directionId, stopId: o.stopId, limit: o.limit, at: at() }), (o) => local.getArrivals(o))
  };
}
