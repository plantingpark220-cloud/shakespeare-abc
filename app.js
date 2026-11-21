// 資料來自 words.js（全域變數 WORDS）。這個檔只負責畫面與朗讀。
var els = {
  letter: document.getElementById("letter"),
  ipa: document.getElementById("ipa"),
  art: document.getElementById("art"),
  missing: document.getElementById("missing"),
  word: document.getElementById("word"),
  zh: document.getElementById("zh"),
  quote: document.getElementById("quote"),
  quoteZh: document.getElementById("quoteZh"),
  source: document.getElementById("source"),
  fact: document.getElementById("fact"),
  msg: document.getElementById("msg"),
  nav: document.getElementById("nav"),
  prev: document.getElementById("prev"),
  next: document.getElementById("next"),
  playWord: document.getElementById("playWord"),
  playQuote: document.getElementById("playQuote")
};

var index = 0;
var canSpeak = "speechSynthesis" in window;

function stopSpeech() {
  if (canSpeak) speechSynthesis.cancel();
}

function pickVoice() {
  var voices = speechSynthesis.getVoices();
  for (var i = 0; i < voices.length; i++) {
    if (voices[i].lang.replace("_", "-") === "en-GB") return voices[i];
  }
  return null;
}

function speak(text, rate) {
  els.msg.textContent = "";
  if (!canSpeak) {
    els.msg.textContent = "這個瀏覽器不支援語音朗讀，請改用 Chrome、Edge 或 Safari。";
    return;
  }
  stopSpeech(); // 連按時先停掉舊的，不疊音
  var u = new SpeechSynthesisUtterance(text);
  u.lang = "en-GB";
  u.rate = rate;
  var v = pickVoice();
  if (v) u.voice = v;
  u.onerror = function (e) {
    if (e.error !== "canceled" && e.error !== "interrupted") {
      els.msg.textContent = "語音播放失敗，請稍後再試。";
    }
  };
  speechSynthesis.speak(u);
}

function render() {
  var d = WORDS[index];
  els.letter.textContent = d.letter;
  els.ipa.textContent = d.ipa;
  els.word.textContent = d.word;
  els.zh.textContent = d.zh;
  els.quote.textContent = "“" + d.quote + "”";
  els.quoteZh.textContent = d.quoteZh;
  els.source.textContent = "— " + d.source;
  els.fact.textContent = d.fact;
  els.msg.textContent = "";

  els.missing.hidden = true;
  els.art.hidden = false;
  els.art.alt = d.word;
  els.art.src = d.image;

  els.prev.disabled = index === 0;
  els.next.disabled = index === WORDS.length - 1;

  var btns = els.nav.children;
  for (var k = 0; k < btns.length; k++) {
    if (k === index) btns[k].setAttribute("aria-current", "true");
    else btns[k].removeAttribute("aria-current");
  }
}

function goTo(i) {
  if (i < 0 || i >= WORDS.length) return;
  stopSpeech(); // 換卡先停掉舊聲音
  index = i;
  render();
}

els.art.addEventListener("error", function () {
  els.art.hidden = true;
  els.missing.hidden = false;
  els.missing.textContent = "找不到圖片：" + WORDS[index].image;
});

els.prev.addEventListener("click", function () { goTo(index - 1); });
els.next.addEventListener("click", function () { goTo(index + 1); });
els.playWord.addEventListener("click", function () { speak(WORDS[index].word, 0.8); });
els.playQuote.addEventListener("click", function () { speak(WORDS[index].quote, 0.85); });

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") goTo(index - 1);
  if (e.key === "ArrowRight") goTo(index + 1);
});

WORDS.forEach(function (d, i) {
  var b = document.createElement("button");
  b.type = "button";
  b.textContent = d.letter;
  b.setAttribute("aria-label", d.letter + " " + d.word);
  b.addEventListener("click", function () { goTo(i); });
  els.nav.appendChild(b);
});

if (canSpeak) speechSynthesis.getVoices(); // 預先載入語音清單
render();
