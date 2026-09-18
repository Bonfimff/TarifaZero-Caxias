# Tarifa Zero · Duque de Caxias

Protótipo conceitual (**não oficial**) de uma plataforma de informações do **Programa Tarifa Zero** de Duque de Caxias/RJ, instituído pela Lei Municipal nº 3.589, de 10 de junho de 2026. Duque de Caxias também tem a Lei Municipal nº 3.152/2021, que prevê um aplicativo gratuito (Android/iOS) com localização dos ônibus por GPS, itinerários, tempo estimado de espera e horários. Este protótipo demonstra uma possível solução tecnológica para esse aplicativo.

Esta é uma cópia estrutural e funcional do protótipo **Amarelinho – Tarifa Zero de Magé**, adaptada para Duque de Caxias. As duas versões são projetos independentes: nenhuma altera a outra.

## Este protótipo não é oficial

- Não foi contratado, desenvolvido, homologado ou aprovado pela Prefeitura Municipal de Duque de Caxias.
- Não usa o logotipo oficial da Prefeitura.
- Não afirma que a Prefeitura aprovou ou apoia este sistema.

## Como rodar

Requer apenas Python 3 (não há build).

```bash
python serve.py
```

Abra http://localhost:5174 (porta diferente da versão de Magé, para rodar as duas ao mesmo tempo). O mapa usa tiles do OpenStreetMap, então é preciso internet. Não abra o `index.html` direto do disco: módulos JavaScript exigem um servidor HTTP.

## O que é real, aproximado e fictício

Diferente da versão de Magé, que reproduz a página oficial do "Amarelinho" daquela Prefeitura, **Duque de Caxias ainda não publicou linhas, itinerários, pontos de parada ou horários** do Tarifa Zero. Por isso:

| Tipo | Conteúdo | Onde está |
|---|---|---|
| **Real** | Base legal (leis municipais); locais do município (Terminal Centro, Saracuruna, Parada Angélica, Imbariê, Xerém) e a divisão em 4 distritos | `assets/js/data/official/sources.js`, `assets/js/data/geo/dc-districts.js` |
| **Aproximado** | Traçado viário real entre esses locais (OpenStreetMap + OSRM), um corredor **ilustrativo**, não uma linha oficial | `assets/js/data/geo/dc01-route.js` (gerado por `_fontes/geo/build_dc01.py`) |
| **Fictício** | As linhas DC01/DC02/DC03 em si: números, sentidos e horários de saída | `assets/js/data/official/lines.js` |
| **Simulado** | Posição dos ônibus, velocidade, atrasos, previsão dinâmica | `assets/js/data/mock/` |

Quando a Prefeitura/operadoras publicarem dados reais, substitua `assets/js/data/official/lines.js` (e, se necessário, a geometria em `data/geo/`) mantendo o mesmo formato. A interface não muda.

## Arquitetura

Mesma estrutura da versão de Magé (ver também o código-fonte, comentado):

```
index.html
assets/
  css/app.css                      estilos (mobile first; desktop ≥ 1024px)
  vendor/leaflet/                  Leaflet 1.9.4 (local)
  js/
    config.js                      provedor de dados, intervalo de GPS, demo, mapa
    main.js                        inicialização e roteamento
    data/
      official/lines.js            linhas de demonstração (FICTÍCIAS) + sources.js, banners.js
      geo/dc01-route.js            geometria real (OSRM), corredor ilustrativo
      geo/dc-districts.js          divisão distrital real (OpenStreetMap)
      mock/mockTransportData.js    SIMULAÇÃO (única camada que calcula posição/previsão)
    services/                      transportService.js (ponto único de acesso da UI), httpTransportProvider.js, liveFeed.js
    ui/
      map/mapController.js         Leaflet: rota, pontos, veículos, seguir ônibus
      views/                       home, lines, line, stop, vehicle, live, search, about
      components.js, icons.js, sheet.js, router.js
    lib/                           geo, time, text, emitter
```

A interface **não calcula** posição nem previsão: ela consome apenas os objetos devolvidos pelo provedor de dados, a mesma regra da versão de Magé.

## Preparado para o futuro

A estrutura já separa dados de interface, para permitir, sem reescrever telas:

- Substituir as linhas fictícias por linhas reais publicadas pela Prefeitura/operadoras.
- Trocar `dataProvider` para `'http'` em `config.js` e apontar para uma API real (mesmos formatos de `services/httpTransportProvider.js`).
- Uma futura área administrativa da Prefeitura (cadastro de linhas/pontos/veículos, recebimento de GPS, monitoramento, histórico de posições, ocorrências, indicadores) consumindo essa mesma API.

## Publicar

Caxias **não tem API própria**: usa a mesma API do Amarelinho de Magé (`app/server/api.js`, serviço `amarelinho-api`), no espaço separado `https://api-amarelinho.exksvol.com/api/v1/caxias`. Dados, simulação e auditoria de cada cidade são independentes (ver "Uma API, duas cidades" no README de `app/`). No servidor, a API lê os dados desta cidade em `/var/www/tarifa-zero-duque-de-caxias`.

```
node server/build.js             # monta publico/ sem comentários (para publicar)
bash server/publicar-site.sh     # publica publico/ no branch gh-pages (GitHub Pages)
bash server/deploy/deploy.sh     # envia os dados para /var/www/tarifa-zero-duque-de-caxias e reinicia a API compartilhada
npm run api                      # roda a API compartilhada localmente (http://127.0.0.1:5180/api/v1/caxias)
```

Antes do primeiro `deploy.sh` desta cidade, a versão atual da API de Magé (com o serviço atualizado) precisa estar no servidor. O script confere isso e para com uma mensagem se não estiver. Os eventos de uso ficam em `/var/lib/tarifa-zero-duque-de-caxias/eventos` e são lidos por `node server/auditoria.js`.

## Identidade visual

Inspirada nas peças de divulgação "Trajetos" do Tarifa Zero de Duque de Caxias (out/2025): azul-marinho de fundo com linhas finas diagonais, micro-ônibus azul-céu, setas curvas em laranja/amarelo/azul-céu, "↔" entre origem e destino e lista de pontos com trilho branco e bolinhas de contorno laranja. Os motivos (setas e linhas) são SVGs próprios definidos como variáveis no topo de `assets/css/app.css`; o selo "Tarifa zerø" do cabeçalho é desenhado em texto, sem usar logotipos oficiais.
