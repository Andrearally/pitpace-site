/* PitPace site — Guide + FAQ content (EN/IT), rendered by guide.html, faq.html
   and the homepage FAQ section. Re-rendered on language change via onLangChange. */

const GUIDE = {
  en: [
    { h: '1. First run', p: [
      'Open PitPace and accept the one-time <b>safety disclaimer</b>.',
      'Grant the <b>Location</b> permission. For detection with the screen off choose <b>“Allow all the time”</b> (Android 11+: phone Settings → Apps → PitPace → Permissions → Location).',
      'Follow the intro tutorial (replay it any time from Settings → ABOUT &amp; SAFETY).',
    ]},
    { h: '2. Key concepts', ul: [
      '<b>Entry / exit gates</b> — the two lines of the pit lane. PitPace starts the clock at entry and stops it at exit.',
      '<b>Minimum Pit Time</b> — the regulation minimum for the whole entry→exit transit.',
      '<b>Pit-to-exit time</b> — seconds from the box to the exit line; sets when to release the car (release = minimum − pit-to-exit).',
      '<b>Pit box (stop)</b> — where the car stops; an optional reference.',
      '<b>Detection radius</b> — the trigger tolerance for a gate.',
    ]},
    { h: '3. Set up a circuit', p: ['In ⚙ Settings, in this order:'], ul: [
      '<b>TRACK</b> — pick the circuit (gates belong to the active track profile).',
      'Set the <b>gates</b> (see next section).',
      'Optional <b>PIT BOX (STOP)</b> — where you stop.',
      '<b>TIMING</b> — Minimum Pit Time, Pit-to-Exit, Detection Radius (~12–15 m for line gates), Adaptive guidance.',
      '<b>PIT SPEED ALARM</b> — enable and set the limit.',
      'Press <b>✓</b> to save. Leaving with ← without saving discards changes.',
    ]},
    { h: '4. Setting the gates — 3 ways', p: [
      '<b>Gate types:</b> a <b>point gate</b> triggers on a circle (the radius works in every direction → a big radius can catch the main straight). A <b>line gate</b> has a point <b>+ direction</b>: it triggers on the line crossing at any speed and the radius is only the <b>sideways tolerance</b> → keep it small (12–15 m). <b>Line gates are best.</b>',
      '<b>A) Calibration Drive</b> (on track, moving): Settings → Calibration Drive → Start. Tap at entry → START at the box → tap at exit. Captures both line gates and the pit-to-exit time.',
      '<b>B) Paste LINE — 2 points</b> (from home, Google Maps): paste the two edges of the lane on the timing line; PitPace builds the line (midpoint) and direction (perpendicular). Look for “Line gate — heading X°”.',
      '<b>C) Use Current GPS / Paste point</b>: a single point (point gate). Quicker but less precise at speed — keep the point on your real path.',
    ]},
    { h: '5. Modes', ul: [
      '<b>Automatic (GPS)</b> — PIT WALL MODE off. GPS detects entry/exit itself.',
      '<b>Pit Wall (manual)</b> — PIT WALL MODE on. Big START / MARK BOX / MARK EXIT buttons; the engineer drives the timer by hand (phone on the wall).',
      '<b>Volume buttons</b> (always on) — one press = the next marker: entry → box → exit. Eyes-up, glove-friendly; it does not change the volume.',
    ]},
    { h: '6. During the stop', ul: [
      '<b>RELEASE IN → CROSS IN</b> — the big countdown switches from “when to release the car” to “when it’s legal to cross”.',
      '<b>EASE</b> (red) = you’d arrive early, lift · <b>PUSH</b> (yellow) = you’re late, accelerate · <b>ON PACE / HOLD</b> = right pace, don’t cross yet · <b>CROSS</b> (blue, pulsing) = clear to cross (only from the legal minimum).',
      '<b>BOX ✓</b> appears when the box stop is marked (manual or automatic).',
      '<b>Speed alarm</b> — red flash + tone + vibration over the pit limit.',
    ]},
    { h: '7. Tools', ul: [
      '<b>GPS DIAGNOSTICS</b> — live distance to each gate, accuracy, heading, speed + a crossing log. Use it on track to confirm gates fire.',
      '<b>HISTORY</b> — pit-stop history + CSV export.',
      '<b>TRACK Export / Import</b> — move profiles between phones.',
      '<b>DIAGNOSTICS</b> — on-device error log, exportable to report issues.',
      '<b>UNITS</b> — km/h ⇄ mph. <b>POWER SAVING</b> — sleep the screen when parked.',
    ]},
    { h: '8. PitPace Pro', p: [
      '<b>Free:</b> core timer, 1 track, volume markers, history, units, background GPS.',
      '<b>Pro:</b> adaptive EASE/PUSH guidance, speed alarm, multiple tracks + import/export, history CSV, GPS diagnostics.',
    ]},
    { h: '9. Practical tips', ul: [
      'Prefer <b>line gates</b> (Calibration or Paste LINE 2 points): small radius, no risk of catching the straight, and they fire at any speed.',
      'Phone GPS runs at ~1 fix/second: at 60 km/h that’s ~17 m between fixes — which is why line gates matter.',
      'Set Minimum Pit Time to the official regulation value.',
      'Before the weekend: set the gates from home with Paste LINE 2 points; on track verify with GPS DIAGNOSTICS and keep the volume buttons as a backup.',
    ]},
  ],
  it: [
    { h: '1. Primo avvio', p: [
      'Apri PitPace e accetta il <b>disclaimer di sicurezza</b> (una volta).',
      'Concedi il permesso <b>Posizione</b>. Per il rilevamento a schermo spento scegli <b>“Consenti sempre”</b> (Android 11+: Impostazioni telefono → App → PitPace → Autorizzazioni → Posizione).',
      'Segui il tutorial iniziale (rivedibile da Impostazioni → ABOUT &amp; SAFETY).',
    ]},
    { h: '2. Concetti chiave', ul: [
      '<b>Gate ingresso / uscita</b> — le due linee della pit lane. Il cronometro parte all’ingresso e si chiude all’uscita.',
      '<b>Tempo minimo</b> — il minimo regolamentare sull’intero transito ingresso→uscita.',
      '<b>Pit-to-exit</b> — secondi dal box alla linea d’uscita; determina quando rilasciare l’auto (rilascio = minimo − pit-to-exit).',
      '<b>Punto box (stop)</b> — dove l’auto si ferma; riferimento opzionale.',
      '<b>Raggio di rilevamento</b> — la tolleranza per far scattare un gate.',
    ]},
    { h: '3. Impostare un circuito', p: ['In ⚙ Impostazioni, in questo ordine:'], ul: [
      '<b>TRACK</b> — scegli il circuito (i gate appartengono al profilo attivo).',
      'Imposta i <b>gate</b> (vedi sezione successiva).',
      '<b>PIT BOX (STOP)</b> opzionale — dove ti fermi.',
      '<b>TIMING</b> — Tempo minimo, Pit-to-Exit, Raggio (~12–15 m per i gate-linea), Guida adattiva.',
      '<b>PIT SPEED ALARM</b> — attiva e imposta il limite.',
      'Premi <b>✓</b> per salvare. Uscendo con ← senza salvare le modifiche si perdono.',
    ]},
    { h: '4. Impostare i gate — 3 modi', p: [
      '<b>Tipi di gate:</b> il <b>gate-punto</b> scatta su un cerchio (il raggio vale in ogni direzione → un raggio grande può prendere il rettilineo). Il <b>gate-linea</b> ha punto <b>+ direzione</b>: scatta sul taglio della linea a qualsiasi velocità e il raggio è solo la <b>tolleranza laterale</b> → tienilo piccolo (12–15 m). <b>I gate-linea sono i migliori.</b>',
      '<b>A) Calibration Drive</b> (in pista, in movimento): Impostazioni → Calibration Drive → Start. Tap all’ingresso → START al box → tap all’uscita. Cattura i due gate-linea e il pit-to-exit.',
      '<b>B) Paste LINE — 2 punti</b> (da casa, Google Maps): incolla i due bordi della corsia sulla linea di cronometraggio; PitPace crea la linea (punto medio) e la direzione (perpendicolare). Cerca “Line gate — heading X°”.',
      '<b>C) Use Current GPS / Paste point</b>: un solo punto (gate-punto). Più rapido ma meno preciso ad alta velocità — tieni il punto sulla traiettoria reale.',
    ]},
    { h: '5. Modalità', ul: [
      '<b>Automatica (GPS)</b> — PIT WALL MODE spento. Il GPS rileva da solo ingresso/uscita.',
      '<b>Pit Wall (manuale)</b> — PIT WALL MODE acceso. Pulsanti grandi START / MARK BOX / MARK EXIT; l’ingegnere guida il timer a mano (telefono sul muretto).',
      '<b>Tasti volume</b> (sempre attivi) — una pressione = il marker successivo: ingresso → box → uscita. Occhi sulla pista, con i guanti; non cambia il volume.',
    ]},
    { h: '6. Durante la sosta', ul: [
      '<b>RELEASE IN → CROSS IN</b> — il countdown passa da “quando rilasciare l’auto” a “quando è legale tagliare”.',
      '<b>EASE</b> (rosso) = arriveresti in anticipo, alleggerisci · <b>PUSH</b> (giallo) = sei in ritardo, accelera · <b>ON PACE / HOLD</b> = passo giusto, non tagliare ancora · <b>CROSS</b> (blu, pulsante) = puoi tagliare (solo dal minimo legale).',
      '<b>BOX ✓</b> compare quando la sosta è marcata (manuale o automatica).',
      '<b>Speed alarm</b> — lampeggio rosso + tono + vibrazione oltre il limite.',
    ]},
    { h: '7. Strumenti', ul: [
      '<b>GPS DIAGNOSTICS</b> — distanza live dai gate, accuratezza, heading, velocità + log attraversamenti. In pista verifica che i gate scattino.',
      '<b>HISTORY</b> — storico soste + export CSV.',
      '<b>TRACK Export / Import</b> — sposta i profili tra telefoni.',
      '<b>DIAGNOSTICS</b> — log errori on-device, esportabile per segnalare problemi.',
      '<b>UNITS</b> — km/h ⇄ mph. <b>POWER SAVING</b> — spegne lo schermo da fermo.',
    ]},
    { h: '8. PitPace Pro', p: [
      '<b>Gratis:</b> timer core, 1 tracciato, marker volume, storico, unità, GPS background.',
      '<b>Pro:</b> guida adattiva EASE/PUSH, speed alarm, tracciati multipli + import/export, export CSV, diagnostica GPS.',
    ]},
    { h: '9. Consigli pratici', ul: [
      'Preferisci i <b>gate-linea</b> (Calibration o Paste LINE 2 punti): raggio piccolo, niente rischio rettilineo, scattano a qualsiasi velocità.',
      'Il GPS del telefono va a ~1 fix/secondo: a 60 km/h sono ~17 m tra un fix e l’altro — per questo i gate-linea contano.',
      'Imposta il Tempo minimo uguale al valore di regolamento.',
      'Prima del weekend: imposta i gate da casa con Paste LINE 2 punti; in pista verifica con GPS DIAGNOSTICS e tieni i tasti volume come riserva.',
    ]},
  ],
};

