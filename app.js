// ═══════════════════════════════════════════════════════════════
// LIFETRACK - HABIT TRACKER APP
// Полная версия с всеми функциями
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// SVG ICONS LIBRARY
// ═══════════════════════════════════════════════════════════════

const ICONS = {
    water: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
    meditation: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8-8c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2s.9 2 2 2h4c1.1 0 2-.9 2-2zM4 12c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2s-.9-2-2-2H6c-1.1 0-2 .9-2 2z"/></svg>',
    exercise: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/></svg>',
    reading: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/></svg>',
    sleep: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"/></svg>',
    food: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>',
    run: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/></svg>',
    music: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
    star: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
    check: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
    plus: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>'
};

const XP_RULES = {
    habitCreate: 1,
    habitEdit: 1,
    habitComplete: 10,
    dayPerfect: 25,
    achievement: 25
};

const DEFAULT_THEME_COLOR = '#D8FF9A';
const DEFAULT_SHARE_TEXT = 'Я выбираю себя каждый день вместе с LifeTrack.';
const DEFAULT_SHARE_URL = 'https://lifetrack.app';
const THEME_PRESETS = [
    { id: 'lime', label: 'Лайм', color: '#D8FF9A' },
    { id: 'mint', label: 'Мята', color: '#96F7D2' },
    { id: 'sky', label: 'Небо', color: '#9BD7FF' },
    { id: 'lavender', label: 'Лаванда', color: '#C7B9FF' },
    { id: 'sunset', label: 'Закат', color: '#FFC7A6' },
    { id: 'amber', label: 'Янтарь', color: '#FFC56D' },
    { id: 'coral', label: 'Коралл', color: '#FF9A8B' },
    { id: 'violet', label: 'Туман', color: '#B49BFF' },
    { id: 'forest', label: 'Хвойный лес', color: '#7ED7A7' },
    { id: 'midnight', label: 'Полночь', color: '#5A77FF' }
];
const MAX_AVATAR_FILE_SIZE = 1.5 * 1024 * 1024; // 1.5 MB

const ACHIEVEMENTS_CATALOG = [
    { id: 'xp_100', title: 'Энергия старта', description: 'Набрать 100 XP', type: 'xp_total', threshold: 100, emoji: '⚡' },
    { id: 'xp_300', title: 'Ритм движения', description: 'Набрать 300 XP', type: 'xp_total', threshold: 300, emoji: '🔥' },
    { id: 'xp_600', title: 'Сила привычки', description: 'Набрать 600 XP', type: 'xp_total', threshold: 600, emoji: '💪' },
    { id: 'xp_1000', title: 'Тысяча выборов', description: 'Набрать 1000 XP', type: 'xp_total', threshold: 1000, emoji: '🌟' },
    { id: 'xp_2000', title: 'Мастер темпа', description: 'Набрать 2000 XP', type: 'xp_total', threshold: 2000, emoji: '🚀' },
    { id: 'xp_4000', title: 'Легенда прогресса', description: 'Набрать 4000 XP', type: 'xp_total', threshold: 4000, emoji: '🏅' },

    { id: 'streak_3', title: 'Три дня выбора', description: '3 дня подряд', type: 'streak', threshold: 3, emoji: '🌱' },
    { id: 'streak_7', title: 'Неделя фокуса', description: '7 дней подряд', type: 'streak', threshold: 7, emoji: '📅' },
    { id: 'streak_14', title: 'Две недели силы', description: '14 дней подряд', type: 'streak', threshold: 14, emoji: '🏃' },
    { id: 'streak_30', title: 'Месяц без пропусков', description: '30 дней подряд', type: 'streak', threshold: 30, emoji: '🎯' },
    { id: 'streak_60', title: 'Два месяца выбора', description: '60 дней подряд', type: 'streak', threshold: 60, emoji: '🛡️' },
    { id: 'streak_120', title: 'Полгода фокуса', description: '120 дней подряд', type: 'streak', threshold: 120, emoji: '🔥' },

    { id: 'perfect_1', title: 'Идеальный день', description: 'Закрыть все цели за день', type: 'perfect_days', threshold: 1, emoji: '✅' },
    { id: 'perfect_5', title: 'Пять идеалов', description: '5 идеальных дней', type: 'perfect_days', threshold: 5, emoji: '✨' },
    { id: 'perfect_10', title: 'Десять побед', description: '10 идеальных дней', type: 'perfect_days', threshold: 10, emoji: '🏆' },
    { id: 'perfect_25', title: 'Четверть пути', description: '25 идеальных дней', type: 'perfect_days', threshold: 25, emoji: '🎖️' },
    { id: 'perfect_50', title: 'Полсотни идеалов', description: '50 идеальных дней', type: 'perfect_days', threshold: 50, emoji: '👑' },

    { id: 'complete_10', title: '10 побед', description: 'Выполнить 10 привычек', type: 'completions', threshold: 10, emoji: '🎯' },
    { id: 'complete_25', title: '25 побед', description: 'Выполнить 25 привычек', type: 'completions', threshold: 25, emoji: '🎉' },
    { id: 'complete_50', title: '50 побед', description: 'Выполнить 50 привычек', type: 'completions', threshold: 50, emoji: '🏅' },
    { id: 'complete_100', title: '100 побед', description: 'Выполнить 100 привычек', type: 'completions', threshold: 100, emoji: '🏆' },
    { id: 'complete_250', title: '250 побед', description: 'Выполнить 250 привычек', type: 'completions', threshold: 250, emoji: '🥇' },

    { id: 'habit_create_5', title: 'Конструктор', description: 'Создать 5 привычек', type: 'habits_created', threshold: 5, emoji: '🧩' },
    { id: 'habit_create_10', title: 'Архитектор', description: 'Создать 10 привычек', type: 'habits_created', threshold: 10, emoji: '🏗️' },
    { id: 'habit_create_20', title: 'Коллекционер', description: 'Создать 20 привычек', type: 'habits_created', threshold: 20, emoji: '🗂️' },

    { id: 'widget_1', title: 'Первый виджет', description: 'Добавить виджет на экран', type: 'widgets_created', threshold: 1, emoji: '🪄' },
    { id: 'widget_5', title: 'Панель управления', description: 'Создать 5 виджетов', type: 'widgets_created', threshold: 5, emoji: '🎛️' },
    { id: 'widget_10', title: 'Дизайнер', description: 'Создать 10 виджетов', type: 'widgets_created', threshold: 10, emoji: '🧱' },

    { id: 'journal_1', title: 'Первая запись', description: 'Добавить запись в дневник', type: 'journal_entries', threshold: 1, emoji: '📝' },
    { id: 'journal_10', title: 'Автор истории', description: 'Добавить 10 записей', type: 'journal_entries', threshold: 10, emoji: '📖' },

    { id: 'history_7', title: 'Неделя осознанности', description: 'Отмечать прогресс 7 дней', type: 'active_days', threshold: 7, emoji: '📆' },
    { id: 'history_30', title: 'Месяц в движении', description: 'Отмечать прогресс 30 дней', type: 'active_days', threshold: 30, emoji: '🗓️' },

    { id: 'level_10', title: 'Уровень 10', description: 'Достичь уровня 10', type: 'level', threshold: 10, emoji: '🏔️' }
];

let isUpdatingStats = false;

const DAILY_QUOTES = [
    'Сегодня я выбираю быть добрым к себе и миру вокруг.',
    'Каждый шаг — это вклад в ту жизнь, которую я создаю.',
    'Моё внимание — моя сила. Я направляю его туда, где хочу расти.',
    'Я доверяю процессу и двигаюсь в своём темпе.',
    'Я уже сделал достаточно, и сегодня могу сделать ещё чуть-чуть.',
    'Мои маленькие победы складываются в большие перемены.',
    'Я выбираю действия, которые делают меня сильнее.',
    'Моя энергия возвращается, когда я делюсь ею с важным.',
    'Я умею отдыхать и полностью восстанавливаться.',
    'Вдохновляюсь собой — я уже далеко продвинулся.',
    'Сегодня я делаю то, что откликается внутри.',
    'Я позволяю себе учиться и пробовать новое.',
    'Каждый осознанный выбор укрепляет мои цели.',
    'Я благодарю себя за внимание к своим желаниям.',
    'Сегодня я замечаю прогресс, а не только идеал.',
    'Я создаю поддерживающую среду для своих привычек.',
    'Мне помогает фокус на том, что реально важно.',
    'Я имею право замедлиться, чтобы чувствовать глубже.',
    'Сегодняшняя дисциплина — это забота о будущем мне.',
    'Я замечаю моменты радости и сохраняю их внутри.',
    'Мои решения сегодня рождают результаты завтра.',
    'Я выбираю то, что даёт мне свободу и лёгкость.',
    'Я достоин всех хороших изменений, которые создаю.',
    'С каждым днём я становлюсь ближе к желаемой версии себя.',
    'Я могу быть и продуктивным, и мягким к себе.',
    'Сегодня я действую из избытка, а не из недостатка.',
    'Я разрешаю себе попробовать снова, по-другому.',
    'Вдохновение приходит, когда я остаюсь в движении.',
    'Я вижу, как мои привычки работают на меня.',
    'Сегодня я создаю пространство для того, что важно.',
    'Я выбираю баланс: энергия, внимание, забота.'
];

const analyticsView = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    selectedMetric: 'completion_rate',
    selectedDate: null
};

const WIDGET_COLORS = ['green', 'light', 'dark'];
const widgetTimerIntervals = {};
let widgetEditMode = false;
let currentWidgetEditingId = null;
let currentWidgetColor = 'green';
let widgetSortable = null;

const PARTICLE_BASE_COUNT = 10;
const PARTICLE_MIN_COUNT = 6;
const particleSystem = {
    canvas: null,
    ctx: null,
    particles: [],
    animationId: null,
    resizeHandler: null,
    color: 'rgba(216, 255, 154, 0.28)',
    displayWidth: 0,
    displayHeight: 0,
    baseSpeed: 0
};
let particleResizeTimer = null;

const DEBUG_UI = false; // Set to true to enable extensive UI debugging
const ENABLE_GLASS_DEBUG = false;

const HAPTIC_PATTERNS = {
    button: 18,
    slider: 6,
    sliderThrottle: 45
};

const hapticState = {
    lastSliderPulse: 0
};

let hapticsInitialized = false;

function supportsHaptics() {
    return typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function';
}

function triggerHaptic(duration) {
    if (!supportsHaptics()) return;
    try {
        navigator.vibrate(duration);
    } catch (err) {
        debugLog('Haptic vibration failed', err);
    }
}

function triggerButtonHaptic() {
    triggerHaptic(HAPTIC_PATTERNS.button);
}

function triggerSliderHaptic() {
    const now = typeof performance !== 'undefined' && typeof performance.now === 'function'
        ? performance.now()
        : Date.now();

    if (now - hapticState.lastSliderPulse < HAPTIC_PATTERNS.sliderThrottle) {
        return;
    }

    hapticState.lastSliderPulse = now;
    triggerHaptic(HAPTIC_PATTERNS.slider);
}

function setupHapticFeedback() {
    if (hapticsInitialized) return;
    if (!supportsHaptics()) {
        hapticsInitialized = true;
        return;
    }

    hapticsInitialized = true;

    document.addEventListener('click', (event) => {
        const interactive = event.target.closest('button, [role="button"], .main-tab, .filter-pill, .heart-btn, .checklist-item, .widget-card button, input[type="button"], input[type="submit"], input[type="reset"]');
        if (!interactive) return;
        if (interactive.matches('input[type="range"]')) return;
        triggerButtonHaptic();
    }, true);

    const handleSliderEvent = (event) => {
        const target = event.target;
        if (typeof Element !== 'undefined' && !(target instanceof Element)) return;
        if (!target || typeof target.matches !== 'function') return;
        if (!target.matches('input[type="range"]')) return;
        triggerSliderHaptic();
    };

    document.addEventListener('input', handleSliderEvent, true);
    document.addEventListener('change', handleSliderEvent, true);
}

function debugLog(message, ...args) {
    if (DEBUG_UI) {
        console.log(`[LifeTrack][DEBUG] ${message}`, ...args);
    }
}

const START_LOG_ENABLED = true;
function logStartButton(step, payload = {}) {
    if (!START_LOG_ENABLED) return;
    try {
        console.log(`[LifeTrack][StartButton] ${step}`, payload);
    } catch (err) {
        console.warn('[LifeTrack][StartButton] logging failed', err);
    }
}

function calculateParticleBaseSpeed() {
    const width = particleSystem.displayWidth || window.innerWidth || 360;
    const height = particleSystem.displayHeight || window.innerHeight || 720;
    const areaFactor = Math.sqrt(width * height);
    const speed = 0.035 + (areaFactor / 3200) * 0.08;
    return Math.min(0.16, Math.max(0.035, speed));
}

function createParticle(baseSpeed, canvasWidth, canvasHeight) {
    const speedX = 1.2 + Math.random() * 0.6;
    const speedY = 1.2 + Math.random() * 0.6;
    const radius = Math.random() * 36 + 44;
    const angle = Math.random() * Math.PI * 2;
    const angleSpeed = (0.4 + Math.random() * 0.6) * 0.0006;
    const dirX = Math.cos(angle);
    const dirY = Math.sin(angle);
    return {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        radius,
        dirX,
        dirY,
        speedX,
        speedY,
        alpha: Math.random() * 0.28 + 0.32,
        vx: dirX * speedX * baseSpeed,
        vy: dirY * speedY * baseSpeed,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.0012 + Math.random() * 0.0025,
        wobbleAmplitude: radius * (0.06 + Math.random() * 0.03),
        angle,
        angleSpeed
    };
}

function updateParticleVelocity(particle, baseSpeed) {
    particle.vx = particle.dirX * particle.speedX * baseSpeed;
    particle.vy = particle.dirY * particle.speedY * baseSpeed;
}

// ═══════════════════════════════════════════════════════════════
// DATA MODEL
// ═══════════════════════════════════════════════════════════════

const appData = {
    achievements: [],
    widgets: [],
    dailyPlan: {
        affirmation: false,
        meditation: false,
        mantras: false
    },
    user: {
        name: "Пользователь",
        level: 1,
        xp: 0,
        xpToNextLevel: 100,
        totalXP: 0,
        streak: 0,
        totalDays: 0,
        lastActiveDate: null
    },
    stats: {
        weeklyData: [],
        totalCompleted: 0,
        totalSessions: 0,
        perfectDays: 0,
        habitsCreated: 0,
        widgetsCreated: 0,
        journalEntries: 0
    },
    history: {
        days: []
    },
    settings: {
        notificationsEnabled: true,
        themeColor: DEFAULT_THEME_COLOR,
        shareText: DEFAULT_SHARE_TEXT,
        shareUrl: DEFAULT_SHARE_URL
    }
};

