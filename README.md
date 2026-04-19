# Diana Pimentel Centro de Explicações

Landing page profissional para o Centro de Explicações Diana Pimentel, localizado na Trofa, Portugal.

## 🎓 Sobre o Projeto

Website moderno e responsivo para um centro de explicações com mais de 10 anos de experiência, oferecendo apoio académico personalizado desde o ensino básico até ao secundário em Português, Matemática, Ciências e preparação para exames.

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** com TypeScript
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn/ui** - Componentes UI baseados em Radix UI
- **Wouter** - Roteamento client-side
- **TanStack Query** - Gestão de estado do servidor
- **Framer Motion** - Animações e transições

### Backend
- **Express.js** - Framework web para Node.js
- **PostgreSQL** - Base de dados relacional
- **Drizzle ORM** - ORM TypeScript-first
- **Zod** - Validação de schemas

## 📦 Instalação e Execução Local

### Pré-requisitos
- Node.js 20 ou superior
- PostgreSQL 16 ou superior
- npm ou yarn

### Passos

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd WebflowForge
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_db
   NODE_ENV=development
   PORT=5000
   ```

4. **Execute as migrações da base de dados**
   ```bash
   npm run db:push
   ```

5. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:5000`

## 🏗️ Build de Produção

Para criar uma build de produção:

```bash
npm run build
```

Isso irá:
1. Compilar o frontend React (output: `dist/public`)
2. Compilar o servidor Express (output: `dist/index.cjs`)

Para executar a build de produção:

```bash
npm start
```

## 🚀 Deploy

### Deploy no Netlify (Recomendado)

Esta é a opção mais simples e gratuita. O site funcionará a 100% sem necessidade de servidores extra.

1. **Conecte seu repositório ao Netlify**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "Add new site" → "Import an existing project"
   - Conecte seu repositório Git

2. **Configure as definições de build**
   - O Netlify deve detetar automaticamente:
   - Build command: `npm run build`
   - Publish directory: `dist/public`

3. **Deploy**
   - Clique em "Deploy site"

**Nota sobre o Formulário de Contacto:**
O site está configurado para usar **Netlify Forms**. As mensagens enviadas pelo formulário aparecerão automaticamente no painel do Netlify em "Forms". Não é necessária nenhuma base de dados externa.

## 📁 Estrutura do Projeto

```
WebflowForge/
├── client/              # Código do frontend React
│   └── src/
├── server/              # Código do backend Express
├── shared/              # Código compartilhado (schemas, tipos)
├── attached_assets/     # Assets estáticos
├── dist/                # Build de produção (gerado)
│   ├── public/          # Frontend compilado
│   └── index.cjs        # Backend compilado
├── netlify.toml         # Configuração do Netlify
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Executa build de produção
- `npm run check` - Verifica tipos TypeScript
- `npm run db:push` - Aplica mudanças de schema ao banco de dados

## 📞 Contato

**Diana Pimentel Centro de Explicações**
- 📱 WhatsApp: +351 919 977 198
- 📍 Localização: Sala 212, Edifício América, Trofa
- 📸 Instagram: [@diana_pimentel_explicadora](https://instagram.com/diana_pimentel_explicadora)

## 📄 Licença

MIT
# explicadora
