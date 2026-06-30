import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: 'Financial & Trading Platform',
    desc: 'An AI-accelerated live market data hub aggregating stock prices, gold, and cryptocurrency feeds. Engineered utilizing AI coding agents for rapid development, it provides low-latency updates, robust charting, and AI-assisted custom analytics for different user roles.',
    metaText: 'Think of it as a Bloomberg-style data hub, built in-house with AI copilots, connecting multiple market sources into one place. Different teams each see the view relevant to them, backed by scalable data pipelines.',
    forWho: 'Trading firms, financial analysts, institutional partners.',
    problem: 'Fragmented data spread across exchanges and spreadsheets, with no single source of truth.',
  },
  {
    id: 2,
    title: 'AI Product Suite',
    desc: 'A highly scalable family of standalone AI-powered tools built to tackle diverse business problems. These tools share a unified underlying infrastructure, leveraging intelligent LLM orchestration, flexible UI layers, and seamless model swapping to stay future-proof.',
    features: [
      { name: 'AI Chatbot', desc: 'Handles conversations with autonomous routing & analytics (TH/EN).' },
      { name: 'AI Inspector', desc: 'Automated auditing of AI-generated content before deployment.' },
      { name: 'AI Image Generator', desc: 'Custom frontend for generating targeted marketing assets.' },
      { name: 'Agentic AI', desc: 'Automation layer for multi-step autonomous actions.' },
      { name: 'Social AI Agent', desc: 'Autonomous X (Twitter) content generation and curation.' },
    ],
    forWho: 'Businesses wanting to automate repetitive tasks, content, or support.',
    problem: 'Excessive manual work in areas where AI can operate faster and at scale.',
  },
  {
    id: 3,
    title: 'Consumer Apps (LINE-Native)',
    desc: 'Engaging, AI-native digital products for Thai consumers delivered friction-free inside the LINE ecosystem. Developed entirely with AI engineering workflows, these apps integrate seamlessly with PromptPay webhooks for instant monetization.',
    features: [
      { name: 'Astrology App', desc: 'AI-powered personalized readings with CRM and data layer.' },
      { name: 'AI Palm Reading', desc: 'Computer vision & LLM pipeline to provide instant reading behind a 33฿ PromptPay wall.' },
      { name: '3-Card Tarot', desc: 'AI-generated Past/Present/Future readings inside LINE.' },
    ],
    forWho: 'Thai consumers interested in astrology and self-discovery.',
    problem: 'Delivers instant, private, on-demand readings powered by LLMs, bypassing physical visits or costly subscriptions.',
  },
  {
    id: 4,
    title: 'Bilingual E-commerce Platform',
    desc: 'A robust, unified storefront built and scaled using AI development tools, serving both Thai and international buyers from a single headless codebase. Features AI-driven localization, multi-currency display, and dynamic regional pricing.',
    metaText: 'Includes an admin dashboard for order management and an automated, AI-assisted pipeline that moves orders to fulfillment with minimal manual touchpoints.',
    forWho: 'Thai retail businesses selling locally and globally.',
    problem: 'Eliminates the need for two separate sites to handle dual languages and global checkouts.',
  },
  {
    id: 5,
    title: 'Enterprise HR & Ops Tools',
    desc: 'A secure, serverless digital form infrastructure built efficiently with AI code generation, replacing outdated paper-based HR processes. Focuses on compliance, AI-automated approval routing, and maintaining strict audit trails.',
    metaText: 'Features bilingual job applications and internal certificate requests, designed to deploy instantly. Reduces processing time from days to hours using intelligent automation.',
    forWho: 'Enterprise HR teams with high-volume recruitment/certification.',
    problem: 'Eliminates paper delays, data entry errors, and filing issues.',
  },
  {
    id: 6,
    title: 'Internal Platform & Infrastructure',
    desc: 'The mission-critical digital backbone driving internal business operations. Architected with the assistance of AI dev tools, it seamlessly connects CRM workflows, automated alert systems, and real-time observability across all AI product lines.',
    features: [
      { name: 'Work-OS', desc: 'Custom RBAC platform for daily check-ins and AI-assisted task workflows.' },
      { name: 'Corporate Site & CRM', desc: 'Lead tracking and intelligent client interaction system.' },
      { name: 'Notification Service', desc: 'Shared alert backbone across all products via LINE.' },
      { name: 'Prediction Market', desc: 'Web forecasting platform driving event engagement.' },
    ],
    forWho: 'Internal teams and business operators.',
    problem: 'Consolidates scattered tools and missed updates into a single source of truth.',
  }
];

const coreCapabilities = [
  {
    id: 'pm',
    title: 'Product Management & Ownership',
    desc: 'Demonstrated success as a Senior Product Owner and AI Product Manager. I specialize in overseeing the end-to-end lifecycle of complex digital products and B2B SaaS platforms, ensuring alignment between business goals and technical delivery.',
  },
  {
    id: 'ai',
    title: 'AI Strategy & Engineering',
    desc: 'Extensive expertise in operationalizing artificial intelligence. I design robust AI product strategies, develop Retrieval-Augmented Generation (RAG) pipelines, and seamlessly integrate advanced LLM APIs (Gemini, OpenAI) into enterprise workflows.',
  },
  {
    id: 'ux',
    title: 'UI/UX Architecture',
    desc: 'Strong foundation in conceptualizing and architecting intuitive user experiences. I bridge the critical gap between design and engineering using advanced Figma workflows, rapid prototyping, and system-driven design principles.',
  },
  {
    id: 'auto',
    title: 'Workflow Automation',
    desc: 'Proven ability to architect and implement highly efficient automated workflows. I streamline complex operational processes within SaaS products and internal organizations, reducing manual overhead and minimizing errors.',
  },
  {
    id: 'infra',
    title: 'Web Infrastructure & Deployment',
    desc: 'Solid technical acumen in modern cloud hosting and deployment architectures. I am highly proficient in navigating and leveraging platforms like AWS, Vercel, and Cloudflare to establish scalable CI/CD pipelines and reliable infrastructure.',
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1
    } 
  }
};

