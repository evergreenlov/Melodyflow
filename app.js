/* ══════════════════════════════════════════════════════════
   MELODYFLOW — app.js
   ══════════════════════════════════════════════════════════ */

'use strict';

/* ── Datos de prueba ── */
const SONGS_DATA = [
  {
    id: 1, title: "Ode to Joy", artist: "L. van Beethoven",
    bpm: 104, key: "Re Mayor", difficulty: "beginner",
    sections: [
      {
        label: "Verso 1",
        lines: [
          [
            { note: "Mi", text: "A" }, { note: "Mi", text: "le" }, { note: "—", text: " " },
            { note: "Fa", text: "gría" }, { note: "—", text: "," }, { note: "—", text: " " },
            { note: "Sol", text: "her" }, { note: "Sol", text: "mo" }, { note: "—", text: "sa" },
          ],
          [
            { note: "Fa", text: "chis" }, { note: "Mi", text: "pa" }, { note: "—", text: " " },
            { note: "Re", text: "di" }, { note: "—", text: "vi" }, { note: "—", text: "nal" },
          ]
        ]
      },
      {
        label: "Coro",
        lines: [
          [
            { note: "Do", text: "To" }, { note: "Do", text: "dos" }, { note: "—", text: " " },
            { note: "Re", text: "ju" }, { note: "—", text: "ntos" }, { note: "—", text: "," },
            { note: "Mi", text: "to" }, { note: "Re", text: "dos" }, { note: "—", text: " " },
            { note: "Do", text: "her" }, { note: "—", text: "ma" }, { note: "—", text: "nos" },
          ]
        ]
      }
    ]
  },
  {
    id: 2, title: "Cielito Lindo", artist: "Quirino Mendoza",
    bpm: 120, key: "Sol Mayor", difficulty: "beginner",
    sections: [
      {
        label: "Verso",
        lines: [
          [
            { note: "Sol", text: "De" }, { note: "—", text: " " },
            { note: "La", text: "la" }, { note: "—", text: " " },
            { note: "Si", text: "sie" }, { note: "La", text: "rra" }, { note: "—", text: " " },
            { note: "Sol", text: "mo" }, { note: "—", text: "re" }, { note: "—", text: "na" },
          ]
        ]
      },
      {
        label: "Coro",
        lines: [
          [
            { note: "Do", text: "¡Ay" }, { note: "—", text: "," }, { note: "—", text: " " },
            { note: "Mi", text: "ay" }, { note: "—", text: "," }, { note: "—", text: " " },
            { note: "Sol", text: "ay" }, { note: "—", text: "," }, { note: "—", text: " " },
            { note: "Do", text: "ay!" },
          ]
        ]
      }
    ]
  },
  {
    id: 3, title: "Minuet en Sol", artist: "J.S. Bach",
    bpm: 132, key: "Sol Mayor", difficulty: "intermediate",
    sections: [
      {
        label: "Parte A",
        lines: [
          [
            { note: "Re", text: "Mi" }, { note: "—", text: "-" }, { note: "—", text: "nu" },
            { note: "Sol", text: "et" }, { note: "—", text: " " },
            { note: "La", text: "ba" }, { note: "Si", text: "rro" }, { note: "—", text: "co" },
          ]
        ]
      }
    ]
  },
  {
    id: 4, title: "Sonata Claro de Luna", artist: "L. van Beethoven",
    bpm: 54, key: "Do# menor", difficulty: "advanced",
    sections: [
      {
        label: "Movimiento I",
        lines: [
          [
            { note: "Do#", text: "Cla" }, { note: "—", text: "-" }, { note: "—", text: "ro" },
            { note: "Mi", text: " " },
            { note: "Sol#", text: "de" }, { note: "—", text: " " },
            { note: "Do#", text: "lu" }, { note: "—", text: "na" },
          ]
        ]
      }
    ]
  },
  {
    id: 5, title: "La Paloma", artist: "Sebastián Yradier",
    bpm: 96, key: "Fa Mayor", difficulty: "intermediate",
    sections: [
      {
        label: "Verso",
        lines: [
          [
            { note: "Fa", text: "Cuan" }, { note: "—", text: "do" },
            { note: "La", text: " sa" }, { note: "—", text: "lí" },
            { note: "Do", text: " de" }, { note: "—", text: " La" },
            { note: "Fa", text: "Ha" }, { note: "—", text: "ba" }, { note: "—", text: "na" },
          ]
        ]
      }
    ]
  },
  {
    id: 6, title: "Für Elise", artist: "L. van Beethoven",
    bpm: 138, key: "La menor", difficulty: "intermediate",
    sections: [
      {
        label: "Tema Principal",
        lines: [
          [
            { note: "Mi", text: "Für" }, { note: "—", text: " " },
            { note: "Re#", text: "E" }, { note: "—", text: "-" }, { note: "—", text: "li" },
            { note: "Mi", text: "se" }, { note: "—", text: "," }, { note: "—", text: " " },
            { note: "Re#", text: "Für" }, { note: "—", text: " " },
            { note: "Mi", text: "E" }, { note: "—", text: "-" }, { note: "—", text: "li" },
            { note: "Si", text: "se" },
          ]
        ]
      }
    ]
  },
  {
    id: 7, title: "Canon en Re", artist: "Johann Pachelbel",
    bpm: 100, key: "Re Mayor", difficulty: "advanced",
    sections: [
      {
        label: "Ostinato",
        lines: [
          [
            { note: "Re", text: "Ca" }, { note: "La", text: "non" }, { note: "—", text: " " },
            { note: "Si", text: "e" }, { note: "—", text: "ter" }, { note: "—", text: "no" },
            { note: "Fa#", text: "en" }, { note: "—", text: " " },
            { note: "Sol", text: "re" }, { note: "—", text: " ma" }, { note: "—", text: "yor" },
          ]
        ]
      }
    ]
  },
  {
    id: 8, title: "Las Mañanitas", artist: "Tradicional Mexicano",
    bpm: 88, key: "Sol Mayor", difficulty: "beginner",
    sections: [
      {
        label: "Verso",
        lines: [
          [
            { note: "Sol", text: "Es" }, { note: "—", text: "tas" }, { note: "—", text: " " },
            { note: "Sol", text: "son" }, { note: "—", text: " " },
            { note: "La", text: "las" }, { note: "—", text: " " },
            { note: "Si", text: "ma" }, { note: "—", text: "ña" }, { note: "—", text: "ni" },
            { note: "Do", text: "tas" },
          ]
        ]
      }
    ]
  }
];

