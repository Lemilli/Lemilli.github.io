import { createNavigation } from './navigation.js';

const russian = {
  skipContent:'К содержанию',navLabel:'Основная навигация',languageLabel:'Язык',topLabel:'Алибек Капан — в начало',impactLabel:'Масштаб продуктов',orbitLabel:'Технологии и связанные проекты',medstoryGallery:'Скриншоты MedStory: от добавления записи до подготовки к визиту',leclickGallery:'Скриншоты LeClick: поиск, карта и бронирования',backToTop:'В НАЧАЛО ↑',
  navWork:'Проекты',navCapabilities:'Экспертиза',navAbout:'Обо мне',navContact:'Контакты',availability:'Открыт к предложениям',menuOpen:'Открыть меню',menuClose:'Закрыть меню',
  heroEyebrow:'АЛИБЕК КАПАН / ИНЖЕНЕР-ПРОГРАММИСТ',heroLineOne:'За пределами',heroLineTwo:'интерфейса.',heroLineThree:'К реальным продуктам.',heroLead:'Глубокая экспертиза во Flutter и взгляд на продукт целиком. Соединяю продуманный интерфейс с инженерией, на которой он держится.',heroWork:'Смотреть проекты',heroTalk:'Связаться',heroPortraitAlt:'Профессиональный портрет Алибека Капана',heroLocation:'АСТАНА, КАЗАХСТАН',heroScroll:'ДАЛЬШЕ — ПРОЕКТЫ',
  metricYears:'года профессиональной разработки',metricRegistered:'зарегистрированных пользователей видеосервиса',metricActive:'активных пользователей видеосервиса в месяц',metricRestaurants:'ресторанов на платформе бронирования',metricNote:'Аудитория и размер каталога — показатели коммерческих продуктов, созданных в команде.',
  orbitEyebrow:'ИНЖЕНЕРНАЯ ОРБИТА',orbitTitle:'Технологии связаны. Продукт работает.',orbitLead:'За каждой технологией — конкретная задача. Выберите её и посмотрите, как она работает в моих проектах.',orbitCore:'ИНЖЕНЕРИЯ ПРОДУКТА',orbitRelated:'ПОДТВЕРЖДЕНО ПРОЕКТАМИ',orbitHint:'Выберите технологию. Перейдите к результату.',orbitPause:'Пауза',orbitResume:'Продолжить',orbitReduced:'Без анимации',orbitData:'Данные',orbitAi:'ИИ / OCR',
  workEyebrow:'ИЗБРАННЫЕ ПРОЕКТЫ / 01—04',workTitle:'Сложные задачи. Осязаемый результат.',workLead:'Коммерческие приложения с большой аудиторией и собственные продукты полного цикла. Здесь виден не только интерфейс, но и инженерная работа за ним.',
  streamingTitle:'Стриминг в масштабе.',streamingType:'КОММЕРЧЕСКИЙ ПРОДУКТ / MOBILE & TV',streamingLead:'От смартфона до большого экрана. Мобильная и ТВ-разработка для видеосервиса с 350K+ зарегистрированных пользователей и 80K+ активных пользователей в месяц.',streamingCatalog:'ОДИН ПРОДУКТ. ТРИ ФОРМАТА ЭКРАНА.',streamingDetail:'Разработал HLS-воспроизведение, офлайн-загрузку видео из 1 000+ сегментов и навигацию с пульта для Android TV. Нативные интеграции, работа над производительностью и выпуск в продакшен дополнили этот путь.',streamingTvAlt:'ТВ-интерфейс анонимной стриминговой платформы',streamingMobileAlt:'Мобильный экран анонимной стриминговой платформы',streamingCatalogAlt:'Веб-каталог анонимной стриминговой платформы',
  leclickType:'КОММЕРЧЕСКИЙ ПРОДУКТ / FLUTTER / БРОНИРОВАНИЯ',leclickLead:'От первого поиска до забронированного столика. Flutter-разработка сценариев поиска и бронирования для платформы с каталогом 10K+ ресторанов.',leclickRestaurants:'РЕСТОРАНОВ НА ПЛАТФОРМЕ',leclickStory:'Найти место. Изучить детали. Забронировать столик. Управлять планами. Один связный мобильный сценарий.',leclickStepOne:'Найти',leclickStepTwo:'Изучить',leclickStepThree:'Бронь',leclickStepFour:'Управлять',leclickDiscoverCaption:'ПОИСК',leclickMapCaption:'КАРТА',leclickBookingsCaption:'БРОНИРОВАНИЯ',leclickDetail:'Разработал мобильные сценарии поиска, фильтрации, работы с картой, бронирования и управления бронями. Интегрировал чат поддержки, уведомления, диплинки и аналитику в коммерческое Flutter-приложение.',leclickDiscoverAlt:'Экран поиска ресторанов LeClick',leclickMapAlt:'Карта ресторанов LeClick',leclickBookingsAlt:'Экран управления бронированиями LeClick',
  medstoryType:'СОБСТВЕННЫЙ ПРОДУКТ / FLUTTER / DJANGO / ИИ',medstoryLead:'Продукт, созданный целиком: Flutter-приложение и Django-backend превращают разрозненные медицинские документы в записи с поиском и ссылками на первоисточники.',medstoryPhrase:'У каждой записи — своё место. И свой источник.',medstoryAside:'Документ или голосовая заметка поступают в фоновую обработку. ИИ помогает упорядочить информацию, сохраняя связь с оригиналом.',medstoryCapture:'Добавить',medstoryTimeline:'Упорядочить',medstoryDetailStep:'Проверить',medstorySearch:'Найти',medstoryVisit:'Подготовиться',medstoryFoot:'Собственный продукт · До запуска · На скриншотах — демоданные',medstoryGitHub:'Изучить код',medstoryCaptureAlt:'Добавление записи в MedStory',medstoryTimelineAlt:'Хронология медицинских записей MedStory',medstoryDetailAlt:'Детали записи и её источник в MedStory',medstorySearchAlt:'Поиск по записям MedStory',medstoryVisitAlt:'Подготовка к визиту в MedStory',
  cryptoTitle:'Криптоаналитика.',cryptoType:'FULL-STACK / PYTHON / DJANGO / ДАННЫЕ',cryptoLead:'От сырых сигналов к понятным трендам. Сбор данных по расписанию, анализ тональности, Django API и визуализация во Flutter — в одной full-stack системе.',cryptoFlow:'ОТ ИСТОЧНИКА К ИНТЕРФЕЙСУ',cryptoStepOne:'Рыночные и социальные источники',cryptoStepTwo:'Сбор данных по расписанию',cryptoStepThree:'Классификация тональности',cryptoStepFour:'История и Django REST API',cryptoStepFive:'Визуализация во Flutter',cryptoDetail:'Спроектировал путь от сбора данных до хранения истории и визуализации. Асинхронные задачи отделяют обработку данных от работы интерфейса.',cryptoBackend:'Код backend',cryptoFrontend:'Код приложения',cryptoImageCaption:'РЕАЛЬНЫЙ СКРИНШОТ ПРИЛОЖЕНИЯ ИЗ АРХИВА ПРОЕКТА',cryptoAlt:'Архивный скриншот приложения для анализа криптовалют',
  capabilitiesEyebrow:'ИНЖЕНЕРНАЯ ЭКСПЕРТИЗА',capabilitiesTitle:'Глубина в мобильной разработке. Взгляд на всю систему.',capabilitiesLead:'Коммерческая Flutter-разработка — моя основа. Собственные продукты показывают, как я соединяю клиент, backend, данные и ИИ в работающую систему.',
  mobileLevel:'01 / КОММЕРЧЕСКАЯ ЭКСПЕРТИЗА',mobileTitle:'Мобильная инженерия за пределами экрана.',mobileCopy:'Видеоплееры, управление с пульта, бронирования, нативные интеграции и выпуск приложений. Решаю задачи, которые делают интерфейс частью настоящего продукта.',mobileToolkit:'ОСНОВНОЙ СТЕК',mobileEvidenceStreaming:'Стриминг и Android TV ↗',mobileEvidenceLeclick:'Поиск и бронирования ↗',
  backendLevel:'02 / ПРОДУКТ ПОЛНОГО ЦИКЛА',backendTitle:'Система, на которую опирается продукт.',backendCopy:'API, модели данных, фоновые задачи и хранение — вместе с клиентами, которые ими пользуются. От архитектуры до связного пользовательского сценария.',backendEvidence:'Backend MedStory ↗',cryptoEvidence:'Пайплайн криптоаналитики ↗',
  dataLevel:'03 / ПРИКЛАДНЫЕ ИИ И ДАННЫЕ',dataTitle:'ИИ с пользой. Данные с контекстом.',dataCopy:'OCR и распознавание речи превращают входящие материалы в структурированные записи с источниками. Анализ тональности добавляет контекст к собранным данным.',dataToolkit:'МЕТОДЫ И ИНСТРУМЕНТЫ',dataStack:'OCR · Распознавание речи · LLM-интеграции · Структурированные ответы · Анализ тональности',dataEvidence:'ИИ-процессы MedStory ↗',
  breadthLabel:'ДОПОЛНИТЕЛЬНЫЕ ИНСТРУМЕНТЫ',webTitle:'Веб и API-интеграции',webCopy:'JavaScript, TypeScript, React, Next.js и Tailwind CSS для веб-интерфейсов. Node.js, Express, REST, GraphQL и WebSocket для интеграций.',infraTitle:'Инфраструктура и хранение',infraCopy:'Docker, GitHub Actions, CI/CD, Firebase и AWS. PostgreSQL, SQLite и Redis для работы с данными и процессов развёртывания.',
  aboutEyebrow:'ОБО МНЕ / ОПЫТ',aboutStatement:'Сложность — внутри. Ясность — снаружи.',aboutOne:'Я инженер-программист из Астаны. Работаю там, где встречаются продукт, интерфейс и сложная техническая задача: от видеоплееров и бронирований до backend-систем и ИИ-интеграций.',aboutTwo:'Вникаю в детали, связываю части системы и довожу решения до состояния, в котором ими можно пользоваться. Мне важно, что происходит после демо.',experienceYears:'Коммерческая разработка, включая мобильные продукты в Gabumas Ltd',education:'Xiamen University — бакалавр Digital Media Technology',
  contactEyebrow:'СЛЕДУЮЩИЙ ПРОДУКТ',contactTitle:'Сложная задача? Давайте решим.',contactLead:'Открыт к удалённой работе по всему миру, работе в офисе в Астане, контрактам и фриланс-проектам.',contactAction:'Обсудить задачу',contactLocation:'Астана, Казахстан',footerNote:'Продуман до интерфейса. Проработан до системы.'
};

