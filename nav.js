const navContent = `
    <nav class="ram-top-nav" aria-label="Primary">
        <div class="ram-top-nav__inner">
            <a href="/index.html" class="ram-brand">
                <span class="ram-brand__mark" aria-hidden="true">📍</span> RAM
            </a>

            <div class="ram-desktop-links">
                <a href="/index.html" data-nav="home">Home</a>
                <a href="/services.html" data-nav="services">Services</a>
                <a href="/portfolio.html" data-nav="portfolio">Portfolio</a>
                <a href="/contact.html" data-nav="contact">Contact</a>
                <a href="/contact.html#inquiry-form" class="ram-desktop-cta">Free Estimate</a>
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
            <span class="ram-mobile-menu__label">Menu</span>
            <button id="menu-close" class="ram-menu-close" type="button" aria-label="Close menu">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

        <nav class="ram-mobile-menu__links" aria-label="Mobile">
            <a href="/index.html" data-nav="home">Home</a>
            <a href="/services.html" data-nav="services">Services</a>
            <a href="/portfolio.html" data-nav="portfolio">Portfolio</a>
            <a href="/contact.html" data-nav="contact">Contact</a>
        </nav>

        <div class="ram-mobile-menu__foot">
            <a href="/contact.html#inquiry-form" class="ram-mobile-cta">Start Your Project</a>
            <a href="tel:+16266394749" class="ram-mobile-phone">(626) 639-4749</a>
            <p>Licensed Pasadena Contractor</p>
        </div>
    </div>
`;

const navStyles = `
    .ram-top-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        background: #051121;
        border-bottom: 1px solid rgba(217, 164, 4, 0.3);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
    }
    .ram-top-nav__inner {
        max-width: 80rem;
        margin: 0 auto;
        padding: 0.85rem 1.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    .ram-brand {
        display: flex;
        align-items: center;
        gap: 0.45rem;
        color: #fff;
        font-family: Teko, sans-serif;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 0.18em;
        line-height: 1;
        text-decoration: none;
    }
    .ram-brand:hover { color: #D9A404; }
    .ram-brand__mark { color: #D9A404; font-size: 1.35rem; letter-spacing: 0; }
    .ram-desktop-links {
        display: none;
        align-items: center;
        gap: 2rem;
    }
    .ram-desktop-links a {
        color: #fff;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        text-decoration: none;
    }
    .ram-desktop-links a:hover,
    .ram-desktop-links a.is-current { color: #D9A404; }
    .ram-desktop-cta {
        margin-left: 0.5rem;
        padding: 0.75rem 1.6rem;
        background: #D9A404;
        color: #0A2342 !important;
        border-radius: 2px;
    }
    .ram-desktop-cta:hover { color: #0A2342 !important; box-shadow: 0 0 25px rgba(217, 164, 4, 0.4); }
    .ram-menu-toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        padding: 0;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 0.4rem;
        background: #0A2342;
        cursor: pointer;
    }
    .ram-menu-toggle__bars,
    .ram-menu-toggle__bars::before,
    .ram-menu-toggle__bars::after {
        display: block;
        width: 1.15rem;
        height: 2px;
        background: #D9A404;
        border-radius: 2px;
        position: relative;
        content: "";
    }
    .ram-menu-toggle__bars::before { position: absolute; top: -6px; }
    .ram-menu-toggle__bars::after { position: absolute; top: 6px; }

    .ram-mobile-menu {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        height: 100dvh;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        background: #051121;
        background-image: radial-gradient(circle at top right, #0A2342 0%, #051121 68%);
        color: #fff;
        transform: translate3d(100%, 0, 0);
        visibility: hidden;
        pointer-events: none;
        overflow: hidden;
        transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s;
    }
    .ram-mobile-menu.is-open {
        transform: translate3d(0, 0, 0);
        visibility: visible;
        pointer-events: auto;
    }
    .ram-mobile-menu__bar,
    .ram-mobile-menu__foot {
        flex: 0 0 auto;
    }
    .ram-mobile-menu__bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.85rem 1.25rem;
        padding-top: max(0.85rem, env(safe-area-inset-top));
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .ram-mobile-menu__label {
        color: #D9A404;
        font-family: Teko, sans-serif;
        font-size: 1.6rem;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
    }
    .ram-menu-close {
        width: 2.75rem;
        height: 2.75rem;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 0.4rem;
        background: #0A2342;
        color: #fff;
        font-size: 2rem;
        line-height: 1;
        cursor: pointer;
    }
    .ram-mobile-menu__links {
        flex: 1 1 auto;
        min-height: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: clamp(0.55rem, 1.6vh, 0.9rem);
        padding: 1rem 1.25rem;
        overflow: auto;
    }
    .ram-mobile-menu__links a {
        display: block;
        width: 100%;
        max-width: 24rem;
        margin: 0 auto;
        padding: 0.7rem 1rem;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 0.55rem;
        background: linear-gradient(145deg, #0A2342, #051121);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.35);
        color: #fff;
        font-family: Teko, sans-serif;
        font-size: clamp(1.7rem, 6.2vh, 2.35rem);
        font-weight: 600;
        letter-spacing: 0.12em;
        line-height: 1;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
    }
    .ram-mobile-menu__links a.is-current,
    .ram-mobile-menu__links a:hover {
        border-color: #D9A404;
        color: #D9A404;
    }
    .ram-mobile-menu__foot {
        padding: 0.85rem 1.25rem 1.1rem;
        padding-bottom: max(1.1rem, env(safe-area-inset-bottom));
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        text-align: center;
    }
    .ram-mobile-cta {
        display: block;
        width: 100%;
        max-width: 24rem;
        margin: 0 auto 0.75rem;
        padding: 0.9rem 1rem;
        background: #D9A404;
        color: #0A2342;
        border-radius: 0.55rem;
        font-family: Teko, sans-serif;
        font-size: clamp(1.45rem, 4.5vh, 1.8rem);
        font-weight: 700;
        letter-spacing: 0.12em;
        line-height: 1;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
    }
    .ram-mobile-phone {
        display: block;
        color: #fff;
        font-family: Teko, sans-serif;
        font-size: clamp(1.6rem, 4vh, 2rem);
        letter-spacing: 0.04em;
        text-decoration: none;
        line-height: 1.1;
    }
    .ram-mobile-phone:hover { color: #D9A404; }
    .ram-mobile-menu__foot p {
        margin: 0.35rem 0 0;
        color: #9ca3af;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
    }
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
    menuClose.addEventListener('click', () => {
        setMenu(false);
        menuToggle.focus();
    });
    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenu(false));
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
            setMenu(false);
            menuToggle.focus();
        }
    });
}
