const services = [
  {
    number: '01',
    title: 'Estrategia digital',
    description: 'Claridad para tomar mejores decisiones. Encontramos lo que hace único a tu negocio y lo convertimos en una dirección compartida.',
    tags: 'Research  ·  Posicionamiento  ·  Roadmap',
    tone: 'sand',
  },
  {
    number: '02',
    title: 'Diseño de experiencias',
    description: 'Interfaces intuitivas, marcas memorables. Diseñamos productos digitales que no solo se ven bien, sino que también ofrecen una experiencia fácil y agradable.',
    tags: 'UX/UI  ·  Branding  ·  Design systems',
    tone: 'rose',
  },
  {
    number: '03',
    title: 'Tecnología a medida',
    description: 'Ideas ambiciosas, soluciones sólidas. Desarrollamos plataformas rápidas, escalables y preparadas para adaptarse al crecimiento.',
    tags: 'Web  ·  Apps  ·  Inteligencia artificial',
    tone: 'sand',
  },
];

const projects = [
  {
    title: 'Noma',
    description: 'Una nueva forma de gestionar tus finanzas.',
    tags: 'Estrategia · UX/UI · Desarrollo web',
    image: './assets/noma.png',
    alt: 'Panel de finanzas de Noma abierto en un portátil sobre una mesa de piedra',
  },
  {
    title: 'Onda',
    description: 'Una experiencia digital para cuidar de ti.',
    tags: 'Branding · Producto digital · App',
    image: './assets/onda.png',
    alt: 'Aplicación de bienestar Onda en dos teléfonos junto a un jarrón',
  },
];

const processSteps = [
  { number: '01', title: 'Escuchamos', description: 'Entendemos tus objetivos, necesidades e ideas para encontrar la mejor dirección del proyecto.' },
  { number: '02', title: 'Damos forma', description: 'Transformamos conceptos en experiencias digitales con una estrategia y un diseño pensado para las personas.' },
  { number: '03', title: 'Lo hacemos realidad', description: 'Construimos, lanzamos y evolucionamos. Tu siguiente etapa también es la nuestra.' },
];

function arrow(diagonal = false) {
  return `<span aria-hidden="true">${diagonal ? '↗' : '↘'}</span>`;
}

function eyebrow(text) {
  return `<p class="eyebrow">${text}</p>`;
}

function serviceCard(service) {
  return `
    <a class="service-card ${service.tone}" href="#contact">
      <span class="card-number">${service.number}</span>
      <span class="card-arrow">${arrow(true)}</span>
      <h3>${service.title}</h3>
      <p class="service-description">${service.description}</p>
      <span class="service-tags">${service.tags}</span>
    </a>`;
}

function projectCard(project) {
  return `
    <a class="project-card" href="#contact" aria-label="Conoce el proyecto ${project.title}">
      <img class="project-image" src="${project.image}" alt="${project.alt}" />
      <div class="project-title-row"><h3>${project.title}</h3>${arrow(true)}</div>
      <p class="project-description">${project.description}</p>
      <p class="project-tags">${project.tags}</p>
    </a>`;
}

function processStep(step) {
  return `
    <article class="process-step">
      ${eyebrow(step.number)}
      <h3>${step.title}</h3>
      <p>${step.description}</p>
    </article>`;
}

function quoteCard(quote, name, role) {
  return `
    <article class="quote-card">
      <blockquote>${quote}</blockquote>
      <p class="quote-name">${name}</p>
      <p class="quote-role">${role}</p>
    </article>`;
}

function header() {
  return `
    <header class="site-header">
      <a class="wordmark" href="#top" aria-label="Auréa, inicio">auréa<sup>®</sup></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">Menú</button>
      <nav id="primary-navigation" class="primary-nav" aria-label="Navegación principal">
        <a href="#estudio">Estudio</a>
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
      </nav>
      <a class="header-contact" href="#contact">Hablemos ${arrow(true)}</a>
    </header>`;
}

