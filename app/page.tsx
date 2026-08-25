'use client'

import {
  ArrowUpRight,
  MessageCircle,
  MoveRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  ShieldCheck,
  Zap,
  Code2,
  Users2,
  Globe,
  Bot,
  LayoutDashboard,
  Wrench,
  HelpCircle,
  ExternalLink,
  Headphones,
  TrendingUp,
  Layers,
  Laptop,
} from 'lucide-react'

const whatsappUrl = 'https://wa.me/559284787330?text=Ol%C3%A1%2C%20Thiago!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.'
const instagramUrl = 'https://www.instagram.com/@thiagoc.company'
const linkedinUrl = 'https://www.linkedin.com/in/thiago-castro-dev?utm_source=share_via&utm_content=profile&utm_medium=member_android'
const profileImage = '/images/thiago-castro.jpeg'
const heroVisualImage = '/images/hero-digital-strategy.png'

function Header() {
  return (
    <div className="site-header-wrapper">
      <header className="site-header section-shell">
        <a className="brand" href="#inicio" aria-label="Thiago Castro início">
          <span className="brand-mark">TC.</span>
          <span>Thiago Castro</span>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#problemas">Diagnóstico</a>
          <a href="#como-ajudo">Serviços</a>
          <a href="#diferenciais">Por que eu?</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={15} />
          <span>Falar comigo</span>
          <ArrowUpRight size={15} />
        </a>
      </header>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero section-shell" id="inicio">
      <div className="hero-grid">
        <div className="hero-content">
          <h1>
            Presença digital.<br />
            <em>Do seu jeito.</em>
          </h1>

          <p style={{ fontSize: '17px', lineHeight: '1.65', color: 'var(--muted)', marginTop: '22px', maxWidth: '520px' }}>
            Eu crio sites de alta performance, automações de atendimento e sistemas sob medida para negócios que querem ser encontrados, atender melhor e vender mais todos os dias.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', marginTop: '28px' }}>
            <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              <span>Falar no WhatsApp</span>
              <MoveRight size={18} />
            </a>

            <a className="button button-outline" href="#como-ajudo">
              <span>Conhecer serviços</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '20px', fontSize: '12px', color: 'var(--muted)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--primary)' }} />
              Sem intermediários
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--primary)' }} />
              Atendimento direto
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--primary)' }} />
              Suporte contínuo
            </span>
          </div>

          <div className="hero-tech-pills">
            <span className="hero-tech-pill">
              <Globe size={13} />
              Sites & Landing Pages
            </span>
            <span className="hero-tech-pill">
              <Bot size={13} />
              Automação de WhatsApp
            </span>
            <span className="hero-tech-pill">
              <MapPin size={13} />
              Google Meu Negócio
            </span>
            <span className="hero-tech-pill">
              <Code2 size={13} />
              Sistemas Sob Medida
            </span>
          </div>
        </div>

        <div className="hero-visual-container">
          <div className="hero-floating-badge-top">
            <Sparkles size={14} style={{ color: 'var(--primary)' }} />
            <span>Design & Código Intencional</span>
          </div>

          <div className="hero-visual-card">
            <img src={heroVisualImage} alt="Estratégia e Presença Digital por Thiago Castro" />
            <div className="hero-visual-bottom-bar">
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={15} style={{ color: '#7bd3c6' }} />
                <span>Feito de perto, com intenção</span>
              </span>
              <span style={{ color: '#aeb9b5', fontSize: '11px' }}>MANAUS · BRASIL</span>
            </div>
          </div>

          <div className="hero-floating-badge-bottom">
            <TrendingUp size={14} style={{ color: '#7bd3c6' }} />
            <span>Foco em Conversão e Vendas</span>
          </div>
        </div>
      </div>

      <div className="hero-stats-strip">
        <div className="hero-stat-card">
          <div className="hero-stat-icon">
            <Zap size={18} />
          </div>
          <div>
            <strong>Comunicação Direta</strong>
            <span>Você fala direto com o desenvolvedor, sem ruídos.</span>
          </div>
        </div>

        <div className="hero-stat-card">
          <div className="hero-stat-icon">
            <Laptop size={18} />
          </div>
          <div>
            <strong>Tecnologia de Ponta</strong>
            <span>Next.js, Tailwind CSS e automações inteligentes.</span>
          </div>
        </div>

        <div className="hero-stat-card">
          <div className="hero-stat-icon">
            <ShieldCheck size={18} />
          </div>
          <div>
            <strong>Parceria & Suporte</strong>
            <span>Acompanhamento próximo para seu projeto continuar crescendo.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Problem() {
  const problems = [
    {
      num: '01',
      title: 'Seu negócio ainda não tem site ou tem um desatualizado?',
      answer: 'Um endereço próprio e profissional passa confiança imediata, valoriza sua marca e facilita o primeiro contato de novos clientes.',
    },
    {
      num: '02',
      title: 'Perde clientes porque demora para responder no WhatsApp?',
      answer: 'Eu organizo e automatizo o fluxo de mensagens para que nenhum cliente em potencial fique esperando e acabe comprando do concorrente.',
    },
    {
      num: '03',
      title: 'Seu Google Meu Negócio está invisível ou desatualizado?',
      answer: 'Eu coloco sua empresa no topo das buscas locais para clientes que já estão procurando pelo seu produto ou serviço na sua região.',
    },
  ]

  return (
    <div className="section-wrapper" id="problemas">
      <section className="section-shell">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          <span>O ponto de partida</span>
        </div>

        <div className="problem-grid">
          <div>
            <h2>
              O seu negócio<br />
              <em>existe de verdade online?</em>
            </h2>
            <p style={{ marginTop: '20px', color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6', maxWidth: '440px' }}>
              Hoje em dia, ter apenas um perfil de rede social não basta. Seus clientes pesquisam no Google, procuram referências e esperam agilidade máxima no primeiro contato.
            </p>
            <div style={{ marginTop: '28px' }}>
              <a href="#como-ajudo" className="text-link">
                <span>Descubra como posso ajudar</span>
                <MoveRight size={16} />
              </a>
            </div>
          </div>

          <div className="problem-list">
            {problems.map((p) => (
              <article className="problem-card" key={p.num}>
                <div className="problem-num">{p.num}</div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--foreground)' }}>{p.title}</h3>
                  <p style={{ marginTop: '8px', color: 'var(--muted)', fontSize: '13px', lineHeight: '1.55' }}>
                    {p.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const serviceItems = [
  {
    num: '01',
    icon: Globe,
    title: 'Sites & Landing Pages',
    desc: 'Páginas rápidas, elegantes e pensadas para converter visitantes em clientes reais no seu WhatsApp.',
    badge: null,
  },
  {
    num: '02',
    icon: MapPin,
    title: 'Google Meu Negócio & SEO Local',
    desc: 'Configuração completa para colocar sua empresa no mapa e ser encontrada por quem procura seu serviço perto de você.',
    badge: null,
  },
  {
    num: '03',
    icon: Bot,
    title: 'Automação de WhatsApp',
    desc: 'Triagem de atendimento e respostas inteligentes 24 horas por dia para não deixar nenhum cliente esperando.',
    badge: null,
  },
  {
    num: '04',
    icon: Code2,
    title: 'Sistemas Sob Medida',
    desc: 'Software exclusivo desenhado especificamente para resolver os gargalos e processos operacionais da sua empresa.',
    badge: 'Destaque',
    featured: true,
  },
  {
    num: '05',
    icon: LayoutDashboard,
    title: 'Organização de Leads & CRM',
    desc: 'Estruturação simples de contatos e oportunidades para que sua equipe acompanhe cada venda sem complicação.',
    badge: null,
  },
  {
    num: '06',
    icon: Wrench,
    title: 'Manutenção & Suporte Ágil',
    desc: 'Ajustes, atualizações de segurança e suporte direto comigo para você focar no seu negócio sem preocupação técnica.',
    badge: null,
  },
]

function Services() {
  return (
    <div className="section-wrapper" id="como-ajudo">
      <section className="section-shell">
        <div className="services-header">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>O que eu faço</span>
            </div>
            <h2 style={{ marginTop: '12px' }}>
              Como eu posso <em>ajudar</em>
            </h2>
          </div>
          <p style={{ maxWidth: '340px', color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6' }}>
            Tecnologia direta e sem enrolação, pensada para a rotina real de quem precisa de resultados comerciais.
          </p>
        </div>

        <div className="services-grid">
          {serviceItems.map((item) => {
            const Icon = item.icon
            return (
              <article
                className={`service-card ${item.featured ? 'featured' : ''}`}
                key={item.num}
              >
                <div className="service-top">
                  <span className="service-number">{item.num}</span>
                  <Icon size={20} style={{ color: item.featured ? '#7bd3c6' : 'var(--primary)' }} />
                </div>

                {item.badge && <span className="service-badge">{item.badge}</span>}

                <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: 'auto' }}>
                  {item.title}
                </h3>
                <p style={{ marginTop: '10px', fontSize: '13px', lineHeight: '1.55', color: item.featured ? '#aeb9b5' : 'var(--muted)' }}>
                  {item.desc}
                </p>

                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, color: item.featured ? '#7bd3c6' : 'var(--primary)' }}>
                  <span>Saber mais</span>
                  <ArrowUpRight size={14} />
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

function Difference() {
  const pillars = [
    {
      icon: Users2,
      title: 'Comunicação Direta',
      text: 'Você conversa com quem desenvolve. Sem intermediários, sem ruídos e sem perder tempo.',
    },
    {
      icon: Zap,
      title: 'Agilidade & Clareza',
      text: 'Prazos reais, alinhamentos objetivos e entregas focadas no que traz retorno prático.',
    },
    {
      icon: ShieldCheck,
      title: 'Código Sob Medida',
      text: 'Sem templates genéricos e lentos. Cada solução é construída com tecnologia moderna e segura.',
    },
    {
      icon: Headphones,
      title: 'Parceria Contínua',
      text: 'Não sumo após a entrega. Continuo por perto para suporte, melhorias e evolução do projeto.',
    },
  ]

  return (
    <div className="section-wrapper-teal" id="diferenciais">
      <section className="section-shell">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          <span>Por que trabalhar comigo?</span>
        </div>

        <div className="difference-grid">
          <div>
            <h2>
              Sem intermediário,<br />
              <em>sem enrolação.</em>
            </h2>
            <p style={{ marginTop: '20px', color: 'var(--muted)', fontSize: '15px', lineHeight: '1.65', maxWidth: '460px' }}>
              Eu sou desenvolvedor de verdade. Entendo as dores do seu negócio, desenho a estratégia técnica mais eficiente e construo o seu projeto do início ao fim.
            </p>
            <div style={{ marginTop: '30px' }}>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-dark">
                <span>Conversar sobre sua ideia</span>
                <MoveRight size={17} />
              </a>
            </div>
          </div>

          <div className="diff-pillars">
            {pillars.map((pil) => {
              const Icon = pil.icon
              return (
                <div className="diff-pill-card" key={pil.title}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <Icon size={18} style={{ color: 'var(--primary)' }} />
                    <h4>{pil.title}</h4>
                  </div>
                  <p>{pil.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

function About() {
  return (
    <div className="section-wrapper" id="sobre">
      <section className="section-shell">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <img src={profileImage} alt="Retrato profissional de Thiago Castro" />
              <div className="about-image-tag">
                <div>
                  <strong>Thiago Castro</strong>
                  <div style={{ fontSize: '11px', color: '#aeb9b5', marginTop: '2px' }}>Desenvolvedor Independente</div>
                </div>
                <span>MANAUS · AM</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Quem está por trás</span>
              </div>
              <h2 style={{ marginTop: '12px' }}>
                Oi, eu sou<br />
                <em>o Thiago.</em>
              </h2>
            </div>

            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.7' }}>
              Eu gosto de transformar problemas do dia a dia em soluções simples e elegantes que realmente funcionam. Faço isso porque acredito que todo negócio, independente do tamanho, merece uma presença digital à altura da qualidade do serviço que entrega.
            </p>

            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.65' }}>
              Minha missão é descomplicar a tecnologia para você focar no que faz de melhor: cuidar dos seus clientes e fazer a sua empresa crescer.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
              <span style={{ padding: '6px 12px', background: 'var(--teal-light)', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: 'var(--primary)' }}>
                ✓ Desenvolvimento Web Moderno
              </span>
              <span style={{ padding: '6px 12px', background: 'var(--teal-light)', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: 'var(--primary)' }}>
                ✓ Automações Inteligentes
              </span>
              <span style={{ padding: '6px 12px', background: 'var(--teal-light)', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: 'var(--primary)' }}>
                ✓ Foco em Negócios Locais
              </span>
            </div>

            <div className="signature-block">
              <div className="signature-name">Thiago Castro</div>
              <span className="signature-role">Desenvolvedor & Criador</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Contact() {
  return (
    <div className="section-wrapper-ink" id="contato">
      <section className="section-shell contact-section">
        <div className="contact-content">
          <div className="contact-kicker">
            <span className="eyebrow-dot" />
            <span>O próximo passo</span>
          </div>

          <h2 style={{ color: '#ffffff', maxWidth: '700px' }}>
            Vamos conversar sobre<br />
            <em style={{ color: '#7bd3c6' }}>o seu negócio?</em>
          </h2>

          <p style={{ color: '#aeb9b5', fontSize: '15px', lineHeight: '1.6', maxWidth: '540px' }}>
            Me conta o que você precisa ou qual é o seu maior desafio no momento. Eu analiso o seu cenário e te oriento sobre a melhor solução.
          </p>

          <div style={{ marginTop: '8px' }}>
            <a
              className="button button-teal"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: '15px', padding: '16px 32px' }}
            >
              <MessageCircle size={20} />
              <span>Falar agora no WhatsApp</span>
            </a>
          </div>

          <p style={{ color: '#88908d', fontSize: '12px', marginTop: '4px' }}>
            Atendimento direto comigo · Resposta rápida em horário comercial
          </p>

          <div className="contact-channels">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="contact-channel-item">
              <MessageCircle size={14} style={{ color: '#25d366' }} />
              <span>WhatsApp: (92) 8478-7330</span>
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="contact-channel-item">
              <ExternalLink size={14} style={{ color: '#7bd3c6' }} />
              <span>Instagram: @thiagoc.company</span>
            </a>
            <div className="contact-channel-item">
              <MapPin size={14} style={{ color: '#7bd3c6' }} />
              <span>Manaus - AM · Brasil</span>
            </div>
          </div>
        </div>

        <span className="contact-watermark">VAMOS CONSTRUIR</span>
      </section>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer section-shell">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <strong style={{ fontSize: '18px', color: 'var(--foreground)', letterSpacing: '-0.03em' }}>TC.</strong>
            <span style={{ fontWeight: 600, color: 'var(--foreground)' }}>Thiago Castro</span>
          </div>
          <span style={{ display: 'block', marginTop: '4px', fontSize: '12px', color: 'var(--muted)' }}>
            Presença digital e sistemas feitos sob medida com atenção aos detalhes.
          </span>
        </div>

        <div className="footer-socials">
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>

        <div style={{ fontSize: '11px', color: 'var(--muted-light)' }}>
          © {new Date().getFullYear()} Thiago Castro. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="Fale comigo no WhatsApp"
    >
      <MessageCircle size={22} />
      <span>Falar no WhatsApp</span>
    </a>
  )
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Services />
      <Difference />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

