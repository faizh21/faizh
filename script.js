const planets = [
 {name:"Merkurius",order:1,type:"Planet terestrial",diameter:"4.880 km",temp:"167°C",year:"88 hari",distance:"57,9 juta km",gradient:"radial-gradient(circle at 30% 25%,#e2ddd2,#77777c 55%,#333747)",glow:"#a5b2ca",summary:"Planet terkecil dan planet yang paling dekat dengan Matahari.",facts:["Satu tahun di Merkurius hanya 88 hari Bumi.","Permukaannya dipenuhi kawah.","Memiliki perubahan suhu yang sangat ekstrem."]},
 {name:"Venus",order:2,type:"Planet terestrial",diameter:"12.104 km",temp:"464°C",year:"225 hari",distance:"108,2 juta km",gradient:"radial-gradient(circle at 30% 25%,#ffe0a2,#c77a3e 55%,#75412e)",glow:"#e9a25c",summary:"Planet panas dengan atmosfer tebal yang kaya karbon dioksida.",facts:["Venus adalah planet terpanas di tata surya.","Rotasinya sangat lambat.","Awan tebalnya memantulkan banyak cahaya Matahari."]},
 {name:"Bumi",order:3,type:"Planet terestrial",diameter:"12.742 km",temp:"15°C",year:"365 hari",distance:"149,6 juta km",gradient:"radial-gradient(circle at 30% 25%,#b5f4ff,#287dd9 35%,#1a8b68 52%,#12345d 78%)",glow:"#369cff",summary:"Planet tempat kita tinggal, satu-satunya dunia yang diketahui mendukung kehidupan.",facts:["Sekitar 71% permukaan Bumi tertutup air.","Bumi memiliki satu satelit alami, Bulan.","Rotasi Bumi menyebabkan pergantian siang dan malam."]},
 {name:"Mars",order:4,type:"Planet terestrial",diameter:"6.779 km",temp:"−65°C",year:"687 hari",distance:"227,9 juta km",gradient:"radial-gradient(circle at 30% 25%,#ffb28b,#c4513d 55%,#662d2d)",glow:"#e56a4d",summary:"Planet merah yang menjadi tujuan penting penelitian eksplorasi robotik.",facts:["Mars memiliki gunung berapi Olympus Mons.","Mars mempunyai dua satelit kecil: Phobos dan Deimos.","Bukti menunjukkan Mars pernah memiliki air cair di permukaan."]},
 {name:"Jupiter",order:5,type:"Raksasa gas",diameter:"139.820 km",temp:"−110°C",year:"11,9 tahun",distance:"778,6 juta km",gradient:"repeating-linear-gradient(0deg,#d6b58d 0 8px,#9d6c50 9px 14px,#f0d9b1 15px 23px)",glow:"#cba87d",summary:"Planet terbesar di tata surya, dengan atmosfer bergaris dan badai raksasa.",facts:["Bintik Merah Besar adalah badai raksasa.","Jupiter memiliki banyak satelit alami.","Planet ini tidak memiliki permukaan padat seperti Bumi."]},
 {name:"Saturnus",order:6,type:"Raksasa gas",diameter:"116.460 km",temp:"−140°C",year:"29,4 tahun",distance:"1,43 miliar km",gradient:"repeating-linear-gradient(0deg,#e4d2a7 0 8px,#9b8061 9px 13px,#d8c39b 14px 21px)",glow:"#d6bd8c",summary:"Raksasa gas yang terkenal dengan sistem cincin luas dan terang.",facts:["Cincinnya tersusun terutama dari partikel es dan batu.","Saturnus memiliki kerapatan rata-rata lebih rendah daripada air.","Titan adalah salah satu satelit terbesarnya."]},
 {name:"Uranus",order:7,type:"Raksasa es",diameter:"50.724 km",temp:"−195°C",year:"84 tahun",distance:"2,87 miliar km",gradient:"radial-gradient(circle at 30% 25%,#d2ffff,#6acbdc 50%,#277a9e)",glow:"#7bdbe8",summary:"Raksasa es berwarna biru kehijauan yang berotasi dengan kemiringan ekstrem.",facts:["Sumbu rotasinya sangat miring.","Atmosfernya mengandung metana.","Uranus memiliki cincin yang tipis dan gelap."]},
 {name:"Neptunus",order:8,type:"Raksasa es",diameter:"49.244 km",temp:"−200°C",year:"165 tahun",distance:"4,5 miliar km",gradient:"radial-gradient(circle at 30% 25%,#72b7ff,#275be1 52%,#111e77)",glow:"#376bff",summary:"Planet utama terjauh dari Matahari, dengan angin yang sangat kencang.",facts:["Neptunus ditemukan melalui prediksi matematika dan pengamatan.","Neptunus memiliki warna biru yang dipengaruhi metana atmosfer.","Satu tahun Neptunus setara sekitar 165 tahun Bumi."]}
];
const $ = s => document.querySelector(s);
const grid = $("#planetGrid");
function makeBall(p, extra=""){return `<div class="planet-ball ${p.name==="Saturnus"?"ring":""} ${extra}" style="--planet-gradient:${p.gradient};--planet-glow:${p.glow}"></div>`}
function renderPlanets(filter=""){
 const list=planets.filter(p=>p.name.toLowerCase().includes(filter.toLowerCase())||p.type.toLowerCase().includes(filter.toLowerCase()));
 grid.innerHTML=list.length?list.map(p=>`<article class="planet-card" tabindex="0" role="button" data-planet="${p.name}" aria-label="Lihat detail ${p.name}"><div class="planet-card-top"><span>PLANET 0${p.order}</span><span>↗</span></div>${makeBall(p)}<h3>${p.name}</h3><p>${p.summary}</p><div class="card-bottom"><span>${p.type}</span><span>Detail →</span></div></article>`).join(""):`<p class="muted">Planet tidak ditemukan. Coba kata kunci lain.</p>`;
 grid.querySelectorAll(".planet-card").forEach(card=>{card.addEventListener("click",()=>openPlanet(card.dataset.planet));card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openPlanet(card.dataset.planet)}})});
}
function openPlanet(name){
 const p=planets.find(x=>x.name===name); if(!p)return;
 $("#dialogName").textContent=p.name;$("#dialogSummary").textContent=p.summary;
 $("#dialogPlanetVisual").innerHTML=makeBall(p);
 $("#dialogStats").innerHTML=`<div><small>Diameter</small><strong>${p.diameter}</strong></div><div><small>Jarak dari Matahari</small><strong>${p.distance}</strong></div><div><small>Suhu rata-rata</small><strong>${p.temp}</strong></div><div><small>Lama revolusi</small><strong>${p.year}</strong></div>`;
 $("#dialogFacts").innerHTML=p.facts.map(f=>`<li>${f}</li>`).join("");
 const d=$("#planetDialog"); if(typeof d.showModal==="function")d.showModal();else d.setAttribute("open","");
 $("#selectedPlanetName").textContent=p.name;$("#selectedPlanetDesc").textContent=p.summary;
}
$("#closeDialog").addEventListener("click",()=>$("#planetDialog").close());
$("#planetDialog").addEventListener("click",e=>{if(e.target===$("#planetDialog"))$("#planetDialog").close()});
$("#planetSearch").addEventListener("input",e=>renderPlanets(e.target.value));
$("#menuToggle").addEventListener("click",()=>$("#navLinks").classList.toggle("open"));
$("#navLinks").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>$("#navLinks").classList.remove("open")));
$("#themeToggle").addEventListener("click",()=>document.body.classList.toggle("light"));