function hexToRgb(hex) {
    if (!hex) return { r: 0, g: 0, b: 0 };
    let normalized = hex.replace('#', '').trim();
    if (normalized.length === 3) {
        normalized = normalized.split('').map(c => c + c).join('');
    }
    const intVal = parseInt(normalized, 16);
    if (Number.isNaN(intVal)) {
        return { r: 0, g: 0, b: 0 };
    }
    return {
        r: (intVal >> 16) & 255,
        g: (intVal >> 8) & 255,
        b: intVal & 255
    };
}

function shadeColor(hex, percent) {
    const { r, g, b } = hexToRgb(hex);
    const t = percent < 0 ? 0 : 255;
    const p = Math.abs(percent);
    const R = Math.round((t - r) * p + r);
    const G = Math.round((t - g) * p + g);
    const B = Math.round((t - b) * p + b);
    return `#${[R, G, B].map(v => v.toString(16).padStart(2, '0')).join('')}`;
}

function hexToRgba(hex, alpha) {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function ensureSettings() {
    if (!appData.settings || typeof appData.settings !== 'object') {
        appData.settings = {};
    }
    if (typeof appData.settings.notificationsEnabled !== 'boolean') {
        appData.settings.notificationsEnabled = true;
    }
    appData.settings.themeColor = appData.settings.themeColor || DEFAULT_THEME_COLOR;
    appData.settings.shareText = appData.settings.shareText || DEFAULT_SHARE_TEXT;
    if (!appData.settings.shareUrl) {
        let fallback = DEFAULT_SHARE_URL;
        try {
            if (window?.location?.href) {
                fallback = window.location.href;
            }
        } catch (err) {
            // ignore
        }
        appData.settings.shareUrl = fallback;
    }
}

function applyThemeColor(color, options = {}) {
    const { persist = true } = options;
    const chosen = color || DEFAULT_THEME_COLOR;
    const { r, g, b } = hexToRgb(chosen);
    const root = document.documentElement;

    root.style.setProperty('--green-bright', chosen);
    root.style.setProperty('--accent-color', chosen);
    root.style.setProperty('--accent-color-rgb', `${r}, ${g}, ${b}`);
    root.style.setProperty('--accent-color-soft', hexToRgba(chosen, 0.18));
    root.style.setProperty('--accent-color-strong', hexToRgba(chosen, 0.32));
    root.style.setProperty('--green-dark', shadeColor(chosen, -0.45));

    appData.settings = appData.settings || {};
    appData.settings.themeColor = chosen;

    if (persist) {
        saveData();
    }

    updateThemeChips();
    updateParticleThemeColor();
}

function updateThemeChips() {
    const container = document.getElementById('themeChips');
    if (!container) return;

    if (!container.dataset.initialized) {
        container.innerHTML = THEME_PRESETS.map(preset => `
            <button type="button" class="theme-chip" data-color="${preset.color}">
                <span class="theme-chip-color" style="background:${preset.color}"></span>
                ${preset.label}
            </button>
        `).join('');
        container.dataset.initialized = 'true';
    }

    const current = (appData.settings?.themeColor || DEFAULT_THEME_COLOR).toLowerCase();
    container.querySelectorAll('.theme-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.color.toLowerCase() === current);
    });
}

function updateSettingsUI() {
    const toggle = document.getElementById('notificationsToggle');
    if (toggle) {
        toggle.checked = Boolean(appData.settings?.notificationsEnabled);
    }
    updateThemeChips();
}

function openSettingsModal(section = null) {
    const modal = document.getElementById('settingsModal');
    if (!modal) return;
    updateSettingsUI();
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');

    if (section === 'theme') {
        setTimeout(() => {
            document.getElementById('settingsThemeSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 0);
    }
}

function closeSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

function handleThemeChipClick(event) {
    const chip = event.target.closest('.theme-chip');
    if (!chip) return;
    applyThemeColor(chip.dataset.color);
    showNotification('🎨 Цвет обновлён');
}

function handleThemeCustomInput(event) {
    if (!event.target?.value) return;
    applyThemeColor(event.target.value);
    showNotification('🌈 Цвет обновлён');
}

function handleNotificationsToggle(event) {
    const enabled = Boolean(event.target.checked);
    appData.settings.notificationsEnabled = enabled;
    saveData();
    showNotification(enabled ? '🔔 Уведомления включены' : '🔕 Уведомления выключены');
}

function handleAvatarUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showNotification('Выберите изображение для аватара');
        event.target.value = '';
        return;
    }

    if (file.size > MAX_AVATAR_FILE_SIZE) {
        showNotification('Фото слишком «тяжёлое» — выберите файл до 1.5 МБ');
        event.target.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        appData.user.avatar = reader.result;
        saveData();
        updateProfile();
        showNotification('📸 Фото обновлено');
    };
    reader.readAsDataURL(file);
}

function removeAvatarImage() {
    if (!appData.user.avatar) {
        showNotification('Фото профиля ещё не загружено');
        return;
    }
    appData.user.avatar = null;
    const input = document.getElementById('avatarInput');
    if (input) input.value = '';
    saveData();
    updateProfile();
    showNotification('🧼 Фото профиля удалено');
}

function handleProfileRename() {
    const newName = prompt('Введите новое имя:', appData.user.name || '');
    if (!newName || !newName.trim()) return;
    appData.user.name = newName.trim();
    saveData();
    updateProfile();
    showNotification('✏️ Имя обновлено');
}

function handleProfileAction(action) {
    switch (action) {
        case 'settings':
            openSettingsModal();
            break;
        case 'theme':
            openSettingsModal('theme');
            break;
        case 'share':
            shareApp();
            break;
        case 'export':
            exportData();
            break;
        case 'reset':
            resetAppData();
            break;
        default:
            showNotification('Скоро появятся дополнительные опции профиля');
    }
}

function shareApp() {
    ensureSettings();
    const shareText = appData.settings.shareText || DEFAULT_SHARE_TEXT;
    const shareUrl = appData.settings.shareUrl || DEFAULT_SHARE_URL;

    if (navigator.share) {
        navigator.share({ title: 'LifeTrack', text: shareText, url: shareUrl })
            .then(() => showNotification('🚀 Поделился ссылкой на LifeTrack'))
            .catch(() => showNotification('Не удалось поделиться — попробуйте скопировать ссылку вручную'));
        return;
    }

    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
            showNotification('🔗 Ссылка скопирована в буфер обмена');
        }).catch(() => {
            showNotification(`Скопируйте ссылку вручную: ${shareUrl}`);
        });
    } else {
        showNotification(`Скопируйте ссылку вручную: ${shareUrl}`);
    }
}

function resetAppData() {
    if (!confirm('Сбросить весь прогресс? Это действие нельзя отменить.')) return;
    localStorage.removeItem('lifetrack_data');
    localStorage.removeItem('lifetrack_last_reset');
    location.reload();
}

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    debugLog('DOMContentLoaded fired');
    logStartButton('DOMContentLoaded fired');
    loadData();
    checkDailyReset();
    initializeApp();
    setupEventListeners();
    setupAnimatedLogo();
    updateAllStats();
    debugLog('Initial render completed');
    setTimeout(() => {
        const heroScreen = document.getElementById('heroScreen');
        const mainScreen = document.getElementById('mainScreen');
        const startBtn = document.getElementById('startBtn');
        debugLog('Post-init state', {
            heroExists: Boolean(heroScreen),
            heroHidden: heroScreen ? heroScreen.classList.contains('hidden') : null,
            mainExists: Boolean(mainScreen),
            mainHidden: mainScreen ? mainScreen.classList.contains('hidden') : null,
            startBtnExists: Boolean(startBtn),
            startBtnDisabled: startBtn ? startBtn.disabled : null,
            startBtnComputedDisplay: startBtn ? window.getComputedStyle(startBtn).display : null,
            overlayElementAtCenter: document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)?.id || 'none'
        });
    }, 0);

    if (ENABLE_GLASS_DEBUG) {
        requestAnimationFrame(() => {
            setupGlassTransparencyDebug();
            scheduleGlassDebugScan('post-init');
        });
    }
});

function initializeApp() {
    ensureSettings();
    applyThemeColor(appData.settings.themeColor, { persist: false });
    updateSettingsUI();
    setupBackgroundParticles();
    
    // Если нет привычек, создаем примеры
    if (appData.habits.length === 0) {
        createDefaultHabits();
    }
    
    // Инициализируем достижения
    if (appData.achievements.length === 0) {
        initializeAchievements();
    }
    
    // Инициализируем статистику
    if (appData.stats.weeklyData.length === 0) {
        initializeWeeklyStats();
    }
    
    ensureAchievements();
    ensureSettings();
    applyThemeColor(appData.settings.themeColor, { persist: false });
    updateSettingsUI();
    
    ensureWidgets();
    
    renderHabits();
    updateDayPlan();
    renderWeekChart();
    updateAchievementsLevelCard();
    updateAnalytics();
    renderJournal();
    updateProfile();
    checkAchievements();
    renderWidgets();
}

function createDefaultHabits() {
    const defaultHabits = [
        {
            id: Date.now() + 1,
            name: "Медитация",
            icon: "meditation",
            type: "duration",
            target: 15,
            current: 0,
            unit: "минут",
            completed: false,
            category: "morning",
            createdAt: Date.now()
        },
        {
            id: Date.now() + 2,
            name: "Выпить воды",
            icon: "water",
            type: "numeric",
            target: 8,
            current: 0,
            unit: "стаканов",
            completed: false,
            category: "day",
            createdAt: Date.now()
        },
        {
            id: Date.now() + 3,
            name: "Тренировка",
            icon: "exercise",
            type: "duration",
            target: 30,
            current: 0,
            unit: "минут",
            completed: false,
            category: "day",
            createdAt: Date.now()
        },
        {
            id: Date.now() + 4,
            name: "Чтение",
            icon: "reading",
            type: "duration",
            target: 20,
            current: 0,
            unit: "минут",
            completed: false,
            category: "evening",
            createdAt: Date.now()
        }
    ];
    
    appData.habits = defaultHabits;
    saveData();
}

function createDefaultWidgets() {
    const now = Date.now();
    appData.widgets = [
        {
            id: `widget_${now}`,
            type: 'checklist',
            title: 'Цели на день',
            color: 'dark',
            colSpan: 2,
            order: 0,
            config: {
                items: ['Главная цель', 'Важная задача', 'Что сделает день особенным']
            },
            state: {
                completed: [false, false, false]
            }
        },
        {
            id: `widget_${now + 1}`,
            type: 'rating',
            title: 'Качество сна',
            color: 'green',
            colSpan: 1,
            order: 1,
            config: {
                min: 1,
                max: 10
            },
            state: {
                value: 7
            }
        },
        {
            id: `widget_${now + 2}`,
            type: 'counter',
            title: 'Вода',
            color: 'light',
            colSpan: 1,
            order: 2,
            config: {
                unit: 'стаканов',
                step: 1,
                target: 8
            },
            state: {
                value: 0
            }
        },
        {
            id: `widget_${now + 3}`,
            type: 'timer',
            title: 'Медитация',
            color: 'dark',
            colSpan: 1,
            order: 3,
            config: {
                step: 5,
                target: 20
            },
            state: {
                elapsed: 0,
                running: false,
                startedAt: null
            }
        },
        {
            id: `widget_${now + 4}`,
            type: 'timer',
            title: 'Чтение',
            color: 'light',
            colSpan: 1,
            order: 4,
            config: {
                step: 5,
                target: 30
            },
            state: {
                elapsed: 0,
                running: false,
                startedAt: null
            }
        },
        {
            id: `widget_${now + 5}`,
            type: 'checkbox',
            title: 'Фокус дня выполнен',
            color: 'green',
            colSpan: 1,
            order: 5,
            config: {},
            state: {
                checked: false
            }
        },
        {
            id: `widget_${now + 6}`,
            type: 'note',
            title: 'Аффирмация',
            color: 'green',
            colSpan: 2,
            order: 6,
            config: {},
            state: {
                text: ''
            }
        }
    ];
}

function normaliseWidget(widget, index = 0) {
    widget.id = widget.id || `widget_${Date.now()}_${index}`;
    widget.type = widget.type || 'note';
    widget.title = widget.title || 'Виджет';
    widget.color = WIDGET_COLORS.includes(widget.color) ? widget.color : 'dark';
    const spanValue = Number(widget.colSpan);
    widget.colSpan = spanValue >= 2 ? 2 : 1;
    widget.order = typeof widget.order === 'number' ? widget.order : index;
    widget.config = widget.config || {};
    widget.state = widget.state || {};
    
    switch (widget.type) {
        case 'checklist':
            if (!Array.isArray(widget.config.items) || widget.config.items.length === 0) {
                widget.config.items = ['Новая задача'];
            }
            if (!Array.isArray(widget.state.completed) || widget.state.completed.length !== widget.config.items.length) {
                widget.state.completed = widget.config.items.map(() => false);
            }
            break;
        case 'rating':
            widget.config.min = typeof widget.config.min === 'number' ? widget.config.min : 1;
            widget.config.max = typeof widget.config.max === 'number' ? widget.config.max : 10;
            if (widget.config.max <= widget.config.min) {
                widget.config.max = widget.config.min + 1;
            }
            widget.state.value = typeof widget.state.value === 'number' ? widget.state.value : widget.config.min;
            break;
        case 'checkbox':
            widget.state.checked = Boolean(widget.state.checked);
            break;
        case 'counter':
            widget.config.unit = widget.config.unit || '';
            widget.config.step = typeof widget.config.step === 'number' && widget.config.step > 0 ? widget.config.step : 1;
            widget.config.target = typeof widget.config.target === 'number' ? widget.config.target : null;
            widget.state.value = typeof widget.state.value === 'number' ? widget.state.value : 0;
            break;
        case 'timer':
            widget.config.step = typeof widget.config.step === 'number' && widget.config.step > 0 ? widget.config.step : 5;
            widget.config.target = typeof widget.config.target === 'number' ? widget.config.target : null;
            widget.state.elapsed = typeof widget.state.elapsed === 'number' ? widget.state.elapsed : 0;
            widget.state.running = Boolean(widget.state.running);
            widget.state.startedAt = widget.state.running && widget.state.startedAt ? widget.state.startedAt : null;
            break;
        case 'note':
            widget.state.text = typeof widget.state.text === 'string' ? widget.state.text : '';
            break;
    }
    return widget;
}

