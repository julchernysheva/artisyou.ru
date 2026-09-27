/* Existing confirmed corpus only; no new imagery, dates or production credits. */
(async () => {
  // Exact user-supplied source-grounded short copy; not inferred biography.
  const sourceTexts = {
    artem:['Городская среда, память места и локальные сообщества.','Практика Артёма развивается через взаимодействие с городом: выставки, фестивали, мастерские, локальные сообщества и отдельные жители становятся частью художественного процесса.','За публичной деятельностью остаётся личный метод художника: наблюдение, прикосновение, ассоциативные связи и работа с культурной памятью места.'],
    ivan:['Пиксельная культура и переработка знакомых символов.','Иван работает с узнаваемыми культурными и политическими образами, переводя их в язык пиксель-арта.','За визуальной лёгкостью и иронией возникает более сложный разговор о памяти, истории и неоднозначности знакомых символов.'],
    konstantin:['Путешествие, фотография и цифровая память.','Фотография и цифровое сканирование становятся способом исследовать восприятие и память.','Белые лакуны, возникающие там, где программа не смогла считать информацию, превращаются в образ того, что память не смогла сохранить.'],
    natalia:['Медиа-поэзия, язык и машина.','Текст, звук, видео и тело соединяются в единую медиальную практику.','В центре работ — взаимодействие человека и машины, которой необходимо «дать голос».'],
    ilya:['Природа, изоляция и автономные живые системы.','Природные элементы становятся объектами, организмами и организованными живыми системами.','Художественный след остаётся различимым, но сам автор как будто намеренно исчезает из созданного пространства.'],
    marina:['Детство, ирония и память о том, чего не происходило.','Лёгкий и ироничный образ постепенно обнаруживает тревогу и неоднозначность.','Детство становится материалом для искажения и реконструкции памяти — попыткой «вспомнить то, чего никогда не было».'],
    '':['Художественно-документальное исследование женской силы, голоса и индивидуального опыта.','Mari Sokol работает с мокьюментари, исследуя социальную коммуникацию и границу между личным и публичным.']
  };
  // Ivan's source credit uses the exact spelling from the primary publication.
  const credits={artem:'Алиса Савицкая',ivan:'Mary Sokol',konstantin:'Злата Адашевская',natalia:'Ольга Ремнёва',ilya:'Ольга Ремнёва',marina:'Ольга Ремнёва'};
  const originals={
    artem:['/assets/art-is-you/art-interviews/evidence/filatov-process.png','Кадр Art.Is.You / процесс работы'],
    konstantin:['/assets/static.tildacdn.com/36978781_94882706862.png','Кадр Art.Is.You / цифровое сканирование и лакуны'],
    natalia:['/assets/art-is-you/art-interviews/evidence/fedorova-media.png','Кадр Art.Is.You / медиа-среда'],
    ilya:['/assets/art-is-you/art-interviews/evidence/ilya-ants.png','Кадр Art.Is.You / живая система'],
    marina:['/assets/art-is-you/art-interviews/evidence/marina-room.png','Кадр Art.Is.You / система образов']
  };
  const films = [
    ['artem','Артём Филатов','fGd3YYjcjE4','/assets/static.tildacdn.com/Screen_Shot_2018-09-.png','ГОРОДСКАЯ СРЕДА','Art.Is.Artem'],
    ['ivan','Иван Тузов','SwOp9L16yd8','/assets/i.ytimg.com/hqdefault.jpg','ПИКСЕЛЬНОЕ ИСКУССТВО','Art.Is.Ivan'],
    ['konstantin','Константин Гребнев','R0-a4IoLxWY','/assets/static.tildacdn.com/36978781_94882706862.png','ФОТОГРАФИЯ / 3D-СКАНИРОВАНИЕ','Art.Is.Konstantin'],
    ['natalia','Наталья Фёдорова','kLmmnn8hsRY','/assets/static.tildacdn.com/Screen_Shot_2018-06-.png','ЯЗЫК / МЕДИА','Art.Is.Natalia'],
    ['ilya','Илья Федотов-Фёдоров','4jVLdFYsiS8','/assets/i.ytimg.com/fce38497fc_hqdefault.jpg','ПРИРОДА / СИСТЕМЫ','Art.Is.Ilya'],
    ['marina','Марина Руденко','kSFIi0AQ1mQ','/assets/static.tildacdn.com/ArtIsMarina______mp4.jpg','ПАМЯТЬ / ИРОНИЯ','Art.Is.Marina']
  ];
  function unit(film,index,special=false) {
    const [id,name,video,poster,medium,source] = film;
    const section = document.createElement('article');
    section.id = special ? 'mari-sokol' : id;
    section.className = 'c3b-film'+(!special&&index%2===1?' c3b-film--reverse':'');
    section.dataset.corpus = special ? 'special' : 'main';
    section.innerHTML = `<div class="system c3b-film-register"><span>${special?'ОТДЕЛЬНЫЙ ФИЛЬМ':String(index+1).padStart(2,'0')+' / ФИЛЬМ'}</span><span>${medium}</span></div><div class="c3b-film-grid"><figure class="c3b-film-media"><div class="c3b-player" data-youtube="${video}"><img src="${poster}" alt="Кадр из фильма: ${name}" decoding="async"><button class="c3b-play system" type="button" aria-label="Смотреть фильм: ${name}"><span><b aria-hidden="true">▶</b> Смотреть фильм</span></button></div><figcaption class="micro c3b-film-caption"><span>${source}</span><a href="https://www.youtube.com/watch?v=${video}" target="_blank" rel="noopener">Открыть на YouTube ↗</a></figcaption></figure><div class="c3b-film-copy">${special?'':`<h2 class="title">${name}</h2>`}</div></div>`;
    const copy = section.querySelector('.c3b-film-copy');
    for(const text of sourceTexts[id]) {
      const p = document.createElement('p'); p.className='text'; p.textContent=text; copy.append(p);
    }
    if(credits[id]){
      const p=document.createElement('p');p.className='micro c3b-text-credit';p.textContent='Автор исходного текста: '+credits[id];copy.append(p);
    }
    if(originals[id]){
      const [asset,caption]=originals[id];const figure=document.createElement('figure');figure.className='c3b-documentary-still';
      const image=document.createElement('img');image.src=asset;image.alt=caption;
      const note=document.createElement('figcaption');note.className='micro';note.textContent=caption;
      figure.append(image,note);copy.append(figure);
    }
    section.querySelector('button').addEventListener('click',event=>{
      const frame = document.createElement('iframe');
      frame.src=`https://www.youtube-nocookie.com/embed/${video}?autoplay=1&rel=0`;
      frame.title=`Фильм: ${name}`;
      frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.allowFullscreen=true;
      event.currentTarget.closest('.c3b-player').replaceChildren(frame);
    });
    return section;
  }
  films.forEach((film,i)=>document.getElementById('films').append(unit(film,i)));
  document.getElementById('special-film').append(unit(['','Мари Сокол','OwLJszl8BaE','/assets/i.ytimg.com/ae1c78d003_hqdefault.jpg','ЖЕНСКАЯ СИЛА / ЛИЧНЫЙ ОПЫТ','Girls. Mari Sokol'],0,true));
  document.documentElement.dataset.c3bReady='true';
})();
