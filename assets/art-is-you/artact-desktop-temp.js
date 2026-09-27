// Temporary curated corpus shared by desktop and responsive layouts.
const artactDesktopTemporaryWorks = [
  [
    ['ЛЮБОВЬ', 'Алина Лутаева', '/assets/art-is-you/artact/ARTAKT-2025-017-01.jpg'],
    ['НЕНАВИСТЬ', 'Яков Хорев', '/assets/art-is-you/artact/temp-desktop-khorev-hate.png', 'khorev'],
    ['МЕЧТА', 'Дарья Неретина', '/assets/art-is-you/artact/temp-desktop-neretina-dream.jpeg'],
    ['ЖИЗНЬ', 'Евгения Буравлёва', '/assets/art-is-you/artact/temp-desktop-buravleva-life-approved.jpg', 'buravleva'],
    ['СМЕРТЬ', 'Лина Кордюченко', '/assets/art-is-you/artact/temp-desktop-kordyuchenko-death.jpg']
  ],
  [
    ['ЛЮБОВЬ', 'Надежда Прадес', '/assets/art-is-you/artact/temp-desktop-prades-love.jpeg'],
    ['НЕНАВИСТЬ', 'Глеб Нестреляев', '/assets/art-is-you/artact/temp-desktop-nestrelyaev-hate-web.jpg'],
    ['МЕЧТА', 'Анастасия Литвинова', '/assets/art-is-you/artact/ARTAKT-2024-041-05__Anastasia-Litvinova__Dream.png'],
    ['ЖИЗНЬ', 'Аюна Гарматарова', '/assets/art-is-you/artact/ARTAKT-2025-021-03.jpg'],
    ['СМЕРТЬ', 'Александра Азовцева', '/assets/art-is-you/artact/ARTAKT-2024-028-04__Alexandra-Azovtseva__Death.png']
  ],
  [
    ['ЛЮБОВЬ', 'Сергей Обухов', '/assets/art-is-you/artact/temp-desktop-obukhov-love-original.webp'],
    ['НЕНАВИСТЬ', 'Анна Червонна', '/assets/art-is-you/artact/temp-desktop-chervonna-hate.jpg'],
    ['МЕЧТА', 'Саша Афонская', '/assets/art-is-you/artact/ARTAKT-2025-008-05.jpg'],
    ['ЖИЗНЬ', 'Гульшат', '/assets/art-is-you/artact/ARTAKT-2025-028-03.jpg'],
    ['СМЕРТЬ', 'Женя Шарвина', '/assets/art-is-you/artact/temp-desktop-sharvina-death.jpg']
  ],
  [
    ['ЛЮБОВЬ', 'Марина Глебова', '/assets/art-is-you/artact/temp-desktop-glebova-love.jpg'],
    ['НЕНАВИСТЬ', 'Даша Сурма', '/assets/art-is-you/artact/ARTAKT-2025-005-02.jpg'],
    ['МЕЧТА', 'Екатерина Колосовская', '/assets/art-is-you/artact/temp-desktop-kolosovskaya-dream.png'],
    ['ЖИЗНЬ', 'Сергей Жгилёв', '/assets/art-is-you/artact/ARTAKT-2025-033-03.jpg'],
    ['СМЕРТЬ', 'Зия Мансур', '/assets/art-is-you/artact/temp-desktop-mansur-death.jpg']
  ],
  [
    ['ЛЮБОВЬ', 'Антон Яковлев', '/assets/art-is-you/artact/temp-desktop-yakovlev-love.jpg'],
    ['НЕНАВИСТЬ', 'Иван Покидышев', '/assets/art-is-you/artact/temp-desktop-pokidyshev-hate.jpg'],
    ['МЕЧТА', 'Таша Петрикова', '/assets/art-is-you/artact/temp-desktop-petrikova-dream.jpg'],
    ['ЖИЗНЬ', 'Лена Лисица', '/assets/art-is-you/artact/temp-desktop-lisitsa-life.png'],
    ['СМЕРТЬ', 'Андрей Андреев', '/assets/art-is-you/artact/ARTAKT-2025-029-04.jpg', 'andreev']
  ]
];