function ensureWidgets() {
    let createdDefaults = false;
    if (!Array.isArray(appData.widgets) || appData.widgets.length === 0) {
        createDefaultWidgets();
        createdDefaults = true;
    }
    appData.widgets = appData.widgets.map((widget, index) => normaliseWidget(widget, index));
    if (createdDefaults) {
        saveData();
    }
}

function initializeAchievements() {
    ensureAchievements();
}

function ensureAchievements() {
    const existing = Array.isArray(appData.achievements) ? appData.achievements : [];
    appData.achievements = ACHIEVEMENTS_CATALOG.map(cfg => {
        const match = existing.find(item => item.id === cfg.id) || {};
        return {
            id: cfg.id,
            title: cfg.title,
            description: cfg.description,
            type: cfg.type,
            threshold: cfg.threshold,
            emoji: cfg.emoji,
            unlocked: Boolean(match.unlocked),
            unlockedAt: match.unlockedAt || null,
            progress: match.progress || 0
        };
    });
}

function initializeWeeklyStats() {
    const today = new Date();
    const weekData = [];
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        weekData.push({
            date: date.toISOString().split('T')[0],
            completed: 0,
            total: appData.habits.length
        });
    }
    
    appData.stats.weeklyData = weekData;
    saveData();
}

// ═══════════════════════════════════════════════════════════════
// HERO LOGO ANIMATION
// ═══════════════════════════════════════════════════════════════

function setupAnimatedLogo() {
    const logo = document.getElementById('animatedLogo');
    if (!logo) return;
    
    const path = logo.querySelector('#morphPath');
    if (!path) return;
    
    // Создаем более сложную морфинг анимацию с помощью JavaScript
    let time = 0;
    const speed = 0.015; // Немного замедляем для плавности
    
    // Переменные для анимации пульса
    let pulseScale = 1;
    let pulseRotation = 0;
    let isPulsing = false;
    let pulseTime = 0;
    
    // Easing функция для плавной анимации
    function easeOutElastic(t) {
        const c4 = (2 * Math.PI) / 3;
        return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
    }
    
    // Easing для плавного морфинга
    function easeInOutSine(t) {
        return -(Math.cos(Math.PI * t) - 1) / 2;
    }
    
    function morphShape() {
        time += speed;
        
        // Создаем полигональную морфинг форму
        const points = [];
        const centerX = 100;
        const centerY = 100;
        const baseRadius = 60; // Увеличиваем базовый радиус для большего размера
        const numPoints = 5; // 5 точек для более полигонального вида
        
        for (let i = 0; i < numPoints; i++) {
            const angle = (i / numPoints) * Math.PI * 2;
            
            // Используем более резкие волны для полигонального эффекта
            const wave1 = Math.sin(time * 1.2 + angle * 2) * 18;
            const wave2 = Math.cos(time * 1.8 + angle * 3) * 12;
            const wave3 = Math.sin(time * 0.6 + angle * 4) * 8;
            
            const radiusVariation = wave1 + wave2 + wave3;
            const radius = baseRadius + radiusVariation;
            
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            if (i === 0) {
                points.push(`M ${x} ${y}`);
            } else {
                points.push(`L ${x} ${y}`);
            }
        }
        
        points.push('Z');
        path.setAttribute('d', points.join(' '));
        
        // Плавная анимация пульса с easing
        if (isPulsing) {
            pulseTime += 0.015; // Немного замедляем для плавности
            
            if (pulseTime >= 1) {
                // Анимация завершена
                pulseTime = 0;
                pulseScale = 1;
                pulseRotation = 0;
                isPulsing = false;
            } else {
                // Используем easing функцию для плавности
                const maxScale = 1.3;
                const maxRotation = 15;
                
                // Плавное увеличение и уменьшение
                if (pulseTime < 0.5) {
                    // Фаза увеличения (0 -> 0.5)
                    const t = pulseTime * 2; // Нормализуем к 0-1
                    const eased = easeOutElastic(t);
                    pulseScale = 1 + (maxScale - 1) * eased;
                    pulseRotation = maxRotation * eased;
                } else {
                    // Фаза уменьшения (0.5 -> 1)
                    const t = (pulseTime - 0.5) * 2; // Нормализуем к 0-1
                    const eased = easeOutElastic(t);
                    pulseScale = maxScale - (maxScale - 1) * eased;
                    pulseRotation = maxRotation - maxRotation * eased;
                }
            }
        }
        
        // Применяем transform
        logo.style.transform = `scale(${pulseScale}) rotate(${pulseRotation}deg)`;
        
        requestAnimationFrame(morphShape);
    }
    
    // Добавляем интерактивность через клик
    logo.addEventListener('click', () => {
        if (!isPulsing) {
            isPulsing = true;
            pulseTime = 0;
        }
    });
    
    // Для мобильных устройств - touch события
    logo.addEventListener('touchstart', (e) => {
        e.preventDefault();
        logo.style.transform = 'scale(0.95)';
    });
    
    logo.addEventListener('touchend', (e) => {
        e.preventDefault();
        logo.style.transform = '';
        
        if (!isPulsing) {
            isPulsing = true;
            pulseTime = 0;
        }
    });
    
    // Запускаем морфинг анимацию
    morphShape();
}

function setupMainScreenAnimation() {
    // резервная заглушка (анимация отключена)
}

// ═══════════════════════════════════════════════════════════════
// EVENT LISTENERS
// ═══════════════════════════════════════════════════════════════

function setupEventListeners() {
    setupHapticFeedback();

    // Hero screen
    const startBtn = document.getElementById('startBtn');
    const heroScreen = document.getElementById('heroScreen');
    const mainScreen = document.getElementById('mainScreen');
    debugLog('setupEventListeners:start', {
        startBtnExists: Boolean(startBtn),
        heroExists: Boolean(heroScreen),
        mainExists: Boolean(mainScreen)
    });
    logStartButton('setupEventListeners', {
        startBtnExists: Boolean(startBtn),
        heroExists: Boolean(heroScreen),
        mainExists: Boolean(mainScreen)
    });
    if (startBtn) {
        debugLog('startBtn listener attached');
        logStartButton('listener attached', {
            disabled: startBtn.disabled,
            pointerEvents: getComputedStyle(startBtn).pointerEvents,
            visibility: getComputedStyle(startBtn).visibility,
            display: getComputedStyle(startBtn).display,
            rect: startBtn.getBoundingClientRect()
        });
        startBtn.addEventListener('click', (event) => {
            debugLog('startBtn click event captured', {
                eventType: event.type,
                heroHiddenBefore: heroScreen ? heroScreen.classList.contains('hidden') : null,
                mainHiddenBefore: mainScreen ? mainScreen.classList.contains('hidden') : null,
                target: event.target && event.target.id,
                pointerType: typeof event.pointerType !== 'undefined' ? event.pointerType : null
            });
            logStartButton('click captured', {
                eventType: event.type,
                heroHiddenBefore: heroScreen ? heroScreen.classList.contains('hidden') : null,
                mainHiddenBefore: mainScreen ? mainScreen.classList.contains('hidden') : null,
                pointerType: typeof event.pointerType !== 'undefined' ? event.pointerType : null,
                isTrusted: event.isTrusted,
                composedPath: event.composedPath?.().slice(0, 5).map(node => node.id || node.className || node.nodeName)
            });
            if (!heroScreen || !mainScreen) {
                debugLog('startBtn click aborted: missing hero/main screen');
                logStartButton('click abort: missing screen', {
                    heroExists: Boolean(heroScreen),
                    mainExists: Boolean(mainScreen)
                });
                return;
            }
            heroScreen.classList.add('hidden');
            mainScreen.classList.remove('hidden');
            updateAllStats();
            debugLog('startBtn click handled', {
                heroHiddenAfter: heroScreen.classList.contains('hidden'),
                mainHiddenAfter: mainScreen.classList.contains('hidden')
            });
            logStartButton('click handled', {
                heroHiddenAfter: heroScreen.classList.contains('hidden'),
                mainHiddenAfter: mainScreen.classList.contains('hidden')
            });
        }, { capture: true });
    } else {
        debugLog('startBtn not found during setup');
        logStartButton('not found', {});
    }
    
    document.getElementById('learnMoreBtn')?.addEventListener('click', () => {
        showNotification('LifeTrack - выбираю лучшую версию себя каждый день!');
    });
    
    // Main tabs
    document.querySelectorAll('.main-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabName = e.currentTarget.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Filter pills - делегирование событий
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-pill')) {
            document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            e.target.classList.add('active');
            const filter = e.target.dataset.filter;
            filterHabits(filter);
        }
    });
    
    // Checklist items - делегирование событий
    document.addEventListener('click', (e) => {
        const checklistItem = e.target.closest('.checklist-item');
        if (checklistItem) {
            const checkbox = checklistItem.querySelector('.habit-checkbox');
            const itemName = checklistItem.querySelector('.habit-label').textContent.toLowerCase();
            
            checkbox.classList.toggle('checked');
            
            if (checkbox.classList.contains('checked')) {
                checkbox.innerHTML = ICONS.check;
                checklistItem.classList.add('checked');
                appData.dailyPlan[itemName] = true;
            } else {
                checkbox.innerHTML = '';
                checklistItem.classList.remove('checked');
                appData.dailyPlan[itemName] = false;
            }
            
            saveData();
            updateDayPlan();
            updateAllStats();
        }
    });
    
    // Heart button
    document.querySelector('.heart-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        const btn = e.currentTarget;
        btn.classList.toggle('active');
        btn.style.background = btn.classList.contains('active')
            ? 'rgba(var(--accent-color-rgb), 0.4)'
            : 'rgba(var(--accent-color-rgb), 0.2)';
    });
    
    // Add habit modal
    document.getElementById('habitType')?.addEventListener('change', (e) => {
        const targetGroup = document.getElementById('targetGroup');
        if (e.target.value === 'boolean') {
            targetGroup.classList.add('hidden');
        } else {
            targetGroup.classList.remove('hidden');
        }
    });
    
    // Icon picker
    document.querySelectorAll('.icon-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.icon-option').forEach(o => o.classList.remove('selected'));
            e.currentTarget.classList.add('selected');
        });
    });
    
    // Forms
    document.getElementById('addHabitForm')?.addEventListener('submit', handleAddHabit);
    // updateHabitForm обрабатывается внутри openUpdateHabitModal
    
    // Modal controls
    document.getElementById('closeAddHabitModal')?.addEventListener('click', closeAddHabitModal);
    document.getElementById('cancelAddHabit')?.addEventListener('click', closeAddHabitModal);
    document.getElementById('closeUpdateHabitModal')?.addEventListener('click', closeUpdateHabitModal);
    document.getElementById('cancelUpdateHabit')?.addEventListener('click', closeUpdateHabitModal);
    
    // Journal
    document.getElementById('addJournalEntry')?.addEventListener('click', openAddJournalModal);
    document.getElementById('addJournalForm')?.addEventListener('submit', handleAddJournal);
    document.getElementById('closeJournalModal')?.addEventListener('click', () => {
        document.getElementById('addJournalModal').classList.add('hidden');
    });
    document.getElementById('cancelJournal')?.addEventListener('click', () => {
        document.getElementById('addJournalModal').classList.add('hidden');
    });
    
    // Widgets
    document.getElementById('addWidgetBtn')?.addEventListener('click', () => openWidgetModal());
    document.getElementById('widgetEmptyAdd')?.addEventListener('click', () => openWidgetModal());
    document.getElementById('toggleWidgetEdit')?.addEventListener('click', toggleWidgetEditMode);
    document.getElementById('widgetForm')?.addEventListener('submit', handleWidgetFormSubmit);
    document.getElementById('closeWidgetModal')?.addEventListener('click', closeWidgetModal);
    document.getElementById('cancelWidgetModal')?.addEventListener('click', closeWidgetModal);
    document.getElementById('widgetType')?.addEventListener('change', handleWidgetTypeChange);
    document.getElementById('widgetColorPicker')?.addEventListener('click', handleWidgetColorPick);
    document.getElementById('widgetDeleteBtn')?.addEventListener('click', () => {
        if (currentWidgetEditingId) {
            removeWidget(currentWidgetEditingId);
            closeWidgetModal();
        }
    });
    
    // Profile settings legacy handlers removed
    
    // Закрытие модалок по клику вне их
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.add('hidden');
        }
    });

    if (DEBUG_UI) {
        document.addEventListener('pointerdown', (event) => {
            const path = event.composedPath ? event.composedPath().slice(0, 5).map(node => node.id || node.className || node.nodeName) : [];
            const topEl = document.elementFromPoint(event.clientX, event.clientY);
            debugLog('pointerdown captured', {
                type: event.pointerType || event.type,
                x: event.clientX,
                y: event.clientY,
                targetId: event.target && event.target.id,
                pathSample: path,
                topElementId: topEl ? topEl.id : 'none',
                topElementClass: topEl ? topEl.className : 'none'
            });
        }, true);

        if (heroScreen) {
            const heroObserver = new MutationObserver(() => {
                debugLog('heroScreen class change', {
                    classes: heroScreen.className,
                    hidden: heroScreen.classList.contains('hidden')
                });
            });
            heroObserver.observe(heroScreen, { attributes: true, attributeFilter: ['class'] });
        }

        if (mainScreen) {
            const mainObserver = new MutationObserver(() => {
                debugLog('mainScreen class change', {
                    classes: mainScreen.className,
                    hidden: mainScreen.classList.contains('hidden')
                });
            });
            mainObserver.observe(mainScreen, { attributes: true, attributeFilter: ['class'] });
        }
    }

    document.getElementById('calendarPrev')?.addEventListener('click', () => changeAnalyticsMonth(-1));
    document.getElementById('calendarNext')?.addEventListener('click', () => changeAnalyticsMonth(1));
    document.getElementById('analyticsCalendar')?.addEventListener('click', (event) => {
        const cell = event.target.closest('.calendar-day');
        if (cell?.dataset.date) {
            showAnalyticsDayDetails(cell.dataset.date);
        }
    });

    document.querySelectorAll('.icon-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.icon-option').forEach(o => o.classList.remove('selected'));
            e.currentTarget.classList.add('selected');
        });
    });
    
    const avatarBtn = document.getElementById('avatarUploadBtn');
    const avatarInput = document.getElementById('avatarInput');
    if (avatarBtn && avatarInput) {
        avatarBtn.addEventListener('click', (e) => {
            e.preventDefault();
            avatarInput.click();
        });
        avatarInput.addEventListener('change', handleAvatarUpload);
    }
    
    document.getElementById('profileRenameBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        handleProfileRename();
    });
    
    document.getElementById('profileActions')?.addEventListener('click', (event) => {
        const actionBtn = event.target.closest('.profile-action');
        if (!actionBtn || !actionBtn.dataset.action) return;
        event.preventDefault();
        handleProfileAction(actionBtn.dataset.action);
    });
    
    document.getElementById('themeChips')?.addEventListener('click', handleThemeChipClick);
    document.getElementById('notificationsToggle')?.addEventListener('change', handleNotificationsToggle);
    document.getElementById('removeAvatarBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        removeAvatarImage();
    });
    document.getElementById('exportDataBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        exportData();
    });
    document.getElementById('resetProgressBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        resetAppData();
    });
    document.getElementById('closeSettingsModalBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        closeSettingsModal();
    });
    document.getElementById('closeSettingsModal')?.addEventListener('click', (e) => {
        e.preventDefault();
        closeSettingsModal();
    });
    document.getElementById('settingsModal')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            closeSettingsModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.body.classList.contains('modal-open')) {
            closeSettingsModal();
        }
    });
    
    updateSettingsUI();
    
    // Forms

    // Профиль
    const profileOpenBtn = document.getElementById('profileOpenBtn');
    if (profileOpenBtn) {
        profileOpenBtn.addEventListener('click', (event) => {
            event.preventDefault();
            switchTab('profile');
            document.getElementById('profilePanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

function closeAddHabitModal() {
    document.getElementById('addHabitModal').classList.add('hidden');
    document.getElementById('addHabitForm').reset();
    document.getElementById('targetGroup').classList.add('hidden');
}

function closeUpdateHabitModal() {
    document.getElementById('updateHabitModal').classList.add('hidden');
}

// ═══════════════════════════════════════════════════════════════
// RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════════════

function renderHabits(filter = 'all') {
    const grid = document.getElementById('habitsGrid');
    if (!grid) return;
    
    const dayPlanCard = document.getElementById('dayPlanCard');
    grid.innerHTML = '';
    
    if (dayPlanCard) {
        grid.appendChild(dayPlanCard);
    }
    
    const bigGreenCard = createBigProgressCard();
    grid.appendChild(bigGreenCard);
    
    let habitsToShow = appData.habits;
    if (filter !== 'all') {
        habitsToShow = appData.habits.filter(h => h.category === filter);
    }
    
    if (habitsToShow.length === 0 && filter !== 'all') {
        const emptyCard = document.createElement('div');
        emptyCard.className = 'habit-card';
        emptyCard.style.textAlign = 'center';
        emptyCard.style.padding = '40px 20px';
        emptyCard.innerHTML = `
            <div class="empty-state-text">Я пока ничего не выбрал для категории "${filter === 'morning' ? 'Утро' : filter === 'evening' ? 'Вечер' : 'День'}"</div>
        `;
        grid.appendChild(emptyCard);
    } else {
        habitsToShow.forEach(habit => {
            const card = createHabitCard(habit);
            grid.appendChild(card);
        });
    }
    
    const addCard = createAddHabitCard();
    grid.appendChild(addCard);
    
    renderMediaCards();
}

function createBigProgressCard() {
    const card = document.createElement('div');
    card.className = 'habit-card large';
    
    card.innerHTML = `
        <div class="habit-card-header">
            <div class="habit-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            </div>
        </div>
        <h3 class="habit-title">Медитация сна</h3>
        <p class="habit-subtitle">Выбираю спокойствие</p>
    `;
    
    card.addEventListener('click', () => {
        showNotification('Открытие программы медитации...');
    });
    
    return card;
}

function createHabitCard(habit) {
    const card = document.createElement('div');
    card.className = 'habit-card';
    card.dataset.habitId = habit.id;
    
    const isCompleted = habit.type === 'boolean' 
        ? habit.completed 
        : habit.current >= habit.target;
    
    const progressPercent = habit.type === 'boolean' 
        ? (habit.completed ? 100 : 0)
        : Math.min((habit.current / habit.target) * 100, 100);
    
    card.innerHTML = `
        <div class="habit-card-header">
            <div class="habit-icon">
                ${ICONS[habit.icon] || ICONS.star}
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
                ${progressPercent === 100 ? '<div class="habit-badge">✓</div>' : ''}
                <button class="habit-delete-btn" data-habit-id="${habit.id}" title="Удалить привычку">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                </button>
            </div>
        </div>
        <h3 class="habit-title">${escapeHtml(habit.name)}</h3>
        <p class="habit-subtitle">
            ${habit.type === 'boolean' 
                ? (habit.completed ? 'Я выбрал это сегодня' : 'Хочу выбрать')
                : `${habit.current} / ${habit.target} ${escapeHtml(habit.unit)}`
            }
        </p>
        ${habit.type === 'boolean' ? `
            <div class="habit-actions">
                <label style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
                    <div class="habit-checkbox ${habit.completed ? 'checked' : ''}" data-habit-id="${habit.id}">
                        ${habit.completed ? ICONS.check : ''}
                    </div>
                    <span class="habit-label">${escapeHtml(habit.name)}</span>
                </label>
            </div>
        ` : `
            <div class="habit-meta">
                <span class="habit-tag">${habit.category === 'morning' ? 'Утро' : habit.category === 'evening' ? 'Вечер' : 'День'}</span>
                ${progressPercent >= 50 ? '<span class="habit-tag">В процессе</span>' : ''}
            </div>
        `}
    `;
    
    // Кнопка удаления
    const deleteBtn = card.querySelector('.habit-delete-btn');
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteHabit(habit.id);
    });
    
    if (habit.type === 'boolean') {
        const checkbox = card.querySelector('.habit-checkbox');
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleHabitCompletion(habit.id);
        });
    } else {
        card.addEventListener('click', () => {
            openUpdateHabitModal(habit);
        });
    }
    
    return card;
}