const FAQ = {
  en: [
    { q: 'PitPace doesn’t detect entry or exit. Why?', a: 'Most common causes: (1) a <b>point gate at speed</b> — at ~1 fix/s, 60 km/h means ~17 m between fixes, so no fix lands near the gate → use a <b>line gate</b>; (2) the <b>wrong track</b> is active (check TRACK); (3) not <b>saved</b> (press ✓); (4) <b>location permission</b> not granted; (5) radius too tight or gate off your real path. Use GPS DIAGNOSTICS to watch distances and the crossing log.' },
    { q: 'Can I increase the GPS refresh rate?', a: 'No. Phone GPS runs at ~1 Hz and that can’t be raised (browser or native — it’s a chip/OS limit). PitPace always uses fresh fixes and compensates with segment-based crossing and line gates.' },
    { q: 'With a big radius, will it catch the main straight as the pit lane?', a: 'With <b>point gates</b>: yes (the radius is a circle). With <b>line gates</b>: no — there the radius is only the sideways tolerance and the crossing is detected by direction. So use line gates and keep the radius small (12–15 m).' },
    { q: 'Line gate vs point gate?', a: '<b>Point gate</b>: one point, circular (omnidirectional) detection. <b>Line gate</b>: point + direction; fires on the line crossing at any speed and the radius limits only the lateral offset. More precise and reliable.' },
    { q: 'How do I set line gates from home, without going to the track?', a: 'Use <b>Paste LINE — 2 points</b>: paste from Google Maps the two edges of the lane on the timing line; PitPace builds the line (midpoint) and direction (perpendicular).' },
    { q: 'What do EASE / PUSH / ON PACE / CROSS mean?', a: 'On the way out: <b>EASE</b> = you’d arrive early, lift; <b>PUSH</b> = you’re late, accelerate; <b>ON PACE/HOLD</b> = right pace but don’t cross yet; <b>CROSS</b> (blue, pulsing) = it’s now legal to cross. You never see a green “go” before the minimum.' },
    { q: 'What are “Minimum Pit Time” and “Pit-to-Exit Time”?', a: '<b>Minimum Pit Time</b> = the regulation minimum over the whole entry→exit transit. <b>Pit-to-Exit Time</b> = seconds from the box to the exit line; used to compute when to release the car (release = minimum − pit-to-exit) so you cross right on the minimum.' },
    { q: 'Does it work with the screen off / in the background?', a: 'Yes: PitPace uses <b>background GPS</b> with a persistent notification (“GPS active”). It needs the <b>“Allow all the time”</b> location permission. On some phones you may need to exclude PitPace from battery optimization.' },
    { q: 'The volume buttons don’t change the volume?', a: 'Correct — while the app is open the volume keys are used as <b>markers</b> (entry → box → exit) and don’t change the system volume.' },
    { q: 'I press volume down and nothing happens.', a: 'Up and down do the <b>same</b> action (the next marker). If you don’t feel the short confirmation buzz, press again at the right point in the flow; volume up alone is enough for everything.' },
    { q: 'Do I need internet? Where does my data go?', a: '<b>No internet</b> — PitPace works fully offline. <b>No account, no cloud, no tracking.</b> Settings, tracks, history and logs stay <b>on your phone</b> and are deleted by clearing the app data or uninstalling.' },
    { q: 'How do I mark the box stop?', a: 'Automatically (car stationary ~2 s near the box) or by hand: the <b>2nd</b> volume press, or the MARK BOX button in pit-wall mode. The BOX ✓ badge appears.' },
    { q: 'km/h or mph?', a: 'Both: Settings → UNITS. It only changes the display; internally everything is km/h.' },
    { q: 'What’s free and what’s PitPace Pro?', a: '<b>Free:</b> core timer, 1 track, volume markers, history, units, background GPS. <b>Pro:</b> adaptive guidance, speed alarm, multiple tracks + import/export, history CSV, GPS diagnostics.' },
    { q: 'Is there an iPhone version?', a: 'Coming soon. For now Android is available. (There is also a separate browser/PWA version, without the volume buttons and background GPS.)' },
    { q: 'Something went wrong — how do I report it?', a: 'Settings → DIAGNOSTICS → Export error log, and send the file to am@andreamaselli.com.' },
  ],
  it: [
    { q: 'PitPace non rileva l’ingresso o l’uscita. Perché?', a: 'Cause più comuni: (1) <b>gate-punto a velocità</b> — a ~1 fix/s, 60 km/h sono ~17 m tra un fix e l’altro, nessun fix cade vicino al gate → usa un <b>gate-linea</b>; (2) <b>tracciato sbagliato</b> attivo (controlla TRACK); (3) non <b>salvato</b> (premi ✓); (4) <b>permesso GPS</b> non concesso; (5) raggio troppo stretto o gate fuori dalla traiettoria reale. Usa GPS DIAGNOSTICS per vedere distanze e log degli attraversamenti.' },
    { q: 'Posso aumentare la frequenza del GPS?', a: 'No. Il GPS dei telefoni va a ~1 Hz e non è aumentabile (browser o nativo — è un limite del chip/OS). PitPace usa sempre fix freschi e compensa col rilevamento sul segmento e coi gate-linea.' },
    { q: 'Con un raggio grande rischio di prendere il rettilineo come pit lane?', a: 'Coi <b>gate-punto</b>: sì (il raggio è un cerchio). Coi <b>gate-linea</b>: no — lì il raggio è solo la tolleranza laterale e il taglio si rileva sulla direzione. Quindi usa i gate-linea e tieni il raggio piccolo (12–15 m).' },
    { q: 'Differenza tra gate-linea e gate-punto?', a: '<b>Gate-punto</b>: un solo punto, rilevamento a cerchio (omnidirezionale). <b>Gate-linea</b>: punto + direzione; scatta sul taglio della linea a qualsiasi velocità e il raggio limita solo lo scostamento laterale. Più preciso e affidabile.' },
    { q: 'Come imposto i gate-linea da casa, senza andare in pista?', a: 'Usa <b>Paste LINE — 2 punti</b>: incolli da Google Maps i due bordi della corsia sulla linea di cronometraggio; PitPace crea la linea (punto medio) e la direzione (perpendicolare).' },
    { q: 'Cosa significano EASE / PUSH / ON PACE / CROSS?', a: 'In uscita: <b>EASE</b> = arriveresti in anticipo, alleggerisci; <b>PUSH</b> = sei in ritardo, accelera; <b>ON PACE/HOLD</b> = passo giusto ma non tagliare ancora; <b>CROSS</b> (blu, pulsante) = ora è legale tagliare. Prima del minimo non vedrai mai un verde “via libera”.' },
    { q: 'Cosa sono “Minimum Pit Time” e “Pit-to-Exit Time”?', a: '<b>Minimum Pit Time</b> = il minimo regolamentare sull’intero transito ingresso→uscita. <b>Pit-to-Exit Time</b> = i secondi dal box alla linea d’uscita; servono a calcolare quando rilasciare l’auto (rilascio = minimo − pit-to-exit) così tagli sul minimo.' },
    { q: 'Funziona a schermo spento / in background?', a: 'Sì: PitPace usa il <b>GPS in background</b> con una notifica persistente (“GPS active”). Richiede il permesso posizione <b>“Consenti sempre”</b>. Su alcuni telefoni può servire escludere PitPace dall’ottimizzazione batteria.' },
    { q: 'I tasti volume non cambiano il volume?', a: 'Corretto — mentre l’app è aperta i tasti volume sono usati come <b>marcatori</b> (ingresso → box → uscita) e non modificano il volume di sistema.' },
    { q: 'Premo volume giù e non succede nulla.', a: 'Su e giù fanno la <b>stessa</b> azione (il marker successivo). Se non senti la breve vibrazione di conferma, premi di nuovo nel momento giusto del flusso; volume su da solo basta per tutto.' },
    { q: 'Serve internet? Dove finiscono i miei dati?', a: '<b>Niente internet</b> — PitPace funziona totalmente offline. <b>Niente account, niente cloud, niente tracciamento.</b> Impostazioni, tracciati, storico e log restano <b>sul telefono</b> e si cancellano svuotando i dati dell’app o disinstallandola.' },
    { q: 'Come marco la sosta al box?', a: 'In automatico (auto ferma ~2 s vicino al box) o a mano: la <b>2ª</b> pressione del tasto volume, o il pulsante MARK BOX in pit-wall. Compare il badge BOX ✓.' },
    { q: 'km/h o mph?', a: 'Entrambi: Impostazioni → UNITS. Cambia solo la visualizzazione; internamente è sempre km/h.' },
    { q: 'Cosa è gratis e cosa è PitPace Pro?', a: '<b>Gratis:</b> timer core, 1 tracciato, marker volume, storico, unità, GPS background. <b>Pro:</b> guida adattiva, speed alarm, tracciati multipli + import/export, export CSV, diagnostica GPS.' },
    { q: 'Esiste la versione iPhone?', a: 'In arrivo. Per ora è disponibile Android. (Esiste anche una versione browser/PWA separata, senza i tasti volume e il GPS in background.)' },
    { q: 'Qualcosa è andato storto: come segnalo un bug?', a: 'Impostazioni → DIAGNOSTICS → Export error log, e invia il file a am@andreamaselli.com.' },
  ],
};

function renderGuide(el, lang) {
  const data = GUIDE[lang] || GUIDE.en;
  el.innerHTML = data.map(s => {
    let h = `<h2>${s.h}</h2>`;
    if (s.p)  h += s.p.map(x => `<p>${x}</p>`).join('');
    if (s.ul) h += '<ul>' + s.ul.map(x => `<li>${x}</li>`).join('') + '</ul>';
    return h;
  }).join('');
}

function renderFaq(el, lang, limit) {
  const data = (FAQ[lang] || FAQ.en).slice(0, limit || undefined);
  el.innerHTML = data.map(item =>
    `<details class="faq-item"><summary>${item.q}</summary><div class="faq-a">${item.a}</div></details>`
  ).join('');
}

/** Inject/refresh FAQPage structured data (Schema.org JSON-LD) for the language. */
function injectFaqSchema(lang, limit) {
  const data = (FAQ[lang] || FAQ.en).slice(0, limit || undefined);
  const strip = s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.map(it => ({
      '@type': 'Question',
      name: strip(it.q),
      acceptedAnswer: { '@type': 'Answer', text: strip(it.a) },
    })),
  };
  let el = document.getElementById('faq-schema');
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'faq-schema';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(json);
}
