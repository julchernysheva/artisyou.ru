# V3.4 — APPROVED LOCAL ARCHITECTURE

Навигация: PASS. Сохранность: PASS. См. [ARCHITECTURE_APPROVAL.md](ARCHITECTURE_APPROVAL.md). Научные и device-ограничения прежних проверок сохранены.

# UNIFIED RUSSIAN INTELLECT V3.3 — LOCAL

Итог: PARTIAL. Новая визуальная схема и единая нижняя навигация работают; сохранность научных данных подтверждена. Полное покрытие всех взаимодействий Safari, физического touch и screen reader не заявляется.

| Gate | Статус | Основание |
|---|---|---|
| Источник V3.2 и научная сохранность | PASS | SHA-256, побайтовая сверка защищённых файлов и равенство nodes/edges |
| Схема Владимирова | PASS | 22 проверенных отношения, отдельный слой 44 записей без рёбер |
| Единая нижняя навигация | PASS | семь ссылок на семи новых оболочках, прямые переходы проверены |
| Общий поиск | PASS | 21 межшкольный переход Chrome, поиск Safari и карточки |
| Узлы / zoom / reset / клавиатура | PASS в проверенном объёме | 51 SVG-узел через Enter, 44 исследовательских карточки; пилот Колмогорова |
| Chrome 390 / 768 / 1440 | PASS | 21 экран без внешнего overflow |
| Safari 390 / 768 / 1440 | PASS для загрузки/визуального просмотра | 21 экран в Responsive Design Mode; скриншоты и AX |
| Все взаимодействия Safari и все комбинации фильтров | PARTIAL | выбор узла/источника и общий поиск проверены выборочно |
| JavaScript | PARTIAL | новый синтаксис и пустой Chrome error log — PASS; полная консоль Safari/FROZEN — не проверена |
| Изменение защищённых пилотов / FROZEN | BLOCKED | запрещено; исходники и их assets сохранены |
| Физический touch / screen reader | PARTIAL — NOT VERIFIED | не проверены |
| Publication | BLOCKED | не выполнялась по заданию |

Запуск: распаковать ZIP и запустить OPEN_LOCAL_ATLAS.command (Python 3). Либо из корня сборки выполнить `python3 -m http.server 8774 --bind 127.0.0.1`, открыть http://127.0.0.1:8774/index.html. Рабочий маршрут Владимирова — vladimirov-map.html. Старые защищённые vladimirov.html и vladimirov-direct.html сохранены и доступны отдельно. Это два представления одной школы, не восьмая карта.

См. NAVIGATION_QA.md, VISUAL_QA.md, SCIENTIFIC_INTEGRITY_REPORT.md и screenshots/index.html. Исторические отчёты V3/V3.1/V3.2 не являются результатами текущей проверки.