function createAddHabitCard() {
    const card = document.createElement('div');
    card.className = 'habit-card';
    card.style.cursor = 'pointer';
    card.style.border = '2px dashed rgba(35, 35, 35, 0.3)';
    card.style.background = 'rgba(var(--accent-color-rgb), 0.3)';
    card.innerHTML = `
        <div class="habit-card-header">
            <div class="habit-icon">
                ${ICONS.plus}
            </div>
        </div>
        <h3 class="habit-title">Новый выбор</h3>
        <p class="habit-subtitle">Что я хочу добавить в свою жизнь?</p>
    `;
    
    card.addEventListener('click', () => {
        document.getElementById('addHabitModal').classList.remove('hidden');
    });
    
    return card;
}

function renderMediaCards() {
    const mediaGrid = document.getElementById('mediaGrid');
    if (!mediaGrid) return;
    
    mediaGrid.innerHTML = '';
    
    const mediaItems = [
        {
            title: "Аффirmации для завершения дня",
            tags: ["15 мин", "Вечер", "Релакс"],
            icon: "music"
        },
        {
            title: "Медитация для глубокого сна",
            tags: ["10 мин", "Сон", "Вечер"],
            icon: "sleep"
        }
    ];
    
    mediaItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'media-card';
        card.innerHTML = `
            <div class="media-info">
                <h3 class="media-title">${escapeHtml(item.title)}</h3>
                <div class="media-tags">
                    ${item.tags.map(tag => `<span class="media-tag">${escapeHtml(tag)}</span>`).join('')}
                </div>
            </div>
            <div class="play-button">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            </div>
        `;
        
        card.addEventListener('click', () => {
            showNotification('▶️ Воспроизведение: ' + item.title);
        });
        
        mediaGrid.appendChild(card);
    });
}

function updateDayPlan() {
    const subtitle = document.getElementById('dayPlanSubtitle');
    if (!subtitle) return;
    
    const completed = Object.values(appData.dailyPlan).filter(v => v).length;
    const total = Object.keys(appData.dailyPlan).length;
    
    subtitle.textContent = `${completed} из ${total} выбрано`;
    
    // Обновляем визуальное состояние чекбоксов
    const checklistItems = document.querySelectorAll('.checklist-item');
    checklistItems.forEach(item => {
        const label = item.querySelector('.habit-label').textContent.toLowerCase();
        const checkbox = item.querySelector('.habit-checkbox');
        
        if (appData.dailyPlan[label]) {
            checkbox.classList.add('checked');
            checkbox.innerHTML = ICONS.check;
            item.classList.add('checked');
        } else {
            checkbox.classList.remove('checked');
            checkbox.innerHTML = '';
            item.classList.remove('checked');
        }
    });
}

// ═══════════════════════════════════════════════════════════════
// HABIT ACTIONS
// ═══════════════════════════════════════════════════════════════

function toggleHabitCompletion(habitId) {
    const habit = appData.habits.find(h => h.id === habitId);
    if (!habit) return;
    
    const wasCompleted = habit.type === 'boolean' ? habit.completed : habit.current >= habit.target;
    habit.completed = !habit.completed;
    const isCompletedNow = habit.completed;
    
    if (isCompletedNow && !wasCompleted) {
        addXP(XP_RULES.habitComplete, 'habit_complete', { skipSave: true });
        updateStreak();
        updateWeeklyStats(true);
        showNotification(`✨ ${habit.name} — мой выбор! +${XP_RULES.habitComplete} XP`);
    } else if (!isCompletedNow && wasCompleted) {
        updateWeeklyStats(false);
    }
    
    renderHabits();
    updateDayPlan();
    handleWidgetStateChange();
}

function handleAddHabit(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('habitName');
    const name = nameInput.value.trim();
    
    if (!name) {
        showNotification('Введите название привычки');
        nameInput.focus();
        return;
    }
    
    const type = document.getElementById('habitType').value;
    const targetInput = document.getElementById('habitTarget');
    const target = type === 'boolean' ? 1 : parseInt(targetInput.value) || 1;
    
    if (type !== 'boolean' && (!target || target < 1)) {
        showNotification('Введите корректное целевое значение');
        targetInput.focus();
        return;
    }
    
    const unit = document.getElementById('habitUnit').value.trim() || '';
    const selectedIcon = document.querySelector('.icon-option.selected')?.dataset.icon || 'star';
    const category = document.getElementById('habitCategory')?.value || 'day';
    
    const newHabit = {
        id: Date.now(),
        name,
        icon: selectedIcon,
        type,
        target,
        current: 0,
        unit,
        completed: false,
        category: category,
        createdAt: Date.now()
    };
    
    appData.habits.push(newHabit);
    appData.stats.habitsCreated = (appData.stats.habitsCreated || 0) + 1;
    addXP(XP_RULES.habitCreate, 'habit_create', { skipSave: true });
    showNotification(`✨ Новая цель: "${name}" (+${XP_RULES.habitCreate} XP)`);
    
    renderHabits();
    updateDayPlan();
    closeAddHabitModal();
    handleWidgetStateChange();
}

function openUpdateHabitModal(habit) {
    const modal = document.getElementById('updateHabitModal');
    const title = document.getElementById('updateHabitTitle');
    const booleanUpdate = document.getElementById('booleanUpdate');
    const numericUpdate = document.getElementById('numericUpdate');
    const currentValue = document.getElementById('currentValue');
    const progressText = document.getElementById('habitProgressText');
    const deleteBtn = document.getElementById('deleteHabitBtn');
    
    title.textContent = habit.name;
    
    // Кнопка удаления
    deleteBtn.onclick = () => {
        closeUpdateHabitModal();
        deleteHabit(habit.id);
    };
    
    if (habit.type === 'boolean') {
        booleanUpdate.classList.remove('hidden');
        numericUpdate.classList.add('hidden');
        
        const checkbox = booleanUpdate.querySelector('.habit-checkbox');
        checkbox.dataset.habitId = habit.id;
        
        if (habit.completed) {
            checkbox.classList.add('checked');
            checkbox.innerHTML = ICONS.check;
        } else {
            checkbox.classList.remove('checked');
            checkbox.innerHTML = '';
        }
        
        checkbox.onclick = () => {
            toggleHabitCompletion(habit.id);
            closeUpdateHabitModal();
        };
    } else {
        booleanUpdate.classList.add('hidden');
        numericUpdate.classList.remove('hidden');
        
        currentValue.value = habit.current;
        currentValue.max = habit.target * 2;
        currentValue.min = 0;
        progressText.textContent = `${habit.current} / ${habit.target} ${habit.unit}`;
        
        currentValue.oninput = () => {
            const val = parseInt(currentValue.value) || 0;
            progressText.textContent = `${val} / ${habit.target} ${habit.unit}`;
        };
        
        document.getElementById('updateHabitForm').onsubmit = (e) => {
            e.preventDefault();
            const newValue = Math.max(0, Math.min(parseInt(currentValue.value) || 0, habit.target * 2));
            const previousValue = habit.current || 0;
            if (newValue === previousValue) {
                closeUpdateHabitModal();
                return;
            }

            const wasCompleted = previousValue >= habit.target;
            habit.current = newValue;
            const isNowCompleted = habit.current >= habit.target;

            if (isNowCompleted && !wasCompleted) {
                addXP(XP_RULES.habitComplete, 'habit_complete', { skipSave: true });
                updateStreak();
                updateWeeklyStats(true);
                showNotification(`🎉 ${habit.name} — цель достигнута! +${XP_RULES.habitComplete} XP`);
            } else {
                if (!isNowCompleted && wasCompleted) {
                    updateWeeklyStats(false);
                }
                addXP(XP_RULES.habitEdit, 'habit_edit', { skipSave: true });
                showNotification(`✏️ ${habit.name} обновлена (+${XP_RULES.habitEdit} XP)`);
            }

            renderHabits();
            updateDayPlan();
            handleWidgetStateChange();
            closeUpdateHabitModal();
        };
    }
    
    modal.classList.remove('hidden');
}

function deleteHabit(habitId) {
    const habit = appData.habits.find(h => h.id === habitId);
    if (!habit) return;
    
    if (confirm(`Убрать "${habit.name}" из выбранного?`)) {
        appData.habits = appData.habits.filter(h => h.id !== habitId);
        renderHabits();
        updateDayPlan();
        handleWidgetStateChange();
        showNotification(`✓ "${habit.name}" удалено`);
    }
}

function filterHabits(filter) {
    renderHabits(filter);
}

// ═══════════════════════════════════════════════════════════════
// TAB SWITCHING
// ═══════════════════════════════════════════════════════════════

function switchTab(tabName) {
    document.querySelectorAll('.main-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const tabElement = document.querySelector(`[data-tab="${tabName}"]`);
    if (tabElement) {
        tabElement.classList.add('active');
    }
    
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    const panelId = `${tabName}Panel`;
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.classList.add('active');
    }
    
    const profileButton = document.getElementById('profileOpenBtn');
    if (profileButton) {
        profileButton.classList.toggle('profile-open', tabName === 'profile');
    }

    // Обновляем контент при переключении
    switch(tabName) {
        case 'trackers':
            renderWidgets();
            break;
        case 'analytics':
            renderWeekChart();
            updateAnalytics();
            break;
        case 'achievements':
            updateAchievementsLevelCard();
            renderAchievements();
            break;
        case 'journal':
            renderJournal();
            break;
        case 'profile':
            updateProfile();
            break;
    }

    if (ENABLE_GLASS_DEBUG) {
        scheduleGlassDebugScan(`switchTab:${tabName}`);
    }
}

