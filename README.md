# 🎓 CodeSchool

Site institucional fictício de uma escola de tecnologia, desenvolvido como avaliação da disciplina de **Programação para Internet 1** (curso de Análise e Desenvolvimento de Sistemas, IFSC). Foi o meu **primeiro site**, construído do zero com **HTML, CSS e JavaScript puro** e evoluído ao longo das aulas.

> 🚧 Em desenvolvimento: sendo melhorado a cada aula.

## ✨ Funcionalidades

- **Header fixo** com navegação por âncoras e menu responsivo (hambúrguer no mobile)
- **Modo claro/escuro** com troca de ícone e preferência salva no `localStorage`
- **Carrossel no hero** com 2 slides, setas de navegação e troca automática a cada 6 segundos
- **Seção de cursos** com cards das formações (Frontend, Backend e Cibersegurança)
- **Números da escola** com contadores animados, que disparam quando a seção aparece na tela (`IntersectionObserver`)
- **Notícias e eventos** em layout de duas colunas
- **Formulário de contato** (nome, e-mail e mensagem)
- **Footer** com links de navegação e redes sociais
- **Layout responsivo** com breakpoints para tablet e celular

## 🗂️ Estrutura

```
Code-School/
├── index.html
├── css/
│   └── style.css      # Estilos, variáveis de tema (claro/escuro) e media queries
├── js/
│   └── script.js      # Menu mobile, carrossel, contadores e troca de tema
└── img/               # Imagens do carrossel e das notícias
```

## 🛠️ Tecnologias

- HTML5
- CSS3 (variáveis CSS, Flexbox, Grid, media queries)
- JavaScript (DOM, eventos, `setInterval`, `IntersectionObserver`, `localStorage`)
- [Phosphor Icons](https://phosphoricons.com/) (ícones)
- [Google Fonts](https://fonts.google.com/specimen/Inter) (fonte Inter)

## ▶️ Como executar

Não precisa instalar nada. Clone o repositório e abra o `index.html` no navegador:

```bash
git clone https://github.com/Tioski/Code-School.git
cd Code-School
```

Depois é só abrir o `index.html` com duplo clique, ou usar a extensão **Live Server** no VS Code.

> Os ícones e a fonte são carregados via CDN, então é preciso estar conectado à internet para aparecerem corretamente.


Feito por [Tioski](https://github.com/Tioski) 💻
