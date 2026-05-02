# Vox Ambiental — Site Institucional

Site institucional da **Vox Ambiental**, empresa especializada em **coleta, transporte e destinação final de resíduos sólidos**.

> Instagram: [@vox.ambiental](https://www.instagram.com/vox.ambiental/)

---

## Tecnologias

- **Angular 21** — componentes standalone
- **TypeScript**
- **SCSS** — variáveis, Grid, Flexbox, animações, media queries
- **Reactive Forms** — validação e máscara de telefone
- **Canvas API** — sistema de partículas no hero
- **Intersection Observer** — animações de entrada (fade-in e stagger)
- **Google Fonts** — Inter + Playfair Display
- **Font Awesome 6** — ícones

---

## Estrutura do Projeto

```
src/
├── index.html                  # Shell do Angular (fontes e ícones CDN)
├── styles.scss                 # Variáveis globais, reset e utilitários
├── main.ts                     # Bootstrap da aplicação
└── app/
    ├── app.ts                  # Componente raiz
    ├── app.html                # Template com todos os seletores de seção
    └── components/
        ├── navbar/             # Navbar fixa com scroll e menu mobile
        ├── hero/               # Banner principal, partículas e contadores
        ├── sobre/              # Apresentação da empresa
        ├── servicos/           # Grid de 6 serviços
        ├── diferenciais/       # Cards de diferenciais competitivos
        ├── projetos/           # Cases de sucesso
        ├── galeria/            # Grade de fotos da operação
        ├── depoimentos/        # Depoimentos de clientes
        ├── contato/            # Formulário de orçamento
        └── footer/             # Rodapé com links e redes sociais

public/
├── logo.svg                    # Logo oficial da Vox Ambiental
├── hero-bg.svg                 # Ilustração de fundo do hero
└── sobre.svg                   # Ilustração da seção Sobre
```

---

## Seções do Site

| Seção | Descrição |
|---|---|
| **Navbar** | Fixa, transparente no topo, escurece com scroll, menu hambúrguer no mobile |
| **Hero** | Banner com partículas animadas, chamada principal e contadores (cidades, anos, toneladas) |
| **Sobre** | História e diferenciais da empresa, badge de 15+ anos |
| **Serviços** | RSU, Resíduos Industriais, RSS – Saúde, Coleta Seletiva, Poda, Gestão Municipal |
| **Diferenciais** | Conformidade legal, frota rastreada, MTR digital, suporte 24h, aterro zero, relatórios |
| **Projetos** | 6 cases: Sorocaba, Cubatão, Rede Hospitalar, Santos, Campinas, SJC |
| **Galeria** | Grade responsiva com registros da operação |
| **Depoimentos** | Avaliações de secretário municipal, gerente de sustentabilidade e diretor hospitalar |
| **Contato** | Formulário com validação, máscara de telefone e select de serviço |
| **Footer** | Logo, links rápidos, contato e ícones sociais (Instagram, Facebook, LinkedIn, WhatsApp) |

---

## Como executar

### Pré-requisitos

- Node.js 18+
- Angular CLI: `npm install -g @angular/cli`

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd vox-ambiental

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
ng serve
```

Acesse `http://localhost:4200` no navegador.

### Build para produção

```bash
ng build
```

Os arquivos gerados ficam em `dist/vox-ambiental/browser/`.

---

## Cores e identidade visual

| Variável | Valor | Uso |
|---|---|---|
| `--accent` | `#00c853` | Verde principal, CTAs, destaques |
| `--dark` | `#0d1b0e` | Fundo principal |
| `--dark-alt` | `#132215` | Fundo alternado entre seções |
| `--text` | `#e8f5e9` | Texto principal |
| `--text-muted` | `#a5d6a7` | Texto secundário |

---

## Contato da Empresa

- **Site:** em desenvolvimento
- **Instagram:** [@vox.ambiental](https://www.instagram.com/vox.ambiental/)
- **WhatsApp:** (11) 99999-0000
- **E-mail:** contato@voxambiental.com.br
