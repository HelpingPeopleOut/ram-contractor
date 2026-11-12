(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const start = () => {
        if (fine) {
            const glow = document.createElement('div');
            glow.className = 'glow';
            document.body.appendChild(glow);

            const lens = document.createElement('div');
            lens.className = 'shot-lens';
            lens.innerHTML = '<img alt="">';
            document.body.appendChild(lens);
            const lensImg = lens.querySelector('img');

            let gx = innerWidth / 2;
            let gy = innerHeight / 2;
            let tx = gx;
            let ty = gy;
            let lx = gx;
            let ly = gy;
            let lensOn = false;
            let rx = 0;
            let ry = 0;

            const trades = document.getElementById('trades');
            if (trades) {
                trades.addEventListener('mouseenter', () => { lensOn = true; });
                trades.addEventListener('mouseleave', () => { lensOn = false; });
                trades.querySelectorAll('.trade').forEach((card) => {
                    card.addEventListener('mouseenter', () => {
                        const next = card.getAttribute('data-shot');
                        if (next && lensImg.getAttribute('src') !== next) lensImg.src = next;
                    });
                });
            }

            const heroShot = document.querySelector('.hero-media');
            if (heroShot) heroShot.style.transformStyle = 'preserve-3d';

            document.querySelectorAll('.btn-gold').forEach((btn) => {
                btn.addEventListener('mousemove', (event) => {
                    const box = btn.getBoundingClientRect();
                    const x = event.clientX - (box.left + box.width / 2);
                    const y = event.clientY - (box.top + box.height / 2);
                    btn.style.transform = `translate(${x * 0.28}px, ${y * 0.4}px)`;
                });
                btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
            });

            addEventListener('mousemove', (event) => {
                tx = event.clientX;
                ty = event.clientY;
                if (!heroShot) return;
                const box = heroShot.getBoundingClientRect();
                const inside = event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom;
                if (!inside) {
                    heroShot.style.transform = '';
                    return;
                }
                rx = (event.clientX - box.left) / box.width - 0.5;
                ry = (event.clientY - box.top) / box.height - 0.5;
                heroShot.style.transform = `rotateY(${rx * 9}deg) rotateX(${ry * -8}deg)`;
            });

            const tick = () => {
                gx += (tx - gx) * 0.12;
                gy += (ty - gy) * 0.12;
                glow.style.transform = `translate(${gx}px, ${gy}px)`;
                lx += (tx - lx) * 0.16;
                ly += (ty - ly) * 0.16;
                const tilt = Math.max(-8, Math.min(8, (tx - lx) * 0.08));
                lens.style.transform = `translate(${lx + 28}px, ${ly - 40}px) rotate(${tilt}deg)`;
                lens.style.opacity = lensOn && !document.body.classList.contains('ram-menu-open') ? '1' : '0';
                requestAnimationFrame(tick);
            };
            tick();
        }

        const columns = [...document.querySelectorAll('.work-col')];
        if (!columns.length) return;
        let scrolling = false;
        const shiftColumns = () => {
            scrolling = false;
            columns.forEach((column, index) => {
                const box = column.getBoundingClientRect();
                const delta = box.top + box.height / 2 - innerHeight / 2;
                const direction = index === 0 ? -0.06 : 0.08;
                column.style.transform = `translateY(${delta * direction}px)`;
            });
        };
        addEventListener('scroll', () => {
            if (scrolling) return;
            scrolling = true;
            requestAnimationFrame(shiftColumns);
        }, { passive: true });
        shiftColumns();
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
})();
