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
const STORAGE_KEY  = 'melodyflow_songs_v1';
const SETLIST_KEY  = 'melodyflow_setlist_v1';
const ORDER_KEY    = 'melodyflow_order_v1';
const HIDDEN_KEY   = 'melodyflow_hidden_v1';  // IDs de canciones predeterminadas ocultas

function loadHidden() {
  try { return new Set(JSON.parse(localStorage.getItem(HIDDEN_KEY) || '[]')); }
  catch { return new Set(); }
}
function saveHidden(hiddenSet) {
  localStorage.setItem(HIDDEN_KEY, JSON.stringify([...hiddenSet]));
}

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

function loadSetlist() {
  try { return new Set(JSON.parse(localStorage.getItem(SETLIST_KEY) || '[]')); }
  catch { return new Set(); }
}

function saveSetlist() {
  localStorage.setItem(SETLIST_KEY, JSON.stringify([...state.setlist]));
}

function loadSongOrder() {
  try { return JSON.parse(localStorage.getItem(ORDER_KEY) || 'null'); }
  catch { return null; }
}

function saveSongOrder() {
  localStorage.setItem(ORDER_KEY, JSON.stringify(state.songs.map(s => s.id)));
}

function applySavedOrder() {
  const order = loadSongOrder();
  if (!order || !order.length) return;
  const idMap = new Map(state.songs.map(s => [s.id, s]));
  const ordered = order.map(id => idMap.get(id)).filter(Boolean);
  const inOrder = new Set(order);
  const rest = state.songs.filter(s => !inOrder.has(s.id));
  state.songs = [...ordered, ...rest];
  state.filteredSongs = [...state.songs];
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
const _hidden = loadHidden();
const state = {
  songs: [...SONGS_DATA.filter(s => !_hidden.has(s.id)), ...loadUserSongs()],
  filteredSongs: [...SONGS_DATA.filter(s => !_hidden.has(s.id)), ...loadUserSongs()],
  setlist: loadSetlist(),
  hiddenBuiltIn: _hidden,
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
  applySavedOrder();
  initFocusMode();
  initTheme();
  initMobileTabs();
  initSearch();
  initFilters();
  initInstruments();
  renderSongList();
  initViewToggle();
  initNotesToggle();
  initDisplayControls();
  initAutoScroll();
  initMetronome();
  initTuner();
  initBackingTrack();
  generateWaveform();
  initSongEditor();
  initManualTranspose();
  initSaveKey();
  initDataBar();
  initSync();
  initStaffView();
  // Mostrar indicador si ya hay canciones guardadas
  const saved = loadUserSongs();
  if (saved.length) updateStorageIndicator(saved.length);
  showToast('¡Bienvenido a MelodyFlow!', 'info');
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
    case 'setlist':
      songs = songs.filter(s => state.setlist.has(s.id));
      break;
    case 'manual':
      // orden manual guardado — no reordenar
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
/* ── Borrar canción — confirmación en dos clics ── */
let _pendingDeleteId   = null;
let _pendingDeleteTimer = null;

function requestDeleteSong(id, btnEl) {
  if (_pendingDeleteId === id) {
    clearTimeout(_pendingDeleteTimer);
    _pendingDeleteId = null;
    deleteSong(id);
    return;
  }
  // Cancelar borrado pendiente anterior
  if (_pendingDeleteId !== null) {
    clearTimeout(_pendingDeleteTimer);
    const prev = document.querySelector(`.btn-delete-song[data-song-id="${_pendingDeleteId}"]`);
    if (prev) { prev.classList.remove('armed'); prev.title = 'Eliminar canción'; prev.textContent = '✕'; }
  }
  _pendingDeleteId = id;
  btnEl.classList.add('armed');
  btnEl.title = 'Clic de nuevo para confirmar';
  btnEl.textContent = '¿Eliminar?';
  _pendingDeleteTimer = setTimeout(() => {
    _pendingDeleteId = null;
    if (btnEl) { btnEl.classList.remove('armed'); btnEl.title = 'Eliminar canción'; btnEl.textContent = '✕'; }
  }, 2500);
}

function deleteSong(id) {
  const song = state.songs.find(s => s.id === id);
  if (!song) return;

  // Si es predeterminada, guardarla como oculta para que no vuelva al recargar
  const isBuiltIn = SONGS_DATA.some(d => d.id === id);
  if (isBuiltIn) {
    state.hiddenBuiltIn.add(id);
    saveHidden(state.hiddenBuiltIn);
  }

  state.songs = state.songs.filter(s => s.id !== id);
  state.setlist.delete(id);
  saveToStorage();
  saveSetlist();
  saveSongOrder();

  if (state.activeSongId === id) {
    state.activeSongId = null;
    document.getElementById('song-title').textContent = 'Selecciona una canción';
    document.getElementById('song-artist').textContent = '— Compositor / Artista';
    document.getElementById('lyrics-container').innerHTML =
      '<div class="empty-state"><div class="empty-icon" aria-hidden="true">♩</div><p>Selecciona una canción de la biblioteca para comenzar.</p></div>';
  }
  applyFiltersAndSort();
  showToast(`✕ "${song.title}" eliminada`, 'info');

  // Reflejar el borrado en la nube si hay sincronización activa
  if (typeof getSyncId === 'function' && getSyncId()) {
    syncPush();
  }
}

function toggleSetlist(id) {
  if (state.setlist.has(id)) {
    state.setlist.delete(id);
    showToast('Canción retirada del ensayo', 'info');
  } else {
    state.setlist.add(id);
    showToast('♦ Canción añadida al ensayo', 'success');
  }
  saveSetlist();
  if (state.currentFilter === 'setlist') {
    applyFiltersAndSort();
  } else {
    renderSongList();
  }
  updateSetlistChip();
}

function updateSetlistChip() {
  const chip = document.querySelector('.filter-chip[data-filter="setlist"]');
  if (!chip) return;
  const count = state.setlist.size;
  chip.textContent = count > 0 ? `♦ Ensayo (${count})` : '♦ Ensayo';
}

/* ── Drag-and-drop para reordenar ── */
let _dragSrcId = null;

function renderSongList() {
  const list  = document.getElementById('song-list');
  const count = document.getElementById('song-count');
  const songs = state.filteredSongs;

  const isSetlistView = state.currentFilter === 'setlist';
  count.textContent = `${songs.length} canción${songs.length !== 1 ? 'es' : ''}`;

  if (songs.length === 0) {
    list.innerHTML = `<li class="empty-state" style="min-height:120px;font-size:13px;gap:8px;">
      <div class="empty-icon" style="font-size:32px;">♩</div>
      <p>${isSetlistView ? 'Agrega canciones al ensayo con ♦' : 'No se encontraron canciones'}</p>
    </li>`;
    updateSetlistChip();
    return;
  }

  const isUserSong = song => !SONGS_DATA.some(d => d.id === song.id);

  list.innerHTML = songs.map((song, idx) => `
    <li class="song-item ${song.id === state.activeSongId ? 'active' : ''} ${state.setlist.has(song.id) ? 'in-setlist' : ''}"
        role="option"
        aria-selected="${song.id === state.activeSongId}"
        id="song-item-${song.id}"
        data-song-id="${song.id}"
        tabindex="0"
        draggable="true"
        aria-label="${escapeHtml(song.title)} — ${escapeHtml(song.artist)}">
      <span class="drag-handle" title="Arrastrar para reordenar" aria-hidden="true">⠿</span>
      <span class="song-item-index">${idx + 1}</span>
      <div class="song-item-info">
        <div class="song-item-title">${escapeHtml(song.title)}</div>
        <div class="song-item-artist">${escapeHtml(song.artist)}</div>
      </div>
      <div class="song-item-actions">
        <button class="btn-setlist-song ${state.setlist.has(song.id) ? 'active' : ''}"
                data-song-id="${song.id}"
                aria-label="${state.setlist.has(song.id) ? 'Quitar del ensayo' : 'Añadir al ensayo'}"
                title="${state.setlist.has(song.id) ? 'Quitar del ensayo' : 'Añadir al ensayo'}">♦</button>
        ${isUserSong(song) ? `
          <button class="btn-edit-song" data-song-id="${song.id}"
                  aria-label="Editar ${escapeHtml(song.title)}" title="Editar canción">✎</button>
        ` : ''}
        <button class="btn-delete-song" data-song-id="${song.id}"
                aria-label="Eliminar ${escapeHtml(song.title)}" title="Eliminar canción">✕</button>
        <span class="song-item-difficulty difficulty-${song.difficulty}"
              title="${diffLabel(song.difficulty)}" aria-hidden="true"></span>
      </div>
    </li>
  `).join('');

  // Clicks en el ítem (evitando botones de acción)
  list.querySelectorAll('.song-item').forEach(item => {
    const songId = parseInt(item.dataset.songId);

    item.addEventListener('click', e => {
      if (e.target.closest('.btn-edit-song, .btn-delete-song, .btn-setlist-song, .drag-handle')) return;
      selectSong(songId);
    });
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectSong(songId); }
    });

    // Drag-and-drop
    item.addEventListener('dragstart', e => {
      _dragSrcId = songId;
      e.dataTransfer.effectAllowed = 'move';
      setTimeout(() => item.classList.add('dragging'), 0);
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      list.querySelectorAll('.song-item').forEach(el => el.classList.remove('drag-over'));
    });
    item.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      list.querySelectorAll('.song-item').forEach(el => el.classList.remove('drag-over'));
      if (songId !== _dragSrcId) item.classList.add('drag-over');
    });
    item.addEventListener('drop', e => {
      e.preventDefault();
      item.classList.remove('drag-over');
      if (_dragSrcId === null || _dragSrcId === songId) return;
      const srcIdx = state.songs.findIndex(s => s.id === _dragSrcId);
      const dstIdx = state.songs.findIndex(s => s.id === songId);
      if (srcIdx === -1 || dstIdx === -1) return;
      const [moved] = state.songs.splice(srcIdx, 1);
      state.songs.splice(dstIdx, 0, moved);
      saveSongOrder();
      // Si estamos en alpha, salir de ese modo para que se vea el orden manual
      if (state.currentFilter === 'alpha') {
        document.querySelectorAll('.filter-chip').forEach(c => {
          c.classList.remove('active');
          c.setAttribute('aria-pressed', 'false');
        });
        state.currentFilter = 'manual';
      }
      applyFiltersAndSort();
    });
  });

  list.querySelectorAll('.btn-setlist-song').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleSetlist(parseInt(btn.dataset.songId));
    });
  });

  list.querySelectorAll('.btn-edit-song').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openSongEditor(parseInt(btn.dataset.songId));
    });
  });

  list.querySelectorAll('.btn-delete-song').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      requestDeleteSong(parseInt(btn.dataset.songId), btn);
    });
  });

  updateSetlistChip();
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
/* ══════════════════════════════════════════════════════════
   ACORDES (CIFRADO) — piano / guitarra
   ══════════════════════════════════════════════════════════ */

