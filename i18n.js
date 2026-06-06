/* PitPace site — minimal i18n. Elements carry data-i18n (textContent) or
   data-i18n-html (innerHTML). Language: saved choice → browser → 'en'. */
const I18N = {
  en: {
    'meta.title': 'PitPace — GPS pit-lane timer for motorsport',
    'meta.desc': 'PitPace times your pit stop by GPS and tells you, live, when to ease or push so you cross the exit line exactly on the regulation minimum. Nail the line.',
    'soon': 'Coming soon',
    'eyebrow': 'GPS PIT-LANE TIMER · MOTORSPORT',
    'h1': 'Nail the line.',
    'lede': 'PitPace times your pit stop by GPS and tells you, live, whether to <b>ease</b> or <b>push</b> — so you cross the exit line exactly on the regulation minimum. No time lost. No penalty for leaving early.',
    'cta.soon': '▶ Coming soon on Google Play',
    'cta.beta': 'Join the beta',
    'feat.title': 'Built for the pit lane',
    'f1.h': 'Entry → exit timing',
    'f1.p': 'Detects the pit-entry and pit-exit lines by GPS and counts you down to the exact legal moment to cross.',
    'f2.h': 'Adaptive guidance',
    'f2.p': 'EASE / PUSH / ON PACE — live pace coaching so you hit the line bang on the minimum.',
    'f3.h': 'Volume-button marking',
    'f3.p': "Mark entry, box stop and exit with the phone's volume buttons. Eyes-up, glove-friendly — no touchscreen.",
    'f4.h': 'Pit speed alarm',
    'f4.p': 'Flashing warning, alarm tone and vibration if you break the pit-lane limit. Max speed logged.',
    'f5.h': 'Background GPS',
    'f5.p': 'Detects pit entry even with the screen off, so you never miss a stop.',
    'f6.h': 'Private by design',
    'f6.p': 'Runs entirely on your phone. No account, no cloud, no tracking, no ads.',
    'steps.title': 'Three steps to a clean stop',
    's1.h': 'Set your pit lane',
    's1.p': 'Calibrate by driving through once, or drop pins for the entry & exit lines. Save a profile per circuit.',
    's2.h': 'Run your stop',
    's2.p': 'PitPace times entry → exit and guides your pace to the line as you drive out.',
    's3.h': 'Nail the line',
    's3.p': 'Cross exactly on the minimum — consistent, penalty-free stops, every time.',
    'strip': '🔒 <b>Private by design.</b> PitPace works fully offline on your phone — no account, no cloud, no tracking. Your location is used only on-device for timing.',
    'cta2.h': 'Get PitPace',
    'cta2.p': 'Launching soon on Google Play. Want early access?',
    'cta2.btn': 'Join the beta →',
    'foot.privacy': 'Privacy',
    'foot.contact': 'Contact',
    'foot.copy': 'Acme Speedworks Srl · PitPace is a driver/engineer aid, not a certified timing device.',
    // Privacy page
    'pv.title': 'Privacy Policy',
    'pv.sub': 'Last updated: 2026-06-06 · App: PitPace (Android) · Publisher: Acme Speedworks Srl · Contact: <a href="mailto:am@andreamaselli.com">am@andreamaselli.com</a>',
    'pv.summaryH': 'Summary',
    'pv.summary': 'PitPace runs <b>entirely on your phone</b>. It has <b>no servers, no account, and no cloud</b>. We <b>do not collect, transmit, sell, or share any of your data</b>. Your settings, track profiles, pit-stop history and error log stay <b>on your device</b> and are deleted when you clear the app data or uninstall it. PitPace contains <b>no ads and no third-party analytics or tracking</b>.',
    'pv.1H': '1. Information we process (on your device only)',
    'pv.1': '<li><b>Location (GPS):</b> used in real time to detect crossing the pit-entry / pit-exit lines, to measure speed, and to time the pit stop. With your permission it also runs <b>in the background</b> (with an ongoing notification) to detect pit entry when the screen is off. Your location is <b>never sent off the device</b> and is not stored as a history of where you have been.</li><li><b>App settings &amp; track profiles, pit-stop history, error log:</b> saved in local storage on the device.</li>',
    'pv.1b': 'We do <b>not</b> collect names, emails, contacts, identifiers, advertising IDs, or analytics.',
    'pv.2H': '2. How we use it',
    'pv.2': "Solely to provide the app's functionality (pit-lane timing, gate detection, speed alarm, guidance, diagnostics) on your device. There is no other use.",
    'pv.3H': '3. Sharing',
    'pv.3': 'We do <b>not</b> share your information with anyone. There are no third-party services, ad networks or analytics providers in the app. If you manually export your data and send the file to someone, that transfer is initiated and controlled by you.',
    'pv.4H': '4. Storage & retention',
    'pv.4': "All data is stored locally and persists until you clear the app's data/storage or uninstall the app, which deletes it. We hold no copy.",
    'pv.5H': '5. Permissions',
    'pv.5': '<li><b>Location (precise/approximate, incl. background):</b> to detect the pit-lane gates and time the stop, including with the screen off. Required for the core function.</li><li><b>Foreground service &amp; notifications:</b> to keep GPS active and show the ongoing notification while timing in the background (Android requirement).</li>',
    'pv.5b': 'You can revoke location permission anytime in Android Settings; the GPS features will then stop working.',
    'pv.6H': '6. Children',
    'pv.6': "PitPace is a motorsport tool not directed at children and does not knowingly process children's data.",
    'pv.7H': '7. Your rights',
    'pv.7': 'Because all data stays on your device and we hold none, you are in full control: view it in the app, export it, or delete it by clearing app data / uninstalling. Questions: <a href="mailto:am@andreamaselli.com">am@andreamaselli.com</a>.',
    'pv.8H': '8. Changes',
    'pv.8': 'We may update this policy; the "Last updated" date will change. Material changes are noted in the app\'s release notes.',
    'pv.9H': '9. Safety notice',
    'pv.9': 'PitPace is a driver/engineer aid, <b>not a certified timing device</b>. Do not operate the screen while driving; use the volume-button markers or have a co-driver / pit-wall engineer operate it.',
    'pv.back': '← Back to PitPace',
  },
  it: {
    'meta.title': 'PitPace — Cronometro GPS della pit lane per il motorsport',
    'meta.desc': "PitPace cronometra la sosta ai box con il GPS e ti dice, in tempo reale, quando alleggerire o spingere per tagliare la linea d'uscita esattamente sul minimo regolamentare. Taglia al millesimo.",
    'soon': 'In arrivo',
    'eyebrow': 'CRONOMETRO PIT-LANE GPS · MOTORSPORT',
    'h1': 'Taglia al millesimo.',
    'lede': "PitPace cronometra la sosta ai box con il GPS e ti dice, in tempo reale, se <b>alleggerire</b> o <b>spingere</b> — così tagli la linea d'uscita esattamente sul minimo regolamentare. Niente tempo perso. Nessuna penalità per un'uscita anticipata.",
    'cta.soon': '▶ Presto su Google Play',
    'cta.beta': 'Partecipa alla beta',
    'feat.title': 'Fatto per la pit lane',
    'f1.h': 'Cronometro ingresso → uscita',
    'f1.p': "Rileva via GPS le linee di ingresso e uscita dai box e ti conta alla rovescia fino all'esatto momento legale per tagliare.",
    'f2.h': 'Guida adattiva',
    'f2.p': 'EASE / PUSH / ON PACE — coaching del passo in tempo reale per centrare la linea esattamente sul minimo.',
    'f3.h': 'Marcatura con i tasti volume',
    'f3.p': 'Marca ingresso, sosta al box e uscita con i tasti volume del telefono. Occhi sulla pista, con i guanti — niente touchscreen.',
    'f4.h': 'Allarme velocità pit',
    'f4.p': "Avviso lampeggiante, tono d'allarme e vibrazione se superi il limite della pit lane. Velocità massima registrata.",
    'f5.h': 'GPS in background',
    'f5.p': "Rileva l'ingresso ai box anche a schermo spento, così non perdi mai una sosta.",
    'f6.h': 'Privacy by design',
    'f6.p': 'Gira interamente sul telefono. Niente account, niente cloud, niente tracciamento, niente pubblicità.',
    'steps.title': 'Tre passi per una sosta pulita',
    's1.h': 'Imposta la tua pit lane',
    's1.p': "Calibra percorrendola una volta, o posiziona i pin per le linee di ingresso e uscita. Salva un profilo per ogni circuito.",
    's2.h': 'Esegui la sosta',
    's2.p': 'PitPace cronometra ingresso → uscita e guida il tuo passo verso la linea mentre esci.',
    's3.h': 'Taglia al millesimo',
    's3.p': 'Taglia esattamente sul minimo — soste costanti e senza penalità, ogni volta.',
    'strip': '🔒 <b>Privacy by design.</b> PitPace funziona totalmente offline sul telefono — niente account, niente cloud, niente tracciamento. La posizione è usata solo sul dispositivo per il cronometraggio.',
    'cta2.h': 'Scarica PitPace',
    'cta2.p': 'In arrivo su Google Play. Vuoi l\'accesso anticipato?',
    'cta2.btn': 'Partecipa alla beta →',
    'foot.privacy': 'Privacy',
    'foot.contact': 'Contatti',
    'foot.copy': 'Acme Speedworks Srl · PitPace è un ausilio per pilota/ingegnere, non uno strumento di cronometraggio certificato.',
    // Privacy page
    'pv.title': 'Informativa sulla privacy',
    'pv.sub': 'Ultimo aggiornamento: 2026-06-06 · App: PitPace (Android) · Titolare: Acme Speedworks Srl · Contatto: <a href="mailto:am@andreamaselli.com">am@andreamaselli.com</a>',
    'pv.summaryH': 'In breve',
    'pv.summary': 'PitPace gira <b>interamente sul tuo telefono</b>. Non ha <b>server, account né cloud</b>. <b>Non raccogliamo, trasmettiamo, vendiamo né condividiamo alcun tuo dato</b>. Impostazioni, profili tracciato, storico soste e log errori restano <b>sul dispositivo</b> e vengono cancellati svuotando i dati dell\'app o disinstallandola. PitPace non contiene <b>pubblicità né analytics o tracciamento di terze parti</b>.',
    'pv.1H': '1. Dati trattati (solo sul dispositivo)',
    'pv.1': "<li><b>Posizione (GPS):</b> usata in tempo reale per rilevare l'attraversamento delle linee di ingresso/uscita, misurare la velocità e cronometrare la sosta. Con il tuo permesso funziona anche <b>in background</b> (con notifica persistente) per rilevare l'ingresso a schermo spento. La posizione <b>non lascia mai il dispositivo</b> e non viene memorizzata come cronologia degli spostamenti.</li><li><b>Impostazioni e profili tracciato, storico soste, log errori:</b> salvati nella memoria locale del dispositivo.</li>",
    'pv.1b': 'Non raccogliamo <b>nomi, email, contatti, identificativi, ID pubblicitari o analytics</b>.',
    'pv.2H': '2. Come li usiamo',
    'pv.2': "Esclusivamente per far funzionare l'app (cronometraggio pit-lane, rilevamento gate, allarme velocità, guida, diagnostica) sul tuo dispositivo. Nessun altro uso.",
    'pv.3H': '3. Condivisione',
    'pv.3': 'Non <b>condividiamo</b> i tuoi dati con nessuno. Nell\'app non ci sono servizi di terze parti, reti pubblicitarie o analytics. Se esporti manualmente i tuoi dati e invii il file a qualcuno, quel trasferimento è avviato e controllato da te.',
    'pv.4H': '4. Conservazione',
    'pv.4': "Tutti i dati sono memorizzati localmente e restano finché non svuoti i dati dell'app o la disinstalli, operazione che li elimina. Noi non ne conserviamo copia.",
    'pv.5H': '5. Permessi',
    'pv.5': '<li><b>Posizione (precisa/approssimata, incl. background):</b> per rilevare i gate della pit lane e cronometrare la sosta, anche a schermo spento. Necessaria per la funzione principale.</li><li><b>Servizio in primo piano e notifiche:</b> per tenere attivo il GPS e mostrare la notifica persistente durante il cronometraggio in background (requisito Android).</li>',
    'pv.5b': 'Puoi revocare il permesso di posizione in qualsiasi momento dalle Impostazioni Android; le funzioni GPS smetteranno di funzionare.',
    'pv.6H': '6. Minori',
    'pv.6': 'PitPace è uno strumento per il motorsport non rivolto ai minori e non tratta consapevolmente dati di minori.',
    'pv.7H': '7. I tuoi diritti',
    'pv.7': 'Poiché tutti i dati restano sul tuo dispositivo e noi non ne deteniamo, hai il pieno controllo: li vedi nell\'app, li esporti o li elimini svuotando i dati / disinstallando. Domande: <a href="mailto:am@andreamaselli.com">am@andreamaselli.com</a>.',
    'pv.8H': '8. Modifiche',
    'pv.8': 'Potremmo aggiornare questa informativa; la data di "Ultimo aggiornamento" cambierà. Le modifiche rilevanti sono indicate nelle note di rilascio dell\'app.',
    'pv.9H': '9. Avviso di sicurezza',
    'pv.9': 'PitPace è un ausilio per pilota/ingegnere, <b>non uno strumento di cronometraggio certificato</b>. Non usare lo schermo durante la guida; usa i marcatori con i tasti volume o fai operare un co-pilota / ingegnere al muretto.',
    'pv.back': '← Torna a PitPace',
  },
};

function setLang(lang) {
  lang = (lang === 'it') ? 'it' : 'en';
  const d = I18N[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n'); if (d[k] != null) el.textContent = d[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html'); if (d[k] != null) el.innerHTML = d[k];
  });
  if (d['meta.title']) document.title = d['meta.title'];
  const md = document.querySelector('meta[name="description"]');
  if (md && d['meta.desc']) md.setAttribute('content', d['meta.desc']);
  document.querySelectorAll('[data-lang]').forEach(b =>
    b.classList.toggle('on', b.getAttribute('data-lang') === lang));
  try { localStorage.setItem('pp_lang', lang); } catch (_) {}
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-lang]').forEach(b =>
    b.addEventListener('click', () => setLang(b.getAttribute('data-lang'))));
  let lang = null;
  try { lang = localStorage.getItem('pp_lang'); } catch (_) {}
  if (!lang) lang = (navigator.language || 'en').toLowerCase().startsWith('it') ? 'it' : 'en';
  setLang(lang);
});
