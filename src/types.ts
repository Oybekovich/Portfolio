export type Language = 'en' | 'uz' | 'ru';
export type Theme = 'dark' | 'light';

export interface Translation {
  nav: {
    about: string;
    skills: string;
    certificates: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    content: string;
    education: string;
  };
  skills: {
    title: string;
  };
  projects: {
    title: string;
    view: string;
    comingSoon: string;
  };
  certificates: {
    title: string;
    view: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      certificates: 'Certificates',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Frontend Developer Student',
      description: 'I have been studying at the "Al-Xorazmiy vorislari" project for 2 years, focusing on modern web technologies.',
      cta: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      content: "I am A'lobek Olimboyev, a passionate frontend developer in training. I love building clean, responsive, and user-friendly web interfaces.",
      education: 'Studying at "Al-Xorazmiy vorislari" since 2024.',
    },
    skills: {
      title: 'My Skills',
    },
    projects: {
      title: 'My Projects',
      view: 'View Project',
      comingSoon: 'Exciting projects are on the way! Stay tuned.',
    },
    certificates: {
      title: 'Certificates',
      view: 'View Certificate',
    },
    contact: {
      title: 'Contact Me',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
    },
  },
  uz: {
    nav: {
      about: 'Men haqimda',
      skills: 'Ko\'nikmalar',
      certificates: 'Sertifikatlar',
      projects: 'Loyihalar',
      contact: 'Aloqa',
    },
    hero: {
      greeting: "Salom, men",
      role: 'Frontend Dasturchi (Talaba)',
      description: '"Al-Xorazmiy vorislari" loyihasida 2 yildan beri zamonaviy veb-texnologiyalarni o\'rganib kelmoqdaman.',
      cta: 'Bog\'lanish',
    },
    about: {
      title: 'Men haqimda',
      content: "Men Olimboyev A'lobek Oybekovich, frontend dasturlashga qiziqqan va o'rganayotgan yosh mutaxassisman. Toza va qulay interfeyslar yaratishni yaxshi ko'raman.",
      education: '"Al-Xorazmiy vorislari" loyihasida 2024-yildan beri o\'qiyman.',
    },
    skills: {
      title: 'Mening ko\'nikmalarim',
    },
    projects: {
      title: 'Mening loyihalarim',
      view: 'Loyihani ko\'rish',
      comingSoon: 'Yangi loyihalar tez orada qo\'shiladi! Kuzatib boring.',
    },
    certificates: {
      title: 'Sertifikatlar',
      view: 'Sertifikatni ko\'rish',
    },
    contact: {
      title: 'Men bilan bog\'lanish',
      name: 'Ism',
      email: 'Email',
      message: 'Xabar',
      send: 'Xabarni yuborish',
      success: 'Xabar muvaffaqiyatli yuborildi!',
    },
  },
  ru: {
    nav: {
      about: 'Обо мне',
      skills: 'Навыки',
      certificates: 'Сертификаты',
      projects: 'Проекты',
      contact: 'Контакт',
    },
    hero: {
      greeting: "Привет, я",
      role: 'Студент Frontend-разработчик',
      description: 'Я учусь в проекте "Al-Xorazmiy vorislari" уже 2 года, изучая современные веб-технологии.',
      cta: 'Связаться',
    },
    about: {
      title: 'Обо мне',
      content: "Я Олимбоев А'лобек Ойбекович, увлеченный начинающий frontend-разработчик. Мне нравится создавать чистые и удобные веб-интерфейсы.",
      education: 'Учусь в "Al-Xorazmiy vorislari" с 2024 года.',
    },
    skills: {
      title: 'Мои навыки',
    },
    projects: {
      title: 'Мои проекты',
      view: 'Посмотреть проект',
      comingSoon: 'Скоро здесь появятся интересные проекты! Следите за обновлениями.',
    },
    certificates: {
      title: 'Сертификаты',
      view: 'Посмотреть сертификат',
    },
    contact: {
      title: 'Связаться со мной',
      name: 'Имя',
      email: 'Email',
      message: 'Сообщение',
      send: 'Отправить сообщение',
      success: 'Сообщение успешно отправлено!',
    },
  },
};
