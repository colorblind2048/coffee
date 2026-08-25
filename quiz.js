const cards = [...document.querySelectorAll('.question-card')];
const form = document.getElementById('quizForm');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const progress = document.getElementById('progressBar');
const label = document.getElementById('stepLabel');
let current = 0;
function render(){ cards.forEach((c,i)=>c.classList.toggle('active',i===current)); prevBtn.style.visibility=current===0?'hidden':'visible'; nextBtn.innerHTML=current===cards.length-1?'查看结果 <span>↗</span>':'下一题 <span>→</span>'; label.textContent=`${String(current+1).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}`; progress.style.width=`${((current+1)/cards.length)*100}%`; }
nextBtn.addEventListener('click',()=>{ const active=cards[current]; const selected=active.querySelector('input:checked'); if(!selected){ active.classList.add('shake'); setTimeout(()=>active.classList.remove('shake'),400); return; } if(current<cards.length-1){current++;render();}else{ const answers=Object.fromEntries(new FormData(form).entries()); sessionStorage.setItem('coffeeAnswers',JSON.stringify(answers)); location.href='result.html'; }});
prevBtn.addEventListener('click',()=>{if(current>0){current--;render();}}); render();