// Musik ambient luar angkasa sederhana dibuat langsung dengan Web Audio API.
// Audio baru dimulai setelah tombol musik diklik, sesuai kebijakan autoplay browser.
let soundOn = false;
let audioContext = null;
let musicTimer = null;
let musicStep = 0;
let masterGain = null;
const musicNotes = [
  [261.63, 329.63, 392.00], [293.66, 349.23, 440.00],
  [220.00, 293.66, 369.99], [246.94, 329.63, 392.00],
  [261.63, 329.63, 440.00], [196.00, 293.66, 392.00],
  [220.00, 277.18, 369.99], [246.94, 311.13, 392.00]
];
function playAmbientChord() {
  if (!audioContext || !masterGain || !soundOn) return;
  const chord = musicNotes[musicStep % musicNotes.length];
  const now = audioContext.currentTime;
  chord.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = index === 0 ? "sine" : "triangle";
    oscillator.frequency.setValueAtTime(frequency / (index === 0 ? 2 : 1), now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(index === 0 ? 0.045 : 0.018, now + 0.7);
    gain.gain.setTargetAtTime(0.0001, now + 2.3, 0.7);
    oscillator.connect(gain);
    gain.connect(masterGain);
    oscillator.start(now);
    oscillator.stop(now + 5);
  });
  // Nada tinggi yang lembut agar terdengar seperti musik ambient.
  const sparkle = audioContext.createOscillator();
  const sparkleGain = audioContext.createGain();
  sparkle.type = "sine";
  sparkle.frequency.setValueAtTime(chord[2] * 2, now);
  sparkleGain.gain.setValueAtTime(0.0001, now);
  sparkleGain.gain.linearRampToValueAtTime(0.012, now + 0.25);
  sparkleGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
  sparkle.connect(sparkleGain);
  sparkleGain.connect(masterGain);
  sparkle.start(now);
  sparkle.stop(now + 2.3);
  musicStep++;
}
async function startAmbientMusic() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    $("#soundToggle").title = "Browser ini belum mendukung audio";
    return;
  }
  if (!audioContext) {
    audioContext = new AudioContextClass();
    masterGain = audioContext.createGain();
    masterGain.gain.value = 0.65;
    masterGain.connect(audioContext.destination);
  }
  await audioContext.resume();
  soundOn = true;
  playAmbientChord();
  musicTimer = window.setInterval(playAmbientChord, 2400);
  $("#soundToggle").style.color = "#58c9ff";
  $("#soundToggle").setAttribute("aria-pressed", "true");
  $("#soundToggle").title = "Musik ambient aktif — klik untuk menghentikan";
}
function stopAmbientMusic() {
  soundOn = false;
  if (musicTimer !== null) {
    window.clearInterval(musicTimer);
    musicTimer = null;
  }
  if (masterGain && audioContext) {
    masterGain.gain.setTargetAtTime(0.0001, audioContext.currentTime, 0.12);
    window.setTimeout(() => {
      if (!soundOn && masterGain && audioContext) {
        masterGain.gain.setValueAtTime(0.65, audioContext.currentTime);
        audioContext.suspend();
      }
    }, 500);
  }
  $("#soundToggle").style.color = "";
  $("#soundToggle").setAttribute("aria-pressed", "false");
  $("#soundToggle").title = "Musik nonaktif — klik untuk memutar";
}
$("#soundToggle").setAttribute("aria-pressed", "false");
$("#soundToggle").title = "Musik nonaktif — klik untuk memutar";
$("#soundToggle").addEventListener("click", () => {
  if (soundOn) stopAmbientMusic();
  else startAmbientMusic().catch(() => {
    soundOn = false;
    $("#soundToggle").title = "Audio tidak dapat diputar. Coba klik lagi.";
  });
});

