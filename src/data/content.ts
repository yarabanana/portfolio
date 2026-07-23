// src/data/content.ts

export const siteConfig = {
  logoName: { ua: "Ярослав Ісаєв", en: "Yaroslav Isaiev" },
  cvPath: "/assets/cv-yaroslav-isaiev.pdf"
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
  photo: { src: "/assets/images/yaroslav-photo.jpg", alt: { ua: "Фото Ярослава", en: "Yaroslav's Photo" } }
};

export const about = {
  heading: { ua: "Про мене", en: "About me" },
  description: { 
    ua: [
      "Спеціаліст із комунікацій та візуального контенту з 5-річним досвідом. Поєдную стратегічне планування маркетингу, досвід управління командами (6+ осіб) та практичні навички в дизайні та репортажній фотографії.",
      "Маю успішні кейси реалізації грантових проєктів (УКФ) та брендингу міських територій. Знаю, як зробити складне простим, а нудне — візуально привабливим."
    ], 
    en: [
      "Communications and visual content specialist with 5 years of experience...",
      "I have successful cases of implementing grant projects..."
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
        { text: "Управління командою: Координую 6 фахівців (SMM, дизайн, фото/відео). Створюю та координую підготовку комунікаційних матеріалів: контент для соцмереж, афіші, презентації, інфографіку та звітні матеріали." },
        { 
          text: "Art Direction & Branding: Розробив та впровадив єдиний візуальний стиль театру для офіційних комунікаційних каналів Instagram, Facebook.", 
          link: { url: "https://www.instagram.com/shchepkintheatre/", label: "Перейти в Instagram театру ↗" } 
        },
        { 
          text: "Грант-менеджмент: Реалізував 2 інклюзивні проєкти від УКФ для людей із порушеннями зору та слуху. Забезпечив медіапланування, роботу з підрядниками, закупівлі та підготовку фінальної звітності.",
          embed: { type: "instagram-reel", url: "https://www.instagram.com/reel/DOY_dfuCIII/" }
        },
        { text: "Media Relations: Розвиваю партнерські комунікації з інфлюенсерами та інституційними партнерами." }
      ]
    }
  },
  {
    id: "sumy-council",
    period: { ua: "09.2022 - 09.2023", en: "09.2022 - 09.2023" },
    company: { ua: "СУМСЬКА МІСЬКА РАДА", en: "SUMY CITY COUNCIL" },
    role: { ua: "Начальник відділу маркетингу, промоції і туризму", en: "Head of Marketing, Promotion and Tourism Department" },
    achievements: {
      ua: [
        { 
          text: "Брендинг соцмереж: Розробив та впровадив оновлений візуальний стиль для офіційних сторінок міської ради у соціальних мережах.",
          link: { url: "https://www.facebook.com/smr.gov.ua?locale=uk_UA", label: "Дивитися Facebook міськради ↗" }
        },
        { 
          text: "Дизайн та урбаністика: Створив та успішно імплементував дизайн адресних покажчиків міста, які були офіційно затверджені громадою.",
          link: { url: "https://smr.gov.ua/uk/misto/brend-mista-sumy/27729-tekhnichni-vimogi-do-dizajnu-vulichnikh-pokazhchikiv.html", label: "Технічні вимоги до покажчиків ↗" }
        },
        { text: "Project Management: Керував розвитком туристичного бренду VisitSumy: координував команду, розробив комунікаційну стратегію, контролював контент-плани та забезпечив єдиний tone of voice." }
      ]
    }
  },
  {
    id: "automagistral",
    period: { ua: "05.2021 - 08.2022", en: "05.2021 - 08.2022" },
    company: { ua: "АВТОМАГІСТРАЛЬ-ПІВДЕНЬ", en: "AUTOMAGISTRAL-PIVDEN" },
    role: { ua: "Ведучий YouTube-каналу", en: "YouTube Channel Host" },
    achievements: {
      ua: [
        { 
          text: "Public Communications: Представляв компанію як ведучий офіційного YouTube-каналу, розповідаючи про будівництво масштабних інфраструктурних проєктів України у форматі репортажів.",
          embed: { type: "youtube", ids: ["BNKLmgkbUWM", "LR278QtfDac"] }
        },
        { 
          text: "Visual Storytelling: Забезпечував репортажний фото- та відеосупровід із будівельних майданчиків, пресконференцій, форумів і корпоративних подій.",
          hasPhotos: true
        }
      ]
    }
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
  // ДОДАНО НОВІ ІНСТРУМЕНТИ: OBS та Resolume Arena
  technical: [
    { ua: "Adobe Photoshop", en: "Adobe Photoshop" },
    { ua: "Adobe InDesign", en: "Adobe InDesign" },
    { ua: "Figma", en: "Figma" },
    { ua: "Adobe Lightroom", en: "Adobe Lightroom" },
    { ua: "Adobe Premiere Pro", en: "Adobe Premiere Pro" },
    { ua: "DaVinci Resolve", en: "DaVinci Resolve" },
    { ua: "OBS", en: "OBS" },
    { ua: "Resolume Arena", en: "Resolume Arena" }
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
  telegram: "https://t.me/yaroslav_isaiev", 
  socials: [
    { name: "Facebook", url: "https://www.facebook.com/isaiev.yaroslav/" },
    { name: "Instagram", url: "https://www.instagram.com/yaroslav.isaiev/" }
  ]
};