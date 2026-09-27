(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  function el(name, attrs, text) {
    var n = document.createElementNS(NS, name);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (text) n.textContent = text;
    return n;
  }
  function line(svg, a, b, cls) { svg.appendChild(el('line', { x1:a[0], y1:a[1], x2:b[0], y2:b[1], 'class':'research-analytics__edge ' + (cls || 'edge') })); }
  function node(svg, p, label, cls, anchor) {
    svg.appendChild(el('circle', { cx:p[0], cy:p[1], r:4, 'class':'research-analytics__node node ' + (cls || '') }));
    svg.appendChild(el('text', { x:p[0] + (anchor === 'end' ? -10 : 10), y:p[1] + 4, 'text-anchor':anchor || 'start' }, label));
  }
  function hubNode(svg, p, label, cls) {
    svg.appendChild(el('circle', { cx:p[0], cy:p[1], r:4, 'class':'research-analytics__node node ' + (cls || '') }));
    svg.appendChild(el('text', { x:p[0], y:p[1] - 12, 'text-anchor':'middle' }, label));
  }
  function path(svg, points, cls) {
    svg.appendChild(el('polyline', { points:points.map(function(p){return p.join(',');}).join(' '), 'class':'research-analytics__edge ' + (cls || '') }));
  }
  function linkedNode(svg, p, label, href, anchor) {
    var link=el('a', { href:href, 'class':'research-analytics__link', 'aria-label':'Открыть: '+label });
    link.appendChild(el('circle', { cx:p[0], cy:p[1], r:5, 'class':'research-analytics__node' }));
    link.appendChild(el('text', { x:p[0] + (anchor === 'end' ? -12 : 12), y:p[1] + 4, 'text-anchor':anchor || 'start' }, label));
    svg.appendChild(link);
  }
  function multiline(svg, p, lines, cls, anchor) {
    var text=el('text',{x:p[0],y:p[1],'class':cls || '','text-anchor':anchor || 'start'});
    lines.forEach(function(value,i){text.appendChild(el('tspan',{x:p[0],dy:i===0?0:15},value));});
    svg.appendChild(text);
  }
  function bioSvg(mobile) {
    var w=mobile?350:1120,h=mobile?500:690,cx=mobile?175:525,cy=mobile?250:345;
    var svg=el('svg',{viewBox:'0 0 '+w+' '+h,role:'img','aria-label':'Временное поле истории русского биоарта','class':'research-analytics__svg research-analytics__svg--'+(mobile?'mobile':'desktop')});
    var rings=mobile?[48,88,128,165]:[86,158,244,326];
    rings.forEach(function(r,i){svg.appendChild(el('circle',{cx:cx,cy:cy,r:r,'class':'guide '+(i===3?'guide--broken':'')}));});
    var labels=['1918–1926','1962–1977','2000–2017','2021–2022'];
    rings.forEach(function(r,i){svg.appendChild(el('text',{x:mobile?8:24,y:(mobile?20:28)+(i*16),'class':'label-muted'},labels[i]));});
    var data=[
      ['Матюшин',0,3.65],['Мейерхольд / Попова',0,4.55],['ГИНХУК / Зор-вед',0,5.45],
      ['ЦНИИТИА / бионика',1,2.78],['Группа «Движение»',1,3.14],['Инфанте-Арана / Горюнова',1,4.18],['Группа «Гнездо»',1,4.88],['Герловины',1,5.58],
      ['Булатов / Чебыкин',2,2.30],['То, что живёт во мне',2,2.82],['Федотов-Фёдоров',2,4.42],
      ['Танцующий лес',3,.05],['Фёдорова',3,.56],['Призрачные растения',3,1.07],['Живой труд',3,1.58],['Голем',3,2.09],['В состоянии живого',3,2.60]
    ];
    var mobileLabels=['01','02','03','04','05','06','07','08','09','10','11','13','14','15','16','17','18'];
    var mobileOffsets=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    data.forEach(function(d,i){var r=rings[d[1]],a=d[2]+(mobile?(i%2?-.06:.06):0),x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;line(svg,[cx,cy],[x,y],i%4===0?'edge edge--open':'edge');var end=mobile?x>=cx:x<cx;if(mobile){svg.appendChild(el('circle',{cx:x,cy:y,r:4,'class':'research-analytics__node node '+(i===11?'node--accent':'')}));svg.appendChild(el('text',{x:x+(end?-10:10),y:y+4+mobileOffsets[i],'text-anchor':end?'end':'start'},mobileLabels[i]));}else{node(svg,[x,y],d[0],i===11?'node--accent':'',end?'end':'start');}});
    svg.appendChild(el('circle',{cx:cx,cy:cy,r:7,'class':'node node--origin'}));
    svg.appendChild(el('text',{x:cx,y:cy+24,'text-anchor':'middle'},'РУССКИЙ БИОАРТ'));
    return svg;
  }
  function extractBioRecords(root) {
    var livingGroups=['ОРГАНИЧЕСКИЙ МАТЕРИАЛ','ЧЕЛОВЕЧЕСКОЕ ТЕЛО','ПРИРОДА / ВОСПРИЯТИЕ','БИОЛОГИЯ КАК МОДЕЛЬ','БИОЛОГИЯ КАК МОДЕЛЬ','ПРИРОДНАЯ СРЕДА','ЧЕЛОВЕЧЕСКОЕ ТЕЛО','ЧЕЛОВЕЧЕСКОЕ ТЕЛО','ЖИВОТНЫЕ','ЖИВОТНЫЕ','ЖИВОТНЫЕ','РАСТЕНИЯ','РАСТЕНИЯ','БИОМАТЕРИАЛ','БИОМАТЕРИАЛ','БИОМАТЕРИАЛ','КЛЕТОЧНАЯ КУЛЬТУРА'];
    var mechanismGroups=['ФОРМООБРАЗОВАНИЕ','ТЕЛЕСНОЕ ДЕЙСТВИЕ','НАБЛЮДЕНИЕ','МОДЕЛИРОВАНИЕ','МОДЕЛИРОВАНИЕ','СРЕДОВАЯ ТРАНСФОРМАЦИЯ','ТЕЛЕСНОЕ ДЕЙСТВИЕ','ТЕЛЕСНОЕ ДЕЙСТВИЕ','ТРАНСФОРМАЦИЯ МАТЕРИАЛА','ИНТЕРФЕЙС','КОДИРОВАНИЕ','СЕНСОРНОЕ СЧИТЫВАНИЕ','СЕНСОРНОЕ СЧИТЫВАНИЕ','ТРАНСФОРМАЦИЯ МАТЕРИАЛА','ТРАНСФОРМАЦИЯ МАТЕРИАЛА','МИКРОБИОЛОГИЧЕСКОЕ ИССЛЕДОВАНИЕ','КЛЕТОЧНАЯ КУЛЬТУРА'];
    var roles=[
      ['МАТЕРИАЛ','Корни и сучья — отделённый органический материал.'],
      ['ДЕЙСТВУЮЩАЯ СИСТЕМА','Человеческое тело включено в сценическую конструкцию как инструмент действия.'],
      ['ОБЪЕКТ НАБЛЮДЕНИЯ','Исследуются связи человеческого восприятия и природы как органического целого.','МОДЕЛЬ'],
      ['МОДЕЛЬ','Живая природа используется как конструктивная и формообразующая модель.'],
      ['МОДЕЛЬ','Физический живой компонент отсутствует; биология работает как модель.'],
      ['ДЕЙСТВУЮЩАЯ СИСТЕМА','Снег, вода, свет, небо и отражения физически меняют итоговый образ.','ОБЪЕКТ НАБЛЮДЕНИЯ'],
      ['ДЕЙСТВУЮЩАЯ СИСТЕМА','Телесное действие образует работу; яйцо остаётся метафорой без подтверждённой инкубации.','ОБЪЕКТ НАБЛЮДЕНИЯ'],
      ['ОБЪЕКТ НАБЛЮДЕНИЯ','Человек экспонируется как биологический вид.'],
      ['ДЕЙСТВУЮЩАЯ СИСТЕМА','Трансгенные головастики участвуют в работе как живой материал.'],
      ['ДЕЙСТВУЮЩАЯ СИСТЕМА','Живые улитки включены в биоактивную инсталляцию и интерфейс.'],
      ['ОБЪЕКТ НАБЛЮДЕНИЯ','Структура живой колонии переводится в текст, классификацию и код.','ДЕЙСТВУЮЩАЯ СИСТЕМА'],
      ['ОБЪЕКТ НАБЛЮДЕНИЯ','Сосны наблюдаются через электрическую активность и геомагнитные данные.'],
      ['ДЕЙСТВУЮЩАЯ СИСТЕМА','Измеряемые процессы дерева участвуют в генерации поэзии.','ОБЪЕКТ НАБЛЮДЕНИЯ'],
      ['МАТЕРИАЛ','Децеллюляризованные формы растений исследуются как материал.'],
      ['МАТЕРИАЛ','Биогенный материал движется под воздействием магнитов.'],
      ['ОБЪЕКТ НАБЛЮДЕНИЯ','Бактериальный состав глины является предметом микробиологического исследования.'],
      ['ДЕЙСТВУЮЩАЯ СИСТЕМА','Клеточная культура поддерживается в составе инсталляции.']
    ];
    return Array.from(root.querySelectorAll('.timeline-card')).map(function(card,i){
      var meta=card.querySelector('.timeline-card__meta span:first-child'),metaText=meta?meta.textContent.trim():String(i+1).padStart(2,'0');
      var values=Array.from(card.querySelectorAll('.timeline-card__value')).map(function(v){return v.textContent.trim();});
      var date=card.querySelector('.timeline-card__date').textContent.trim(),years=(date.match(/(?:19|20)\d{2}/g)||[]).map(Number);
      var source=card.querySelector('.timeline-card__source a');
      return {id:(metaText.match(/^\d+/)||[String(i+1).padStart(2,'0')])[0],branch:metaText.replace(/^\d+\s*\/\s*/,''),date:date,start:years[0]||1918,end:/н\.в\.|настоящее/i.test(date)?2022:(years[years.length-1]||years[0]||1918),title:card.querySelector('.timeline-card__title').textContent.trim(),authors:card.querySelector('.timeline-card__authors').textContent.trim(),living:values[0]||'',mechanism:values[1]||'',category:values[2]||'',status:card.querySelector('.timeline-card__status')?card.querySelector('.timeline-card__status').textContent.trim():'',note:card.querySelector('.timeline-card__note')?card.querySelector('.timeline-card__note').textContent.trim():'',sourceText:source?source.textContent.trim():'Источник',sourceHref:source?source.getAttribute('href'):'#',livingGroup:livingGroups[i],mechanismGroup:mechanismGroups[i],role:roles[i][0],roleEvidence:roles[i][1],hybridRole:roles[i][2]||'',card:card};
    });
  }
  function bioProjectionSvg(records,view,mobile) {
    var w=mobile?350:1120,h=mobile?1120:650;
    var svg=el('svg',{viewBox:'0 0 '+w+' '+h,role:'img','aria-label':'Проекция русского биоарта: '+view,'data-bio-view':view,'class':'bio-projection__svg bio-projection__svg--'+(mobile?'mobile':'desktop')});
    function short(value,n){return value.length>n?value.slice(0,n-1)+'…':value;}
    function projectNode(r,x,y,anchor){
      var g=el('g',{'class':'bio-projection__project','data-bio-id':r.id,tabindex:'0',role:'button','aria-label':r.id+' / '+r.title});
      g.appendChild(el('title',{},r.date+' — '+r.title));g.appendChild(el('circle',{cx:x,cy:y,r:16,'class':'bio-projection__hit'}));g.appendChild(el('circle',{cx:x,cy:y,r:5,'class':'bio-projection__node'}));g.appendChild(el('text',{x:x+(anchor==='end'?-10:10),y:y+4,'text-anchor':anchor||'start','class':'bio-projection__id'},r.id));svg.appendChild(g);
    }
    var groups=view==='time'?Array.from(new Set(records.map(function(r){return r.branch;}))):Array.from(new Set(records.map(function(r){return view==='living'?r.livingGroup:r.mechanismGroup;})));
    if(mobile){
      var y=30;
      groups.forEach(function(group){
        svg.appendChild(el('text',{x:8,y:y,'class':'bio-projection__group'},group));y+=22;
        records.filter(function(r){return (view==='time'?r.branch:(view==='living'?r.livingGroup:r.mechanismGroup))===group;}).forEach(function(r){
          svg.appendChild(el('line',{x1:8,y1:y+18,x2:342,y2:y+18,'class':'bio-projection__guide'}));projectNode(r,18,y,undefined);svg.appendChild(el('text',{x:48,y:y+4,'class':'bio-projection__mobile-date'},r.date));svg.appendChild(el('text',{x:342,y:y+4,'text-anchor':'end','class':'bio-projection__mobile-title'},short(r.title,30)));y+=42;
        });y+=26;
      });
      svg.setAttribute('viewBox','0 0 350 '+Math.max(720,y));
      return svg;
    }
    if(view==='time'){
      var x0=260,x1=1080,scale=function(year){return x0+(Math.max(1918,Math.min(2022,year))-1918)/(2022-1918)*(x1-x0);};
      [1918,1940,1960,1980,2000,2022].forEach(function(year){var x=scale(year);svg.appendChild(el('line',{x1:x,y1:48,x2:x,y2:620,'class':'bio-projection__guide bio-projection__guide--open'}));svg.appendChild(el('text',{x:x,y:28,'text-anchor':'middle','class':'bio-projection__axis-label'},String(year)));});
      groups.forEach(function(group,gi){var y=86+gi*78;svg.appendChild(el('text',{x:8,y:y+4,'class':'bio-projection__group'},group));svg.appendChild(el('line',{x1:x0,y1:y,x2:x1,y2:y,'class':'bio-projection__guide'}));var lane=records.filter(function(r){return r.branch===group;}),step=lane.length>1?Math.min(12,44/(lane.length-1)):0;lane.forEach(function(r,ri){var yy=y+(ri-(lane.length-1)/2)*step,sx=scale(r.start),ex=scale(r.end);if(ex>sx+2)svg.appendChild(el('line',{x1:sx,y1:yy,x2:ex,y2:yy,'class':'bio-projection__period'}));projectNode(r,sx,yy,sx>980?'end':'start');});});
    }else{
      var catX0=310,catX1=1080,catScale=function(year){return catX0+(Math.max(1918,Math.min(2022,year))-1918)/(2022-1918)*(catX1-catX0);},catStep=Math.min(70,510/Math.max(1,groups.length-1));
      [1918,1940,1960,1980,2000,2022].forEach(function(year){var x=catScale(year);svg.appendChild(el('line',{x1:x,y1:48,x2:x,y2:620,'class':'bio-projection__guide bio-projection__guide--open'}));svg.appendChild(el('text',{x:x,y:28,'text-anchor':'middle','class':'bio-projection__axis-label'},String(year)));});
      groups.forEach(function(group,gi){var y=84+gi*catStep;svg.appendChild(el('text',{x:8,y:y+4,'class':'bio-projection__group'},group));svg.appendChild(el('line',{x1:catX0,y1:y,x2:catX1,y2:y,'class':'bio-projection__guide'}));var matches=records.filter(function(r){return (view==='living'?r.livingGroup:r.mechanismGroup)===group;}),step=matches.length>1?Math.min(11,38/(matches.length-1)):0;matches.forEach(function(r,ri){var yy=y+(ri-(matches.length-1)/2)*step;projectNode(r,catScale(r.start),yy,catScale(r.start)>1010?'end':'start');});});
    }
    return svg;
  }
  function bioSelectedDetail(records) {
    var detail=document.createElement('div');detail.className='bio-selected-detail';
    detail.innerHTML='<div class="bio-selected-detail__index"></div><div><h3></h3><p class="bio-selected-detail__authors"></p></div><div><span>ЖИВОЙ КОМПОНЕНТ</span><p class="bio-selected-detail__living"></p></div><div><span>МЕХАНИЗМ</span><p class="bio-selected-detail__mechanism"></p></div>';
    detail.update=function(id){var r=records.find(function(record){return record.id===id;})||records[0];detail.dataset.bioId=r.id;detail.querySelector('.bio-selected-detail__index').textContent=r.id+' / '+r.date;detail.querySelector('h3').textContent=r.title;detail.querySelector('.bio-selected-detail__authors').textContent=r.authors;detail.querySelector('.bio-selected-detail__living').textContent=r.living;detail.querySelector('.bio-selected-detail__mechanism').textContent=r.mechanism;};detail.update(records[0].id);return detail;
  }
  function bioLedger(records) {
    var section=document.createElement('section');section.className='bio-ledger';section.innerHTML='<div class="bio-ledger__register"><span>РЕЕСТР / 17 ПРОЕКТОВ</span><span>ФАКТЫ / ИСТОЧНИКИ / ОГОВОРКИ</span></div><div class="bio-ledger__head"><span>ГОД</span><span>ПРОЕКТ / АВТОР</span><span>ЖИВОЙ КОМПОНЕНТ</span><span>ИСТОЧНИК</span></div>';
    records.forEach(function(r){var row=document.createElement('article');row.className='bio-ledger__row';row.dataset.bioId=r.id;var source=r.sourceHref&&r.sourceHref!=='#'?'<a class="bio-ledger__source" href="'+r.sourceHref+'">'+r.sourceText+'</a>':'<span class="bio-ledger__source">'+r.sourceText+'</span>';row.innerHTML='<button type="button" class="bio-ledger__select" aria-expanded="false"><span class="bio-ledger__date">'+r.date+'</span><span class="bio-ledger__main"><strong>'+r.title+'</strong><small>'+r.authors+'</small></span><span class="bio-ledger__living">'+r.living+'</span></button>'+source+'<div class="bio-ledger__detail"><div><span>МЕХАНИЗМ</span><p>'+r.mechanism+'</p></div><div><span>КАТЕГОРИЯ</span><p>'+r.category+'</p></div><div><span>СТАТУС</span><p>'+r.status+'</p></div></div>';section.appendChild(row);});return section;
  }
  var protoarchiveCanonicalRecords=[
    {year:'1973',title:'Николай Бучумов',authors:'Комар и Меламид',metric:'Вымышленный художник',text:'Николай Бучумов — первый вымышленный художник, созданный Комаром и Меламидом. У него есть имя, биография и собственное художественное наследие. Архив превращает несуществующего автора в участника истории искусства.',type:'A1',href:'https://catalog.mmoma.ru/komar-melamid/',domain:'catalog.mmoma.ru'},
    {year:'1986–1988',title:'Пердо',authors:'Константин Звездочётов',metric:'История несуществующей страны',text:'Пердо — вымышленная страна со своей историей, культурой и визуальными следами. Проект собирает документы, объекты и изображения так, будто государство действительно существовало. Псевдоархив создаёт прошлое для территории, которой никогда не было.',type:'A2',href:'https://vladey.net/ru/artwork/5120',domain:'vladey.net'},
    {year:'1991',title:'Ленин — гриб',authors:'Сергей Курёхин / Сергей Шолохов',metric:'Телевизионная мистификация',text:'Абсурдная гипотеза предъявляется как историческое расследование. Телевизионный формат, экспертный тон и псевдонаучная аргументация создают эффект достоверности. Медиаформат становится аппаратом производства факта.',type:'A4',href:'https://russianartarchive.net/ru/catalogue/event/EBBKD',domain:'russianartarchive.net'},
    {year:'1996–2003',title:'Islamic Project',authors:'AES+F',metric:'Туристический архив будущего',text:'Проект показывает Запад как пространство, преобразованное исламской культурой. Открытки, сувениры и туристические изображения выглядят как документы уже наступившего будущего. Вымышленная история получает материальные следы до своего события.',type:'A6',href:'https://aesfgroup.com/projects/islamic_project/ip_info/',domain:'aesfgroup.com'},
    {year:'1999',title:'Частные хроники',authors:'Виталий Манский',metric:'Подлинные кадры / вымышленная биография',text:'Реальные домашние съёмки разных семей объединяются в биографию одного условного героя. Каждый фрагмент подлинный, но связь между ними сконструирована. Ложная связка превращает чужие документы в доказательство несуществующей жизни.',type:'A3',href:'https://manski-doc.com/films/private',domain:'manski-doc.com'},
    {year:'2005',title:'Первые на Луне',authors:'Алексей Федорченко',metric:'Архив несуществующей космической программы',text:'Фильм собирает хронику, интервью и документы секретной советской экспедиции на Луну. Большая часть архива создана специально для проекта. Псевдодокументальная форма позволяет вымышленному событию занять место в истории.',type:'A2',href:'https://otr-online.ru/kino/pervye-na-lune-4298.html',domain:'otr-online.ru'},
    {year:'2008',title:'Альтернативная история искусств',authors:'Илья и Эмилия Кабаковы',metric:'История искусства с другими авторами',text:'Проект вводит в историю искусства вымышленных художников и их произведения. Биографии, тексты и выставочная логика создают убедительную альтернативную генеалогию. История искусства оказывается системой, которую можно пересобрать через архив.',type:'A1',href:'https://russianartarchive.net/ru/catalogue/event/EVDH',domain:'russianartarchive.net'},
    {year:'2012',title:'Безумные подражатели',authors:'Дмитрий Венков',metric:'Антропология несуществующего племени',text:'Учёные исследуют языческое племя, которое якобы живёт на обочине МКАД. Для вымышленной культуры создаются ритуалы, материальный быт и экспертные интерпретации. Антропологический язык превращается в аппарат производства достоверности.',type:'A4',href:'https://www.dimitrivenkov.com/kopiya-mad-mimes',domain:'dimitrivenkov.com'},
    {year:'2014',title:'М.И.Р.: Вежливые гости из будущего',authors:'Арсений Жиляев',metric:'Музей Русской Космической Федерации',text:'Проект строит фиктивный музей воображаемого государства будущего. Позднесоветская музейная эстетика переносится на несколько планет. Вымышленная политическая система получает собственные экспонаты, символы и историю.',type:'A5',href:'https://www.moscowartmagazine.com/article/789',domain:'moscowartmagazine.com'},
    {year:'2017—',title:'Content Aware Studies',authors:'Егор Крафт',metric:'Квазидокументы синтетической истории',text:'Алгоритмы восстанавливают утраченные части античных объектов и ископаемых. Полученные формы никогда не существовали исторически. Вычислительная процедура позволяет предъявить их как алгоритмически правдоподобные версии прошлого.',type:'A7',href:'https://kraft.studio/cas/',domain:'kraft.studio'},
    {year:'2018',title:'Выставка-реконструкция',authors:'Анастасия Вепрева',metric:'Архив художников, которых не было',text:'Проект соединяет реальные документы фабрики «Красное знамя» с вымышленным архивом художников-любителей фабричного ДК. Историческая инфраструктура реальна. Персонажи и часть художественного наследия сконструированы методом спекулятивной реконструкции.',type:'A2'},
    {year:'2021',title:'The Moon Pool. Архив',authors:'Николай Кошелев',metric:'Около 100 работ вымышленного автора',text:'Александр Зильверхоф никогда не существовал. Тем не менее у него появляется собственный архив. Он включает эскизы, сценографию, керамические слепки, рисунки и либретто неосуществлённой постановки Дягилевских сезонов.',type:'A1',href:'https://www.culture.ru/events/1007438/vystavka-nikolai-koshelev-the-moon-pool-arkhiv',domain:'culture.ru'},
    {year:'2021',title:'Музей искусственной истории',authors:'',metric:'Музей, возникший из ошибки нейросети',text:'Действие происходит в недалёком будущем. Нейросеть «Зигота» ошибочно принимает произведения искусства за живых существ. Ошибка классификации становится основанием для создания несуществующего естественнонаучного музея.',type:'A5',href:'https://www.darwinmuseum.ru/projects/exhibition/muzej-iskusstvennoj-istorii',domain:'darwinmuseum.ru'},
    {year:'2023',title:'Семья, которой нет',authors:'Виктория Гурова / Milagrelia',metric:'Синтетический семейный архив',text:'Фотографии выглядят как следы частной жизни. Но людей, мест, моментов и воспоминаний на них никогда не существовало. Весь семейный архив создан генеративной системой.',type:'A8',href:'https://milagrelia.ru/semya-kotoroy-net',domain:'milagrelia.ru'},
    {year:'2025',title:'А.Г.И.',authors:'Ян Посадский',metric:'Художник XIX века, которого не существовало',text:'Архетипов Гордей Игнатович получает имя, биографию и художественное наследие. Монументальная картина представлена как произведение неизвестного автора, якобы приобретённое Павлом Третьяковым. Биография и эскиз созданы с помощью нейросетей.',type:'A9',href:'https://ya.ru/project/humanai',domain:'ya.ru'},
    {year:'2026',title:'МАПА',authors:'Роман Твердохлебов',metric:'Музей Археологии Пост-Апокалипсиса',text:'Вымышленная институция 2326 года исследует XXI век как исчезнувшую раннецифровую цивилизацию. У неё есть фонды, описи, инвентарные номера, полевые сезоны, научная методика и архивный терминал. Реальные произведения становятся археологическими находками вымышленного будущего.',type:'A5',href:'https://mopaa.foundation/about.html',domain:'mopaa.foundation'}
  ];
  var protoarchiveModes={A1:'ВЫМЫШЛЕННЫЙ АВТОР',A2:'ПСЕВДОАРХИВ',A3:'ЛОЖНАЯ СВЯЗКА',A4:'ПСЕВДОЭКСПЕРТИЗА',A5:'ВЫМЫШЛЕННАЯ ИНСТИТУЦИЯ',A6:'ДОКУМЕНТ БУДУЩЕГО',A7:'СИНТЕТИЧЕСКАЯ РЕКОНСТРУКЦИЯ',A8:'АЛГОРИТМИЧЕСКИЙ АРХИВ',A9:'МУЗЕЙНАЯ ЛЕГИТИМАЦИЯ'};
  var protoarchiveBranches={A1:'АРХИВНАЯ ФОРМА',A2:'АРХИВНАЯ ФОРМА',A3:'АРХИВНАЯ ФОРМА',A4:'ЭКСПЕРТНОЕ ЗНАНИЕ',A5:'ИНСТИТУЦИОНАЛЬНЫЙ АВТОРИТЕТ',A6:'АРХИВНАЯ ФОРМА',A7:'ВЫЧИСЛИТЕЛЬНАЯ ПРАВДОПОДОБНОСТЬ',A8:'ВЫЧИСЛИТЕЛЬНАЯ ПРАВДОПОДОБНОСТЬ',A9:'ИНСТИТУЦИОНАЛЬНЫЙ АВТОРИТЕТ'};
  function canonicalizeProtoarchive(root){
    var protocol=document.querySelector('.research-detail-protocol'),protocolQuestion=protocol&&protocol.querySelector('.research-detail-protocol__field--question'),lineRoot=root.querySelector('.pl-line');
    if(protocol){var register=protocol.querySelector('.research-detail-protocol__register'),title=protocol.querySelector('.research-detail-protocol__title');if(register)register.textContent='03 / ПАМЯТЬ И СВИДЕТЕЛЬСТВО';if(title)title.textContent='Преархив';if(protocolQuestion){var question=protocolQuestion.querySelector('.research-detail-protocol__text');if(question)question.textContent='Как документ становится доказательством события, которого не было?';}}
    if(lineRoot){lineRoot.setAttribute('aria-label','16 ключевых кейсов Преархива');lineRoot.innerHTML=protoarchiveCanonicalRecords.map(function(r){var author=r.authors?'<p class="pl-status pl-authors">'+r.authors+'</p>':'',source=r.href?'<a class="pl-source" href="'+r.href+'" rel="noopener noreferrer" target="_blank"><span>Источник ↗</span><span class="pl-source-domain">'+r.domain+'</span></a>':'';return '<article class="pl-event" data-type="'+r.type+'"><div class="pl-year">'+r.year+'</div><span class="pl-node"></span><div class="pl-card"><div><div class="pl-meta ay-type-meta"><span class="pl-tag">'+r.type+'</span></div><h2 class="pl-name ay-type-h2">'+r.title+'</h2>'+author+'<p class="pl-metric">'+r.metric+'</p><p class="pl-text">'+r.text+'</p></div><div class="pl-proof"><p class="pl-type">'+r.type+' / '+protoarchiveModes[r.type]+'</p>'+source+'</div></div></article>';}).join('');}
    var evidence=root.querySelector('.research-detail-evidence-frame');if(evidence)evidence.innerHTML='<section class="research-detail-protocol__field"><h2 class="research-detail-protocol__label">ГИПОТЕЗА</h2><p class="research-detail-protocol__text">Достоверность документа определяется не только реальностью события. Она возникает из совпадения формы документа с культурными протоколами доказательства. Вымышленная биография, музейная карточка или архивная фотография могут производить ощущение исторического факта ещё до его проверки.</p></section><section class="research-detail-protocol__field"><h2 class="research-detail-protocol__label">МЕТОД</h2><p class="research-detail-protocol__text">Исследование сопоставляет 25 художественных проектов. На основной карте выделены 16 ключевых случаев. Каждый кейс анализируется по двум параметрам: какой режим документа он создаёт и какой механизм заставляет этому документу доверять.</p></section><section class="research-detail-protocol__field"><h2 class="research-detail-protocol__label">ВЫВОД</h2><p class="research-detail-protocol__text">Документ больше не обязательно следует за событием. Он может создавать для вымышленного мира прошлое, авторов, институции и материальные следы.</p></section>';
    var result=root.querySelector('[aria-label="Результат исследования"]');if(result)result.innerHTML='<section class="research-detail-protocol__field"><h2 class="research-detail-protocol__label">РЕЗУЛЬТАТ</h2><p class="research-detail-protocol__text">Выборка показывает четыре устойчивых механизма доверия: архивную форму, институциональный авторитет, экспертное знание и вычислительную правдоподобность. Форма источника становится частью доказательства.</p></section>';
    var relation=root.querySelector('.ay-semantic-relation');if(relation){var relationLink=relation.querySelector('a');if(relationLink)relationLink.textContent='БЫЛИ ИЛИ НЕ БЫЛИ ↗';}
  }
  function protoarchiveSvg(mobile, records) {
    var svg=el('svg',{viewBox:mobile?'0 0 350 1360':'0 0 1120 680',role:'img','aria-label':'Поле нитей Преархива: 16 кейсов проходят через девять режимов документа к четырём механизмам доверия','class':'research-analytics__svg research-analytics__svg--'+(mobile?'mobile':'desktop')});
    var modes=protoarchiveModes;
    var branches=protoarchiveBranches;
    if(mobile){
      svg.appendChild(el('text',{x:8,y:24,'class':'research-analytics__thread-heading'},'16 КЕЙСОВ'));
      svg.appendChild(el('text',{x:166,y:24,'class':'research-analytics__thread-heading'},'РЕЖИМ'));
      svg.appendChild(el('text',{x:238,y:24,'class':'research-analytics__thread-heading'},'МЕХАНИЗМ / 4 ВЕТВИ'));
      records.forEach(function(r,i){
        var y=62+i*80,branch=branches[r.type],open=r.type==='A7'||r.type==='A8';
        svg.appendChild(el('line',{x1:145,y1:y,x2:326,y2:y,'class':'research-analytics__thread '+(open?'research-analytics__thread--open':'')}));
        svg.appendChild(el('circle',{cx:158,cy:y,r:3,'class':'research-analytics__node'}));
        svg.appendChild(el('circle',{cx:228,cy:y,r:3,'class':'research-analytics__node'}));
        var caseLabel=el('text',{x:8,y:y-3,'class':'research-analytics__thread-case'}),caseLines=[],lineText='';r.title.split(' ').forEach(function(word){if((lineText+' '+word).trim().length>22&&lineText){caseLines.push(lineText);lineText=word;}else lineText=(lineText+' '+word).trim();});if(lineText)caseLines.push(lineText);caseLabel.appendChild(el('tspan',{x:8,dy:0},String(i+1).padStart(2,'0')+' / '+r.year));caseLines.forEach(function(value,lineIndex){caseLabel.appendChild(el('tspan',{x:8,dy:lineIndex===0?13:12},value));});svg.appendChild(caseLabel);
        svg.appendChild(el('text',{x:166,y:y-8,'class':'research-analytics__thread-code'},r.type));
        var branchWords=branch.split(' '),branchText=el('text',{x:238,y:y-17,'class':'research-analytics__thread-branch'});branchWords.forEach(function(word,wordIndex){branchText.appendChild(el('tspan',{x:238,dy:wordIndex===0?0:13},word));});svg.appendChild(branchText);
      });
    }else{
      var caseX=300,modeX=620,branchX=920;
      var typeOrder=['A1','A2','A3','A4','A5','A6','A7','A8','A9'];
      var modeY={};typeOrder.forEach(function(type,i){modeY[type]=88+i*66;});
      var branchY={'АРХИВНАЯ ФОРМА':140,'ИНСТИТУЦИОНАЛЬНЫЙ АВТОРИТЕТ':286,'ЭКСПЕРТНОЕ ЗНАНИЕ':432,'ВЫЧИСЛИТЕЛЬНАЯ ПРАВДОПОДОБНОСТЬ':578};
      svg.appendChild(el('text',{x:44,y:30,'class':'research-analytics__thread-heading'},'16 КЛЮЧЕВЫХ КЕЙСОВ'));
      svg.appendChild(el('text',{x:modeX,y:30,'text-anchor':'middle','class':'research-analytics__thread-heading'},'РЕЖИМ ДОКУМЕНТА / A1—A9'));
      svg.appendChild(el('text',{x:branchX,y:30,'text-anchor':'middle','class':'research-analytics__thread-heading'},'МЕХАНИЗМ ДОВЕРИЯ / 4 ВЕТВИ'));
      records.forEach(function(r,i){
        var y=70+i*36,my=modeY[r.type],branch=branches[r.type],by=branchY[branch],open=r.type==='A7'||r.type==='A8';
        svg.appendChild(el('path',{d:'M '+caseX+' '+y+' C 410 '+y+', 500 '+my+', '+modeX+' '+my+' S 800 '+by+', '+branchX+' '+by,'class':'research-analytics__thread '+(open?'research-analytics__thread--open':'')}));
        svg.appendChild(el('circle',{cx:caseX,cy:y,r:3,'class':'research-analytics__node'}));
        svg.appendChild(el('text',{x:44,y:y+4,'class':'research-analytics__thread-case'},String(i+1).padStart(2,'0')+' / '+r.year+' / '+r.title));
      });
      typeOrder.forEach(function(type){var y=modeY[type];svg.appendChild(el('circle',{cx:modeX,cy:y,r:4,'class':'research-analytics__node'}));svg.appendChild(el('text',{x:modeX+12,y:y-10,'class':'research-analytics__thread-mode'},type+' / '+modes[type]));});
      ['АРХИВНАЯ ФОРМА','ИНСТИТУЦИОНАЛЬНЫЙ АВТОРИТЕТ','ЭКСПЕРТНОЕ ЗНАНИЕ','ВЫЧИСЛИТЕЛЬНАЯ ПРАВДОПОДОБНОСТЬ'].forEach(function(branch){var y=branchY[branch];svg.appendChild(el('circle',{cx:branchX,cy:y,r:5,'class':'research-analytics__node'}));var words=branch.split(' '),label=el('text',{x:branchX+14,y:y-10,'class':'research-analytics__thread-branch'});if(words.length>2){var split=Math.ceil(words.length/2);label.appendChild(el('tspan',{x:branchX+14,dy:0},words.slice(0,split).join(' ')));label.appendChild(el('tspan',{x:branchX+14,dy:13},words.slice(split).join(' ')));}else label.textContent=branch;svg.appendChild(label);});
      svg.appendChild(el('line',{x1:caseX,y1:48,x2:caseX,y2:636,'class':'research-analytics__hairline research-analytics__hairline--open'}));
      svg.appendChild(el('line',{x1:modeX,y1:48,x2:modeX,y2:636,'class':'research-analytics__hairline research-analytics__hairline--open'}));
      svg.appendChild(el('line',{x1:branchX,y1:48,x2:branchX,y2:636,'class':'research-analytics__hairline research-analytics__hairline--open'}));
    }
    return svg;
  }
  function atlasSvg(mobile) {
    var w=mobile?350:1120,h=mobile?1000:760;
    var svg=el('svg',{viewBox:'0 0 '+w+' '+h,role:'img','aria-label':'Карта смысловых связей между пятью исследованиями','class':'research-analytics__svg research-analytics__svg--'+(mobile?'mobile':'desktop')});
    var families=[
      {label:'РУССКИЙ ИНТЕЛЛЕКТ',href:'/research/russian-intellect/',concepts:['ЛЮДИ','ШКОЛЫ','МЕТОДЫ','ТЕХНОЛОГИИ']},
      {label:'ОБРАТНЫЙ ПРОМПТ',href:'/research/reverse-prompt/',concepts:['ИЗОБРАЖЕНИЕ','ЯЗЫК','МОДЕЛЬ','РЕКОНСТРУКЦИЯ']},
      {label:'ПРЕАРХИВ',href:'/protoarchive/',concepts:['ДОКУМЕНТ','ДОВЕРИЕ','ПАМЯТЬ','СВИДЕТЕЛЬСТВО']},
      {label:'ЖИВОЕ КАК МЕДИУМ',href:'/research/russian-bioart-history/',concepts:['ТЕЛО','МОДЕЛЬ','МАТЕРИАЛ','СИСТЕМА']},
      {label:'ПОЛЕВЫЕ ИССЛЕДОВАНИЯ',href:'/research/lab/',concepts:['ТЕРРИТОРИЯ','НАБЛЮДЕНИЕ','МЕТОД','МАТЕРИАЛ']}
    ];
    var cx=mobile?175:560,cy=mobile?470:370;
    var outerX=mobile?142:430,outerY=mobile?360:300;
    var innerX=mobile?95:280,innerY=mobile?245:210;
    var bases=[-90,-18,54,126,198];
    var offsets=[-24,-8,8,24];
    function point(angle,rx,ry){var a=angle*Math.PI/180;return[cx+Math.cos(a)*rx,cy+Math.sin(a)*ry];}
    function arcPath(start,end,rx,ry){var a=point(start,rx,ry),b=point(end,rx,ry);return'M '+a[0]+' '+a[1]+' A '+rx+' '+ry+' 0 0 1 '+b[0]+' '+b[1];}
    svg.appendChild(el('ellipse',{cx:cx,cy:cy,rx:innerX,ry:innerY,'class':'research-analytics__hairline research-analytics__hairline--open'}));
    families.forEach(function(f,i){svg.appendChild(el('path',{d:arcPath(bases[i]-29,bases[i]+29,outerX,outerY),'class':'research-analytics__system-arc atlas-system--'+i}));});
    var conceptPoints=families.map(function(f,i){return f.concepts.map(function(c,j){return point(bases[i]+offsets[j],innerX,innerY);});});
    var relations=[
      [0,0,0,1],[0,1,0,2],[0,2,0,3],
      [1,0,1,1],[1,1,1,2],[1,2,1,3],
      [2,0,2,1],[2,1,2,2],[2,2,2,3],
      [3,0,3,1],[3,1,3,2],[3,2,3,3],
      [4,0,4,1],[4,1,4,2],[4,2,4,3],
      [0,3,1,3],[0,2,3,2],[2,3,4,3]
    ];
    relations.forEach(function(r){var a=conceptPoints[r[0]][r[1]],b=conceptPoints[r[2]][r[3]],cross=r[0]!==r[2],bend=cross?.16:.38;svg.appendChild(el('path',{d:'M '+a[0]+' '+a[1]+' Q '+(cx+(a[0]-b[0])*bend)+' '+(cy+(a[1]-b[1])*bend)+' '+b[0]+' '+b[1],'class':'research-analytics__chord atlas-relation--'+r[0]+'--'+r[2]+(cross?' research-analytics__chord--cross':'')}));});
    families.forEach(function(f,i){
      var base=bases[i],hub=point(base,outerX,outerY),right=hub[0]>=cx;
      var link=f.href?el('a',{href:f.href,'class':'research-analytics__link research-analytics__system-link atlas-system--'+i,'data-system':i,'aria-label':'Открыть: '+f.label}):el('g',{'class':'research-analytics__link research-analytics__system-link atlas-system--'+i,'data-system':i,tabindex:'0',role:'group','aria-label':f.label+' — материал готовится к публикации'});
      link.appendChild(el('circle',{cx:hub[0],cy:hub[1],r:6,'class':'research-analytics__node'}));
      var labelX=hub[0]+(right?14:-14),labelY=hub[1]+4,labelAnchor=right?'start':'end';
      if(!mobile&&i===0){labelX=cx;labelY=48;labelAnchor='middle';}
      if(!mobile&&i===4){labelX=32;labelY=hub[1]-27;labelAnchor='start';}
      if(mobile){if(i===0){labelX=175;labelY=78;labelAnchor='middle';}if(i===1){labelX=330;labelY=337;labelAnchor='end';}if(i===2){labelX=330;labelY=786;labelAnchor='end';}if(i===3){labelX=20;labelY=786;labelAnchor='start';}if(i===4){labelX=20;labelY=280;labelAnchor='start';}}
      if(mobile&&i===4){var label=el('text',{x:labelX,y:labelY,'text-anchor':labelAnchor});label.appendChild(el('tspan',{x:labelX,dy:0},'ПОЛЕВЫЕ'));label.appendChild(el('tspan',{x:labelX,dy:14},'ИССЛЕДОВАНИЯ'));link.appendChild(label);}else{link.appendChild(el('text',{x:labelX,y:labelY,'text-anchor':labelAnchor},f.label));}
      svg.appendChild(link);
      svg.appendChild(el('text',{x:hub[0],y:hub[1]+(mobile?(i===0?23:-17):-16),'text-anchor':'middle','class':'research-analytics__micro-label'},String(i+1).padStart(2,'0')));
      f.concepts.forEach(function(c,j){var p=conceptPoints[i][j],out=p[0]>=cx;var group=el('g',{'class':'atlas-system--'+i});group.appendChild(el('circle',{cx:p[0],cy:p[1],r:3.5,'class':'research-analytics__node'}));group.appendChild(el('text',{x:p[0]+(out?9:-9),y:p[1]+4,'text-anchor':out?'start':'end','class':'research-analytics__micro-label'},c));svg.appendChild(group);});
    });
    svg.querySelectorAll('.research-analytics__system-link').forEach(function(link){function setActive(){if(svg.hasAttribute('data-selected-system'))return;var system=link.getAttribute('data-system');svg.setAttribute('data-preview-system',system);svg.setAttribute('data-active-system',system);}function clearActive(){svg.removeAttribute('data-preview-system');var selected=svg.getAttribute('data-selected-system');if(selected===null)svg.removeAttribute('data-active-system');else svg.setAttribute('data-active-system',selected);}link.addEventListener('mouseenter',setActive);link.addEventListener('mouseleave',clearActive);link.addEventListener('focus',setActive);link.addEventListener('blur',clearActive);});
    return svg;
  }
  function essaysSvg(mobile) {
    var w=mobile?350:1120,h=mobile?770:590;
    var svg=el('svg',{viewBox:'0 0 '+w+' '+h,role:'img','aria-label':'Матрица тем эссе','class':'research-analytics__svg research-analytics__svg--'+(mobile?'mobile':'desktop')});
    var items=[
      {n:'01',title:['КТО ВОСПИТЫВАЕТ','ВКУС МОДЕЛИ'],topic:'ВЫБОР',col:0,href:'https://www.sostav.ru/blogs/293065'},
      {n:'02',title:['КОГО ПРОГРАММИРУЮТ','БИОТЕХНОЛОГИИ'],topic:'ТЕЛО',col:2,href:'https://snob.ru/profile/412337/blog/3118815/'},
      {n:'03',title:['РОССИЯ','КАК ДАТАСЕТ'],topic:'ЯЗЫК',col:1,href:'/research/essays/russia-as-dataset/'},
      {n:'04',title:['ОШИБКА КАК','ТЕРРИТОРИЯ СВОБОДЫ'],topic:'ОШИБКА',col:0,href:'/research/essays/error-as-territory-of-freedom/'},
      {n:'05',title:['ТЯНИТОЛКАЙ:','ИИ-АГЕНТЫ'],topic:'ДОВЕРИЕ',col:1,href:'https://snob.ru/profile/412337/blog/3117444/'},
      {n:'06',title:['НАМ ВСЕМ КВАНТЫ,','НО НЕ СЕГОДНЯ'],topic:'ПАМЯТЬ',col:2,href:'https://snob.ru/profile/412337/blog/3117530/'}
    ];
    if(mobile){
      line(svg,[28,54],[28,718],'research-analytics__axis');
      items.forEach(function(it,i){var y=76+i*106,p=[68+(it.col*54),y];line(svg,[28,y],p,i===5?'research-analytics__edge--open':'');linkedNode(svg,p,it.topic,it.href,'start');multiline(svg,[p[0],y+28],it.title,'research-analytics__micro-label');svg.appendChild(el('text',{x:8,y:y+4,'class':'research-analytics__micro-label'},it.n));});
      multiline(svg,[8,756],['ТЕМА / ТЕКСТ / МЕТОД'],'research-analytics__micro-label');
    }else{
      var cols=[180,486,792],labels=['ДЕЙСТВИЕ','ЯЗЫК / СИСТЕМА','ТЕЛО / МАТЕРИАЛ'];
      cols.forEach(function(x,i){line(svg,[x,72],[x,522],'research-analytics__hairline research-analytics__hairline--open');svg.appendChild(el('text',{x:x,y:48,'class':'research-analytics__micro-label'},labels[i]));});
      [150,302,454].forEach(function(y){line(svg,[72,y],[1014,y],'research-analytics__hairline');});
      items.forEach(function(it,i){var row=Math.floor(i/3),x=cols[it.col],y=150+row*304+(i%3)*0;var p=[x,y];var link=el('a',{href:it.href,'class':'research-analytics__link','aria-label':'Открыть: '+it.title.join(' ')});link.appendChild(el('circle',{cx:x,cy:y,r:5,'class':'research-analytics__node '+(i===3?'research-analytics__node--accent':'')}));link.appendChild(el('text',{x:x+12,y:y+4},it.topic));svg.appendChild(link);multiline(svg,[x+12,y+28],it.title,'research-analytics__micro-label');svg.appendChild(el('text',{x:x-18,y:y+4,'text-anchor':'end','class':'research-analytics__micro-label'},it.n));});
      multiline(svg,[72,558],['6 ТЕКСТОВ / 6 ПОНЯТИЙ / 3 ПОЛЯ'],'research-analytics__micro-label');
    }
    return svg;
  }
  var labMethods=['ТЕРРИТОРИЯ','НАБЛЮДЕНИЕ','СИГНАЛ / ПОВЕДЕНИЕ','МАТЕРИАЛ','АРХИВ','СХЕМА / МОДЕЛИРОВАНИЕ'];
  var labDocuments=[
      {title:'Никола-Ленивец',methods:[0,1]},
      {title:'Научный квартал',methods:[0,3,4]},
      {title:'Собаки Павлова',methods:[2,5]},
      {title:'Павильон «Труд»',methods:[0,4]},
      {title:'Птичий двор',methods:[1,2]},
      {title:'Территория как система',methods:[0,1,3]},
      {title:'Проектная схема',methods:[1,5]},
      {title:'Жизнь в почве',methods:[1,3]},
      {title:'Исторический архив',methods:[2,4,5]}
  ];
  function bindLabDocumentaryCaptions(root) {
    root.querySelectorAll('.v16-card').forEach(function(card){
      var title=card.querySelector('.v16-title'),caption=card.querySelector('.v16-kicker');
      if(!title||!caption)return;
      var record=labDocuments.find(function(document){return document.title===title.textContent.trim();});
      if(record)caption.textContent=record.methods.map(function(method){return labMethods[method];}).join(' · ');
    });
  }
  function labsMatrix(mobile) {
    var methods=labMethods,records=labDocuments;
    var svg=el('svg',{viewBox:mobile?'0 0 350 1030':'0 0 1120 690',role:'img','aria-label':'Реляционная матрица девяти полевых документов и шести подтверждённых методов','class':'research-analytics__svg research-analytics__svg--'+(mobile?'mobile':'desktop')+' lab-relation-matrix'});
    if(mobile){
      svg.appendChild(el('text',{x:8,y:24,'class':'lab-matrix__heading'},'9 ПОЛЕВЫХ ДОКУМЕНТОВ / 21 СВЯЗЬ'));
      records.forEach(function(record,i){
        var top=58+i*106,lineY=top+47;
        svg.appendChild(el('line',{x1:8,y1:top+82,x2:342,y2:top+82,'class':'lab-matrix__row'}));
        svg.appendChild(el('text',{x:8,y:top,'class':'lab-matrix__index'},String(i+1).padStart(2,'0')));
        svg.appendChild(el('text',{x:34,y:top,'class':'lab-matrix__title'},record.title));
        var xs=record.methods.map(function(method,j){return record.methods.length===2?34+j*282:26+j*149;});
        if(xs.length>1){svg.appendChild(el('path',{d:'M '+xs[0]+' '+lineY+' Q '+((xs[0]+xs[xs.length-1])/2)+' '+(lineY-22)+' '+xs[xs.length-1]+' '+lineY,'class':'lab-matrix__arc'}));}
        record.methods.forEach(function(method,j){var x=xs[j],anchor=j===record.methods.length-1?'end':'start',label=methods[method].replace(' / ПОВЕДЕНИЕ','').replace(' / МОДЕЛИРОВАНИЕ','');svg.appendChild(el('circle',{cx:x,cy:lineY,r:4,'class':'research-analytics__node lab-matrix__mark'}));svg.appendChild(el('text',{x:x,y:lineY+20,'text-anchor':anchor,'class':'lab-matrix__method'},label));});
      });
    }else{
      var cols=[455,565,675,785,895,1005];
      svg.appendChild(el('text',{x:8,y:34,'class':'lab-matrix__heading'},'ПРОЕКТ / ПОЛЕВОЙ ДОКУМЕНТ'));
      methods.forEach(function(method,i){var label=el('text',{x:cols[i],y:24,'text-anchor':'middle','class':'lab-matrix__method'}),parts=method.split(' / ');label.appendChild(el('tspan',{x:cols[i],dy:0},parts[0]));if(parts[1])label.appendChild(el('tspan',{x:cols[i],dy:13},parts[1]));svg.appendChild(label);svg.appendChild(el('line',{x1:cols[i],y1:58,x2:cols[i],y2:658,'class':'lab-matrix__guide'}));});
      records.forEach(function(record,i){
        var y=102+i*62,first=cols[record.methods[0]],last=cols[record.methods[record.methods.length-1]];
        svg.appendChild(el('line',{x1:8,y1:y+24,x2:1112,y2:y+24,'class':'lab-matrix__row'}));
        svg.appendChild(el('text',{x:8,y:y+4,'class':'lab-matrix__index'},String(i+1).padStart(2,'0')));
        svg.appendChild(el('text',{x:42,y:y+4,'class':'lab-matrix__title'},record.title));
        if(first!==last)svg.appendChild(el('path',{d:'M '+first+' '+y+' Q '+((first+last)/2)+' '+(y-24)+' '+last+' '+y,'class':'lab-matrix__arc'}));
        record.methods.forEach(function(method){svg.appendChild(el('circle',{cx:cols[method],cy:y,r:4,'class':'research-analytics__node lab-matrix__mark'}));});
      });
      svg.appendChild(el('text',{x:8,y:682,'class':'lab-matrix__heading'},'6 МЕТОДОВ / 9 ДОКУМЕНТОВ / 21 ПОДТВЕРЖДЁННАЯ СВЯЗЬ'));
    }
    return svg;
  }
  function shell(kind,title,note,micro) {
    var registers={
      atlas:['АТЛАС / 01','КАРТА СВЯЗЕЙ МЕЖДУ ИССЛЕДОВАНИЯМИ'],
      essays:['МАТРИЦА / 01','ТЕМА / ТЕКСТ / МЕТОД'],
      protoarchive:['НИТИ / 01','КЕЙС → РЕЖИМ ДОКУМЕНТА → МЕХАНИЗМ ДОВЕРИЯ'],
      bioart:['ГЕНЕАЛОГИЯ / 01','ВРЕМЯ / ТЕМАТИЧЕСКИЕ ВЕТВИ'],
      prearchive:['ПОЛЕ / 01','ФРАГМЕНТЫ / НЕПОЛНЫЕ СВЯЗИ']
    };
    var register=registers[kind] || registers.bioart;
    var section=document.createElement('section'); section.className='research-analytics research-analytics--'+kind+' ay-editorial-field ay-editorial-field--'+kind;
    section.innerHTML='<div class="research-analytics__register ay-editorial-field__register"><span>'+register[0]+'</span><span>'+register[1]+'</span></div><div class="research-analytics__grid ay-editorial-field__grid"><div class="research-analytics__diagram ay-editorial-field__diagram"></div><aside class="research-analytics__note ay-editorial-field__note"><h2>'+title+'</h2><p>'+note+'</p><p class="research-analytics__micro ay-editorial-field__micro">'+micro+'</p></aside></div>';
    return section;
  }
  function mountResearchAtlas(root,anchor){root=root||document.querySelector('.research-index');if(!root||root.querySelector('.research-analytics--atlas'))return;if(!anchor&&(document.querySelector('script[src*="indexes-screenshot-baseline"]')||root.classList.contains('research-index--screenshot-baseline')))return;var s=shell('atlas','','','');var note=s.querySelector('.research-analytics__note');if(note)note.remove();var d=s.querySelector('.research-analytics__diagram');d.appendChild(atlasSvg(false));d.appendChild(atlasSvg(true));var legend=el('p',{'class':'research-analytics__legend'},'Линии показывают общие понятия и темы между пятью исследованиями. Они не обозначают причинность, историческое влияние или силу связи.');s.appendChild(legend);if(anchor)anchor.after(s);else{var filters=root.querySelector('.research-index__filters'),intro=root.querySelector('.research-index__intro');if(filters)filters.after(s);else if(intro)intro.after(s);}return s;}
  document.addEventListener('art-is-you:mount-research-atlas',function(event){var detail=event.detail||{};mountResearchAtlas(detail.root,detail.anchor);});
  function mountEssays(){var root=document.querySelector('.essays-index');if(!root||root.dataset.editorialProgram==='ready'||root.querySelector('.research-analytics--essays'))return;var s=shell('essays','Поле понятий','Матрица связывает опубликованные тексты не по рейтингу, а по исходному понятию и способу исследования.','6 ТЕКСТОВ / 6 ПОНЯТИЙ / 3 ПОЛЯ');var d=s.querySelector('.research-analytics__diagram');d.appendChild(essaysSvg(false));d.appendChild(essaysSvg(true));var nav=root.querySelector('.essays-index__nav');if(nav)nav.after(s);else root.querySelector('.essays-index__intro').after(s);}
  function mountProtoarchive(){
    var root=document.querySelector('.prearchive-linear');if(!root||root.querySelector('.ay-editorial-field--protoarchive'))return;
    canonicalizeProtoarchive(root);
    var records=Array.from(root.querySelectorAll('.pl-event')).map(function(e){return{year:e.querySelector('.pl-year').textContent.trim(),title:e.querySelector('.pl-name').textContent.trim().replace(/[«»]/g,''),type:e.dataset.type}});
    root.querySelectorAll('.pl-year').forEach(function(y){var raw=y.textContent.trim(),parts=raw.split(/[–—-]/);if(parts.length===2){y.classList.add('pl-year--range');y.innerHTML='<span>'+parts[0]+'</span><span class="pl-year__dash">—</span><span>'+parts[1]+'</span>';}});
    var s=shell('protoarchive','Поле незавершённых связей','События расходятся от документа несколькими неполными траекториями: вымысел, реконструкция, машинная память и свидетельство.','16 ФРАГМЕНТОВ / 4 ВЕТВИ');
    var d=s.querySelector('.ay-editorial-field__diagram'),register=s.querySelector('.ay-editorial-field__register'),note=s.querySelector('.ay-editorial-field__note');d.appendChild(protoarchiveSvg(false,records));d.appendChild(protoarchiveSvg(true,records));if(register)register.remove();if(note)note.remove();s.classList.add('research-analytics--bare');
    var shellRoot=root.querySelector('.pl-shell'),evidence=root.querySelector('.research-detail-evidence-frame'),method=root.querySelector('.pl-method'),controls=root.querySelector('.pl-controls'),optics=root.querySelector('.pl-side');root.insertBefore(s,evidence||shellRoot);if(method)method.remove();if(controls)controls.remove();if(optics)optics.remove();
  }
  function bioMorphologyField(records,mobile) {
    var w=mobile?350:1120,h=mobile?1320:660;
    var svg=el('svg',{viewBox:'0 0 '+w+' '+h,role:'img','aria-label':'Морфологическое поле русского биоарта: роль живого внутри художественного процесса','class':'bio-morph__svg bio-morph__svg--'+(mobile?'mobile':'desktop')});
    var zones=['ОБЪЕКТ НАБЛЮДЕНИЯ','МОДЕЛЬ','МАТЕРИАЛ','ДЕЙСТВУЮЩАЯ СИСТЕМА'];
    var labels={'01':'Освобождённое движение','02':'Биомеханика','03':'Зор-вед','04':'Бионика ЦНИИТИА','05':'ИБКС','06':'Артефакты','07':'Высиживание яйца','08':'Зоо — Homo Sapiens','09':'Сознание начеку','10':'То, что живёт во мне','11':'533 Sisters','13':'Танцующий лес','14':'Быть ветром для дерева','15':'Ghost Plants','16':'Живой труд','17':'Голем','18':'В состоянии живого'};
    var marks={'ОРГАНИЧЕСКИЙ МАТЕРИАЛ':'material','ЧЕЛОВЕЧЕСКОЕ ТЕЛО':'body','ПРИРОДА / ВОСПРИЯТИЕ':'observation','БИОЛОГИЯ КАК МОДЕЛЬ':'model','ПРИРОДНАЯ СРЕДА':'environment','ЖИВОТНЫЕ':'animal','РАСТЕНИЯ':'plant','БИОМАТЕРИАЛ':'biomaterial','КЛЕТОЧНАЯ КУЛЬТУРА':'cell'};
    function project(r,x,y,anchor){var g=el('g',{'class':'bio-morph__project bio-morph__project--'+marks[r.livingGroup],'data-bio-id':r.id,tabindex:'0',role:'button','aria-label':r.id+' / '+r.title});g.appendChild(el('title',{},r.date+' — '+r.title));g.appendChild(el('circle',{cx:x,cy:y,r:17,'class':'bio-morph__hit'}));g.appendChild(el('circle',{cx:x,cy:y,r:4,'class':'bio-morph__node'}));var tx=x+(anchor==='end'?-10:10),t=el('text',{x:tx,y:y-2,'text-anchor':anchor||'start','class':'bio-morph__title'});t.appendChild(el('tspan',{x:tx,dy:0},labels[r.id]||r.title));t.appendChild(el('tspan',{x:tx,dy:13,'class':'bio-morph__date'},r.date));g.appendChild(t);svg.appendChild(g);}
    if(mobile){var y=34;zones.forEach(function(zone){svg.appendChild(el('text',{x:8,y:y,'class':'bio-morph__zone-label'},zone));y+=26;records.filter(function(r){return r.role===zone;}).forEach(function(r){svg.appendChild(el('line',{x1:8,y1:y+19,x2:342,y2:y+19,'class':'bio-morph__rule'}));project(r,18,y);y+=48;});records.filter(function(r){return r.hybridRole===zone;}).forEach(function(r){svg.appendChild(el('line',{x1:8,y1:y+19,x2:342,y2:y+19,'class':'bio-morph__rule bio-morph__rule--hybrid'}));project(r,18,y);y+=48;});y+=28;});svg.setAttribute('viewBox','0 0 350 '+Math.max(920,y));return svg;}
    var rects={'ОБЪЕКТ НАБЛЮДЕНИЯ':[44,46,480,252],'МОДЕЛЬ':[596,46,480,252],'МАТЕРИАЛ':[44,364,480,252],'ДЕЙСТВУЮЩАЯ СИСТЕМА':[596,364,480,252]};zones.forEach(function(zone){var z=rects[zone];svg.appendChild(el('path',{d:'M '+z[0]+' '+(z[1]+24)+' H '+(z[0]+z[2]),'class':'bio-morph__rule'}));svg.appendChild(el('text',{x:z[0],y:z[1],'class':'bio-morph__zone-label'},zone));});
    var pt={'01':[142,438,'start'],'02':[680,430,'start'],'03':[510,278,'end'],'04':[726,140,'start'],'05':[896,212,'start'],'06':[800,610,'start'],'07':[770,500,'start'],'08':[142,142,'start'],'09':[1040,430,'end'],'10':[680,565,'start'],'11':[522,340,'end'],'13':[142,212,'start'],'14':[1040,565,'end'],'15':[142,570,'start'],'16':[315,480,'start'],'17':[326,212,'start'],'18':[1040,500,'end']};records.forEach(function(r){var p=pt[r.id];project(r,p[0],p[1],p[2]);});[['03',[524,278],[572,230]],['06',[800,610],[624,528]],['07',[770,500],[548,316]],['11',[522,340],[592,390]],['14',[1040,565],[592,420]]].forEach(function(x){svg.appendChild(el('line',{x1:x[1][0],y1:x[1][1],x2:x[2][0],y2:x[2][1],'class':'bio-morph__hybrid-link'}));});return svg;
  }
  function bioMorphologyLegend(){var legend=document.createElement('div');legend.className='bio-morph__legend';legend.innerHTML='<span>МАРКЕР ЖИВОГО КОМПОНЕНТА</span><i class="bio-morph__mark bio-morph__mark--body"></i><span>ТЕЛО</span><i class="bio-morph__mark bio-morph__mark--environment"></i><span>СРЕДА</span><i class="bio-morph__mark bio-morph__mark--animal"></i><span>ЖИВОТНЫЕ</span><i class="bio-morph__mark bio-morph__mark--plant"></i><span>РАСТЕНИЯ</span><i class="bio-morph__mark bio-morph__mark--material"></i><span>МАТЕРИАЛ / КЛЕТКИ</span>';return legend;}
  function bioMorphSelected(records){var detail=document.createElement('section');detail.className='bio-morph-selected';detail.innerHTML='<div class="bio-morph-selected__index"></div><div class="bio-morph-selected__identity"><h3></h3><p></p></div><div><span>РОЛЬ ЖИВОГО</span><p class="role"></p></div><div><span>ЖИВОЙ КОМПОНЕНТ</span><p class="living"></p></div><div><span>МЕХАНИЗМ</span><p class="mechanism"></p></div><div><span>КАТЕГОРИЯ</span><p class="category"></p></div><div><span>ИСТОЧНИК</span><p class="source"></p></div><div><span>РЕДАКЦИОННАЯ ОГОВОРКА</span><p class="note"></p></div><div><span>СТАТУС</span><p class="status"></p></div>';detail.update=function(id){var r=records.find(function(v){return v.id===id;})||records[0],source=detail.querySelector('.source');detail.dataset.bioId=r.id;detail.querySelector('.bio-morph-selected__index').textContent=r.id+' / '+r.date;detail.querySelector('h3').textContent=r.title;detail.querySelector('.bio-morph-selected__identity p').textContent=r.authors;detail.querySelector('.role').textContent=r.role+(r.hybridRole?' / '+r.hybridRole:'');detail.querySelector('.living').textContent=r.living;detail.querySelector('.mechanism').textContent=r.mechanism;detail.querySelector('.category').textContent=r.category;source.textContent='';if(r.sourceHref&&r.sourceHref!=='#'){var a=document.createElement('a');a.href=r.sourceHref;a.textContent=r.sourceText;source.appendChild(a);}else{source.textContent=r.sourceText;}detail.querySelector('.note').textContent=r.note;detail.querySelector('.status').textContent=r.status;};detail.update(records[0].id);return detail;}
  function bioMorphLedger(records){var section=document.createElement('section');section.className='bio-ledger bio-ledger--morph';section.innerHTML='<div class="bio-ledger__register"><span>РЕЕСТР / 17 ПРОЕКТОВ</span><span>ФАКТЫ / РОЛИ / ИСТОЧНИКИ</span></div><div class="bio-ledger__head"><span>ГОД</span><span>ПРОЕКТ / АВТОР</span><span>РОЛЬ ЖИВОГО</span><span>ЖИВОЙ КОМПОНЕНТ</span><span>ИСТОЧНИК</span></div>';records.forEach(function(r){var row=document.createElement('article');row.className='bio-ledger__row';row.dataset.bioId=r.id;var src=r.sourceHref&&r.sourceHref!=='#'?'<a class="bio-ledger__source" href="'+r.sourceHref+'">'+r.sourceText+'</a>':'<span class="bio-ledger__source">'+r.sourceText+'</span>';row.innerHTML='<button type="button" class="bio-ledger__select" aria-pressed="false"><span class="bio-ledger__date">'+r.date+'</span><span class="bio-ledger__main"><strong>'+r.title+'</strong><small>'+r.authors+'</small></span><span class="bio-ledger__role">'+r.role+(r.hybridRole?' / '+r.hybridRole:'')+'</span><span class="bio-ledger__living">'+r.living+'</span></button>'+src;section.appendChild(row);});return section;}
  function mountBio(){
    var root=document.querySelector('.bio-timeline'),intro=root&&root.querySelector('.bio-timeline__intro');if(!intro||document.querySelector('.ay-editorial-field--bioart'))return;
    localizeBioart();
    var records=extractBioRecords(root),s=shell('bioart','','',''),d=s.querySelector('.ay-editorial-field__diagram'),note=s.querySelector('.ay-editorial-field__note'),register=s.querySelector('.ay-editorial-field__register');s.classList.add('research-analytics--bioart-morph');d.appendChild(bioMorphologyField(records,false));d.appendChild(bioMorphologyField(records,true));if(note)note.remove();if(register)register.remove();
    var oldText=root.querySelector('.ay-v2-text-module'),oldControls=root.querySelector('.bio-timeline__controls'),oldMeta=root.querySelector('.bio-timeline__index-meta'),oldGrid=root.querySelector('.bio-timeline__grid');if(oldText)oldText.remove();if(oldControls)oldControls.remove();if(oldMeta)oldMeta.remove();
    var field=document.createElement('section');field.className='bio-morph';field.innerHTML='<div class="bio-morph__register"><span>17 ПРОЕКТОВ / МОРФОЛОГИЯ ЖИВОГО</span><span>РОЛЬ ЖИВОГО ВНУТРИ ХУДОЖЕСТВЕННОГО ПРОЦЕССА</span></div>';field.appendChild(s);field.appendChild(bioMorphologyLegend());var ledger=bioMorphLedger(records),evidence=root.querySelector('.research-detail-evidence-frame');intro.after(field);if(evidence){field.after(evidence);evidence.after(ledger);}else{field.after(ledger);}if(oldGrid)oldGrid.remove();
    function selectRecord(id){var active=Boolean(id);if(active)root.dataset.bioInteractionState='selected';else root.removeAttribute('data-bio-interaction-state');root.querySelectorAll('[data-bio-id]').forEach(function(e){e.classList.remove('is-preview');e.classList.toggle('is-selected',active&&e.dataset.bioId===id);});ledger.querySelectorAll('.bio-ledger__row').forEach(function(row){var selected=active&&row.dataset.bioId===id;row.classList.remove('is-preview');row.classList.toggle('is-selected',selected);row.querySelector('.bio-ledger__select').setAttribute('aria-pressed',selected?'true':'false');});}
    function previewRecord(id){if(root.querySelector('.bio-morph__project.is-selected'))return;if(id)root.dataset.bioInteractionState='preview';else root.removeAttribute('data-bio-interaction-state');root.querySelectorAll('.bio-morph__project').forEach(function(project){project.classList.toggle('is-preview',project.dataset.bioId===id);});ledger.querySelectorAll('.bio-ledger__row').forEach(function(row){row.classList.toggle('is-preview',row.dataset.bioId===id);});}
    function toggleRecord(id){selectRecord(root.querySelector('.bio-morph__project.is-selected')?.dataset.bioId===id?'':id);}
    root.querySelectorAll('.bio-morph__project').forEach(function(project){project.addEventListener('pointerenter',function(){previewRecord(project.dataset.bioId);});project.addEventListener('pointerleave',function(){previewRecord('');});project.addEventListener('focus',function(){previewRecord(project.dataset.bioId);});project.addEventListener('blur',function(){previewRecord('');});project.addEventListener('click',function(){toggleRecord(project.dataset.bioId);});project.addEventListener('keydown',function(event){if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleRecord(project.dataset.bioId);}});});
    ledger.querySelectorAll('.bio-ledger__select').forEach(function(button){var id=button.closest('.bio-ledger__row').dataset.bioId;button.addEventListener('pointerenter',function(){previewRecord(id);});button.addEventListener('pointerleave',function(){previewRecord('');});button.addEventListener('focus',function(){previewRecord(id);});button.addEventListener('blur',function(){previewRecord('');});button.addEventListener('click',function(){toggleRecord(id);});});
    root.addEventListener('keydown',function(event){if(event.key==='Escape')selectRecord('');});
    selectRecord('');
  }
  function mountLabs(){
    var root=document.querySelector('.lab-page');if(!root||root.querySelector('.research-analytics--labs'))return;
    var s=shell('labs','','',''),note=s.querySelector('.research-analytics__note');
    s.querySelector('.research-analytics__register span:first-child').textContent='МАТРИЦА / 01';
    s.querySelector('.research-analytics__register span:last-child').textContent='ПРОЕКТ → ПОДТВЕРЖДЁННЫЙ МЕТОД';
    if(note)note.remove();
    s.querySelector('.research-analytics__diagram').appendChild(labsMatrix(false));
    s.querySelector('.research-analytics__diagram').appendChild(labsMatrix(true));
    var nav=root.querySelector('.lab-nav'),story=root.querySelector('.v16-story'),evidence=root.querySelector('.research-detail-evidence-frame');if(nav&&evidence){root.insertBefore(s,evidence);evidence.after(nav);}else if(nav){nav.after(s);}else{root.querySelector('.lab-header').after(s);}
    var register=document.createElement('div');register.className='lab-evidence-register';register.innerHTML='<span>ПОЛЕВЫЕ ДОКУМЕНТЫ / 01—09</span><span>ИЗОБРАЖЕНИЕ / НАБЛЮДЕНИЕ / СЛЕД</span>';(evidence?(nav||evidence):s).after(register);
    bindLabDocumentaryCaptions(root);
  }
  function localizeBioart() {
    var root=document.querySelector('.bio-timeline'); if(!root)return;
    var replacements={
      'BIOART TIMELINE / 01—17':'БИОАРТ / 17 ПРОЕКТОВ',
      'PUBLISHED VERSION / SNOB.RU ↗':'ОПУБЛИКОВАННАЯ ВЕРСИЯ / «СНОБ» ↗',
      'GREEN/BLUE':'ЗЕЛЁНЫЙ / СИНИЙ',
      'GREEN/YELLOW':'ЗЕЛЁНЫЙ / ЖЁЛТЫЙ',
      'GREEN':'ЗЕЛЁНЫЙ',
      'Ядро bioart':'Ядро биоарта',
      'Архитектурная бионика / biomimetic design':'Архитектурная бионика / биомиметическое проектирование',
      'Музей «Гараж»; Soviet Case Register':'Музей «Гараж»; Реестр советских практик',
      'Биополитический body art':'Биополитическое телесное искусство',
      'Wet bioart / трансгенный организм':'Биоарт с живым материалом / трансгенный организм',
      'Организм–интерфейс / augmented bioart':'Организм–интерфейс / дополненный биоарт',
      'Биологическая соагентность / naturalist art':'Биологическая соагентность / натуралистическое искусство',
      'Растительная система / data bioart':'Растительная система / биоарт данных',
      'Растительный data art / межвидовой интерфейс':'Растительное искусство данных / межвидовой интерфейс',
      'Biomaterial / decellularisation art':'Биоматериал / искусство децеллюляризации',
      'Biomaterial art':'Искусство биоматериалов',
      'Лабораторно опосредованный biomaterial art':'Лабораторно опосредованное искусство биоматериалов',
      'Wet bioart / клеточная культура':'Биоарт с живым материалом / клеточная культура'
    };
    var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); var nodes=[]; while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(function(n){var t=n.nodeValue.trim();if(replacements[t])n.nodeValue=n.nodeValue.replace(t,replacements[t]);});
    var eyebrow=root.querySelector('.bio-timeline__eyebrow'),lead=root.querySelector('.bio-timeline__lead');
    if(eyebrow)eyebrow.textContent='04 / LIVING SYSTEMS / 1918—2022';
    if(lead)lead.textContent='Это не история прямой преемственности. Исследование прослеживает, как менялась роль живого внутри художественного процесса: от объекта наблюдения и модели движения — к материалу и действующей системе.';
    root.querySelectorAll('.timeline-card__date').forEach(function(d){var t=d.textContent.trim();if(/[–—-]/.test(t))d.classList.add('timeline-card__date--range');if(t.length>13)d.classList.add('timeline-card__date--long');});
  }
  function localizeProtoarchive(){
    var root=document.querySelector('.prearchive-linear');if(!root)return;
    var map={'AI / MEDIA / MEMORY':'ИИ / МЕДИА / ПАМЯТЬ','OPEN RESEARCH':'ОТКРЫТОЕ ИССЛЕДОВАНИЕ','GLOBAL':'МИР','RU':'РОССИЯ','ASIA':'АЗИЯ','ART.IS.YOU / PREARCHIVE':'ART.IS.YOU / ПРЕАРХИВ','TIME / DOCUMENT / TRUST':'ВРЕМЯ / ДОКУМЕНТ / ДОВЕРИЕ','Protoarchive':'Преархив','Документ больше не обязательно следует за событием: он может появиться раньше и помочь самому событию стать правдоподобным. Protoarchive собирает псевдонаучные архивы, телемистификации и фиктивные источники, чтобы показать механику производства доверия.':'Документ больше не обязательно следует за событием: он может появиться раньше и помочь самому событию стать правдоподобным. Преархив собирает псевдонаучные архивы, телемистификации и фиктивные источники, чтобы показать механику производства доверия.','Provenance-стандарт':'Стандарт происхождения','5,85 млрд image-text pairs':'5,85 млрд пар «изображение — текст»','AI как музейная среда':'ИИ как музейная среда','AI входит в музейную рамку не как инструмент ускорения, а как среда, где заново проверяются язык, авторство и человеческий след.':'ИИ входит в музейную рамку не как инструмент ускорения, а как среда, где заново проверяются язык, авторство и человеческий след.','VR-встреча с умершей дочерью':'встреча с умершей дочерью в виртуальной реальности','Источник: публичные материалы о VR-документальном кейсе.':'Источник: публичные материалы о документальном случае виртуальной реальности.','Источник: arXiv / OpenAI paper.':'Источник: статья arXiv / OpenAI.','Источник: arXiv paper.':'Источник: статья arXiv.','arXiv paper':'статья arXiv','Источник: MyHeritage product context.':'Источник: материалы продукта MyHeritage.','Источник: C2PA specification release.':'Источник: публикация спецификации C2PA.','Источник: Tribeca film page.':'Источник: страница фильма Tribeca.','Источник: arXiv preprint.':'Источник: препринт arXiv.'};
    var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(function(n){var raw=n.nodeValue,trim=raw.trim();if(map[trim])n.nodeValue=raw.replace(trim,map[trim]);});
    var kicker=root.querySelector('.pl-kicker'),definition=root.querySelector('.pl-definition');
    if(kicker)kicker.textContent='03 / ПАМЯТЬ И СВИДЕТЕЛЬСТВО';
    if(definition)definition.innerHTML='<strong>Преархив</strong> — исследование архивов, авторов, биографий, институций и следов событий, которых никогда не было.';
  }
  function localizeResearchIndex(){
    var root=document.querySelector('.research-index');if(!root)return;
    var legacyGrid=root.querySelector('.research-index__grid');if(legacyGrid)legacyGrid.remove();
    var map={
      'RESEARCH INDEX / 01—08':'УКАЗАТЕЛЬ ИССЛЕДОВАНИЙ / 01—04','RESEARCH / SIX DIRECTIONS':'ИССЛЕДОВАНИЯ / ЧЕТЫРЕ СИСТЕМЫ','LIVE INDEX':'ЖИВОЙ УКАЗАТЕЛЬ','12 ACTIVE LAYERS':'12 АКТИВНЫХ СЛОЁВ','MODE / SYNTHESIS':'РЕЖИМ / СИНТЕЗ','AI CULTURE / ACTIVE ARCHIVE':'КУЛЬТУРА ИИ / АКТИВНЫЙ АРХИВ','01 / ESSAYS / AI CULTURE':'01 / ЭССЕ / КУЛЬТУРА ИИ','02 / RESEARCH / CULTURAL CODE':'02 / ИССЛЕДОВАНИЕ / КУЛЬТУРНЫЙ КОД','03 / ART INTERVIEWS':'03 / ИНТЕРВЬЮ','04 / CURATORIAL RESEARCH':'04 / КУРАТОРСКОЕ ИССЛЕДОВАНИЕ','05 / BIOART':'05 / БИОАРТ','06 / OPEN RESEARCH / MEMORY':'06 / ОТКРЫТОЕ ИССЛЕДОВАНИЕ / ПАМЯТЬ','07 / LABS / PRACTICE':'07 / ЛАБОРАТОРИИ / ПРАКТИКА','08 / ESSAY / AI & ERROR':'08 / ЭССЕ / ИИ И ОШИБКА','01 / INTELLECTUAL HISTORY':'01 / ИСТОРИЯ ИНТЕЛЛЕКТА','02 / MACHINE READING':'02 / МАШИННОЕ ЧТЕНИЕ','04 / CULTURAL CODE':'04 / КУЛЬТУРНЫЙ КОД','04 / LIVING SYSTEMS':'04 / ЖИВЫЕ СИСТЕМЫ','05 / LIVING SYSTEMS':'05 / ЖИВЫЕ СИСТЕМЫ','05 / IN PROGRESS':'05 / В РАБОТЕ','06 / IN PROGRESS':'06 / В РАБОТЕ','DOCUMENT BEFORE FACT':'ДОКУМЕНТ ДО ФАКТА','TIME / DOCUMENT / TRUST':'ВРЕМЯ / ДОКУМЕНТ / ДОВЕРИЕ','TEXT / IMAGE':'ТЕКСТ / ИЗОБРАЖЕНИЕ','MACHINE VISION':'МАШИННОЕ ЗРЕНИЕ','VISUAL LANGUAGE':'ВИЗУАЛЬНЫЙ ЯЗЫК','MEMORY LAYERS':'СЛОИ ПАМЯТИ','OPEN ARCHIVE':'ОТКРЫТЫЙ АРХИВ','WORK IN PROGRESS':'В РАБОТЕ','PUBLISHED / ONGOING':'ОПУБЛИКОВАНО / ПРОДОЛЖАЕТСЯ','ONGOING':'ПРОДОЛЖАЕТСЯ','Новое редко возникает с нуля. Меня интересует, какие старые идеи продолжают жить внутри современных технологий и какую роль получают в культуре эпохи AI. Можно ли доверять документу, если события не было? Где находится авторство, когда результат создаёт уже не один человек? Исследование начинается с такого вопроса и позволяет увидеть в технологии больше, чем техническое решение. Оно показывает, какие представления и отношения перестраиваются вокруг неё.':'Новое редко возникает с нуля. Меня интересует, какие старые идеи продолжают жить внутри современных технологий и какую роль получают в культуре эпохи ИИ. Можно ли доверять документу, если события не было? Где находится авторство, когда результат создаёт уже не один человек? Исследование начинается с такого вопроса и позволяет увидеть в технологии больше, чем техническое решение. Оно показывает, какие представления и отношения перестраиваются вокруг неё.','Два века российских математических школ и научных идей связывают историю вычислений с современной культурой AI. Исследование проверяет, какие способы мышления продолжают работать внутри новых систем.':'Два века российских математических школ и научных идей связывают историю вычислений с современной культурой ИИ. Исследование проверяет, какие способы мышления продолжают работать внутри новых систем.'
    };
    replaceText(root,map);
    var canon=document.querySelector('.research-canon-content');if(canon)replaceText(canon,map);
    var eyebrow=root.querySelector('.research-index__eyebrow'),subtitle=root.querySelector('.research-canon-subtitle'),lead=root.querySelector('.research-canon-lead');
    if(eyebrow){var parts=eyebrow.querySelectorAll('span');if(parts[0])parts[0].textContent='ART.IS.YOU';if(parts[1])parts[1].textContent='RESEARCH INDEX / 01—05';}
    if(subtitle)subtitle.remove();
    if(lead)lead.textContent='Новое редко возникает с нуля. Меня интересует, как старые идеи продолжают жить внутри современных технологий и что происходит с ними в культуре эпохи AI. Можно ли доверять документу, если события не было? Где находится авторство, когда результат создаёт уже не один человек? Исследование позволяет увидеть в технологии больше, чем техническое решение. Оно показывает, какие представления и отношения она меняет вокруг себя.';
    function setCard(id,meta,title,question,body,href,cta){
      var card=document.querySelector(id);if(!card)return;
      var metaNode=card.querySelector('.research-canon-card__meta'),titleNode=card.querySelector('h2'),questionNode=card.querySelector('.research-canon-question'),bodyNode=card.querySelector('.research-canon-card__body');
      if(metaNode)metaNode.textContent=meta;if(titleNode)titleNode.textContent=title;if(questionNode)questionNode.textContent=question;
      if(bodyNode){var paragraphs=bodyNode.querySelectorAll('p');if(body===null&&paragraphs[1])paragraphs[1].remove();else if(body&&paragraphs[1])paragraphs[1].textContent=body;bodyNode.querySelectorAll('p:not(.research-canon-question)').forEach(function(p,index){if(index>0)p.remove();});}
      if(href){var action=card.querySelector('.research-canon-cta');if(action){var a=document.createElement('a');a.className=action.className;a.href=href;a.textContent=cta;action.replaceWith(a);}}
    }
    setCard('#canon-intellectual-history','01 / INTELLECTUAL HISTORY','Русский интеллект','Как идеи, люди и институты складываются в историю вычислительной культуры?','Интерактивная карта двух веков российской математической и технологической мысли связывает людей, школы и методы с современными R&D-системами.','/research/russian-intellect/','ОТКРЫТЬ ИССЛЕДОВАНИЕ ↗');
    setCard('#canon-machine-reading','02 / MACHINE READING','Обратный промпт','Что сохраняется и теряется, когда произведение переводится из изображения в текст и обратно?','Произведение проходит путь от изображения к экфрасису, затем к промпту и двум независимым AI-реконструкциям. Исследование фиксирует смысловой дрейф между оригиналом и машинной версией. Кураторы проекта — Юлия Чернышева и Софья Беньяминова.','/research/reverse-prompt/','ОТКРЫТЬ ИССЛЕДОВАНИЕ ↗');
    setCard('#canon-memory','03 / MEMORY & EVIDENCE','PROTOARCHIVE','Почему сконструированное прошлое начинает выглядеть как документ?','Преархив — исследовательская рамка для случаев, в которых документ перестаёт быть только следом события и начинает участвовать в производстве его достоверности.','/protoarchive/','ОТКРЫТЬ ИССЛЕДОВАНИЕ ↗');
    setCard('#canon-living-systems','04 / LIVING SYSTEMS','ЖИВОЕ КАК МЕДИУМ','Что меняется в произведении, когда живое становится героем?','Исследование прослеживает переход от живого как объекта наблюдения и модели к материалу и действующей системе.','/research/russian-bioart-history/','ОТКРЫТЬ ИССЛЕДОВАНИЕ ↗');
    var canonicalRoot=document.querySelector('.research-canon-content');
    if(canonicalRoot&&!canonicalRoot.querySelector('#canon-field-methods')){var field=document.createElement('article');field.className='research-canon-card';field.id='canon-field-methods';field.innerHTML='<div class="research-canon-card__meta">05 / FIELD METHODS</div><div class="research-canon-card__body"><h2>Полевые исследования</h2><p class="research-canon-question">Как наблюдение территории превращается в проектное решение?</p><p>История места, физические процессы и существующие сценарии сначала задают условия. Художественная форма возникает как результат исследования территории.</p><a class="research-canon-cta" href="/research/lab/">ОТКРЫТЬ ИССЛЕДОВАНИЕ ↗</a></div><figure><img src="/assets/static.tildacdn.com/Arch_2019_artre004.jpeg" alt="Полевые исследования — работа с территорией" loading="lazy" decoding="async"></figure>';canonicalRoot.appendChild(field);}
    var authorship=canonicalRoot&&canonicalRoot.querySelector('#canon-authorship');if(authorship)authorship.remove();
    if(canonicalRoot){['#canon-intellectual-history','#canon-machine-reading','#canon-memory','#canon-living-systems','#canon-field-methods'].forEach(function(sel){var card=canonicalRoot.querySelector(sel);if(card)canonicalRoot.appendChild(card);});}
    mountResearchIndexVisualGrid();
  }
  function mountResearchIndexVisualGrid(){
    var root=document.querySelector('.research-canon-content');if(!root)return;
    if(!root.querySelector('.research-catalogue-register')){var catalogueRegister=document.createElement('div');catalogueRegister.className='research-catalogue-register';catalogueRegister.setAttribute('aria-label','Каталог исследовательских программ');catalogueRegister.innerHTML='<span>RESEARCH CATALOGUE / 01—05</span><span>ПОЛЕ / ВОПРОС / МАТЕРИАЛ</span>';root.prepend(catalogueRegister);}
    function svgElement(name,attrs,text){
      var node=document.createElementNS('http://www.w3.org/2000/svg',name);
      Object.keys(attrs||{}).forEach(function(key){node.setAttribute(key,attrs[key]);});
      if(text!==undefined)node.textContent=text;
      return node;
    }
    function prearchiveLandingVisual(){
      var figure=document.createElement('figure');figure.className='research-index-entry__visual research-prearchive-landing';
      var svg=svgElement('svg',{viewBox:'0 0 720 420',role:'img','aria-label':'Преархив: время, документ и доверие','class':'research-prearchive-landing__desktop'});
      var years=['1987','1991','1999','2004','2005','2016','2017','2020','2021','2022','2025','2026'];
      var branches=['ВЫМЫСЕЛ','РЕКОНСТРУКЦИЯ','МАШИННАЯ ПАМЯТЬ','СВИДЕТЕЛЬСТВО'];
      var lanes=[0,1,0,3,0,1,2,2,1,3,2,3];
      branches.forEach(function(label,i){var y=92+i*76;svg.appendChild(svgElement('line',{x1:116,y1:y,x2:694,y2:y,'class':'research-prearchive-landing__lane'}));svg.appendChild(svgElement('text',{x:8,y:y+4,'class':'research-prearchive-landing__branch'},label));});
      years.forEach(function(year,i){var x=124+i*(562/(years.length-1)),y=92+lanes[i]*76;svg.appendChild(svgElement('line',{x1:x,y1:48,x2:x,y2:352,'class':'research-prearchive-landing__guide'}));svg.appendChild(svgElement('circle',{cx:x,cy:y,r:i===11?5:3.5,'class':'research-prearchive-landing__node'}));svg.appendChild(svgElement('text',{x:x,y:382,'text-anchor':'middle','class':'research-prearchive-landing__year'},year));});
      svg.appendChild(svgElement('text',{x:8,y:22,'class':'research-prearchive-landing__axis'},'ВРЕМЯ × ДОКУМЕНТ × ДОВЕРИЕ'));
      var mobileSvg=svgElement('svg',{viewBox:'0 0 350 520',role:'img','aria-label':'Преархив: время, документ и доверие','class':'research-prearchive-landing__mobile'});
      mobileSvg.appendChild(svgElement('text',{x:8,y:20,'class':'research-prearchive-landing__axis'},'ВРЕМЯ × ДОКУМЕНТ × ДОВЕРИЕ'));
      branches.forEach(function(label,laneIndex){var laneYears=years.filter(function(_year,yearIndex){return lanes[yearIndex]===laneIndex;}),y=82+laneIndex*118;mobileSvg.appendChild(svgElement('text',{x:8,y:y-34,'class':'research-prearchive-landing__branch'},label));mobileSvg.appendChild(svgElement('line',{x1:16,y1:y,x2:334,y2:y,'class':'research-prearchive-landing__lane'}));laneYears.forEach(function(year,yearIndex){var x=laneYears.length===1?175:24+yearIndex*(302/(laneYears.length-1));mobileSvg.appendChild(svgElement('circle',{cx:x,cy:y,r:5,'class':'research-prearchive-landing__node'}));mobileSvg.appendChild(svgElement('text',{x:x,y:y+23,'text-anchor':'middle','class':'research-prearchive-landing__year'},year));});});
      figure.appendChild(svg);figure.appendChild(mobileSvg);return figure;
    }
    function bioartLandingVisual(){
      var figure=document.createElement('figure');figure.className='research-index-entry__visual research-bioart-landing';
      var svg=svgElement('svg',{viewBox:'0 0 720 420',role:'img','aria-label':'Морфология роли живого в художественном процессе'});
      var steps=[['ОБЪЕКТ','НАБЛЮДЕНИЯ'],['МОДЕЛЬ'],['МАТЕРИАЛ'],['ДЕЙСТВУЮЩАЯ','СИСТЕМА']];
      steps.forEach(function(lines,i){var x=82+i*186; if(i<steps.length-1)svg.appendChild(svgElement('line',{x1:x+22,y1:210,x2:x+164,y2:210,'class':'research-bioart-landing__edge'}));svg.appendChild(svgElement('circle',{cx:x,cy:210,r:i===3?7:5,'class':'research-bioart-landing__node'}));var textNode=svgElement('text',{x:x,y:170,'text-anchor':'middle','class':'research-bioart-landing__label'});lines.forEach(function(lineText,lineIndex){textNode.appendChild(svgElement('tspan',{x:x,dy:lineIndex===0?0:14},lineText));});svg.appendChild(textNode);});
      ['ТЕЛО','СРЕДА','РАСТЕНИЯ','МАТЕРИАЛ / КЛЕТКИ'].forEach(function(label,i){var x=82+i*186;svg.appendChild(svgElement('line',{x1:x,y1:218,x2:x,y2:316,'class':'research-bioart-landing__guide'}));svg.appendChild(svgElement('text',{x:x,y:340,'text-anchor':'middle','class':'research-bioart-landing__micro'},label));});
      svg.appendChild(svgElement('text',{x:8,y:22,'class':'research-bioart-landing__axis'},'РОЛЬ ЖИВОГО / 1918—2022'));
      figure.appendChild(svg);return figure;
    }
    function entry(card,visual,label){
      if(!card)return;
      card.classList.add('research-index-entry','research-index-entry--record');
      var body=card.querySelector('.research-canon-card__body');
      if(body){
        body.classList.add('research-index-entry__body');
        if(!body.querySelector('.research-index-entry__summary')){
          var description=body.querySelector('p:not(.research-canon-question)'),cta=body.querySelector('.research-canon-cta,.research-canon-status');
          if(description){var summary=document.createElement('div');summary.className='research-index-entry__summary';description.before(summary);summary.appendChild(description);if(cta)summary.appendChild(cta);}
        }
      }
      if(visual){
        visual.classList.add('research-index-entry__visual');
        if(label&&!visual.querySelector('.research-index-entry__label')){var caption=document.createElement('figcaption');caption.className='research-index-entry__label';caption.textContent=label;visual.appendChild(caption);}
      }
      var action=card.querySelector('.research-canon-cta[href]');
      if(action&&!card.dataset.indexNavigation){
        card.dataset.indexNavigation='ready';
        card.addEventListener('click',function(event){
          if(event.defaultPrevented||event.target.closest('a,button,iframe,input,select,textarea,label'))return;
          window.location.assign(action.href);
        });
      }
    }
    var intellect=root.querySelector('#canon-intellectual-history'),intellectVisual=intellect&&intellect.querySelector('.research-intellect-embed');
    if(intellectVisual){intellectVisual.innerHTML='<img class="research-intellect-fallback" src="/assets/art-is-you/russian-intellect-poster.webp" alt="Русский интеллект — карта интеллектуального наследия" width="1889" height="950" loading="eager" decoding="async">';}
    entry(intellect,intellectVisual,'FIG. 01 / INTELLECTUAL GENEALOGY');

    var reverse=root.querySelector('#canon-machine-reading'),media=reverse&&reverse.querySelector('.research-machine-reading-media');
    if(media){media.innerHTML='<figure class="research-machine-reading-frame research-machine-reading-frame--original"><img src="/assets/art-is-you/research/pokidyshev-original.jpg" alt="Иван Покидышев — оригинальная работа" loading="lazy" decoding="async"></figure><figure class="research-machine-reading-frame research-machine-reading-frame--model"><img src="/assets/art-is-you/research/pokidyshev-triptych.png" alt="Машинная реконструкция произведения" loading="lazy" decoding="async"></figure>';}
    entry(reverse,media,'FIG. 02 / IMAGE → MODEL');

    var prearchive=root.querySelector('#canon-memory'),prearchiveVisual=prearchive&&prearchive.querySelector('.prearchive-media,.research-prearchive-component');
    if(prearchive&&prearchiveVisual){var prearchiveChart=prearchiveLandingVisual();prearchiveVisual.replaceWith(prearchiveChart);prearchiveVisual=prearchiveChart;}
    entry(prearchive,prearchiveVisual,'FIG. 03 / MEMORY & EVIDENCE');

    var bioart=root.querySelector('#canon-living-systems');
    var bioartVisual=null;
    if(bioart){bioart.querySelectorAll('figure').forEach(function(node){node.remove();});bioart.classList.remove('research-index-entry--text-led');bioartVisual=bioartLandingVisual();bioart.appendChild(bioartVisual);}
    entry(bioart,bioartVisual,'FIG. 04 / MORPHOLOGY OF THE LIVING');

    var field=root.querySelector('#canon-field-methods'),fieldVisual=field&&field.querySelector('figure');
    if(fieldVisual){var fieldImage=fieldVisual.querySelector('img');if(fieldImage){fieldImage.removeAttribute('class');fieldImage.removeAttribute('data-original');fieldImage.loading='eager';fieldImage.src='/assets/static.tildacdn.com/topviewcube_.jpg';fieldImage.alt='Научный квартал — куб Докучаева';fieldImage.width=1680;fieldImage.height=1175;}}
    entry(field,fieldVisual,'FIG. 05 / FIELD DOCUMENT');
  }
  function localizeLabs(){
    var root=document.querySelector('.lab-page');if(!root)return;
    document.title='Полевые исследования — искусство, наука и среда';
    var map={
      'ART.IS.YOU / RESEARCH LAB':'ART.IS.YOU / ПОЛЕВЫЕ ИССЛЕДОВАНИЯ','SITE-SPECIFIC / FORESIGHT / ПУБЛИЧНОЕ ИСКУССТВО':'ТЕРРИТОРИЯ / ПРОГНОЗИРОВАНИЕ / ПУБЛИЧНОЕ ИСКУССТВО','Residencies & Labs':'Полевые исследования','JULIA CHERNYSHEVA':'ЮЛИЯ ЧЕРНЫШЕВА',
      'Position':'Позиция','Labs':'Полевые исследования','Nikola-Lenivets':'Никола-Ленивец','Science Quarter':'Научный квартал','Pavlov’s Dogs':'Собаки Павлова','Method':'Метод','Output':'Результат','Archive':'Архив',
      '1 BLOCK / FULL FIELD':'1 ДОКУМЕНТ / ПОЛЕ','2 BLOCKS / GRID':'2 ДОКУМЕНТА / ПОЛЕ','3 BLOCKS / GRID':'3 ДОКУМЕНТА / ПОЛЕ','ЛАБОРАТОРИЯ':'ПОЛЕВОЙ ДОКУМЕНТ',
      'NIKOLA-LENIVETS / FIELD RESEARCH':'НИКОЛА-ЛЕНИВЕЦ / ПОЛЕВОЕ ИССЛЕДОВАНИЕ','SCIENCE QUARTER / DOKUCHAEV CUBE':'НАУЧНЫЙ КВАРТАЛ / КУБ ДОКУЧАЕВА','PAVLOV’S DOGS / TEMPORARY OBJECT':'СОБАКИ ПАВЛОВА / ВРЕМЕННЫЙ ОБЪЕКТ','TERRITORY → RESEARCH → HYPOTHESIS → PUBLIC FORM':'ТЕРРИТОРИЯ → ИССЛЕДОВАНИЕ → ГИПОТЕЗА → ПУБЛИЧНАЯ ФОРМА',
      '01 / POSITION':'01 / ПОЗИЦИЯ','LAB AS METHOD':'ПОЛЕВОЕ ИССЛЕДОВАНИЕ КАК МЕТОД','FIELD RESEARCH':'ПОЛЕВОЕ ИССЛЕДОВАНИЕ','PUBLIC FORM':'ПУБЛИЧНАЯ ФОРМА','CONTEXT':'КОНТЕКСТ','FIELDWORK':'ПОЛЕВАЯ РАБОТА','SCENARIO':'СЦЕНАРИЙ','ARTIFACT':'АРТЕФАКТ',
      '02 / SELECTED LABS':'02 / ИЗБРАННЫЕ ПОЛЕВЫЕ ИССЛЕДОВАНИЯ','01 / RESIDENCY':'01 / РЕЗИДЕНЦИЯ','02 / FORESIGHT':'02 / ПРОГНОЗИРОВАНИЕ','03 / NIKOLA-LENIVETS':'03 / НИКОЛА-ЛЕНИВЕЦ','ARCHSTOYANIE / 2019':'АРХСТОЯНИЕ / 2019','RESIDENCY':'РЕЗИДЕНЦИЯ','LAND ART / SITE-SPECIFIC':'ЛЭНД-АРТ / РАБОТА С МЕСТОМ',
      '04 / SCIENCE QUARTER':'04 / НАУЧНЫЙ КВАРТАЛ','DOKUCHAEV CUBE / 2021':'КУБ ДОКУЧАЕВА / 2021','FORESIGHT / TEMPORARY OBJECT':'ПРОГНОЗИРОВАНИЕ / ВРЕМЕННЫЙ ОБЪЕКТ','SCIENCE / URBAN SPACE':'НАУКА / ГОРОДСКОЕ ПРОСТРАНСТВО','05 / PAVLOV’S DOGS':'05 / СОБАКИ ПАВЛОВА','TEMPORARY OBJECT / 2021':'ВРЕМЕННЫЙ ОБЪЕКТ / 2021','CONDITIONING / FAILURE':'УСЛОВНЫЙ РЕФЛЕКС / РАЗРЫВ',
      '06 / LAB METHOD':'06 / МЕТОД ПОЛЕВОГО ИССЛЕДОВАНИЯ','FROM CONTEXT TO ARTIFACT':'ОТ КОНТЕКСТА К АРТЕФАКТУ','AUTHORIAL METHOD':'АВТОРСКИЙ МЕТОД','05 STAGES':'05 ЭТАПОВ','LAB ≠ WORKSHOP':'ПОЛЕВОЕ ИССЛЕДОВАНИЕ ≠ МАСТЕРСКАЯ','LAB = CONTEXT + EXPERIMENT + PUBLIC FORM':'ПОЛЕВОЕ ИССЛЕДОВАНИЕ = КОНТЕКСТ + ЭКСПЕРИМЕНТ + ПУБЛИЧНАЯ ФОРМА','Territory':'Территория','FIELD':'ПОЛЕ','Archive':'Архив','MEMORY':'ПАМЯТЬ','Hypothesis':'Гипотеза','FRAME':'РАМКА','Prototype':'Прототип','TEST':'ПРОВЕРКА','Public Experience':'Публичный опыт','FORM':'ФОРМА',
      '07 / POSSIBLE OUTCOMES':'07 / ВОЗМОЖНЫЕ РЕЗУЛЬТАТЫ','MULTIPLE PUBLIC FORMS':'НЕСКОЛЬКО ПУБЛИЧНЫХ ФОРМ','Site-specific объекты':'Объекты, созданные для места','08 / ARCHIVE & CREDITS':'08 / АРХИВ И УЧАСТНИКИ','PEOPLE / INSTITUTIONS / DOCUMENTS':'ЛЮДИ / ИНСТИТУЦИИ / ДОКУМЕНТЫ','SELECTED RECORD':'ИЗБРАННЫЕ ЗАПИСИ','Credits':'Участники','PARTNER':'ПАРТНЁР','INSTITUTION':'ИНСТИТУЦИЯ','MEDIA':'МЕДИА',
      'LANDSCAPE':'ЛАНДШАФТ','OBSERVATION':'НАБЛЮДЕНИЕ','RECODING':'ПЕРЕКОДИРОВАНИЕ','SITE-SPECIFIC FORM':'ФОРМА ДЛЯ МЕСТА','GATE / PORTAL TO ANOTHER REALITY':'КАЛИТКА / ПОРТАЛ В ИНУЮ РЕАЛЬНОСТЬ','FIELD OBSERVATION → SITE-SPECIFIC PROPOSAL':'ПОЛЕВОЕ НАБЛЮДЕНИЕ → ПРЕДЛОЖЕНИЕ ДЛЯ МЕСТА','PAVILION OF LABOUR':'ПАВИЛЬОН «ТРУД»','FOUND ARCHITECTURE / CULTURAL RECODING':'НАЙДЕННАЯ АРХИТЕКТУРА / КУЛЬТУРНОЕ ПЕРЕКОДИРОВАНИЕ','BIRD YARD / MYTHICAL ZOO':'ПТИЧИЙ ДВОР / МИФИЧЕСКИЙ ЗООПАРК','LANDSCAPE / MYTH / SKETCH':'ЛАНДШАФТ / МИФ / ЭСКИЗ','THE VANITY OF EXISTENCE / TOP VIEW':'«ТЩЕТА СУЩЕГО» / ВИД СВЕРХУ','SOIL / COLONNADE / TEMPORARY MONUMENT':'ПОЧВА / КОЛОННАДА / ВРЕМЕННЫЙ ПАМЯТНИК','SCIENCE QUARTER / SOIL STRUCTURE':'НАУЧНЫЙ КВАРТАЛ / СТРУКТУРА ПОЧВЫ','PUBLIC LANDSCAPE / SCIENTIFIC MEMORY':'ПУБЛИЧНЫЙ ЛАНДШАФТ / НАУЧНАЯ ПАМЯТЬ','SCIENCE QUARTER / PROJECT SCHEME':'НАУЧНЫЙ КВАРТАЛ / ПРОЕКТНАЯ СХЕМА','VASILIEVSKY ISLAND / 2021':'ВАСИЛЬЕВСКИЙ ОСТРОВ / 2021','LIFE IN SOIL':'ЖИЗНЬ В ПОЧВЕ','MATERIAL REFERENCE / LIVING ARCHIVE':'МАТЕРИАЛЬНАЯ ССЫЛКА / ЖИВОЙ АРХИВ','ARCHIVE':'АРХИВ','RECONSTRUCTION':'РЕКОНСТРУКЦИЯ','EROSION':'ЭРОЗИЯ','RETURN':'ВОЗВРАЩЕНИЕ','CONNECTION':'СВЯЗЬ','CONDITIONING':'УСЛОВНЫЙ РЕФЛЕКС','FAILURE':'РАЗРЫВ','DECAY':'РАСПАД','CONNECTION / CONDITIONING / FAILURE':'СВЯЗЬ / УСЛОВНЫЙ РЕФЛЕКС / РАЗРЫВ','PAVLOV’S LABORATORY / ARCHIVE':'ЛАБОРАТОРИЯ ПАВЛОВА / АРХИВ','SCIENTIFIC REFERENCE':'НАУЧНАЯ ССЫЛКА','FORESIGHT':'ПРОГНОЗИРОВАНИЕ'
    };
    replaceText(root,map);
    var heading=root.querySelector('.lab-header h1');if(heading)heading.textContent='Полевые исследования';
    var labEyebrow=root.querySelector('.lab-header__eyebrow'),labLead=root.querySelector('.lab-header__lead'),labLeadText=labLead&&labLead.querySelector('p[data-ay-v2-role="lead"]');
    if(labEyebrow){var labParts=labEyebrow.querySelectorAll('span');if(labParts[0])labParts[0].textContent='05 / FIELD METHODS / 2019—2021';if(labParts[1])labParts[1].textContent='6 МЕТОДОВ / 9 ДОКУМЕНТОВ / 21 ПОДТВЕРЖДЁННАЯ СВЯЗЬ';}
    if(labLead&&labLeadText){var question=labLead.querySelector('.lab-header__question');if(!question){question=document.createElement('p');question.className='lab-header__question';labLead.insertBefore(question,labLeadText);}question.textContent='Как территория становится соавтором проекта?';labLeadText.textContent='Проект начинается не с образа, а с территории. История места, физические процессы, научные институции, люди и существующие сценарии сначала задают условия — и только затем возникает художественная форма.';}
    root.querySelectorAll('.v16-stage__bar').forEach(function(bar,i){var first=bar.querySelector('span:first-child');if(first)first.textContent=String(i+1).padStart(2,'0')+' / ПОЛЕВЫЕ ДОКУМЕНТЫ';});
    bindLabDocumentaryCaptions(root);
  }
  function alignResearchNavigation(){
    var root=document.querySelector('.research-index');if(!root)return;
    var eyebrow=root.querySelector('.research-index__eyebrow span:last-child');
    if(eyebrow)eyebrow.textContent='RESEARCH INDEX / 01—05';
    var nav=root.querySelector('.research-index__filters');
    var navigation=window.ART_IS_YOU_RESEARCH_NAVIGATION||[
      {key:'intellect',index:'01',menuLabel:'Русский интеллект',type:'INTELLECTUAL HISTORY',href:'/research/russian-intellect/'},
      {key:'reverse',index:'02',menuLabel:'Reverse Prompt',type:'MACHINE READING',href:'/research/reverse-prompt/'},
      {key:'protoarchive',index:'03',menuLabel:'Преархив',type:'MEMORY & EVIDENCE',href:'/protoarchive/'},
      {key:'bioart',index:'04',menuLabel:'Живое как медиум',type:'LIVING SYSTEMS',href:'/research/russian-bioart-history/'},
      {key:'field',index:'05',menuLabel:'Полевые исследования',type:'FIELD METHODS',href:'/research/lab/'}
    ];
    var primaryTitles={intellect:'Русский интеллект',reverse:'Обратный промпт',protoarchive:'Преархив',bioart:'Живое как медиум',field:'Полевые исследования'};
    if(nav){nav.classList.add('research-index__research-nav');nav.setAttribute('aria-label','Исследовательские поля');nav.innerHTML=navigation.filter(function(item){return item.key!=='index';}).map(function(item){var title=primaryTitles[item.key]||item.menuLabel;return '<a class="research-index__research-nav-item" data-research-key="'+item.key+'" href="'+item.href+'"><span class="research-index__research-nav-number">'+item.index+'</span><span class="research-index__research-nav-copy"><span class="research-index__research-nav-label">'+title+'</span><span class="research-index__research-nav-type">'+item.type+'</span></span></a>';}).join('');}
  }
  function alignFieldResearchHeader(){
    document.querySelectorAll('.ay-menu-panel--research a[href="/research/lab/"]').forEach(function(link){var label=link.querySelector('.ay-research-menu__label');if(label)label.textContent='Полевые исследования';else link.textContent='Полевые исследования';});
  }
  function localizeEssays(){
    var root=document.querySelector('.essays-index');if(!root)return;
    var map={
      'Essays':'Эссе','AUTHORIAL RESEARCH / ESSAYS':'АВТОРСКИЕ ИССЛЕДОВАНИЯ / ЭССЕ','Position':'Позиция','Featured':'Главное','Biotech':'Биотехнологии','Research Fields':'Поля исследований','Current Research':'Текущие исследования','01 / EDITORIAL POSITION':'01 / РЕДАКЦИОННАЯ ПОЗИЦИЯ','AI AS CULTURAL ENVIRONMENT':'ИИ КАК КУЛЬТУРНАЯ СРЕДА','RESEARCH METHOD':'МЕТОД ИССЛЕДОВАНИЯ','ACTION':'ДЕЙСТВИЕ','FREEDOM':'СВОБОДА','LANGUAGE':'ЯЗЫК','MEMORY':'ПАМЯТЬ','02 / FEATURED ESSAY':'02 / ГЛАВНОЕ ЭССЕ','MODEL / TASTE / SELECTION':'МОДЕЛЬ / ВКУС / ВЫБОР','SELECTION SYSTEM / 02':'СИСТЕМА ВЫБОРА / 02','RECOMMENDATION MODEL':'РЕКОМЕНДАТЕЛЬНАЯ МОДЕЛЬ','01 / OBJECT':'01 / ОБЪЕКТ','PRODUCT':'ПРОДУКТ','02 / ENCODING':'02 / КОДИРОВАНИЕ','MACHINE REPRESENTATION':'МАШИННОЕ ПРЕДСТАВЛЕНИЕ','03 / SPACE':'03 / ПРОСТРАНСТВО','CANDIDATE SET':'МНОЖЕСТВО ВАРИАНТОВ','04 / ORDER':'04 / ПОРЯДОК','FILTER / RANKING':'ФИЛЬТР / РАНЖИРОВАНИЕ','05 / OUTPUT':'05 / РЕЗУЛЬТАТ','VISIBLE SET':'ВИДИМОЕ МНОЖЕСТВО','HUMAN BEHAVIOR / MACHINE PROFILE':'ПОВЕДЕНИЕ ЧЕЛОВЕКА / МАШИННЫЙ ПРОФИЛЬ','[OBSERVATION] пространство выбора формируется до момента человеческого решения.':'[НАБЛЮДЕНИЕ] пространство выбора формируется до момента человеческого решения.','PLATE 02 / SOSTAV':'ЛИСТ 02 / SOSTAV','FEATURED / SOSTAV':'ГЛАВНОЕ / SOSTAV','RECOMMENDATION / CULTURE':'РЕКОМЕНДАЦИЯ / КУЛЬТУРА','03 / TWO RESEARCH FEATURES':'03 / ДВА ИССЛЕДОВАНИЯ','BODY / LANGUAGE':'ТЕЛО / ЯЗЫК','01 / BIOTECHNOLOGIES':'01 / БИОТЕХНОЛОГИИ','BODY / BIOSPHERE':'ТЕЛО / БИОСФЕРА','02 / RESEARCH':'02 / ИССЛЕДОВАНИЕ','LANGUAGE / DATASET':'ЯЗЫК / ДАТАСЕТ','04 / PUBLISHED ESSAYS':'04 / ОПУБЛИКОВАННЫЕ ЭССЕ','ERROR / AGENCY / QUANTUM':'ОШИБКА / АГЕНТНОСТЬ / КВАНТЫ','01 / ESSAY':'01 / ЭССЕ','AI & ERROR':'ИИ И ОШИБКА','02 / ESSAY':'02 / ЭССЕ','AI AGENTS / TRUST':'ИИ-АГЕНТЫ / ДОВЕРИЕ','03 / ANALYSIS':'03 / АНАЛИЗ','QUANTUM / SECURITY':'КВАНТЫ / БЕЗОПАСНОСТЬ','05 / MORE RESEARCH':'05 / ДРУГИЕ ИССЛЕДОВАНИЯ','BIOART / INDUSTRY / MEMORY / ETHICS':'БИОАРТ / ИНДУСТРИЯ / ПАМЯТЬ / ЭТИКА','01 / RESEARCH':'01 / ИССЛЕДОВАНИЕ','BIOART / LIVING SYSTEMS':'БИОАРТ / ЖИВЫЕ СИСТЕМЫ','02 / ARTICLE':'02 / СТАТЬЯ','ART / INDUSTRY':'ИСКУССТВО / ИНДУСТРИЯ','03 / ESSAY':'03 / ЭССЕ','PREARCHIVE / MEMORY':'ПРЕАРХИВ / ПАМЯТЬ','04 / ESSAY':'04 / ЭССЕ','ETHICS / AGENCY':'ЭТИКА / АГЕНТНОСТЬ','06 / CURATORIAL RESEARCH':'06 / КУРАТОРСКОЕ ИССЛЕДОВАНИЕ','SNOB / CURATORIAL PRACTICE':'«СНОБ» / КУРАТОРСКАЯ ПРАКТИКА','07 / RESEARCH FIELDS':'07 / ПОЛЯ ИССЛЕДОВАНИЙ','ART / AI / MEMORY / AUTHORSHIP':'ИСКУССТВО / ИИ / ПАМЯТЬ / АВТОРСТВО','08 / CURRENT RESEARCH':'08 / ТЕКУЩИЕ ИССЛЕДОВАНИЯ','ART.IS.YOU / INDEPENDENT PLATFORM':'ART.IS.YOU / НЕЗАВИСИМАЯ ПЛАТФОРМА','AUTHORIAL PROGRAM':'АВТОРСКАЯ ПРОГРАММА','ONGOING':'ПРОДОЛЖАЕТСЯ','OPEN ARCHIVE':'ОТКРЫТЫЙ АРХИВ','WORK IN PROGRESS':'В РАБОТЕ','ARTACT / CONTEMPORARY ART':'ARTACT / СОВРЕМЕННОЕ ИСКУССТВО','LOVE':'ЛЮБОВЬ','HATE':'НЕНАВИСТЬ','LIFE':'ЖИЗНЬ','DEATH':'СМЕРТЬ','DREAM':'МЕЧТА','AGENCY':'АГЕНТНОСТЬ','Agency & Trust':'Агентность и доверие','ACTION / CONTROL':'ДЕЙСТВИЕ / КОНТРОЛЬ','Error & Freedom':'Ошибка и свобода','ERROR / ETHICS':'ОШИБКА / ЭТИКА','Language & Dataset':'Язык и датасет','PROMPT / CULTURAL CODE':'ПРОМПТ / КУЛЬТУРНЫЙ КОД','Memory & Authorship':'Память и авторство','ARCHIVE / AUTHORSHIP':'АРХИВ / АВТОРСТВО','Essays — не закрытый архив публикаций, а развивающаяся исследовательская программа.':'Эссе — не закрытый архив публикаций, а развивающаяся исследовательская программа.','IN DEVELOPMENT':'В РАЗРАБОТКЕ','RESEARCH':'ИССЛЕДОВАНИЕ','FORTHCOMING':'ГОТОВИТСЯ','PUBLISHED / ONGOING':'ОПУБЛИКОВАНО / ПРОДОЛЖАЕТСЯ'
    };
    replaceText(root,map);
  }
  function replaceText(root,map){
    var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(function(n){var raw=n.nodeValue,trim=raw.trim();if(map[trim])n.nodeValue=raw.replace(trim,map[trim]);});
  }
  document.addEventListener('DOMContentLoaded',function(){alignResearchNavigation();alignFieldResearchHeader();mountResearchAtlas();mountEssays();mountProtoarchive();mountBio();mountLabs();localizeResearchIndex();localizeEssays();localizeBioart();localizeProtoarchive();localizeLabs();[500,1600].forEach(function(delay){setTimeout(function(){alignResearchNavigation();alignFieldResearchHeader();localizeResearchIndex();localizeEssays();localizeBioart();localizeProtoarchive();localizeLabs();},delay);});});
}());

