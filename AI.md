# Uso de Inteligência Artificial — Conecta Brasil

## Declaração de transparência

Ferramentas de Inteligência Artificial foram utilizadas no Conecta Brasil como apoio ao planejamento, à pesquisa técnica, ao desenvolvimento, à revisão visual, à documentação e à investigação de erros. A definição do problema, as decisões de escopo, a escolha da API Olho Vivo, a avaliação das sugestões e a aprovação do resultado permaneceram sob responsabilidade do grupo.

A IA não trabalhou de forma autônoma. Cada sugestão relevante foi analisada antes de ser incorporada, adaptada às regras do projeto e verificada por leitura do código, testes locais ou validação no ambiente publicado. Os integrantes também controlaram manualmente o versionamento: os commits, pushes, merges e configurações externas foram realizados por uma pessoa da equipe.

Os prompts apresentados neste documento são **exemplos representativos e resumidos de interações reais**. Eles preservam o objetivo das solicitações feitas durante o projeto, mas foram reorganizados e reescritos para facilitar a leitura; portanto, não são transcrições literais de todo o histórico de conversa.

## Ferramentas utilizadas

### OpenAI Codex

Utilizado como assistente de desenvolvimento para:

- discutir a arquitetura e a organização de pastas;
- sugerir a separação entre páginas, componentes, hooks, serviços e utilitários;
- propor alternativas para exibir coordenadas geográficas em um mapa;
- auxiliar nas integrações com MockAPI e API Olho Vivo;
- revisar responsividade, consistência visual e acessibilidade básica;
- investigar erros de código, rotas e publicação na Vercel;
- apoiar a análise de segurança e a elaboração da documentação.

### Geração de imagens do ChatGPT

Utilizada como apoio na produção de imagens conceituais para representar mobilidade urbana, consulta de ônibus, câmeras de contagem, benefícios e previsibilidade da viagem. Os arquivos escolhidos foram posteriormente avaliados e inseridos manualmente na identidade visual definida pelo grupo.

## Forma de utilização no projeto

O desenvolvimento foi organizado em partes menores para facilitar revisão e versionamento. Antes de cada implementação, o grupo discutia o objetivo, as limitações da entrega e a relação daquela funcionalidade com o restante da solução. A IA era consultada para apresentar possibilidades, explicar tecnologias desconhecidas ou sugerir uma estrutura inicial.

Depois da resposta, a equipe verificava se a proposta:

1. atendia às orientações dos professores;
2. combinava com o escopo acadêmico e com o tempo disponível;
3. respeitava a identidade visual escolhida;
4. utilizava apenas as dependências necessárias;
5. mantinha dados sensíveis fora do repositório;
6. funcionava na aplicação local e no ambiente publicado.

Quando uma sugestão não atendia a esses critérios, ela era corrigida, simplificada ou descartada. Um exemplo foi a funcionalidade de contagem de pessoas por câmera: apesar de fazer parte da ideia original, o grupo decidiu retirar sua integração do escopo da aplicação web entregue devido ao prazo e à complexidade. Essa foi uma decisão humana de projeto.

## Interações representativas

### 1. Identidade visual e definição de cores

**Prompt representativo:**

> Com base no protótipo criado pelo grupo, sugira uma paleta complementar que preserve o azul e o verde da marca. Explique o papel de cada cor e apresente opções para fundo, texto, bordas, estados de erro e elementos de destaque. A decisão final será revisada antes da implementação.

**Síntese da resposta obtida:**

A IA organizou as cores principais e sugeriu tons auxiliares para contraste, superfícies, textos e estados da interface. Também recomendou manter o verde para ações importantes e o azul para reforçar confiança e mobilidade.

**Aplicação e revisão:**

O grupo comparou as sugestões com o modelo visual criado no Canva, descartou alternativas que se afastavam da identidade pretendida e aprovou manualmente a paleta utilizada no CSS. Em uma revisão posterior, a equipe solicitou melhorias visuais sem alteração dessas cores.

### 2. Organização das rotas e da estrutura do projeto

**Prompt representativo:**

> Sugira uma organização para uma aplicação React com páginas públicas, login, painel administrativo protegido e página de erro. Separe componentes visuais, regras de estado e acesso às APIs, use nomes próprios do ecossistema quando necessário e nomes em português para elementos específicos do projeto.

**Síntese da resposta obtida:**

A IA sugeriu centralizar as rotas, compartilhar cabeçalho e rodapé por meio de um layout público, proteger o painel com uma rota privada e separar a interface em páginas, componentes, hooks, serviços, provedores e utilitários.

**Aplicação e revisão:**

A estrutura foi conferida no editor e ajustada conforme as páginas realmente passaram a existir. Imports prematuros que causavam erro foram removidos, e as rotas foram incluídas apenas quando seus módulos estavam disponíveis. O grupo também corrigiu os imports para a versão do `react-router` utilizada no projeto.

### 3. Escolha de uma biblioteca para o mapa