// Notación de acordes que se muestra: 'es' (Do, Sol, Lam) o 'en' (C, G, Am)
let chordNotation = localStorage.getItem('melodyflow_chord_notation') || 'es';

const CHORD_ES_INDEX = {
  'Do':0,'Do#':1,'Reb':1,'Re':2,'Re#':3,'Mib':3,'Mi':4,'Fa':5,
  'Fa#':6,'Solb':6,'Sol':7,'Sol#':8,'Lab':8,'La':9,'La#':10,'Sib':10,'Si':11
};
const CHORD_EN_INDEX = {
  'C':0,'C#':1,'Db':1,'D':2,'D#':3,'Eb':3,'E':4,'F':5,
  'F#':6,'Gb':6,'G':7,'G#':8,'Ab':8,'A':9,'A#':10,'Bb':10,'B':11
};
// Tablas con sostenidos (por defecto) y con bemoles (cuando el usuario los escribe)
const IDX_TO_ES_SHARP = ['Do','Do#','Re','Re#','Mi','Fa','Fa#','Sol','Sol#','La','La#','Si'];
const IDX_TO_ES_FLAT  = ['Do','Reb','Re','Mib','Mi','Fa','Solb','Sol','Lab','La','Sib','Si'];
const IDX_TO_EN_SHARP = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const IDX_TO_EN_FLAT  = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
// Compatibilidad (nombres antiguos = sostenidos)
const IDX_TO_ES = IDX_TO_ES_SHARP;
const IDX_TO_EN = IDX_TO_EN_SHARP;

function idxToName(idx, notation, flat) {
  if (notation === 'es') return flat ? IDX_TO_ES_FLAT[idx] : IDX_TO_ES_SHARP[idx];
  return flat ? IDX_TO_EN_FLAT[idx] : IDX_TO_EN_SHARP[idx];
}