/* Research landing: one stateful instrument replaces the post-Atlas catalogue. */
(function(){
  'use strict';
  if (!document.querySelector('.research-index')) return;
  var NS='http://www.w3.org/2000/svg';
  function e(name,attrs,text){var n=document.createElementNS(NS,name);Object.keys(attrs||{}).forEach(function(key){n.setAttribute(key,attrs[key]);});if(text)n.textContent=text;return n;}
  function svg(label){return e('svg',{viewBox:'0 0 1200 620',role:'img','aria-label':label,'class':'research-instrument__svg'});}
  function addText(parent,x,y,text,className,anchor){parent.appendChild(e('text',{x:x,y:y,'text-anchor':anchor||'start','class':className||'research-instrument__label'},text));}
  function addLine(parent,x1,y1,x2,y2,className){parent.appendChild(e('line',{x1:x1,y1:y1,x2:x2,y2:y2,'class':className||'research-instrument__line'}));}
  function addNode(parent,x,y,active){parent.appendChild(e('circle',{cx:x,cy:y,r:4,'class':'research-instrument__node'+(active?' research-instrument__node--active':'')}));}
  function curve(parent,a,b,active){parent.appendChild(e('path',{d:'M '+a[0]+' '+a[1]+' C '+(a[0]+86)+' '+a[1]+', '+(b[0]-86)+' '+b[1]+', '+b[0]+' '+b[1],'class':'research-instrument__path'+(active?' research-instrument__path--active':'')}));}
  function intellectVisual(){
    var s=svg('Генеалогическое поле: люди, школы, методы и технологии'),xs=[132,420,710,1012],heads=['ЛЮДИ','ШКОЛЫ','МЕТОДЫ','ТЕХНОЛОГИИ'],points=[[132,130],[132,214],[132,298],[132,382],[132,466],[420,168],[420,276],[420,384],[420,492],[710,132],[710,238],[710,344],[710,450],[1012,190],[1012,310],[1012,430]];
    heads.forEach(function(head,i){addText(s,xs[i],44,head,'research-instrument__axis','middle');addLine(s,xs[i],66,xs[i],564,'research-instrument__guide');});
    [[0,5],[1,5],[1,6],[2,6],[2,7],[3,7],[3,8],[4,8],[5,9],[5,10],[6,10],[6,11],[7,11],[7,12],[8,12],[9,13],[10,13],[10,14],[11,14],[11,15],[12,15]].forEach(function(pair,i){curve(s,points[pair[0]],points[pair[1]],i===10);});
    points.forEach(function(point,i){addNode(s,point[0],point[1],i===6||i===11);});
    addText(s,36,600,'81 ЛЮДЕЙ / 74 ПОДТВЕРЖДЁННЫЕ СВЯЗИ / 24 ТЕХНОЛОГИИ','research-instrument__micro');return s;
  }
  function reverseVisual(){
    var corpus=window.REVERSE_PROMPT_CORPUS,cases=corpus&&corpus.cases||[],s=svg('Траектории тринадцати произведений: произведение, экфрасис, промпт, Alisa AI и Kandinsky'),xs=[90,330,560,790,1050],heads=['ПРОИЗВЕДЕНИЕ','ЭКФРАСИС','ПРОМПТ','ALISA AI','KANDINSKY'];
    heads.forEach(function(head,i){addText(s,xs[i],42,head,'research-instrument__axis','middle');addLine(s,xs[i],58,xs[i],562,'research-instrument__guide');});
    cases.forEach(function(entry,i){var y=88+i*36,pts=[[xs[0],y],[xs[1],y+12],[xs[2],y-10],[xs[3],y+10],[xs[4],y-6]];for(var j=0;j<pts.length-1;j++)curve(s,pts[j],pts[j+1],i===0);pts.forEach(function(point){addNode(s,point[0],point[1],i===0);});addText(s,18,y+4,entry.id+' / '+entry.artist,'research-instrument__case');});
    addText(s,18,600,'13 РАБОТ / 2 СИСТЕМЫ / 26 РЕЗУЛЬТАТОВ','research-instrument__micro');return s;
  }
  function protoarchiveVisual(){
    var records=[['1973','A1'],['1986–1988','A2'],['1991','A4'],['1996–2003','A6'],['1999','A3'],['2005','A2'],['2008','A1'],['2012','A4'],['2014','A5'],['2017—','A7'],['2018','A2'],['2021','A1'],['2021','A5'],['2023','A8'],['2025','A9'],['2026','A5']],lanes=['ВЫМЫСЕЛ','РЕКОНСТРУКЦИЯ','МАШИННАЯ ПАМЯТЬ','СВИДЕТЕЛЬСТВО'],placement={A1:0,A2:0,A3:0,A4:3,A5:3,A6:1,A7:2,A8:2,A9:3},s=svg('Поле доказательств Преархива: шестнадцать подтверждённых кейсов во времени и режимах документа');
    lanes.forEach(function(lane,i){var y=142+i*102;addLine(s,190,y,1130,y);addText(s,30,y+4,lane,'research-instrument__axis');});
    records.forEach(function(record,i){var x=210+i*57,y=142+placement[record[1]]*102;addLine(s,x,84,x,494,'research-instrument__guide');addNode(s,x,y,i===15);addText(s,x,y-14,record[1],'research-instrument__micro','middle');addText(s,x,538,record[0],'research-instrument__case','middle');});
    addText(s,30,600,'16 КЛЮЧЕВЫХ КЕЙСОВ / ВРЕМЯ × ДОКУМЕНТ × ДОВЕРИЕ','research-instrument__micro');return s;
  }
  function bioartVisual(){
    var s=svg('Морфологическое поле: семнадцать наблюдений о роли живого в художественном процессе'),zones=[['ОБЪЕКТ',80,110],['МОДЕЛЬ',650,110],['МАТЕРИАЛ',80,378],['ДЕЙСТВУЮЩАЯ СИСТЕМА',650,378]],marks=[[148,178],[274,232],[418,160],[682,170],[818,238],[1012,188],[952,296],[130,450],[292,516],[468,438],[720,456],[850,532],[1040,468],[190,570],[380,580],[638,568],[920,584]];
    zones.forEach(function(zone){addLine(s,zone[1],zone[2],zone[1]+470,zone[2]);addText(s,zone[1],zone[2]-18,zone[0],'research-instrument__axis');});
    marks.forEach(function(point,i){if(i&&i%3!==0){var previous=marks[i-1];s.appendChild(e('path',{d:'M '+previous[0]+' '+previous[1]+' Q '+((previous[0]+point[0])/2)+' '+(Math.min(previous[1],point[1])-36)+' '+point[0]+' '+point[1],'class':'research-instrument__path'}));}addNode(s,point[0],point[1],i===16);addText(s,point[0]+10,point[1]-8,String(i+1).padStart(2,'0'),'research-instrument__micro');});
    addText(s,80,612,'17 ПРОЕКТОВ / 1918—2022 / ТЕЛО · РАСТЕНИЯ · КЛЕТКИ · СРЕДА','research-instrument__micro');return s;
  }
  function fieldVisual(){
    var figure=document.createElement('figure');figure.className='research-instrument__spatial';figure.innerHTML='<img src="/assets/static.tildacdn.com/topviewcube_.jpg" alt="Полевой документ: пространственная модель Научного квартала" width="1680" height="1175" loading="lazy" decoding="async"><span class="research-instrument__callout research-instrument__callout--one">ТЕРРИТОРИЯ</span><span class="research-instrument__callout research-instrument__callout--two">НАБЛЮДЕНИЕ</span><span class="research-instrument__callout research-instrument__callout--three">МЕТОД</span><span class="research-instrument__callout research-instrument__callout--four">МАТЕРИАЛ</span><figcaption>ПОЛЕВОЙ ДОКУМЕНТ / ПРОСТРАНСТВЕННОЕ ИССЛЕДОВАНИЕ</figcaption>';return figure;
  }
  function visualFor(key){return key==='intellect'?intellectVisual():key==='reverse'?reverseVisual():key==='protoarchive'?protoarchiveVisual():key==='bioart'?bioartVisual():fieldVisual();}
  var researchNavigation=window.ART_IS_YOU_RESEARCH_NAVIGATION||[
    {key:'intellect',index:'01',title:'Русский интеллект',type:'INTELLECTUAL HISTORY',href:'/research/russian-intellect/'},
    {key:'reverse',index:'02',title:'REVERSE PROMPT',type:'MACHINE READING',href:'/research/reverse-prompt/'},
    {key:'protoarchive',index:'03',title:'Преархив',type:'MEMORY & EVIDENCE',href:'/protoarchive/'},
    {key:'bioart',index:'04',title:'Живое как медиум',type:'LIVING SYSTEMS',href:'/research/russian-bioart-history/'},
    {key:'field',index:'05',title:'Полевые исследования',type:'FIELD METHODS',href:'/research/lab/'}
  ];
  var landingDetails={
    intellect:{selector:'#canon-intellectual-history',question:'Как идеи, люди и институты складываются в историю вычислительной культуры?',corpus:'81 ЛЮДЕЙ / 74 СВЯЗИ / 24 ТЕХНОЛОГИИ'},
    reverse:{selector:'#canon-machine-reading',question:'Что сохраняется и теряется, когда произведение переводится из изображения в текст и обратно?',corpus:'13 РАБОТ / 2 СИСТЕМЫ / 26 РЕЗУЛЬТАТОВ'},
    protoarchive:{selector:'#canon-memory',question:'Почему сконструированное прошлое начинает выглядеть как документ?',corpus:'16 КЛЮЧЕВЫХ КЕЙСОВ / ВРЕМЯ × ДОКУМЕНТ × ДОВЕРИЕ'},
    bioart:{selector:'#canon-living-systems',question:'Что меняется в произведении, когда живое становится героем?',corpus:'17 ПРОЕКТОВ / МОРФОЛОГИЯ ЖИВОГО'},
    field:{selector:'#canon-field-methods',question:'Как наблюдение территории превращается в проектное решение?',corpus:'ПОЛЕВОЙ ДОКУМЕНТ / ТЕРРИТОРИЯ → НАБЛЮДЕНИЕ → МЕТОД → МАТЕРИАЛ'}
  };
  var landingTitles={intellect:'Русский интеллект',reverse:'Обратный промпт',protoarchive:'Преархив',bioart:'Живое как медиум',field:'Полевые исследования'};
  var defaults=researchNavigation.filter(function(item){return item.key!=='index';}).map(function(item){var detail=landingDetails[item.key];return {key:item.key,selector:detail.selector,index:item.index,system:item.type,title:landingTitles[item.key]||item.title,question:detail.question,href:item.href,corpus:detail.corpus};});
  function mount(){
    var root=document.querySelector('.research-index'),atlas=root&&root.querySelector('.research-analytics--atlas'),catalogue=document.querySelector('.research-canon-content');if(!root||root.classList.contains('research-index--screenshot-baseline')||!atlas||!catalogue||root.querySelector('.research-instrument'))return;
    var fields=defaults.map(function(item){return Object.assign({},item);});
    var instrument=document.createElement('section');instrument.className='research-instrument';instrument.id='research-instrument';instrument.setAttribute('aria-label','Исследовательский индекс');instrument.innerHTML='<header class="research-instrument__header"><p class="research-instrument__register">RESEARCH / INDEX</p><div class="research-instrument__switcher" role="group" aria-label="Выбор исследовательского поля"></div></header><div class="research-instrument__content"><div class="research-instrument__copy"><p class="research-instrument__meta"></p><h2 class="research-instrument__title"></h2><p class="research-instrument__question"></p><p class="research-instrument__corpus"></p><a class="research-instrument__cta">ОТКРЫТЬ ИССЛЕДОВАНИЕ ↗</a></div><div class="research-instrument__visual" id="research-instrument-visual" aria-live="polite"></div></div>';
    var switcher=instrument.querySelector('.research-instrument__switcher');fields.forEach(function(field){var button=document.createElement('button');button.type='button';button.dataset.researchField=field.key;button.setAttribute('aria-controls','research-instrument-visual');button.setAttribute('aria-pressed','false');button.setAttribute('aria-label','Выбрать исследование: '+field.index+' / '+field.title);button.textContent=field.index;switcher.appendChild(button);});atlas.after(instrument);catalogue.remove();
    var meta=instrument.querySelector('.research-instrument__meta'),title=instrument.querySelector('.research-instrument__title'),question=instrument.querySelector('.research-instrument__question'),corpus=instrument.querySelector('.research-instrument__corpus'),cta=instrument.querySelector('.research-instrument__cta'),visual=instrument.querySelector('.research-instrument__visual');
    function render(field){meta.textContent=field.index+' / '+field.system;title.textContent=field.title;question.textContent=field.question;corpus.textContent=field.corpus;cta.href=field.href;cta.setAttribute('aria-label','Открыть исследование: '+field.title);visual.replaceChildren(visualFor(field.key));}
    function clearPreview(){instrument.removeAttribute('data-preview-field');if(!atlas.hasAttribute('data-selected-system'))render(fields[0]);}
    function clear(){instrument.removeAttribute('data-active-field');clearPreview();atlas.removeAttribute('data-selected-system');atlas.removeAttribute('data-active-system');atlas.removeAttribute('data-preview-system');switcher.querySelectorAll('button').forEach(function(button){button.setAttribute('aria-pressed','false');});root.querySelectorAll('.research-analytics--atlas .research-analytics__system-link').forEach(function(link){link.removeAttribute('data-instrument-selected');});}
    function preview(key){if(atlas.hasAttribute('data-selected-system'))return;var field=fields.filter(function(item){return item.key===key;})[0];if(!field)return;instrument.dataset.previewField=field.key;render(field);}
    function select(key,scroll){var field=fields.filter(function(item){return item.key===key;})[0]||fields[0],index=fields.indexOf(field);instrument.removeAttribute('data-preview-field');instrument.dataset.activeField=field.key;render(field);switcher.querySelectorAll('button').forEach(function(button){button.setAttribute('aria-pressed',String(button.dataset.researchField===field.key));});atlas.setAttribute('data-selected-system',String(index));atlas.setAttribute('data-active-system',String(index));root.querySelectorAll('.research-analytics--atlas .research-analytics__system-link').forEach(function(link){link.toggleAttribute('data-instrument-selected',link.dataset.system===String(index));});if(scroll)instrument.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}
    switcher.addEventListener('click',function(event){var button=event.target.closest('[data-research-field]');if(!button)return;button.getAttribute('aria-pressed')==='true'?clear():select(button.dataset.researchField,false);});
    switcher.addEventListener('keydown',function(event){if(['ArrowLeft','ArrowRight','Home','End'].indexOf(event.key)<0)return;var buttons=[].slice.call(switcher.querySelectorAll('button')),current=buttons.indexOf(event.target),next=event.key==='Home'?0:event.key==='End'?buttons.length-1:(current+(event.key==='ArrowRight'?1:buttons.length-1))%buttons.length;event.preventDefault();buttons[next].focus();select(buttons[next].dataset.researchField,false);});
    root.querySelectorAll('.research-analytics--atlas .research-analytics__system-link').forEach(function(link){var field=fields[Number(link.dataset.system)];if(!field)return;link.setAttribute('role','button');link.setAttribute('aria-controls','research-instrument');link.setAttribute('aria-label','Показать исследование: '+field.title);link.addEventListener('mouseenter',function(){preview(field.key);});link.addEventListener('mouseleave',clearPreview);link.addEventListener('focus',function(){preview(field.key);});link.addEventListener('blur',clearPreview);link.addEventListener('click',function(event){event.preventDefault();link.hasAttribute('data-instrument-selected')?clear():select(field.key,true);});link.addEventListener('keydown',function(event){if(event.key===' '){event.preventDefault();link.hasAttribute('data-instrument-selected')?clear():select(field.key,true);}});});
    root.addEventListener('keydown',function(event){if(event.key==='Escape')clear();});
    render(fields[0]);
    clear();
  }
  if(document.readyState==='complete')mount();else document.addEventListener('DOMContentLoaded',mount,{once:true});
}());
