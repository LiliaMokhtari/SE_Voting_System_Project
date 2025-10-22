// Minimal JS for nav toggle, projects population, and contact form handling
document.addEventListener('DOMContentLoaded',()=>{
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  navToggle.addEventListener('click',()=>{
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });

  // Populate project cards (student portfolio projects)
  const projects = [
    {title:'Personal Portfolio',desc:'Responsive portfolio website built from scratch',tags:['HTML','CSS','JavaScript'],link:'#'},
    {title:'Student Dashboard',desc:'Interactive learning platform for college students',tags:['React','Node.js','MongoDB'],link:'#'},
    {title:'Local Business Website',desc:'Website for a small business in Algeria with online ordering',tags:['HTML','CSS','PHP','MySQL'],link:'#'},
    {title:'Weather App',desc:'Real-time weather application using public APIs',tags:['JavaScript','API','CSS'],link:'#'},
    {title:'Task Tracker',desc:'Simple productivity app to manage daily tasks',tags:['React','LocalStorage'],link:'#'},
    {title:'Blog System',desc:'Content management system for personal blogging',tags:['PHP','Laravel','MySQL'],link:'#'},
  ];
  const grid = document.getElementById('projectGrid');
  projects.forEach(p=>{
    const el = document.createElement('article');
    el.className='card';
    el.innerHTML = `<h3>${p.title}</h3><p class="muted">${p.desc}</p><p style="margin-top:12px">${p.tags.map(t=>`<span class="skill">${t}</span>`).join(' ')}</p><p style="margin-top:12px"><a href="${p.link}" class="btn outline">View</a></p>`;
    grid.appendChild(el);
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Contact form handling - simple client-side demo
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = new FormData(form);
    // In a real site you'd POST to an API or use a service like Formspree
    console.log('Contact form submitted',Object.fromEntries(data.entries()));
    msg.textContent = 'Thanks — message received (demo).';
    form.reset();
  });
});
