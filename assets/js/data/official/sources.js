// Fontes públicas usadas neste protótipo. Consultadas em 17/09/2026.
// Diferente da versão de Magé, Duque de Caxias ainda não tem uma página oficial com linhas,
// itinerários, pontos e horários do Tarifa Zero: o programa foi instituído recentemente e o
// aplicativo previsto em lei ainda não foi lançado. Por isso as fontes abaixo são a base legal
// do programa, não um catálogo operacional — os dados de linhas exibidos no app são DEMONSTRAÇÃO.
export const SOURCES = {
  tarifaZeroLaw: {
    id: 'lei-3589-2026',
    title: 'Lei Municipal nº 3.589, de 10 de junho de 2026',
    url: null,
    publisher: 'Câmara Municipal de Duque de Caxias',
    note: 'Institui o Programa Tarifa Zero no Município de Duque de Caxias. Não há, até o momento, divulgação oficial de linhas, itinerários, pontos de parada ou horários do programa.'
  },
  appLaw: {
    id: 'lei-3152-2021',
    title: 'Lei Municipal nº 3.152, de 2021',
    url: null,
    publisher: 'Câmara Municipal de Duque de Caxias',
    note: 'Prevê a disponibilização de aplicativo gratuito (Android e iOS) para usuários do transporte público, com localização dos ônibus por GPS, itinerários, tempo estimado de espera e horários.'
  },
  openStreetMap: {
    id: 'openStreetMap',
    title: 'OpenStreetMap',
    url: 'https://www.openstreetmap.org/copyright',
    publisher: 'Colaboradores do OpenStreetMap',
    note: 'Base do mapa, divisão distrital e o traçado viário real usado no corredor ilustrativo de demonstração.'
  },
  osrm: {
    id: 'osrm',
    title: 'Project OSRM (Open Source Routing Machine)',
    url: 'https://project-osrm.org/',
    publisher: 'Serviço público de roteirização sobre dados do OpenStreetMap',
    note: 'Usado para calcular, sobre vias reais, o traçado ilustrativo de demonstração entre pontos conhecidos do município.'
  }
};
