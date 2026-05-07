export const projects = [
  {
    slug: 'eudi',
    title: 'EUDI',
    year: '2026',
    kind: 'frontend vývoj',
    tech: ['Livewire', 'Alpine.js', 'Tailwind CSS', 'Laravel'],
    description:
      'Podíl na vývoji plánovače pro interní aplikaci ke správě LED panelů v metru. Šlo o plánovací kalendář pro řízení obsahu a časování zobrazení na panelech, postavený nad Livewire, Alpine.js a Tailwind CSS s důrazem na přehledné ovládání a práci s časovými intervaly.',
    descriptionLink: {
      label: 'eudi.cz',
      url: 'https://eudi.cz',
    },
  },
  {
    slug: 'buylo',
    title: 'Buylo',
    year: '2025',
    kind: 'startupový vývoj',
    tech: ['Vue.js', 'Node.js', 'AI agents', 'Data processing'],
    description:
      'Vývoj startupové webové aplikace pro práci s daty získanými z antén. Projekt zahrnoval Vue.js frontend, Node.js služby, zpracování většího objemu příchozích dat, důraz na rychlost systému a napojení na AI vyhodnocování včetně komunikace s AI agenty.',
    demo: 'https://app.buylo.ai/prepare-demo',
  },
  {
    slug: 'eshop-admin',
    title: 'E-shop s administrací',
    year: '2024',
    kind: 'frontend vývoj',
    tech: ['Vue.js', 'REST API', 'Performance', 'Technical SEO'],
    description:
      'Vývoj zákaznické části e-shopu Partsdepot i administračního rozhraní pro správu obsahu a produktů. Práce zahrnovala propojení obou částí aplikace, komunikaci přes API, ladění výkonu, SEO a optimalizace pro dobré Lighthouse score.',
  },
  {
    slug: 'internal-erp',
    title: 'Interní ERP systém',
    year: '2024',
    kind: 'týmový frontend vývoj',
    tech: ['Vue.js', 'REST API', 'Responsive UI', 'Data tables'],
    description:
      'Spolupráce v týmu na vývoji rozsáhlé interní webové aplikace pro správu zaměstnanců, fakturace, smluv, zápůjček, projektů a skladových zásob. Frontend komunikoval s backendem přes API, důraz byl na rychlost, responzivitu a použitelné zobrazení objemných tabulkových dat.',
  },
  {
    slug: 'apiscale',
    title: 'APISCALE',
    year: '2023',
    kind: 'frontend vývoj',
    tech: ['Vue.js', 'REST API', 'Charts'],
    description:
      'Webová aplikace pro zpracování dat z vah pod úly a pomocných čidel. Aplikace převáděla naměřená data do přehledných grafů, metrik a vyhodnocení trendů, včetně notifikací a upozornění na možné problémy nebo podezřelé stavy.',
  },
  {
    slug: 'o2-redesign',
    title: 'O2.cz redesign',
    year: '2022–2023',
    kind: 'frontend vývoj',
    tech: ['jNetPublish', 'TFS', 'SCSS', 'Vanilla JS'],
    description:
      'Spolupráce na redesignu webu O2, rozvoji design systému a napojování nových komponent do CMS jNetPublish.',
    demo: 'https://www.o2.cz',
  },
  {
    slug: 'podcast-pf',
    title: 'Podcast PRF UK',
    year: '2022',
    kind: 'vlastní projekt',
    tech: ['RSS', 'Drupal', 'JS', 'Sass'],
    description:
      'Automatizace načítání podcastových epizod — původně přes Spotify API, po omezeních API přepracováno na RSS feed. Zakomponováno přímo do stránek Právnické fakulty UK.',
    demo: 'https://prf.cuni.cz/podcast',
  },
  {
    slug: 'jobs-prf',
    title: 'Jobs microsite PRF UK',
    year: '2021',
    kind: 'vlastní projekt',
    tech: ['Drupal', 'Twig', 'SCSS', 'jQuery'],
    description:
      'Microsite pro sdílení nabídek pracovních míst na webu Právnické fakulty UK.',
    demo: 'http://prf.cuni.cz/jobs',
    repo: 'https://github.com/konmike/jobs',
  },
  {
    slug: 'law-prf',
    title: 'law.prf.cuni.cz',
    year: '2021',
    kind: 'vlastní projekt',
    tech: ['WordPress', 'PHP', 'Sass', 'Screenshotmachine API'],
    description:
      'Rozcestník pro subdomény Právnické fakulty vytvářené v rámci WP multisite. Propojení se Screenshotmachine API pro živé náhledy.',
    demo: 'https://law.prf.cuni.cz',
    repo: 'https://github.com/konmike/law.prf.cuni.cz',
  },
  {
    slug: 'srdcechvaly',
    title: 'Srdce chvály',
    year: '2021',
    kind: 'vlastní projekt',
    tech: ['Vue.js', 'YouTube API', 'Sass'],
    description:
      'Vue.js aplikace komunikující s YouTube API — přehled videí z kanálu věnovaného titulkům křesťanských videoklipů.',
    demo: 'https://srdcechvaly.konecnymichal.cz',
    repo: 'https://github.com/konmike/srdcechvaly',
  },
  {
    slug: 'aksm',
    title: 'AKSM redesign',
    year: '2020',
    kind: 'klientský projekt',
    tech: ['WordPress', 'PHP', 'Sass'],
    description:
      'Redesign webu Asociace křesťanských spolků mládeže. Nový responzivní design, custom WordPress šablona a snadná správa obsahu.',
    demo: 'https://aksm.cz',
    repo: 'https://github.com/konmike/aksm',
  },
  {
    slug: 'html-table-to-pdf',
    title: 'HTML tabulka → PDF',
    year: '2020',
    kind: 'vlastní projekt',
    tech: ['PHP', 'JS', 'CSS'],
    description:
      'Nástroj pro převod HTML tabulek do čitelného PDF dle předvoleb vyučujících. Využito na Právnické fakultě UK.',
    demo: 'https://moodle-export.konecnymichal.cz',
    repo: 'https://github.com/konmike/htmlTableToPDF',
  },
  {
    slug: 'calendar',
    title: 'Kalendář (BP)',
    year: '2020',
    kind: 'bakalářská práce',
    tech: ['Spring', 'jQuery', 'JS', 'MVC'],
    description:
      'Aplikace pro tvorbu nástěnných kalendářů vytvořená v rámci bakalářské práce na ČVUT FIT.',
    demo: 'https://portal.uspin.cz/calendar',
    repo: 'https://github.com/konmike/calendar',
  },
];