$("#orbitToggle").addEventListener("click",()=>{document.body.classList.toggle("no-orbits");const on=!document.body.classList.contains("no-orbits");$("#orbitToggle").textContent=on?"Orbit ON":"Orbit OFF";$("#linesToggle").checked=on});
$("#linesToggle").addEventListener("change",e=>{document.body.classList.toggle("no-orbits",!e.target.checked);$("#orbitToggle").textContent=e.target.checked?"Orbit ON":"Orbit OFF"});
$("#labelsToggle").addEventListener("change",e=>document.body.classList.toggle("no-labels",!e.target.checked));
$("#speedRange").addEventListener("input",e=>{const val=Number(e.target.value);$("#speedLabel").textContent=val.toFixed(1)+"×";document.querySelectorAll(".solar-orbit").forEach((o,i)=>o.style.animationDuration=val===0?"0s":( [8,12,16,20,27,33,40,48][i]/val)+"s");document.querySelectorAll(".solar-orbit").forEach(o=>{if(val===0)o.style.animationPlayState="paused";else o.style.animationPlayState="running"})});
$("#randomPlanet").addEventListener("click",()=>{const p=planets[Math.floor(Math.random()*planets.length)];openPlanet(p.name)});
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-view]").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");$("#solarStage").style.filter=b.dataset.view==="2D"?"saturate(.65)":"none";$("#solarStage").style.transform=b.dataset.view==="2D"?"scale(.96)":"scale(1)"}));
const metrics={diameter:p=>p.diameter,temp:p=>p.temp,year:p=>p.year};
function renderCompare(){
 const metric=$("#compareMetric").value;
 const values=planets.map(p=>parseFloat(p[metric].replace(/[^\d.,-]/g,"").replace(",", "."))||0);
 const max=Math.max(...values);
 $("#comparePanel").innerHTML=planets.map((p,i)=>{const size=metric==="diameter"?Math.max(12,Math.sqrt(values[i]/max)*72):Math.max(14,Math.sqrt(values[i]/max)*58);return `<div class="compare-item"><div class="compare-orb"><span style="--size:${size}px;--planet-gradient:${p.gradient};--planet-glow:${p.glow}"></span></div><strong>${p.name}</strong><small>${p[metric]}</small></div>`}).join("");
}
$("#compareMetric").addEventListener("change",renderCompare);
const questions=[
 {q:"Planet terbesar di tata surya kita adalah...",a:["Saturnus","Jupiter","Uranus","Neptunus"],correct:1,why:"Jupiter adalah planet terbesar berdasarkan diameter dan massa."},
 {q:"Planet manakah yang dikenal sebagai Planet Merah?",a:["Venus","Merkurius","Mars","Bumi"],correct:2,why:"Permukaan Mars kaya mineral besi teroksidasi yang memberi warna kemerahan."},
 {q:"Planet yang terkenal dengan sistem cincinnya adalah...",a:["Bumi","Mars","Saturnus","Merkurius"],correct:2,why:"Saturnus memiliki sistem cincin yang sangat mencolok."},
 {q:"Planet tempat kita tinggal adalah...",a:["Bumi","Venus","Jupiter","Neptunus"],correct:0,why:"Bumi adalah rumah kita dan satu-satunya planet yang diketahui mendukung kehidupan."},
 {q:"Planet utama terjauh dari Matahari adalah...",a:["Uranus","Saturnus","Neptunus","Mars"],correct:2,why:"Neptunus adalah planet utama kedelapan dari Matahari."}
];
let qIndex=0,score=0,answered=false;
function renderQuestion(){
 const q=questions[qIndex];answered=false;$("#quizProgress").textContent=`PERTANYAAN ${qIndex+1} / ${questions.length}`;$("#quizScore").textContent=score;$("#progressBar").style.width=((qIndex+1)/questions.length*100)+"%";$("#questionText").textContent=q.q;$("#quizFeedback").textContent="";$("#nextQuestion").disabled=true;$("#nextQuestion").textContent=qIndex===questions.length-1?"Lihat hasil ↗":"Jawaban berikutnya →";
 $("#answers").innerHTML=q.a.map((a,i)=>`<button class="answer" data-answer="${i}"><span>${String.fromCharCode(65+i)}.</span> ${a}</button>`).join("");
 $("#answers").querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>chooseAnswer(Number(b.dataset.answer))));
}
function chooseAnswer(i){if(answered)return;answered=true;const q=questions[qIndex];const buttons=[...$("#answers").querySelectorAll("button")];buttons.forEach((b,j)=>{b.disabled=true;if(j===q.correct)b.classList.add("correct");if(j===i&&i!==q.correct)b.classList.add("wrong")});if(i===q.correct){score+=20;$("#quizFeedback").textContent="Benar! "+q.why}else $("#quizFeedback").textContent="Belum tepat. "+q.why;$("#quizScore").textContent=score;$("#nextQuestion").disabled=false}
$("#nextQuestion").addEventListener("click",()=>{if(!answered)return;if(qIndex<questions.length-1){qIndex++;renderQuestion()}else{$("#questionText").textContent=`Kuis selesai! Skormu ${score} dari 100.`;$("#answers").innerHTML=`<p class="muted">${score>=80?"Luar biasa! Kamu punya pengetahuan astronomi yang kuat.":score>=40?"Bagus! Terus jelajahi dan coba lagi.":"Awal yang baik—jelajahi planet, lalu coba lagi."}</p>`;$("#quizFeedback").textContent="";$("#nextQuestion").textContent="Ulangi kuis ↻";$("#nextQuestion").disabled=false;$("#nextQuestion").onclick=()=>{qIndex=0;score=0;$("#nextQuestion").onclick=null;renderQuestion()}}});
renderPlanets();renderCompare();renderQuestion();
