import { useEffect, useMemo, useRef, useState } from "react";
import { mantras } from "./mantras.js";

function Chip({ id, label, sublabel, labelClassName, openChipId, setOpenChipId, children }) {
  const isOpen = openChipId === id;
  const popupRef = useRef(null);
  const [shift, setShift] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setShift(0);
      return;
    }
    const popup = popupRef.current;
    if (!popup) return;
    const margin = 12;
    const rect = popup.getBoundingClientRect();
    let next = 0;
    if (rect.left < margin) {
      next = margin - rect.left;
    } else if (rect.right > window.innerWidth - margin) {
      next = window.innerWidth - margin - rect.right;
    }
    setShift(next);
  }, [isOpen]);

  return (
    <div className="chip-wrap">
      <button
        type="button"
        className={"chip" + (isOpen ? " chip-active" : "")}
        aria-expanded={isOpen}
        onClick={() => setOpenChipId(isOpen ? null : id)}
      >
        <span className={"chip-label" + (labelClassName ? ` ${labelClassName}` : "")}>
          {label}
        </span>
        {sublabel && <span className="chip-sublabel">{sublabel}</span>}
      </button>
      {isOpen && (
        <div
          ref={popupRef}
          className="chip-popup"
          style={{ "--shift": `${shift}px` }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function VerseLine({ id, script, translit, scriptClassName, gloss, note, showPhonetics, showTranslation, openChipId, setOpenChipId }) {
  const isOpen = openChipId === id;
  return (
    <div className="verse-line-wrap">
      <button
        type="button"
        className={"verse-line" + (isOpen ? " verse-line-active" : "")}
        aria-expanded={isOpen}
        onClick={() => setOpenChipId(isOpen ? null : id)}
      >
        <span className={`verse-script ${scriptClassName}`}>{script}</span>
        {showPhonetics && <span className="verse-phonetic">{translit}</span>}
        {showTranslation && gloss && <span className="verse-translation">{gloss}</span>}
      </button>
      {isOpen && (
        <div className="chip-popup verse-popup" onClick={(e) => e.stopPropagation()}>
          {gloss && <div className="popup-gloss">{gloss}</div>}
          <p className="popup-note">{note}</p>
        </div>
      )}
    </div>
  );
}

function SanskritSection({ sanskrit, sectionId, showPhonetics, showTranslation, openChipId, setOpenChipId }) {
  return (
    <section className="panel">
      <h2>Sanskrit</h2>
      {sanskrit.lines ? (
        <div className="verse-block">
          {sanskrit.lines.map((l, i) => (
            <VerseLine
              key={i}
              id={`${sectionId}-line-${i}`}
              script={l.script}
              translit={l.translit}
              scriptClassName="devanagari"
              gloss={l.gloss}
              note={l.note}
              showPhonetics={showPhonetics}
              showTranslation={showTranslation}
              openChipId={openChipId}
              setOpenChipId={setOpenChipId}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="script-line devanagari">{sanskrit.script}</div>
          {showPhonetics && <div className="translit-line">{sanskrit.transliteration}</div>}
          {showTranslation && <p className="translation">{sanskrit.translation}</p>}
        </>
      )}

      <h3>
        Words <span className="hint">(tap a word for phonetics, translation, sandhi &amp; grammar)</span>
      </h3>
      <div className="chip-row">
        {sanskrit.words.map((w, i) => (
          <Chip
            key={i}
            id={`${sectionId}-word-${i}`}
            label={w.word}
            openChipId={openChipId}
            setOpenChipId={setOpenChipId}
          >
            <div className="popup-gloss">{w.gloss}</div>
            <p className="popup-note">
              <strong>Phonetics:</strong> {w.word}
            </p>
            {w.note && (
              <p className="popup-note">
                <strong>Sandhi / formation:</strong> {w.note}
              </p>
            )}
            {w.grammar && (
              <p className="popup-note">
                <strong>Grammar:</strong> {w.grammar}
              </p>
            )}
          </Chip>
        ))}
      </div>
    </section>
  );
}

function TibetanSection({ tibetan, sectionId, showPhonetics, showTranslation, openChipId, setOpenChipId }) {
  return (
    <section className="panel">
      <h2>Tibetan</h2>
      {tibetan.lines ? (
        <div className="verse-block">
          {tibetan.lines.map((l, i) => (
            <VerseLine
              key={i}
              id={`${sectionId}-line-${i}`}
              script={l.script}
              translit={l.translit}
              scriptClassName="tibetan-script"
              gloss={l.gloss}
              note={l.note}
              showPhonetics={showPhonetics}
              showTranslation={showTranslation}
              openChipId={openChipId}
              setOpenChipId={setOpenChipId}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="script-line tibetan-script">{tibetan.script}</div>
          {showPhonetics && (
            <div className="translit-line">
              Wylie: {tibetan.wylie}
              <br />
              Pronounced: {tibetan.phonetic}
            </div>
          )}
          {showTranslation && <p className="translation">{tibetan.translation}</p>}
        </>
      )}

      <div className={`script-type-badge ${tibetan.scriptType}`}>
        {tibetan.scriptType === "sanskrit-in-tibetan"
          ? "Sanskrit spelled in Tibetan script"
          : "Native Tibetan"}
      </div>
      <p className="intro-note">{tibetan.intro}</p>

      <h3>
        Words <span className="hint">(tap a word for syllable-by-syllable phonetics, sound formation &amp; reading rules)</span>
      </h3>
      <div className="chip-row">
        {tibetan.words.map((w, i) => (
          <Chip
            key={i}
            id={`${sectionId}-word-${i}`}
            label={w.script}
            sublabel={w.phon}
            labelClassName="tib-script"
            openChipId={openChipId}
            setOpenChipId={setOpenChipId}
          >
            <div className="popup-gloss">{w.gloss}</div>
            <p className="popup-note">
              <strong>Phonetics:</strong> {w.wylie} — "{w.phon}"
            </p>
            {w.syllables.map((s, j) => (
              <p className="popup-note" key={j}>
                <strong>
                  {s.tib} ({s.wylie} — "{s.phon}"):
                </strong>{" "}
                {s.note}
              </p>
            ))}
          </Chip>
        ))}
      </div>

      <h3>How the syllables group into words</h3>
      <p className="word-grouping">{tibetan.wordGrouping}</p>
    </section>
  );
}

// Flatten each mantra into one entry per language it has (Sanskrit / Tibetan),
// so they can be selected separately.
const entries = mantras.flatMap((m) => {
  const out = [];
  if (m.sanskrit) {
    out.push({
      key: `${m.id}-sa`,
      lang: "sanskrit",
      title: m.tibetan ? `${m.title} (Sanskrit)` : m.title,
      mantra: m
    });
  }
  if (m.tibetan) {
    out.push({
      key: `${m.id}-ti`,
      lang: "tibetan",
      title: m.sanskrit ? `${m.title} (Tibetan)` : m.title,
      mantra: m
    });
  }
  return out;
});

export default function MantraExplorer() {
  const [query, setQuery] = useState("");
  const [selectedKey, setSelectedKey] = useState(entries[0].key);
  const [openChipId, setOpenChipId] = useState(null);
  const [showPhonetics, setShowPhonetics] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter((e) => {
      const m = e.mantra;
      const haystack = [
        e.title,
        m.deity,
        ...(m.tags || []),
        m.sanskrit?.transliteration,
        m.tibetan?.phonetic,
        m.tibetan?.wylie
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  const selected =
    filtered.find((e) => e.key === selectedKey) || filtered[0] || entries[0];

  // close any open popup when switching mantras
  useEffect(() => {
    setOpenChipId(null);
  }, [selected?.key]);

  // close popup when clicking outside a chip
  useEffect(() => {
    function handleDocumentClick(e) {
      if (!e.target.closest(".chip-wrap") && !e.target.closest(".verse-line-wrap")) {
        setOpenChipId(null);
      }
    }
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div
          className={"ornament" + (selected?.lang === "sanskrit" ? " ornament-sanskrit" : " ornament-tibetan")}
          aria-hidden="true"
        >
          {selected?.lang === "sanskrit" ? "ॐ" : "ༀ"}
        </div>
        <h1>Mantra Explorer</h1>
        <p className="subtitle">
          Tibetan &amp; Sanskrit mantras — script, transliteration, translation,
          and a syllable-by-syllable look at pronunciation and grammar.
        </p>
      </header>

      <div className="controls">
        <input
          className="search-box"
          type="text"
          placeholder="Search by name, deity, or sound (e.g. 'tara', 'compassion', 'hum')..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="mantra-select"
          value={selected.key}
          onChange={(e) => setSelectedKey(e.target.value)}
        >
          {filtered.map((e) => (
            <option key={e.key} value={e.key}>
              {e.title}
            </option>
          ))}
        </select>
        <label className="phonetics-toggle">
          <input
            type="checkbox"
            checked={showPhonetics}
            onChange={(e) => setShowPhonetics(e.target.checked)}
          />
          Show phonetics under script
        </label>
        <label className="phonetics-toggle">
          <input
            type="checkbox"
            checked={showTranslation}
            onChange={(e) => setShowTranslation(e.target.checked)}
          />
          Show translation under each line
        </label>
      </div>

      {filtered.length === 0 && (
        <p className="no-results">No mantras match "{query}".</p>
      )}

      {selected && (
        <main className="mantra-detail">
          <div className="mantra-title-block">
            <h2 className="mantra-title">{selected.title}</h2>
            <div className="mantra-deity">{selected.mantra.deity}</div>
            <div className="tags">
              {selected.mantra.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="panels">
            {selected.lang === "sanskrit" && (
              <SanskritSection
                sanskrit={selected.mantra.sanskrit}
                sectionId={selected.key}
                showPhonetics={showPhonetics}
                showTranslation={showTranslation}
                openChipId={openChipId}
                setOpenChipId={setOpenChipId}
              />
            )}
            {selected.lang === "tibetan" && (
              <TibetanSection
                tibetan={selected.mantra.tibetan}
                sectionId={selected.key}
                showPhonetics={showPhonetics}
                showTranslation={showTranslation}
                openChipId={openChipId}
                setOpenChipId={setOpenChipId}
              />
            )}
          </div>
        </main>
      )}

      <footer className="app-footer">
        <p>
          Notes: pronunciation follows common Central (Lhasa-tradition) Tibetan
          chanting conventions and standard IAST transliteration for Sanskrit;
          other lineages and dialects may pronounce these mantras somewhat
          differently. Grammatical analyses reflect common scholarly readings —
          mantric Sanskrit ("Buddhist Hybrid Sanskrit") is often looser than
          classical literary Sanskrit.
        </p>
      </footer>
    </div>
  );
}