**Prompt representativo:**

> A API retorna latitude e longitude dos ônibus. Qual alternativa gratuita e adequada para um projeto acadêmico em React permite transformar esses dados em um mapa, sem exigir uma infraestrutura complexa?

**Síntese da resposta obtida:**

A IA apresentou o Leaflet com React Leaflet como uma opção leve e compatível com mapas baseados em OpenStreetMap. Também explicou a relação entre latitude, longitude, marcadores e atualização das posições.

**Aplicação e revisão:**

Como a equipe ainda não conhecia a biblioteca, sua documentação e compatibilidade foram verificadas antes da instalação. Em seguida, o grupo testou coordenadas devolvidas pela API, conferiu a posição dos marcadores e manteve mensagens de ausência de veículos ou falha de consulta. A recomendação da ferramenta veio da IA, mas a adoção ocorreu somente após avaliação e testes do grupo.

### 4. Integração com a API Olho Vivo

**Contexto:**

A API Olho Vivo foi encontrada pelo próprio grupo durante pesquisas sobre fontes públicas de mobilidade de São Paulo. A decisão de utilizá-la foi discutida entre os integrantes. A IA foi empregada posteriormente para apoiar pontos específicos da implementação.

**Prompt representativo:**

> A API Olho Vivo exige autenticação por token e mantém uma sessão por cookie. Ajude a organizar um serviço para pesquisar linhas e consultar posições sem misturar a regra de integração com os componentes visuais. O token não pode ficar exposto no repositório nem no JavaScript de produção.

**Síntese da resposta obtida:**

A IA explicou o fluxo de autenticação, a necessidade de preservar o cookie de sessão e a separação entre serviço, hook e interface. Para produção, sugeriu intermediar a chamada por uma função serverless; para desenvolvimento, sugeriu um proxy do Vite.

**Aplicação e revisão:**

O grupo adaptou a proposta ao formato real das respostas da SPTrans, normalizou os campos utilizados pela interface e criou estados de carregamento, erro e ausência de resultado. O token foi mantido em variável de servidor, sem prefixo `VITE_`, e o funcionamento foi validado por pesquisas de linhas e pela exibição de veículos no mapa.

### 5. CRUD de avisos com MockAPI

**Prompt representativo:**

> Como organizar um CRUD de avisos em React usando MockAPI, com os campos título, descrição, categoria, prioridade, linha, situação e data de publicação? A tela pública deve exibir apenas avisos ativos, enquanto o painel privado deve criar, editar e excluir registros.

**Síntese da resposta obtida:**

A IA propôs concentrar as requisições em um serviço, normalizar os registros recebidos e usar hooks separados para a listagem pública e o gerenciamento administrativo. Também sugeriu tratar carregamento, erros, confirmação de exclusão e ordenação por data.

**Aplicação e revisão:**

O recurso e seus campos foram configurados manualmente no MockAPI. Depois, cada operação foi testada pela interface, verificando se as alterações apareciam tanto no painel quanto na listagem pública e se somente registros ativos eram exibidos ao cidadão.

### 6. Refinamento visual e redução de padrões genéricos

**Prompt representativo:**

> Analise a interface existente e sugira ajustes para que ela tenha uma identidade mais própria. Preserve a paleta já aprovada, diminua o excesso de cartões arredondados, melhore a hierarquia tipográfica e indique onde imagens reais ou conceituais podem comunicar melhor o problema.

**Síntese da resposta obtida:**

A IA recomendou maior contraste entre seções, cantos menos arredondados, tipografia distinta para títulos e textos, uso mais intencional de imagens e redução de elementos decorativos repetidos.

**Aplicação e revisão:**

O grupo forneceu uma lista detalhada das telas que precisavam de mudança e escolheu as imagens utilizadas. As alterações foram comparadas visualmente com a proposta original, mantendo cores e elementos reconhecidos pela equipe como parte da identidade do Conecta Brasil.

### 7. Correção da publicação na Vercel

**Prompt representativo:**

> A aplicação funciona localmente, mas a autenticação da API Olho Vivo retorna erro 404 quando publicada na Vercel. Analise a diferença entre os ambientes e proponha uma correção que não exponha o token no front-end.

**Síntese da resposta obtida:**

A IA ajudou a identificar que o proxy do Vite existia apenas no ambiente local e que a produção precisava de uma função serverless. Foi sugerida a criação de uma rota em `api/`, a leitura segura das variáveis no servidor e a configuração de fallback das rotas da aplicação de página única.

**Aplicação e revisão:**

O código foi validado com lint e build, e a consulta real foi testada antes da publicação. Durante o deploy, a equipe percebeu que a Vercel estava conectada a um repositório antigo e republicava o commit inicial. Com auxílio da análise da IA, o grupo conferiu os hashes dos commits, criou um novo projeto na Vercel ligado ao repositório correto, cadastrou as variáveis e testou novamente a aplicação publicada.

### 8. Revisão de segurança e organização

**Prompt representativo:**

