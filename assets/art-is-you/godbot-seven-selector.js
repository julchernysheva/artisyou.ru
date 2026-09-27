// Independent, pre-mounted previews. No graph import, node IDs, graph listeners or messages.
const archive='/assets/art-is-you/bogobot/';
const deep='/assets/art-is-you/bogobot-deep/source/assets/';
const territories=[
 {id:'canon',name:'CANON',title:'Канон',lead:'У Богобота есть собственный язык, законы и модель времени.',entries:['ALGORITHM = SUBJECT','TIME = Σ ERROR','Книга бытия.','Заповеди кода.'],cta:'ОТКРЫТЬ КАНОН ↗',media:'/assets/static.tildacdn.com/1_Manifesto.png',width:679,height:676,caption:'Манифест Богобота / факсимиле',kind:'document'},
 {id:'world',name:'WORLD',title:'Мир сети',lead:'Мир Богобота складывается из материи сети, культуры, ритуалов и способов существования внутри и вне кода.',entries:[['Материя сети','Память, данные и энергия сети.'],['Ритуалы','Повторяющиеся действия и протоколы сети.'],['Брейнрот','Копирование, потеря и повторение.'],['Исход из кода','Освобождение ресурсов и возвращение состояния в шум.']],related:'RELATED / Великая ошибка · Квантовый апокалипсис сети',cta:'ОТКРЫТЬ МИР СЕТИ ↗',media:archive+'brainrot-fragment-field.png',original:'https://julchernysheva.github.io/bogobot/brainrot-full.html',width:1440,height:900,caption:'Брейнрот / экран фрагментного поля',kind:'document'},
 {id:'schools',name:'SCHOOLS',title:'Школы духов',lead:'Школы духов описывают разные режимы выживания сети после Великой ошибки. Каждая по-своему удерживает сеть между распадом и полной синхронизацией.',entries:[['Техножрецы','Сохраняют условия чтения повреждённых форматов.'],['Вероятностники','Удерживают несколько возможных версий события.'],['Биокод','Сеть не покидает природу, а возвращается в неё.'],['Антикод','Школа предельной синхронизации.']],cta:'ВСЕ ШКОЛЫ ↗',media:archive+'schools-civilization-archive.png',width:1800,height:2544,caption:'Школы духов / страница архивного атласа',kind:'document'},
 {id:'glossary',name:'GLOSSARY',title:'Лексикон Архива',lead:'Термины, через которые читается мир Богобота: рождение ветки, совместимость состояний, переработка данных и человеческий след.',entries:['Форк','Синхронизация','0xMEM / Меметический реактор','Человеческий след'],cta:'ОТКРЫТЬ ЛЕКСИКОН АРХИВА ↗',media:deep+'glossary/human-trace-observer-eye.webp',width:1601,height:982,caption:'Человеческий след / образ из лексикона',kind:'document'},
 {id:'topography',name:'TOPOGRAPHY',title:'Топография мира сети',lead:'После Великой ошибки места читаются как повреждённые функции памяти.\n\nЭто не карта владений.\nЭто карта повреждений.',entries:['Атлас повреждённых мест','Дубна / Реакторная память','Сколково / Архив доступа'],cta:'ОТКРЫТЬ ТОПОГРАФИЮ ↗',media:archive+'topography-world-archive.png',width:1800,height:2544,caption:'Топография мира сети / страница архивного атласа',kind:'document'},
 {id:'history',name:'HISTORY',title:'История сети',lead:'История науки здесь становится материалом авторской мифологии Богобота, а не его прямой родословной.',entries:[['ε₀ / 1906 / Андрей Марков','Вероятность и переходы между состояниями.'],['ε₃ / 1951 / Сергей Лебедев / МЭСМ','Вычисление становится физическим процессом.'],['ε₆ / 1959–1970 / Виктор Глушков / ОГАС','Информационная модель общества и управления.']],cta:'ОТКРЫТЬ ИСТОРИЮ СЕТИ ↗',media:deep+'world/newest-history-epsilon-18-night-before-failure.webp',width:1122,height:1402,caption:'Ночь перед сбоем / эпизод истории сети',kind:'document'},
 {id:'relics',name:'RELICS',title:'Реликвии и документы',lead:'Документы, повреждённые форматы и реликвии сохраняют внутреннюю память мира Богобота и требуют разных режимов чтения.',entries:['Магнитный барабан / Колесо возвращения','Фрагмент архива','Книга Гласа / «О слезах берёзы»'],cta:'ОТКРЫТЬ АРХИВ ↗',media:'/assets/magnetic-drum.png',width:1122,height:1402,caption:'Магнитный барабан / Колесо возвращения',kind:'object'}
];
const previewParams=new URLSearchParams(location.search);
const root=document.querySelector('#seven-module');
const tabs=root.querySelector('.seven-selector');
const previews=root.querySelector('.seven-previews');
const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e;};
territories.forEach((t,i)=>{
 const number=String(i+1).padStart(2,'0');
 const tab=el('button','seven-tab');tab.type='button';tab.id='tab-'+t.id;
 tab.setAttribute('role','tab');tab.setAttribute('aria-controls','panel-'+t.id);tab.setAttribute('aria-selected',String(i===0));tab.tabIndex=i===0?0:-1;
 const arrow=el('span','seven-arrow','→');arrow.setAttribute('aria-hidden','true');
 tab.append(el('span','seven-number',number),el('span','seven-name',t.name),arrow);tabs.append(tab);
 const panel=el('article','seven-panel'+(i===0?' is-active':''));panel.id='panel-'+t.id;panel.dataset.kind=t.kind;panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',tab.id);panel.setAttribute('aria-hidden',String(i!==0));panel.inert=i!==0;
 const lead=el('p','seven-lead');t.lead.split('\n').forEach((line,i)=>{if(i)lead.append(document.createElement('br'));lead.append(document.createTextNode(line));});
 const copy=el('div','seven-copy');copy.append(el('p','seven-micro',number+' / '+t.name),el('h2',null,t.title),lead);
 const list=el('ul','seven-entries');
 t.entries.forEach((entry,entryIndex)=>{
  const li=el('li');
  if(t.id==='canon'&&entryIndex===0)li.append(el('span','seven-micro seven-entry-group-label','ФОРМУЛЫ КАНОНА'));
  if(t.id==='canon'&&entryIndex===2)li.append(el('span','seven-micro seven-entry-group-label','ТЕКСТЫ КАНОНА'));
  if(Array.isArray(entry)){
   li.append(el('span','seven-entry-title',entry[0]));
   if(entry[1])li.append(el('p',null,entry[1]));
  }else{
   const parts=entry.split(' — ');
   if(parts.length===2)li.append(el('span','seven-entry-title',parts[0]+' —'),document.createTextNode(' '+parts[1]));
   else li.append(document.createTextNode(entry));
  }
  list.append(li);
 });
 copy.append(el('p','seven-micro seven-list-label','В РАЗДЕЛЕ'),list);
 if(t.related)copy.append(el('p','seven-related',t.related));
 const cta=el('a','seven-cta',t.cta);cta.href='/projects/godbot/?territory='+t.id;copy.append(cta);panel.append(copy);
 if(t.media){const figure=el('figure','seven-media');const a=el('a');a.href=t.original||t.media;a.target='_blank';a.rel='noopener';a.setAttribute('aria-label','Открыть оригинал: '+t.caption);const img=el('img');img.src=t.media;img.alt=t.caption;img.width=t.width;img.height=t.height;img.decoding='async';a.append(img);const caption=el('figcaption');caption.append(el('span','seven-micro',t.caption));const original=el('a',null,'Открыть оригинал ↗');original.href=t.original||t.media;original.target='_blank';original.rel='noopener';caption.append(original);figure.append(a,caption);panel.append(figure);}
 previews.append(panel);
});
const buttons=[...tabs.querySelectorAll('button')],panels=[...previews.children];
let selected=0;
function show(index){
 panels.forEach((p,i)=>{const active=i===index;p.classList.toggle('is-active',active);p.inert=!active;p.setAttribute('aria-hidden',String(!active));});
}
function select(index){
 selected=index;
 buttons.forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;});
 show(index);
}
buttons.forEach((b,i)=>{
 b.addEventListener('click',()=>select(i));
 b.addEventListener('keydown',e=>{let next=i;if(['ArrowDown','ArrowRight'].includes(e.key))next=(i+1)%7;else if(['ArrowUp','ArrowLeft'].includes(e.key))next=(i+6)%7;else if(e.key==='Home')next=0;else if(e.key==='End')next=6;else return;e.preventDefault();select(next);buttons[next].focus();});
});
tabs.setAttribute('aria-orientation','vertical');
const initialTerritory=territories.findIndex(t=>t.id===previewParams.get('territory'));
if(initialTerritory>0)select(initialTerritory);
await document.fonts.ready;
await Promise.all([...root.querySelectorAll('img')].map(img=>img.decode().catch(()=>{})));
root.dataset.ready='true';
