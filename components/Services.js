import {useState} from 'react'
import { SeoIcon, WebIcon, AiIcon, FeatureIcon } from './icons'

const DATA = {
  SEO: [
    {key:'programmatic',label:'Programmatic SEO',desc:'Scale reach with automated content and data-driven SEO.',features:['Automated page generation','Data-driven templates','Content pipelines','Sitemap automation']},
    {key:'technical',label:'Technical SEO',desc:'Improve speed, crawlability and Core Web Vitals.',features:['Performance audits','Sitemaps & schema','Crawl optimisation','Core Vitals fixes']},
    {key:'local',label:'Local SEO',desc:'Rank higher in local searches and maps.',features:['GMB setup','Local citations','Review strategy','Local pages']},
    {key:'ai-seo',label:'AI SEO',desc:'Optimize for AI search and generative assistants.',features:['Prompt-ready content','AI structured data','Overview snippets','Answer intents']},
    {key:'geo',label:'GEO/AEO Optimization',desc:'Geo-targeted content and AEO signals.',features:['Localized templates',' hreflang support','Regional analytics']},
    {key:'analytics',label:'Analytics',desc:'Dashboards and tracking to measure impact.',features:['Custom dashboards','Event tracking','Funnel analysis']},
    {key:'keywords',label:'Keyword Research',desc:'AI-assisted keyword discovery and clustering.',features:['Seed expansion','Intent mapping','Topic clusters']}
  ],
  Website: [
    {key:'custom',label:'Custom Website Development',desc:'Tailored websites built to business needs.',features:['Responsive builds','Performance-focused','SEO-friendly','Accessible']},
    {key:'uiux',label:'UI/UX Design',desc:'Modern interfaces that convert.',features:['Prototypes & testing','Design systems','Interaction design']},
    {key:'ecom',label:'Ecommerce Development',desc:'Robust online stores with smooth checkout.',features:['Product & cart UX','Payment integration','Inventory sync']},
    {key:'cms',label:'CMS Development',desc:'Flexible CMS setups for easy editing.',features:['Headless CMS','Custom fields','Role management']},
    {key:'api',label:'API Integration',desc:'Connect third-party services and CRMs.',features:['Webhook & sync','Auth & security','Rate limiting']},
    {key:'security',label:'Website Security',desc:'Protect your site with best practices.',features:['SSL & WAF','Regular audits','Patch management']},
    {key:'maintenance',label:'Maintenance',desc:'Ongoing maintenance and monitoring.',features:['Backups','Uptime monitoring','Performance tuning']}
  ],
  AI: [
    {key:'workflow',label:'AI Workflow Automation',desc:'Automate repetitive processes with AI.',features:['Orchestration','Scheduled runs','Error handling']},
    {key:'chatbots',label:'AI Chatbots',desc:'Customer-facing conversational agents.',features:['Multi-channel','NLP tuning','Contextual memory']},
    {key:'crm',label:'CRM Automation',desc:'Automate CRM workflows and lead routing.',features:['Lead scoring','Auto-sync','Task automation']},
    {key:'email',label:'Email Automation',desc:'Personalized email sequences at scale.',features:['Dynamic content','A/B testing','Deliverability']},
    {key:'agents',label:'AI Agents',desc:'Autonomous agents for tasks and agents orchestration.',features:['Task automation','Tool integration','Monitoring']},
    {key:'whatsapp',label:'WhatsApp Automation',desc:'WhatsApp flows and notifications.',features:['Template messages','Two-way flows','Opt-ins']},
    {key:'rag',label:'RAG Systems',desc:'Retrieval-Augmented Generation for knowledge-driven AI.',features:['Vector search','Knowledge connectors','Context windows']}
  ]
}

export default function Services(){
  const categories = Object.keys(DATA)
  const [category, setCategory] = useState('SEO')
  const [active, setActive] = useState(DATA['SEO'][0].key)

  const items = DATA[category]
  const activeItem = items.find(it=>it.key===active) || items[0]

  return (
    <section id="services" className="services-v2">
      <div className="container">
        <div className="hero-small">
          <h2>Digital Solutions For Modern Businesses</h2>
          <p className="sub">SEO, Website Development & AI Automation Services</p>
        </div>

        <div className="services-grid-v2">
          <nav className="left-menu">
            <div className="category-tabs">
              {categories.map(cat=> (
                <button key={cat} className={`cat-btn ${cat===category? 'active':''}`} onClick={()=>{setCategory(cat); setActive(DATA[cat][0].key)}}>
                  {cat==='SEO' && <SeoIcon style={{marginRight:8}} />}
                  {cat==='Website' && <WebIcon style={{marginRight:8}} />}
                  {cat==='AI' && <AiIcon style={{marginRight:8}} />}
                  {cat}
                </button>
              ))}
            </div>

            <ul className="vertical-list">
              {items.map((it,i)=> (
                <li key={it.key} className={`${it.key===active? 'active':''} slide-up`} onClick={()=>setActive(it.key)} style={{animationDelay:`${i*60}ms`}}>
                  <span className="tab-index">
                    <FeatureIcon />
                  </span>
                  <div className="tab-content">
                    <strong className="tab-title">{it.label}</strong>
                    <small className="tab-desc">{it.desc}</small>
                  </div>
                </li>
              ))}
            </ul>

            <div className="small-cards">
              <div className="card glass small">Fast Delivery</div>
              <div className="card glass small">Premium Quality</div>
              <div className="card glass small">Scalable Solutions</div>
            </div>
          </nav>

          <main className="right-panel">
            <div className="panel glass slide-up" style={{animationDelay:'180ms'}}>
              <div className="panel-header">
                <div className="icon-glow" aria-hidden>
                  {category==='SEO' && <SeoIcon className="panel-icon" />}
                  {category==='Website' && <WebIcon className="panel-icon" />}
                  {category==='AI' && <AiIcon className="panel-icon" />}
                </div>
                <div>
                  <h3>{activeItem.label}</h3>
                  <p className="muted">{activeItem.desc}</p>
                </div>
              </div>

              <div className="panel-body">
                <ul className="features">
                  {activeItem.features.map((f,i)=> <li key={i}>• {f}</li>)}
                </ul>

                <div className="panel-cta">
                  <button className="btn-primary">Get Consultation</button>
                  <button className="btn-ghost">View Case Studies</button>
                </div>
              </div>
            </div>

            <div className="extra-ui">
              <div className="premium card glass slide-up" style={{animationDelay:'240ms'}}>Premium Service</div>
              <div className="floating-particles" aria-hidden>
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