/* ── Persistencia: localStorage ── */
const STORAGE_KEY = 'melodyflow_songs_v1';

function loadUserSongs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch { return []; }
}

function saveToStorage() {
  const userSongs = state.songs.filter(s => !SONGS_DATA.some(d => d.id === s.id));
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userSongs));
    updateStorageIndicator(userSongs.length);
  } catch (e) {
    updateStorageIndicator(0, true);
  }
}

function updateStorageIndicator(count, error = false) {
  const el = document.getElementById('storage-indicator');
  if (!el) return;
  el.className = 'storage-indicator ' + (error ? 'error' : count > 0 ? 'saved' : '');
  el.textContent = error
    ? '✗ Error al guardar'
    : count > 0
      ? `✓ ${count} canción${count !== 1 ? 'es' : ''} guardada${count !== 1 ? 's' : ''}`
      : '';
}

/* ── Estado global ── */
const state = {
  songs: [...SONGS_DATA, ...loadUserSongs()],
  filteredSongs: [...SONGS_DATA, ...loadUserSongs()],
  activeSongId: null,
  currentFilter: 'alpha',
  searchQuery: '',
  activeView: 'lyrics',
  fontSize: 20,
  scrollSpeed: 3,
  autoScrollActive: false,
  autoScrollTimer: null,
  instrument: 'flute',
  transpositionSemitones: 0,   // instrumento
  manualSemitones: 0,          // control manual de tonalidad
  metronome: {
    active: false,
    bpm: 120,
    timeSig: 4,
    beat: 0,
    interval: null
  },
  tuner: { active: false },
  backingTrack: {
    playing: false,
    looping: false,
    currentTrack: 0,
    progress: 0,
    progressTimer: null
  }
};

/* ══════════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initMobileTabs();
  initSearch();
  initFilters();
  initInstruments();
  renderSongList();
  initViewToggle();
  initDisplayControls();
  initAutoScroll();
  initMetronome();
  initTuner();
  initBackingTrack();
  generateWaveform();
  initSongEditor();
  initManualTranspose();
  initDataBar();
  // Mostrar indicador si ya hay canciones guardadas
  const saved = loadUserSongs();
  if (saved.length) updateStorageIndicator(saved.length);
  showToast('¡Bienvenido a MelodyFlow! 🎶', 'info');
});

/* ══════════════════════════════════════════════════════════
   NAVEGACIÓN POR PESTAÑAS (MÓVIL)
   ══════════════════════════════════════════════════════════ */
function initMobileTabs() {
  const tabs = document.querySelectorAll('#mobile-tab-nav .tab-btn');
  const panels = { library: '#panel-library', viewer: '#panel-viewer', practice: '#panel-practice' };

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      Object.values(panels).forEach(sel => {
        document.querySelector(sel).classList.remove('tab-active');
      });
      document.querySelector(panels[target]).classList.add('tab-active');
    });
  });

  // Activa panel izquierdo por defecto en móvil
  document.querySelector('#panel-library').classList.add('tab-active');
}

/* ══════════════════════════════════════════════════════════
   BUSCADOR
   ══════════════════════════════════════════════════════════ */
function initSearch() {
  const input = document.getElementById('song-search-input');
  const clearBtn = document.getElementById('btn-clear-search');

  input.addEventListener('input', () => {
    state.searchQuery = input.value.trim().toLowerCase();
    clearBtn.hidden = state.searchQuery === '';
    applyFiltersAndSort();
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    state.searchQuery = '';
    clearBtn.hidden = true;
    input.focus();
    applyFiltersAndSort();
  });
}

/* ══════════════════════════════════════════════════════════
   FILTROS
   ══════════════════════════════════════════════════════════ */
function initFilters() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');
      state.currentFilter = chip.dataset.filter;
      applyFiltersAndSort();
    });
  });
}

function applyFiltersAndSort() {
  let songs = [...state.songs];

  if (state.searchQuery) {
    songs = songs.filter(s =>
      s.title.toLowerCase().includes(state.searchQuery) ||
      s.artist.toLowerCase().includes(state.searchQuery)
    );
  }

  switch (state.currentFilter) {
    case 'alpha':
      songs.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'beginner':
      songs = songs.filter(s => s.difficulty === 'beginner');
      break;
    case 'intermediate':
      songs = songs.filter(s => s.difficulty === 'intermediate');
      break;
    case 'advanced':
      songs = songs.filter(s => s.difficulty === 'advanced');
      break;
  }

  state.filteredSongs = songs;
  renderSongList();
}

/* ══════════════════════════════════════════════════════════
   INSTRUMENTOS
   ══════════════════════════════════════════════════════════ */
function initInstruments() {
  document.querySelectorAll('.instrument-card input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.instrument-card').forEach(c => c.classList.remove('active'));
      radio.closest('.instrument-card').classList.add('active');

      state.instrument = radio.value;
      state.transpositionSemitones = Transposition.getSemitonesForInstrument(radio.value);

      const instrName = radio.closest('.instrument-card').querySelector('.instr-name').textContent;
      const semitones = state.transpositionSemitones;
      const transpLabel = semitones === 0
        ? 'Pitch de concierto'
        : `+${semitones} semitono${semitones !== 1 ? 's' : ''}`;

      showToast(`${instrName} — ${transpLabel}`, 'info');

      // Re-renderiza la canción activa con la nueva transposición
      if (state.activeSongId !== null) {
        const song = state.songs.find(s => s.id === state.activeSongId);
        if (song) refreshSongDisplay(song);
      }
    });
  });
}

/**
 * Actualiza el panel central (header + notas) aplicando la transposición
 * activa. Separa la lógica de "qué canción" de "cómo mostrarla".
 */
function getTotalSemitones() {
  return state.transpositionSemitones + state.manualSemitones;
}

