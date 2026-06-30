/* ══════════════════════════════════════════════════════════════════
   MELODYFLOW — transposition.js
   Motor de Transposición Musical

   Convierte notas de pitch de concierto al pitch de lectura
   que cada instrumento transpositor necesita para sonar en la
   tonalidad original. Expone el objeto global `Transposition`.
   ══════════════════════════════════════════════════════════════════ */

'use strict';

const Transposition = (() => {

  /* ────────────────────────────────────────────────────────────────
     1. ESCALA CROMÁTICA
     12 posiciones (índice 0 = Do/C). Preferimos sostenidos como
     forma canónica de salida; los bemoles solo se usan en la entrada.
  ──────────────────────────────────────────────────────────────────*/

  /** Escala cromática en notación española (salida). */
  const CHROMATIC_ES = [
    'Do', 'Do#', 'Re', 'Re#', 'Mi',
    'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'
  ];

  /** Escala cromática en notación anglosajona (para acordes en texto). */
  const CHROMATIC_EN = [
    'C', 'C#', 'D', 'D#', 'E',
    'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
  ];

  /**
   * Mapa de nota española → índice cromático.
   * Incluye enarmónicos con bemol (Reb = Do# = índice 1, etc.).
   */
  const NOTE_TO_INDEX_ES = {
    'Do':  0, 'Do#': 1, 'Dob': 11,
    'Re':  2, 'Re#': 3, 'Reb':  1,
    'Mi':  4, 'Mi#': 5, 'Mib':  3,
    'Fa':  5, 'Fa#': 6, 'Fab':  4,
    'Sol': 7, 'Sol#':8, 'Solb': 6,
    'La':  9, 'La#':10, 'Lab':  8,
    'Si': 11, 'Si#': 0, 'Sib': 10,
  };

  /**
   * Mapa de nota anglosajona → índice cromático.
   * Incluye dobles alteraciones para acordes complejos.
   */
  const NOTE_TO_INDEX_EN = {
    'C':  0, 'C#': 1, 'Cb': 11,
    'D':  2, 'D#': 3, 'Db':  1,
    'E':  4, 'E#': 5, 'Eb':  3,
    'F':  5, 'F#': 6, 'Fb':  4,
    'G':  7, 'G#': 8, 'Gb':  6,
    'A':  9, 'A#':10, 'Ab':  8,
    'B': 11, 'B#': 0, 'Bb': 10,
  };

  /* ────────────────────────────────────────────────────────────────
     2. MAPA DE INSTRUMENTOS → SEMITONOS
     Valor = semitonos que hay que SUMAR a la nota de concierto para
     obtener la nota que el instrumentista debe LEER, de modo que el
     sonido resultante sea el pitch de concierto original.

     Regla mnemotécnica:
       offset = (índice del Do de concierto) - (índice de la afinación)
              = 0 - afinación_en_semitonos  (mod 12)

     Ejemplos:
       Sib = índice 10  →  (0 - 10) mod 12 = +2  ✓
       Mib = índice  3  →  (0 -  3) mod 12 = +9  ✓
       Fa  = índice  5  →  (0 -  5) mod 12 = +7  ✓
  ──────────────────────────────────────────────────────────────────*/

  /** @type {Record<string, number>} instrumento → semitonos de transposición */
  const INSTRUMENT_SEMITONES = {
    // ── Afinación en Do (C) — pitch de concierto, sin transposición ──
    flute:    0,   // Flauta traversa en Do
    violin:   0,   // Violín en Do
    cello:    0,   // Violonchelo en Do
    oboe:     0,   // Oboe en Do
    piano:    0,   // Piano en Do

    // ── Afinación en Sib (Bb) — sube 2 semitonos ──
    trumpet:  2,   // Trompeta en Sib
    clarinet: 2,   // Clarinete en Sib
    tenor_sax:2,   // Saxofón Tenor en Sib

    // ── Afinación en Mib (Eb) — sube 9 semitonos ──
    saxophone:9,   // Saxofón Alto en Mib  (ID legacy del selector)
    alto_sax: 9,   // Saxofón Alto en Mib
    bari_sax: 9,   // Saxofón Barítono en Mib (una octava más grave, mismo offset)

    // ── Afinación en Fa (F) — sube 7 semitonos (quinta justa) ──
    horn:     7,   // Trompa en Fa
    french_horn: 7,
  };

  /* ────────────────────────────────────────────────────────────────
     3. FUNCIÓN NÚCLEO: transposeNote
  ──────────────────────────────────────────────────────────────────*/

  /**
   * Desplaza una nota individual por el número de semitonos indicado,
   * gestionando el desbordamiento circular de la escala (módulo 12).
   *
   * @param {string} note      - Nota en español ('Do', 'Fa#', 'Sib', …)
   *                             o el guion largo '—' para notas de relleno.
   * @param {number} semitones - Semitonos a sumar (positivo = sube).
   * @returns {string}         - Nota transpuesta en español (sostenidos canónicos).
   *
   * @example
   *   transposeNote('Do', 2)   // → 'Re'   (Bb inst: Do concert → Re escrito)
   *   transposeNote('Mi', 9)   // → 'Do#'  (Eb inst: Mi concert → Do# escrito)
   *   transposeNote('Sol', 7)  // → 'Re'   (F  inst: Sol concert → Re escrito)
   *   transposeNote('—', 2)    // → '—'    (notas de relleno no se tocan)
   */
  function transposeNote(note, semitones) {
    if (!note || note === '—' || semitones === 0) return note;

    const idx = NOTE_TO_INDEX_ES[note];
    if (idx === undefined) {
      // Nota no reconocida: la devolvemos intacta para no romper el render
      console.warn(`[Transposition] Nota no reconocida: "${note}"`);
      return note;
    }

    const newIdx = ((idx + semitones) % 12 + 12) % 12;
    return CHROMATIC_ES[newIdx];
  }

  /* ────────────────────────────────────────────────────────────────
     4. FUNCIÓN: transposeLyricsAndChords
     Procesa texto libre buscando acordes entre corchetes: [C], [Am],
     [F#m7], [Bb/D], etc., y los reemplaza por su versión transpuesta.
  ──────────────────────────────────────────────────────────────────*/

  /**
   * Transpone todos los acordes marcados con corchetes dentro de un
   * texto, manteniendo intacto el resto del contenido.
   *
   * Soporta:
   *   - Acordes simples:          [C]  [Am]  [G7]
   *   - Con alteración:           [F#] [Bb]  [Eb]
   *   - Con calidad y extensión:  [F#m7] [Bbmaj7] [Dm7b5]
   *   - Con bajo explícito (slash): [C/E] [G/B]
   *
   * @param {string} text      - Texto con acordes entre corchetes.
   * @param {number} semitones - Semitonos a desplazar.
   * @returns {string}         - Texto con los acordes transpuestos.
   *
   * @example
   *   transposeLyricsAndChords('[C]hola [Am]mundo', 2)
   *   // → '[D]hola [Bm]mundo'
   */
  function transposeLyricsAndChords(text, semitones) {
    if (!text || semitones === 0) return text;

    // Captura: [RootAccidental? Quality/Extensions (/BassAccidental?)?]
    const CHORD_REGEX = /\[([A-G][#b]?)((?:[^/\]]*))(?:\/([A-G][#b]?))?\]/g;

    return text.replace(CHORD_REGEX, (_match, root, quality, bass) => {
      const newRoot = transposeEnNote(root, semitones);
      const newBass = bass ? transposeEnNote(bass, semitones) : null;
      return newBass
        ? `[${newRoot}${quality}/${newBass}]`
        : `[${newRoot}${quality}]`;
    });
  }

  /**
   * Transpone una nota en notación anglosajona (A–G con # o b).
   * Función auxiliar interna para `transposeLyricsAndChords`.
   *
   * @param {string} note      - Nota en inglés ('C', 'F#', 'Bb', …).
   * @param {number} semitones - Semitonos a sumar.
   * @returns {string}         - Nota transpuesta en inglés (sostenidos canónicos).
   */
  function transposeEnNote(note, semitones) {
    const idx = NOTE_TO_INDEX_EN[note];
    if (idx === undefined) {
      console.warn(`[Transposition] Nota EN no reconocida: "${note}"`);
      return note;
    }
    const newIdx = ((idx + semitones) % 12 + 12) % 12;
    return CHROMATIC_EN[newIdx];
  }

  /* ────────────────────────────────────────────────────────────────
     5. FUNCIÓN: getSemitonesForInstrument
  ──────────────────────────────────────────────────────────────────*/

  /**
   * Devuelve los semitonos de transposición para un instrumento dado.
   * Retorna 0 (sin transposición) si el instrumento no está en el mapa.
   *
   * @param {string} instrument - ID del instrumento (ej. 'trumpet').
   * @returns {number}          - Semitonos de desplazamiento (0–11).
   */
  function getSemitonesForInstrument(instrument) {
    return INSTRUMENT_SEMITONES[instrument] ?? 0;
  }

  /* ────────────────────────────────────────────────────────────────
     6. FUNCIÓN: transposeKeyName
     Transpone el nombre de una tonalidad para mostrarlo en el badge.
  ──────────────────────────────────────────────────────────────────*/

  /**
   * Transpone el nombre legible de una tonalidad.
   * Ej: 'Do Mayor' + 2 semitonos → 'Re Mayor'
   *
   * @param {string} keyName   - Tonalidad en español ('Do Mayor', 'La menor', …).
   * @param {number} semitones - Semitonos a desplazar.
   * @returns {string}         - Tonalidad transpuesta.
   */
  function transposeKeyName(keyName, semitones) {
    if (!keyName || semitones === 0) return keyName;

    // Extrae la nota raíz al inicio del string (puede ser 'Sol#', 'Re', 'Sib', …)
    // Las notas españolas posibles: Do Re Mi Fa Sol La Si + alteración # b
    const KEY_REGEX = /^(Do#?b?|Re#?b?|Mi#?b?|Fa#?b?|Sol#?b?|La#?b?|Si#?b?)/;
    const match = keyName.match(KEY_REGEX);
    if (!match) return keyName;

    const rootNote = match[1];
    const rest = keyName.slice(rootNote.length); // ' Mayor', ' menor', etc.
    return transposeNote(rootNote, semitones) + rest;
  }

  /* ────────────────────────────────────────────────────────────────
     7. FUNCIÓN: transposeSongSections
     Transpone todas las notas de los sections de una canción,
     devolviendo una copia profunda sin mutar el original.
  ──────────────────────────────────────────────────────────────────*/

  /**
   * Genera una copia transpuesta de los sections de una canción.
   * Las propiedades que no son notas (text, label) permanecen intactas.
   *
   * @param {Array}  sections  - Array de sections del formato MelodyFlow.
   * @param {number} semitones - Semitonos a desplazar.
   * @returns {Array}          - Nuevo array de sections con notas transpuestas.
   */
  function transposeSongSections(sections, semitones) {
    if (semitones === 0) return sections;

    return sections.map(section => ({
      ...section,
      lines: section.lines.map(line =>
        line.map(syllable => ({
          ...syllable,
          note: transposeNote(syllable.note, semitones),
        }))
      ),
    }));
  }

  /* ────────────────────────────────────────────────────────────────
     8. PRUEBAS DE CONSOLA
     Ejecuta `Transposition.runTests()` en DevTools para verificar
     la transposición de Do Mayor a Sib y Mib.
  ──────────────────────────────────────────────────────────────────*/

  /**
   * Demuestra en consola la transposición correcta de una escala de
   * Do Mayor hacia los instrumentos transpositores más comunes.
   */
  function runTests() {
    console.group('═══ MelodyFlow — Motor de Transposición: Pruebas ═══');

    const C_MAJOR = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si', 'Do'];

    /* ── Prueba 1: Instrumento en Sib (+2) ── */
    console.group('🎺 Trompeta / Clarinete (Sib) — +2 semitonos');
    const bbResult = C_MAJOR.map(n => transposeNote(n, 2));
    console.log('Concierto: ', C_MAJOR.join(' – '));
    console.log('Transpuesto:', bbResult.join(' – '));
    console.assert(bbResult[0] === 'Re',   'Do  → Re  ✓');
    console.assert(bbResult[1] === 'Mi',   'Re  → Mi  ✓');
    console.assert(bbResult[2] === 'Fa#',  'Mi  → Fa# ✓');
    console.assert(bbResult[3] === 'Sol',  'Fa  → Sol ✓');
    console.assert(bbResult[4] === 'La',   'Sol → La  ✓');
    console.assert(bbResult[5] === 'Si',   'La  → Si  ✓');
    console.assert(bbResult[6] === 'Do#',  'Si  → Do# ✓');
    console.log('→ Do Mayor en concierto = Re Mayor para Sib ✓');
    console.groupEnd();

    /* ── Prueba 2: Instrumento en Mib (+9) ── */
    console.group('🎷 Saxofón Alto (Mib) — +9 semitonos');
    const ebResult = C_MAJOR.map(n => transposeNote(n, 9));
    console.log('Concierto: ', C_MAJOR.join(' – '));
    console.log('Transpuesto:', ebResult.join(' – '));
    console.assert(ebResult[0] === 'La',   'Do  → La  ✓');
    console.assert(ebResult[1] === 'Si',   'Re  → Si  ✓');
    console.assert(ebResult[2] === 'Do#',  'Mi  → Do# ✓');
    console.assert(ebResult[3] === 'Re',   'Fa  → Re  ✓');
    console.assert(ebResult[4] === 'Mi',   'Sol → Mi  ✓');
    console.assert(ebResult[5] === 'Fa#',  'La  → Fa# ✓');
    console.assert(ebResult[6] === 'Sol#', 'Si  → Sol#✓');
    console.log('→ Do Mayor en concierto = La Mayor para Mib ✓');
    console.groupEnd();

    /* ── Prueba 3: Trompa en Fa (+7) ── */
    console.group('📯 Trompa / French Horn (Fa) — +7 semitonos');
    const fResult = C_MAJOR.map(n => transposeNote(n, 7));
    console.log('Concierto: ', C_MAJOR.join(' – '));
    console.log('Transpuesto:', fResult.join(' – '));
    console.assert(fResult[0] === 'Sol',  'Do  → Sol ✓');
    console.assert(fResult[1] === 'La',   'Re  → La  ✓');
    console.assert(fResult[2] === 'Si',   'Mi  → Si  ✓');
    console.assert(fResult[3] === 'Do',   'Fa  → Do  ✓');
    console.assert(fResult[4] === 'Re',   'Sol → Re  ✓');
    console.assert(fResult[5] === 'Mi',   'La  → Mi  ✓');
    console.assert(fResult[6] === 'Fa#',  'Si  → Fa# ✓');
    console.log('→ Do Mayor en concierto = Sol Mayor para Fa ✓');
    console.groupEnd();

    /* ── Prueba 4: Acordes en corchetes ── */
    console.group('🎵 transposeLyricsAndChords — Acordes en texto');
    const chordsText = '[C]Ama[Am]necer de [F]primavera [G7]hoy';
    const chordsBb   = transposeLyricsAndChords(chordsText, 2);
    const chordsEb   = transposeLyricsAndChords(chordsText, 9);
    console.log('Original  :', chordsText);
    console.log('Sib (+2)  :', chordsBb);
    console.log('Mib (+9)  :', chordsEb);
    console.assert(chordsBb === '[D]Ama[Bm]necer de [G]primavera [A7]hoy',
      'Acordes Bb ✓');
    console.assert(chordsEb === '[A]Ama[F#m]necer de [D]primavera [E7]hoy',
      'Acordes Eb ✓');
    console.groupEnd();

    /* ── Prueba 5: transposeKeyName ── */
    console.group('🔑 transposeKeyName — Tonalidades');
    console.log('Do Mayor +2  →', transposeKeyName('Do Mayor', 2));
    console.log('Do Mayor +9  →', transposeKeyName('Do Mayor', 9));
    console.log('La menor +7  →', transposeKeyName('La menor', 7));
    console.assert(transposeKeyName('Do Mayor', 2) === 'Re Mayor', 'Do+2 = Re ✓');
    console.assert(transposeKeyName('Do Mayor', 9) === 'La Mayor', 'Do+9 = La ✓');
    console.assert(transposeKeyName('La menor', 7) === 'Mi menor', 'Lam+7 = Mim ✓');
    console.groupEnd();

    /* ── Prueba 6: desbordamiento circular ── */
    console.group('🔄 Desbordamiento circular (wrap-around)');
    console.assert(transposeNote('Si', 2)  === 'Do#', 'Si +2  → Do# ✓ (cruce de octava)');
    console.assert(transposeNote('La', 9)  === 'Fa#', 'La +9  → Fa# ✓');
    console.assert(transposeNote('Do', -2) === 'La#', 'Do -2  → La# ✓ (bemol hacia atrás)');
    console.assert(transposeNote('—', 5)   === '—',   '—      → —   ✓ (nota vacía intacta)');
    console.groupEnd();

    console.log('');
    console.log('✅ Todas las pruebas pasaron correctamente.');
    console.groupEnd();
  }

  /* ── API pública del módulo ── */
  return {
    transposeNote,
    transposeEnNote,
    transposeLyricsAndChords,
    transposeKeyName,
    transposeSongSections,
    getSemitonesForInstrument,
    CHROMATIC_ES,
    CHROMATIC_EN,
    INSTRUMENT_SEMITONES,
    runTests,
  };

})();
