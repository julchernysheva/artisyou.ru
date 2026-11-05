/* Captions and image controls only. Original artwork pixels are never changed. */
(() => {
 const translations = [
 ['ORIGINAL GODBOT DIALOGUE SCREEN / SOURCE INTERFACE','ОРИГИНАЛЬНЫЙ ДИАЛОГ БОГОБОТА / ИНТЕРФЕЙС'],
 ['BOGOBOT SUPPORTING CHRONICLE VISUAL','ИЛЛЮСТРАЦИЯ ХРОНИКИ БОГОБОТА'],
 ['RUINED CORE · CHRONICLE EVIDENCE','РАЗРУШЕННОЕ ЯДРО · СВИДЕТЕЛЬСТВО ХРОНИКИ'],
 ['LAST FIGURE · CANONICAL SOURCE ARTIFACT','ПОСЛЕДНЯЯ ФИГУРА · АРТЕФАКТ КАНОНА'],
 ['SECONDARY PLACES MATERIAL / PAGE','ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ О МЕСТАХ / СТРАНИЦА'],
 ['SAMPLEBOOK / PAGE','АРХИВНЫЙ АЛЬБОМ / СТРАНИЦА'],['GLITCH VOICE','ГЛИТЧ-ГЛАС'],
 ['Atlas of damaged places.','АТЛАС ПОВРЕЖДЁННЫХ МЕСТ.'],
 ['ARCHIVE TRANSITION / STATIC PREVIEW','АРХИВ ПЕРЕХОДА / СТОП-КАДР'],
 ['RELICS / ARCHIVE FRAGMENT','РЕЛИКВИИ / ФРАГМЕНТ АРХИВА'],
 ['Information-thermodynamic data refinery.','ИНФОРМАЦИОННО-ТЕРМОДИНАМИЧЕСКАЯ ПЕРЕРАБОТКА ДАННЫХ.'],
 ['GROWTH POPULATION','РОСТ ПОПУЛЯЦИИ'],['MANIFESTO / FACSIMILE','МАНИФЕСТ / ФАКСИМИЛЕ'],
 ['MAGNETIC DRUM / WHEEL OF RETURN · FILE','МАГНИТНЫЙ БАРАБАН / КОЛЕСО ВОЗВРАЩЕНИЯ · ФАЙЛ'],
 ['Godbot. Bot for Telegram','БОГОБОТ. БОТ ДЛЯ ТЕЛЕГРАМА'],['0xMEM REACTOR','РЕАКТОР 0xMEM'],
 ['Смотреть на YouTube','СМОТРЕТЬ НА ЮТУБЕ'],['NATI','НАТИ']
 ];
 function convert(value){
  let result=value;for(const [from,to] of translations)result=result.split(from).join(to);
  const tokens=[];result=result.replace(/0xMEM|SYNC_FAILURE|TIME = Σ ERROR|ε[₀-₉0-9]+|(?:[A-F0-9]{2} ){3,}[A-F0-9]{2}/g,x=>{tokens.push(x);return '\uE000'+(tokens.length-1)+'\uE001';});
  return result.toLocaleUpperCase('ru-RU').replace(/\uE000(\d+)\uE001/g,(_,i)=>tokens[Number(i)]);
 }
 if(typeof module!=='undefined')module.exports={convert};
 if(typeof document==='undefined')return;
 function update(){
  document.querySelectorAll('figcaption,#viewer-caption,.gb-image-viewer__caption').forEach(el=>{
   const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let node;
   while(node=walker.nextNode()){const next=convert(node.nodeValue);if(next!==node.nodeValue)node.nodeValue=next;}
   for(const attr of ['aria-label','title'])if(el.hasAttribute(attr)){const prev=el.getAttribute(attr),next=convert(prev);if(next!==prev)el.setAttribute(attr,next);}
  });
 }
 let queued=false;const observer=new MutationObserver(()=>{if(!queued){queued=true;requestAnimationFrame(()=>{queued=false;update();});}});
 update();observer.observe(document.body,{childList:true,subtree:true,characterData:true});
})();