function refreshSongDisplay(song) {
  const semitones = getTotalSemitones();

  // Badge de tonalidad: muestra la tonalidad transpuesta + la original entre paréntesis
  const transposedKey = Transposition.transposeKeyName(song.key, semitones);
  const keyDisplay = semitones === 0
    ? song.key
    : `${transposedKey} (orig. ${song.key})`;
  document.getElementById('display-key').textContent = keyDisplay;

  // Indicador visual de transposición en el badge de tonalidad
  const keyBadge = document.getElementById('badge-key');
  keyBadge.classList.toggle('transposed', semitones !== 0);
  keyBadge.title = semitones !== 0
    ? `Transpuesto ${semitones > 0 ? '+' : ''}${semitones} st`
    : 'Tonalidad original';

  // Sincroniza el select de transposición manual con el tono actual
  syncTransposeSelect(song);

  // Renderiza letra con notas transpuestas
  renderLyrics(song);
}

/* ══════════════════════════════════════════════════════════
   LISTA DE CANCIONES
   ══════════════════════════════════════════════════════════ */
function renderSongList() {
  const list = document.getElementById('song-list');
  const count = document.getElementById('song-count');
  const songs = state.filteredSongs;

  count.textContent = `${songs.length} canción${songs.length !== 1 ? 'es' : ''}`;

  if (songs.length === 0) {
    list.innerHTML = `<li class="empty-state" style="min-height:120px;font-size:13px;gap:8px;">
      <div class="empty-icon" style="font-size:32px;">♩</div>
      <p>No se encontraron canciones</p>
    </li>`;
    return;
  }

  list.innerHTML = songs.map((song, idx) => `
    <li class="song-item ${song.id === state.activeSongId ? 'active' : ''}"
        role="option"
        aria-selected="${song.id === state.activeSongId}"
        id="song-item-${song.id}"
        data-song-id="${song.id}"
        tabindex="0"
        aria-label="${song.title} — ${song.artist}, ${diffLabel(song.difficulty)}">
      <span class="song-item-index">${idx + 1}</span>
      <div class="song-item-info">
        <div class="song-item-title">${escapeHtml(song.title)}</div>
        <div class="song-item-artist">${escapeHtml(song.artist)}</div>
      </div>
      <span class="song-item-difficulty difficulty-${song.difficulty}"
            title="${diffLabel(song.difficulty)}" aria-hidden="true"></span>
    </li>
  `).join('');

  list.querySelectorAll('.song-item').forEach(item => {
    item.addEventListener('click', () => selectSong(parseInt(item.dataset.songId)));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectSong(parseInt(item.dataset.songId)); }
    });
  });
}

function selectSong(id) {
  const song = state.songs.find(s => s.id === id);
  if (!song) return;
  state.activeSongId = id;

  // Header estático (título, artista, BPM, dificultad)
  document.getElementById('song-title').textContent = song.title;
  document.getElementById('song-artist').textContent = `— ${song.artist}`;
  document.getElementById('display-bpm').textContent = song.bpm;

  const diffBadge = document.getElementById('badge-difficulty');
  diffBadge.querySelector('#display-difficulty').textContent = diffLabel(song.difficulty);
  diffBadge.setAttribute('data-level', song.difficulty);

  // Sincronizar BPM con metrónomo
  state.metronome.bpm = song.bpm;
  document.getElementById('metro-bpm-value').textContent = song.bpm;
  updateMetronomePendulumSpeed();

  // Render con transposición activa
  refreshSongDisplay(song);

  // Resaltar item activo
  renderSongList();

  showToast(`♪ ${song.title}`, 'success');

  // En móvil, cambiar al panel central
  if (window.innerWidth <= 768) {
    document.querySelector('[data-tab="viewer"]').click();
  }
}

/* ══════════════════════════════════════════════════════════
   RENDERIZADO DE LETRA CON NOTAS
   ══════════════════════════════════════════════════════════ */
