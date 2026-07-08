// src/data/content.ts

export const siteConfig = {
  logoName: { ua: "Ярослав Ісаєв", en: "Yaroslav Isaiev" },
  cvPath: "/assets/cv-yaroslav.pdf"
};

export const navItems = [
  { id: "about", label: { ua: "Про мене", en: "About" } },
  { id: "experience", label: { ua: "Досвід", en: "Experience" } },
  { id: "contacts", label: { ua: "Контакти", en: "Contacts" } }
];

export const navCta = { ua: "Завантажити CV", en: "Download CV" };

export const hero = {
  heading: { ua: "Привіт, я Ярослав Ісаєв", en: "Hi, I'm Yaroslav Isaiev" },
  description: { ua: "Спеціаліст із комунікацій та візуального контенту з 5-річним досвідом.", en: "Communications and visual content specialist with 5 years of experience." },
  primaryCta: { ua: "Моє резюме", en: "My CV" },
  secondaryCta: { ua: "Написати мені", en: "Contact me" },
  photo: {
    src: "/assets/images/placeholder.jpg",
    alt: { ua: "Фото Ярослава", en: "Yaroslav's Photo" }
  }
};

export const about = {
  heading: { ua: "Про мене", en: "About me" },
  description: {
    ua: [
      "Спеціаліст із комунікацій та візуального контенту з 5-річним досвідом. Поєдную стратегічне планування маркетингу, досвід управління командами (6+ осіб) та практичні навички в дизайні та репортажній фотографії.",
      "Маю успішні кейси реалізації грантових проєктів (УКФ) та брендингу міських територій. Знаю, як зробити складне простим, а нудне — візуально привабливим."
    ],
    en: [
      "Communications and visual content specialist with 5 years of experience. I combine strategic marketing planning, team management (6+ people), and practical skills in design and photography.",
      "I have successful cases of implementing grant projects and city branding. I know how to make complex things simple and boring things visually appealing."
    ]
  }
};

export const experience = [
  {
    id: "shchepkin",
    period: { ua: "09.2023 - дотепер", en: "09.2023 - Present" },
    company: { ua: "НАЦІОНАЛЬНИЙ АКАДЕМІЧНИЙ ТЕАТР ІМ. М. ЩЕПКІНА", en: "SHCHEPKIN NATIONAL ACADEMIC THEATER" },
    role: { ua: "Начальник відділу інформаційно-презентаційного", en: "Head of Information & Presentation Department" },
    achievements: {
      ua: [
        "Управління командою: Координую 6 фахівців (SMM, дизайн, фото/відео). Створюю та координую підготовку комунікаційних матеріалів: контент для соцмереж, афіші, презентації, інфографіку та звітні матеріали.",
        "Art Direction & Branding: Розробив та впровадив з нуля єдиний візуальний стиль театру для Instagram та Facebook.",
        "Грант-менеджмент: Реалізував 2 інклюзивні проєкти від УКФ для людей із порушеннями зору та слуху. Забезпечив повний цикл: від медіапланування та управління підрядниками до фінальної звітності.",
        "Media Relations: Розвиваю партнерські комунікації з інфлюенсерами та інституційними партнерами."
      ]
    },
    hasMedia: true,
    mediaNote: "Сюди будуть додані картинки, активні посилання на соцмережі та відео з УКФ."
  },
  {
    id: "sumy-council",
    period: { ua: "09.2022 - 09.2023", en: "09.2022 - 09.2023" },
    company: { ua: "СУМСЬКА МІСЬКА РАДА", en: "SUMY CITY COUNCIL" },
    role: { ua: "Начальник відділу маркетингу, промоції і туризму", en: "Head of Marketing, Promotion and Tourism Department" },
    achievements: {
      ua: [
        "Брендинг соцмереж: Розробив та впровадив візуальний стиль офіційних сторінок міськради.",
        "Дизайн та урбаністика: Створив дизайн адресних покажчиків міста (офіційно затверджені громадою).",
        "Project Management: Налагодив роботу туристичного бренду VisitSumy. Координував команду, контролював створення контент-планів та забезпечив дотримання єдиного стилю комунікації."
      ]
    },
    hasMedia: true,
    mediaNote: "Сюди будуть додані блоки з картинками адресних покажчиків та соцмереж."
  },
  {
    id: "automagistral",
    period: { ua: "05.2021 - 08.2022", en: "05.2021 - 08.2022" },
    company: { ua: "АВТОМАГІСТРАЛЬ-ПІВДЕНЬ", en: "AUTOMAGISTRAL-PIVDEN" },
    role: { ua: "Ведучий YouTube-каналу", en: "YouTube Channel Host" },
    achievements: {
      ua: [
        "Content Creation: Розробка сценаріїв, пошук інформаційних приводів та підготовка матеріалів для відеооглядів інфраструктурних проєктів компанії.",
        "Video Production: Робота в кадрі як ведучий, проведення інтерв'ю з експертами, координація знімального процесу на локаціях.",
        "Brand Awareness: Забезпечення комунікації з цільовою аудиторією через відеоформат, підвищення впізнаваності та лояльності до бренду роботодавця."
      ]
    },
    hasMedia: true,
    mediaType: "video",
    videoIds: ["BNKLmgkbUWM", "LR278QtfDac"]
  }
];

