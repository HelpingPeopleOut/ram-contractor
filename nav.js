const navContent = `
    <nav class="ram-top-nav" aria-label="Primary">
        <div class="ram-top-nav__inner">
            <a href="/index.html" class="ram-brand">
                <span class="ram-brand__mark" aria-hidden="true">R</span>
                <span class="ram-brand__name"><strong>RAM</strong><small>Construction</small></span>
            </a>
            <div class="ram-desktop-links">
                <a href="/index.html" data-nav="home">Home</a>
                <a href="/services.html" data-nav="services">Services</a>
                <a href="/portfolio.html" data-nav="portfolio">Portfolio</a>
                <a href="/contact.html" data-nav="contact">Contact</a>
                <a href="/contact.html#inquiry-form" class="ram-desktop-cta">Free estimate</a>
            </div>
            <button id="menu-toggle" class="ram-menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
                <span class="ram-menu-toggle__bars" aria-hidden="true"></span>
            </button>
        </div>
    </nav>
`;

const menuContent = `
    <div id="mobile-menu" class="ram-mobile-menu" aria-hidden="true">
        <div class="ram-mobile-menu__bar">
            <span class="ram-mobile-menu__label">RAM</span>
            <button id="menu-close" class="ram-menu-close" type="button" aria-label="Close menu"><span aria-hidden="true">&times;</span></button>
        </div>
        <nav class="ram-mobile-menu__links" aria-label="Mobile">
            <a href="/index.html" data-nav="home">Home</a>
            <a href="/services.html" data-nav="services">Services</a>
            <a href="/portfolio.html" data-nav="portfolio">Portfolio</a>
            <a href="/contact.html" data-nav="contact">Contact</a>
        </nav>
        <div class="ram-mobile-menu__foot">
            <a href="/contact.html#inquiry-form" class="ram-mobile-cta">Start your project</a>
            <a href="tel:+16266394749" class="ram-mobile-phone">(626) 639-4749</a>
            <p>Licensed Pasadena contractor</p>
        </div>
    </div>
`;

const footerContent = `
    <footer class="site-footer" id="site-footer">
        <div class="wrap footer-grid">
            <div>
                <h2>RAM Construction</h2>
                <p>Pasadena’s contractor for historic restorations, luxury ADUs, and high-end residential remodeling across the San Gabriel Valley.</p>
                <p><a href="tel:+16266394749">(626) 639-4749</a><br><a href="mailto:info@ram-contractor.com">info@ram-contractor.com</a><br>Mon–Sat, 8:00 AM – 5:00 PM</p>
            </div>
            <div>
                <h3>Work</h3>
                <ul>
                    <li><a href="/services.html">Remodeling</a></li>
                    <li><a href="/services.html">Historic restoration</a></li>
                    <li><a href="/services.html">ADU builds</a></li>
                    <li><a href="/services.html">Outdoor living</a></li>
                    <li><a href="/portfolio.html">Selected projects</a></li>
                </ul>
            </div>
            <div>
                <h3>Visit</h3>
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/services.html">Services</a></li>
                    <li><a href="/portfolio.html">Portfolio</a></li>
                    <li><a href="/contact.html#inquiry-form">Request an estimate</a></li>
                    <li><a href="https://g.co/kgs/sjeJGdg" target="_blank" rel="noopener">Google profile</a></li>
                </ul>
            </div>
        </div>
        <div class="wrap legal">
            <span>© 2026 RAM Construction. Licensed & insured. Pasadena, CA.</span>
            <span>Site by <a href="https://www.hpo.center" target="_blank" rel="noopener">HPO.Center</a></span>
        </div>
    </footer>
`;