function renderLyrics(song) {
  const container = document.getElementById('lyrics-container');
  container.style.fontSize = `${state.fontSize}px`;

  // Obtiene sections con notas transpuestas (copia, no muta el original)
  const sections = Transposition.transposeSongSections(
    song.sections,
    getTotalSemitones()
  );

  const isTransposed = getTotalSemitones() !== 0;

  const html = sections.map(section => `
    <div class="lyric-section">
      <div class="lyric-section-label">${escapeHtml(section.label)}</div>
      ${section.lines.map(line => `
        <div class="lyric-line">
          <div class="lyric-syllables">
            ${line.map(syl => `
              <div class="lyric-syllable">
                <span class="syllable-note${isTransposed && syl.note !== '—' ? ' transposed' : ''}">
                  ${escapeHtml(syl.note)}
                </span>
                <span class="syllable-text">${escapeHtml(syl.text)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

  container.innerHTML = html;
}

/* ══════════════════════════════════════════════════════════
   CAMBIO DE VISTA (Letra / Partitura)
   ══════════════════════════════════════════════════════════ */
function initViewToggle() {
  document.querySelectorAll('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      if (state.activeView === view) return;
      state.activeView = view;

      document.querySelectorAll('.view-toggle-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      document.getElementById('view-lyrics').classList.remove('active');
      document.getElementById('view-staff').classList.remove('active');
      document.getElementById('view-staff').hidden = true;
      document.getElementById('view-lyrics').hidden = true;

      if (view === 'lyrics') {
        document.getElementById('view-lyrics').hidden = false;
        requestAnimationFrame(() => document.getElementById('view-lyrics').classList.add('active'));
      } else {
        document.getElementById('view-staff').hidden = false;
        requestAnimationFrame(() => document.getElementById('view-staff').classList.add('active'));
      }
    });
  });

  document.getElementById('view-lyrics').hidden = false;
}

/* ══════════════════════════════════════════════════════════
   CONTROLES DE VISUALIZACIÓN
   ══════════════════════════════════════════════════════════ */
function initDisplayControls() {
  const fontRange = document.getElementById('font-size-range');
  const fontDisplay = document.getElementById('font-size-display');

  fontRange.addEventListener('input', () => {
    state.fontSize = parseInt(fontRange.value);
    fontDisplay.textContent = `${state.fontSize}px`;
    document.getElementById('lyrics-container').style.fontSize = `${state.fontSize}px`;
  });

  const scrollRange = document.getElementById('scroll-speed-range');
  const scrollDisplay = document.getElementById('scroll-speed-display');

  scrollRange.addEventListener('input', () => {
    state.scrollSpeed = parseInt(scrollRange.value);
    scrollDisplay.textContent = `×${state.scrollSpeed}`;
    if (state.autoScrollActive) {
      stopAutoScroll();
      startAutoScroll();
    }
  });
}

/* ══════════════════════════════════════════════════════════
   AUTO-SCROLL
   ══════════════════════════════════════════════════════════ */
function initAutoScroll() {
  const btn = document.getElementById('btn-autoscroll');
  btn.addEventListener('click', () => {
    state.autoScrollActive ? stopAutoScroll() : startAutoScroll();
  });
}

function startAutoScroll() {
  state.autoScrollActive = true;
  const btn = document.getElementById('btn-autoscroll');
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
  btn.querySelector('.btn-icon').textContent = '⏸';

  const area = document.getElementById('song-content-area');
  const pxPerTick = state.scrollSpeed * 0.5;
  state.autoScrollTimer = setInterval(() => {
    const view = area.querySelector('.content-view.active');
    if (view) {
      view.scrollTop += pxPerTick;
      if (view.scrollTop >= view.scrollHeight - view.clientHeight) stopAutoScroll();
    }
  }, 40);
}

function stopAutoScroll() {
  state.autoScrollActive = false;
  const btn = document.getElementById('btn-autoscroll');
  btn.classList.remove('active');
  btn.setAttribute('aria-pressed', 'false');
  btn.querySelector('.btn-icon').textContent = '▶';
  clearInterval(state.autoScrollTimer);
}

/* ══════════════════════════════════════════════════════════
   METRÓNOMO
   ══════════════════════════════════════════════════════════ */
function initMetronome() {
  const toggleBtn = document.getElementById('btn-metronome-toggle');
  const bpmUp    = document.getElementById('btn-bpm-up');
  const bpmDown  = document.getElementById('btn-bpm-down');
  const timeSig  = document.getElementById('select-time-sig');

  toggleBtn.addEventListener('click', () => {
    state.metronome.active ? stopMetronome() : startMetronome();
  });

  bpmUp.addEventListener('click', () => {
    state.metronome.bpm = Math.min(240, state.metronome.bpm + 2);
    document.getElementById('metro-bpm-value').textContent = state.metronome.bpm;
    updateMetronomePendulumSpeed();
    if (state.metronome.active) { stopMetronome(); startMetronome(); }
  });

  bpmDown.addEventListener('click', () => {
    state.metronome.bpm = Math.max(30, state.metronome.bpm - 2);
    document.getElementById('metro-bpm-value').textContent = state.metronome.bpm;
    updateMetronomePendulumSpeed();
    if (state.metronome.active) { stopMetronome(); startMetronome(); }
  });

  timeSig.addEventListener('change', () => {
    state.metronome.timeSig = parseInt(timeSig.value);
    state.metronome.beat = 0;
    resetBeatDots();
  });

  updateMetronomePendulumSpeed();
}

function startMetronome() {
  state.metronome.active = true;
  state.metronome.beat = 0;

  const btn = document.getElementById('btn-metronome-toggle');
  btn.setAttribute('aria-pressed', 'true');

  const pendulum = document.getElementById('metro-pendulum');
  const interval = (60 / state.metronome.bpm) * 1000;
  pendulum.style.setProperty('--metro-period', `${interval * 2}ms`);
  pendulum.classList.add('swinging');

  tickBeat();
  state.metronome.interval = setInterval(tickBeat, interval);
}

function stopMetronome() {
  state.metronome.active = false;
  clearInterval(state.metronome.interval);
  document.getElementById('metro-pendulum').classList.remove('swinging');
  document.getElementById('btn-metronome-toggle').setAttribute('aria-pressed', 'false');
  resetBeatDots();
}

function tickBeat() {
  const sig = state.metronome.timeSig;
  const beat = state.metronome.beat % sig;
  highlightBeat(beat, sig);
  state.metronome.beat++;
}

function highlightBeat(beat, sig) {
  resetBeatDots();
  for (let i = 1; i <= 4; i++) {
    const dot = document.getElementById(`beat-${i}`);
    if (!dot) continue;
    if (i > sig) { dot.style.opacity = '0.2'; continue; }
    dot.style.opacity = '1';
    if (i === beat + 1) {
      dot.classList.add(beat === 0 ? 'accent' : 'active');
    }
  }
}

function resetBeatDots() {
  for (let i = 1; i <= 4; i++) {
    const dot = document.getElementById(`beat-${i}`);
    if (dot) { dot.classList.remove('active', 'accent'); dot.style.opacity = '1'; }
  }
}

function updateMetronomePendulumSpeed() {
  const interval = (60 / state.metronome.bpm) * 1000;
  document.getElementById('metro-pendulum').style.setProperty('--metro-period', `${interval * 2}ms`);
}

/* ══════════════════════════════════════════════════════════
   AFINADOR
   ══════════════════════════════════════════════════════════ */
function initTuner() {
  const toggleBtn = document.getElementById('btn-tuner-toggle');
  toggleBtn.addEventListener('click', () => {
    state.tuner.active ? stopTuner() : startTuner();
  });
}

function startTuner() {
  state.tuner.active = true;
  document.getElementById('btn-tuner-toggle').setAttribute('aria-pressed', 'true');
  document.getElementById('tuner-status').textContent = 'Escuchando…';

  // Simulación visual del afinador
  simulateTuner();
}

function stopTuner() {
  state.tuner.active = false;
  clearInterval(state.tuner.simInterval);
  document.getElementById('btn-tuner-toggle').setAttribute('aria-pressed', 'false');
  document.getElementById('tuner-detected-note').textContent = '—';
  document.getElementById('tuner-detected-note').className = 'tuner-note';
  document.getElementById('tuner-octave').textContent = '—';
  document.getElementById('tuner-frequency').textContent = '— Hz';
  document.getElementById('tuner-status').textContent = 'Activa el afinador para detectar audio';
  document.getElementById('tuner-needle').style.left = '50%';
}

function simulateTuner() {
  const notes = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'];
  const octaves = ['3', '4', '5'];
  const freqs = { 'Do4': 261.6, 'Re4': 293.7, 'Mi4': 329.6, 'Fa4': 349.2, 'Sol4': 392, 'La4': 440, 'Si4': 493.9 };

  let step = 0;
  state.tuner.simInterval = setInterval(() => {
    if (!state.tuner.active) return;

    const note = notes[Math.floor(Math.random() * notes.length)];
    const octave = octaves[Math.floor(Math.random() * octaves.length)];
    const centOffset = (Math.random() - 0.5) * 60;
    const freq = (freqs[`${note}4`] || 440) * Math.pow(2, (centOffset / 100) / 12);

    const noteEl = document.getElementById('tuner-detected-note');
    noteEl.textContent = note;

    let statusClass = 'in-tune', statusText = '✓ Afinado';
    if (Math.abs(centOffset) > 15) {
      statusClass = centOffset > 0 ? 'sharp' : 'flat';
      statusText = centOffset > 0 ? '▲ Demasiado agudo' : '▼ Demasiado grave';
    }
    noteEl.className = `tuner-note ${statusClass}`;

    document.getElementById('tuner-octave').textContent = octave;
    document.getElementById('tuner-frequency').textContent = `${freq.toFixed(1)} Hz`;
    document.getElementById('tuner-status').textContent = statusText;

    const needlePos = 50 + (centOffset / 50) * 40;
    document.getElementById('tuner-needle').style.left = `${Math.max(5, Math.min(95, needlePos))}%`;
    document.getElementById('tuner-needle').style.background =
      statusClass === 'in-tune' ? 'var(--color-beginner)' :
      statusClass === 'sharp'   ? 'var(--color-advanced)'  : 'var(--color-intermediate)';

    step++;
  }, 1200);
}

/* ══════════════════════════════════════════════════════════
   BACKING TRACK
   ══════════════════════════════════════════════════════════ */
const TRACKS = [
  { name: 'Slow Ballad', key: 'Do Mayor', bpm: 70, duration: 240 },
  { name: 'Pop Groove',  key: 'Sol Mayor', bpm: 100, duration: 180 },
  { name: 'Jazz Waltz',  key: 'Fa Mayor', bpm: 85, duration: 200 }
];

function initBackingTrack() {
  document.getElementById('btn-track-play').addEventListener('click', toggleTrack);
  document.getElementById('btn-track-prev').addEventListener('click', () => changeTrack(-1));
  document.getElementById('btn-track-next').addEventListener('click', () => changeTrack(1));
  document.getElementById('btn-track-loop').addEventListener('click', toggleLoop);

  document.getElementById('track-volume').addEventListener('input', function() {
    document.getElementById('track-volume-display').textContent = `${this.value}%`;
  });

  document.querySelectorAll('.backing-track-item').forEach(item => {
    item.addEventListener('click', () => {
      const trackIdx = parseInt(item.dataset.track);
      selectTrack(trackIdx);
    });
  });

  selectTrack(0);
}

function toggleTrack() {
  state.backingTrack.playing ? pauseTrack() : playTrack();
}

function playTrack() {
  state.backingTrack.playing = true;
  const btn = document.getElementById('btn-track-play');
  btn.textContent = '⏸';
  btn.classList.add('playing');
  btn.setAttribute('aria-label', 'Pausar pista');

  const track = TRACKS[state.backingTrack.currentTrack];
  const duration = track.duration;

  state.backingTrack.progressTimer = setInterval(() => {
    state.backingTrack.progress = Math.min(100, state.backingTrack.progress + (100 / duration / 10));
    updateTrackProgress();

    if (state.backingTrack.progress >= 100) {
      if (state.backingTrack.looping) {
        state.backingTrack.progress = 0;
      } else {
        pauseTrack();
        state.backingTrack.progress = 0;
        updateTrackProgress();
      }
    }
  }, 100);
}

function pauseTrack() {
  state.backingTrack.playing = false;
  clearInterval(state.backingTrack.progressTimer);
  const btn = document.getElementById('btn-track-play');
  btn.textContent = '▶';
  btn.classList.remove('playing');
  btn.setAttribute('aria-label', 'Reproducir pista');
}

function changeTrack(dir) {
  const wasPlaying = state.backingTrack.playing;
  pauseTrack();
  state.backingTrack.progress = 0;
  const next = (state.backingTrack.currentTrack + dir + TRACKS.length) % TRACKS.length;
  selectTrack(next);
  if (wasPlaying) playTrack();
}

function selectTrack(idx) {
  state.backingTrack.currentTrack = idx;
  const track = TRACKS[idx];

  document.getElementById('backing-track-name').textContent = `${track.name} — ${track.key}`;
  document.getElementById('backing-genre').textContent = `♩ ${track.bpm} BPM`;
  document.getElementById('track-total-time').textContent = formatTime(track.duration);

  document.querySelectorAll('.backing-track-item').forEach((item, i) => {
    item.classList.toggle('active', i === idx);
    item.setAttribute('aria-selected', i === idx);
  });

  updateTrackProgress();
}

function toggleLoop() {
  state.backingTrack.looping = !state.backingTrack.looping;
  const btn = document.getElementById('btn-track-loop');
  btn.setAttribute('aria-pressed', state.backingTrack.looping);
  btn.style.color = state.backingTrack.looping ? 'var(--color-accent)' : '';
}

function updateTrackProgress() {
  const p = state.backingTrack.progress;
  document.getElementById('waveform-progress').style.width = `${p}%`;
  document.getElementById('track-seek').value = p;

  const track = TRACKS[state.backingTrack.currentTrack];
  const current = (p / 100) * track.duration;
  document.getElementById('track-current-time').textContent = formatTime(current);

  // Colorear barras de la forma de onda
  const bars = document.querySelectorAll('.waveform-bar');
  const activeCount = Math.floor((p / 100) * bars.length);
  bars.forEach((bar, i) => bar.classList.toggle('active', i < activeCount));
}

/* ══════════════════════════════════════════════════════════
   FORMA DE ONDA (Generación aleatoria)
   ══════════════════════════════════════════════════════════ */
function generateWaveform() {
  const container = document.getElementById('waveform-bars');
  const count = 48;
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const bar = document.createElement('div');
    bar.className = 'waveform-bar';
    const h = 20 + Math.random() * 60;
    bar.style.height = `${h}%`;
    container.appendChild(bar);
  }
}

/* ══════════════════════════════════════════════════════════
   TOAST NOTIFICATIONS
   ══════════════════════════════════════════════════════════ */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.25s ease forwards';
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

/* ══════════════════════════════════════════════════════════
   UTILIDADES
   ══════════════════════════════════════════════════════════ */
function diffLabel(d) {
  return { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado' }[d] || d;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ══════════════════════════════════════════════════════════
   MODAL — EDITOR DE CANCIONES
   ══════════════════════════════════════════════════════════ */

/* ── Estado interno del modal ── */
const editorState = {
  currentTab: 'info',   // 'info' | 'sections' | 'preview'
  sectionCount: 0,
};

/* ── Inicialización ── */
function initSongEditor() {
  document.getElementById('btn-add-song').addEventListener('click', openSongEditor);
  document.getElementById('btn-modal-close').addEventListener('click', closeSongEditor);
  document.getElementById('btn-modal-cancel').addEventListener('click', closeSongEditor);
  document.getElementById('btn-modal-save').addEventListener('click', saveSong);
  document.getElementById('btn-modal-prev').addEventListener('click', () => navigateTab(-1));
  document.getElementById('btn-modal-next').addEventListener('click', () => navigateTab(1));
  document.getElementById('btn-add-section').addEventListener('click', addSection);

  // Cerrar al hacer clic en el overlay (fuera del box)
  document.getElementById('song-editor-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeSongEditor();
  });

  // ESC para cerrar
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !document.getElementById('song-editor-overlay').hidden) {
      closeSongEditor();
    }
  });

  // Sincronizar BPM numérico ↔ rango
  const bpmInput = document.getElementById('field-bpm');
  const bpmRange = document.getElementById('field-bpm-range');
  bpmInput.addEventListener('input', () => { bpmRange.value = bpmInput.value; });
  bpmRange.addEventListener('input', () => { bpmInput.value = bpmRange.value; });

  // Validación en tiempo real del título y artista
  ['field-title', 'field-artist'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateSaveButton);
  });

  // Navegación por tabs con click
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => switchModalTab(tab.dataset.mtab));
  });
}

/* ── Abrir / cerrar modal ── */
function openSongEditor() {
  resetEditor();
  document.getElementById('song-editor-overlay').hidden = false;
  document.body.style.overflow = 'hidden';
  // Foco al primer campo
  setTimeout(() => document.getElementById('field-title').focus(), 100);
}

function closeSongEditor() {
  document.getElementById('song-editor-overlay').hidden = true;
  document.body.style.overflow = '';
}

function resetEditor() {
  // Limpiar campos de info
  document.getElementById('field-title').value = '';
  document.getElementById('field-artist').value = '';
  document.getElementById('field-bpm').value = 100;
  document.getElementById('field-bpm-range').value = 100;
  document.getElementById('field-key').value = 'Do Mayor';
  document.querySelector('input[name="new-difficulty"][value="beginner"]').checked = true;

  // Limpiar secciones
  document.getElementById('sections-editor').innerHTML = '';
  editorState.sectionCount = 0;

  // Volver al tab 1
  switchModalTab('info');
  updateSaveButton();

  // Añadir una sección inicial vacía
  addSection();
}

/* ── Navegación de tabs ── */
const TAB_ORDER = ['info', 'sections', 'preview'];

function switchModalTab(tabId) {
  editorState.currentTab = tabId;

  document.querySelectorAll('.modal-tab').forEach(t => {
    const active = t.dataset.mtab === tabId;
    t.classList.toggle('active', active);
    t.setAttribute('aria-selected', active);
  });

  document.querySelectorAll('.modal-tab-panel').forEach(p => {
    const active = p.id === `mtab-${tabId}`;
    p.classList.toggle('active', active);
    p.hidden = !active;
  });

  const idx = TAB_ORDER.indexOf(tabId);
  document.getElementById('btn-modal-prev').disabled = idx === 0;
  document.getElementById('btn-modal-next').disabled = idx === TAB_ORDER.length - 1;

  // Al llegar a vista previa, reconstruirla
  if (tabId === 'preview') buildPreview();
}

function navigateTab(dir) {
  const idx = TAB_ORDER.indexOf(editorState.currentTab);
  const next = TAB_ORDER[idx + dir];
  if (next) switchModalTab(next);
}

/* ── Secciones: agregar / quitar ── */
function addSection() {
  editorState.sectionCount++;
  const id = `sec-${Date.now()}`;
  const defaultLabel = editorState.sectionCount === 1 ? 'Verso 1'
    : editorState.sectionCount === 2 ? 'Coro'
    : `Sección ${editorState.sectionCount}`;

  const card = document.createElement('div');
  card.className = 'section-card';
  card.dataset.secId = id;
  card.innerHTML = `
    <div class="section-card-header">
      <input class="section-name-input" type="text" value="${defaultLabel}"
             placeholder="Nombre de sección (Verso, Coro…)" maxlength="40"
             aria-label="Nombre de sección" />
      <button class="btn-remove-section" aria-label="Eliminar sección" title="Eliminar sección">✕</button>
    </div>
    <div class="section-lines" id="lines-${id}"></div>
    <button class="btn-add-line" data-sec="${id}">＋ Agregar línea</button>
  `;

  card.querySelector('.btn-remove-section').addEventListener('click', () => {
    card.remove();
    editorState.sectionCount = Math.max(0, editorState.sectionCount - 1);
  });

  card.querySelector('.btn-add-line').addEventListener('click', () => addLine(id));

  document.getElementById('sections-editor').appendChild(card);

  // Añadir primera línea automáticamente
  addLine(id);

  // Scroll al final
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ── Líneas: agregar / quitar ── */
function addLine(sectionId) {
  const container = document.getElementById(`lines-${sectionId}`);
  const lineNum = container.children.length + 1;

  const row = document.createElement('div');
  row.className = 'line-row';
  row.innerHTML = `
    <span class="line-number">${lineNum}</span>
    <div class="line-input-wrap">
      <div class="line-two-rows">
        <div class="line-field-wrap">
          <span class="line-field-label">Notas</span>
          <input class="line-notes-input" type="text"
            placeholder="Mi  Mi  Fa  Sol  La"
            aria-label="Notas de la línea ${lineNum}" autocomplete="off" spellcheck="false" />
        </div>
        <div class="line-field-wrap">
          <span class="line-field-label">Sílabas</span>
          <input class="line-syllables-input" type="text"
            placeholder="A   le  grí  a   her"
            aria-label="Sílabas de la línea ${lineNum}" autocomplete="off" />
        </div>
      </div>
      <div class="line-preview" aria-hidden="true"></div>
    </div>
    <button class="btn-remove-line" aria-label="Eliminar línea" title="Eliminar línea">✕</button>
  `;

  const notesInput    = row.querySelector('.line-notes-input');
  const syllablesInput = row.querySelector('.line-syllables-input');
  const preview       = row.querySelector('.line-preview');

  const refresh = () => {
    renderLinePreview(notesInput.value, syllablesInput.value, preview);
    updateSaveButton();
  };

  // Auto-capitalizar notas: primera letra de cada token en mayúscula (do→Do, sol→Sol, fa#→Fa#)
  notesInput.addEventListener('input', () => {
    const pos = notesInput.selectionStart;
    const corrected = notesInput.value.replace(/\S+/g, token =>
      token.charAt(0).toUpperCase() + token.slice(1)
    );
    if (corrected !== notesInput.value) {
      notesInput.value = corrected;
      notesInput.setSelectionRange(pos, pos);
    }
    refresh();
  });

  syllablesInput.addEventListener('input', refresh);

  // Tab desde notas salta a sílabas; Tab desde sílabas avanza al siguiente campo de notas
  notesInput.addEventListener('keydown', e => {
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      syllablesInput.focus();
    }
  });

  row.querySelector('.btn-remove-line').addEventListener('click', () => {
    row.remove();
    container.querySelectorAll('.line-number').forEach((el, i) => {
      el.textContent = i + 1;
    });
    updateSaveButton();
  });

  container.appendChild(row);
  notesInput.focus();
}

/* ── Parser: dos strings (notas y sílabas) → array de syllables ── */
function parseLyricLine(notesText, syllablesText) {
  const notes = notesText.trim().split(/\s+/).filter(Boolean);
  const syls  = syllablesText.trim().split(/\s+/).filter(Boolean);
  const len   = Math.max(notes.length, syls.length);
  return Array.from({ length: len }, (_, i) => ({
    note: notes[i] || '—',
    text: syls[i]  || ' ',
  }));
}

const VALID_NOTES_SET = new Set([
  'Do','Do#','Dob','Re','Re#','Reb','Mi','Mi#','Mib',
  'Fa','Fa#','Fab','Sol','Sol#','Solb','La','La#','Lab',
  'Si','Si#','Sib','—',
]);

/* ── Vista previa inline debajo de cada línea ── */
function renderLinePreview(notesText, syllablesText, container) {
  if (!notesText.trim() && !syllablesText.trim()) { container.innerHTML = ''; return; }

  const syllables = parseLyricLine(notesText, syllablesText);

  container.innerHTML = syllables.map(({ note, text: txt }) => {
    const invalid = note !== '—' && !VALID_NOTES_SET.has(note);
    return `<div class="lp-syl${invalid ? ' lp-error' : ''}">
      <span class="lp-note">${escapeHtml(note)}</span>
      <span class="lp-text">${escapeHtml(txt)}</span>
    </div>`;
  }).join('');
}

/* ── Vista Previa completa (Tab 3) ── */
function buildPreview() {
  const title      = document.getElementById('field-title').value.trim() || '(sin título)';
  const artist     = document.getElementById('field-artist').value.trim() || '(sin artista)';
  const bpm        = document.getElementById('field-bpm').value;
  const key        = document.getElementById('field-key').value;
  const difficulty = document.querySelector('input[name="new-difficulty"]:checked')?.value || 'beginner';

  document.getElementById('preview-title').textContent  = title;
  document.getElementById('preview-artist').textContent = `— ${artist}`;
  document.getElementById('preview-bpm').textContent    = `♩ ${bpm} BPM`;
  document.getElementById('preview-key').textContent    = `♯ ${key}`;
  document.getElementById('preview-diff').textContent   = diffLabel(difficulty);

  const sections = collectSectionsData();
  const lyricsEl = document.getElementById('preview-lyrics');

  if (sections.length === 0 || sections.every(s => s.lines.length === 0)) {
    lyricsEl.innerHTML = '<p class="preview-empty">Agrega secciones con letra y notas en el paso anterior.</p>';
    return;
  }

  lyricsEl.innerHTML = sections.map(sec => `
    <div class="lyric-section">
      <div class="lyric-section-label">${escapeHtml(sec.label)}</div>
      ${sec.lines.map(line => `
        <div class="lyric-line">
          <div class="lyric-syllables">
            ${line.map(syl => `
              <div class="lyric-syllable">
                <span class="syllable-note">${escapeHtml(syl.note)}</span>
                <span class="syllable-text">${escapeHtml(syl.text)}</span>
              </div>`).join('')}
          </div>
        </div>`).join('')}
    </div>`).join('');
}

/* ── Recoger datos de todas las secciones ── */
function collectSectionsData() {
  const sections = [];
  document.querySelectorAll('.section-card').forEach(card => {
    const label = card.querySelector('.section-name-input').value.trim() || 'Sección';
    const lines = [];
    card.querySelectorAll('.line-row').forEach(row => {
      const notes = row.querySelector('.line-notes-input').value.trim();
      const syls  = row.querySelector('.line-syllables-input').value.trim();
      if (notes || syls) lines.push(parseLyricLine(notes, syls));
    });
    if (lines.length > 0) sections.push({ label, lines });
  });
  return sections;
}

/* ── Validación y activación del botón Guardar ── */
function updateSaveButton() {
  const titleOk  = document.getElementById('field-title').value.trim().length > 0;
  const artistOk = document.getElementById('field-artist').value.trim().length > 0;
  // Basta con que cualquier campo de notas O sílabas tenga contenido
  const hasContent = [...document.querySelectorAll('.line-notes-input, .line-syllables-input')]
    .some(inp => inp.value.trim().length > 0);

  document.getElementById('btn-modal-save').disabled = !(titleOk && artistOk && hasContent);
}

/* ── Guardar canción en el estado ── */
function saveSong() {
  const title      = document.getElementById('field-title').value.trim();
  const artist     = document.getElementById('field-artist').value.trim();
  const bpm        = parseInt(document.getElementById('field-bpm').value) || 100;
  const key        = document.getElementById('field-key').value;
  const difficulty = document.querySelector('input[name="new-difficulty"]:checked')?.value || 'beginner';
  const sections   = collectSectionsData();

  if (!title || !artist) return;
  if (sections.length === 0) {
    showToast('Agrega al menos una línea de letra o notas', 'info');
    return;
  }

  const newSong = {
    id: Date.now(),
    title,
    artist,
    bpm,
    key,
    difficulty,
    sections,
  };

  // Añadir al estado, persistir y re-renderizar
  state.songs.push(newSong);
  saveToStorage();
  applyFiltersAndSort();

  closeSongEditor();
  showToast(`♪ "${title}" guardada`, 'success');

  setTimeout(() => selectSong(newSong.id), 150);
}

/* ══════════════════════════════════════════════════════════
   TRANSPOSICIÓN MANUAL DE TONALIDAD
   ══════════════════════════════════════════════════════════ */

// Escala cromática española — 12 opciones para el selector
const CHROMATIC_OPTIONS = [
  'Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'
];

// Índice cromático de la tonalidad de la canción (raíz)
const KEY_ROOT_INDEX = {
  'Do':0,'Do#':1,'Reb':1,'Re':2,'Re#':3,'Mib':3,'Mi':4,'Fa':5,
  'Fa#':6,'Solb':6,'Sol':7,'Sol#':8,'Lab':8,'La':9,'La#':10,'Sib':10,'Si':11
};

function getSongRootIndex(song) {
  const root = song.key.split(' ')[0];
  return KEY_ROOT_INDEX[root] ?? 0;
}

function initManualTranspose() {
  const sel  = document.getElementById('transpose-key-select');
  const btnU = document.getElementById('btn-transpose-up');
  const btnD = document.getElementById('btn-transpose-down');
  const btnR = document.getElementById('btn-transpose-reset');

  // Poblar el select con los 12 tonos (con bemol alternativo entre paréntesis)
  const FLAT_ALT = { 'Do#':'(Reb)', 'Re#':'(Mib)', 'Fa#':'(Solb)', 'Sol#':'(Lab)', 'La#':'(Sib)' };
  CHROMATIC_OPTIONS.forEach((note, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = FLAT_ALT[note] ? `${note} ${FLAT_ALT[note]}` : note;
    sel.appendChild(opt);
  });

  function applyManual(newSemitones) {
    state.manualSemitones = ((newSemitones % 12) + 12) % 12;
    if (state.manualSemitones > 6) state.manualSemitones -= 12; // preferir camino más corto

    sel.classList.toggle('transposed', state.manualSemitones !== 0);
    btnR.hidden = (state.manualSemitones === 0);

    // Animación de cambio
    sel.classList.remove('changing');
    void sel.offsetWidth;
    sel.classList.add('changing');

    if (state.activeSongId !== null) {
      const song = state.songs.find(s => s.id === state.activeSongId);
      if (song) refreshSongDisplay(song);
    }
  }

  sel.addEventListener('change', () => {
    if (!state.activeSongId) return;
    const song = state.songs.find(s => s.id === state.activeSongId);
    const rootIdx = getSongRootIndex(song);
    const targetIdx = parseInt(sel.value, 10);
    const diff = targetIdx - rootIdx;
    applyManual(diff - state.transpositionSemitones);
  });

  btnU.addEventListener('click', () => applyManual(state.manualSemitones + 1));
  btnD.addEventListener('click', () => applyManual(state.manualSemitones - 1));
  btnR.addEventListener('click', () => applyManual(0));
}

function syncTransposeSelect(song) {
  const sel  = document.getElementById('transpose-key-select');
  const btnR = document.getElementById('btn-transpose-reset');
  const totalIdx = (getSongRootIndex(song) + getTotalSemitones() + 120) % 12;
  sel.value = totalIdx;
  sel.classList.toggle('transposed', state.manualSemitones !== 0);
  btnR.hidden = (state.manualSemitones === 0);
}

/* ══════════════════════════════════════════════════════════
   EXPORTAR / IMPORTAR CANCIONES
   ══════════════════════════════════════════════════════════ */

function initDataBar() {
  document.getElementById('btn-export').addEventListener('click', exportSongs);
  document.getElementById('input-import').addEventListener('change', importSongs);
}

function exportSongs() {
  const userSongs = state.songs.filter(s => !SONGS_DATA.some(d => d.id === s.id));
  if (userSongs.length === 0) {
    showToast('No hay canciones propias para exportar', 'info');
    return;
  }
  const data = JSON.stringify(userSongs, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const date = new Date().toISOString().slice(0, 10);
  a.href     = url;
  a.download = `melodyflow-canciones-${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`↓ ${userSongs.length} canción${userSongs.length !== 1 ? 'es' : ''} exportada${userSongs.length !== 1 ? 's' : ''}`, 'success');
}

function importSongs(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = evt => {
    try {
      const imported = JSON.parse(evt.target.result);
      if (!Array.isArray(imported)) throw new Error('Formato inválido');

      let added = 0;
      imported.forEach(song => {
        if (!song.title || !song.sections) return;
        // Evitar duplicados por título+artista
        const exists = state.songs.some(
          s => s.title === song.title && s.artist === song.artist
        );
        if (!exists) {
          song.id = Date.now() + Math.random();
          state.songs.push(song);
          added++;
        }
      });

      if (added > 0) {
        saveToStorage();
        applyFiltersAndSort();
        showToast(`↑ ${added} canción${added !== 1 ? 'es' : ''} importada${added !== 1 ? 's' : ''}`, 'success');
      } else {
        showToast('Todas las canciones ya estaban en la biblioteca', 'info');
      }
    } catch {
      showToast('Error: el archivo no es válido', 'error');
    }
    // Limpiar el input para permitir importar el mismo archivo otra vez
    e.target.value = '';
  };
  reader.readAsText(file);
}
