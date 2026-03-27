import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { 
  Github, 
  Send, 
  Instagram, 
  Mail, 
  Moon, 
  Sun, 
  Languages, 
  ExternalLink,
  Code2,
  Palette,
  Layout,
  Terminal,
  ChevronRight,
  Award,
  FileCheck,
  Globe,
  Gamepad2
} from 'lucide-react';
import { cn } from './lib/utils';
import { translations, type Language, type Theme } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    emailjs.init('NtGzOmfiDTGdwxZ5J');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        'service_r4d3nxy',
        'template_mlfgyzq',
        formRef.current,
        'NtGzOmfiDTGdwxZ5J'
      );
      console.log('EmailJS Success:', result.text);
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      const errorMessage = error?.text || error?.message || 'Unknown error';
      setSubmitStatus('error');
      alert(`EmailJS Error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const skills = [
    { name: 'HTML5', icon: <Layout className="w-5 h-5" />, level: '95%' },
    { name: 'CSS3', icon: <Palette className="w-5 h-5" />, level: '90%' },
    { name: 'JavaScript', icon: <Terminal className="w-5 h-5" />, level: '70%' },
    { name: 'Tailwind CSS', icon: <Code2 className="w-5 h-5" />, level: '85%' },
    { name: 'SCSS / SASS', icon: <Palette className="w-5 h-5" />, level: '80%' },
  ];

  const certificates = [
    { name: 'Meta Front-End Developer Specialization', url: 'https://coursera.org/verify/specialization/CV4LJU8FZYXO', issuer: 'Meta' },
    { name: 'Introduction to Front-End Development', url: 'https://www.coursera.org/account/accomplishments/certificate/5ZNVQXPFEJGR', issuer: 'Meta' },
    { name: 'Programming with JavaScript', url: 'https://www.coursera.org/account/accomplishments/certificate/MRWTW2IWI571', issuer: 'Meta' },
    { name: 'Version Control', url: 'https://www.coursera.org/account/accomplishments/certificate/H3VT8X9QBKMK', issuer: 'Meta' },
    { name: 'HTML and CSS in depth', url: 'https://www.coursera.org/account/accomplishments/certificate/PKVYRTGNWOW0', issuer: 'Meta' },
    { name: 'React Basics', url: 'https://www.coursera.org/account/accomplishments/certificate/D2DP196LC54G', issuer: 'Meta' },
    { name: 'Advanced React', url: 'https://www.coursera.org/account/accomplishments/certificate/9ATY544EWG9V', issuer: 'Meta' },
  ];

  const projects = [
    {
      title: 'Nature Conservation',
      description: {
        en: 'A beautiful landing page focused on nature preservation and environmental awareness.',
        uz: 'Tabiatni asrash va ekologik xabardorlikka bag\'ishlangan chiroyli landing page.',
        ru: 'Красивый лендинг, посвященный сохранению природы и экологической осведомленности.'
      },
      url: 'https://nature-conservation.vercel.app/',
      icon: <Globe className="w-6 h-6" />,
      tags: ['HTML', 'CSS', 'Responsive']
    },
    {
      title: 'Astro Gaming',
      description: {
        en: 'An immersive gaming project with modern UI elements and dynamic layouts.',
        uz: 'Zamonaviy UI elementlari va dinamik maketlarga ega bo\'lgan immersiv o\'yin loyihasi.',
        ru: 'Иммерсивный игровой проект с современными элементами интерфейса и динамическими макетами.'
      },
      url: 'https://astro-gaming-project.vercel.app/',
      icon: <Gamepad2 className="w-6 h-6" />,
      tags: ['HTML', 'Tailwind CSS', 'JS']
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github />, url: 'https://github.com/Oybekovich' },
    { name: 'Telegram', icon: <Send />, url: 'https://t.me/oybekovic1' },
    { name: 'Instagram', icon: <Instagram />, url: 'https://www.instagram.com/xw.lvl' },
    { name: 'Email', icon: <Mail />, url: 'mailto:alobek808@gmail.com' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-300 selection:bg-orange-500/30",
      theme === 'dark' ? "bg-[#0a0a0a] text-white" : "bg-white text-gray-900"
    )}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg md:text-xl font-bold tracking-tighter shrink-0"
          >
            OYBEKOVICH<span className="text-orange-500">.</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, value]) => (
              <motion.a 
                key={key} 
                href={`#${key}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
              >
                {value}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Animated Language Switcher */}
            <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1 rounded-full border border-gray-200 dark:border-white/10 relative">
              {(['en', 'uz', 'ru'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "relative px-2 md:px-3 py-1 text-[10px] md:text-xs font-bold uppercase z-10 transition-colors duration-300",
                    lang === l ? "text-white" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  )}
                >
                  {l}
                  {lang === l && (
                    <motion.div
                      layoutId="lang-pill"
                      className="absolute inset-0 bg-orange-500 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Theme Switcher */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block">
                {t.hero.greeting}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Olimboyev <br />
                A'lobek <br />
                <span className="text-orange-500">Oybekovich</span>
              </h1>
              <p className="text-lg opacity-60 max-w-lg mb-4 leading-relaxed">
                {t.hero.description}
              </p>
              <p className="text-md opacity-60 max-w-lg mb-8 leading-relaxed">
                {t.about.content} {t.about.education}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact"
                  className="px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all transform hover:scale-105"
                >
                  {t.hero.cta}
                </a>
                <div className="flex items-center gap-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-[500px] mx-auto w-full"
            >
              <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full" />
              <div className="relative w-full h-full rounded-3xl border border-white/10 overflow-hidden bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center">
                <Code2 className="w-20 h-20 md:w-32 md:h-32 text-orange-500 opacity-50" />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 p-4 md:p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] md:text-xs font-mono text-orange-500">STATUS</span>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <p className="text-xs md:text-sm font-medium">Learning Frontend at Al-Xorazmiy vorislari</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-20 px-6 bg-zinc-950/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-1 bg-orange-500" />
            {t.skills.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-orange-500" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section 
        id="certificates" 
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-1 bg-orange-500" />
            {t.certificates.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm hover:border-orange-500/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Award className="w-16 h-16" />
                </div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-orange-500">{cert.issuer}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-6 group-hover:text-orange-500 transition-colors">
                    {cert.name}
                  </h3>
                  <div className="mt-auto">
                    <a 
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:underline"
                    >
                      {t.certificates.view}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20 px-6 bg-zinc-950/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-1 bg-orange-500" />
            {t.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm hover:border-orange-500/50 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  {project.icon}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  
                  <p className="opacity-60 mb-8 leading-relaxed">
                    {project.description[lang]}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all group/btn"
                  >
                    {t.projects.view}
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
          
          {projects.length === 0 && (
            <div className="p-12 rounded-3xl border border-dashed border-white/20 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-orange-500/10 flex items-center justify-center mb-6">
                <Terminal className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.projects.comingSoon}</h3>
              <p className="opacity-60 max-w-sm">
                I'm currently working on several projects as part of my learning journey at Al-Xorazmiy vorislari.
              </p>
            </div>
          )}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">{t.contact.title}</h2>
              <p className="text-lg opacity-60 mb-8">
                Have a question or want to work together? Feel free to reach out through any of these platforms.
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:alobek808@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-sm opacity-60">Email</p>
                    <p className="font-medium">alobek808@gmail.com</p>
                  </div>
                </a>
                <a 
                  href="https://t.me/oybekovic1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                    <Send />
                  </div>
                  <div>
                    <p className="text-sm opacity-60">Telegram</p>
                    <p className="font-medium">@oybekovic1</p>
                  </div>
                </a>
              </div>
            </div>

            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium opacity-60">{t.contact.name}</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium opacity-60">{t.contact.email}</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium opacity-60">{t.contact.message}</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 outline-none transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2",
                  isSubmitting ? "bg-orange-500/50 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600 text-white"
                )}
              >
                {isSubmitting ? 'Sending...' : t.contact.send}
                <ChevronRight className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-500 text-sm font-medium text-center"
                  >
                    {t.contact.success}
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-sm font-medium text-center"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-6">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Olimboyev A'lobek Oybekovich. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