const orbitContent = {
  flutter:{en:{title:'Flutter',body:'Commercial mobile depth: streaming, restaurant discovery, native integrations, and production delivery. The same craft powers independently built full-stack products.',projects:['streaming','leclick','medstory','crypto']},ru:{title:'Flutter',body:'Коммерческая экспертиза: стриминг, поиск ресторанов, нативные интеграции и выпуск приложений. Эта же основа помогает создавать собственные full-stack продукты.',projects:['streaming','leclick','medstory','crypto']}},
  hls:{en:{title:'HLS & Android TV',body:'Playback is only the beginning. Offline downloads spanning 1,000+ segments, remote-first navigation, native integration, and performance work turn video into a product experience.',projects:['streaming']},ru:{title:'HLS и Android TV',body:'Плеер — только начало. Офлайн-загрузка из 1 000+ сегментов, управление с пульта, нативные интеграции и работа над производительностью превращают видео в продукт.',projects:['streaming']}},
  websockets:{en:{title:'WebSockets',body:'Real-time support inside the reservation journey. Connected chat, mobile state, and the surrounding booking flows keep the experience in one application.',projects:['leclick']},ru:{title:'WebSocket',body:'Поддержка в реальном времени внутри сценария бронирования. Чат, состояние приложения и связанные мобильные сценарии объединены в одном продукте.',projects:['leclick']}},
  django:{en:{title:'Django & Celery',body:'The system behind the interface: REST APIs, structured records, historical storage, and asynchronous processing. Backend and client designed as parts of one product.',projects:['medstory','crypto']},ru:{title:'Django и Celery',body:'Система за интерфейсом: REST API, структурированные записи, хранение истории и асинхронная обработка. Backend и клиент — части одного продукта.',projects:['medstory','crypto']}},
  ai:{en:{title:'AI & OCR',body:'Documents and voice notes become structured, searchable records. OCR, speech-to-text, and AI output handling retain a path back to the source in pre-launch MedStory.',projects:['medstory']},ru:{title:'ИИ и OCR',body:'Документы и голосовые заметки становятся записями с поиском. OCR, распознавание речи и обработка ответов ИИ сохраняют связь с источниками. MedStory готовится к запуску.',projects:['medstory']}},
  pipelines:{en:{title:'Data pipelines',body:'From collection to exploration: scheduled market and social-data ingestion, sentiment classification, historical storage, and a Flutter visualization client.',projects:['crypto']},ru:{title:'Пайплайны данных',body:'От сбора до анализа: рыночные и социальные данные по расписанию, классификация тональности, хранение истории и клиент визуализации на Flutter.',projects:['crypto']}}
};