function renderSite() {
  document.querySelector('#root').innerHTML = `
    ${header()}
    <main id="top">
      <section class="hero section-wrap" id="estudio">
        <div class="hero-copy">
          ${eyebrow('ESTUDIO INDEPENDIENTE DE TECNOLOGÍA')}
          <h1>Ideas, diseño y<br>tecnología en un<br>mismo lugar.</h1>
          <p class="hero-description">Creamos experiencias digitales únicas combinando estrategia, diseño y desarrollo para marcas que buscan destacar.</p>
          <div class="hero-actions">
            <a class="button button-dark motion-cta" href="#contact">Cuéntanos tu idea ${arrow(true)}</a>
            <a class="text-link" href="#proyectos">Explora nuestros proyectos ${arrow()}</a>
          </div>
          <a class="scroll-cue" href="#servicios">↓&nbsp; Sigue descubriendo</a>
        </div>
        <div class="hero-visual motion-art">
          <img src="./assets/escultura.png" alt="Escultura abstracta nacarada sobre una superficie de piedra" />
          <div class="hero-note">
            <span><i aria-hidden="true"></i> Diseño humano. Impacto real.</span>
            <small>EST. 2024</small>
          </div>
        </div>
      </section>

      <section class="services section-wrap" id="servicios">
        <div class="section-heading">
          <div>${eyebrow('01 / LO QUE HACEMOS')}<h2>Del concepto a la realidad digital</h2></div>
          <p class="section-intro">Analizamos, diseñamos y desarrollamos soluciones digitales que combinan creatividad, estrategia y tecnología.</p>
        </div>
        <div class="service-grid">${services.map(serviceCard).join('')}</div>
      </section>

      <section class="projects section-wrap" id="proyectos">
        <div class="projects-heading">
          <div>${eyebrow('02 / TRABAJO SELECCIONADO')}<h2>Ideas que ya<br>están ahí fuera.</h2></div>
          <a class="text-link" href="#contact">Todos los proyectos ${arrow(true)}</a>
        </div>
        <div class="project-grid">${projects.map(projectCard).join('')}</div>
      </section>

      <section class="process section-wrap">
        <div class="section-heading"><div>${eyebrow('03 / NUESTRA FORMA DE TRABAJAR')}<h2>Del primer concepto al producto final.</h2></div></div>
        <div class="process-grid">${processSteps.map(processStep).join('')}</div>
      </section>

      <section class="testimonials section-wrap" aria-labelledby="testimonial-title">
        <article class="featured-quote">
          ${eyebrow('04 / LO QUE DICEN DE NOSOTROS')}
          <span class="opening-quote" aria-hidden="true">“</span>
          <blockquote id="testimonial-title">Entendieron nuestra visión antes de que supiéramos explicarla. Auréa no solo creó un producto: elevó nuestra forma de imaginar el futuro.</blockquote>
          <div class="featured-author">
            <img src="./assets/clara.png" alt="Retrato de Clara Martín" />
            <div><p>Clara Martín</p><span>CEO y cofundadora de Noma</span></div>
          </div>
          <p class="quote-company">NOMA / FINTECH</p>
        </article>
        <div class="quote-grid">
          ${quoteCard('“Convertimos una experiencia compleja en algo extraordinariamente sencillo. Ese es su talento.”', 'Diego Salas', 'Fundador de Onda')}
          ${quoteCard('“Criterio, cercanía y una atención al detalle que se nota en cada punto de contacto.”', 'Elena Vidal', 'Directora de producto en Layers')}
        </div>
      </section>
    </main>

    <footer class="contact section-wrap" id="contact">
      ${eyebrow('TU PRÓXIMO CAPÍTULO EMPIEZA AQUÍ')}
      <h2>Las grandes ideas<br>merecen una conversación.</h2>
      <p class="contact-intro">Cuéntanos qué tienes en mente. Nos encantará darle forma contigo.</p>
      <div class="contact-actions">
        <a class="button button-rose" href="mailto:hola@aurea.studio">Empezar un proyecto ${arrow(true)}</a>
        <a class="email-link" href="mailto:hola@aurea.studio">hola@aurea.studio ${arrow(true)}</a>
        <span class="availability"><i aria-hidden="true"></i> Abiertos a nuevas ideas</span>
      </div>
      <div class="footer-meta"><span>Madrid · Trabajamos sin fronteras</span><span>40.4168° N&nbsp; 3.7038° W</span></div>
    </footer>`;

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.textContent = expanded ? 'Menú' : 'Cerrar';
    navigation.classList.toggle('is-open', !expanded);
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'Menú';
      navigation.classList.remove('is-open');
    }
  });
}

renderSite();