// ═══════════════════════════════════════════════════════════════
// ANALYTICS
// ═══════════════════════════════════════════════════════════════

function updateAnalytics() {
    const history = appData.history?.days ? [...appData.history.days] : [];
    const recent = history.slice(-7);
    const completionRate = recent.length
        ? Math.round(recent.reduce((sum, entry) => sum + (entry.completionRate || 0), 0) / recent.length)
        : calculateCompletionRate();
    const streak = calculateStreakFromHistory(history);
    const perfectDays = appData.stats.perfectDays || 0;

    const statValues = document.querySelectorAll('.stat-value');
    if (statValues.length >= 3) {
        statValues[0].textContent = `${completionRate}%`;
        statValues[1].textContent = streak;
        statValues[2].textContent = perfectDays;
    }

    renderProgressChart();
    renderAnalyticsCalendar();
}

function calculateCompletionRate() {
    if (appData.habits.length === 0) return 0;
    
    const completed = appData.habits.filter(h => {
        if (h.type === 'boolean') return h.completed;
        return h.current >= h.target;
    }).length;
    
    return Math.round((completed / appData.habits.length) * 100);
}

function calculateStreakFromHistory(days) {
    if (!days || days.length === 0) {
        return appData.user?.streak || 0;
    }

    const sorted = [...days].sort((a, b) => b.date.localeCompare(a.date));
    let streak = 0;
    let previousDate = getTodayKey();

    for (let i = 0; i < sorted.length; i++) {
        const entry = sorted[i];
        const currentDate = entry.date;
        const diff = Math.floor((new Date(previousDate) - new Date(currentDate)) / 86400000);

        if (diff === 0) {
            // same day, skip duplicates
            previousDate = currentDate;
            continue;
        }

        if (diff === 1 && (entry.completionRate || 0) >= 50) {
            streak += 1;
            previousDate = currentDate;
        } else if (diff > 1) {
            break;
        } else {
            previousDate = currentDate;
        }
    }

    return Math.max(streak, appData.user?.streak || 0);
}

function renderWeekChart() {
    // Отрисовка графика перенесена в renderProgressChart через updateAnalytics.
}

// ═══════════════════════════════════════════════════════════════
// PROGRESS
// ═══════════════════════════════════════════════════════════════

function updateAchievementsLevelCard() {
    const circle = document.querySelector('.progress-ring-fill');
    const progressValue = document.querySelector('.progress-value');
    const progressText = document.querySelector('.progress-text');
    
    if (!circle || !progressValue || !progressText) return;
    
    const xp = appData.user.xp;
    const xpToNext = appData.user.xpToNextLevel;
    const level = appData.user.level;
    
    const progress = Math.min((xp / xpToNext) * 100, 100);
    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (progress / 100) * circumference;
    
    circle.style.strokeDashoffset = offset;
    progressValue.textContent = level;
    progressText.textContent = `${xp} / ${xpToNext} XP`;
}

// ═══════════════════════════════════════════════════════════════
// ACHIEVEMENTS
// ═══════════════════════════════════════════════════════════════

function renderAchievements() {
    const grid = document.querySelector('.achievements-grid');
    if (!grid) return;
    ensureAchievements();

    updateAchievementsLevelCard();

    grid.innerHTML = '';

    appData.achievements.forEach(achievement => {
        const card = document.createElement('div');
        card.className = `achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`;

        const progressValue = Math.min(achievement.progress || 0, achievement.threshold);
        const progressText = `${progressValue} / ${achievement.threshold}`;

        card.innerHTML = `
            <div class="achievement-icon-large">${achievement.emoji}</div>
            <h3 class="achievement-card-title">${escapeHtml(achievement.title)}</h3>
            <p class="achievement-card-desc">${escapeHtml(achievement.description)}</p>
            ${achievement.unlocked
                ? `<div class="achievement-date">Получено ${formatDate(achievement.unlockedAt)}</div>`
                : `<div class="achievement-progress">${progressText}</div>`
            }
        `;

        grid.appendChild(card);
    });
}

function getAchievementProgress(achievement) {
    switch (achievement.type) {
        case 'xp_total':
            return appData.user.totalXP || 0;
        case 'streak':
            return calculateStreakFromHistory(appData.history?.days || []);
        case 'perfect_days':
            return appData.stats.perfectDays || 0;
        case 'completions':
            return appData.stats.totalCompleted || 0;
        case 'habits_created':
            return appData.stats.habitsCreated || 0;
        case 'widgets_created':
            return appData.stats.widgetsCreated || 0;
        case 'journal_entries':
            return appData.stats.journalEntries || (appData.journal?.length || 0);
        case 'active_days':
            return appData.history?.days?.length || 0;
        case 'level':
            return appData.user.level || 1;
        default:
            return 0;
    }
}

function showAchievementToast(achievement) {
    showNotification(`🏆 Достижение: ${achievement.title}! +${XP_RULES.achievement} XP`);
}

function checkAchievements() {
    ensureAchievements();
    let unlockedSomething = false;

    appData.achievements.forEach(achievement => {
        const progress = getAchievementProgress(achievement);
        achievement.progress = progress;

        if (!achievement.unlocked && progress >= achievement.threshold) {
            achievement.unlocked = true;
            achievement.unlockedAt = Date.now();
            showAchievementToast(achievement);
            addXP(XP_RULES.achievement, 'achievement', { skipUI: true, skipAchievements: true, skipSave: true });
            unlockedSomething = true;
        }
    });

    if (unlockedSomething) {
        saveData();
        updateAchievementsLevelCard();
        updateProfile();
    }

    renderAchievements();
}

// ═══════════════════════════════════════════════════════════════
// JOURNAL
// ═══════════════════════════════════════════════════════════════

