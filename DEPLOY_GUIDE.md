# 🚀 Guia de Deploy - Netlify

Este guia explica como fazer deploy do WebflowForge na Netlify usando GitHub.

## 📋 Pré-requisitos

- [ ] Conta no [GitHub](https://github.com)
- [ ] Conta no [Netlify](https://netlify.com)
- [ ] Git instalado localmente
- [ ] Projeto funcionando localmente

## 🔄 Processo de Deploy

### 1️⃣ Preparar o Repositório no GitHub

#### Opção A: Criar Novo Repositório

1. Acesse [github.com/new](https://github.com/new)
2. Crie um novo repositório (ex: `webflowforge`)
3. **NÃO** inicialize com README, .gitignore ou licença (já temos esses arquivos)

#### Opção B: Usar Repositório Existente

Se já tem um repositório, pule para o passo 2.

### 2️⃣ Conectar o Projeto ao GitHub

```bash
# Se ainda não inicializou o git (verifique se existe .git/)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - WebflowForge"

# Adicionar o repositório remoto (substitua SEU_USUARIO e SEU_REPO)
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git

# Enviar para o GitHub
git push -u origin main
```

> **Nota**: Se o branch principal for `master` em vez de `main`, use `git push -u origin master`

### 3️⃣ Conectar GitHub à Netlify

1. **Acesse o Netlify**
   - Vá para [app.netlify.com](https://app.netlify.com)
   - Faça login (pode usar sua conta do GitHub)

2. **Importar Projeto**
   - Clique em **"Add new site"** → **"Import an existing project"**
   - Escolha **"Deploy with GitHub"**
   - Autorize o Netlify a acessar seus repositórios

3. **Selecionar Repositório**
   - Procure e selecione o repositório `webflowforge` (ou o nome que você deu)

4. **Configurar Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist/public
   ```
   
   > **Nota**: Essas configurações já estão no `netlify.toml`, então você pode deixar em branco que o Netlify vai usar o arquivo de configuração.

5. **Variáveis de Ambiente** (se necessário)
   - Clique em **"Advanced build settings"**
   - Adicione as variáveis necessárias (se houver):
     - `NODE_ENV` = `production`
     - Outras variáveis do seu `.env` (exceto senhas locais)

6. **Deploy!**
   - Clique em **"Deploy site"**
   - Aguarde o build completar (geralmente 2-5 minutos)

### 4️⃣ Configurar Domínio (Opcional)

1. **Domínio Netlify Gratuito**
   - Por padrão, você recebe: `random-name-123.netlify.app`
   - Pode personalizar em: **Site settings** → **Domain management** → **Options** → **Edit site name**

2. **Domínio Customizado**
   - **Site settings** → **Domain management** → **Add custom domain**
   - Siga as instruções para configurar DNS

## 🔄 Atualizações Automáticas

Após o setup inicial, cada vez que você fizer push para o GitHub:

```bash
# Fazer alterações no código
git add .
git commit -m "Descrição das mudanças"
git push
```

A Netlify vai automaticamente:
1. ✅ Detectar o push
2. ✅ Fazer build do projeto
3. ✅ Fazer deploy da nova versão
4. ✅ Disponibilizar no seu domínio

## 🌿 Deploy de Branches (Preview)

A Netlify cria previews automáticos para cada branch:

```bash
# Criar uma branch para testar
git checkout -b feature/nova-funcionalidade

# Fazer alterações e push
git add .
git commit -m "Adiciona nova funcionalidade"
git push -u origin feature/nova-funcionalidade
```

A Netlify vai criar um URL de preview tipo:
`feature-nova-funcionalidade--seu-site.netlify.app`

## 📊 Monitoramento

No dashboard da Netlify você pode:
- ✅ Ver logs de build
- ✅ Histórico de deploys
- ✅ Fazer rollback para versões anteriores
- ✅ Ver analytics (com plano pago)

## ⚙️ Configuração Atual

Seu projeto já está configurado com:

### `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = "dist/public"
```

### `.gitignore`
```
node_modules
dist
.DS_Store
.env
```

> **Importante**: O `.env` está no `.gitignore`, então suas variáveis de ambiente locais **NÃO** vão para o GitHub (segurança ✅)

## 🐛 Troubleshooting

### Build Falha

1. **Verifique os logs** no Netlify dashboard
2. **Teste localmente**:
   ```bash
   npm run build
   ```
3. **Verifique se todas as dependências estão no `package.json`**

### Site não carrega

1. **Verifique se o `publish` está correto**: `dist/public`
2. **Verifique se o build gerou os arquivos** na pasta correta

### Variáveis de ambiente

1. **Configure no Netlify**: Site settings → Environment variables
2. **Não commite o `.env`** para o GitHub

## 📚 Recursos Úteis

- [Documentação Netlify](https://docs.netlify.com)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) - Para deploy via terminal
- [Netlify Functions](https://docs.netlify.com/functions/overview/) - Para serverless functions

## 🎉 Pronto!

Seu site estará disponível em:
- **URL temporária**: `https://random-name-123.netlify.app`
- **URL customizada**: `https://seu-nome.netlify.app` (após personalizar)
- **Domínio próprio**: `https://seudominio.com` (se configurar)

---

**Dúvidas?** Verifique os logs de build no dashboard da Netlify ou consulte a documentação oficial.
