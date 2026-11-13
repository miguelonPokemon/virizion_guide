import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const getSpriteUrls = (slug) => ({
    anim: `https://img.pokemondb.net/sprites/black-white/anim/normal/${slug}.gif`,
    static: `https://img.pokemondb.net/sprites/black-white/normal/${slug}.png`
});

window.handleSpriteError = function(img) {
    if (img.dataset.fallbackTried === 'true') {
        img.style.display = 'none';
        return;
    }
    img.dataset.fallbackTried = 'true';
    if (img.dataset.fallback) {
        img.src = img.dataset.fallback;
    }
};

function createSpriteMarkup(slug, label, sizeClasses = 'w-10 h-10 sm:w-12 sm:h-12') {
    if (!slug) return '';
    const { anim, static: fallback } = getSpriteUrls(slug);
    return `
        <img
            src="${anim}"
            data-fallback="${fallback}"
            alt="${label}"
            title="${label}"
            class="poke-sprite ${sizeClasses} shrink-0"
            loading="lazy"
            onerror="window.handleSpriteError(this)"
        >
    `;
}

const VIRIZION_GUIDE = {
    pokepastes: [
        {
            player: 'Player 1',
            role: 'Soporte, Reflejo & Daño',
            url: 'https://pokepast.es/c797842719b273a6',
            badgeClass: 'bg-viridian-500/15 text-viridian-600 dark:text-viridian-400 border-viridian-500/30'
        },
        {
            player: 'Player 2',
            role: 'Conjuro, Truco & Setup',
            url: 'https://pokepast.es/01bfa908fc7f6fld',
            badgeClass: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30'
        },
        {
            player: 'Player 3',
            role: 'Trick, Presión & Tierra/Acero',
            url: 'https://pokepast.es/0d8cc5722a6989b9',
            badgeClass: 'bg-stone-500/15 text-stone-700 dark:text-stone-300 border-stone-500/30'
        },
        {
            player: 'Player 4',
            role: 'Velocidad, Debuff & Daño',
            url: 'https://pokepast.es/49ef4901ebf55496',
            badgeClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
        }
    ],

    turns: [
        {
            turn: 1,
            p1: { pokemon: 'Jynx', slug: 'jynx', move: 'Conjuro', type: 'psychic' },
            p2: { pokemon: 'Skarmory', slug: 'skarmory', move: 'Reflejo', type: 'psychic' },
            p3: { pokemon: 'Skarmory', slug: 'skarmory', move: 'Truco', type: 'psychic' },
            p4: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Acróbata', type: 'flying' },
            bossHp: '-96.5%',
            notes: ''
        },
        {
            turn: 2,
            p1: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            p2: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            p3: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            p4: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            bossHp: '~80%',
            notes: ''
        },
        {
            turn: 3,
            p1: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            p2: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            p3: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            p4: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            bossHp: '~63.5%',
            notes: ''
        },
        {
            turn: 4,
            p1: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            p2: { pokemon: 'Skarmory', slug: 'skarmory', move: 'Respiro', type: 'flying' },
            p3: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            p4: { pokemon: 'Skarmory', slug: 'skarmory', move: 'Respiro', type: 'flying' },
            bossHp: '~63%',
            notes: 'Si un Skarmory muere pero logra golpear, sacar a Staraptor y usar respiro, esto puede llevar a un turno 5 inestable, pero aún puede funcionar. <strong>REINICIAR</strong> si un Skarmory no golpea.'
        },
        {
            turn: 5,
            p1: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            p2: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            p3: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            p4: { pokemon: 'Staraptor', slug: 'staraptor', move: 'Pájaro osado', type: 'flying' },
            bossHp: '~46.5%',
            notes: 'Hay posibilidad de que el Skarmory del PJ3 o PJ4 sobreviva y use respiro (puede reemplazar a un Staraptor del lado derecho y usar pájaro osado).'
        },
        {
            turn: 6,
            p1: { pokemon: 'Mamoswine', slug: 'mamoswine', move: 'Sacrificio', type: 'normal' },
            p2: { pokemon: 'Mamoswine', slug: 'mamoswine', move: 'Sacrificio', type: 'normal' },
            p3: { pokemon: 'Mamoswine', slug: 'mamoswine', move: 'Sacrificio', type: 'normal' },
            p4: { pokemon: 'Mamoswine', slug: 'mamoswine', move: 'Sacrificio', type: 'normal' },
            bossHp: '~46.5%',
            notes: '<strong>REINICIAR</strong> si algún Staraptor muere.'
        },
        {
            turn: 7,
            p1: { pokemon: 'Gliscor', slug: 'gliscor', move: 'Acróbata', type: 'flying' },
            p2: { pokemon: 'Gliscor', slug: 'gliscor', move: 'Acróbata', type: 'flying' },
            p3: { pokemon: 'Gliscor', slug: 'gliscor', move: 'Acróbata', type: 'flying' },
            p4: { pokemon: 'Jynx', slug: 'jynx', move: 'Conjuro', type: 'psychic' },
            bossHp: '-34.5%',
            notes: 'No es necesario golpear con sacrificio.'
        },
        {
            turn: 8,
            p1: { pokemon: 'Gliscor', slug: 'gliscor', move: 'Demolición', type: 'fighting' },
            p2: { pokemon: 'Gliscor', slug: 'gliscor', move: 'Demolición', type: 'fighting' },
            p3: { pokemon: 'Gliscor', slug: 'gliscor', move: 'Es derrotado', type: 'defeated' },
            p4: { pokemon: 'Skarmory', slug: 'skarmory', move: 'Truco', type: 'psychic' },
            bossHp: '-34.5%',
            notes: ''
        },
        {
            turn: 9,
            p1: { pokemon: 'Gliscor', slug: 'gliscor', move: 'Demolición', type: 'fighting' },
            p2: { pokemon: 'Gliscor', slug: 'gliscor', move: 'Demolición', type: 'fighting' },
            p3: { pokemon: 'Metagross', slug: 'metagross', move: 'Reflejo', type: 'psychic' },
            p4: { pokemon: 'Metagross', slug: 'metagross', move: 'Golpe aéreo', type: 'flying' },
            bossHp: '-32.5%',
            notes: 'No es necesario golpear con demolición.'
        },
        {
            turn: 10,
            p1: { pokemon: 'Metagross', slug: 'metagross', move: 'Explosión', type: 'normal' },
            p2: { pokemon: 'Metagross', slug: 'metagross', move: 'Explosión', type: 'normal' },
            p3: { pokemon: 'Metagross', slug: 'metagross', move: 'Explosión', type: 'normal' },
            p4: { pokemon: 'Metagross', slug: 'metagross', move: 'Terremoto', type: 'ground' },
            bossHp: '-28.5%',
            notes: 'Enviar a Metagross en T10 si algún Gliscor sobrevive. El Metagross de PJ4 seguramente morirá, pero usa golpe aéreo por si acaso. No es necesario golpear con explosión.'
        },
        {
            turn: 11,
            p1: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p2: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p3: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p4: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            bossHp: '-21%',
            notes: ''
        },
        {
            turn: 12,
            p1: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p2: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p3: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p4: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            bossHp: '-12.5%',
            notes: ''
        },
        {
            turn: 13,
            p1: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p2: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p3: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p4: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            bossHp: '~5%',
            notes: ''
        },
        {
            turn: 14,
            p1: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p2: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p3: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p4: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            bossHp: '~5%',
            notes: ''
        },
        {
            turn: 15,
            p1: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p2: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p3: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            p4: { pokemon: 'Garchomp', slug: 'garchomp', move: 'Excavar', type: 'ground' },
            bossHp: '0%',
            notes: "La única posibilidad de perder es que uno de los enemigos (Sceptile / Farfetch'd) use Tajo Umbrío en Virizion para activar Justiciero (puedes ganar) o un gran número de críticos; de lo contrario, ganas."
        }
    ]
};

