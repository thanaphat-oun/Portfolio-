import React, { useState } from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: 'Financial & Trading Platform',
    desc: 'A live market data hub collecting stock prices, gold, and crypto into clean dashboards for rapid decision-making.',
    metaText: 'Think of it as a Bloomberg-style data hub, built in-house, connecting multiple market sources into one place. Different teams each see the view relevant to them.',
    forWho: 'Trading firms, financial analysts, institutional partners.',
    problem: 'Fragmented data spread across exchanges and spreadsheets, with no single source of truth.',
  },
  {
    id: 2,
    title: 'AI Product Suite',
    desc: 'A family of standalone AI-powered tools built for different business problems, sharing the same underlying infrastructure.',
    features: [
      { name: 'AI Chatbot', desc: 'Handles conversations with analytics (TH/EN).' },
      { name: 'AI Inspector', desc: 'Audits AI-generated content before deployment.' },
      { name: 'AI Image Generator', desc: 'Custom frontend for generating images.' },
      { name: 'Agentic AI', desc: 'Automation layer for multi-step autonomous actions.' },
      { name: 'Social AI Agent', desc: 'Automated X (Twitter) content generation.' },
    ],
    forWho: 'Businesses wanting to automate repetitive tasks, content, or support.',
    problem: 'Excessive manual work in areas where AI can operate faster and at scale.',
  },
  {
    id: 3,
    title: 'Consumer Apps (LINE-Native)',
    desc: 'Paid digital products for Thai consumers delivered friction-free inside LINE via PromptPay.',
    features: [
      { name: 'Astrology App', desc: 'AI-powered readings with CRM and data layer.' },
      { name: 'AI Palm Reading', desc: 'Photo upload to instant reading behind a 33฿ PromptPay wall.' },
      { name: '3-Card Tarot', desc: 'Digital Past/Present/Future readings inside LINE.' },
    ],
    forWho: 'Thai consumers interested in astrology and self-discovery.',
    problem: 'Delivers instant, private, on-demand readings, bypassing physical visits or costly subscriptions.',
  },
  {
    id: 4,
    title: 'Bilingual E-commerce Platform',
    desc: 'A unified storefront serving Thai and international buyers from a single codebase.',
    metaText: 'Includes an admin dashboard for order management and an automated pipeline that moves orders to fulfillment with minimal manual touchpoints.',
    forWho: 'Thai retail businesses selling locally and globally.',
    problem: 'Eliminates the need for two separate sites to handle dual languages and global checkouts.',
  },
  {
    id: 5,
    title: 'Enterprise HR & Ops Tools',
    desc: 'Serverless digital form infrastructure replacing paper-based HR processes for a large healthcare company.',
    metaText: 'Features bilingual job applications and internal certificate requests, designed to deploy instantly without complex IT setup.',
    forWho: 'Enterprise HR teams with high-volume recruitment/certification.',
    problem: 'Eliminates paper delays, data entry errors, and filing issues.',
  },
  {
    id: 6,
    title: 'Internal Platform & Infrastructure',
    desc: 'The digital backbone running business operations, from CRM to automated alert systems.',
    features: [
      { name: 'Work-OS', desc: 'Custom RBAC platform for daily check-ins and task workflows.' },
      { name: 'Corporate Site & CRM', desc: 'Lead tracking and client interaction system.' },
      { name: 'Notification Service', desc: 'Shared alert backbone across all products via LINE.' },
      { name: 'Prediction Market', desc: 'Web forecasting platform driving event engagement.' },
    ],
    forWho: 'Internal teams and business operators.',
    problem: 'Consolidates scattered tools and missed updates into a single source of truth.',
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

  const toggleDetails = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="main-layout">
      <aside className="sidebar">
        <div>
          <span className="profile-badge">AI Product Manager</span>
          <h1 className="hero-title">Thanaphat (Jay)<br /><span>Oungprasertporn</span></h1>
          <p className="bio-text">
            I build digital products — from first idea to live users. I leverage AI tools throughout the entire lifecycle to plan, build, review, and ship faster and more accurately.
          </p>
          <div className="nav-links">
            <a href="#workflow" className="contact-item">How I Work</a>
            <a href="#portfolio" className="contact-item">Products</a>
            <a href="#value" className="contact-item">Capabilities</a>
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
              <h4>Documentation & Structure</h4>
              <ul>
                <li>Extensive SRS mapping</li>
                <li>User journey map design</li>
                <li>Comprehensive wireframing</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="workflow-item">
              <h4>Commercial & Strategy</h4>
              <ul>
                <li>Revenue & pricing models</li>
                <li>Partnership proposals</li>
                <li>Competitor feature gap analysis</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="workflow-item">
              <h4>Organized Execution</h4>
              <ul>
                <li>Day-to-day software management</li>
                <li>Cross-functional task workflows</li>
                <li>Structured via ClickUp & Jira</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="workflow-item">
              <h4>Consultative Leadership</h4>
              <ul>
                <li>Tech partnership negotiations</li>
                <li>Business-to-tech architecture translation</li>
                <li>Acting as a strategic co-founder</li>
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
            <motion.div variants={itemVariants} className="workflow-item" style={{flex: '1 1 200px'}}>
              <h4>Product Management & Ownership</h4>
              <ul>
                <li>Senior Product Owner & AI PM</li>
                <li>End-to-end SaaS lifecycle</li>
                <li>Agency management expertise</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="workflow-item" style={{flex: '1 1 200px'}}>
              <h4>AI Strategy & Engineering</h4>
              <ul>
                <li>Generative AI & RAG pipelines</li>
                <li>LLM API integration (Gemini, OpenAI)</li>
                <li>AI product strategy design</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="workflow-item" style={{flex: '1 1 200px'}}>
              <h4>UI/UX Architecture</h4>
              <ul>
                <li>Wireframing & rapid prototyping</li>
                <li>Bridging design & engineering</li>
                <li>Figma & Code Connect workflows</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="workflow-item" style={{flex: '1 1 200px'}}>
              <h4>Workflow Automation</h4>
              <ul>
                <li>Internal agency automations</li>
                <li>SaaS workflow streamlining</li>
                <li>No-code/low-code integrations</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="workflow-item" style={{flex: '1 1 200px'}}>
              <h4>Web Infrastructure & Deployment</h4>
              <ul>
                <li>AWS, Vercel, Cloudflare, Netlify</li>
                <li>CI/CD pipelines & webhooks</li>
                <li>Cloud hosting management</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