function capitalizeEsRoot(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

/** Parsea solo la raíz (nota). Devuelve {root, rest, flat} o null. flat = usó bemol. */
function parseChordRoot(str) {
  const s = (str || '').trim();
  // Raíz española primero (Do, Re, Mi, Fa, Sol, La, Si)
  const esMatch = s.match(/^(do|re|mi|fa|sol|la|si)(#|b)?/i);
  if (esMatch) {
    const acc = esMatch[2] ? esMatch[2].toLowerCase() : '';
    const key = capitalizeEsRoot(esMatch[1]) + acc;
    if (CHORD_ES_INDEX[key] !== undefined) {
      return { root: CHORD_ES_INDEX[key], rest: s.slice(esMatch[0].length), flat: acc === 'b' };
    }
  }
  // Raíz americana (A–G)
  const enMatch = s.match(/^([a-g])(#|b)?/i);
  if (enMatch) {
    const acc = enMatch[2] ? enMatch[2].toLowerCase() : '';
    const key = enMatch[1].toUpperCase() + acc;
    if (CHORD_EN_INDEX[key] !== undefined) {
      return { root: CHORD_EN_INDEX[key], rest: s.slice(enMatch[0].length), flat: acc === 'b' };
    }
  }
  return null;
}

/**
 * Parsea un acorde escrito en español o americano, incluyendo acordes
 * con bajo (barra), p. ej. 'Do/Si', 'Sol/Si', 'G7/B', 'Rem/Fa'.
 * Devuelve { root, quality, bass } (bass = índice 0-11 o null) o null.
 */
function parseChord(tokenRaw) {
  const token = (tokenRaw || '').trim();
  if (!token || token === '—' || token === '-') return null;

  // Separar la parte del bajo (después de la barra)
  let mainPart = token, bassStr = null;
  const slash = token.indexOf('/');
  if (slash !== -1) {
    mainPart = token.slice(0, slash);
    bassStr  = token.slice(slash + 1);
  }

  const main = parseChordRoot(mainPart);
  if (!main) return null;

  let bass = null, bassFlat = false;
  if (bassStr) {
    const b = parseChordRoot(bassStr);
    if (b) { bass = b.root; bassFlat = b.flat; }
  }

  return { root: main.root, quality: main.rest, bass, flat: main.flat, bassFlat };
}

/** Convierte un token de acorde a su forma canónica americana (conserva bemol/sostenido). */
function canonicalChord(tokenRaw) {
  const c = parseChord(tokenRaw);
  if (!c) return null;
  let s = idxToName(c.root, 'en', c.flat) + c.quality;
  if (c.bass !== null && c.bass !== undefined) s += '/' + idxToName(c.bass, 'en', c.bassFlat);
  return s;
}

/** Da formato a un acorde guardado transponiéndolo y en la notación elegida (conserva bemol). */
function formatChord(storedChord, semitones = 0) {
  const c = parseChord(storedChord);
  if (!c) return '';
  const rootIdx = (((c.root + semitones) % 12) + 12) % 12;
  let s = idxToName(rootIdx, chordNotation, c.flat) + c.quality;
  if (c.bass !== null && c.bass !== undefined) {
    const bassIdx = (((c.bass + semitones) % 12) + 12) % 12;
    s += '/' + idxToName(bassIdx, chordNotation, c.bassFlat);
  }
  return s;
}

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
            ${line.map(syl => {
              const hasNote = syl.note && syl.note !== '—';
              const chordTxt = syl.chord ? formatChord(syl.chord, getTotalSemitones()) : '';
              return `
              <div class="lyric-syllable">
                ${chordTxt
                  ? `<span class="syllable-chord">${escapeHtml(chordTxt)}</span>`
                  : `<span class="syllable-chord-empty" aria-hidden="true"></span>`}
                ${hasNote
                  ? `<span class="syllable-note${isTransposed ? ' transposed' : ''}">${escapeHtml(syl.note)}</span>`
                  : `<span class="syllable-note-empty" aria-hidden="true"></span>`}
                <span class="syllable-text">${escapeHtml(syl.text)}</span>
              </div>`;
            }).join('')}
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
        requestAnimationFrame(() => {
          document.getElementById('view-staff').classList.add('active');
          // Renderizar partitura al cambiar a esta vista
          if (state.activeSongId !== null) {
            const song = state.songs.find(s => s.id === state.activeSongId);
            if (song) renderStaff(song);
          }
        });
      }
    });
  });

  document.getElementById('view-lyrics').hidden = false;
}

/* ══════════════════════════════════════════════════════════
   CONTROLES DE VISUALIZACIÓN
   ══════════════════════════════════════════════════════════ */
function initFocusMode() {
  const btn = document.getElementById('btn-focus-mode');
  btn.addEventListener('click', toggleFocusMode);

  // ESC para salir del modo enfoque
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('focus-mode')) {
      toggleFocusMode();
    }
  });

  // Controles flotantes del modo enfoque
  document.getElementById('btn-focus-exit').addEventListener('click', toggleFocusMode);

  document.getElementById('btn-focus-autoscroll').addEventListener('click', () => {
    state.autoScrollActive ? stopAutoScroll() : startAutoScroll();
  });

  document.getElementById('btn-focus-speed-up').addEventListener('click', () => {
    setScrollSpeed(state.scrollSpeed + 1);
  });
  document.getElementById('btn-focus-speed-down').addEventListener('click', () => {
    setScrollSpeed(state.scrollSpeed - 1);
  });

  updateFocusSpeedDisplay();
}

function setScrollSpeed(value) {
  state.scrollSpeed = Math.max(1, Math.min(10, value));
  const range = document.getElementById('scroll-speed-range');
  if (range) range.value = state.scrollSpeed;
  document.getElementById('scroll-speed-display').textContent = `×${state.scrollSpeed}`;
  updateFocusSpeedDisplay();
  if (state.autoScrollActive) { stopAutoScroll(); startAutoScroll(); }
}

function updateFocusSpeedDisplay() {
  const el = document.getElementById('focus-speed-display');
  if (el) el.textContent = `×${state.scrollSpeed}`;
}

function toggleFocusMode() {
  const isActive = document.body.classList.toggle('focus-mode');
  const btn = document.getElementById('btn-focus-mode');
  btn.title = isActive ? 'Salir del modo enfoque (ESC)' : 'Modo enfoque';
  btn.classList.toggle('active', isActive);

  document.getElementById('focus-controls').hidden = !isActive;
  updateFocusSpeedDisplay();
}

function initNotesToggle() {
  const btn = document.getElementById('btn-toggle-notes');
  btn.addEventListener('click', () => {
    const showing = btn.getAttribute('aria-pressed') === 'true';
    const next = !showing;
    btn.setAttribute('aria-pressed', next);
    btn.classList.toggle('active', next);
    document.getElementById('lyrics-container').classList.toggle('hide-notes', !next);
  });

  // Mostrar / ocultar acordes
  const chordBtn = document.getElementById('btn-toggle-chords');
  if (chordBtn) {
    chordBtn.addEventListener('click', () => {
      const showing = chordBtn.getAttribute('aria-pressed') === 'true';
      const next = !showing;
      chordBtn.setAttribute('aria-pressed', next);
      chordBtn.classList.toggle('active', next);
      document.getElementById('lyrics-container').classList.toggle('hide-chords', !next);
    });
  }

  // Cambiar notación de acordes (español ↔ americano)
  const notationBtn = document.getElementById('btn-chord-notation');
  if (notationBtn) {
    updateChordNotationLabel();
    notationBtn.addEventListener('click', () => {
      chordNotation = chordNotation === 'es' ? 'en' : 'es';
      localStorage.setItem('melodyflow_chord_notation', chordNotation);
      updateChordNotationLabel();
      if (state.activeSongId !== null) {
        const song = state.songs.find(s => s.id === state.activeSongId);
        if (song) renderLyrics(song);
      }
    });
  }
}

function updateChordNotationLabel() {
  const label = document.getElementById('chord-notation-label');
  if (label) label.textContent = chordNotation === 'es' ? 'Do' : 'C';
}

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

  const fbtn = document.getElementById('btn-focus-autoscroll');
  if (fbtn) {
    fbtn.classList.add('active');
    fbtn.setAttribute('aria-pressed', 'true');
    fbtn.querySelector('.focus-ctrl-icon').textContent = '⏸';
  }

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

  const fbtn = document.getElementById('btn-focus-autoscroll');
  if (fbtn) {
    fbtn.classList.remove('active');
    fbtn.setAttribute('aria-pressed', 'false');
    fbtn.querySelector('.focus-ctrl-icon').textContent = '▶';
  }

  clearInterval(state.autoScrollTimer);
}

/* ══════════════════════════════════════════════════════════
   TEMA CLARO / OSCURO
   ══════════════════════════════════════════════════════════ */
