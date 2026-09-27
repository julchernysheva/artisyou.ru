
(function(){
 const replacements={
  'PROJECT':'ПРОЕКТ','CONCEPT':'КОНЦЕПЦИЯ','GALLERY':'ГАЛЕРЕЯ','NETWORK':'СЕТЬ','RITUAL':'РИТУАЛ','VIDEO':'ВИДЕО','RELATED':'СВЯЗАННОЕ','GENESIS':'ГЕНЕЗИС','ERROR':'ОШИБКА','MANIFESTO':'МАНИФЕСТ','CODE':'КОД','SYSTEM':'СИСТЕМА','CIVILIZATION':'ЦИВИЛИЗАЦИЯ','UNIVERSE':'ВСЕЛЕННАЯ','EXHIBITION':'ВЫСТАВКА','TEMPLE':'ХРАМ','TESTIMONY':'СВИДЕТЕЛЬСТВА','PERFORMANCE':'ПЕРФОРМАНС','MATERIAL SYSTEM':'МАТЕРИАЛЬНАЯ СИСТЕМА','SPATIAL LOGIC':'ПРОСТРАНСТВЕННАЯ ЛОГИКА','CREDITS':'КРЕДИТЫ','INTERACTION':'ВЗАИМОДЕЙСТВИЕ','OBJECT':'ОБЪЕКТ','ANSWERS':'ОТВЕТЫ','METHOD':'МЕТОД','PROJECT DATA':'ДАННЫЕ ПРОЕКТА','POSITION':'ПОЗИЦИЯ','QUESTIONS':'ВОПРОСЫ','MEMORY':'ПАМЯТЬ','PRACTICE':'ПРАКТИКА','STATEMENTS':'ТЕЗИСЫ','PRACTICE MAP':'КАРТА ПРАКТИКИ','RECORD':'АРХИВ','CLOSING':'ФИНАЛ','SELECTED WORKS':'ИЗБРАННЫЕ РАБОТЫ','READ MORE':'ЧИТАТЬ ДАЛЬШЕ','OPEN':'ОТКРЫТЬ','PREV':'НАЗАД','NEXT':'ДАЛЕЕ','ARCHIVE':'АРХИВ'};
 const sels=['.v2-sectionbar','.or-sectionbar','.ph-sectionbar','.archive-sectionbar','.statement-sectionbar','.lab-sectionbar','.v14-sectionbar','.ay-v10-sectionbar','.v2-nav','.archive-nav','.statement-nav','.lab-nav','.v16-stage__bar'];
 document.querySelectorAll(sels.join(',')).forEach(el=>{
   el.childNodes.forEach(n=>{if(n.nodeType===3){let t=n.nodeValue;Object.entries(replacements).forEach(([a,b])=>{t=t.replace(new RegExp('\\b'+a.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','g'),b)});n.nodeValue=t;}})
 });
 document.querySelectorAll('summary').forEach(s=>{if(s.textContent.trim()==='Read more')s.textContent='Читать дальше'});
})();