const TYPE_PILL_CLASSES = {
    fire: 'bg-orange-500/12 text-orange-600 dark:text-orange-400 border-orange-500/30',
    water: 'bg-sky-500/12 text-sky-600 dark:text-sky-400 border-sky-500/30',
    grass: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    fighting: 'bg-rose-500/12 text-rose-600 dark:text-rose-400 border-rose-500/30',
    psychic: 'bg-fuchsia-500/12 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/30',
    ground: 'bg-amber-600/12 text-amber-700 dark:text-amber-400 border-amber-600/30',
    flying: 'bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
    steel: 'bg-slate-500/12 text-slate-600 dark:text-slate-300 border-slate-500/30',
    ghost: 'bg-purple-500/12 text-purple-600 dark:text-purple-400 border-purple-500/30',
    dark: 'bg-zinc-700/15 text-zinc-700 dark:text-zinc-300 border-zinc-500/35',
    normal: 'bg-stone-500/12 text-stone-600 dark:text-stone-300 border-stone-500/30',
    defeated: 'bg-red-500/12 text-red-600 dark:text-red-400 border-red-500/30'
};

function renderPokepasteSection() {
    const grid = document.getElementById('pokepaste-grid');
    if (!grid) return;
    grid.innerHTML = VIRIZION_GUIDE.pokepastes.map(paste => `
        <div class="card-surface rounded-2xl p-5 flex flex-col justify-between hover:border-viridian-500/60">
            <div class="space-y-3">
                <div class="flex items-center justify-between gap-2">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-extrabold border ${paste.badgeClass}">
                        ${paste.player}
                    </span>
                    <span class="text-[11px] font-mono font-medium" style="color: var(--text-muted);">
                        ${paste.role}
                    </span>
                </div>
                <div class="px-3 py-2 rounded-xl elevated-surface font-mono text-xs truncate" style="color: var(--text-secondary);">
                    ${paste.url}
                </div>
            </div>

            <div class="flex items-center gap-2 mt-4">
                <a
                    href="${paste.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 py-2.5 px-3 rounded-xl bg-viridian-600 hover:bg-viridian-700 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                    <i class="fa-solid fa-arrow-up-right-from-square text-[11px]"></i>
                    <span>Abrir Pokepaste</span>
                </a>
                <button
                    type="button"
                    class="copy-btn p-2.5 rounded-xl elevated-surface hover:border-viridian-500 transition-colors cursor-pointer"
                    style="color: var(--text-secondary);"
                    title="Copiar URL"
                    data-url="${paste.url}"
                    data-player="${paste.player}"
                >
                    <i class="fa-regular fa-copy"></i>
                </button>
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            copyText(btn.dataset.url, `Enlace de ${btn.dataset.player} copiado`);
        });
    });
}

let activeFilter = 'all';

function renderTurnsTable() {
    const tbody = document.getElementById('turns-tbody');
    if (!tbody) return;
    const completedTurns = JSON.parse(localStorage.getItem('virizion_done_turns') || '[]');

    const renderActionCell = (action, playerNum) => {
        if (!action) {
            return `
                <td class="py-3.5 px-4 border-r transition-opacity" data-col="${playerNum}" style="border-color: var(--border-color);">
                    <div class="flex items-center justify-center text-xs font-mono" style="color: var(--text-muted);">
                        &mdash;
                    </div>
                </td>
            `;
        }

        const pillStyle = TYPE_PILL_CLASSES[action.type] || TYPE_PILL_CLASSES.normal;

        return `
            <td class="py-3.5 px-4 border-r transition-opacity" data-col="${playerNum}" style="border-color: var(--border-color);">
                <div class="flex items-center gap-3">
                    <div class="sprite-stage" title="${action.pokemon}">
                        ${createSpriteMarkup(action.slug, action.pokemon, 'w-10 h-10 sm:w-12 sm:h-12')}
                    </div>
                    <div class="flex flex-col gap-1 min-w-0">
                        <span class="text-[11px] font-mono font-semibold uppercase tracking-wide" style="color: var(--text-muted);">
                            ${action.pokemon}
                        </span>
                        <span class="move-pill inline-flex items-center px-2.5 py-0.5 rounded-xl text-xs sm:text-sm font-bold border w-fit ${pillStyle}">
                            ${action.move}
                        </span>
                    </div>
                </div>
            </td>
        `;
    };

    const rowsHtml = VIRIZION_GUIDE.turns.map(row => {
        const isDone = completedTurns.includes(row.turn);

        return `
            <tr class="hover:bg-viridian-500/[0.03] transition-colors ${isDone ? 'turn-done' : ''}" data-turn="${row.turn}">
                <td class="py-3 px-3 text-center border-r font-mono select-none" style="border-color: var(--border-color);">
                    <label class="inline-flex flex-col items-center justify-center gap-1.5 cursor-pointer group" title="Marcar Turno ${row.turn}">
                        <input
                            type="checkbox"
                            class="turn-checkbox sr-only"
                            data-turn="${row.turn}"
                            ${isDone ? 'checked' : ''}
                        >
                        <span class="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm border transition-all ${
                            isDone
                                ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                                : 'bg-viridian-500/12 text-viridian-600 dark:text-viridian-400 border-viridian-500/25 group-hover:bg-viridian-600 group-hover:text-white'
                        }">
                            ${isDone ? '<i class="fa-solid fa-check text-xs"></i>' : `T${row.turn}`}
                        </span>
                        <span class="text-[10px] font-semibold" style="color: var(--text-muted);">
                            ${isDone ? 'Listo' : 'Pendiente'}
                        </span>
                    </label>
                </td>
                ${renderActionCell(row.p1, 1)}
                ${renderActionCell(row.p2, 2)}
                ${renderActionCell(row.p3, 3)}
                ${renderActionCell(row.p4, 4)}
                <td class="py-3 px-4 text-center border-r font-mono font-bold text-xs sm:text-sm" style="border-color: var(--border-color); color: var(--accent);">
                    ${row.bossHp}
                </td>
                <td class="py-3 px-4 text-xs" style="color: var(--text-secondary);">
                    ${row.notes}
                </td>
            </tr>
        `;
    }).join('');

    const finishRowHtml = `
        <tr class="bg-gradient-to-r from-viridian-500/15 via-emerald-500/15 to-teal-500/15 border-t-2" style="border-color: var(--accent);">
            <td colspan="7" class="py-4 px-6 text-center">
                <div class="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-2xl bg-viridian-600 text-white font-mono text-base sm:text-lg font-extrabold tracking-[0.25em] uppercase shadow-md">
                    <i class="fa-solid fa-trophy text-amber-300"></i>
                    <span>FIN</span>
                    <i class="fa-solid fa-trophy text-amber-300"></i>
                </div>
            </td>
        </tr>
    `;

    tbody.innerHTML = rowsHtml + finishRowHtml;

    tbody.querySelectorAll('.turn-checkbox').forEach(chk => {
        chk.addEventListener('change', (e) => {
            const turnNum = parseInt(e.target.dataset.turn, 10);
            toggleTurnDone(turnNum);
        });
    });

    applyColumnFilter(activeFilter);
}

function applyColumnFilter(filterVal) {
    activeFilter = filterVal;

    document.querySelectorAll('#player-filter-group .filter-btn').forEach(btn => {
        const selected = btn.dataset.filter === filterVal;
        if (selected) {
            btn.className = 'filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-viridian-600 text-white shadow-sm transition-all cursor-pointer';
            btn.style.color = '';
        } else {
            btn.className = 'filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-viridian-500/10 transition-all cursor-pointer';
            btn.style.color = 'var(--text-secondary)';
        }
    });

    document.querySelectorAll('#raid-turns-table [data-col]').forEach(cell => {
        const colId = cell.dataset.col;
        cell.classList.remove('col-dimmed', 'col-focused');
        if (filterVal !== 'all') {
            if (colId === filterVal) {
                cell.classList.add('col-focused');
            } else {
                cell.classList.add('col-dimmed');
            }
        }
    });
}

function toggleTurnDone(turnNum) {
    const stored = JSON.parse(localStorage.getItem('virizion_done_turns') || '[]');
    const idx = stored.indexOf(turnNum);
    if (idx > -1) {
        stored.splice(idx, 1);
    } else {
        stored.push(turnNum);
    }
    localStorage.setItem('virizion_done_turns', JSON.stringify(stored));
    renderTurnsTable();
}

function triggerToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const el = document.createElement('div');
    el.className = 'pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-xl shadow-xl text-xs font-bold bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 border border-viridian-500/40 transition-all duration-300 translate-y-3 opacity-0';
    el.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-500"></i> <span>${message}</span>`;
    container.appendChild(el);

    requestAnimationFrame(() => el.classList.remove('translate-y-3', 'opacity-0'));
    setTimeout(() => {
        el.classList.add('translate-y-3', 'opacity-0');
        setTimeout(() => el.remove(), 300);
    }, 2500);
}