export const education = [
  {
    id: "snau",
    period: { ua: "2023 - 2024", en: "2023 - 2024" },
    degree: { ua: "Магістр", en: "Master's Degree" },
    major: { ua: "Маркетинг", en: "Marketing" },
    university: { ua: "Сумський національний аграрний університет", en: "Sumy National Agrarian University" }
  },
  {
    id: "khneu-media",
    period: { ua: "2021 - 2022", en: "2021 - 2022" },
    degree: { ua: "Магістр", en: "Master's Degree" },
    major: { ua: "Медіакомунікації", en: "Media Communications" },
    university: { ua: "Харківський національний економічний університет ім. С. Кузнеця", en: "Kharkiv National University of Economics" }
  },
  {
    id: "khneu-pr",
    period: { ua: "2017 - 2021", en: "2017 - 2021" },
    degree: { ua: "Бакалавр", en: "Bachelor's Degree" },
    major: { ua: "Реклама та PR", en: "Advertising and PR" },
    university: { ua: "Харківський національний економічний університет ім. С. Кузнеця", en: "Kharkiv National University of Economics" }
  }
];

export const skills = {
  professionalHeading: { ua: "Професійні навички", en: "Professional Skills" },
  professional: [
    { ua: "PR-комунікації", en: "PR Communications" },
    { ua: "Репортажна фотозйомка", en: "Reportage Photography" },
    { ua: "Копірайтинг", en: "Copywriting" },
    { ua: "SMM", en: "SMM" },
    { ua: "Грант-менеджмент", en: "Grant Management" },
    { ua: "Event Management", en: "Event Management" },
    { ua: "Кризові комунікації", en: "Crisis Communications" },
    { ua: "Керування командою", en: "Team Management" }
  ],
  technicalHeading: { ua: "Технічні інструменти", en: "Technical Tools" },
  technical: [
    { ua: "Adobe Photoshop", en: "Adobe Photoshop" },
    { ua: "Adobe Illustrator", en: "Adobe Illustrator" },
    { ua: "Figma", en: "Figma" },
    { ua: "Adobe Lightroom", en: "Adobe Lightroom" }
  ],
  languagesHeading: { ua: "Мови", en: "Languages" },
  languages: [
    { name: { ua: "Українська", en: "Ukrainian" }, level: { ua: "Рідна", en: "Native" } },
    { name: { ua: "Англійська", en: "English" }, level: { ua: "Нижче середнього", en: "Pre-Intermediate" } }
  ]
};

export const contacts = {
  heading: { ua: "Контакти", en: "Contacts" },
  description: {
    ua: "Відкритий до нових проєктів та співпраці. Зв'яжіться зі мною зручним для вас способом.",
    en: "Open to new projects and cooperation. Feel free to contact me."
  },
  email: "hello@example.com", 
  phone: "+38 (000) 000-00-00", 
  socials: [
    { name: "Instagram", url: "https://instagram.com/" }, 
    { name: "Facebook", url: "https://facebook.com/" },   
    { name: "LinkedIn", url: "https://linkedin.com/" }    
  ]
};