> Revise a organização do projeto e procure credenciais expostas, arquivos que não deveriam subir para o GitHub, pastas duplicadas, imports incorretos, rotas inválidas e problemas de regra de negócio. Apenas aponte ou aplique mudanças que possam ser verificadas no código.

**Síntese da resposta obtida:**

A IA indicou a necessidade de conferir o `.gitignore`, manter o `.env` fora do versionamento, separar segredos de variáveis públicas, consolidar pastas com responsabilidades semelhantes e executar verificações estáticas e de build.

**Aplicação e revisão:**

O grupo revisou os arquivos apontados, confirmou que o `.env` estava ignorado, manteve somente variáveis vazias no `.env.example` e garantiu que o token da API Olho Vivo fosse lido no servidor em produção. Pastas e imports foram conferidos antes do commit final de correção.

## Funcionalidades apoiadas por IA

As principais áreas em que houve apoio foram:

- planejamento da arquitetura de componentes e rotas;
- criação e revisão de componentes reutilizáveis;
- separação da lógica em hooks, serviços e utilitários;
- estrutura da autenticação demonstrativa e da rota privada;
- consumo e normalização dos dados do MockAPI;
- consumo e normalização dos dados da API Olho Vivo;
- configuração do mapa com Leaflet;
- função serverless para proteger o token em produção;
- tratamento de erros, carregamento e estados vazios;
- revisão visual, responsividade e conteúdo das páginas;
- auditoria básica de segurança e organização;
- elaboração e revisão da documentação técnica.

O código sugerido não foi aceito automaticamente. Durante o desenvolvimento, algumas respostas precisaram de correções de imports, adequação à versão atual das bibliotecas, alterações no código de diversos arquivos, reorganização de rotas e adaptação ao formato real das APIs.

## Validação das respostas

O grupo adotou as seguintes formas de validação:

### Revisão manual

- leitura dos arquivos alterados no Visual Studio Code;
- comparação das sugestões com os requisitos fornecidos pelos professores;
- alteração de blocos de código para adequação aos temas vistos em aula;
- conferência dos nomes, caminhos, imports e responsabilidades das pastas;
- análise de segurança e risco da exposição de credenciais;
- decisão humana antes de cada commit e push.

### Verificação automatizada

- execução de `npm run lint` para identificar erros e problemas de padronização;
- execução de `npm run build` para confirmar que a versão de produção era gerada;
- análise do histórico de commits e das diferenças antes do versionamento.

### Testes funcionais

- navegação por todas as rotas públicas e privadas;
- testes do login demonstrativo e do redirecionamento de acesso;
- criação, edição, ativação, desativação e exclusão de avisos;
- pesquisa de linhas e consulta de posições reais;
- conferência dos marcadores no mapa;
- testes de mensagens de erro e estados sem resultado;
- avaliação da interface em diferentes tamanhos de tela;
- teste final no domínio publicado pela Vercel.

### Segurança e publicação

- confirmação de que `.env` não estava versionado;
- busca por tokens ou valores particulares no código rastreado pelo Git;
- uso de variável de servidor para o token da API Olho Vivo;
- conferência da branch e do commit utilizados pela Vercel;
- novo teste após cada correção relacionada ao deploy.

## Análise crítica

### Benefícios observados

A IA acelerou a compreensão de ferramentas ainda desconhecidas pelo grupo, como Leaflet e funções serverless da Vercel. Também ajudou a comparar alternativas, organizar responsabilidades, localizar causas prováveis de erros e transformar requisitos gerais em tarefas menores que podiam ser revisadas.

Outro benefício foi a possibilidade de discutir decisões antes de implementá-las. Em vez de servir apenas para gerar código, a IA foi utilizada como apoio para perguntas, explicações e revisão, permitindo que a equipe avaliasse vantagens e limitações de cada solução.

### Limitações encontradas

As respostas nem sempre correspondiam à versão das bibliotecas instalada no projeto. Houve casos de imports incompatíveis, referências a páginas ainda inexistentes e sugestões visuais genéricas que precisaram ser refeitas. Houveram erro de códigos em alguns arquivos que foram revisados e corrigidos pelo grupo. A IA também não conhecia automaticamente a configuração real de serviços externos, branches, variáveis ou projetos na Vercel; essas informações tiveram de ser verificadas pelo grupo.

Além disso, uma resposta tecnicamente possível nem sempre era adequada ao prazo ou ao nível do projeto. A retirada da integração de lotação por câmera demonstrou a importância de avaliar complexidade e prioridade, em vez de implementar todas as possibilidades sugeridas.

### Conclusão

O uso de IA foi positivo quando acompanhado de contexto, revisão e testes. A ferramenta contribuiu para aprendizado e produtividade, mas não substituiu pesquisa, tomada de decisão, correção de bugs, domínio do problema nem responsabilidade técnica. O resultado final é fruto das escolhas e validações realizadas pelo grupo, com a IA atuando como suporte ao processo.
