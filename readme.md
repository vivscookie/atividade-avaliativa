# Atividade Avaliativa — Git e GitHub
 
Projeto desenvolvido para a disciplina de Engenharia de Software, com o
objetivo de simular um ciclo completo de desenvolvimento utilizando Git e
GitHub: criação de branches, commits, merges, hotfix e release.
 
## 🧩 Sobre o projeto
 
Sistema simples de login com tema escuro, contendo:
 
- Tela de login com validação de campos via JavaScript
- Dashboard com menu e mensagem de boas-vindas ao usuário autenticado
- Tela de cadastro de novos usuários
## 📁 Estrutura de arquivos
 
```
├── index.html          # Tela de login
├── style.css           # Estilos gerais (tema escuro)
├── script.js           # Validação do formulário de login
├── dashboard.html       # Painel principal pós-login
├── cadastro.html        # Formulário de cadastro de usuário
├── cadastro.js          # Validação do formulário de cadastro
└── README.md
```
 
## 🚀 Como usar
 
1. Clone o repositório:
```bash
   git clone https://github.com/vivscookie/atividade-avaliativa.git
```
2. Abra o arquivo `index.html` no navegador.
3. Faça login com usuário `adm` e senha `123` para testar o fluxo completo.
## 🌿 Fluxo de branches utilizado
 
| Tipo | Nome | Base | Finalidade |
|------|------|------|------------|
| Feature | `feature/validacao-login` | `develop` | Validação de campos do login |
| Feature | `feature/dashboard` | `develop` | Painel principal pós-login |
| Feature | `feature/cadastro-usuario` | `develop` | Tela de cadastro de usuário |
| Hotfix | `hotfix/erro-html` | `main` | Correção de tag mal fechada no login |
| Release | `release/v1.1.0` | `develop` | Preparação da versão 1.1.0 |
 
## 🏷️ Versão
 
**v1.1.0** — primeira versão estável com login, dashboard e cadastro
integrados.
 
## 🔗 Links
 
- [Repositório] (https://github.com/vivscookie/atividade-avaliativa)
- [Site hospedado no GitHub Pages](https://vivscookie.github.io/atividade-avaliativa/)
 