import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { projects } from './projectsData';

const coreCapabilities = [
  {
    id: 'ai',
    title: 'AI & Technical Architecture',
    desc: 'Expertise in architecting robust digital products powered by artificial intelligence. Deep experience developing Thai NLP engines, financial sentiment analysis platforms, and Retrieval-Augmented Generation (RAG) pipelines. Proven ability to design autonomous AI agents and seamlessly integrate advanced LLMs (Gemini, OpenAI) into mission-critical enterprise workflows.',
  },
  {
    id: 'rapid',
    title: 'Rapid Prototyping ("Vibe Coding")',
    desc: 'Specialized in high-velocity MVP development and iterative prototyping. Proficient in utilizing modern AI-assisted development tools like v.0, Lovable, and Google AI Studio to accelerate time-to-market. Capable of translating abstract product concepts into functional, interactive applications at unprecedented speeds to validate market fit early.',
  },
  {
    id: 'strategy',
    title: 'Product Strategy & Execution',
    desc: 'Comprehensive end-to-end product leadership. Skilled in crafting strategic product roadmaps, orchestrating Go-To-Market (GTM) launches, and identifying lucrative market entry opportunities. Strong background in Agile/Scrum methodologies and cross-functional leadership, consistently aligning engineering delivery with overarching business objectives.',
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
  const [isPersonalityExpanded, setIsPersonalityExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter ? projects.filter(p => p.badge === activeFilter) : projects;

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

  return (
    <div className="main-layout">
      <header className="top-nav">
        <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontWeight: 600, fontSize: '18px', letterSpacing: '0.02em', color: 'var(--text)' }}>Thanaphat (Jay)</span>
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
          viewport={{ once: true, amount: 0 }}
          variants={sectionVariants}
        >
          <motion.h1 variants={itemVariants} className="hero-title">Thanaphat (Jay) Oungprasertporn<br /><span>AI-Native Product Manager</span></motion.h1>
          <motion.p variants={itemVariants} className="bio-text">
            Building high-velocity MVPs, conversational AI engines, and capital market sentiment platforms with 5+ years of product leadership.
          </motion.p>
          <motion.div variants={itemVariants} className="contact-stack">
            <a href="tel:086-777-2951" className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              086-777-2951
            </a>
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
          id="value"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={sectionVariants}
        >
          <motion.span variants={itemVariants} className="section-label">Core Expertise & Technical Matrix</motion.span>
          <div className="capabilities-row">
            {coreCapabilities.map((cap) => (
              <motion.div 
                key={cap.id}
                variants={itemVariants} 
                className="workflow-item" 
                style={{flex: '1 1 200px'}}
              >
                <div className="capability-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ margin: 0 }}>{cap.title}</h4>
                </div>
                <p className="capability-desc" style={{ marginTop: '12px', color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6' }}>{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="portfolio" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={sectionVariants}
        >
          <motion.div variants={itemVariants} className="portfolio-legend">
            <div 
              className={`portfolio-legend-item ${activeFilter === null ? 'active' : ''}`}
              onClick={() => setActiveFilter(null)}
            >
              All Products
            </div>
            <div 
              className={`portfolio-legend-item ${activeFilter === 'B2C' ? 'active' : ''}`}
              onClick={() => setActiveFilter(activeFilter === 'B2C' ? null : 'B2C')}
            >
              <span className="badge badge-B2C">B2C</span> Consumer product
            </div>
            <div 
              className={`portfolio-legend-item ${activeFilter === 'B2B' ? 'active' : ''}`}
              onClick={() => setActiveFilter(activeFilter === 'B2B' ? null : 'B2B')}
            >
              <span className="badge badge-B2B">B2B</span> Business / trader tool
            </div>
            <div 
              className={`portfolio-legend-item ${activeFilter === 'INTERNAL' ? 'active' : ''}`}
              onClick={() => setActiveFilter(activeFilter === 'INTERNAL' ? null : 'INTERNAL')}
            >
              <span className="badge badge-INTERNAL">INTERNAL</span> Ops & backoffice
            </div>
            <div 
              className={`portfolio-legend-item ${activeFilter === 'INFRA' ? 'active' : ''}`}
              onClick={() => setActiveFilter(activeFilter === 'INFRA' ? null : 'INFRA')}
            >
              <span className="badge badge-INFRA">INFRA</span> Platform & data layer
            </div>
          </motion.div>
          
          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`badge badge-${project.badge}`}>{project.badge}</span>
                </div>
                {project.role && (
                  <div className="project-role">
                    Role: <span>{project.role}</span>
                  </div>
                )}
                <p>{project.desc}</p>
                
                <div className="project-section-title">Features</div>
                <div className="project-features">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                {(project.businessImpact || project.strategy) && (
                  <div className="project-impact-strategy">
                    {project.businessImpact && (
                      <div className="impact-block">
                        <div className="project-section-title">Business Impact</div>
                        <div className="project-text">{project.businessImpact}</div>
                      </div>
                    )}
                    {project.strategy && (
                      <div className="impact-block">
                        <div className="project-section-title">Strategy</div>
                        <div className="project-text">{project.strategy}</div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="project-section-title">Tech Stack</div>
                <div className="project-tech-tags">
                  {project.techStack.split(' · ').map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="workflow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={sectionVariants}
        >
          <motion.span variants={itemVariants} className="section-label">How I Work: Methodology & Approach</motion.span>
          <motion.div variants={itemVariants} className="workflow-diagram">
            {[
              { 
                title: 'Documentation & Design', 
                items: ['Comprehensive SRS authoring', 'Strategic user journey mapping', 'High-fidelity wireframing (Figma)'] 
              },
              { 
                title: 'Commercial Strategy', 
                items: ['Revenue and pricing modeling', 'Strategic partnership proposals', 'Competitive gap analysis'] 
              },
              { 
                title: 'Execution & Delivery', 
                items: ['Agile software management', 'Cross-functional team alignment', 'Structured workflows (ClickUp, Jira)'] 
              },
              { 
                title: 'Consultative Leadership', 
                items: ['Technology partnership negotiations', 'Business-to-engineering translation'] 
              },
            ].map((step, index, array) => (
              <React.Fragment key={index}>
                <div className="workflow-item workflow-step">
                  <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--accent)', marginBottom: '8px', letterSpacing: '0.1em' }}>STEP 0{index + 1}</div>
                  <h4>{step.title}</h4>
                  <ul>
                    {step.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                {index < array.length - 1 && (
                  <div className="workflow-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          id="personality"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={sectionVariants}
        >
          <motion.div 
            variants={itemVariants} 
            className="personality-card clickable" 
            style={{ background: 'var(--surface)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)', width: '100%', cursor: 'pointer' }}
            onClick={() => setIsPersonalityExpanded(!isPersonalityExpanded)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: isPersonalityExpanded ? '16px' : '0' }}>
              <h3 style={{ color: '#94a3b8', margin: '0', fontSize: '16px', fontWeight: 500 }}>Personality Profile: ESTJ-T</h3>
              <span style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: 1 }}>{isPersonalityExpanded ? '−' : '+'}</span>
            </div>
            
            {isPersonalityExpanded && (
              <div className="mbti-bars" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <MBTIBar left="Extraverted" right="Introverted" percent={58} />
                <MBTIBar left="Sensing" right="Intuitive" percent={70} />
                <MBTIBar left="Thinking" right="Feeling" percent={80} />
                <MBTIBar left="Judging" right="Perceiving" percent={75} />
                <MBTIBar left="Turbulent" right="Assertive" percent={60} />
              </div>
            )}
          </motion.div>
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
