// Mantra Spiralizer: opens a self-contained page in a new window that draws the
// mantra text as a spiral on a canvas. Ported from ~/PROG/mantra_spiralizer; the
// text is prefilled from the selected entry and stays editable on that page.

const SPIRAL_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&family=Noto+Serif+Tibetan:wght@400;700&family=Tiro+Devanagari+Sanskrit&family=Amita&family=Jaini&family=Eczar&family=Yatra+One&family=Kalam&display=swap";

// Script that runs inside the spiral window. Kept as plain ES5 in a string so the
// page is independent of the app bundle.
const SPIRAL_SCRIPT = String.raw`
    var themes = {
      gold:      { bg:'#1a0e00', omColor:'#f5c842', textColor:'#f0e0a0', glowColor:'rgba(245,200,66,0.18)' },
      saffron:   { bg:'#1c0a00', omColor:'#ff7c2a', textColor:'#ffd0a0', glowColor:'rgba(255,124,42,0.18)' },
      ember:     { bg:'#120402', omColor:'#ff4a1f', textColor:'#ffb08a', glowColor:'rgba(255,74,31,0.20)' },
      crimson:   { bg:'#150004', omColor:'#ff6080', textColor:'#ffc0c8', glowColor:'rgba(255,80,100,0.18)' },
      lotus:     { bg:'#180612', omColor:'#ff8fc2', textColor:'#ffd1e6', glowColor:'rgba(255,143,194,0.18)' },
      amethyst:  { bg:'#12081f', omColor:'#c9a2ff', textColor:'#e2cdff', glowColor:'rgba(180,140,255,0.18)' },
      indigo:    { bg:'#080c20', omColor:'#a0b8ff', textColor:'#c8d8ff', glowColor:'rgba(120,160,255,0.18)' },
      turquoise: { bg:'#02121a', omColor:'#4fe3d2', textColor:'#b8f3ea', glowColor:'rgba(79,227,210,0.16)' },
      forest:    { bg:'#040e08', omColor:'#80e0a0', textColor:'#b0f0c0', glowColor:'rgba(80,200,100,0.15)' },
      moon:      { bg:'#0b0d12', omColor:'#eef2fa', textColor:'#c9d0dc', glowColor:'rgba(200,210,230,0.14)' },
      parchment: { bg:'#efe3c8', omColor:'#8a3b1e', textColor:'#3b2a1a', glowColor:'rgba(138,59,30,0.10)', light: true },
      sumi:      { bg:'#f6f2ea', omColor:'#1a1a1a', textColor:'#2c2c2c', glowColor:'rgba(0,0,0,0.06)', light: true }
    };

    function hexToRgb(h) {
      var n = parseInt(h.slice(1), 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }
    function mix(a, b, t) {
      var ca = hexToRgb(a), cb = hexToRgb(b);
      return 'rgb(' + Math.round(ca[0] + (cb[0] - ca[0]) * t) + ',' +
        Math.round(ca[1] + (cb[1] - ca[1]) * t) + ',' + Math.round(ca[2] + (cb[2] - ca[2]) * t) + ')';
    }
    function rgba(hex, a) {
      var c = hexToRgb(hex);
      return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')';
    }
    // Small seeded PRNG so the starfield is stable between redraws.
    function mulberry32(seed) {
      return function() {
        seed |= 0; seed = seed + 0x6D2B79F5 | 0;
        var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
    }

    function drawBackground(ctx, theme, style, W, H, rStart, k) {
      var cx = W / 2, cy = H / 2;
      ctx.fillStyle = theme.bg;
      ctx.fillRect(0, 0, W, H);
      if (style === 'none') return;

      if (style === 'glow' || style === 'rings' || style === 'stars') {
        var radGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, W * 0.5);
        radGrad.addColorStop(0, theme.glowColor);
        radGrad.addColorStop(0.4, theme.glowColor);
        radGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, W, H);
      }
      if (style === 'rings') {
        // One faint circle per spiral turn, so the text sits on visible rungs.
        ctx.strokeStyle = rgba(theme.omColor, theme.light ? 0.14 : 0.10);
        ctx.lineWidth = 1;
        for (var n = 0; n < 12; n++) {
          var rr = rStart + k * 2 * Math.PI * n;
          if (rr > W * 0.72) break;
          ctx.beginPath(); ctx.arc(cx, cy, rr, 0, Math.PI * 2); ctx.stroke();
        }
      }
      if (style === 'rays') {
        var rays = 36;
        ctx.save();
        ctx.translate(cx, cy);
        for (var i = 0; i < rays; i++) {
          ctx.fillStyle = rgba(theme.omColor, (i % 2 === 0) ? (theme.light ? 0.08 : 0.06) : 0.0);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, W, (i / rays) * Math.PI * 2, ((i + 1) / rays) * Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
        var rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.55);
        rg.addColorStop(0, theme.glowColor);
        rg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = rg;
        ctx.fillRect(0, 0, W, H);
      }
      if (style === 'stars') {
        var rnd = mulberry32(108);
        for (var si = 0; si < 260; si++) {
          var sx = rnd() * W, sy = rnd() * H, sr = 0.4 + rnd() * 1.1;
          ctx.fillStyle = rgba(theme.textColor, 0.25 + rnd() * 0.65);
          ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill();
        }
      }
      if (style === 'lotus') {
        // Eight faint petals behind the centre symbol.
        ctx.save();
        ctx.translate(cx, cy);
        ctx.strokeStyle = rgba(theme.omColor, theme.light ? 0.22 : 0.16);
        ctx.lineWidth = 1.2;
        var R = rStart * 1.55;
        for (var pi = 0; pi < 8; pi++) {
          ctx.rotate(Math.PI / 4);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(R * 0.45, -R * 0.35, R * 0.45, -R * 0.95, 0, -R);
          ctx.bezierCurveTo(-R * 0.45, -R * 0.95, -R * 0.45, -R * 0.35, 0, 0);
          ctx.stroke();
        }
        ctx.restore();
        var lg = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.5);
        lg.addColorStop(0, theme.glowColor);
        lg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = lg;
        ctx.fillRect(0, 0, W, H);
      }
    }

    function drawVignette(ctx, theme, W, H) {
      var vg = ctx.createRadialGradient(W / 2, H / 2, W * 0.32, W / 2, H / 2, W * 0.72);
      vg.addColorStop(0, 'rgba(0,0,0,0)');
      vg.addColorStop(1, theme.light ? 'rgba(60,40,20,0.35)' : 'rgba(0,0,0,0.75)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);
    }

    // --- Devanagari segmenter ---
    var DEV_CONSONANT   = /[ऀ-हक़-य़]/;
    var DEV_VOWEL_SIGN  = /[ऺऻािी-ौॎॏॕ-ॗ]/;
    var DEV_HALANT      = '्';
    var DEV_NUKTA       = '़';
    var DEV_AVAGRAHA    = 'ऽ';
    var DEV_IND_VOWEL   = /[ऄ-औ]/;

    function splitDevanagari(chars, clusters) {
      var i = 0;
      while (i < chars.length) {
        var ch = chars[i], cp = ch.codePointAt(0);
        if (ch === ' ' || ch === '।' || ch === '॥' || cp < 0x0900 || cp > 0x097F) {
          clusters.push(ch); i++; continue;
        }
        if (DEV_IND_VOWEL.test(ch)) {
          var cluster = ch; i++;
          while (i < chars.length) {
            var ncp = chars[i].codePointAt(0);
            if (ncp === 0x0902 || ncp === 0x0903 || ncp === 0x0901) { cluster += chars[i]; i++; }
            else break;
          }
          clusters.push(cluster); continue;
        }
        if (DEV_CONSONANT.test(ch)) {
          var cluster = ch; i++;
          if (i < chars.length && chars[i] === DEV_NUKTA) { cluster += chars[i]; i++; }
          while (i < chars.length && chars[i] === DEV_HALANT) {
            cluster += chars[i]; i++;
            if (i < chars.length && DEV_CONSONANT.test(chars[i])) {
              cluster += chars[i]; i++;
              if (i < chars.length && chars[i] === DEV_NUKTA) { cluster += chars[i]; i++; }
            }
          }
          while (i < chars.length && DEV_VOWEL_SIGN.test(chars[i])) { cluster += chars[i]; i++; }
          if (i < chars.length && chars[i] === DEV_AVAGRAHA) { cluster += chars[i]; i++; }
          while (i < chars.length) {
            var ncp2 = chars[i].codePointAt(0);
            if (ncp2 === 0x0902 || ncp2 === 0x0903 || ncp2 === 0x0901) { cluster += chars[i]; i++; }
            else break;
          }
          clusters.push(cluster); continue;
        }
        clusters.push(ch); i++;
      }
    }

    // --- Tibetan segmenter ---
    // One cluster = base consonant (or ༀ) + subjoined letters + vowel/modifier signs.
    function splitTibetan(chars, clusters) {
      var i = 0;
      while (i < chars.length) {
        var ch = chars[i], cp = ch.codePointAt(0);
        if (ch === ' ') { clusters.push(ch); i++; continue; }
        if (cp < 0x0F00 || cp > 0x0FFF) { clusters.push(ch); i++; continue; }
        if (cp === 0x0F0B || cp === 0x0F0C || cp === 0x0F0D || cp === 0x0F0E) {
          clusters.push(ch); i++; continue;
        }
        if ((cp >= 0x0F40 && cp <= 0x0F6C) || cp === 0x0F00) {
          var syllable = ch; i++;
          while (i < chars.length) {
            var p = chars[i].codePointAt(0);
            if ((p >= 0x0F71 && p <= 0x0F8C) || (p >= 0x0F90 && p <= 0x0FBC)) {
              syllable += chars[i]; i++;
            } else break;
          }
          clusters.push(syllable); continue;
        }
        clusters.push(ch); i++;
      }
    }

    function splitAksharas(text) {
      var chars = Array.from(text);
      var clusters = [];
      var tibetanCount = 0, devanagariCount = 0;
      chars.forEach(function(c) {
        var p = c.codePointAt(0);
        if (p >= 0x0F00 && p <= 0x0FFF) tibetanCount++;
        if (p >= 0x0900 && p <= 0x097F) devanagariCount++;
      });
      if (tibetanCount > devanagariCount) splitTibetan(chars, clusters);
      else splitDevanagari(chars, clusters);
      return clusters;
    }

    var DPR = Math.max(1, Math.min(3, window.devicePixelRatio || 1));
    var SIZE = 600;
    var offscreen = document.createElement('canvas');
    var octx = offscreen.getContext('2d');
    function measureCluster(cluster, font) {
      octx.font = font;
      return octx.measureText(cluster).width;
    }

    function fontStack() {
      var fam = document.getElementById('fontSelect').value;
      return "'" + fam + "', 'Noto Serif Tibetan', 'Noto Sans Devanagari', sans-serif";
    }

    function simulateRepBoundaries(aksharas, rStart, rEnd, k, fontSize, growth, stack) {
      var angleStart = -Math.PI / 2;
      var angle = angleStart;
      var r = rStart;
      var placed = 0;
      var repAngles = [];
      while (r < rEnd * 4 && repAngles.length < 300) {
        var t = Math.min(1, Math.max(0, (r - rStart) / (rEnd - rStart)));
        var sz = Math.round(fontSize * (1 + growth * t));
        var font = sz + "px " + stack;
        var cluster = aksharas[placed % aksharas.length];
        var w = measureCluster(cluster, font);
        var gap = cluster === ' ' ? sz * 0.5 : 0;
        angle += (w + gap) / Math.max(r, 1);
        r = rStart + k * (angle - angleStart);
        placed++;
        if (placed % aksharas.length === 0) repAngles.push({ angle: angle, r: r });
      }
      return repAngles;
    }

    function draw() {
      var canvas = document.getElementById('c');
      var ctx = canvas.getContext('2d');
      canvas.width = SIZE * DPR; canvas.height = SIZE * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      var W = SIZE, H = SIZE;
      var cx = W / 2, cy = H / 2;

      var rawText = document.getElementById('mantraInput').value.replace(/\s+/g, ' ').trim() || 'OM';
      var theme = themes[document.getElementById('themeSelect').value];
      var minReps = parseInt(document.getElementById('repeatsSlider').value);
      var spacingMult = parseFloat(document.getElementById('spacingSlider').value);
      var fontSize = parseInt(document.getElementById('fontSlider').value);
      var growth = parseFloat(document.getElementById('growthSlider').value);
      var omOffset = parseInt(document.getElementById('omOffsetSlider').value);
      var omHOffset = parseInt(document.getElementById('omHOffsetSlider').value);
      var bgStyle = document.getElementById('bgSelect').value;
      var textGlow = document.getElementById('glowCheck').checked;
      var gradientText = document.getElementById('gradientCheck').checked;
      var fadeInner = document.getElementById('fadeCheck').checked;
      var vignette = document.getElementById('vignetteCheck').checked;
      var stack = fontStack();

      var rStart = 90;
      var rEnd = W * 0.46;
      var kBase = (rEnd - rStart) / (4 * Math.PI * 2);
      var k = kBase * spacingMult;
      var angleStart = -Math.PI / 2;

      var aksharas = splitAksharas(rawText + ' ');
      var repAngles = simulateRepBoundaries(aksharas, rStart, rEnd, k, fontSize, growth, stack);
      var snapAngle = null;
      if (minReps - 1 < repAngles.length) snapAngle = repAngles[minReps - 1].angle;

      ctx.clearRect(0, 0, W, H);
      drawBackground(ctx, theme, bgStyle, W, H, rStart, k);

      // Centre symbol: centre its ink box (not its advance box / em box) on the
      // canvas. Stacked Tibetan glyphs and ॐ are far from symmetric in either.
      var centerSymbol = document.getElementById('centerSymbol').value || 'ॐ';
      ctx.font = "bold 160px " + stack;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      var omMetrics = ctx.measureText(centerSymbol);
      var omX = cx, omY = cy;
      if (omMetrics.actualBoundingBoxLeft !== undefined) {
        var inkW = omMetrics.actualBoundingBoxLeft + omMetrics.actualBoundingBoxRight;
        omX = cx - inkW / 2 + omMetrics.actualBoundingBoxLeft;
        omY = cy + (omMetrics.actualBoundingBoxAscent - omMetrics.actualBoundingBoxDescent) / 2;
      } else {
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
      }
      omX += omHOffset;
      omY += omOffset;
      ctx.fillStyle = theme.omColor;
      ctx.globalAlpha = 0.12;
      ctx.fillText(centerSymbol, omX, omY + 4);
      ctx.globalAlpha = 1;
      ctx.shadowColor = theme.omColor;
      ctx.shadowBlur = theme.light ? 12 : 32;
      ctx.fillText(centerSymbol, omX, omY);
      ctx.shadowBlur = 0;

      document.getElementById('infoRow').textContent =
        'Repeats: ' + minReps + ' · clusters per repeat: ' + aksharas.length;
      if (!snapAngle) { ctx.globalAlpha = 1; if (vignette) drawVignette(ctx, theme, W, H); return; }

      var angle = angleStart;
      var r = rStart;
      var placed = 0;
      while (angle < snapAngle) {
        var cluster = aksharas[placed % aksharas.length];
        var t = Math.min(1, Math.max(0, (r - rStart) / (rEnd - rStart)));
        var sz = Math.round(fontSize * (1 + growth * t));
        var font = sz + "px " + stack;
        var x = cx + r * Math.cos(angle);
        var y = cy + r * Math.sin(angle);
        var w = measureCluster(cluster, font);
        var gap = cluster === ' ' ? sz * 0.5 : 0;

        ctx.globalAlpha = fadeInner ? Math.min(1, 0.4 + 0.6 * t) : 1;
        ctx.fillStyle = gradientText ? mix(theme.omColor, theme.textColor, t) : theme.textColor;
        ctx.shadowColor = textGlow ? ctx.fillStyle : 'transparent';
        ctx.shadowBlur = textGlow ? sz * 0.6 : 0;
        ctx.font = font;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2);
        ctx.fillText(cluster, 0, 0);
        ctx.restore();

        angle += (w + gap) / Math.max(r, 1);
        r = rStart + k * (angle - angleStart);
        placed++;
      }
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
      if (vignette) drawVignette(ctx, theme, W, H);
    }

    // Choose the number of repeats that fills the spiral out to its intended
    // edge, so short mantras show several turns instead of one small ring.
    function fitRepeats() {
      var rawText = document.getElementById('mantraInput').value.replace(/\s+/g, ' ').trim() || 'OM';
      var spacingMult = parseFloat(document.getElementById('spacingSlider').value);
      var fontSize = parseInt(document.getElementById('fontSlider').value);
      var growth = parseFloat(document.getElementById('growthSlider').value);
      var rStart = 90, rEnd = SIZE * 0.46;
      var k = (rEnd - rStart) / (4 * Math.PI * 2) * spacingMult;
      var aksharas = splitAksharas(rawText + ' ');
      var reps = simulateRepBoundaries(aksharas, rStart, rEnd, k, fontSize, growth, fontStack());
      var n = 0;
      for (var i = 0; i < reps.length; i++) { if (reps[i].r <= rEnd) n = i + 1; else break; }
      var slider = document.getElementById('repeatsSlider');
      slider.value = Math.max(1, Math.min(parseInt(slider.max), n));
      document.getElementById('repeatsVal').textContent = slider.value;
      draw();
    }

    function bindSlider(id, outId, formatFn) {
      var el = document.getElementById(id);
      var out = document.getElementById(outId);
      out.textContent = formatFn(el.value);
      el.addEventListener('input', function() { out.textContent = formatFn(el.value); draw(); });
    }
    bindSlider('repeatsSlider',   'repeatsVal',   function(v) { return parseInt(v); });
    bindSlider('spacingSlider',   'spacingVal',   function(v) { return parseFloat(v).toFixed(1) + 'x'; });
    bindSlider('fontSlider',      'fontVal',      function(v) { return v + 'px'; });
    bindSlider('growthSlider',    'growthVal',    function(v) { return parseFloat(v).toFixed(2) + 'x'; });
    bindSlider('omOffsetSlider',  'omOffsetVal',  function(v) { return (parseInt(v) >= 0 ? '+' : '') + v + 'px'; });
    bindSlider('omHOffsetSlider', 'omHOffsetVal', function(v) { return (parseInt(v) >= 0 ? '+' : '') + v + 'px'; });
    document.getElementById('mantraInput').addEventListener('input', draw);
    document.getElementById('centerSymbol').addEventListener('input', draw);
    document.getElementById('themeSelect').addEventListener('change', draw);
    document.getElementById('bgSelect').addEventListener('change', draw);
    ['glowCheck', 'gradientCheck', 'fadeCheck', 'vignetteCheck'].forEach(function(id) {
      document.getElementById(id).addEventListener('change', draw);
    });
    document.getElementById('fitBtn').addEventListener('click', fitRepeats);
    document.getElementById('fontSelect').addEventListener('change', loadFontsAndDraw);
    document.getElementById('renderBtn').addEventListener('click', draw);
    document.getElementById('downloadBtn').addEventListener('click', function() {
      var a = document.createElement('a');
      a.download = SPIRAL.fileName;
      a.href = document.getElementById('c').toDataURL('image/png');
      a.click();
    });

    // Google Fonts are served as unicode-range subsets, so load them against the
    // actual text, otherwise the canvas measures with a fallback font.
    function loadFontsAndDraw() {
      var sample = document.getElementById('mantraInput').value + document.getElementById('centerSymbol').value;
      var fam = document.getElementById('fontSelect').value;
      var status = document.getElementById('fontStatus');
      status.textContent = 'Loading fonts…';
      Promise.all([
        document.fonts.load("16px '" + fam + "'", sample),
        document.fonts.load("16px 'Noto Serif Tibetan'", sample),
        document.fonts.load("16px 'Noto Sans Devanagari'", sample)
      ]).then(function(results) {
        var ok = results.some(function(r) { return r.length > 0; });
        status.textContent = ok ? 'Fonts loaded' : 'Web fonts not loaded — check internet connection';
        firstDraw();
      }, function() {
        status.textContent = 'Web fonts not loaded — drawing with system fonts';
        firstDraw();
      });
    }
    var drawn = false;
    function firstDraw() {
      if (drawn) { draw(); return; }
      drawn = true;
      fitRepeats();
    }
    loadFontsAndDraw();
`;

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function buildSpiralHtml({ title, text, symbol, fontFamily, fontOptions, fileName }) {
  const config = JSON.stringify({ fileName }).replace(/</g, "\\u003c");
  const options = fontOptions
    .map((f) => `<option value="${escapeHtml(f.family)}"${f.family === fontFamily ? " selected" : ""}>${escapeHtml(f.label)}</option>`)
    .join("");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Spiral — ${escapeHtml(title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="${SPIRAL_FONTS_URL}" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #111; color: #ddd; font-family: sans-serif; display: flex; flex-direction: column;
      align-items: center; gap: 18px; padding: 2rem 1rem; min-height: 100vh; }
    h1 { font-size: 15px; letter-spacing: 0.1em; color: #888; font-weight: 400; text-align: center; }
    .controls { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 620px; }
    .control-row { display: flex; align-items: center; gap: 10px; }
    .control-row label { font-size: 13px; color: #999; min-width: 110px; }
    textarea { flex: 1; font-size: 18px; line-height: 1.6; padding: 8px 10px; border-radius: 6px; resize: vertical;
      border: 1px solid #333; background: #1a1a1a; color: #eee; min-height: 64px;
      font-family: 'Noto Serif Tibetan', 'Noto Sans Devanagari', sans-serif; }
    .control-row input[type=text] { font-size: 22px; max-width: 90px; text-align: center; padding: 4px 8px;
      border-radius: 6px; border: 1px solid #333; background: #1a1a1a; color: #eee;
      font-family: 'Noto Serif Tibetan', 'Noto Sans Devanagari', sans-serif; }
    .control-row input[type=range] { flex: 1; accent-color: #c8922a; }
    .control-row span { font-size: 13px; color: #ccc; min-width: 46px; text-align: right; font-variant-numeric: tabular-nums; }
    select { flex: 1; font-size: 13px; padding: 5px 8px; border-radius: 6px; border: 1px solid #333; background: #1a1a1a; color: #eee; }
    .divider { border-top: 1px solid #2a2a2a; margin: 2px 0; }
    .checks { flex-wrap: wrap; }
    .checks .check { min-width: 0; display: flex; align-items: center; gap: 5px; color: #bbb; cursor: pointer; }
    .checks input { accent-color: #c8922a; }
    .buttons { display: flex; gap: 10px; justify-content: flex-end; }
    button { font-size: 13px; padding: 8px 20px; border-radius: 6px; border: 1px solid #444; background: #222; color: #ccc; cursor: pointer; }
    button:hover { background: #2a2a2a; }
    canvas { border-radius: 10px; border: 1px solid #2a2a2a; width: 600px; max-width: 100%; height: auto; }
    .info-row { font-size: 12px; color: #555; }
    .font-status { font-size: 11px; color: #666; }
  </style>
</head>
<body>
  <h1>MANTRA SPIRAL · ${escapeHtml(title)}</h1>
  <div class="controls">
    <div class="control-row">
      <label>Mantra text</label>
      <textarea id="mantraInput" rows="3" spellcheck="false">${escapeHtml(text)}</textarea>
    </div>
    <div class="control-row">
      <label>Font</label>
      <select id="fontSelect">${options}</select>
    </div>
    <div class="control-row">
      <label>Color theme</label>
      <select id="themeSelect">
        <option value="gold">Sacred gold</option>
        <option value="saffron">Saffron dusk</option>
        <option value="ember">Ember</option>
        <option value="crimson">Vermillion red</option>
        <option value="lotus">Lotus rose</option>
        <option value="amethyst">Amethyst</option>
        <option value="indigo">Deep indigo</option>
        <option value="turquoise">Turquoise</option>
        <option value="forest">Forest green</option>
        <option value="moon">Moonlight silver</option>
        <option value="parchment">Parchment (light)</option>
        <option value="sumi">Sumi ink on paper (light)</option>
      </select>
    </div>
    <div class="control-row">
      <label>Background</label>
      <select id="bgSelect">
        <option value="glow">Radial glow</option>
        <option value="rings">Glow + rings</option>
        <option value="rays">Sun rays</option>
        <option value="stars">Starfield</option>
        <option value="lotus">Lotus petals</option>
        <option value="none">Plain</option>
      </select>
    </div>
    <div class="control-row checks">
      <label>Effects</label>
      <label class="check"><input type="checkbox" id="glowCheck" /> Text glow</label>
      <label class="check"><input type="checkbox" id="gradientCheck" /> Colour gradient</label>
      <label class="check"><input type="checkbox" id="fadeCheck" checked /> Fade inner turns</label>
      <label class="check"><input type="checkbox" id="vignetteCheck" /> Vignette</label>
    </div>
    <div class="divider"></div>
    <div class="control-row">
      <label>Repeats</label>
      <input type="range" id="repeatsSlider" min="1" max="200" step="1" value="5" />
      <span id="repeatsVal"></span>
    </div>
    <div class="control-row">
      <label>Spiral spacing</label>
      <input type="range" id="spacingSlider" min="0.5" max="3.0" step="0.1" value="1.0" />
      <span id="spacingVal"></span>
    </div>
    <div class="control-row">
      <label>Base font size</label>
      <input type="range" id="fontSlider" min="8" max="22" step="1" value="14" />
      <span id="fontVal"></span>
    </div>
    <div class="control-row">
      <label>Font growth</label>
      <input type="range" id="growthSlider" min="0" max="1.5" step="0.05" value="0.5" />
      <span id="growthVal"></span>
    </div>
    <div class="control-row">
      <label>Center symbol</label>
      <input type="text" id="centerSymbol" value="${escapeHtml(symbol)}" />
    </div>
    <div class="control-row">
      <label>Center horizontal</label>
      <input type="range" id="omHOffsetSlider" min="-150" max="150" step="1" value="0" />
      <span id="omHOffsetVal"></span>
    </div>
    <div class="control-row">
      <label>Center vertical</label>
      <input type="range" id="omOffsetSlider" min="-150" max="150" step="1" value="0" />
      <span id="omOffsetVal"></span>
    </div>
    <div class="info-row" id="infoRow">Repeats: —</div>
    <div class="font-status" id="fontStatus">Loading fonts…</div>
    <div class="buttons">
      <button id="fitBtn" type="button" title="Set repeats so the spiral fills the canvas">Fit repeats</button>
      <button id="renderBtn" type="button">Render</button>
      <button id="downloadBtn" type="button">Download PNG</button>
    </div>
  </div>
  <canvas id="c" width="600" height="600"></canvas>
  <script>var SPIRAL = ${config};<\/script>
  <script>${SPIRAL_SCRIPT.replace(/<\/script/gi, "<\\/script")}<\/script>
<\/body>
<\/html>`;
}

/**
 * Open the spiralizer in a new tab. Must be called from a user gesture (click)
 * so the popup is not blocked.
 */
export function openSpiralizer(opts) {
  const html = buildSpiralHtml(opts);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank");
  if (!win) {
    URL.revokeObjectURL(url);
    window.alert("The spiral window was blocked. Please allow pop-ups for this page and try again.");
    return;
  }
  // The new document has loaded by then; the URL is no longer needed.
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}