const projectNames = {en:{streaming:'Streaming Platform',leclick:'LeClick',medstory:'MedStory',crypto:'Crypto Intelligence'},ru:{streaming:'Стриминговая платформа',leclick:'LeClick',medstory:'MedStory',crypto:'Криптоаналитика'}};
const i18nText = [...document.querySelectorAll('[data-i18n]')].map(element => [element,element.textContent]);
const i18nAlt = [...document.querySelectorAll('[data-i18n-alt]')].map(element => [element,element.getAttribute('alt')]);
const i18nAria = [...document.querySelectorAll('[data-i18n-aria]')].map(element => [element,element.getAttribute('aria-label')]);
const languageButtons = [...document.querySelectorAll('[data-lang]')];
const orbitNodes = [...document.querySelectorAll('[data-tech]')];
const orbitMap = document.querySelector('[data-orbit-map]');
const orbitCore = document.querySelector('.orbit-core');
const orbitTitle = document.querySelector('[data-orbit-title]');
const orbitBody = document.querySelector('[data-orbit-body]');
const orbitProjects = document.querySelector('[data-orbit-projects]');
const orbitChannels = [...document.querySelectorAll('[data-orbit-channel]')];
const orbitParticles = [...document.querySelectorAll('[data-orbit-particle]')];
const orbitSignal = document.querySelector('[data-orbit-signal]');
const motionToggle = document.querySelector('[data-orbit-toggle]');
const motionLabel = document.querySelector('[data-orbit-motion-label]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const siteNav = document.querySelector('[data-site-nav]');
const siteHeader = document.querySelector('.site-header');
const navigation = createNavigation(window,document,siteHeader);
function updateHeaderHeight() {
  document.documentElement.style.setProperty('--header-height',`${siteHeader.getBoundingClientRect().height}px`);
}
updateHeaderHeight();
if ('ResizeObserver' in window) new ResizeObserver(updateHeaderHeight).observe(siteHeader);
else window.addEventListener('resize',updateHeaderHeight);
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const orbitTargets = {flutter:[160,52],hls:[640,52],websockets:[88,280],django:[712,280],ai:[640,508],pipelines:[160,508]};
const orbitTracks = [
  {radiusX:304,radiusY:166,rotation:-14*Math.PI/180,duration:18000},
  {radiusX:270,radiusY:216,rotation:23*Math.PI/180,duration:22000},
  {radiusX:340,radiusY:110,rotation:-24*Math.PI/180,duration:24000}
];
let currentLanguage = 'en';
let activeTech = 'flutter';
let motionPaused = false;
let orbitVisible = false;
let animationFrame = 0;
let pointerFrame = 0;
let lastTick = 0;
let lastPaint = 0;
let elapsed = 0;

function updateMenuLabel() {
  if (!menuToggle || !siteNav) return;
  const open = siteNav.classList.contains('is-open');
  menuToggle.setAttribute('aria-label',currentLanguage === 'ru' ? russian[open ? 'menuClose' : 'menuOpen'] : open ? 'Close menu' : 'Open menu');
}

function paintOrbit() {
  const selected = orbitContent[activeTech][currentLanguage];
  orbitTitle.textContent = selected.title;
  orbitBody.textContent = selected.body;
  orbitProjects.replaceChildren();
  for (const project of selected.projects) {
    const link = document.createElement('a');
    link.href = '#' + project;
    link.textContent = projectNames[currentLanguage][project] + ' ↗';
    orbitProjects.append(link);
  }
  for (const node of orbitNodes) node.setAttribute('aria-pressed',String(node.dataset.tech === activeTech));
  for (const channel of orbitChannels) channel.classList.toggle('is-active',channel.dataset.orbitChannel === activeTech);
  drawOrbit(elapsed);
}

function updateMotionLabel() {
  if (!motionToggle) return;
  const reduced = motionPreference.matches;
  motionToggle.disabled = reduced;
  motionToggle.setAttribute('aria-pressed',String(motionPaused || reduced));
  const label = reduced ? 'orbitReduced' : motionPaused ? 'orbitResume' : 'orbitPause';
  const english = {orbitReduced:'Reduced motion',orbitResume:'Resume motion',orbitPause:'Pause motion'};
  motionLabel.textContent = currentLanguage === 'ru' ? russian[label] : english[label];
}

function setLanguage(language, preservePosition = false) {
  const position = preservePosition ? navigation.capture() : null;
  currentLanguage = language === 'ru' ? 'ru' : 'en';
  document.documentElement.lang = currentLanguage;
  for (const [element,english] of i18nText) element.textContent = currentLanguage === 'ru' ? (russian[element.dataset.i18n] || english) : english;
  for (const [element,english] of i18nAlt) element.setAttribute('alt',currentLanguage === 'ru' ? (russian[element.dataset.i18nAlt] || english) : english);
  for (const [element,english] of i18nAria) element.setAttribute('aria-label',currentLanguage === 'ru' ? (russian[element.dataset.i18nAria] || english) : english);
  for (const button of languageButtons) button.setAttribute('aria-pressed',String(button.dataset.lang === currentLanguage));
  updateMenuLabel();
  paintOrbit();
  updateMotionLabel();
  updateHeaderHeight();
  clearTimeout(window.portfolioLanguageFallback);
  document.documentElement.classList.remove('language-pending');
  if (preservePosition) navigation.restore(position);
  try { localStorage.setItem('alibek-portfolio-language',currentLanguage); } catch (_) {}
}

function drawOrbit(time) {
  for (const [index,particle] of orbitParticles.entries()) {
    const track = orbitTracks[index % orbitTracks.length];
    const angle = time / track.duration * Math.PI * 2 + index * Math.PI / 3;
    const positionX = Math.cos(angle) * track.radiusX;
    const positionY = Math.sin(angle) * track.radiusY;
    const rotatedX = 400 + positionX * Math.cos(track.rotation) - positionY * Math.sin(track.rotation);
    const rotatedY = 280 + positionX * Math.sin(track.rotation) + positionY * Math.cos(track.rotation);
    particle.setAttribute('transform',`translate(${rotatedX.toFixed(2)} ${rotatedY.toFixed(2)})`);
  }
  if (orbitSignal) {
    const target = orbitTargets[activeTech];
    const progress = motionPreference.matches || motionPaused ? .65 : (time % 2000) / 2000;
    const signalX = 400 + (target[0] - 400) * progress;
    const signalY = 280 + (target[1] - 280) * progress;
    orbitSignal.setAttribute('transform',`translate(${signalX.toFixed(2)} ${signalY.toFixed(2)})`);
  }
}

function shouldAnimate() {
  return orbitVisible && !document.hidden && !motionPaused && !motionPreference.matches;
}

function animateOrbit(timestamp) {
  animationFrame = 0;
  if (!shouldAnimate()) return;
  if (lastTick) elapsed += Math.min(timestamp - lastTick,64);
  lastTick = timestamp;
  if (timestamp - lastPaint >= (finePointer.matches ? 16 : 32)) {
    drawOrbit(elapsed);
    lastPaint = timestamp;
  }
  animationFrame = requestAnimationFrame(animateOrbit);
}

function syncMotion() {
  if (shouldAnimate()) {
    if (!animationFrame) {
      lastTick = 0;
      animationFrame = requestAnimationFrame(animateOrbit);
    }
  } else {
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    lastTick = 0;
    orbitMap.style.setProperty('--pointer-x','0px');
    orbitMap.style.setProperty('--pointer-y','0px');
  }
  updateMotionLabel();
}

function selectTechnology(node) {
  if (activeTech === node.dataset.tech) return;
  activeTech = node.dataset.tech;
  paintOrbit();
  if (!motionPreference.matches && !motionPaused && orbitCore.animate) {
    orbitCore.animate([{transform:'scale(1)',opacity:.85},{transform:'scale(1.04)',opacity:1},{transform:'scale(1)',opacity:1}],{duration:280,easing:'ease-out'});
  }
}

for (const button of languageButtons) button.addEventListener('click',() => {
  setLanguage(button.dataset.lang,true);
  const url = new URL(window.location.href);
  url.searchParams.set('lang',currentLanguage);
  window.history.replaceState(window.history.state,'',url);
});
for (const [index,node] of orbitNodes.entries()) {
  node.addEventListener('click',() => selectTechnology(node));
  node.addEventListener('keydown',event => {
    const forward = event.key === 'ArrowRight' || event.key === 'ArrowDown';
    const backward = event.key === 'ArrowLeft' || event.key === 'ArrowUp';
    if (!forward && !backward) return;
    event.preventDefault();
    const next = orbitNodes[(index + (forward ? 1 : -1) + orbitNodes.length) % orbitNodes.length];
    next.focus({preventScroll:true});
    selectTechnology(next);
  });
}

if (motionToggle) motionToggle.addEventListener('click',() => {
  motionPaused = !motionPaused;
  syncMotion();
});
motionPreference.addEventListener('change',() => {
  syncMotion();
  drawOrbit(elapsed);
});
document.addEventListener('visibilitychange',syncMotion);

if (orbitMap) {
  if ('IntersectionObserver' in window) {
    const orbitObserver = new IntersectionObserver(entries => {
      orbitVisible = entries.some(entry => entry.isIntersecting);
      syncMotion();
    },{threshold:.05});
    orbitObserver.observe(orbitMap);
  } else {
    orbitVisible = true;
    syncMotion();
  }
  orbitMap.addEventListener('pointermove',event => {
    if (!finePointer.matches || !shouldAnimate() || pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = 0;
      if (!shouldAnimate()) return;
      const bounds = orbitMap.getBoundingClientRect();
      orbitMap.style.setProperty('--pointer-x',`${((event.clientX-bounds.left)/bounds.width-.5)*12}px`);
      orbitMap.style.setProperty('--pointer-y',`${((event.clientY-bounds.top)/bounds.height-.5)*12}px`);
    });
  });
  orbitMap.addEventListener('pointerleave',() => {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
    orbitMap.style.setProperty('--pointer-x','0px');
    orbitMap.style.setProperty('--pointer-y','0px');
  });
}