function initTheme() {
  const saved = localStorage.getItem('melodyflow_theme') || 'dark';
  applyTheme(saved);

  document.getElementById('btn-theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.dataset.theme || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('melodyflow_theme', theme);
  const btn = document.getElementById('btn-theme-toggle');
  if (!btn) return;
  btn.querySelector('span').textContent = theme === 'dark' ? '☀' : '◑';
  btn.title = theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro';
}

/* ══════════════════════════════════════════════════════════
   AUDIO — Web Audio API (metrónomo y futuros usos)
   ══════════════════════════════════════════════════════════ */
let _audioCtx = null;

function getAudioCtx() {
  if (!_audioCtx) {
    try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch(e) { return null; }
  }
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

function playMetronomeClick(isAccent) {
  const ctx = getAudioCtx();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Oscilador principal — click más nítido
  const osc  = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'sine';
  osc.frequency.value = isAccent ? 1050 : 700;
  gain.gain.setValueAtTime(isAccent ? 0.55 : 0.3, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + (isAccent ? 0.08 : 0.06));

  osc.start(now);
  osc.stop(now + 0.1);

  // Capa de "click" de alta frecuencia para el acento
  if (isAccent) {
    const osc2  = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.type = 'triangle';
    osc2.frequency.value = 2100;
    gain2.gain.setValueAtTime(0.2, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc2.start(now);
    osc2.stop(now + 0.05);
  }
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
  playMetronomeClick(beat === 0);   // acento en el tiempo 1
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
  currentTab: 'info',
  sectionCount: 0,
  editingId: null,      // null = nueva canción, número = editar existente
};

/* ── Inicialización ── */
function initSongEditor() {
  document.getElementById('btn-add-song').addEventListener('click', openSongEditor);
  document.getElementById('btn-modal-close').addEventListener('click', closeSongEditor);
  document.getElementById('btn-modal-cancel').addEventListener('click', closeSongEditor);
  document.getElementById('btn-modal-save').addEventListener('click', saveSong);
  document.getElementById('btn-modal-prev').addEventListener('click', () => navigateTab(-1));
  document.getElementById('btn-modal-next').addEventListener('click', () => navigateTab(1));
  document.getElementById('btn-add-section').addEventListener('click', () => addSection());

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
function openSongEditor(songId = null) {
  editorState.editingId = songId;
  resetEditor();

  if (songId !== null) {
    const song = state.songs.find(s => s.id === songId);
    if (song) fillEditorWithSong(song);
    // Cambiar título del modal
    document.querySelector('#song-editor-overlay .modal-title').textContent = '✎ Editar Canción';
    document.getElementById('btn-modal-save').textContent = '✎ Guardar cambios';
  } else {
    document.querySelector('#song-editor-overlay .modal-title').textContent = '♪ Nueva Canción';
    document.getElementById('btn-modal-save').textContent = '♪ Guardar canción';
  }

  document.getElementById('song-editor-overlay').hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('field-title').focus(), 100);
}

function fillEditorWithSong(song) {
  document.getElementById('field-title').value  = song.title;
  document.getElementById('field-artist').value = song.artist;
  document.getElementById('field-bpm').value    = song.bpm || 100;
  document.getElementById('field-bpm-range').value = song.bpm || 100;
  document.getElementById('field-key').value     = song.key || 'Do Mayor';
  document.getElementById('field-timesig').value = song.timeSig || '4/4';

  const diff = song.difficulty || 'beginner';
  const diffInput = document.querySelector(`input[name="new-difficulty"][value="${diff}"]`);
  if (diffInput) diffInput.checked = true;

  // Limpiar secciones y rellenar con los datos de la canción
  document.getElementById('sections-editor').innerHTML = '';
  editorState.sectionCount = 0;

  (song.sections || []).forEach(sec => {
    addSection(sec.label);
    const secEl = document.getElementById('sections-editor').lastElementChild;
    const secId = secEl.dataset.secId;
    // Eliminar la línea vacía que addSection añade automáticamente
    document.getElementById(`lines-${secId}`).innerHTML = '';

    (sec.lines || []).forEach(line => {
      const notes  = line.map(s => s.note || '—').join(' ');
      const syls   = line.map(s => s.text || ' ').join(' ');
      const hasAnyChord = line.some(s => s.chord);
      const chords = hasAnyChord
        ? line.map(s => (s.chord ? formatChord(s.chord, 0) : '—')).join(' ')
        : '';
      addLineWithValues(secId, notes, syls, chords);
    });
  });

  updateSaveButton();
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
  document.getElementById('field-key').value     = 'Do Mayor';
  document.getElementById('field-timesig').value = '4/4';
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

/* ── Secciones: agregar / insertar / quitar ──
   afterCard: si se pasa, la sección nueva se inserta justo debajo de esa;
   si es null, se agrega al final. */
function addSection(customLabel = null, afterCard = null) {
  editorState.sectionCount++;
  const id = `sec-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  // Solo aceptar etiqueta si es texto (evita recibir un Event por error)
  const labelText = typeof customLabel === 'string' ? customLabel : null;
  const defaultLabel = labelText || (editorState.sectionCount === 1 ? 'Verso 1'
    : editorState.sectionCount === 2 ? 'Coro'
    : `Sección ${editorState.sectionCount}`);

  const card = document.createElement('div');
  card.className = 'section-card';
  card.dataset.secId = id;
  card.innerHTML = `
    <div class="section-card-header">
      <input class="section-name-input" type="text" value="${defaultLabel}"
             placeholder="Nombre de sección (Verso, Coro…)" maxlength="40"
             aria-label="Nombre de sección" />
      <button class="btn-insert-section" aria-label="Insertar sección debajo" title="Insertar una sección nueva debajo">＋ Sección</button>
      <button class="btn-remove-section" aria-label="Eliminar sección" title="Eliminar sección">✕</button>
    </div>
    <div class="section-lines" id="lines-${id}"></div>
    <button class="btn-add-line" data-sec="${id}">＋ Agregar línea</button>
  `;

  card.querySelector('.btn-remove-section').addEventListener('click', () => {
    card.remove();
    editorState.sectionCount = Math.max(0, editorState.sectionCount - 1);
  });

  card.querySelector('.btn-insert-section').addEventListener('click', () => {
    addSection(null, card);
  });

  card.querySelector('.btn-add-line').addEventListener('click', () => addLine(id));

  // Insertar en la posición pedida o al final
  const editor = document.getElementById('sections-editor');
  if (afterCard && afterCard.parentNode === editor) {
    afterCard.insertAdjacentElement('afterend', card);
  } else {
    editor.appendChild(card);
  }

  // Añadir primera línea automáticamente
  addLine(id);

  // Scroll a la sección nueva
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ── Renumerar las líneas de una sección ── */
function renumberLines(container) {
  container.querySelectorAll('.line-number').forEach((el, i) => {
    el.textContent = i + 1;
  });
}

/* ── Líneas: agregar / insertar / quitar ──
   afterRow: si se pasa, la nueva línea se inserta justo debajo de esa fila;
   si es null, se agrega al final. */
function addLine(sectionId, afterRow = null) {
  const container = document.getElementById(`lines-${sectionId}`);

  const row = document.createElement('div');
  row.className = 'line-row';
  row.innerHTML = `
    <span class="line-number"></span>
    <div class="line-input-wrap">
      <div class="line-two-rows">
        <div class="line-field-wrap">
          <span class="line-field-label line-field-label-chord">Acordes</span>
          <input class="line-chords-input" type="text"
            placeholder="Do  —  —  Sol  Lam  (opcional)"
            aria-label="Acordes de la línea" autocomplete="off" spellcheck="false" />
        </div>
        <div class="line-field-wrap">
          <span class="line-field-label">Notas</span>
          <input class="line-notes-input" type="text"
            placeholder="Mi  Mi  Fa  Sol  La"
            aria-label="Notas de la línea" autocomplete="off" spellcheck="false" />
        </div>
        <div class="line-field-wrap">
          <span class="line-field-label">Sílabas</span>
          <input class="line-syllables-input" type="text"
            placeholder="A   le  grí  a   her"
            aria-label="Sílabas de la línea" autocomplete="off" />
        </div>
      </div>
      <div class="line-preview" aria-hidden="true"></div>
    </div>
    <div class="line-row-actions">
      <button class="btn-insert-line" aria-label="Insertar línea debajo" title="Insertar una línea nueva debajo">＋</button>
      <button class="btn-remove-line" aria-label="Eliminar línea" title="Eliminar línea">✕</button>
    </div>
  `;

  const chordsInput    = row.querySelector('.line-chords-input');
  const notesInput    = row.querySelector('.line-notes-input');
  const syllablesInput = row.querySelector('.line-syllables-input');
  const preview       = row.querySelector('.line-preview');

  const refresh = () => {
    renderLinePreview(notesInput.value, syllablesInput.value, chordsInput.value, preview);
    updateSaveButton();
  };

  chordsInput.addEventListener('input', () => {
    const pos = chordsInput.selectionStart;
    const corrected = chordsInput.value.replace(/\S+/g, token =>
      token.charAt(0).toUpperCase() + token.slice(1)
    );
    if (corrected !== chordsInput.value) {
      chordsInput.value = corrected;
      chordsInput.setSelectionRange(pos, pos);
    }
    refresh();
  });

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
    renumberLines(container);
    updateSaveButton();
  });

  // Insertar una línea nueva justo debajo de esta
  row.querySelector('.btn-insert-line').addEventListener('click', () => {
    addLine(sectionId, row);
  });

  // Insertar en la posición pedida o al final
  if (afterRow && afterRow.parentNode === container) {
    afterRow.insertAdjacentElement('afterend', row);
  } else {
    container.appendChild(row);
  }
  renumberLines(container);
  notesInput.focus();
}

function addLineWithValues(sectionId, notesText, sylsText, chordsText = '') {
  addLine(sectionId);
  const container = document.getElementById(`lines-${sectionId}`);
  const lastRow   = container.lastElementChild;
  const ci = lastRow.querySelector('.line-chords-input');
  const ni = lastRow.querySelector('.line-notes-input');
  const si = lastRow.querySelector('.line-syllables-input');
  const pv = lastRow.querySelector('.line-preview');
  if (ci) ci.value = chordsText;
  ni.value = notesText;
  si.value = sylsText;
  renderLinePreview(notesText, sylsText, chordsText, pv);
}

/* ── Parser: notas + sílabas (+ acordes) → array de syllables ── */
function parseLyricLine(notesText, syllablesText, chordsText = '') {
  const notes  = notesText.trim().split(/\s+/).filter(Boolean);
  const syls   = syllablesText.trim().split(/\s+/).filter(Boolean);
  const chords = chordsText.trim().split(/\s+/).filter(Boolean);
  const len    = Math.max(notes.length, syls.length, chords.length);
  return Array.from({ length: len }, (_, i) => {
    const syl = {
      note: notes[i] || '—',
      text: syls[i]  || ' ',
    };
    const chord = canonicalChord(chords[i]);
    if (chord) syl.chord = chord;
    return syl;
  });
}

const VALID_NOTES_SET = new Set([
  'Do','Do#','Dob','Re','Re#','Reb','Mi','Mi#','Mib',
  'Fa','Fa#','Fab','Sol','Sol#','Solb','La','La#','Lab',
  'Si','Si#','Sib','—',
]);

/* ── Vista previa inline debajo de cada línea ── */
function renderLinePreview(notesText, syllablesText, chordsText, container) {
  // Compatibilidad: si se llamó con la firma antigua (3 args), corregir.
  if (container === undefined) { container = chordsText; chordsText = ''; }

  if (!notesText.trim() && !syllablesText.trim() && !chordsText.trim()) {
    container.innerHTML = ''; return;
  }

  const syllables = parseLyricLine(notesText, syllablesText, chordsText);

  container.innerHTML = syllables.map(({ note, text: txt, chord }) => {
    const invalid = note !== '—' && !VALID_NOTES_SET.has(note);
    const chordTxt = chord ? formatChord(chord, 0) : '';
    return `<div class="lp-syl${invalid ? ' lp-error' : ''}">
      ${chordTxt ? `<span class="lp-chord">${escapeHtml(chordTxt)}</span>` : '<span class="lp-chord-empty"></span>'}
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
            ${line.map(syl => {
              const chordTxt = syl.chord ? formatChord(syl.chord, 0) : '';
              return `
              <div class="lyric-syllable">
                ${chordTxt ? `<span class="syllable-chord">${escapeHtml(chordTxt)}</span>` : `<span class="syllable-chord-empty" aria-hidden="true"></span>`}
                <span class="syllable-note">${escapeHtml(syl.note)}</span>
                <span class="syllable-text">${escapeHtml(syl.text)}</span>
              </div>`;
            }).join('')}
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
      const notes  = row.querySelector('.line-notes-input').value.trim();
      const syls   = row.querySelector('.line-syllables-input').value.trim();
      const chordEl = row.querySelector('.line-chords-input');
      const chords = chordEl ? chordEl.value.trim() : '';
      if (notes || syls || chords) lines.push(parseLyricLine(notes, syls, chords));
    });
    if (lines.length > 0) sections.push({ label, lines });
  });
  return sections;
}

