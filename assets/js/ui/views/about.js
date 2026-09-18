import { html, raw } from '../../lib/text.js';
import { SOURCES } from '../../data/official/sources.js';
import { busFront } from '../icons.js';

export default {
  title: 'Sobre',

  mount(el, ctx) {
    ctx.map.showOverview();
    const link = (s, label = s.title) => (s.url ? html`<a href="${s.url}" target="_blank" rel="noopener">${label}</a>` : html`${label}`);
    const list = (items, cls = 'check-list') => html`<ul class="${cls}">${items.map((i) => html`<li>${i}</li>`)}</ul>`;

    el.innerHTML = html`
      <header class="view-head">
        <p class="ribbon">Protótipo conceitual · não oficial</p>
        <h1>Sobre o projeto</h1>
      </header>

      <section class="card prose">
        <p>Este protótipo apresenta uma proposta de plataforma digital para consulta e acompanhamento do transporte Tarifa Zero em Duque de Caxias.</p>
        <p>A ideia é demonstrar, de forma prática, como uma aplicação poderia reunir em um único ambiente informações como linhas, itinerários, pontos de parada, horários e, em uma futura integração, a localização dos veículos em operação.</p>
        <p>A proposta foi desenvolvida a partir da realidade territorial e operacional do município, utilizando referências públicas disponíveis sobre o sistema de transporte e a malha viária local. O objetivo é demonstrar a experiência de uso e a estrutura tecnológica de uma possível solução, sem pressupor qualquer integração atualmente existente com os sistemas municipais ou das operadoras.</p>
        <p>Entre as funcionalidades demonstradas estão:</p>
        ${raw(list(['Consulta das linhas disponíveis', 'Busca por origem e destino', 'Visualização de itinerários', 'Consulta de pontos de parada', 'Horários programados', 'Identificação das linhas em operação', 'Visualização dos veículos no mapa', 'Previsão de chegada a determinado ponto', 'Acompanhamento do deslocamento do ônibus', 'Informações sobre a próxima parada']))}
        <p><strong>Este protótipo não é oficial.</strong> Não foi contratado, desenvolvido, homologado ou aprovado pela Prefeitura Municipal de Duque de Caxias e não possui vínculo institucional com o município.</p>
        <p>A proposta utiliza identidade visual própria justamente para deixar clara essa condição.</p>
      </section>

      <section class="card prose">
        <h2 class="card-title">Dados e informações utilizados</h2>
        <p>Diferente de uma versão já publicada deste mesmo protótipo para o município de Magé/RJ (que reproduz a página oficial do "Amarelinho" daquela Prefeitura), <strong>Duque de Caxias ainda não publicou linhas, itinerários, pontos de parada ou horários</strong> do Programa Tarifa Zero. O programa foi instituído recentemente e o aplicativo previsto em lei ainda não foi lançado.</p>

        <h3 class="data-split__title"><span class="kind-dot kind-dot--public" aria-hidden="true"></span>Informações baseadas em fontes públicas</h3>
        <p>Foram usados apenas dois tipos de dado público, sem inventar linhas ou números operacionais:</p>
        ${raw(list(['Base legal do Programa Tarifa Zero (Lei Municipal nº 3.589/2026)', 'Locais reais do município — Terminal Centro, Saracuruna, Parada Angélica, Imbariê e Xerém — e o traçado real das vias entre eles (OpenStreetMap/OSRM)']))}

        <h3 class="data-split__title"><span class="kind-dot kind-dot--sim" aria-hidden="true"></span>Elementos fictícios e simulados para demonstração</h3>
        <p>Tudo o que envolve uma "linha" propriamente dita é fictício, criado apenas para demonstrar o protótipo:</p>
        ${raw(list(['Números e sentidos das linhas (DC01, DC02, DC03)', 'Horários de saída', 'Posição atual dos ônibus', 'Deslocamento dos veículos', 'Velocidade e eventuais atrasos', 'Previsão de chegada', 'Quantidade de ônibus em circulação', 'Status operacional do veículo', 'Próxima parada e tempo estimado até ela'], 'check-list check-list--sim'))}
        <p class="fine">Quando a Prefeitura e as operadoras divulgarem linhas, itinerários, pontos e horários reais, esses dados fictícios devem ser substituídos pelos oficiais — a estrutura do protótipo já foi organizada para isso (ver <code>assets/js/data/official/lines.js</code>).</p>
      </section>

      <section class="card prose about-alert">
        <h2 class="card-title">Importante</h2>
        <p><strong>As linhas, horários e veículos apresentados não são reais.</strong></p>
        <p>A movimentação exibida no mapa é uma simulação de acompanhamento, criada para demonstrar como poderia funcionar uma futura solução conectada a dados reais de operação e GPS, quando existirem.</p>
      </section>

      <section class="card prose">
        <h2 class="card-title">Simulação de acompanhamento</h2>
        <p>Durante a demonstração, é possível visualizar um ônibus se deslocando pelo mapa ao longo de um itinerário fictício.</p>
        <p>A simulação ilustra a experiência que poderia ser oferecida futuramente, caso existissem dados reais de localização dos veículos disponibilizados para integração — como prevê a Lei Municipal nº 3.152/2021.</p>
        <p>O protótipo pode apresentar, por exemplo:</p>
        <div class="demo-example" aria-label="Exemplo ilustrativo de ônibus em circulação">
          <p class="demo-example__kicker">Ônibus em circulação</p>
          <div class="demo-example__head">
            <span class="demo-example__bus">${raw(busFront())}</span>
            <div><strong>Tarifa Zero · Linha DC01 (fictícia)</strong><span>Terminal Centro → Xerém</span><em>Em trajeto</em></div>
          </div>
          <p class="demo-example__kicker demo-example__kicker--sim">Informações simuladas</p>
          <dl class="demo-example__grid">
            <div><dt>Próxima parada</dt><dd>Parada Angélica</dd></div>
            <div><dt>Distância</dt><dd>1,8 km</dd></div>
            <div><dt>Previsão</dt><dd>5 min</dd></div>
            <div><dt>Velocidade</dt><dd>32 km/h</dd></div>
            <div><dt>Última atualização</dt><dd>agora</dd></div>
          </dl>
        </div>
        <p class="fine">Esses dados são apenas ilustrativos nesta demonstração.</p>
      </section>

      <section class="card prose">
        <h2 class="card-title">Representação cartográfica</h2>
        <p>O mapa utilizado no protótipo tem finalidade exclusivamente demonstrativa.</p>
        <p>O corredor exibido (Terminal Centro, Saracuruna, Parada Angélica, Imbariê e Xerém) segue vias reais, calculadas sobre dados do OpenStreetMap com o serviço público OSRM — mas é um trajeto <strong>ilustrativo</strong>, escolhido para mostrar o funcionamento do app, e não uma linha real ou georreferenciada oficialmente.</p>
        <p>A divisão distrital exibida na tela inicial (1º Duque de Caxias/Sede, 2º Campos Elíseos, 3º Imbariê e 4º Xerém) reproduz limites administrativos públicos do OpenStreetMap, simplificados para desenho.</p>
      </section>

      <section class="card prose">
        <h2 class="card-title">Como funcionaria em uma futura versão integrada</h2>
        <p>A proposta demonstrada neste protótipo foi estruturada de forma que, futuramente, dados reais de operação e de linhas possam substituir os dados fictícios/simulados, caso a Prefeitura e as operadoras disponibilizem essas informações.</p>
        <p>Nesse cenário, a plataforma poderia apresentar:</p>
        <ul class="feature-list">
          <li><strong>Localização do veículo</strong><span>A posição atual do ônibus no mapa, via GPS.</span></li>
          <li><strong>Próxima parada</strong><span>Identificação da próxima parada prevista no itinerário.</span></li>
          <li><strong>Previsão de chegada</strong><span>Estimativa de quanto tempo falta para o veículo chegar ao ponto selecionado.</span></li>
          <li><strong>Atualização</strong><span>Indicação do momento da última informação recebida.</span></li>
          <li><strong>Situação da viagem</strong><span>Por exemplo: em circulação; próximo da parada; parado; fora de operação; última localização conhecida.</span></li>
        </ul>
        <p class="fine">A arquitetura do protótipo já separa a interface da fonte de dados (ver <code>services/transportService.js</code> e <code>services/httpTransportProvider.js</code>), justamente para permitir essa futura integração sem reescrever as telas. Isso também prepara o terreno para uma futura área administrativa da Prefeitura, com cadastro de linhas, pontos e veículos, recebimento de GPS, monitoramento, histórico de posições, ocorrências e indicadores.</p>
      </section>

      <section class="card prose" id="fontes">
        <h2 class="card-title">Fontes das informações</h2>
        <ul class="sources">
          <li><span>${SOURCES.tarifaZeroLaw.title}</span><span class="muted">${SOURCES.tarifaZeroLaw.publisher}</span><small>${SOURCES.tarifaZeroLaw.note}</small></li>
          <li><span>${SOURCES.appLaw.title}</span><span class="muted">${SOURCES.appLaw.publisher}</span><small>${SOURCES.appLaw.note}</small></li>
          <li>${raw(link(SOURCES.openStreetMap))}<small>${SOURCES.openStreetMap.note}</small></li>
          <li>${raw(link(SOURCES.osrm))}<small>${SOURCES.osrm.note}</small></li>
        </ul>
      </section>

      <section class="card prose">
        <h2 class="card-title">Natureza das informações</h2>
        <p>Para facilitar a compreensão, o protótipo diferencia visualmente:</p>
        <ul class="kind-legend">
          <li><span class="kind-dot kind-dot--public" aria-hidden="true"></span><div><strong>Informação baseada em fonte pública</strong><span>Base legal do programa ou local/via real do município.</span></div></li>
          <li><span class="kind-dot kind-dot--sim" aria-hidden="true"></span><div><strong>Informação fictícia/simulada</strong><span>Linha, horário ou posição criados exclusivamente para demonstrar uma funcionalidade que poderá existir futuramente com dados reais.</span></div></li>
          <li><span class="kind-dot kind-dot--real" aria-hidden="true"></span><div><strong>Informação operacional real</strong><span>Não utilizada neste protótipo.</span></div></li>
        </ul>
        <p class="fine">A disponibilização de linhas reais, localização real dos veículos, previsão de chegada em tempo real e demais informações dinâmicas depende da divulgação de dados operacionais pela Prefeitura/operadoras e de eventual integração autorizada com os sistemas responsáveis pelo acompanhamento da frota.</p>
      </section>

      <section class="card prose">
        <h2 class="card-title">Data da consulta</h2>
        <p>Protótipo montado em: <strong>18 de setembro de 2026</strong>, com base na Lei Municipal nº 3.589/2026 e na Lei Municipal nº 3.152/2021.</p>
        <p>Caso a Prefeitura de Duque de Caxias publique linhas, itinerários, pontos ou horários oficiais do Tarifa Zero após essa data, este protótipo deve ser atualizado para refletir essas informações.</p>
      </section>

      <section class="card prose about-alert">
        <h2 class="card-title">Aviso importante</h2>
        <p>Este é um protótipo conceitual, desenvolvido para demonstrar, à Prefeitura de Duque de Caxias, uma possível solução tecnológica para o aplicativo previsto na Lei Municipal nº 3.152/2021.</p>
        <p>Não possui vínculo institucional, representação ou autorização oficial da Prefeitura Municipal de Duque de Caxias. A Prefeitura não contratou, desenvolveu, homologou ou aprovou este sistema.</p>
        <p>As linhas, horários, localização, velocidade, previsão de chegada, quantidade de veículos e demais dados dinâmicos exibidos são fictícios/simulados e não representam a operação real de nenhuma frota.</p>
      </section>

      <section class="card prose">
        <h2 class="card-title">Dados de uso do protótipo</h2>
        <p>A auditoria de uso (telas, recursos e ações) descrita no código deste protótipo está desativada nesta versão, por ainda não haver uma API própria publicada para Duque de Caxias (ver <code>assets/js/config.js</code>). Caso seja ativada no futuro, funcionará como descrito a seguir.</p>
        <p><strong>Não são coletados dados pessoais.</strong> Não há cadastro, não se pede nome, e-mail ou telefone, não se usa a localização real do aparelho e não se guarda o endereço IP. A identificação seria um número aleatório gerado no próprio navegador, sem ligação com a pessoa.</p>
      </section>

      <section class="card prose">
        <h2 class="card-title">Desenvolvimento</h2>
        <p>Protótipo concebido e desenvolvido pela <strong>Exksvol</strong>.</p>
        <a class="dev-credit" href="https://www.exksvol.com" target="_blank" rel="noopener" aria-label="Exksvol, desenvolvedora do protótipo (abre em nova aba)">
        <span class="dev-credit__label">Desenvolvido por</span>
        <img src="assets/brand/exksvol.png" alt="Exksvol Systems" width="790" height="160" />
      </a>
      </section>
    `;
  }
};