if (menuToggle && siteNav) {
  function closeMenu() {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded','false');
    updateMenuLabel();
  }
  menuToggle.addEventListener('click',() => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    siteNav.classList.toggle('is-open',open);
    menuToggle.setAttribute('aria-expanded',String(open));
    updateMenuLabel();
  });
  for (const link of siteNav.querySelectorAll('a')) link.addEventListener('click',closeMenu);
  document.addEventListener('keydown',event => {
    if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
  document.addEventListener('pointerdown',event => {
    if (!event.target.closest('.site-header') && siteNav.classList.contains('is-open')) closeMenu();
  });
}

function languageFromLocation() {
  const language = new URL(window.location.href).searchParams.get('lang');
  if (language === 'ru' || language === 'en') return language;
  try { return localStorage.getItem('alibek-portfolio-language') || 'en'; } catch (_) { return 'en'; }
}
setLanguage(languageFromLocation());
navigation.navigate(window.location.hash);
window.addEventListener('popstate',() => {
  setLanguage(languageFromLocation());
  navigation.navigate(window.location.hash);
});
window.addEventListener('hashchange',() => navigation.navigate(window.location.hash));
const reveals = [...document.querySelectorAll('[data-reveal]')];
// Content already on screen must never paint, disappear, and then animate back in.
// Keep entrance animations for content that enters the viewport while scrolling.
for (const element of reveals) {
  const bounds = element.getBoundingClientRect();
  if (bounds.top < window.innerHeight && bounds.bottom > 0) element.classList.add('is-visible');
}
document.documentElement.classList.add('has-js');
if (!motionPreference.matches && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  },{rootMargin:'0px 0px -4% 0px',threshold:.03});
  for (const element of reveals) if (!element.classList.contains('is-visible')) revealObserver.observe(element);
} else for (const element of reveals) element.classList.add('is-visible');

if ('IntersectionObserver' in window && siteNav) {
  const navLinks = [...siteNav.querySelectorAll('a')];
  const sectionObserver = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      for (const link of navLinks) {
        const selected = link.getAttribute('href') === '#' + entry.target.id;
        link.classList.toggle('is-current',selected);
        if (selected) link.setAttribute('aria-current','location');
        else link.removeAttribute('aria-current');
      }
    }
  },{rootMargin:'-20% 0px -65% 0px'});
  for (const link of navLinks) {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) sectionObserver.observe(target);
  }
}