export default function App() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [expandedCapability, setExpandedCapability] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    const sections = ['workflow', 'portfolio', 'value'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const toggleDetails = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const toggleCapability = (id: string) => {
    setExpandedCapability(prev => (prev === id ? null : id));
  };

  return (
    <div className="main-layout">
      <aside className="sidebar">
        <div>
          <span className="profile-badge">AI Product Manager</span>
          <h1 className="hero-title">Thanaphat (Jay)<br /><span>Oungprasertporn</span></h1>
          <p className="bio-text">
            I guide digital products from initial concept to successful launch. By integrating AI into the product lifecycle, I accelerate planning, streamline development, and deliver high-impact solutions with precision.
          </p>
          <div className="nav-links">
            <a href="#workflow" className={`contact-item ${activeSection === 'workflow' ? 'active' : ''}`}>How I Work</a>
            <a href="#portfolio" className={`contact-item ${activeSection === 'portfolio' ? 'active' : ''}`}>Products</a>
            <a href="#value" className={`contact-item ${activeSection === 'value' ? 'active' : ''}`}>Capabilities</a>
          </div>
        </div>

        <div className="contact-stack">
          <a href="mailto:thanaphat.oun@gmail.com" className="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            thanaphat.oun@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/thanaphat-oun/" target="_blank" rel="noreferrer" className="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            LinkedIn
          </a>
        </div>

        <div className="tech-stack-footer">
          <p>Built with <strong>Google AI Studio</strong></p>
          <p>Using <strong>React</strong> &amp; <strong>TypeScript</strong></p>
          <p>Hosted on <strong>Netlify</strong></p>
        </div>
      </aside>

      <main className="content-pane">
        <motion.section 
          id="workflow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.span variants={itemVariants} className="section-label">How I Work: Methodology & Approach</motion.span>
          <div className="workflow-row">
            <motion.div variants={itemVariants} className="workflow-item">
              <h4>Documentation & Design</h4>
              <ul>
                <li>Comprehensive SRS authoring</li>
                <li>Strategic user journey mapping</li>
                <li>High-fidelity wireframing (Figma)</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="workflow-item">
              <h4>Commercial Strategy</h4>
              <ul>
                <li>Revenue and pricing modeling</li>
                <li>Strategic partnership proposals</li>
                <li>Competitive gap analysis</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="workflow-item">
              <h4>Execution & Delivery</h4>
              <ul>
                <li>Agile software management</li>
                <li>Cross-functional team alignment</li>
                <li>Structured workflows (ClickUp, Jira)</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="workflow-item">
              <h4>Consultative Leadership</h4>
              <ul>
                <li>Technology partnership negotiations</li>
                <li>Business-to-engineering translation</li>
                <li>Acting as a strategic technical co-founder</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="portfolio" 
          className="flex flex-col grow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.span variants={itemVariants} className="section-label">Product Portfolio</motion.span>
          <div className="portfolio-grid">
            {projects.map((project) => (
              <motion.div variants={itemVariants} className={`project-card ${expandedId === project.id ? 'active' : ''}`} key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                
                <div className={`project-details ${expandedId === project.id ? 'active' : ''}`}>
                  {project.metaText && (
                    <p className="meta-text" style={{ marginBottom: '1rem' }}>{project.metaText}</p>
                  )}
                  
                  {project.features && (
                    <div className="project-features">
                      {project.features.map((item, idx) => (
                        <div key={idx} className="feature-item">
                          <span className="feature-name">{item.name}</span>
                          <span className="feature-desc">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="meta-group">
                    <div className="meta-label">Who it's for</div>
                    <div className="meta-text">{project.forWho}</div>
                  </div>
                  <div className="meta-group">
                    <div className="meta-label">Problem it solves</div>
                    <div className="meta-text">{project.problem}</div>
                  </div>
                </div>
                
                <button className="btn-toggle" onClick={() => toggleDetails(project.id)}>
                  {expandedId === project.id ? 'Close Details' : 'View Details'}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="value"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.span variants={itemVariants} className="section-label">Capabilities: Core Expertise</motion.span>
          <div className="capabilities-row">
            {coreCapabilities.map((cap) => (
              <motion.div 
                key={cap.id}
                variants={itemVariants} 
                className={`workflow-item clickable ${expandedCapability === cap.id ? 'active' : ''}`} 
                style={{flex: '1 1 200px', cursor: 'pointer'}}
                onClick={() => toggleCapability(cap.id)}
              >
                <div className="capability-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ margin: 0 }}>{cap.title}</h4>
                  <span className="expand-icon" style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: 1 }}>{expandedCapability === cap.id ? '−' : '+'}</span>
                </div>
                {expandedCapability === cap.id && (
                  <p className="capability-desc" style={{ marginTop: '12px' }}>{cap.desc}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