/* ── Validación visual del botón Guardar ──
   El botón nunca se deshabilita: siempre responde al clic y, si falta
   algo, saveSong() avisa qué completar. Aquí solo damos pista visual. ── */
function updateSaveButton() {
  const titleOk = document.getElementById('field-title').value.trim().length > 0;

  const btn = document.getElementById('btn-modal-save');
  btn.disabled = false;                  // siempre clicable
  btn.classList.toggle('incomplete', !titleOk);  // solo el título marca "incompleto"
}

/* ── Guardar canción en el estado ── */
function saveSong() {
  try {
    doSaveSong();
  } catch (err) {
    console.error('[saveSong] Error:', err);
    showToast('Error al guardar: ' + (err && err.message ? err.message : err), 'error');
  }
}

function doSaveSong() {
  const titleRaw   = document.getElementById('field-title').value.trim();
  const artist     = document.getElementById('field-artist').value.trim() || '—';
  const bpm        = parseInt(document.getElementById('field-bpm').value) || 100;
  const key        = document.getElementById('field-key').value;
  const timeSig    = document.getElementById('field-timesig').value || '4/4';
  const difficulty = document.querySelector('input[name="new-difficulty"]:checked')?.value || 'beginner';
  const sections   = collectSectionsData();

  // Única regla obligatoria: el título. Lo demás es opcional y se puede
  // completar después editando la canción.
  const title = titleRaw || 'Sin título';

  // Quitar cualquier filtro o búsqueda activa para que la canción guardada
  // siempre aparezca en la lista (si no, parece que "no se guardó").
  function resetListView() {
    state.searchQuery = '';
    const searchInput = document.getElementById('song-search-input');
    if (searchInput) searchInput.value = '';
    const clearBtn = document.getElementById('btn-clear-search');
    if (clearBtn) clearBtn.hidden = true;
    state.currentFilter = 'alpha';
    document.querySelectorAll('.filter-chip').forEach(c => {
      const isAlpha = c.dataset.filter === 'alpha';
      c.classList.toggle('active', isAlpha);
      c.setAttribute('aria-pressed', isAlpha);
    });
  }

  const isEditing = editorState.editingId !== null;
  let savedId;

  if (isEditing) {
    // ── Modo edición: actualizar canción existente ──
    const idx = state.songs.findIndex(s => s.id === editorState.editingId);
    if (idx === -1) {
      // La canción ya no existe: la añadimos como nueva en vez de fallar.
      const newSong = { id: Date.now(), title, artist, bpm, key, timeSig, difficulty, sections };
      state.songs.push(newSong);
      savedId = newSong.id;
    } else {
      state.songs[idx] = { ...state.songs[idx], title, artist, bpm, key, timeSig, difficulty, sections };
      savedId = editorState.editingId;
    }
  } else {
    // ── Modo nuevo: añadir canción ──
    const newSong = { id: Date.now(), title, artist, bpm, key, timeSig, difficulty, sections };
    state.songs.push(newSong);
    savedId = newSong.id;
  }

  // Persistir (no debe impedir que la canción aparezca aunque localStorage falle)
  const stored = persistSongs();

  // Cerrar el modal y refrescar la lista — SIEMPRE ocurre, pase lo que pase.
  resetListView();
  applyFiltersAndSort();
  closeSongEditor();

  if (!stored) {
    showToast('Guardada en esta sesión (no se pudo almacenar permanentemente)', 'info');
  } else {
    showToast(isEditing ? `✎ "${title}" actualizada` : `♪ "${title}" guardada`, 'success');
  }

  // Subir a la nube automáticamente si hay sincronización configurada
  if (typeof getSyncId === 'function' && getSyncId()) {
    syncPush();
  }

  setTimeout(() => selectSong(savedId), 150);
}

