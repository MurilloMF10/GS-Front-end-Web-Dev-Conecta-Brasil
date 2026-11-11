# acesso página admin

> Email de acesso: admin@conectabrasil.com.br  - Senha: Conecta@2026
> Login: VITE_ADMIN_EMAIL=admin@conectabrasil.com.br - VITE_ADMIN_SENHA=Conecta@2026

# Conecta Brasil

Aplicação web acadêmica que reúne informações de mobilidade urbana para ajudar passageiros a planejar seus deslocamentos com mais previsibilidade. O protótipo permite consultar linhas e posições de ônibus da cidade de São Paulo, acompanhar avisos operacionais e administrar esses comunicados em uma área restrita.

> Projeto desenvolvido para a Global Solution — CitizenTech, integrando as disciplinas de Front-end Design e Web Development.

## Ficha da CitizenTech

| Item | Descrição |
| --- | --- |
| **Nome da CitizenTech** | Conecta Brasil |
| **Cidade e bairro** | São Paulo — abrangência municipal, sem limitação a um bairro específico |
| **Cidadão beneficiado** | Passageiros do transporte coletivo, especialmente pessoas que precisam planejar sua saída e reduzir incertezas durante o deslocamento |
| **Problema, em uma frase** | A falta de informações reunidas e fáceis de entender dificulta o planejamento de quem depende diariamente do transporte público |
| **Como funciona** | A plataforma consulta dados de linhas e posições pela API Olho Vivo, apresenta avisos operacionais e demonstra como informações de lotação poderiam apoiar a decisão do passageiro antes do embarque |
| **O que cada parte faz** | React e Vite compõem a interface; a API Olho Vivo fornece dados dos ônibus; o MockAPI armazena avisos; e a Vercel hospeda a aplicação e protege o token da integração por uma função serverless |
| **Link do repositório** | [GitHub — Conecta Brasil](https://github.com/MurilloMF10/GS-Front-end-Web-Dev-Conecta-Brasil) |
| **Link do projeto publicado** | https://gs-conecta-brasil.vercel.app |
| **ODS conectados** | ODS 9, ODS 10 e ODS 11 |

## Problema e proposta

Quem utiliza ônibus enfrenta mudanças de operação, atrasos e variações de demanda sem encontrar todas as informações em um único lugar. Essa incerteza pode aumentar o tempo de espera e tornar o deslocamento mais difícil, principalmente para passageiros com rotina rígida ou necessidades de acessibilidade.

O Conecta Brasil propõe uma experiência centralizada, responsiva e acessível para:

- pesquisar uma linha pelo número ou pelo nome de seus terminais;
- visualizar no mapa os veículos encontrados e a última atualização informada;
- consultar avisos ativos sobre linhas e operação;
- administrar avisos por meio de uma área protegida;
- apresentar a proposta de monitoramento de lotação por visão computacional.

O reconhecimento de pessoas por câmera e a integração da estimativa de lotação não fazem parte da versão funcional entregue. Essa parte permanece como evolução planejada do projeto e representa a entrega da disciplina de Lógica de programação com Python. O escopo atual prioriza uma aplicação web consistente, a integração com dados reais da API Olho Vivo e o gerenciamento completo de avisos.

## Funcionalidades

- landing page com apresentação do problema, solução, benefícios, privacidade e ODS;
- consulta de linhas da SPTrans;
- exibição de ônibus em mapa interativo com a biblioteca Leaflet;
- identificação de veículos acessíveis e horário da última atualização;
- listagem pública de avisos ativos;
- autenticação demonstrativa para acesso à área administrativa;
- criação, consulta, edição e exclusão de avisos pelo MockAPI;
- páginas institucionais de funcionamento, perguntas frequentes e equipe;
- tratamento de carregamento, ausência de resultados, falhas de integração e rota não encontrada;
- interface responsiva para celulares, tablets e computadores.

## Páginas e rotas

| Rota | Página | Acesso |
| --- | --- | --- |
| `/` | Página inicial | Público |
| `/onibus` | Acompanhar ônibus | Público |
| `/avisos` | Avisos operacionais | Público |
| `/como-funciona` | Como funciona | Público |
| `/faq` | Perguntas frequentes | Público |
| `/equipe` | Equipe | Público |
| `/login` | Entrada administrativa | Público |
| `/painel` | Gerenciamento de avisos | Privado |

## Tecnologias utilizadas

- **React 19** — construção da interface por componentes;
- **Vite 8** — ambiente de desenvolvimento e geração do build;
- **React Router 8** — navegação e proteção de rotas;
- **Tailwind CSS 4** — estilização e responsividade;
- **Leaflet e React Leaflet** — visualização dos veículos em mapa;
- **MockAPI** — persistência dos avisos e operações de CRUD;
- **API Olho Vivo da SPTrans** — consulta de linhas e posições dos ônibus;
- **Vercel Functions** — intermediação segura das consultas à API Olho Vivo em produção;
- **ESLint** — análise estática e padronização do código;
- **Git e GitHub** — versionamento e colaboração.

## Arquitetura do projeto

```text
.
├── api/                    # Função serverless utilizada pela Vercel
├── src/
│   ├── assets/             # Imagens, fontes e licenças visuais
│   ├── components/         # Componentes reutilizáveis por domínio
│   ├── contextos/          # Contexto de autenticação
│   ├── hooks/              # Hooks de avisos, autenticação e ônibus
│   ├── layouts/            # Estrutura visual compartilhada
│   ├── pages/              # Páginas associadas às rotas
│   ├── provedores/         # Provedor global de autenticação
│   ├── routes/             # Definição das rotas públicas e privadas
│   ├── servicos/           # Comunicação com APIs externas
│   ├── styles/             # Estilos globais e tema visual
│   └── utilitarios/        # Formatação e dados auxiliares
├── .env.example            # Modelo das variáveis de ambiente
├── vercel.json             # Configuração de rotas para publicação
└── vite.config.js          # Configuração do Vite e proxy local
```

A aplicação separa a apresentação, o estado e o acesso aos dados. As páginas organizam a experiência; os componentes cuidam da interface; os hooks concentram estado e regras de interação; e os serviços encapsulam a comunicação com as APIs.

## Como executar localmente

### Pré-requisitos

- Node.js 20 ou superior;
- npm;
- token válido da API Olho Vivo;
- recurso de avisos configurado no MockAPI.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/MurilloMF10/GS-Front-end-Web-Dev-Conecta-Brasil.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd GS-Front-end-Web-Dev-Conecta-Brasil
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie o arquivo local de variáveis de ambiente a partir do modelo:

   ```bash
   copy .env.example .env
   ```

   No macOS ou Linux, utilize `cp .env.example .env`.

5. Preencha as variáveis do `.env` com as configurações do ambiente.

6. Inicie a aplicação:

   ```bash
   npm run dev
   ```

7. Abra o endereço informado pelo Vite, normalmente `http://localhost:5173`.

## Variáveis de ambiente

| Variável | Finalidade | Exposição |
| --- | --- | --- |
| `VITE_API_AVISOS_URL` | Endpoint do recurso de avisos no MockAPI | Cliente |
| `VITE_ADMIN_EMAIL` | E-mail demonstrativo da área administrativa | Cliente |
| `VITE_ADMIN_SENHA` | Senha demonstrativa da área administrativa | Cliente |
| `VITE_API_OLHO_VIVO_URL` | Caminho usado pelo cliente para acessar a integração | Cliente |
| `VITE_API_OLHO_VIVO_ENDPOINT_AUTENTICACAO` | Endpoint de autenticação da API Olho Vivo | Cliente |
| `VITE_API_OLHO_VIVO_ENDPOINT_BUSCA_LINHAS` | Endpoint de pesquisa de linhas | Cliente |
| `VITE_API_OLHO_VIVO_ENDPOINT_POSICAO_LINHA` | Endpoint de posições por linha | Cliente |
| `OLHO_VIVO_URL` | URL-base lida pelo proxy local e pela função da Vercel | Servidor |
| `OLHO_VIVO_TOKEN` | Token privado de acesso à API Olho Vivo | Servidor |

Variáveis iniciadas por `VITE_` são incluídas no JavaScript entregue ao navegador. Por isso, as credenciais administrativas deste projeto servem apenas para demonstração acadêmica e não devem reutilizar dados pessoais ou senhas reais. O token da API Olho Vivo deve permanecer exclusivamente em `OLHO_VIVO_TOKEN`, sem o prefixo `VITE_`.

O arquivo `.env` está ignorado pelo Git e não deve ser enviado ao repositório. Apenas o `.env.example`, sem valores particulares, deve permanecer versionado. Na Vercel, as mesmas configurações precisam ser cadastradas em **Settings → Environment Variables**.

## Scripts disponíveis

| Comando | Ação |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera a versão otimizada em `dist/` |
| `npm run preview` | Executa uma prévia local do build |
| `npm run lint` | Verifica a qualidade e a padronização do código |

## Integrações

### API Olho Vivo

Durante o desenvolvimento local, o Vite utiliza um proxy para autenticar e encaminhar as consultas. Em produção, o navegador chama a função `api/olho-vivo.js`, que mantém o token no servidor, autentica a sessão na SPTrans e devolve apenas os dados necessários à interface.

A disponibilidade e o intervalo de atualização das posições dependem do serviço externo e da transmissão de cada veículo. O Conecta Brasil não substitui os canais oficiais da SPTrans.

### MockAPI

O recurso de avisos armazena os campos de título, descrição, categoria, prioridade, linha, situação e data de publicação. O painel administrativo consome esse recurso para executar as operações de criação, leitura, atualização e exclusão.

## Objetivos de Desenvolvimento Sustentável

- **ODS 9 — Indústria, inovação e infraestrutura:** emprega dados e tecnologias web para modernizar o acesso à informação sobre transporte coletivo.
- **ODS 10 — Redução das desigualdades:** aproxima informações operacionais e de acessibilidade de passageiros com diferentes necessidades.
- **ODS 11 — Cidades e comunidades sustentáveis:** contribui para uma mobilidade urbana mais informada, acessível e conectada à rotina da cidade.

## Equipe

| Integrante | Responsabilidade |
| --- | --- |
| **Isaac** | Desenvolvimento principal da funcionalidade em Python, lógica de contagem de pessoas e integração dos cálculos com a proposta da aplicação |
| **Murillo** | Arquitetura e implementação do front-end, componentização em React, responsividade e integrações da aplicação web |
| **João** | Configuração dos dispositivos ESP32, integração de módulos e construção dos fluxos no Node-RED |
| **Thalles** | Organização da documentação, elaboração da narrativa e produção e apresentação do vídeo pitch |

## Privacidade e limitações

A proposta de visão computacional considera somente a contagem de pessoas, sem identificação facial ou armazenamento de características biométricas. Como essa funcionalidade não está integrada à versão entregue, nenhuma imagem de câmera é capturada ou processada pela aplicação web atual.

O login administrativo é uma demonstração executada no cliente e não representa um sistema de autenticação adequado para produção. Uma evolução real deve utilizar autenticação no servidor, senhas protegidas por hash, controle de permissões e armazenamento seguro de sessão.

## Licença

Este repositório está disponibilizado sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.