const navStyles = `
    .ram-top-nav {
        position: fixed; inset: 0 0 auto 0; z-index: 100; height: 76px;
        background: rgba(7, 20, 34, 0.82);
        border-bottom: 1px solid rgba(231, 237, 245, 0.08);
        backdrop-filter: blur(18px);
    }
    .ram-top-nav__inner {
        height: 100%; max-width: 1160px; margin: 0 auto; padding: 0 1rem;
        display: flex; align-items: center; justify-content: space-between; gap: 1rem;
    }
    .ram-brand { display: flex; align-items: center; gap: 0.7rem; text-decoration: none; color: white; }
    .ram-brand__mark {
        width: 38px; height: 38px; display: grid; place-items: center;
        border-radius: 12px; background: #e2b340; color: #1a1404;
        font-family: Outfit, sans-serif; font-weight: 700; font-size: 1.15rem;
    }
    .ram-brand__name { display: flex; flex-direction: column; line-height: 1; }
    .ram-brand__name strong { font-family: Outfit, sans-serif; letter-spacing: 0.16em; font-size: 1.05rem; }
    .ram-brand__name small { margin-top: 0.2rem; color: #9aabc0; letter-spacing: 0.16em; text-transform: uppercase; font-size: 0.62rem; font-weight: 700; }
    .ram-desktop-links { display: none; align-items: center; gap: 1.4rem; }
    .ram-desktop-links a { color: #eef3f8; text-decoration: none; font-size: 0.95rem; font-weight: 650; }
    .ram-desktop-links a:hover, .ram-desktop-links a.is-current { color: #e2b340; }
    .ram-desktop-cta {
        margin-left: 0.4rem; padding: 0.7rem 1rem; border-radius: 999px;
        background: #e2b340; color: #1a1404 !important;
    }
    .ram-menu-toggle, .ram-menu-close {
        width: 44px; height: 44px; border-radius: 14px; border: 1px solid rgba(231,237,245,0.12);
        background: #10243f; color: white; cursor: pointer;
        display: inline-flex; align-items: center; justify-content: center;
    }
    .ram-menu-toggle__bars, .ram-menu-toggle__bars::before, .ram-menu-toggle__bars::after {
        display: block; width: 16px; height: 2px; border-radius: 2px; background: #e2b340; position: relative; content: "";
    }
    .ram-menu-toggle__bars::before { position: absolute; top: -6px; }
    .ram-menu-toggle__bars::after { position: absolute; top: 6px; }
    .ram-mobile-menu {
        position: fixed; inset: 0; z-index: 1000; display: flex; flex-direction: column;
        height: 100dvh; background: #071422; color: white;
        transform: translate3d(100%, 0, 0); visibility: hidden; pointer-events: none;
        transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s;
    }
    .ram-mobile-menu.is-open { transform: none; visibility: visible; pointer-events: auto; }
    .ram-mobile-menu__bar, .ram-mobile-menu__foot { flex: 0 0 auto; }
    .ram-mobile-menu__bar {
        display: flex; align-items: center; justify-content: space-between;
        padding: max(0.9rem, env(safe-area-inset-top)) 1rem 0.9rem; border-bottom: 1px solid rgba(231,237,245,0.08);
    }
    .ram-mobile-menu__label { font-family: Outfit, sans-serif; letter-spacing: 0.16em; font-size: 1.1rem; }
    .ram-menu-close { font-size: 1.7rem; }
    .ram-mobile-menu__links {
        flex: 1; min-height: 0; display: flex; flex-direction: column; justify-content: center;
        padding: 1rem 1.25rem; overflow: auto;
    }
    .ram-mobile-menu__links a {
        display: block; padding: 0.85rem 0; border-bottom: 1px solid rgba(231,237,245,0.08);
        color: white; text-decoration: none; font-family: Outfit, sans-serif;
        font-size: clamp(1.8rem, 7vh, 2.6rem); letter-spacing: -0.04em;
    }
    .ram-mobile-menu__links a.is-current { color: #e2b340; }
    .ram-mobile-menu__foot {
        padding: 1rem 1.25rem max(1.1rem, env(safe-area-inset-bottom));
        border-top: 1px solid rgba(231,237,245,0.08); text-align: center;
    }
    .ram-mobile-cta {
        display: block; margin: 0 auto 0.7rem; max-width: 24rem; padding: 0.95rem 1rem;
        border-radius: 999px; background: #e2b340; color: #1a1404; text-decoration: none;
        font-family: Outfit, sans-serif; font-weight: 700;
    }
    .ram-mobile-phone { color: white; text-decoration: none; font-family: Outfit, sans-serif; font-size: 1.4rem; }
    .ram-mobile-menu__foot p { margin: 0.35rem 0 0; color: #9aabc0; font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; }
    body.ram-menu-open { overflow: hidden; }
    @media (min-width: 1024px) {
        .ram-desktop-links { display: flex; }
        .ram-menu-toggle { display: none; }
    }
`;

const navHost = document.getElementById('global-nav');
if (navHost) {
    const style = document.createElement('style');
    style.textContent = navStyles;
    document.head.appendChild(style);
    navHost.innerHTML = navContent;
    document.body.insertAdjacentHTML('beforeend', menuContent);

    const mountFooter = () => {
        document.querySelectorAll('footer').forEach((node) => {
            if (node.id !== 'site-footer') node.remove();
        });
        if (!document.getElementById('site-footer')) {
            document.body.insertAdjacentHTML('beforeend', footerContent);
        }
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountFooter);
    else mountFooter();

    const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const current = page === '' || page === 'index.html' ? 'home' : page.replace('.html', '');
    document.querySelectorAll('[data-nav]').forEach((link) => {
        if (link.getAttribute('data-nav') === current) link.classList.add('is-current');
    });

    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const setMenu = (open) => {
        mobileMenu.classList.toggle('is-open', open);
        mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
        menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        document.body.classList.toggle('ram-menu-open', open);
        if (open) menuClose.focus();
    };
    menuToggle.addEventListener('click', () => setMenu(true));
    menuClose.addEventListener('click', () => { setMenu(false); menuToggle.focus(); });
    mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
            setMenu(false);
            menuToggle.focus();
        }
    });
}

if (!document.querySelector('script[src="/fx.js"]')) {
    const fx = document.createElement('script');
    fx.src = '/fx.js';
    document.body.appendChild(fx);
}
