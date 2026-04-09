// --- Theme Management ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.getElementById('body');

// Initialize Theme
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    body.classList.remove('dark');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// --- Language Management ---
const langBtns = document.querySelectorAll('.lang-btn');
const langTexts = document.querySelectorAll('.lang-text');
const langPill = document.getElementById('lang-pill');

// Set active lang logic
function setLanguage(lang) {
    // Update texts
    langTexts.forEach(el => {
        const textObject = el.dataset;
        if (textObject[lang]) {
            // For elements that might have icons inside, we just safely change textContent.
            // But if it has inner elements, we might lose them. 
            // In our HTML, `.lang-text` elements only contain text nodes.
            el.textContent = textObject[lang];
        }
    });
    
    // Update inputs (placeholders/labels if needed)
    // currently using label text in our HTML structure

    // Update active state
    langBtns.forEach((btn, index) => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
            // Move the pill indicator background accurately across button elements
            langPill.style.transform = `translateX(${btn.offsetLeft}px)`;
            langPill.style.width = `${btn.offsetWidth}px`;
        } else {
            btn.classList.remove('active');
        }
    });

    localStorage.setItem('lang', lang);
}

// Initial setup for language pill
setTimeout(() => {
    const defaultLang = localStorage.getItem('lang') || 'en';
    setLanguage(defaultLang);
}, 100);

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

// --- Mobile Menu Toggle ---
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav-links');

mobileBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    mobileBtn.setAttribute('aria-expanded', mobileNav.classList.contains('active') ? 'true' : 'false');
});

// Close mobile menu on click
document.querySelectorAll('.mobile-nav-links .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// --- Intersection Observer (Scroll Animations) ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Trigger skill bars animation
            if (entry.target.id === 'skills') {
                const skillBars = document.querySelectorAll('.skill-bar');
                skillBars.forEach(bar => {
                    bar.style.width = bar.dataset.width;
                });
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.observe-section').forEach(section => {
    observer.observe(section);
});
// Activate hero manually on load
document.querySelector('.hero-section').classList.add('active');


// --- Telegram Bot Integration ---
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formMessage = document.getElementById('form-message');

const BOT_TOKEN = '8692645375:AAERHhZNPXBSM6G9CjC82HiRnIzPhasbhuA';
const CHAT_ID = '7484608111';

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Formatting the message for Telegram HTML parser
    const text = `<b>🎉 New Message from Portfolio App!</b>\n\n` +
                 `👤 <b>Name:</b> ${name}\n` +
                 `📧 <b>Email:</b> ${email}\n` +
                 `💬 <b>Message:</b>\n${message}`;

    // Loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span class="btn-text">Sending...</span>`;
    submitBtn.disabled = true;
    formMessage.classList.add('hidden');
    formMessage.className = 'form-message'; // reset styling classes

    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            })
        });

        if (response.ok) {
            // Success
            contactForm.reset();
            formMessage.textContent = localStorage.getItem('lang') === 'uz' ? 'Xabar muvaffaqiyatli yuborildi!' :
                                      localStorage.getItem('lang') === 'ru' ? 'Сообщение успешно отправлено!' :
                                      'Message sent successfully!';
            formMessage.classList.add('text-green');
            formMessage.classList.remove('hidden');
        } else {
            // API Error
            throw new Error('Telegram API responded with an error');
        }
    } catch (error) {
        // Error
        console.error(error);
        formMessage.textContent = 'Something went wrong. Please try again.';
        formMessage.classList.add('text-red');
        formMessage.classList.remove('hidden');
    } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }
});

// --- Hero 3D Tilt Effect ---
const heroWrapper = document.querySelector('.hero-image-wrapper');
const heroBox = document.querySelector('.hero-tilt-wrapper');

if (heroWrapper && heroBox) {
    heroWrapper.addEventListener('mousemove', (e) => {
        const rect = heroWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Smoother, slightly more dynamic tilt mapping
        const rotateX = ((y - centerY) / centerY) * -20;
        const rotateY = ((x - centerX) / centerX) * 20;
        
        heroBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    heroWrapper.addEventListener('mouseleave', () => {
        heroBox.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
}
