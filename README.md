# AllSkinWR

## Galeria de skins de Wild Rift com selecao dinamica de campeoes

Aplicacao **front-end** desenvolvida para demonstrar dominio de **JavaScript moderno**, organizacao por **camadas (Domain, Application, Infrastructure, UI)** e integracao com dados externos, sem frameworks de front-end.

O projeto exibe uma **galeria de skins** e um **carrossel dinamico** que muda conforme o campeao selecionado. A interface utiliza **Bootstrap** e **Select2** para melhorar a experiencia de busca e navegacao.

---

## Tecnologias utilizadas

- HTML
- CSS (BEM)
- JavaScript (ES Modules)
- Vite
- Bootstrap
- jQuery
- Select2
- Cloudinary (CDN de imagens)
- SheetDB (captura de emails)

---

## Funcionalidades principais

- Selecao de campeao com Select2 (busca rapida).
- Atualizacao dinamica do carrossel com skins do campeao.
- Grid por rota (Top, Jungle, Mid, ADC, Support e All).
- Toasts por rota ao selecionar campeoes no grid.
- Tema claro/escuro com persistencia.
- Confetti ao carregar novas skins no carrossel.
- Botao "View Details" abre a skin em nova aba.
- Captura de email no footer com envio via SheetDB.

---

## Arquitetura e decisoes tecnicas

- **Arquitetura em camadas** inspirada por DDD:
  - **Domain**: entidades (Champion, Skin)
  - **Application**: casos de uso (ex.: buscar skins por campeao)
  - **Infrastructure**: repositorios e fetch de dados
  - **UI**: controllers e views (DOM, Bootstrap, Select2)
- **Repository Pattern** para isolar a origem dos dados.
- **Use Cases** para orquestrar a logica da aplicacao.
- **Controllers/Views** na UI para manter DOM separado da regra de negocio.

---

## Estrutura do projeto

```
.
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── public
│   ├── android-chrome-512x512.png
│   ├── data
│   │   ├── champions.json
│   │   └── skinColections.json
│   ├── doc
│   │   ├── ator-e-caso-de-uso.png
│   │   ├── colinha de organização do projeto.pdf
│   │   ├── EspecificaçãodosCasosdeUso.pdf
│   │   └── Visão Geral da Arquitetura (DDD em Camadas).pdf
│   └── img
│       ├── emote
│       │   └── emote-blitz-quest.webp
│       ├── lanes
│       │   ├── adc-icon.png
│       │   ├── all-lanes.svg
│       │   ├── bottom - Copy.svg
│       │   ├── jungle - Copy.svg
│       │   ├── jungle-icon - Copia.png
│       │   ├── mid - Copy.svg
│       │   ├── mid-icon.png
│       │   ├── sup-icon.png
│       │   ├── support - Copy.svg
│       │   ├── top - Copy.svg
│       │   └── top-icon.png
│       └── logo-all-skin-wr3.png
├── README.md
├── scripts
│   ├── cloudinary.js
│   ├── lol-data-generator
│   │   ├── download-image.js
│   │   └── generate.js
│   ├── sync-icons.js
│   ├── sync-skins.js
│   ├── update-champions-json.js
│   ├── upload-icons.js
│   └── upload-skins.js
└── src
    ├── app
    │   └── main.js
    ├── features
    │   ├── champions
    │   │   ├── application
    │   │   │   ├── getChampionByIdUseCase.js
    │   │   │   └── getChampionGridUseCase.js
    │   │   ├── domain
    │   │   │   ├── championGridData.js
    │   │   │   └── Champion.js
    │   │   ├── infra
    │   │   │   └── championsRepository.js
    │   │   └── ui
    │   │       ├── championsGridController.js
    │   │       ├── championsGridView.js
    │   │       ├── championsSelectController.js
    │   │       └── championsSelectView.js
    │   ├── gallery
    │   │   ├── application
    │   │   │   └── loadGalleryUseCase.js
    │   │   ├── domain
    │   │   │   └── Gallery.js
    │   │   └── ui
    │   │       ├── galleryController.js
    │   │       ├── galleryEffects.js
    │   │       └── galleryView.js
    │   └── skins
    │       ├── application
    │       │   └── getSkinsByChampionUseCase.js
    │       ├── domain
    │       │   └── Skin.js
    │       └── infra
    │           └── skinsRepository.js
    ├── shared
    │   ├── config
    │   │   └── cloudinary.js
    │   └── utils
    ├── styles
    │   ├── components
    │   │   ├── carousel
    │   │   │   ├── carousel.css
    │   │   │   ├── carousel-info.css
    │   │   │   └── carousel-item.css
    │   │   ├── champion
    │   │   │   ├── champion-card.css
    │   │   │   ├── champion-details.css
    │   │   │   └── champion-list.css
    │   │   ├── layout
    │   │   │   ├── footer.css
    │   │   │   ├── grid.css
    │   │   │   └── header.css
    │   │   ├── navigation
    │   │   │   ├── menu.css
    │   │   │   └── navbar.css
    │   │   └── ui
    │   │       ├── badge.css
    │   │       ├── btn.css
    │   │       ├── btn-theme.css
    │   │       └── select.css
    │   ├── core
    │   │   ├── reset.css
    │   │   ├── themes.css
    │   │   ├── typography.css
    │   │   └── variables.css
    │   ├── pages
    │   │   ├── about.css
    │   │   ├── champions.css
    │   │   └── home.css
    │   └── style.css
    └── ui
        ├── email
        │   └── initEmailForm.js
        ├── input
        │   └── initInputSelect.js
        ├── navbar
        │   └── initNavLinks.js
        ├── theme
        │   └── initThemeSwitcher.js
        └── toast
            └── initToast.js
```