const artactDesktopTarget = document.querySelector('#artact-desktop-temp');
const artactCuratorGroupNames = ['белый', 'голубой', 'кофейный', 'красный', 'чёрный'];
const artactReversePromptArtists = new Set(['Иван Покидышев', 'Марина Глебова', 'Анна Червонна', 'Андрей Андреев', 'Даша Сурма']);
const artactSourceUrls = Object.freeze({
  'Алина Лутаева': 'https://snob.ru/art/5-rabot-khudozhnitsy-aliny-lutaevoi-v-proekte-artakt/',
  'Яков Хорев': 'https://snob.ru/culture/5-rabot-hudozhnika-yakova-horeva-v-proekte-artakt/',
  'Дарья Неретина': 'https://snob.ru/culture/5-rabot-hudozhnicy-dari-neretinoj-v-proekte-artakt/',
  'Евгения Буравлёва': 'https://snob.ru/art/5-rabot-khudozhnitsy-evgenii-buravlevoi-v-proekte-artakt/',
  'Лина Кордюченко': 'https://snob.ru/art/5-rabot-khudozhnitsy-liny-kordiuchenko-v-proekte-artakt/',
  'Надежда Прадес': 'https://snob.ru/culture/5-rabot-hudozhnicy-nadezhdy-prades-v-proekte-artakt/',
  'Глеб Нестреляев': 'https://snob.ru/art/5-rabot-khudozhnika-gleba-nestreliaeva-v-proekte-artakt/',
  'Анастасия Литвинова': 'https://snob.ru/art/5-rabot-khudozhnitsy-anastasii-litvinovoi-v-proekte-artakt/',
  'Аюна Гарматарова': 'https://snob.ru/art/5-rabot-khudozhnitsy-aiuny-garmatarovoi-v-proekte-artakt/',
  'Александра Азовцева': 'https://snob.ru/art/5-rabot-khudozhnitsy-aleksandry-azovtsevoi-v-proekte-artakt/',
  'Сергей Обухов': 'https://snob.ru/art/5-rabot-khudozhnika-sergeia-obukhova-v-proekte-artakt/',
  'Анна Червонна': 'https://snob.ru/culture/5-rabot-hudozhnicy-anny-chervonny-v-proekte-artakt/',
  'Саша Афонская': 'https://snob.ru/art/5-rabot-khudozhnitsy-sashi-afonskoi-v-proekte-artakt/',
  'Гульшат': 'https://snob.ru/art/5-rabot-khudozhnitsy-gulshat-v-proekte-artakt/',
  'Женя Шарвина': 'https://snob.ru/art/5-rabot-khudozhnitsy-zheni-sharvinoi-v-proekte-artakt/',
  'Марина Глебова': 'https://snob.ru/art/5-rabot-khudozhnitsy-mariny-glebovoi-v-proekte-artakt/',
  'Даша Сурма': 'https://snob.ru/art/5-rabot-khudozhnitsy-dashi-curmy-v-proekte-artakt/',
  'Екатерина Колосовская': 'https://snob.ru/art/5-rabot-khudozhnitsy-ekateriny-kolosovskoi-v-proekte-artakt/',
  'Сергей Жгилёв': 'https://snob.ru/art/5-rabot-khudozhnika-sergeia-zhgileva-v-proekte-artakt/',
  'Зия Мансур': 'https://snob.ru/art/5-rabot-khudozhnika-ziia-mansura-v-proekte-artakt/',
  'Антон Яковлев': 'https://snob.ru/art/5-rabot-khudozhnika-antona-iakovleva-v-proekte-artakt/',
  'Иван Покидышев': 'https://snob.ru/art/5-rabot-khudozhnika-ivana-pokidysheva-v-proekte-artakt/',
  'Таша Петрикова': 'https://snob.ru/art/5-rabot-khudozhnitsy-tashi-petrikovoi-v-proekte-artakt/',
  'Лена Лисица': 'https://snob.ru/culture/5-rabot-hudozhnicy-leny-lisicy-v-proekte-artakt/',
  'Андрей Андреев': 'https://snob.ru/art/5-rabot-khudozhnika-andreia-andreeva-v-proekte-artakt/'
});

function renderArtactDesktopTemporaryWorks() {
  artactDesktopTarget.innerHTML = artactDesktopTemporaryWorks.map((works, index) => `
    <div class="artact-curator-group" role="group" aria-label="Цветовая группа ${index + 1}: ${artactCuratorGroupNames[index]}">
      ${works.map(([concept, artist, source, crop = '']) => `${artactReversePromptArtists.has(artist) ? '<div class="artact-work__item">' : ''}
        <a class="artact-work__link" href="${artactSourceUrls[artist]}" target="_blank" rel="noopener noreferrer" aria-label="${concept} / ${artist}. Открыть выпуск «АртАкт» на «Снобе»">
          <figure class="artact-work${crop ? ` artact-work--${crop}` : ''}" data-concept="${concept}">
            <div class="artact-work__media"><img src="${source}" alt="${artist} — ${concept}" loading="${index < 2 ? 'eager' : 'lazy'}"></div>
            <figcaption>${concept} / ${artist.toUpperCase()}</figcaption>
          </figure>
        </a>${artactReversePromptArtists.has(artist) ? '<a class="artact-work__related" href="/research/reverse-prompt/">→ «Обратный промпт» / Cosmoscow 2026</a></div>' : ''}`).join('')}
    </div>`).join('');
}

renderArtactDesktopTemporaryWorks();
