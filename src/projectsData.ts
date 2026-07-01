export type BadgeType = 'B2C' | 'B2B' | 'INTERNAL' | 'INFRA';

export interface Project {
  id: number;
  badge: BadgeType;
  title: string;
  desc: string;
  features: string[];
  techStack: string;
  repos: string;
  businessImpact?: string;
  strategy?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    badge: 'B2C',
    title: 'AI Astrology Platform',
    desc: 'An AI-powered astrology platform offering personalized fortune readings fused with market signals for retail consumers.',
    features: ['Natal chart generation', 'BaZi / Four Pillars', 'Conversational AI readings', 'Crypto + stock signals', 'Referral system', 'Partner API', 'Payments', '6-language support (TH/EN/JP/ZH/KO/VI)', 'Real-time SSE streaming', 'CRM'],
    techStack: 'Next.js 15 · Go/Fiber · Python/FastAPI · LangGraph agents · PostgreSQL · Redis · Firebase auth · Amplitude analytics',
    repos: 'astro-frontend · new-backend · llm-service · datasource-api · crm-dashboard · bazi-strategy-report · horary-service',
    businessImpact: 'Implemented rapid development workflows to ship landing pages and automated CRM systems.',
    strategy: 'Accelerated MVP delivery and created scalable retention hooks in the consumer app space using astrological data.',
    role: 'PM'
  },
  {
    id: 2,
    badge: 'B2C',
    title: 'Spiritual E-commerce Store',
    desc: 'A spiritual e-commerce store featuring blessed wallpapers, jewelry, and cards with embedded fortune-telling tools to drive conversion.',
    features: ['Product catalog + filtering', 'Multi-step checkout', 'Discount & promo codes', 'Bazi Blueprint report (paid)', 'Taksa numerology report', 'Lucky number / color tools', 'Deity quiz → product rec', 'Spin-to-win wheel', 'Admin order & analytics dashboard', 'TH/EN bilingual'],
    techStack: 'React/Vite · TypeScript · Supabase (DB + storage + edge fns) · TailwindCSS · shadcn/ui · React Query · Recharts',
    repos: 'spiritual-shop-web (local)',
    businessImpact: 'Retail businesses and entrepreneurs looking to launch a robust e-commerce presence.',
    strategy: 'Eliminates complexity of building a platform from scratch by providing an AI-assisted foundation.',
    role: 'PM & dev'
  },
  {
    id: 3,
    badge: 'B2B',
    title: 'Crypto Trading Platform',
    desc: 'A multi-exchange automated trading system for professional traders featuring execution, risk management, copy-trading, and portfolio analytics.',
    features: ['Multi-account execution (CCXT)', 'Hyperliquid native support', 'TP/SL risk management', 'Position tracking', 'Copy-trading', 'Discord trade alerts', 'Trading dashboard', 'Public market data API', 'Privy wallet integration', 'Trader CRM'],
    techStack: 'Python/FastAPI · React/Vite · Go · CCXT · Hyperliquid SDK · PostgreSQL · Recharts · Framer Motion',
    repos: 'crypto-trading-bot · trading-bot-genesis · trading-bot-v2 · trading-bot-service · crypto-frontend · crm-public-api · crypto-crm',
    businessImpact: 'Trading firms, financial analysts, institutional partners.',
    strategy: 'Consolidated fragmented data spread across exchanges with scalable data pipelines.',
    role: 'BA'
  },
  {
    id: 4,
    badge: 'B2B',
    title: 'Commodities Analytics Dashboard',
    desc: 'A real-time commodities analytics dashboard for traders providing gold, silver, and forex market data alongside open interest signals and prediction markets.',
    features: ['Live gold / silver prices', 'Open Interest analytics', 'MetaTrader data feed', 'Backtesting notebooks', 'Polymarket integration', 'Price alerts', 'Interactive charting', 'Swagger API docs'],
    techStack: 'Go/Fiber · React/Vite · shadcn/ui · Tailwind · MetaTrader API · Jupyter notebooks · PostgreSQL',
    repos: 'studio-frontend · studio-backend · frontend-co · metatrader-service · polymarket-integration',
    businessImpact: 'Trading firms seeking advanced quantitative analytics.',
    strategy: 'Provided low-latency updates and AI-assisted custom analytics for different user roles.',
    role: 'BA'
  },
  {
    id: 6,
    badge: 'INFRA',
    title: 'Core Financial Data Layer',
    desc: 'A core financial data aggregation layer that normalizes multi-source market feeds into a unified platform for all products.',
    features: ['Multi-source market data ingestion', 'Crypto on-chain data', 'Stock & gold feeds', 'Scheduled cron pipelines', 'Backtesting & strategy analysis', 'TimescaleDB time-series', 'Analytics API', 'Data visualization UI'],
    techStack: 'Go · Python · Jupyter notebooks · MySQL · TimescaleDB · PlanetScale · React/Vite',
    repos: 'data-backend · data-legacy · cronjob-source · analytic-backend · data-frontend',
    businessImpact: 'Provides a single source of truth for all enterprise trading algorithms.',
    strategy: 'Normalized data fragmentation across multiple capital market data providers.',
    role: 'PM'
  },
  {
    id: 7,
    badge: 'INTERNAL',
    title: 'Chatbot Analytics Dashboard',
    desc: 'A post-hoc performance analysis tool for AI chatbot usage, measuring engagement, intent themes, token costs, and knowledge gaps from chat logs.',
    features: ['Volume & DAU/MAU metrics', 'Conversation depth analysis', '13-theme intent breakdown', 'Drop-off funnel', 'Token cost calculator', 'Sentiment scoring', 'Knowledge gap detection', 'Thai / EN keyword analysis'],
    techStack: 'Standalone HTML · Inline SVG charts · Node.js analysis scripts · JSON metrics pipeline (zero dependencies)',
    repos: 'chatbot-dashboard (local)',
    businessImpact: 'Internal ops and AI product teams evaluating model performance.',
    strategy: 'Created an offline-first, dependency-free dashboard for highly secure data analysis.',
    role: 'PM & dev'
  },
  {
    id: 8,
    badge: 'INTERNAL',
    title: 'Backoffice & Ops',
    desc: 'An internal management layer providing unified admin, CRM, and web presence across all products.',
    features: ['User & account management', 'Internal reporting', 'Cross-product CRM', 'Marketing website', 'Leaderboard', 'AI system inspection'],
    techStack: 'Go/Fiber · Next.js · TypeScript · Tailwind',
    repos: 'backoffice-frontend · backoffice-backend · web-backend · web-crm · web-next · leaderboard-frontend · ai-inspector-frontend',
    businessImpact: 'Internal teams and business operators.',
    strategy: 'Consolidated scattered tools and missed updates into a single source of truth.',
    role: 'PM & dev'
  },
  {
    id: 9,
    badge: 'INFRA',
    title: 'Agentic AI Layer',
    desc: 'A shared AI agent framework powering autonomous workflows across trading bots and content products.',
    features: ['LangGraph orchestration', 'Prompt versioning', 'Social signal processing', 'LLM fine-tuning', 'Hackathon agent variants'],
    techStack: 'Python · LangGraph · FastAPI · PostgreSQL · Redis',
    repos: 'agentic-ai · agent-llm · hackathon-variant · prompt-version',
    businessImpact: 'Enterprise AI teams deploying multi-step autonomous actions.',
    strategy: 'Abstracted prompt engineering and LLM orchestration into a centralized service.',
    role: 'PM'
  },
  {
    id: 10,
    badge: 'INFRA',
    title: 'Platform Infrastructure',
    desc: 'A shared infrastructure layer managing database migrations, container orchestration, and notification routing for all products.',
    features: ['DB schema migrations', 'Terraform IaC', 'Event notification routing', 'Load testing', 'Copy-trade infrastructure'],
    techStack: 'HCL / Terraform · PLpgSQL · Go · Docker / Kubernetes · Python',
    repos: 'migration · cronjob-data-source · metatrader-service',
    businessImpact: 'DevOps and platform engineering organizations.',
    strategy: 'Established a mission-critical digital backbone driving internal business operations.',
    role: 'PM'
  },
  {
    id: 11,
    badge: 'B2B',
    title: 'Thai NLP & Sentiment Analysis',
    desc: 'A premier social media tracking platform tailored for capital markets, analyzing real-time sentiment and providing actionable insights.',
    features: ['Real-time sentiment tracking', 'Investor insights dashboard', 'Social media aggregation'],
    techStack: 'Python · Natural Language Processing · React',
    repos: 'nlp-sentiment-core · market-tracker-web',
    businessImpact: 'Secured strategic collaborations with listed companies and brokerage firms.',
    strategy: 'Bridged the gap between real-time social sentiment and actionable capital market insights.',
    role: 'PM'
  },
  {
    id: 12,
    badge: 'B2C',
    title: 'LLM-Powered IR Assistant',
    desc: 'An advanced financial inquiry chatbot that bridges the gap between complex market data and retail investors.',
    features: ['Financial inquiry parsing', 'Market data integration', 'Conversational UX'],
    techStack: 'LLMs · Python · Conversational AI Framework',
    repos: 'ir-assistant-backend · chat-widget-ui',
    businessImpact: 'Retail investors and enterprise financial institutions.',
    strategy: 'Made complex financial data instantly accessible and conversational.',
    role: 'PM'
  },
  {
    id: 13,
    badge: 'INTERNAL',
    title: 'Enterprise HR & Ops Tools',
    desc: 'A secure, serverless digital form infrastructure built efficiently with AI code generation, replacing outdated paper-based HR processes.',
    features: ['Automated Check-ins & Daily Digests', 'KPI Tracking & Org Dashboard', 'Kanban Task & Project Boards', 'HR Requests & Approval Workflows', 'Performance & Role Management', 'Company Announcements & Push Sync'],
    techStack: 'Serverless Functions · React · Document Generation',
    repos: 'hr-portal-web · compliance-routing-service',
    businessImpact: 'Enterprise HR teams with high-volume recruitment/certification.',
    strategy: 'Eliminates paper delays, data entry errors, and filing issues.',
    role: 'PM & dev'
  },
  {
    id: 14,
    badge: 'B2B',
    title: 'Stock Analysis Platform',
    desc: 'A market summary and stock alert system providing market-breadth snapshots, top movers, and historical signal reliability.',
    features: ['Market Summary (Daily Overview, Top Movers)', 'Advancer/Decliner Distribution (13-band buckets)', 'Top Turnover Float ranking', 'Stock Alert Detection & Stats (RRR, Expected Return)', 'Alert Plots (Avg return curve, SD bands)', 'Multi-timeframe OHLCV Data'],
    techStack: 'Go/Fiber · GORM · Swagger · MySQL · TimescaleDB · PostgreSQL · Parquet · Python · Jupyter · React/Vite · TypeScript · Recharts · TanStack Query',
    repos: 'cronjob-data-source · datastation-legacy · analytic-backend',
    businessImpact: 'Equips traders and analysts with actionable insights into market breadth and signal reliability.',
    strategy: 'Aggregated complex OHLCV data and alert signals into a visual React dashboard with an optimized Go backend.',
    role: 'PM'
  }
];