---

## Como usar

1. Escolha um campeao no select (busca rapida).
2. O carrossel e a informacao de skin sao atualizados automaticamente.
3. Clique em **View Details** para abrir a skin em nova aba.
4. Use o grid por rota para selecionar rapidamente um campeao.
5. Envie seu email no footer para salvar na planilha externa.

- **Link online:** https://all-skin-wr.vercel.app/
- **Repositório GitHub:** https://github.com/Mateus-Cimini/AllSkinWR

---

## Integracao de emails (SheetDB)

- O formulario do footer envia o email para o endpoint do SheetDB.
- Os dados ficam armazenados em uma planilha externa, simulando captura de leads.

---

## Aprendizados

- Organizacao por camadas e separacao de responsabilidades.
- Consumo de dados externos e manipulacao de DOM sem frameworks.
- Integracao de UI com Bootstrap e Select2.
- Feedback visual com toasts e confetti.

---

## 🤝 Contribuição

Contribuições são bem-vindas.  
Sinta-se à vontade para abrir issues ou enviar pull requests.

---

## 🔭 Evolução planejada do projeto

Este projeto foi desenvolvido com foco em aprendizado e demonstração técnica. As melhorias abaixo representam próximos passos para elevar o nível da aplicação e aproximá-la de um produto real.

### 🟢 Melhorias rápidas (baixo esforço)
• Documentar o "Como Rodar": O README atual explica o que o projeto faz, mas falta a seção técnica de instalação (npm install, npm run dev) e configuração de variáveis de ambiente (.env).
• Limpeza de Comentários e Logs: Garantir que mensagens de debug ou logs de "5s atrás" (como citado nas fontes) sejam removidos para passar uma imagem profissional.

### 🟡 Melhorias de médio impacto
• Remover jQuery/Select2: Substituir o Select2 por um componente de busca feito em JavaScript Vanilla Puro ou uma biblioteca moderna sem dependências de jQuery.
• Implementar Testes Unitários: Adicionar testes (ex: com Vitest) para os Use Cases da camada de Application.
• Benefício: Comprova domínio de JavaScript moderno (ES6+) e garante que a lógica de negócio (Domain) está protegida contra regressões.

### 🔵 Diferenciais avançados (opcionais)
• Migração para TypeScript: Tipar as entidades de Domain (Champion, Skin) elevaria o projeto para um padrão sênior de organização.
• CI/CD Pipeline: Configurar um GitHub Action para rodar lint e testes automaticamente em cada Pull Request.

---
## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.

---

## 👤 Autor

Desenvolvido por **Mateus Cimini**  
https://github.com/Mateus-Cimini
