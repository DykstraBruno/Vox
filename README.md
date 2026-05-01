# 🌿 Vox Ambiental — Site Institucional

Site de divulgação da **Vox Ambiental**, empresa especializada em **coleta e transporte de resíduos sólidos**.

> Instagram: [@vox.ambiental](https://www.instagram.com/vox.ambiental/)

---

## 📁 Estrutura do Projeto

```
Vox/
├── index.html        # Estrutura principal do site (HTML semântico)
├── style.css         # Estilos globais (variáveis CSS, responsivo, animações)
├── script.js         # Interatividade (navbar, partículas, contadores, formulário)
└── assets/
    ├── logo.svg      # Logo oficial da Vox Ambiental (SVG vetorial)
    ├── hero-bg.svg   # Ilustração de fundo da seção hero
    └── sobre.svg     # Ilustração da seção "Sobre"
```

---

## 🖥️ Seções do Site

| Seção | Descrição |
|---|---|
| **Hero** | Banner principal com chamada, CTAs e contadores animados |
| **Sobre** | Apresentação da empresa, diferenciais e conformidade com a PNRS |
| **Serviços** | 6 cards: RSU, Coleta Seletiva, RSS, Industriais, RCC, PGRS |
| **Diferenciais** | Frota própria, MTR garantido, conformidade legal, destinação responsável |
| **Projetos** | Cases de sucesso: condomínio, hospital, indústria química, parque empresarial |
| **Galeria** | 8 cards linkando ao Instagram @vox.ambiental |
| **Depoimentos** | Avaliações de clientes (síndico, gerente ambiental, clínica médica) |
| **Contato** | Formulário de orçamento + dados de contato |
| **Footer** | Links, redes sociais e créditos |

---

## ⚙️ Tecnologias

- **HTML5** semântico
- **CSS3** — variáveis, Grid, Flexbox, animações, media queries
- **JavaScript** vanilla — Intersection Observer, contadores animados, validação de formulário
- **Google Fonts** — Inter + Playfair Display
- **Font Awesome 6** — ícones

Sem frameworks ou dependências de build. Funciona abrindo o `index.html` direto no navegador.

---

## 🚀 Como usar

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Abra no navegador
# Opção 1 — duplo clique em index.html
# Opção 2 — com Live Server (VS Code)
code .
# Clique em "Go Live" na barra inferior do VS Code
```

---

## ✏️ Personalização

### Dados de contato
Substitua os placeholders em `index.html`:

| Campo | Localizar | Substituir por |
|---|---|---|
| WhatsApp | `wa.me/5500000000000` | Número real com DDI |
| E-mail | `contato@voxambiental.com.br` | E-mail real da empresa |
| Endereço | `Brasil` | Cidade/Estado |

### Formulário de contato
O formulário (`#contato-form`) simula o envio por padrão. Para ativá-lo de verdade, substitua o bloco `setTimeout` em `script.js` por uma integração real:

- **[Formspree](https://formspree.io/)** — sem backend, gratuito
- **EmailJS** — disparo direto pelo front-end
- Endpoint próprio em PHP / Node.js

### Cores
Todas as cores estão centralizadas como variáveis CSS no topo de `style.css`:

```css
:root {
  --accent:  #00c853;   /* verde principal */
  --dark:    #0d1b0e;   /* fundo escuro */
  --green-800: #2e7d32; /* verde secundário */
  /* ... */
}
```

---

## 📱 Responsividade

| Breakpoint | Layout |
|---|---|
| > 1024px | Desktop — grade completa |
| ≤ 1024px | Tablet — colunas empilhadas |
| ≤ 768px | Mobile — menu hamburguer, cards em coluna única |
| ≤ 480px | Mobile pequeno — ajustes de espaçamento e galeria |

---

## 📄 Licença

Projeto desenvolvido exclusivamente para a **Vox Ambiental**. Todos os direitos reservados.