function renderJournal() {
    const container = document.getElementById('journalEntries');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (appData.journal.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/></svg>
                </div>
                <div class="empty-state-text">Записей пока нет</div>
                <div class="empty-state-subtext">Начните вести дневник своих достижений</div>
            </div>
        `;
        return;
    }
    
    appData.journal
        .sort((a, b) => b.date - a.date)
        .forEach(entry => {
            const entryEl = document.createElement('div');
            entryEl.className = 'journal-entry';
            entryEl.innerHTML = `
                <div class="entry-date">${formatDateTime(entry.date)}</div>
                <div class="entry-content">${escapeHtml(entry.content)}</div>
            `;
            container.appendChild(entryEl);
        });
}

function openAddJournalModal() {
    const modal = document.getElementById('addJournalModal');
    if (!modal) {
        const content = prompt('Введите текст записи:');
        if (content && content.trim()) {
            const entry = {
                id: Date.now(),
                date: Date.now(),
                content: content.trim()
            };
            
            appData.journal.push(entry);
            appData.stats.journalEntries = (appData.stats.journalEntries || 0) + 1;
            renderJournal();
            showNotification('✓ Запись добавлена');
            handleWidgetStateChange();
        }
        return;
    }
    
    modal.classList.remove('hidden');
    document.getElementById('journalContent').value = '';
    document.getElementById('journalContent').focus();
}

function handleAddJournal(e) {
    e.preventDefault();
    
    const content = document.getElementById('journalContent').value.trim();
    if (!content) {
        showNotification('Введите текст записи');
        return;
    }
    
    const entry = {
        id: Date.now(),
        date: Date.now(),
        content: content
    };
    
    appData.journal.push(entry);
    appData.stats.journalEntries = (appData.stats.journalEntries || 0) + 1;
    renderJournal();
    
    document.getElementById('addJournalModal').classList.add('hidden');
    document.getElementById('addJournalForm').reset();
    showNotification('✓ Запись добавлена');
    handleWidgetStateChange();
}

// ═══════════════════════════════════════════════════════════════
// PROFILE
// ═══════════════════════════════════════════════════════════════

function updateProfile() {
    const profileName = document.querySelector('.profile-name');
    const profileLevel = document.querySelector('.profile-level');
    const statsContainer = document.getElementById('profileStats');
    const avatarNode = document.getElementById('profileAvatar');
    const avatarLabel = document.getElementById('profileAvatarLabel');

    if (profileName) {
        profileName.textContent = appData.user.name || 'Пользователь';
    }

    if (profileLevel) {
        const xp = appData.user.xp || 0;
        const xpToNext = appData.user.xpToNextLevel || 100;
        profileLevel.textContent = `Уровень ${appData.user.level || 1} • ${xp} / ${xpToNext} XP`;
    }

    if (avatarNode) {
        if (appData.user.avatar) {
            avatarNode.classList.add('has-image');
            avatarNode.style.backgroundImage = `url(${appData.user.avatar})`;
            avatarNode.style.border = 'none';
            avatarNode.style.borderRadius = '32px';
            avatarLabel.textContent = 'Сменить фото';
        } else {
            avatarNode.classList.remove('has-image');
            avatarNode.style.backgroundImage = '';
            avatarNode.style.border = '2px solid rgba(var(--accent-color-rgb), 0.35)';
            avatarNode.style.borderRadius = '28px';
            if (appData.user.name) {
                const initial = appData.user.name.trim().charAt(0).toUpperCase();
                avatarNode.innerHTML = `<span class="profile-avatar-initials">${escapeHtml(initial)}</span>`;
            } else {
                avatarNode.innerHTML = `<span class="profile-avatar-initials">Я</span>`;
            }
        }
    }

    if (avatarLabel) {
        avatarLabel.textContent = appData.user.avatar ? 'Сменить фото' : 'Добавить фото';
    }

    if (statsContainer) {
        const stats = [
            { label: 'Дней подряд', value: appData.user.streak || 0, icon: 'ideal_w.png' },
            { label: 'Идеальных дней', value: appData.stats.perfectDays || 0, icon: 'dostijenia_w.png' },
            { label: 'Всего XP', value: appData.user.totalXP || appData.user.xp || 0 },
            { label: 'Привычек сейчас', value: appData.habits.length || 0 }
        ];
        statsContainer.innerHTML = stats.map(({ label, value, icon }) => `
            <div class="profile-stat${icon ? ' profile-stat--with-icon' : ''}">
                ${icon ? `<div class="profile-stat-icon accent-icon" aria-hidden="true"><img src="${icon}" alt=""></div>` : ''}
                <div class="profile-stat-value">${escapeHtml(String(value))}</div>
                <div class="profile-stat-label">${escapeHtml(label)}</div>
            </div>
        `).join('');
    }
}

// ═══════════════════════════════════════════════════════════════
// GAMIFICATION
// ═══════════════════════════════════════════════════════════════

function addXP(amount, source = 'generic', options = {}) {
    if (!amount || amount <= 0) return;

    const { skipUI = false, skipAchievements = false, skipSave = false } = options;
    const gain = Math.max(1, Math.floor(amount));

    appData.user.xp += gain;
    appData.user.totalXP = (appData.user.totalXP || 0) + gain;

    let leveledUp = false;
    while (appData.user.xp >= appData.user.xpToNextLevel) {
        appData.user.xp -= appData.user.xpToNextLevel;
        appData.user.level += 1;
        appData.user.xpToNextLevel = Math.floor(appData.user.xpToNextLevel * 1.2 + 25);
        leveledUp = true;
    }

    if (!skipSave) {
        saveData();
    }

    if (leveledUp && !skipUI) {
        showNotification(`🎊 Новый уровень: ${appData.user.level}!`);
    }

    if (!skipUI) {
        updateAchievementsLevelCard();
        updateProfile();
    }

    if (!skipAchievements) {
        checkAchievements();
    }
}

function updateStreak() {
    const today = new Date().toDateString();
    const lastActive = appData.user.lastActiveDate;
    
    if (lastActive === today) {
        return; // Уже обновлено сегодня
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    if (lastActive === yesterdayStr) {
        appData.user.streak++;
    } else if (lastActive !== today) {
        appData.user.streak = 1;
    }
    
    appData.user.lastActiveDate = today;
    appData.user.totalDays++;
    saveData();
}

function updateWeeklyStats(completed) {
    const today = new Date().toISOString().split('T')[0];
    const weekData = appData.stats.weeklyData;
    
    let todayData = weekData.find(d => d.date === today);
    
    if (!todayData) {
        // Добавляем новый день
        todayData = {
            date: today,
            completed: 0,
            total: appData.habits.length
        };
        weekData.push(todayData);
        
        // Оставляем только последние 7 дней
        if (weekData.length > 7) {
            weekData.shift();
        }
    }
    
    if (completed === true) {
        todayData.completed = Math.min(todayData.completed + 1, todayData.total);
        appData.stats.totalCompleted++;
        appData.stats.totalSessions++;
    } else if (completed === false) {
        if (todayData.completed > 0) {
            todayData.completed = Math.max(todayData.completed - 1, 0);
            appData.stats.totalCompleted = Math.max((appData.stats.totalCompleted || 1) - 1, 0);
        }
    }
    
    todayData.total = appData.habits.length;
}

function updateAllStats() {
    if (isUpdatingStats) return;
    isUpdatingStats = true;
    const historyChanged = captureDailySnapshot();
    updateDailyHeader();
    updateAnalytics();
    updateAchievementsLevelCard();
    updateProfile();
    checkAchievements();
    if (historyChanged) {
        saveData();
    }
    isUpdatingStats = false;
}

// ═══════════════════════════════════════════════════════════════
// NOTIFICATION
// ═══════════════════════════════════════════════════════════════

function showNotification(message) {
    const notification = document.getElementById('notification');
    const text = document.getElementById('notificationText');
    
    if (!notification || !text) return;
    
    text.textContent = message;
    notification.classList.remove('hidden');
    
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// ═══════════════════════════════════════════════════════════════
// DATA PERSISTENCE
// ═══════════════════════════════════════════════════════════════

function saveData() {
    try {
        localStorage.setItem('lifetrack_data', JSON.stringify(appData));
    } catch (e) {
        console.error('Failed to save data:', e);
        showNotification('Ошибка сохранения данных');
    }
}

function handleWidgetStateChange(options = {}) {
    const { rerender = false } = options;
    if (rerender) {
        renderWidgets();
    }
    saveData();
    updateAllStats();
}

function loadData() {
    const saved = localStorage.getItem('lifetrack_data');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            Object.assign(appData, parsed);
            
            // Миграция данных для совместимости
            if (!appData.dailyPlan) {
                appData.dailyPlan = {
                    affirmation: false,
                    meditation: false,
                    mantras: false
                };
            }
            
            if (!appData.journal) {
                appData.journal = [];
            }
            
            if (!appData.achievements) {
                initializeAchievements();
            }
            
            if (!appData.stats) {
                appData.stats = {
                    weeklyData: [],
                    totalCompleted: 0,
                    totalSessions: 0,
                    perfectDays: 0,
                    habitsCreated: 0,
                    widgetsCreated: 0,
                    journalEntries: 0
                };
            }

            appData.user.totalXP = typeof appData.user.totalXP === 'number' ? appData.user.totalXP : appData.user.xp;
            appData.stats.perfectDays = typeof appData.stats.perfectDays === 'number' ? appData.stats.perfectDays : 0;
            appData.stats.habitsCreated = typeof appData.stats.habitsCreated === 'number' ? appData.stats.habitsCreated : appData.habits.length;
            appData.stats.widgetsCreated = typeof appData.stats.widgetsCreated === 'number' ? appData.stats.widgetsCreated : (appData.widgets?.length || 0);
            appData.stats.journalEntries = typeof appData.stats.journalEntries === 'number' ? appData.stats.journalEntries : (appData.journal?.length || 0);
            if (!appData.history || !Array.isArray(appData.history.days)) {
                appData.history = { days: [] };
            }

            ensureAchievements();
             
            ensureWidgets();
        } catch (e) {
            console.error('Failed to load data:', e);
            showNotification('Ошибка загрузки данных');
        }
    }
}

function exportData() {
    try {
        const dataStr = JSON.stringify(appData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `lifetrack_backup_${Date.now()}.json`;
        link.click();
        URL.revokeObjectURL(url);
        showNotification('✓ Данные экспортированы');
    } catch (e) {
        console.error('Failed to export data:', e);
        showNotification('Ошибка экспорта данных');
    }
}

// ═══════════════════════════════════════════════════════════════
// DAILY RESET
// ═══════════════════════════════════════════════════════════════

function checkDailyReset() {
    const lastReset = localStorage.getItem('lifetrack_last_reset');
    const today = new Date().toDateString();
    
    if (lastReset !== today) {
        appData.habits.forEach(habit => {
            if (habit.type === 'boolean') {
                habit.completed = false;
            }
            habit.current = 0;
        });
        
        appData.dailyPlan = {
            affirmation: false,
            meditation: false,
            mantras: false
        };
        
        localStorage.setItem('lifetrack_last_reset', today);
        saveData();
    }
}

// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(timestamp) {
    if (!timestamp) return 'недавно';
    
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'сегодня';
    if (days === 1) return 'вчера';
    if (days < 7) return `${days} дней назад`;
    
    return date.toLocaleDateString('ru-RU');
}

function formatDateTime(timestamp) {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
        return `Сегодня, ${date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`;
    } else if (date.toDateString() === yesterday.toDateString()) {
        return `Вчера, ${date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`;
    } else {
        return date.toLocaleString('ru-RU', { 
            day: 'numeric', 
            month: 'long', 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }
}

// ═══════════════════════════════════════════════════════════════
// WIDGETS BOARD
// ═══════════════════════════════════════════════════════════════

function renderWidgets() {
    const grid = document.getElementById('widgetGrid');
    const emptyState = document.getElementById('widgetEmptyState');
    if (!grid || !emptyState) {
        debugLog('renderWidgets: grid or empty state missing', { grid: Boolean(grid), emptyState: Boolean(emptyState) });
        return;
    }

    const widgets = [...(appData.widgets || [])].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    debugLog('renderWidgets: start', { count: widgets.length, editMode: widgetEditMode });

    grid.innerHTML = '';
    grid.classList.toggle('edit-mode', widgetEditMode);

    if (widgets.length === 0) {
        emptyState.classList.remove('hidden');
        debugLog('renderWidgets: empty state shown');
        return;
    }

    emptyState.classList.add('hidden');

    widgets.forEach((widget, index) => {
        const card = createWidgetCard(widget, index, widgets.length);
        grid.appendChild(card);
    });

    const addCard = document.createElement('button');
    addCard.type = 'button';
    addCard.className = 'widget-card widget-add-card span-2';
    addCard.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
        Добавить виджет
    `;
    addCard.addEventListener('click', () => openWidgetModal());
    grid.appendChild(addCard);

    refreshWidgetInteractions();
}

function createWidgetCard(widget, index, total) {
    const card = document.createElement('div');
    card.className = `widget-card widget-color-${widget.color} span-${widget.colSpan}`;
    card.dataset.widgetId = widget.id;
    card.dataset.widgetType = widget.type;

    const dragHandle = document.createElement('button');
    dragHandle.type = 'button';
    dragHandle.className = 'widget-drag-handle';
    dragHandle.setAttribute('aria-label', 'Переместить виджет');
    dragHandle.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 4h4v2h-4V4zm0 7h4v2h-4v-2zm0 7h4v2h-4v-2z"/></svg>';
    card.appendChild(dragHandle);

    const header = document.createElement('div');
    header.className = 'widget-header';

    const titleWrap = document.createElement('div');
    titleWrap.className = 'widget-title';

    const title = document.createElement('h3');
    title.textContent = widget.title;
    titleWrap.appendChild(title);

    const subtitle = document.createElement('span');
    subtitle.className = 'widget-subtitle';
    switch (widget.type) {
        case 'checklist':
            subtitle.textContent = 'План на день';
            break;
        case 'rating':
            subtitle.textContent = 'Оценка по шкале';
            break;
        case 'checkbox':
            subtitle.textContent = 'Чек-бокс привычки';
            break;
        case 'counter':
            subtitle.textContent = 'Подсчёт количества';
            break;
        case 'timer':
            subtitle.textContent = 'Учёт времени';
            break;
        case 'note':
        default:
            subtitle.textContent = 'Мысль или аффирмация';
            break;
    }
    titleWrap.appendChild(subtitle);

    header.appendChild(titleWrap);
    if (widgetEditMode) {
        const toolbar = document.createElement('div');
        toolbar.className = 'widget-toolbar';

        const editBtn = document.createElement('button');
        editBtn.className = 'widget-action widget-action-edit';
        editBtn.title = 'Редактировать';
        editBtn.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm17.71-9.04a1.003 1.003 0 0 0 0-1.42l-2.5-2.5a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.99-1.66z"/></svg>';
        editBtn.addEventListener('click', () => openWidgetModal(widget.id));

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'widget-action widget-action-delete';
        deleteBtn.title = 'Удалить';
        deleteBtn.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>';
        deleteBtn.addEventListener('click', () => removeWidget(widget.id));

        const spanBtn = document.createElement('button');
        spanBtn.className = 'widget-action widget-span';
        spanBtn.title = widget.colSpan === 2 ? 'Сделать компактным' : 'Растянуть на две колонки';
        spanBtn.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M10 7l-5 5 5 5M14 7l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
        spanBtn.addEventListener('click', () => toggleWidgetSpan(widget.id));

        toolbar.appendChild(editBtn);
        toolbar.appendChild(deleteBtn);
        toolbar.appendChild(spanBtn);
        header.appendChild(toolbar);
    }

    const body = document.createElement('div');
    body.className = 'widget-body';

    switch (widget.type) {
        case 'checklist':
            buildChecklistWidget(body, widget);
            break;
        case 'rating':
            buildRatingWidget(body, widget);
            break;
        case 'checkbox':
            buildCheckboxWidget(body, widget);
            break;
        case 'counter':
            buildCounterWidget(body, widget);
            break;
        case 'timer':
            buildTimerWidget(body, widget);
            break;
        case 'note':
        default:
            buildNoteWidget(body, widget);
            break;
    }

    card.appendChild(header);
    card.appendChild(body);
    return card;
}

function buildChecklistWidget(container, widget) {
    const list = document.createElement('div');
    list.className = 'widget-checklist';
    widget.config.items.forEach((item, index) => {
        const label = document.createElement('label');
        if (widget.state.completed[index]) label.classList.add('checked');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = widget.state.completed[index];
        checkbox.addEventListener('change', () => {
            widget.state.completed[index] = checkbox.checked;
            if (checkbox.checked) {
                label.classList.add('checked');
            } else {
                label.classList.remove('checked');
            }
            handleWidgetStateChange();
        });

        const span = document.createElement('span');
        span.textContent = item;

        label.appendChild(checkbox);
        label.appendChild(span);
        list.appendChild(label);
    });
    container.appendChild(list);
}

function buildRatingWidget(container, widget) {
    const value = document.createElement('div');
    value.className = 'widget-rating-value';
    value.textContent = widget.state.value;

    const rangeWrap = document.createElement('div');
    rangeWrap.className = 'widget-rating-range';

    const minLabel = document.createElement('span');
    minLabel.textContent = widget.config.min;
    const maxLabel = document.createElement('span');
    maxLabel.textContent = widget.config.max;

    const range = document.createElement('input');
    range.type = 'range';
    range.min = widget.config.min;
    range.max = widget.config.max;
    range.value = widget.state.value;
    range.addEventListener('input', () => {
        value.textContent = range.value;
    });
    range.addEventListener('change', () => {
        widget.state.value = Number(range.value);
        handleWidgetStateChange();
    });

    rangeWrap.appendChild(minLabel);
    rangeWrap.appendChild(range);
    rangeWrap.appendChild(maxLabel);

    container.appendChild(value);
    container.appendChild(rangeWrap);
}

function buildCheckboxWidget(container, widget) {
    const wrapper = document.createElement('label');
    wrapper.className = 'widget-checkbox';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = Boolean(widget.state.checked);

    const mark = document.createElement('span');
    mark.className = 'widget-checkbox-mark';

    const textBox = document.createElement('div');
    textBox.className = 'widget-checkbox-text';

    const status = document.createElement('span');
    status.className = 'widget-checkbox-status';
    status.textContent = checkbox.checked ? 'Выполнено' : 'Ещё не отмечено';

    const hint = document.createElement('span');
    hint.className = 'widget-checkbox-hint';
    hint.textContent = widget.config?.hint || ' ';

    textBox.appendChild(status);
    textBox.appendChild(hint);

    wrapper.appendChild(checkbox);
    wrapper.appendChild(mark);
    wrapper.appendChild(textBox);

    if (checkbox.checked) {
        wrapper.classList.add('checked');
    }

    checkbox.addEventListener('change', () => {
        widget.state.checked = checkbox.checked;
        status.textContent = checkbox.checked ? 'Выполнено' : 'Ещё не отмечено';
        wrapper.classList.toggle('checked', checkbox.checked);
        handleWidgetStateChange();
    });

    container.appendChild(wrapper);
}

function buildCounterWidget(container, widget) {
    const display = document.createElement('div');
    display.className = 'widget-counter-display';
    display.textContent = widget.state.value;

    const unit = document.createElement('div');
    unit.className = 'widget-context';
    if (widget.config.unit) {
        unit.textContent = widget.config.unit;
    }

    const controls = document.createElement('div');
    controls.className = 'widget-counter-controls';

    const minus = document.createElement('button');
    minus.type = 'button';
    minus.textContent = '−';
    minus.addEventListener('click', () => {
        widget.state.value = Math.max(0, widget.state.value - widget.config.step);
        display.textContent = widget.state.value;
        handleWidgetStateChange();
    });

    const plus = document.createElement('button');
    plus.type = 'button';
    plus.textContent = '+';
    plus.addEventListener('click', () => {
        widget.state.value = widget.state.value + widget.config.step;
        display.textContent = widget.state.value;
        handleWidgetStateChange();
    });

    controls.appendChild(minus);
    controls.appendChild(plus);

    container.appendChild(display);
    container.appendChild(controls);
    if (widget.config.unit) container.appendChild(unit);

    if (typeof widget.config.target === 'number' && widget.config.target > 0) {
        const goal = document.createElement('div');
        goal.className = 'widget-counter-goal';
        goal.textContent = `Цель: ${widget.config.target} ${widget.config.unit || ''}`.trim();
        container.appendChild(goal);
    }
}

function buildTimerWidget(container, widget) {
    const display = document.createElement('div');
    display.className = 'widget-timer-display';
    updateTimerDisplay(display, widget);

    const controls = document.createElement('div');
    controls.className = 'widget-timer-controls';

    const startBtn = document.createElement('button');
    startBtn.type = 'button';
    startBtn.className = 'primary';
    startBtn.textContent = widget.state.running ? 'Пауза' : 'Старт';

    const resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.className = 'secondary';
    resetBtn.textContent = 'Сброс';

    startBtn.addEventListener('click', () => {
        if (widget.state.running) {
            const elapsed = widget.state.elapsed || 0;
            const delta = widget.state.startedAt ? Date.now() - widget.state.startedAt : 0;
            widget.state.elapsed = elapsed + delta;
            widget.state.running = false;
            widget.state.startedAt = null;
            stopWidgetTicker(widget.id);
            startBtn.textContent = 'Старт';
            updateTimerDisplay(display, widget);
        } else {
            widget.state.running = true;
            widget.state.startedAt = Date.now();
            startBtn.textContent = 'Пауза';
            startWidgetTicker(widget, display);
        }
        handleWidgetStateChange();
    });

    resetBtn.addEventListener('click', () => {
        widget.state.elapsed = 0;
        widget.state.running = false;
        widget.state.startedAt = null;
        stopWidgetTicker(widget.id);
        updateTimerDisplay(display, widget);
        startBtn.textContent = 'Старт';
        handleWidgetStateChange();
    });

    controls.appendChild(startBtn);
    controls.appendChild(resetBtn);

    container.appendChild(display);
    container.appendChild(controls);

    if (typeof widget.config.target === 'number' && widget.config.target > 0) {
        const goal = document.createElement('div');
        goal.className = 'widget-context';
        goal.textContent = `Цель: ${widget.config.target} мин`;
        container.appendChild(goal);
    }

    if (widget.state.running) {
        if (!widget.state.startedAt) {
            widget.state.startedAt = Date.now();
        }
        startWidgetTicker(widget, display);
    }
}

function buildNoteWidget(container, widget) {
    const note = document.createElement('div');
    note.className = 'widget-note';
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Моя мысль на сегодня';
    textarea.value = widget.state.text || '';
    textarea.addEventListener('blur', () => {
        widget.state.text = textarea.value;
        handleWidgetStateChange();
    });
    note.appendChild(textarea);
    container.appendChild(note);
}

function handleWidgetDragStart() {
    // no-op: управление перетаскиванием выполняет SortableJS
}

function handleWidgetDragEnd() {
    // no-op: управление перетаскиванием выполняет SortableJS
}

function handleWidgetDragOver() {
    // no-op: управление перетаскиванием выполняет SortableJS
}

function handleWidgetDrop() {
    // no-op: управление перетаскиванием выполняет SortableJS
}

function moveWidget(widgetId, direction) {
    const sorted = [...appData.widgets].sort((a, b) => a.order - b.order);
    const index = sorted.findIndex(widget => widget.id === widgetId);
    if (index === -1) return;
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= sorted.length) return;
    const [current] = sorted.splice(index, 1);
    sorted.splice(newIndex, 0, current);
    sorted.forEach((widget, order) => {
        widget.order = order;
    });
    handleWidgetStateChange({ rerender: true });
}

function syncWidgetOrderFromDOM() {
    const grid = document.getElementById('widgetGrid');
    if (!grid) return;
    const ids = Array.from(grid.querySelectorAll('.widget-card'))
        .filter(card => !card.classList.contains('widget-add-card'))
        .map(card => card.dataset.widgetId);
    appData.widgets.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
    appData.widgets.forEach((widget, index) => {
        widget.order = index;
    });
    handleWidgetStateChange({ rerender: true });
}

function toggleWidgetEditMode() {
    widgetEditMode = !widgetEditMode;
    const btn = document.getElementById('toggleWidgetEdit');
    if (btn) {
        btn.setAttribute('aria-pressed', widgetEditMode ? 'true' : 'false');
        if (widgetEditMode) {
            btn.classList.add('primary');
            btn.classList.remove('ghost');
            btn.textContent = 'Готово';
            showNotification('Перетащите карточки за значок ⋮, чтобы переставить их.');
        } else {
            btn.classList.remove('primary');
            btn.classList.add('ghost');
            btn.innerHTML = `
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9h16M4 15h16M9 4v16M15 4v16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Изменить
            `;
            showNotification('Порядок виджетов сохранён.');
        }
    }
    renderWidgets();
}

function openWidgetModal(widgetId = null) {
    const modal = document.getElementById('widgetModal');
    const titleEl = document.getElementById('widgetModalTitle');
    const deleteBtn = document.getElementById('widgetDeleteBtn');
    const typeSelect = document.getElementById('widgetType');
    const spanSelect = document.getElementById('widgetSpan');
    const nameInput = document.getElementById('widgetTitle');
    const checklistField = document.getElementById('widgetChecklistItems');
    const ratingMin = document.getElementById('widgetRatingMin');
    const ratingMax = document.getElementById('widgetRatingMax');
    const counterUnit = document.getElementById('widgetCounterUnit');
    const counterTarget = document.getElementById('widgetCounterTarget');
    const counterStep = document.getElementById('widgetCounterStep');
    const counterStart = document.getElementById('widgetCounterStart');
    const timerTarget = document.getElementById('widgetTimerTarget');
    const timerStep = document.getElementById('widgetTimerStep');
    const noteText = document.getElementById('widgetNoteText');

    currentWidgetEditingId = widgetId;

    // defaults
    titleEl.textContent = widgetId ? 'Редактировать виджет' : 'Новый виджет';
    deleteBtn?.classList.toggle('hidden', !widgetId);
    currentWidgetColor = 'green';
    updateColorPickerSelection('green');
    nameInput.value = '';
    typeSelect.value = 'checklist';
    spanSelect.value = '6';
    checklistField.value = 'Главная цель\nВажная задача\nПоддержка';
    ratingMin.value = 1;
    ratingMax.value = 10;
    counterUnit.value = '';
    counterTarget.value = '';
    counterStep.value = 1;
    counterStart.value = 0;
    timerTarget.value = '';
    timerStep.value = 5;
    noteText.value = '';

    if (widgetId) {
        const widget = appData.widgets.find(w => w.id === widgetId);
        if (!widget) return;
        nameInput.value = widget.title;
        typeSelect.value = widget.type;
        spanSelect.value = widget.colSpan;
        currentWidgetColor = widget.color;
        updateColorPickerSelection(widget.color);
        switch (widget.type) {
            case 'checklist':
                checklistField.value = widget.config.items.join('\n');
                break;
            case 'rating':
                ratingMin.value = widget.config.min;
                ratingMax.value = widget.config.max;
                break;
            case 'counter':
                counterUnit.value = widget.config.unit || '';
                counterTarget.value = widget.config.target ?? '';
                counterStep.value = widget.config.step || 1;
                counterStart.value = widget.state.value || 0;
                break;
            case 'timer':
                timerTarget.value = widget.config.target ?? '';
                timerStep.value = widget.config.step || 5;
                break;
            case 'note':
                noteText.value = widget.state.text || '';
                break;
            case 'checkbox':
                break;
        }
    }

    updateWidgetModalOptions(typeSelect.value);
    modal?.classList.remove('hidden');
    nameInput.focus();
}

function closeWidgetModal() {
    const modal = document.getElementById('widgetModal');
    modal?.classList.add('hidden');
    currentWidgetEditingId = null;
}

function updateWidgetModalOptions(type) {
    document.querySelectorAll('.widget-options').forEach(section => {
        if (section.dataset.type === type) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

function updateColorPickerSelection(color) {
    const picker = document.getElementById('widgetColorPicker');
    if (!picker) return;
    picker.querySelectorAll('.color-chip').forEach(chip => {
        if (chip.dataset.color === color) {
            chip.classList.add('selected');
        } else {
            chip.classList.remove('selected');
        }
    });
}

function handleWidgetTypeChange(e) {
    updateWidgetModalOptions(e.target.value);
}

function handleWidgetColorPick(e) {
    const chip = e.target.closest('.color-chip');
    if (!chip) return;
    e.preventDefault();
    currentWidgetColor = chip.dataset.color;
    updateColorPickerSelection(currentWidgetColor);
}

function handleWidgetFormSubmit(e) {
    e.preventDefault();

    const typeSelect = document.getElementById('widgetType');
    const nameInput = document.getElementById('widgetTitle');
    const checklistField = document.getElementById('widgetChecklistItems');
    const ratingMin = document.getElementById('widgetRatingMin');
    const ratingMax = document.getElementById('widgetRatingMax');
    const counterUnit = document.getElementById('widgetCounterUnit');
    const counterTarget = document.getElementById('widgetCounterTarget');
    const counterStep = document.getElementById('widgetCounterStep');
    const counterStart = document.getElementById('widgetCounterStart');
    const timerTarget = document.getElementById('widgetTimerTarget');
    const timerStep = document.getElementById('widgetTimerStep');
    const noteText = document.getElementById('widgetNoteText');

    const type = typeSelect.value;
    const title = nameInput.value.trim() || 'Виджет';
    const existingWidget = currentWidgetEditingId ? appData.widgets.find(w => w.id === currentWidgetEditingId) : null;
    const colSpan = existingWidget ? existingWidget.colSpan : 2;

    const config = {};
    const state = {};

    switch (type) {
        case 'checklist':
            const items = checklistField.value
                .split('\n')
                .map(item => item.trim())
                .filter(Boolean);
            config.items = items.length ? items : ['Новая задача'];
            const existingCompleted = existingWidget && existingWidget.type === 'checklist' ? existingWidget.state.completed || [] : [];
            state.completed = config.items.map((_, idx) => Boolean(existingCompleted[idx]));
            break;
        case 'rating':
            config.min = Number(ratingMin.value) || 1;
            config.max = Number(ratingMax.value) || config.min + 1;
            if (config.max <= config.min) config.max = config.min + 1;
            const existingRating = existingWidget && existingWidget.type === 'rating' ? existingWidget.state.value : config.min;
            state.value = Math.min(Math.max(existingRating, config.min), config.max);
            break;
        case 'checkbox':
            state.checked = existingWidget && existingWidget.type === 'checkbox' ? Boolean(existingWidget.state.checked) : false;
            break;
        case 'counter':
            config.unit = counterUnit.value.trim();
            config.step = Math.max(1, Number(counterStep.value) || 1);
            config.target = counterTarget.value ? Math.max(0, Number(counterTarget.value)) : null;
            let counterStartValue = Number(counterStart.value);
            if (isNaN(counterStartValue)) {
                counterStartValue = existingWidget && existingWidget.type === 'counter' ? Number(existingWidget.state.value) || 0 : 0;
            }
            state.value = Math.max(0, counterStartValue);
            break;
        case 'timer':
            config.target = timerTarget.value ? Math.max(0, Number(timerTarget.value)) : null;
            config.step = Math.max(1, Number(timerStep.value) || 5);
            const existingElapsed = existingWidget && existingWidget.type === 'timer'
                ? (existingWidget.state.elapsed || 0) + (existingWidget.state.running && existingWidget.state.startedAt ? (Date.now() - existingWidget.state.startedAt) : 0)
                : 0;
            state.elapsed = existingElapsed;
            state.running = false;
            state.startedAt = null;
            break;
        case 'note':
            state.text = noteText.value;
            break;
    }

    if (currentWidgetEditingId) {
        const widget = appData.widgets.find(w => w.id === currentWidgetEditingId);
        if (!widget) return;
        if (widget.type === 'timer') {
            stopWidgetTicker(widget.id);
        }
        widget.type = type;
        widget.title = title;
        widget.color = currentWidgetColor;
        widget.colSpan = colSpan;
        widget.config = config;
        widget.state = state;
        widget.order = typeof widget.order === 'number' ? widget.order : 0;
    } else {
        const id = `widget_${Date.now()}`;
        appData.widgets.push({
            id,
            type,
            title,
            color: currentWidgetColor,
            colSpan,
            order: appData.widgets.length,
            config,
            state
        });
        appData.stats.widgetsCreated = (appData.stats.widgetsCreated || 0) + 1;
    }

    saveData();
    closeWidgetModal();
    currentWidgetEditingId = null;
    handleWidgetStateChange({ rerender: true });
}

function removeWidget(widgetId) {
    const widget = appData.widgets.find(w => w.id === widgetId);
    if (!widget) return;
    if (!confirm(`Удалить виджет "${widget.title}"?`)) return;
    if (widget.type === 'timer') {
        stopWidgetTicker(widget.id);
    }
    appData.widgets = appData.widgets.filter(w => w.id !== widgetId);
    appData.widgets.forEach((w, index) => {
        w.order = index;
    });
    saveData();
    currentWidgetEditingId = null;
    handleWidgetStateChange({ rerender: true });
}

function startWidgetTicker(widget, displayNode) {
    stopWidgetTicker(widget.id);
    const update = () => {
        const base = widget.state.elapsed || 0;
        const delta = widget.state.startedAt ? Date.now() - widget.state.startedAt : 0;
        displayNode.textContent = formatDuration(base + delta);
    };
    update();
    widgetTimerIntervals[widget.id] = setInterval(update, 1000);
}

function stopWidgetTicker(widgetId) {
    if (widgetTimerIntervals[widgetId]) {
        clearInterval(widgetTimerIntervals[widgetId]);
        delete widgetTimerIntervals[widgetId];
    }
}

function updateTimerDisplay(displayNode, widget) {
    const elapsed = widget.state.elapsed || 0;
    const delta = widget.state.running && widget.state.startedAt ? Date.now() - widget.state.startedAt : 0;
    displayNode.textContent = formatDuration(elapsed + delta);
}

function formatDuration(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (hours > 0) {
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function toggleWidgetSpan(widgetId) {
    if (!widgetEditMode) return;
    const widget = appData.widgets.find(w => w.id === widgetId);
    if (!widget) return;
    widget.colSpan = widget.colSpan === 2 ? 1 : 2;
    handleWidgetStateChange({ rerender: true });
}

function refreshWidgetInteractions() {
    const grid = document.getElementById('widgetGrid');
    if (!grid) return;

    if (widgetSortable) {
        widgetSortable.destroy();
        widgetSortable = null;
    }

    if (typeof Sortable === 'undefined') {
        console.warn('[LifeTrack] SortableJS не найден — перестановка недоступна');
        return;
    }

    widgetSortable = Sortable.create(grid, {
        animation: 240,
        draggable: '.widget-card:not(.widget-add-card)',
        handle: '.widget-drag-handle',
        filter: '.widget-add-card, .widget-action, input, textarea, select',
        preventOnFilter: false,
        forceFallback: true,
        fallbackOnBody: true,
        dragoverBubble: true,
        touchStartThreshold: 4,
        onEnd: () => {
            syncWidgetOrderFromDOM();
        }
    });

    widgetSortable.option('disabled', !widgetEditMode);
    grid.classList.toggle('edit-mode', widgetEditMode);
}

function moveWidget() {
    // no-op: управление порядком выполняет SortableJS
}

// ═══════════════════════════════════════════════════════════════
// DAILY HEADER & HISTORY
// ═══════════════════════════════════════════════════════════════

function getTodayKey() {
    return new Date().toISOString().split('T')[0];
}

function formatDateLong(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatShortDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}.${month}`;
}

function updateDailyHeader() {
    const dayNode = document.getElementById('dailyDay');
    const dateNode = document.getElementById('dailyDate');
    const quoteNode = document.getElementById('dailyQuote');

    if (!dayNode || !dateNode || !quoteNode) return;

    const now = new Date();
    const dayName = now.toLocaleDateString('ru-RU', { weekday: 'long' });
    const dateText = now.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
    const quoteIndex = (now.getDate() - 1) % DAILY_QUOTES.length;

    dayNode.textContent = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    dateNode.textContent = dateText;
    quoteNode.textContent = `«${DAILY_QUOTES[quoteIndex]}»`;
}

function captureDailySnapshot() {
    if (!appData.history || !Array.isArray(appData.history.days)) {
        appData.history = { days: [] };
    }

    const todayKey = getTodayKey();
    analyticsView.selectedDate = analyticsView.selectedDate || todayKey;

    let entry = appData.history.days.find(day => day.date === todayKey);
    const completedHabits = appData.habits.filter(habit => {
        if (habit.type === 'boolean') return habit.completed;
        return habit.current >= habit.target;
    }).length;
    const totalHabits = appData.habits.length;
    const completionRate = totalHabits ? Math.round((completedHabits / totalHabits) * 100) : 0;

    const widgetSnapshots = {};
    appData.widgets.forEach(widget => {
        const detail = {
            id: widget.id,
            title: widget.title,
            type: widget.type,
            chartable: false,
            value: null,
            display: ''
        };

        switch (widget.type) {
            case 'rating': {
                const value = Number(widget.state.value ?? widget.config.min ?? 0);
                detail.value = value;
                detail.display = `${value}/${widget.config.max ?? 10}`;
                detail.chartable = true;
                break;
            }
            case 'counter': {
                const value = Number(widget.state.value ?? 0);
                detail.value = value;
                detail.display = detail.value + (widget.config.unit ? ` ${widget.config.unit}` : '');
                detail.chartable = true;
                break;
            }
            case 'timer': {
                const elapsedMs = widget.state.running && widget.state.startedAt
                    ? (widget.state.elapsed || 0) + (Date.now() - widget.state.startedAt)
                    : widget.state.elapsed || 0;
                const minutes = Math.round(elapsedMs / 60000);
                detail.value = minutes;
                detail.display = `${minutes} мин`;
                detail.chartable = true;
                break;
            }
            case 'checkbox': {
                detail.value = widget.state.checked ? 1 : 0;
                detail.display = widget.state.checked ? 'Отмечено' : 'Не отмечено';
                break;
            }
            case 'checklist': {
                const total = widget.config.items.length;
                const completed = widget.state.completed.filter(Boolean).length;
                detail.value = total ? Math.round((completed / total) * 100) : 0;
                detail.display = `${completed} / ${total}`;
                detail.chartable = total > 0;
                break;
            }
            case 'note': {
                const text = widget.state.text || '';
                detail.value = text.length;
                detail.display = text ? `«${text.slice(0, 60)}${text.length > 60 ? '…' : ''}»` : 'Пока пусто';
                break;
            }
        }

        widgetSnapshots[widget.id] = detail;
    });

    const snapshot = {
        date: todayKey,
        completedHabits,
        totalHabits,
        completionRate,
        widgets: widgetSnapshots,
        updatedAt: Date.now(),
        createdAt: entry?.createdAt || Date.now(),
        perfectAchieved: entry?.perfectAchieved || false,
        perfectRewarded: entry?.perfectRewarded || false
    };

    let changed = false;
    if (!entry) {
        entry = snapshot;
        appData.history.days.push(entry);
        changed = true;
    } else {
        const prev = JSON.stringify({
            completedHabits: entry.completedHabits,
            totalHabits: entry.totalHabits,
            completionRate: entry.completionRate,
            widgets: entry.widgets,
            perfectAchieved: entry.perfectAchieved,
            perfectRewarded: entry.perfectRewarded
        });
        Object.assign(entry, snapshot);
        const current = JSON.stringify({
            completedHabits: entry.completedHabits,
            totalHabits: entry.totalHabits,
            completionRate: entry.completionRate,
            widgets: entry.widgets,
            perfectAchieved: entry.perfectAchieved,
            perfectRewarded: entry.perfectRewarded
        });
        if (prev !== current) {
            changed = true;
        }
    }

    const isPerfectDay = totalHabits > 0 && completedHabits >= totalHabits;
    if (isPerfectDay) {
        entry.perfectAchieved = true;
        if (!entry.perfectRewarded) {
            entry.perfectRewarded = true;
            appData.stats.perfectDays = (appData.stats.perfectDays || 0) + 1;
            addXP(XP_RULES.dayPerfect, 'day_perfect', { skipUI: true, skipAchievements: false, skipSave: true });
            showNotification('🌈 Все цели дня выполнены! +25 XP');
            changed = true;
        }
    } else {
        entry.perfectAchieved = false;
    }

    appData.history.days.sort((a, b) => a.date.localeCompare(b.date));
    const maxDays = 365;
    if (appData.history.days.length > maxDays) {
        appData.history.days = appData.history.days.slice(-maxDays);
        changed = true;
    }

    return changed;
}

function getMetricOptions() {
    const options = [{ id: 'completion_rate', label: 'Выполнение привычек' }];
    appData.widgets.filter(widget => ['rating', 'counter', 'timer', 'checklist'].includes(widget.type))
        .forEach(widget => {
            options.push({ id: `widget:${widget.id}`, label: widget.title });
        });
    return options;
}

function getMetricSeries(metricId) {
    const history = (appData.history?.days || []).slice(-30);
    const series = [];

    history.forEach(entry => {
        if (metricId === 'completion_rate') {
            series.push({
                date: entry.date,
                value: entry.completionRate || 0,
                displayValue: `${entry.completionRate || 0}%`
            });
        } else if (metricId.startsWith('widget:')) {
            const widgetId = metricId.replace('widget:', '');
            const widgetSnapshot = entry.widgets ? entry.widgets[widgetId] : null;
            if (widgetSnapshot && widgetSnapshot.chartable && typeof widgetSnapshot.value === 'number') {
                series.push({
                    date: entry.date,
                    value: widgetSnapshot.value,
                    displayValue: widgetSnapshot.display || widgetSnapshot.value
                });
            }
        }
    });

    return series;
}

function renderProgressChart() {
    const chart = document.getElementById('progressChart');
    const select = document.getElementById('progressMetricSelect');
    if (!chart || !select) return;

    const options = getMetricOptions();
    if (options.length === 0) {
        chart.innerHTML = '<div class="chart-empty">Добавьте хотя бы один числовой виджет, чтобы отслеживать динамику.</div>';
        select.innerHTML = '';
        return;
    }

    select.innerHTML = options.map(option => `<option value="${option.id}">${option.label}</option>`).join('');

    if (!analyticsView.selectedMetric || !options.some(opt => opt.id === analyticsView.selectedMetric)) {
        analyticsView.selectedMetric = options[0].id;
    }

    select.value = analyticsView.selectedMetric;

    if (!select.dataset.listenerAttached) {
        select.addEventListener('change', (event) => {
            analyticsView.selectedMetric = event.target.value;
            renderProgressChart();
        });
        select.dataset.listenerAttached = 'true';
    }

    const series = getMetricSeries(analyticsView.selectedMetric);
    chart.innerHTML = '';

    if (series.length === 0) {
        chart.innerHTML = '<div class="chart-empty">Пока нет данных для выбранного показателя.</div>';
        return;
    }

    const maxValue = Math.max(...series.map(point => point.value), 1);

    series.forEach(point => {
        const wrapper = document.createElement('div');
        wrapper.className = 'chart-point';

        const bar = document.createElement('div');
        bar.className = 'chart-point-bar';
        bar.style.height = `${Math.max((point.value / maxValue) * 100, 6)}%`;

        const valueLabel = document.createElement('div');
        valueLabel.className = 'chart-point-value';
        valueLabel.textContent = point.displayValue || point.value;

        const label = document.createElement('div');
        label.className = 'chart-point-label';
        label.textContent = formatShortDate(point.date);

        wrapper.appendChild(bar);
        wrapper.appendChild(valueLabel);
        wrapper.appendChild(label);
        chart.appendChild(wrapper);
    });
}

function getCalendarLevel(rate) {
    if (rate >= 90) return 4;
    if (rate >= 75) return 3;
    if (rate >= 50) return 2;
    if (rate >= 25) return 1;
    return 0;
}

function renderAnalyticsCalendar() {
    const grid = document.getElementById('analyticsCalendar');
    const monthLabel = document.getElementById('calendarMonthLabel');
    if (!grid || !monthLabel) return;

    const todayKey = getTodayKey();
    const viewDate = new Date(analyticsView.year, analyticsView.month, 1);
    monthLabel.textContent = viewDate.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });

    const firstWeekday = (viewDate.getDay() + 6) % 7; // Monday-first
    const daysInMonth = new Date(analyticsView.year, analyticsView.month + 1, 0).getDate();
    const historyMap = {};
    (appData.history?.days || []).forEach(entry => {
        historyMap[entry.date] = entry;
    });

    grid.innerHTML = '';

    for (let i = 0; i < firstWeekday; i++) {
        const filler = document.createElement('div');
        filler.className = 'calendar-day inactive';
        grid.appendChild(filler);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(analyticsView.year, analyticsView.month, day);
        const dateKey = date.toISOString().split('T')[0];
        const entry = historyMap[dateKey];
        const rate = entry ? entry.completionRate : 0;
        const level = getCalendarLevel(rate);

        const cell = document.createElement('div');
        cell.className = `calendar-day level-${level}`;
        if (analyticsView.selectedDate === dateKey) {
            cell.classList.add('selected');
        }
        cell.dataset.date = dateKey;

        const numberSpan = document.createElement('span');
        numberSpan.className = 'day-number';
        numberSpan.textContent = day;
        cell.appendChild(numberSpan);

        if (entry) {
            const rateSpan = document.createElement('span');
            rateSpan.className = 'day-rate';
            rateSpan.textContent = `${rate}%`;
            cell.appendChild(rateSpan);
        }

        if (dateKey === todayKey) {
            cell.title = 'Сегодня';
        }

        grid.appendChild(cell);
    }

    showAnalyticsDayDetails(analyticsView.selectedDate || todayKey);
}

function changeAnalyticsMonth(delta) {
    analyticsView.month += delta;
    if (analyticsView.month < 0) {
        analyticsView.month = 11;
        analyticsView.year -= 1;
    } else if (analyticsView.month > 11) {
        analyticsView.month = 0;
        analyticsView.year += 1;
    }
    renderAnalyticsCalendar();
}

function showAnalyticsDayDetails(dateKey) {
    const detailsNode = document.getElementById('calendarDayDetails');
    if (!detailsNode) return;

    analyticsView.selectedDate = dateKey;
    const entry = (appData.history?.days || []).find(day => day.date === dateKey);

    if (!entry) {
        detailsNode.innerHTML = '<p>В этот день пока нет записей. Выбирай привычки и фиксируй свой прогресс!</p>';
        return;
    }

    const readableDate = formatDateLong(dateKey);
    const widgets = entry.widgets ? Object.values(entry.widgets) : [];

    const widgetList = widgets.length ? `<ul>${widgets.map(widget => `<li><strong>${widget.title}:</strong> ${widget.display}</li>`).join('')}</ul>` : '<p>Деталей по виджетам пока нет.</p>';

    detailsNode.innerHTML = `
        <h4>${readableDate}</h4>
        <p>Выполнено привычек: <strong>${entry.completedHabits}</strong> из <strong>${entry.totalHabits}</strong> (${entry.completionRate}%).</p>
        ${widgetList}
    `;

    const allCells = document.querySelectorAll('.calendar-day');
    allCells.forEach(cell => {
        if (cell.dataset.date === dateKey) {
            cell.classList.add('selected');
        } else {
            cell.classList.remove('selected');
        }
    });
}

function hexToRgba(hex, alpha) {
     const { r, g, b } = hexToRgb(hex);
     return `rgba(${r}, ${g}, ${b}, ${alpha})`;
 }

function getParticleAccent(alpha = 0.28) {
    const color = appData.settings?.themeColor || DEFAULT_THEME_COLOR;
    return hexToRgba(color, alpha);
}

function updateParticleThemeColor() {
    particleSystem.color = getParticleAccent(0.3);
}

function resizeParticleCanvas({ rebuild = true } = {}) {
    if (!particleSystem.canvas || !particleSystem.ctx) return;
    const rect = particleSystem.canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const dpr = window.devicePixelRatio || 1;
    particleSystem.canvas.width = rect.width * dpr;
    particleSystem.canvas.height = rect.height * dpr;
    particleSystem.displayWidth = rect.width;
    particleSystem.displayHeight = rect.height;

    if (typeof particleSystem.ctx.resetTransform === 'function') {
        particleSystem.ctx.resetTransform();
    } else {
        particleSystem.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    particleSystem.ctx.scale(dpr, dpr);

    if (rebuild) {
        rebuildParticles();
    } else if (particleSystem.particles.length) {
        const baseSpeed = calculateParticleBaseSpeed();
        particleSystem.baseSpeed = baseSpeed;
        particleSystem.particles.forEach(particle => {
            particle.x = Math.random() * rect.width;
            particle.y = Math.random() * rect.height;
            updateParticleVelocity(particle, baseSpeed);
        });
    }
}

function rebuildParticles() {
    const width = particleSystem.displayWidth;
    const height = particleSystem.displayHeight;
    if (!width || !height) return;

    const area = width * height;
    const density = Math.max(0.35, Math.min(1.2, area / (420 * 780)));
    const targetCount = Math.max(PARTICLE_MIN_COUNT, Math.round(PARTICLE_BASE_COUNT * density));
    const baseSpeed = calculateParticleBaseSpeed();
    particleSystem.baseSpeed = baseSpeed;

    particleSystem.particles = [];
    for (let i = 0; i < targetCount; i++) {
        particleSystem.particles.push(createParticle(baseSpeed, width, height));
    }
}

function drawParticleFrame() {
    if (!particleSystem.ctx || !particleSystem.displayWidth || !particleSystem.displayHeight) return;
    const ctx = particleSystem.ctx;
    const width = particleSystem.displayWidth;
    const height = particleSystem.displayHeight;

    ctx.clearRect(0, 0, width, height);
    const baseSpeed = particleSystem.baseSpeed || calculateParticleBaseSpeed();
    const time = performance.now();
    particleSystem.particles.forEach(particle => {
        particle.angle += particle.angleSpeed;
        particle.dirX = Math.cos(particle.angle);
        particle.dirY = Math.sin(particle.angle);
        updateParticleVelocity(particle, baseSpeed);
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -particle.radius) particle.x = width + particle.radius;
        if (particle.x > width + particle.radius) particle.x = -particle.radius;
        if (particle.y < -particle.radius) particle.y = height + particle.radius;
        if (particle.y > height + particle.radius) particle.y = -particle.radius;

        const wobbleX = Math.sin(time * particle.wobbleSpeed + particle.wobblePhase) * particle.wobbleAmplitude;
        const wobbleY = Math.cos(time * particle.wobbleSpeed * 0.85 + particle.wobblePhase) * (particle.wobbleAmplitude * 0.6);

        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particleSystem.color;
        ctx.beginPath();
        ctx.arc(particle.x + wobbleX, particle.y + wobbleY, particle.radius, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.globalAlpha = 1;
}

function startParticleAnimation() {
    if (!particleSystem.ctx) return;
    if (particleSystem.animationId) {
        cancelAnimationFrame(particleSystem.animationId);
    }

    const loop = () => {
        drawParticleFrame();
        particleSystem.animationId = requestAnimationFrame(loop);
    };

    loop();
}

function scheduleParticleResize() {
    if (particleResizeTimer) {
        clearTimeout(particleResizeTimer);
    }
    particleResizeTimer = setTimeout(() => {
        resizeParticleCanvas({ rebuild: true });
    }, 140);
}

function setupBackgroundParticles() {
    const canvas = document.getElementById('bgParticles');
    if (!canvas) return;

    particleSystem.canvas = canvas;
    particleSystem.ctx = canvas.getContext('2d', { alpha: true });
    updateParticleThemeColor();
    resizeParticleCanvas({ rebuild: true });
    startParticleAnimation();

    if (!particleSystem.resizeHandler) {
        particleSystem.resizeHandler = () => scheduleParticleResize();
        window.addEventListener('resize', particleSystem.resizeHandler);
    }
}

function setupGlassTransparencyDebug() {}
function scheduleGlassDebugScan() {}
