// Traduções

/*
const translations = {
    'pt-BR': {
        'hero-title': 'Gestão & Negócios Globais',
        'hero-subtitle': 'Soluções completas em importação, logística e representação comercial internacional',
        'hero-cta': 'Conheça Nossos Serviços',
        'services-title': 'Nossos Principais Serviços',
        'service1-title': 'Importação',
        'service1-desc': 'Importamos produtos de alta qualidade diretamente da China e Ásia.',
        'service2-title': 'Agente de Indústrias',
        'service2-desc': 'Estruturar operações comerciais e conectar fabricantes .',
        'service3-title': 'Serviços',
        'service3-desc': 'Importação direto pela sua empresa , sem revenda de produto.',
        'footer-desc': 'Líder em importação e negócios globais conectando Brasil e China.',
        'footer-contact': 'Contato'
    },
    'en': {
        'hero-title': 'Global Management & Business',
        'hero-subtitle': 'Complete solutions in import, logistics and international commercial representation',
        'hero-cta': 'Discover Our Services',
        'services-title': 'Our Main Services',
        'service1-title': 'Importation',
        'service1-desc': 'We import high-quality products directly from China and Asia.',
        'service2-title': 'Industrial Agent',
        'service2-desc': 'Structuring business operations and connecting manufacturers.',
        'service3-title': 'Services',
        'service3-desc': 'Import directly through your company, without reselling the product.',
        'footer-desc': 'Leader in import and global business connecting Brazil and China.',
        'footer-contact': 'Contact'
    },
    'es': {
        'hero-title': 'Gestión & Negocios Globales',
        'hero-subtitle': 'Soluciones completas en importación, logística y representación comercial internacional',
        'hero-cta': 'Conozca Nuestros Servicios',
        'services-title': 'Nuestros Principales Servicios',
        'service1-title': 'Importación',
        'service1-desc': 'Importamos productos de alta calidad directamente de China y Asia.',
        'service2-title': 'Agente industrial',
        'service2-desc': 'Estructurar las operaciones comerciales y conectar a los fabricantes.',
        'service3-title': 'Servicios',
        'service3-desc': 'Importa directamente a través de tu empresa, sin revender el producto.',
        'footer-desc': 'Líder en importación y negocios globales conectando Brasil y China.',
        'footer-contact': 'Contacto'
    }
};

*/


// Função para trocar idioma
function changeLanguage(lang) {
    document.body.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Atualizar botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    localStorage.setItem('language', lang);
}

// Inicializar idioma salvo ou padrão
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language') || 'pt-BR';
    changeLanguage(savedLang);

    // Event listeners para botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Menu mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Ativar link ativo na navegação
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});