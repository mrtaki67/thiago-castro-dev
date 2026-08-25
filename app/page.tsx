'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

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

const heroSlides = [
  { image: '/images/hero-slide-sites.png', alt: 'Fotografia de um workspace com um site em desenvolvimento', label: 'Sites que apresentam seu valor' },
  { image: '/images/hero-slide-whatsapp.png', alt: 'Fotografia de atendimento de clientes pelo WhatsApp', label: 'Atendimento que não deixa oportunidades passarem' },
  { image: '/images/hero-slide-google.png', alt: 'Fotografia de uma empresa fortalecendo sua presença digital', label: 'Mais presença para ser encontrado' },
  { image: '/images/hero-slide-sistemas.png', alt: 'Fotografia de um desenvolvedor planejando um sistema', label: 'Sistemas feitos para sua operação' },
]

function Header({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`site-header-wrapper ${isVisible ? 'is-visible' : ''}`}>
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

function HeroVisualSlider() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  const slide = heroSlides[activeSlide]

  return (
    <div className="hero-visual-card">
      {heroSlides.map((item, index) => (
        <img
          key={item.image}
          src={item.image}
          alt={item.alt}
          className={index === activeSlide ? 'hero-slide is-active' : 'hero-slide'}
          aria-hidden={index !== activeSlide}
        />
      ))}
      <div className="hero-visual-bottom-bar">
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Layers size={15} style={{ color: '#7bd3c6' }} />
          <span>{slide.label}</span>
        </span>
        <span className="hero-slide-dots" aria-label={`Slide ${activeSlide + 1} de ${heroSlides.length}`}>
          {heroSlides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              className={index === activeSlide ? 'is-active' : ''}
              aria-label={`Ver slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </span>
      </div>
    </div>
  )
}

function HeroAmbientBackground() {
  const prefersReducedMotion = useReducedMotion()
  const layers = [
    { className: 'hero-landscape-layer layer-distant', d: 'M-40 330 C150 260 260 286 410 330 C560 374 700 350 850 306 C1010 260 1120 275 1240 322 L1240 700 L-40 700 Z', duration: 30 },
    { className: 'hero-landscape-layer layer-middle', d: 'M-40 390 C120 320 270 320 430 390 C570 450 720 434 880 360 C1030 290 1140 326 1240 378 L1240 700 L-40 700 Z', duration: 25 },
    { className: 'hero-landscape-layer layer-near', d: 'M-40 470 C130 408 280 400 450 470 C620 540 770 522 930 448 C1080 380 1160 420 1240 452 L1240 700 L-40 700 Z', duration: 20 },
  ]

  return (
    <div className="hero-ambient" aria-hidden="true">
      <motion.svg className="hero-landscape" viewBox="0 0 1200 700" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hero-sky-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--background)" stopOpacity="0" />
            <stop offset="0.68" stopColor="var(--background)" stopOpacity="0.04" />
            <stop offset="1" stopColor="var(--background)" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id="hero-reflection" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--primary)" stopOpacity="0.09" />
            <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
          <filter id="hero-atmosphere"><feGaussianBlur stdDeviation="10" /></filter>
          <filter id="hero-reflection-blur"><feGaussianBlur stdDeviation="22" /></filter>
        </defs>
        <rect width="1200" height="700" fill="url(#hero-sky-fade)" />
        {layers.map((layer, index) => (
          <motion.path
            key={layer.className}
            className={layer.className}
            d={layer.d}
            initial={false}
            animate={prefersReducedMotion ? undefined : { x: [0, index === 0 ? 3 : index === 1 ? -5 : 7, 0] }}
            transition={{ duration: layer.duration, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        <motion.path
          className="hero-landscape-reflection"
          d="M-40 535 C130 465 280 470 450 535 C620 600 770 580 930 515 C1080 455 1160 492 1240 520 L1240 700 L-40 700 Z"
          fill="url(#hero-reflection)"
          filter="url(#hero-reflection-blur)"
          initial={false}
          animate={prefersReducedMotion ? undefined : { opacity: [0.55, 0.72, 0.55] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.svg>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero section-shell" id="inicio">
      <HeroAmbientBackground />
      <div className="hero-grid">
        <div className="hero-content">
          <h1>
            Mais visibilidade.<br />
            <em>Mais vendas.</em>
          </h1>

          <p className="hero-lead">
            Eu construo sites, automações e sistemas que ajudam seu negócio a ser encontrado, gerar agendamentos e vender todos os dias.
          </p>

          <div className="hero-actions">
            <a className="hero-primary-cta" href="#contato">
              <span className="hero-primary-cta-copy">
                <strong>Iniciar meu projeto</strong>
                <small>Vamos transformar sua ideia em resultado</small>
              </span>
              <span className="hero-primary-cta-arrow"><MoveRight size={19} /></span>
            </a>

            <a className="hero-secondary-cta" href="#como-ajudo">
              <span>Conhecer soluções</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="hero-cta-reassurance">
            <span className="hero-cta-status"><span className="hero-cta-status-dot" /> Disponível para novos projetos</span>
            <span>Atendimento direto, sem intermediários</span>
          </div>
          {/* Espaço reservado para prova social real: clientes atendidos, avaliação ou case. */}

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
          <HeroVisualSlider />

          <div className="hero-floating-badge-bottom hero-service-badge">
            <Layers size={14} style={{ color: '#7bd3c6' }} />
            <span>Sites, automações e sistemas sob medida</span>
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
            <span>Estrutura rápida, responsiva e preparada para crescer.</span>
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

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Saber mais sobre ${item.title} pelo WhatsApp`}
                  style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, color: item.featured ? '#7bd3c6' : 'var(--primary)', textDecoration: 'none' }}
                >
                  <span>Saber mais</span>
                  <ArrowUpRight size={14} />
                </a>
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
              {"Sem intermedi\u00e1rio,"}<br />
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
                  <div style={{ fontSize: '11px', color: '#aeb9b5', marginTop: '2px' }}>Desenvolvedor</div>
                </div>
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

function FloatingWhatsApp({ isVisible }: { isVisible: boolean }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={`floating-whatsapp ${isVisible ? 'is-visible' : ''}`}
      aria-label="Fale comigo no WhatsApp"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <MessageCircle size={22} />
      <span>Falar no WhatsApp</span>
    </a>
  )
}

export default function Page() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('inicio')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeaderVisible(!entry.isIntersecting),
      { threshold: 0.08 },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Header isVisible={isHeaderVisible} />
      <Hero />
      <Problem />
      <Services />
      <Difference />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp isVisible={isHeaderVisible} />
    </main>
  )
}

