// ATENÇÃO: diferente da versão de Magé, este arquivo NÃO reproduz dados oficiais.
// Duque de Caxias instituiu o Programa Tarifa Zero pela Lei Municipal nº 3.589/2026, mas a
// Prefeitura ainda não publicou linhas, itinerários, pontos de parada ou horários do programa.
// As linhas abaixo são FICTÍCIAS, criadas apenas para demonstrar o funcionamento deste protótipo:
//  - os pontos (Terminal Centro, Saracuruna, Parada Angélica, Imbariê, Xerém) são locais reais
//    do município, e o traçado no mapa segue vias reais (ver assets/js/data/geo/dc01-route.js);
//  - a linha, o sentido e os horários de saída, porém, são inventados para a demonstração e NÃO
//    correspondem a uma linha realmente operada em Duque de Caxias.
// Quando a Prefeitura/operadoras divulgarem dados reais, este arquivo deve ser substituído por
// eles, mantendo o mesmo formato (consumido por data/mock/mockTransportData.js e pela API HTTP
// equivalente em services/httpTransportProvider.js).
const DEMO_HOURS = { start: '05:00', end: '22:00', label: 'Diariamente, das 5h às 22h (horário fictício de demonstração)' };

const DEMO_NOTE = 'Linha, sentido e horários FICTÍCIOS, criados apenas para demonstrar este protótipo — não correspondem a uma linha real operada em Duque de Caxias. Os pontos e o traçado seguem locais e vias reais do município. Aguardando divulgação oficial de linhas, itinerários, pontos e horários pela Prefeitura/operadoras, conforme a Lei Municipal nº 3.589/2026.';

export const LINES = [
  {
    id: 'DC01',
    summary: { name: 'Terminal Centro x Xerém', variant: 'Demonstração', origin: 'Terminal Centro', destination: 'Xerém' },
    operatingHours: DEMO_HOURS,
    published: {
      title: 'DC01 · Terminal Centro → Xerém (linha fictícia de demonstração)',
      departure: 'Terminal Centro',
      arrival: 'Xerém',
      stopsLabel: 'Pontos de referência (demonstração)'
    },
    schedule: {
      title: 'DC01 · horário fictício de demonstração',
      pdf: null,
      directions: [
        { id: 'ida', label: 'Saída do Terminal Centro', departures: ['05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'] }
      ]
    },
    returnLineId: 'DC02',
    sourceNotes: [DEMO_NOTE]
  },
  {
    id: 'DC02',
    summary: { name: 'Xerém x Terminal Centro', variant: 'Demonstração', origin: 'Xerém', destination: 'Terminal Centro' },
    operatingHours: DEMO_HOURS,
    published: {
      title: 'DC02 · Xerém → Terminal Centro (linha fictícia de demonstração)',
      departure: 'Xerém',
      arrival: 'Terminal Centro',
      stopsLabel: 'Pontos de referência (demonstração)'
    },
    schedule: {
      title: 'DC02 · horário fictício de demonstração',
      pdf: null,
      directions: [
        { id: 'ida', label: 'Saída de Xerém', departures: ['05:30', '06:30', '07:30', '08:30', '09:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30', '16:30', '17:30', '18:30', '19:30', '20:30', '21:30'] }
      ]
    },
    returnLineId: 'DC01',
    sourceNotes: [DEMO_NOTE]
  },
  {
    id: 'DC03',
    summary: { name: 'Terminal Centro x Imbariê', variant: 'Demonstração', origin: 'Terminal Centro', destination: 'Imbariê' },
    operatingHours: DEMO_HOURS,
    published: {
      title: 'DC03 · Terminal Centro → Imbariê (linha fictícia de demonstração)',
      departure: 'Terminal Centro',
      arrival: 'Imbariê',
      stopsLabel: 'Pontos de referência (demonstração)'
    },
    schedule: {
      title: 'DC03 · horário fictício de demonstração',
      pdf: null,
      directions: [
        { id: 'ida', label: 'Saída do Terminal Centro', departures: ['05:15', '06:45', '08:15', '09:45', '11:15', '12:45', '14:15', '15:45', '17:15', '18:45', '20:15'] }
      ]
    },
    sourceNotes: [
      DEMO_NOTE,
      'Esta linha ilustra o caso em que os pontos e o itinerário estão no mapa, mas não há acompanhamento de ônibus em tempo real — o mesmo padrão usado para linhas sem quadro de horários compatível na versão de Magé.'
    ]
  }
];
