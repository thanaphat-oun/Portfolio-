import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    type: 'Product',
    title: 'Thai NLP & Sentiment Analysis Platform',
    desc: 'Built a premier social media tracking platform tailored for the capital markets.',
    metaText: 'Integrated an AI chatbot assistant to deliver real-time investor insights directly to users.',
    forWho: 'Secured strategic collaborations with listed companies and brokerage firms.',
    problem: 'Bridged the gap between real-time social sentiment and actionable capital market insights.',
  },
  {
    id: 2,
    type: 'Product',
    title: 'High-Velocity Consumer Chatbot',
    desc: 'Managed a high-engagement consumer-facing chatbot from initial concept to full market launch.',
    metaText: 'Utilized astrological data cycles to drive user retention.',
    forWho: 'Implemented rapid development workflows (using v.0, Lovable, Google AI Studio) to ship landing pages and automated CRM systems.',
    problem: 'Accelerated MVP delivery and created scalable retention hooks in the consumer app space.',
  },
  {
    id: 3,
    type: 'Product',
    title: 'LLM-Powered Investor Relations Assistant',
    desc: 'Deployed an advanced financial inquiry chatbot to bridge the gap between complex market data and retail investors.',
    metaText: 'Defined the core product vision and strategic direction to identify key digital transformation opportunities in fintech.',
    forWho: 'Retail investors and enterprise financial institutions.',
    problem: 'Made complex financial data instantly accessible and conversational.',
  },
  {
    id: 4,
    type: 'Product',
    title: 'E-commerce Marketplace Platform',
    desc: 'A robust, scalable marketplace platform engineered with AI development tools, delivering a fully-featured, dual-language experience. Features multi-vendor capabilities, AI-driven localization, seamless checkout, and dynamic regional pricing.',
    metaText: 'Includes an admin dashboard for vendor and order management, and an automated, AI-assisted pipeline that moves orders to fulfillment with minimal manual touchpoints.',
    forWho: 'Retail businesses and entrepreneurs looking to launch a multi-vendor marketplace.',
    problem: 'Eliminates the complexity of building a multi-vendor platform from scratch by providing a robust, scalable foundation with advanced AI integrations.',
    link: 'http://mu.astroneko.com/',
  },
  {
    id: 5,
    type: 'Product',
    title: 'Financial & Trading Platform',
    desc: 'An AI-accelerated live market data hub aggregating stock prices, gold, and cryptocurrency feeds. Engineered utilizing AI coding agents for rapid development, it provides low-latency updates, robust charting, and AI-assisted custom analytics for different user roles.',
    metaText: 'Think of it as a Bloomberg-style data hub, built in-house with AI copilots, connecting multiple market sources into one place. Different teams each see the view relevant to them, backed by scalable data pipelines.',
    forWho: 'Trading firms, financial analysts, institutional partners.',
    problem: 'Fragmented data spread across exchanges and spreadsheets, with no single source of truth.',
  },
  {
    id: 6,
    type: 'Product',
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
    id: 7,
    type: 'Product',
    title: 'Enterprise HR & Ops Tools',
    desc: 'A secure, serverless digital form infrastructure built efficiently with AI code generation, replacing outdated paper-based HR processes. Focuses on compliance, AI-automated approval routing, and maintaining strict audit trails.',
    metaText: 'Features bilingual job applications and internal certificate requests, designed to deploy instantly. Reduces processing time from days to hours using intelligent automation.',
    forWho: 'Enterprise HR teams with high-volume recruitment/certification.',
    problem: 'Eliminates paper delays, data entry errors, and filing issues.',
  },
  {
    id: 8,
    type: 'Product',
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
    id: 'ai',
    title: 'AI & Technical Architecture',
    desc: 'Thai NLP, Sentiment Analysis platforms, LLM Integration, RAG Architecture, and AI Agent Design.',
  },
  {
    id: 'rapid',
    title: 'Rapid Prototyping ("Vibe Coding")',
    desc: 'High-velocity MVP development utilizing v.0, Lovable, and Google AI Studio.',
  },
  {
    id: 'strategy',
    title: 'Product Strategy & Execution',
    desc: 'Product Roadmaps, Go-To-Market (GTM) execution, Market Entry, Agile/Scrum, and Cross-functional Leadership.',
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

const MBTIBar = ({ left, right, percent }: { left: string, right: string, percent: number }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 600 }}>
      <span style={{ color: percent >= 50 ? 'var(--text)' : 'var(--muted)' }}>{left}</span>
      <span style={{ color: percent < 50 ? 'var(--text)' : 'var(--muted)' }}>{right}</span>
    </div>
    <div style={{ height: '8px', background: 'var(--bg)', borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
      <div style={{ width: `${percent}%`, background: '#64748b' /* Slate 500 */ }}></div>
      <div style={{ width: `${100 - percent}%`, background: 'rgba(255,255,255,0.05)' }}></div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--muted)' }}>
      <span>{percent}%</span>
      <span>{100 - percent}%</span>
    </div>
  </div>
);

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

    const sections = ['hero', 'value', 'portfolio', 'workflow'];
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
      <header className="top-nav">
        <div className="nav-logo">
          <span className="profile-badge">AI Product Manager</span>
        </div>
        <div className="nav-links">
          <a href="#hero" className={`contact-item ${activeSection === 'hero' ? 'active' : ''}`}>Profile</a>
          <a href="#value" className={`contact-item ${activeSection === 'value' ? 'active' : ''}`}>Core Expertise</a>
          <a href="#portfolio" className={`contact-item ${activeSection === 'portfolio' ? 'active' : ''}`}>Products</a>
          <a href="#workflow" className={`contact-item ${activeSection === 'workflow' ? 'active' : ''}`}>How I Work</a>
        </div>
      </header>

      <main className="content-pane">
        <motion.section 
          id="hero"
          className="hero-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.h1 variants={itemVariants} className="hero-title">Thanaphat Oungprasertporn<br /><span>AI-Native Product Manager & Fintech Specialist</span></motion.h1>
          <motion.p variants={itemVariants} className="bio-text">
            Building high-velocity MVPs, conversational AI engines, and capital market sentiment platforms with 5+ years of product leadership.
          </motion.p>
          <motion.div variants={itemVariants} className="contact-stack">
            <a href="mailto:thanaphat.oun@gmail.com" className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              thanaphat.oun@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/thanaphat-oun/" target="_blank" rel="noreferrer" className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
          </motion.div>
        </motion.section>

        <motion.section 
          id="personality"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.span variants={itemVariants} className="section-label">Personality Profile</motion.span>
          <motion.div variants={itemVariants} className="personality-card" style={{ background: 'var(--surface)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)', maxWidth: '600px' }}>
            <h3 style={{ color: '#94a3b8', margin: '0 0 8px 0', fontSize: '18px' }}>ESTJ-T: The Executive</h3>
            <p style={{ color: 'var(--muted)', margin: '0 0 24px 0', fontStyle: 'italic', fontSize: '14px', lineHeight: '1.6' }}>"Order, efficiency, and a relentless drive for structural perfection."</p>
            
            <div className="mbti-bars" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <MBTIBar left="Extraverted" right="Introverted" percent={58} />
              <MBTIBar left="Sensing" right="Intuitive" percent={70} />
              <MBTIBar left="Thinking" right="Feeling" percent={80} />
              <MBTIBar left="Judging" right="Perceiving" percent={75} />
              <MBTIBar left="Turbulent" right="Assertive" percent={60} />
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="value"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.span variants={itemVariants} className="section-label">Core Expertise & Technical Matrix</motion.span>
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

        <motion.section 
          id="portfolio" 
          className="flex flex-col grow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.span variants={itemVariants} className="section-label">Products</motion.span>
          <div className="portfolio-grid">
            {projects.map((project) => (
              <motion.div variants={itemVariants} className={`project-card ${expandedId === project.id ? 'active' : ''}`} key={project.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', fontWeight: 600, background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>{project.type}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3>
                    {project.title}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" style={{ marginLeft: '10px', fontSize: '14px', color: 'var(--accent)', textDecoration: 'none' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginBottom: '2px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    )}
                  </h3>
                </div>
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
                    <div className="meta-label">Business Impact / Execution</div>
                    <div className="meta-text">{project.forWho}</div>
                  </div>
                  <div className="meta-group">
                    <div className="meta-label">The Strategy</div>
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

        <footer className="tech-stack-footer">
          <p>Built with <strong>Google AI Studio</strong></p>
          <p>Using <strong>React</strong> &amp; <strong>TypeScript</strong></p>
          <p>Designed for <strong>Mobile Responsiveness</strong></p>
          <p>Hosted on <strong>Netlify</strong></p>
        </footer>
      </main>
    </div>
  );
}