/** Intenta persistir en localStorage. Devuelve true si lo logró. */
function persistSongs() {
  try {
    const userSongs = state.songs.filter(s => !SONGS_DATA.some(d => d.id === s.id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userSongs));
    localStorage.setItem(ORDER_KEY, JSON.stringify(state.songs.map(s => s.id)));
    updateStorageIndicator(userSongs.length);
    return true;
  } catch (e) {
    console.warn('[persistSongs] localStorage no disponible:', e);
    updateStorageIndicator(0, true);
    return false;
  }
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
   GUARDAR EL TONO ACTUAL COMO COPIA
   ══════════════════════════════════════════════════════════ */

/** Transpone un acorde guardado (canónico americano) devolviendo otro canónico. */
function transposeStoredChord(chord, semitones) {
  const c = parseChord(chord);
  if (!c) return chord;
  const rootIdx = (((c.root + semitones) % 12) + 12) % 12;
  let s = idxToName(rootIdx, 'en', c.flat) + c.quality;
  if (c.bass !== null && c.bass !== undefined) {
    const bassIdx = (((c.bass + semitones) % 12) + 12) % 12;
    s += '/' + idxToName(bassIdx, 'en', c.bassFlat);
  }
  return s;
}

function initSaveKey() {
  const btn = document.getElementById('btn-save-key');
  if (btn) btn.addEventListener('click', saveTransposedCopy);
}

/**
 * Crea una copia de la canción activa con la transposición MANUAL ya
 * aplicada a las notas y acordes, y con el nombre de la tonalidad
 * actualizado. Se guarda como una canción nueva (se duplica).
 */
function saveTransposedCopy() {
  if (state.activeSongId === null) {
    showToast('Primero selecciona una canción', 'info');
    return;
  }
  const song = state.songs.find(s => s.id === state.activeSongId);
  if (!song) return;

  const semis = state.manualSemitones;
  if (semis === 0) {
    showToast('Cambia el tono primero con los botones ♭ / ♯', 'info');
    return;
  }

  // Copiar secciones transponiendo notas y acordes
  const newSections = (song.sections || []).map(sec => ({
    label: sec.label,
    lines: (sec.lines || []).map(line => line.map(syl => {
      const out = {
        note: Transposition.transposeNote(syl.note, semis),
        text: syl.text,
      };
      if (syl.dur) out.dur = syl.dur;
      if (syl.chord) out.chord = transposeStoredChord(syl.chord, semis);
      return out;
    })),
  }));

  const newKey = Transposition.transposeKeyName(song.key, semis);
  const newKeyRoot = newKey.split(' ')[0];

  const copy = {
    id: Date.now(),
    title: `${song.title} (en ${newKeyRoot})`,
    artist: song.artist,
    bpm: song.bpm,
    key: newKey,
    timeSig: song.timeSig || '4/4',
    difficulty: song.difficulty || 'beginner',
    sections: newSections,
  };

  state.songs.push(copy);
  persistSongs();

  // Reiniciar la transposición manual y mostrar la copia (ya en su tono)
  state.manualSemitones = 0;
  applyFiltersAndSort();
  showToast(`♪ Guardada "${copy.title}"`, 'success');

  if (typeof getSyncId === 'function' && getSyncId()) syncPush();

  setTimeout(() => selectSong(copy.id), 150);
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

/**
 * Normaliza una canción importada para garantizar que la letra y las
 * notas se conserven aunque el archivo venga de una versión distinta
 * del programa. Acepta varias formas de estructura de "sections".
 */
function normalizeImportedSong(raw) {
  if (!raw || typeof raw !== 'object') return null;

  const title = String(raw.title || '').trim() || 'Sin título';

  // Aceptar tanto `sections` como posibles alias antiguos.
  let sections = raw.sections || raw.secciones || [];
  if (!Array.isArray(sections)) sections = [];

  // Normalizar cada sección: { label, lines: [ [ {note,text,dur} ] ] }
  const cleanSections = sections.map(sec => {
    const label = String((sec && (sec.label || sec.nombre)) || 'Sección');
    let lines = (sec && (sec.lines || sec.lineas)) || [];
    if (!Array.isArray(lines)) lines = [];

    const cleanLines = lines.map(line => {
      if (!Array.isArray(line)) return [];
      return line.map(syl => {
        if (!syl || typeof syl !== 'object') return { note: '—', text: ' ' };
        const out = {
          note: (syl.note ?? syl.nota ?? '—').toString(),
          text: (syl.text ?? syl.texto ?? syl.silaba ?? ' ').toString(),
          ...(syl.dur ? { dur: String(syl.dur) } : {}),
        };
        const ch = syl.chord ?? syl.acorde;
        if (ch) { const c = canonicalChord(String(ch)); if (c) out.chord = c; }
        return out;
      });
    }).filter(l => l.length > 0);

    return { label, lines: cleanLines };
  }).filter(s => s.lines.length > 0);

  return {
    id: Date.now() + Math.floor(Math.random() * 100000),
    title,
    artist:     String(raw.artist || raw.artista || '—'),
    bpm:        parseInt(raw.bpm) || 100,
    key:        String(raw.key || raw.tonalidad || 'Do Mayor'),
    timeSig:    String(raw.timeSig || raw.compas || '4/4'),
    difficulty: String(raw.difficulty || raw.dificultad || 'beginner'),
    sections:   cleanSections,
  };
}

function importSongs(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = evt => {
    try {
      let parsed = JSON.parse(evt.target.result);

      // Aceptar tanto un array como un objeto { songs: [...] }
      if (!Array.isArray(parsed)) {
        if (parsed && Array.isArray(parsed.songs)) parsed = parsed.songs;
        else if (parsed && typeof parsed === 'object') parsed = [parsed];
        else throw new Error('Formato inválido');
      }

      let added = 0, skipped = 0, noLyrics = 0;
      parsed.forEach(raw => {
        const song = normalizeImportedSong(raw);
        if (!song) { skipped++; return; }

        // Evitar duplicados por título + artista
        const exists = state.songs.some(
          s => s.title === song.title && s.artist === song.artist
        );
        if (exists) { skipped++; return; }

        if (song.sections.length === 0) noLyrics++;
        state.songs.push(song);
        added++;
      });

      if (added > 0) {
        persistSongs();
        applyFiltersAndSort();
        let msg = `↑ ${added} canción${added !== 1 ? 'es' : ''} importada${added !== 1 ? 's' : ''}`;
        if (noLyrics > 0) msg += ` (${noLyrics} sin letra)`;
        showToast(msg, 'success');
      } else {
        showToast('No se importó ninguna canción nueva', 'info');
      }
    } catch (err) {
      console.error('[importSongs]', err);
      showToast('Error: el archivo no es válido', 'error');
    }
    // Limpiar el input para permitir importar el mismo archivo otra vez
    e.target.value = '';
  };
  reader.readAsText(file);
}

/* ══════════════════════════════════════════════════════════
   SINCRONIZACIÓN EN LA NUBE — Pantry (código compartido)
   ══════════════════════════════════════════════════════════ */

const SYNC_ID_KEY = 'melodyflow_sync_id_v1';
const PANTRY_BASE = 'https://getpantry.cloud/apiv1/pantry';
const SYNC_BASKET = 'melodyflow';

function getSyncId()  { return localStorage.getItem(SYNC_ID_KEY) || ''; }
function setSyncId(id){ localStorage.setItem(SYNC_ID_KEY, id.trim()); }

function setSyncStatus(text, kind = '') {
  const el = document.getElementById('sync-status');
  if (!el) return;
  el.textContent = text;
  el.className = 'sync-status ' + kind;
}

function initSync() {
  const input      = document.getElementById('sync-code-input');
  const connectBtn = document.getElementById('btn-sync-connect');
  const pullBtn    = document.getElementById('btn-sync-pull');
  const pushBtn    = document.getElementById('btn-sync-push');
  if (!input) return;

  const savedId = getSyncId();
  if (savedId) {
    input.value = savedId;
    setSyncStatus('Conectado ✓', 'ok');
  } else {
    setSyncStatus('Sin conectar', '');
  }

  connectBtn.addEventListener('click', () => {
    const id = input.value.trim();
    if (!id) { showToast('Pega tu código de sincronización primero', 'info'); return; }
    setSyncId(id);
    setSyncStatus('Conectado ✓', 'ok');
    showToast('☁ Código guardado en este dispositivo', 'success');
    // Al conectar, traer lo que haya en la nube
    syncPull();
  });

  pullBtn.addEventListener('click', () => syncPull());
  pushBtn.addEventListener('click', () => syncPush());

  // Al abrir la app, si ya hay código, traer los cambios automáticamente
  if (savedId) {
    setTimeout(() => syncPull(true), 600);
  }
}

/** Sube todas las canciones propias del usuario a la nube. */
async function syncPush() {
  const id = getSyncId();
  if (!id) { showToast('Conecta un código de sincronización primero', 'info'); return; }

  const userSongs = state.songs.filter(s => !SONGS_DATA.some(d => d.id === s.id));
  setSyncStatus('Subiendo…', 'busy');

  try {
    const res = await fetch(`${PANTRY_BASE}/${id}/basket/${SYNC_BASKET}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ songs: userSongs, updatedAt: Date.now() }),
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    setSyncStatus('Subido ✓', 'ok');
    showToast(`☁ ${userSongs.length} canción${userSongs.length !== 1 ? 'es' : ''} subida${userSongs.length !== 1 ? 's' : ''} a la nube`, 'success');
  } catch (err) {
    console.error('[syncPush]', err);
    setSyncStatus('Error al subir', 'error');
    showToast('No se pudo subir. Revisa el código o tu conexión.', 'error');
  }
}

/** Trae las canciones de la nube y las combina con las locales. */
async function syncPull(silent = false) {
  const id = getSyncId();
  if (!id) { if (!silent) showToast('Conecta un código de sincronización primero', 'info'); return; }

  setSyncStatus('Trayendo…', 'busy');

  try {
    const res = await fetch(`${PANTRY_BASE}/${id}/basket/${SYNC_BASKET}`, { method: 'GET' });
    if (res.status === 400) {
      // El basket todavía no existe: no hay nada en la nube aún.
      setSyncStatus('Conectado ✓ (nube vacía)', 'ok');
      if (!silent) showToast('La nube está vacía. Usa "Subir mis canciones" primero.', 'info');
      return;
    }
    if (!res.ok) throw new Error('HTTP ' + res.status);

    const data = await res.json();
    const cloudSongs = Array.isArray(data.songs) ? data.songs : [];

    let added = 0, updated = 0;
    cloudSongs.forEach(raw => {
      const song = normalizeImportedSong(raw);
      if (!song) return;
      // Conservar el mismo id si venía, para poder actualizar en vez de duplicar
      if (raw.id !== undefined) song.id = raw.id;

      const existingById = state.songs.find(s => s.id === song.id);
      const existingByName = state.songs.find(
        s => s.title === song.title && s.artist === song.artist
      );

      if (existingById && !SONGS_DATA.some(d => d.id === existingById.id)) {
        Object.assign(existingById, song);
        updated++;
      } else if (existingByName && !SONGS_DATA.some(d => d.id === existingByName.id)) {
        Object.assign(existingByName, song);
        updated++;
      } else if (!existingById && !existingByName) {
        state.songs.push(song);
        added++;
      }
    });

    persistSongs();
    applyFiltersAndSort();
    setSyncStatus('Actualizado ✓', 'ok');

    if (!silent || added > 0 || updated > 0) {
      if (added > 0 || updated > 0) {
        showToast(`☁ ${added} nueva${added !== 1 ? 's' : ''}, ${updated} actualizada${updated !== 1 ? 's' : ''}`, 'success');
      } else if (!silent) {
        showToast('☁ Todo está al día', 'info');
      }
    }
  } catch (err) {
    console.error('[syncPull]', err);
    setSyncStatus('Error al traer', 'error');
    if (!silent) showToast('No se pudo traer. Revisa el código o tu conexión.', 'error');
  }
}

/* ══════════════════════════════════════════════════════════
   VISTA DE PARTITURA — VexFlow
   ══════════════════════════════════════════════════════════ */

// Mapeo nota española → clave VexFlow (octava 4, dentro del pentagrama de Sol)
const NOTE_VF = {
  'Do':'c/4','Do#':'c#/4','Dob':'cb/4',
  'Re':'d/4','Re#':'d#/4','Reb':'db/4',
  'Mi':'e/4','Mi#':'e#/4','Mib':'eb/4',
  'Fa':'f/4','Fa#':'f#/4','Fab':'fb/4',
  'Sol':'g/4','Sol#':'g#/4','Solb':'gb/4',
  'La':'a/4','La#':'a#/4','Lab':'ab/4',
  'Si':'b/4','Si#':'b#/4','Sib':'bb/4',
};

const NOTE_VF_ACC = {
  'Do#':'#','Dob':'b','Re#':'#','Reb':'b',
  'Mi#':'#','Mib':'b','Fa#':'#','Fab':'b',
  'Sol#':'#','Solb':'b','La#':'#','Lab':'b',
  'Si#':'#','Sib':'b',
};

const DUR_BEATS  = { 'w':4,'h':2,'q':1,'8':0.5,'16':0.25 };
const DUR_SYMBOL = { 'w':'𝅝','h':'𝅗𝅥','q':'♩','8':'♪','16':'𝅘𝅥𝅯' };

const staffState = {
  selectedIdx: null,
  flatNotes: [],
  songId: null,
};

function flattenNotes(song) {
  const out = [];
  (song.sections || []).forEach(sec => {
    (sec.lines || []).forEach(line => {
      line.forEach(syl => {
        out.push({
          note: syl.note || '—',
          text: syl.text || '',
          dur:  syl.dur  || 'q',
          secLabel: sec.label,
        });
      });
    });
  });
  return out;
}

function beatsPerBar(timeSig) {
  const [n, d] = (timeSig || '4/4').split('/').map(Number);
  return n * (4 / d);
}

function renderStaff(song) {
  const outEl   = document.getElementById('vexflow-output');
  const trackEl = document.getElementById('note-track');
  outEl.innerHTML   = '';
  trackEl.innerHTML = '';

  if (!song) {
    outEl.innerHTML = '<p class="staff-placeholder-msg">Selecciona una canción para ver la partitura.</p>';
    return;
  }

  const flat = flattenNotes(song);
  staffState.flatNotes = flat;
  staffState.songId    = song.id;
  staffState.selectedIdx = null;

  if (flat.length === 0) {
    outEl.innerHTML = '<p class="staff-placeholder-msg">Esta canción no tiene notas.</p>';
    return;
  }

  if (!window.Vex) {
    outEl.innerHTML = '<p class="staff-placeholder-msg">Cargando librería de partitura…</p>';
    setTimeout(() => renderStaff(song), 800);
    return;
  }

  buildNoteTrack(flat, song);
  buildVexFlow(song, flat);
}

function buildNoteTrack(flat, song) {
  const trackEl = document.getElementById('note-track');
  trackEl.innerHTML = '';
  let lastSec = '';

  flat.forEach((n, i) => {
    if (n.secLabel !== lastSec) {
      lastSec = n.secLabel;
      const lbl = document.createElement('div');
      lbl.className = 'note-track-section-label';
      lbl.textContent = n.secLabel;
      trackEl.appendChild(lbl);
    }

    const chip = document.createElement('div');
    chip.className = 'note-chip' + (n.note === '—' ? ' note-chip-rest' : '');
    chip.dataset.idx = i;
    chip.setAttribute('role','option');
    chip.setAttribute('aria-selected','false');
    chip.innerHTML = `
      <span class="note-chip-note">${n.note}</span>
      <span class="note-chip-dur">${DUR_SYMBOL[n.dur] || '♩'}</span>
      <span class="note-chip-syl">${n.text.trim() || '—'}</span>`;

    chip.addEventListener('click', () => selectNoteChip(i, song));
    trackEl.appendChild(chip);
  });
}

function selectNoteChip(idx, song) {
  staffState.selectedIdx = idx;
  const n = staffState.flatNotes[idx];

  // Actualizar chips visuales
  document.querySelectorAll('.note-chip').forEach(c => {
    const sel = parseInt(c.dataset.idx) === idx;
    c.classList.toggle('selected', sel);
    c.setAttribute('aria-selected', sel);
  });

  // Activar botón de duración correspondiente
  document.querySelectorAll('.dur-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.dur === n.dur);
  });

  document.getElementById('staff-sel-info').textContent =
    `Nota ${idx + 1}: ${n.note} — ${n.text.trim() || '(pausa)'}`;

  // Scroll al chip seleccionado
  const chip = document.querySelector(`.note-chip[data-idx="${idx}"]`);
  if (chip) chip.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

function applyDuration(dur, song) {
  const idx = staffState.selectedIdx;
  if (idx === null) return;

  // Actualizar en song.sections
  let cursor = 0;
  outer: for (const sec of (song.sections || [])) {
    for (const line of (sec.lines || [])) {
      for (const syl of line) {
        if (cursor === idx) {
          syl.dur = dur;
          break outer;
        }
        cursor++;
      }
    }
  }

  // Actualizar en flatNotes y re-renderizar
  staffState.flatNotes[idx].dur = dur;
  saveToStorage();

  // Redibujar track y staff
  buildNoteTrack(staffState.flatNotes, song);
  buildVexFlow(song, staffState.flatNotes);

  // Re-seleccionar nota
  selectNoteChip(idx, song);
}

function buildVexFlow(song, flat) {
  const outEl = document.getElementById('vexflow-output');
  outEl.innerHTML = '';

  const { Renderer, Stave, StaveNote, Voice, Formatter, Accidental, Annotation } = Vex.Flow;

  const timeSig = song.timeSig || '4/4';
  const bpb     = beatsPerBar(timeSig);
  const [tsNum, tsDen] = timeSig.split('/').map(Number);

  // Agrupar en compases
  const measures = [];
  let cur = [], curBeats = 0;
  flat.forEach((n, i) => {
    const b = DUR_BEATS[n.dur] || 1;
    if (curBeats + b > bpb + 0.001 && cur.length) {
      measures.push(cur);
      cur = []; curBeats = 0;
    }
    cur.push({ ...n, gi: i });
    curBeats += b;
    if (Math.abs(curBeats - bpb) < 0.001) {
      measures.push(cur);
      cur = []; curBeats = 0;
    }
  });
  if (cur.length) measures.push(cur);

  // Dimensiones
  const containerW = outEl.clientWidth || 680;
  const PER_ROW    = Math.max(1, Math.floor(containerW / 220));
  const STAVE_W    = Math.floor((containerW - 32) / PER_ROW);
  const ROW_H      = 130;
  const PAD        = 16;
  const rows        = Math.ceil(measures.length / PER_ROW);
  const totalH      = rows * ROW_H + PAD * 2;

  const div = document.createElement('div');
  outEl.appendChild(div);

  const renderer = new Renderer(div, Renderer.Backends.SVG);
  renderer.resize(containerW, totalH);
  const ctx = renderer.getContext();
  ctx.setFont('Arial', 10, 'normal');

  measures.forEach((measure, mi) => {
    const row = Math.floor(mi / PER_ROW);
    const col = mi % PER_ROW;
    const x   = PAD + col * STAVE_W;
    const y   = PAD + row * ROW_H;

    const stave = new Stave(x, y, STAVE_W - 4);
    if (mi === 0) stave.addClef('treble').addTimeSignature(timeSig);
    stave.setContext(ctx).draw();

    const voice = new Voice({ num_beats: tsNum, beat_value: tsDen });
    voice.setStrict(false);

    const staveNotes = measure.map(n => {
      const isRest = n.note === '—';
      const vfKey  = isRest ? 'b/4' : (NOTE_VF[n.note] || 'b/4');
      const dur    = (n.dur || 'q') + (isRest ? 'r' : '');

      const sn = new StaveNote({ keys: [vfKey], duration: dur });

      if (!isRest && NOTE_VF_ACC[n.note]) {
        sn.addModifier(new Accidental(NOTE_VF_ACC[n.note]));
      }

      if (n.text && n.text.trim()) {
        try {
          const ann = new Annotation(n.text.trim())
            .setFont('Arial', 9, 'normal')
            .setVerticalJustification(Annotation.VerticalJustify.BOTTOM);
          sn.addModifier(ann);
        } catch(e) { /* anotación opcional */ }
      }

      return sn;
    });

    voice.addTickables(staveNotes);

    try {
      new Formatter().joinVoices([voice]).format([voice], STAVE_W - 24);
      voice.draw(ctx, stave);
    } catch(e) {
      console.warn('VexFlow render:', e.message);
    }
  });
}

function initStaffView() {
  // Botones de duración
  document.querySelectorAll('.dur-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (staffState.selectedIdx === null) {
        showToast('Selecciona una nota en la fila de abajo primero', 'info');
        return;
      }
      const song = state.songs.find(s => s.id === state.activeSongId);
      if (song) applyDuration(btn.dataset.dur, song);
    });
  });
}
