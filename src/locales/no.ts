export default {
  nav: {
    experience: 'Erfaring',
    projects: 'Prosjekter',
    skills: 'Ferdigheter',
    education: 'Utdanning',
    contact: 'Kontakt',
    language: 'Språk',
  },
  hero: {
    greeting: 'Hei, jeg heter',
    title: 'Programvareutvikler',
    summary:
      'Programvareutvikler med over 7 års erfaring med utvikling av webapplikasjoner, med spesialisering innen frontendutvikling med Vue.js, TypeScript og JavaScript. Har erfaring med å ta ansvar for frontendfunksjonalitet fra krav til ferdig leveranse, med fokus på responsive brukeropplevelser, datadrevne grensesnitt og ytelse.',
    contact: 'Kontakt meg',
    askAI: 'Spør AI',
    aiLabel: 'AI-karriereassistent',
    aiHeading: 'Spør om min erfaring',
    aiDescription:
      'Spør om mine ferdigheter, erfaring, prosjekter eller tekniske bakgrunn.',
    downloadCV: 'Last ned CV (PDF)',
  },
  experience: {
    label: 'Karriere',
    heading: 'Arbeidserfaring',

    jobs: [
      {
        role: 'Senior frontendutvikler',
        location: 'Norge',
        period: 'Juni 2023 – i dag',
        description:
          'Jeg jobber med en SaaS-plattform for markedsanalyse i produksjon, med hovedfokus på å utvikle datadrevne frontend-løsninger ved hjelp av Vue.js og TypeScript. Jeg tar ansvar for frontend-funksjonalitet fra forståelse av krav og utforming av løsninger til implementering, testing og levering.',
        highlights: [
          'Utviklet og forbedret datadrevne dashbord, gjenbrukbare widgeter, interaktive tabeller og visualiseringskomponenter.',
          'Utviklet dashbord med flere faner, slik at brukere kan organisere widgeter på tvers av konfigurerbare faner.',
          'Forbedret ytelsen til dashbord gjennom optimalisert datalasting, lazy loading, uendelig rulling, færre unødvendige API-kall og mer effektiv automatisk lagring.',
          'Gjennomgår pull requests og tester ulike scenarier for å identifisere feil og spesialtilfeller før lansering.',
        ],
      },
      {
        role: 'Web- og frontendutvikler',
        location: 'Pakistan',
        period: '2017 – 2022',
        description:
          'Jeg har hatt flere roller innen web- og frontendutvikling i ulike programvareselskaper, der jeg har jobbet med kundenettsteder, CMS-plattformer og større webapplikasjoner ved hjelp av JavaScript, Angular, React, WordPress og HubSpot.',
        highlights: [
          'Utviklet responsive HubSpot-nettsteder basert på eksisterende maler og tilpassede design, og integrerte frontend-løsninger med CMS-funksjonalitet.',
          'Jobbet mye med den sosiale plattformen SocioOn og utviklet frontend-funksjonalitet for nyhetsstrømmer, innlegg, profiler, kommentarer, innstillinger og responsive grensesnitt.',
          'Utviklet WordPress-nettsteder fra bunnen av, inkludert nettbutikk, blogg, SEO og ytelsesrelatert funksjonalitet.',
          'Gikk videre til en teamlederrolle hos Traxim Technology, der jeg ledet et team på fire personer og bidro til opplæring av juniorutviklere.',
        ],
      },
    ],
  },
  projects: {
    label: 'Utvalgte arbeider',
    heading: 'Utvalgte prosjekter',

    items: [
      {
        location: 'Norge',
        duration: '4-måneders prosjekt',
        description:
          'Utviklet selvstendig hele frontend-løsningen for et nettbasert lagerstyringssystem, utviklet for å samle registrering og driftsdata fra over 100 oppdrettsanlegg på ett sted.',
        highlights: [
          'Utviklet frontend-løsningen fra bunnen av med Vue.js, inkludert autentisering, brukerregistrering, oversiktsvisninger og store datatabeller.',
          'Implementerte CRUD-funksjonalitet og integrasjoner mot REST API-er for håndtering av informasjon om oppdrettsanlegg, fôr og fisk.',
          'Samarbeidet direkte med kunden for å forstå krav, utforske ulike grensesnittløsninger og tilpasse løsningen etter hvert som kravene endret seg.',
          'Leverte hele frontend-løsningen innen fire måneder og erstattet manuell datahåndtering med en sentralisert digital arbeidsflyt.',
        ],
      },
      {
        location: 'Pakistan',
        duration: 'Langsiktig produktutvikling',
        description:
          'Jobbet omfattende med frontend-utvikling på en stor sosial medieplattform, der jeg utviklet og forbedret brukerrettet funksjonalitet på tvers av sentrale deler av produktet.',
        highlights: [
          'Utviklet frontend-funksjonalitet for nyhetsstrømmer, innlegg, profiler, innstillinger, sidepaneler og responsive mobilgrensesnitt.',
          'Utviklet og forbedret sosiale interaksjoner, inkludert likerklikk, kommentarer og svar på kommentarer i flere nivåer.',
          'Jobbet i en stor eksisterende applikasjon og utvidet funksjonaliteten samtidig som kompatibiliteten med eksisterende funksjoner ble ivaretatt.',
          'Samarbeidet med backend-utviklere om integrasjon av frontend-funksjonalitet og levering av nye funksjoner.',
        ],
      },
    ],
  },
  skills: {
    label: 'Teknologier',
    heading: 'Tekniske ferdigheter',
    categories: {
      frontend: 'Frontend',
      stateManagement: 'Tilstandshåndtering',
      backend: 'Backend og API-er',
      platforms: 'CMS og plattformer',
      database: 'Databaser',
      devOps: 'Sky og DevOps',
      engineering: 'Programvareutvikling',
    },
    engineering: {
      'Code Reviews': 'Kodegjennomgang',
      'Pull Requests': 'Pull requests',
      'Testing & Debugging': 'Testing og feilsøking',
      'Responsive Development': 'Responsiv utvikling',
      'Frontend Performance': 'Frontend-ytelse',
      'Agile Team Collaboration': 'Samarbeid i smidige team',
    },
  },
  education: {
    label: 'Bakgrunn',
    heading: 'Utdanning',
    degrees: [
      'Bachelorgrad i informatikk (BSCS)',
    ],
  },

  certifications: {
    label: 'Kompetanseutvikling',
    heading: 'Sertifiseringer',
    names: [
      'Grunnleggende AI-kompetanse — 1 studiepoeng (ECTS)',
      'Microsoft Learn — opplæring i AI og Azure',
    ],
  },
  contact: {
    label: 'Kontakt',
    heading: 'Ta kontakt',
    description:
      'Ønsker du å diskutere en jobbmulighet eller vite mer om min erfaring? Ta gjerne kontakt.',
    email: 'E-post',
    linkedinProfile: 'Se profilen min',
    phone: 'Telefon',
    location:
      'Bosatt i Trondheim, Norge · Åpen for å flytte til andre steder i Norge',
  },

  footer: {
    backToTop: 'Tilbake til toppen',
    rights: 'Alle rettigheter forbeholdt.',
  },
  ai: {
    title: 'Asads AI-karriereassistent',
    subtitle: 'AI-drevet porteføljeassistent',
    online: 'Pålogget',
    welcome:
      'Hei! Jeg er Asads AI-karriereassistent. Du kan spørre meg om hans arbeidserfaring, ferdigheter, prosjekter, utdanning eller sertifiseringer.',
    tryAsking: 'Du kan for eksempel spørre:',
    suggestedQuestions: {
      hire: 'Hvorfor bør vi ansette Asad?',
      projects: 'Fortell meg om prosjektene til Asad',
      jobMatch: 'Hvordan passer Asad til kravene i stillingen vår?',
    },
    placeholder: 'Still et spørsmål om Asad...',
    inputLabel: 'Still Asads AI-karriereassistent et spørsmål',
    suggestedLabel: 'Foreslått spørsmål',
    sendLabel: 'Send melding',
    disclaimer: 'Svarene er basert på Asads dokumenterte faglige profil.',
    errors: {
      request: 'AI-assistenten kunne ikke behandle forespørselen din.',
      general:
        'Noe gikk galt under kontakten med AI-assistenten. Prøv igjen.',
      unavailable:
        'AI-assistenten er ikke tilgjengelig akkurat nå. Prøv igjen om litt.',
    },
  },
}