const all = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) e.target.classList.add('visible');
}), { threshold: .12 });
all.forEach(el => observer.observe(el));

const petals = document.getElementById('petals');
function petal(){
  const p=document.createElement('span'); p.className='petal'; p.textContent=Math.random()>.5?'♥':'✦';
  p.style.left=Math.random()*100+'vw'; p.style.fontSize=6+Math.random()*10+'px';
  p.style.opacity=.15+Math.random()*.4; p.style.animationDuration=7+Math.random()*8+'s';
  petals.appendChild(p); setTimeout(()=>p.remove(),16000);
}
setInterval(petal,700);

const modal=document.getElementById('modal'), confetti=document.getElementById('confetti');
document.getElementById('yesBtn').onclick=()=>{
  modal.classList.add('show'); modal.setAttribute('aria-hidden','false');
  for(let i=0;i<55;i++) setTimeout(()=>{
    const c=document.createElement('i'); c.style.left=Math.random()*100+'vw';
    c.style.background=['#ef7792','#f6c4a8','#fff0d4','#b72d5c'][Math.floor(Math.random()*4)];
    c.style.animationDuration=2+Math.random()*3+'s'; confetti.appendChild(c); setTimeout(()=>c.remove(),5200);
  },i*35);
};
document.getElementById('closeBtn').onclick=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true')};
modal.onclick=e=>{if(e.target===modal)document.getElementById('closeBtn').click()};
const hints=['Үнэхээр жаахан л бодох уу? 🥺','Өөнөө аль хэдийн догдлоод эхэлсэн шүү 🤍','Зөв хариулт нь зүүн талд байгаа юм шиг ээ ✨'];
let n=0; document.getElementById('thinkBtn').onclick=()=>document.getElementById('hint').textContent=hints[n++%hints.length];