function copyText(text, feedbackMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            triggerToast(feedbackMsg);
        }).catch(() => {
            fallbackCopy(text, feedbackMsg);
        });
    } else {
        fallbackCopy(text, feedbackMsg);
    }
}

function fallbackCopy(text, feedbackMsg) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
        document.execCommand('copy');
        triggerToast(feedbackMsg);
    } catch (e) {
        triggerToast('No se pudo copiar');
    }
    document.body.removeChild(textarea);
}

function setupTheme() {
    const root = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-text');
    if (!toggleBtn) return;

    const setTheme = (mode) => {
        root.setAttribute('data-theme', mode);
        localStorage.setItem('virizion_ui_theme', mode);
        if (mode === 'dark') {
            icon.className = 'fa-solid fa-sun text-amber-400 text-sm';
            if (label) label.textContent = 'Tema Claro';
        } else {
            icon.className = 'fa-solid fa-moon text-viridian-600 text-sm';
            if (label) label.textContent = 'Tema Oscuro';
        }
    };

    const saved = localStorage.getItem('virizion_ui_theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(saved);

    toggleBtn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(next);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupTheme();
    renderPokepasteSection();
    renderTurnsTable();

    document.querySelectorAll('#player-filter-group .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => applyColumnFilter(btn.dataset.filter));
    });

    const resetBtn = document.getElementById('reset-progress-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            localStorage.removeItem('virizion_done_turns');
            renderTurnsTable();
            triggerToast('Progreso reiniciado');
        });
    }
});
