// Canonical relation-level evidence. No entity-source fallback; no graph geometry.
window.RI_RELATION_PROVENANCE = {
  "version": "PASS04D",
  "source": "PASS04B + approved PASS04C, 2026-09-13",
  "approved_semantic_ids": [
    "E027",
    "GH010",
    "GM002",
    "E009",
    "E024",
    "T11_011",
    "PV46_SCHOOL_SHREIDER",
    "R020:S02"
  ],
  "records": {
    "E001": {
      "relation_id": "E001",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P004",
      "target_entity_id": "P015",
      "source_entity": "Алексей Андреевич Ляпунов",
      "target_entity": "Юрий Иванович Журавлёв",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://cs.msu.ru/persons/6",
          "source_title": "Источник: cs.msu.ru",
          "locator": "ZHURAVLEV: Биография, диссертация; научные интересы",
          "supporting_fragment_summary": "Ляпунов назван руководителем; кафедра Мальцева — институциональный контекст. Распознавание образов — область Журавлёва.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Научное руководство названо прямо.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "ZHURAVLEV: Биография, диссертация; научные интересы"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: cs.msu.ru"
      ],
      "source_url": [
        "https://cs.msu.ru/persons/6"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "E002": {
      "relation_id": "E002",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P004",
      "target_entity_id": "P006",
      "source_entity": "Алексей Андреевич Ляпунов",
      "target_entity": "Андрей Петрович Ершов",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.computer-museum.ru/books/n_ershov/4_ershov_programm.htm",
          "source_title": "Ершов: интервью / воспоминания о программировании",
          "locator": "Абзацы о четвёртом курсе и учителе; web L307–311,327–330",
          "supporting_fragment_summary": "Ершов прямо называет Ляпунова своим учителем, описывает курс и последующую самостоятельную работу над транслятором.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Ершов лично называет Ляпунова учителем.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "Абзацы о четвёртом курсе и учителе; web L307–311,327–330"
      ],
      "temporal_scope": [
        "1950-е; воспоминания позднее"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Ершов: интервью / воспоминания о программировании"
      ],
      "source_url": [
        "https://www.computer-museum.ru/books/n_ershov/4_ershov_programm.htm"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "E004": {
      "relation_id": "E004",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P008",
      "target_entity_id": "P015",
      "source_entity": "Виктор Михайлович Глушков",
      "target_entity": "Юрий Иванович Журавлёв",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "INFLUENCE",
      "evidence_status": "MISSING",
      "evidence_refs": [],
      "supported_claim": "Проверенный relation-level фрагмент о влиянии Глушкова на Журавлёва не найден.",
      "supported_relation_scope": "UNESTABLISHED",
      "locator": [],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "RECOVERY_ATTEMPTED_NOT_ESTABLISHED",
      "retrieval_status": [
        "NO_ADEQUATE_RELATION_FRAGMENT_RECOVERED"
      ],
      "source_title": [],
      "source_url": [],
      "confidence": "LOW_FOR_RELATION_TRUTH"
    },
    "E012": {
      "relation_id": "E012",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B005",
      "target_entity_id": "P011",
      "source_entity": "Георгий Павлович Иванцов",
      "target_entity": "Борис Теодорович Поляк",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://7i.7iskusstv.com/y2020/nomer7/bpoljak/",
          "source_title": "Источник: 7i.7iskusstv.com",
          "locator": "POLYAK: Авторские воспоминания, студенческая работа и новые учителя",
          "supporting_fragment_summary": "Поляк описывает руководство Иванцова, обучение у Брудно/Кронрода и впечатление от семинара. Не формальное PhD-руководство всех троих.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Подтверждено руководство студенческой работой, не PhD.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "POLYAK: Авторские воспоминания, студенческая работа и новые учителя"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: 7i.7iskusstv.com"
      ],
      "source_url": [
        "https://7i.7iskusstv.com/y2020/nomer7/bpoljak/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "E013": {
      "relation_id": "E013",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B006",
      "target_entity_id": "P011",
      "source_entity": "Александр Львович Брудно",
      "target_entity": "Борис Теодорович Поляк",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://7i.7iskusstv.com/y2020/nomer7/bpoljak/",
          "source_title": "Источник: 7i.7iskusstv.com",
          "locator": "POLYAK: Авторские воспоминания, студенческая работа и новые учителя",
          "supporting_fragment_summary": "Поляк описывает руководство Иванцова, обучение у Брудно/Кронрода и впечатление от семинара. Не формальное PhD-руководство всех троих.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Подтверждено обучение/наставничество, не PhD.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "POLYAK: Авторские воспоминания, студенческая работа и новые учителя"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: 7i.7iskusstv.com"
      ],
      "source_url": [
        "https://7i.7iskusstv.com/y2020/nomer7/bpoljak/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "E016": {
      "relation_id": "E016",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P002",
      "target_entity_id": "P003",
      "source_entity": "Александр Яковлевич Хинчин",
      "target_entity": "Андрей Николаевич Колмогоров",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "INFLUENCE",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://elementy.ru/nauchno-populyarnaya_biblioteka/436059/Beseda_s_Andreem_Nikolaevichem_Kolmogorovym",
          "source_title": "Беседа с Андреем Николаевичем Колмогоровым",
          "locator": "Вопрос о математиках старшего поколения; ответ web L891–893",
          "supporting_fragment_summary": "Колмогоров сам называет Лузина своим учителем, а Степанова, Хинчина и Александрова — оказавшими большое влияние.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Колмогоров прямо свидетельствует о личном научном влиянии соответствующего математика.",
      "supported_relation_scope": "INFLUENCE",
      "locator": [
        "Вопрос о математиках старшего поколения; ответ web L891–893"
      ],
      "temporal_scope": [
        "Студенческие годы; интервью ретроспективное"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Беседа с Андреем Николаевичем Колмогоровым"
      ],
      "source_url": [
        "https://elementy.ru/nauchno-populyarnaya_biblioteka/436059/Beseda_s_Andreem_Nikolaevichem_Kolmogorovym"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "E017": {
      "relation_id": "E017",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B001",
      "target_entity_id": "P003",
      "source_entity": "Николай Николаевич Лузин",
      "target_entity": "Андрей Николаевич Колмогоров",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://elementy.ru/nauchno-populyarnaya_biblioteka/436059/Beseda_s_Andreem_Nikolaevichem_Kolmogorovym",
          "source_title": "Беседа с Андреем Николаевичем Колмогоровым",
          "locator": "Вопрос о математиках старшего поколения; ответ web L891–893",
          "supporting_fragment_summary": "Колмогоров сам называет Лузина своим учителем, а Степанова, Хинчина и Александрова — оказавшими большое влияние.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Колмогоров называет себя учеником Лузина в студенческие годы.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "Вопрос о математиках старшего поколения; ответ web L891–893"
      ],
      "temporal_scope": [
        "Студенческие годы; интервью ретроспективное"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Беседа с Андреем Николаевичем Колмогоровым"
      ],
      "source_url": [
        "https://elementy.ru/nauchno-populyarnaya_biblioteka/436059/Beseda_s_Andreem_Nikolaevichem_Kolmogorovym"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "E018": {
      "relation_id": "E018",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B002",
      "target_entity_id": "P003",
      "source_entity": "Вячеслав Васильевич Степанов",
      "target_entity": "Андрей Николаевич Колмогоров",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "INFLUENCE",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://elementy.ru/nauchno-populyarnaya_biblioteka/436059/Beseda_s_Andreem_Nikolaevichem_Kolmogorovym",
          "source_title": "Беседа с Андреем Николаевичем Колмогоровым",
          "locator": "Вопрос о математиках старшего поколения; ответ web L891–893",
          "supporting_fragment_summary": "Колмогоров сам называет Лузина своим учителем, а Степанова, Хинчина и Александрова — оказавшими большое влияние.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Колмогоров прямо свидетельствует о личном научном влиянии соответствующего математика.",
      "supported_relation_scope": "INFLUENCE",
      "locator": [
        "Вопрос о математиках старшего поколения; ответ web L891–893"
      ],
      "temporal_scope": [
        "Студенческие годы; интервью ретроспективное"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Беседа с Андреем Николаевичем Колмогоровым"
      ],
      "source_url": [
        "https://elementy.ru/nauchno-populyarnaya_biblioteka/436059/Beseda_s_Andreem_Nikolaevichem_Kolmogorovym"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "E019": {
      "relation_id": "E019",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B003",
      "target_entity_id": "P003",
      "source_entity": "Павел Сергеевич Александров",
      "target_entity": "Андрей Николаевич Колмогоров",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "INFLUENCE",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://elementy.ru/nauchno-populyarnaya_biblioteka/436059/Beseda_s_Andreem_Nikolaevichem_Kolmogorovym",
          "source_title": "Беседа с Андреем Николаевичем Колмогоровым",
          "locator": "Вопрос о математиках старшего поколения; ответ web L891–893",
          "supporting_fragment_summary": "Колмогоров сам называет Лузина своим учителем, а Степанова, Хинчина и Александрова — оказавшими большое влияние.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Колмогоров прямо свидетельствует о личном научном влиянии соответствующего математика.",
      "supported_relation_scope": "INFLUENCE",
      "locator": [
        "Вопрос о математиках старшего поколения; ответ web L891–893"
      ],
      "temporal_scope": [
        "Студенческие годы; интервью ретроспективное"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Беседа с Андреем Николаевичем Колмогоровым"
      ],
      "source_url": [
        "https://elementy.ru/nauchno-populyarnaya_biblioteka/436059/Beseda_s_Andreem_Nikolaevichem_Kolmogorovym"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "E021": {
      "relation_id": "E021",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B001",
      "target_entity_id": "P004",
      "source_entity": "Николай Николаевич Лузин",
      "target_entity": "Алексей Андреевич Ляпунов",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://computer-museum.ru/articles/aleksey-andreevich-lyapunov-ocherk-zhizni-i-tvorchestva-okruzhenie-i-lichnost/258/",
          "source_title": "Н.Н. Воронцов, А.С. Ляпунова: 5. Тридцатые годы",
          "locator": "Первый абзац после портрета Лузина; web L292–297",
          "supporting_fragment_summary": "Ляпунов стал учеником Лузина в 1932; Лузин руководил образованием и исследовательскими результатами.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Лузин непосредственно руководил математическим образованием Ляпунова.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "Первый абзац после портрета Лузина; web L292–297"
      ],
      "temporal_scope": [
        "1932–1934"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Н.Н. Воронцов, А.С. Ляпунова: 5. Тридцатые годы"
      ],
      "source_url": [
        "https://computer-museum.ru/articles/aleksey-andreevich-lyapunov-ocherk-zhizni-i-tvorchestva-okruzhenie-i-lichnost/258/"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "E027": {
      "relation_id": "E027",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B014",
      "target_entity_id": "P015",
      "source_entity": "Анатолий Иванович Мальцев",
      "target_entity": "Юрий Иванович Журавлёв",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "INFLUENCE",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://litbook.ru/article/2908/",
          "source_title": "Ю.И. Журавлёв: Мехматяне вспоминают, 3 (интервью В. Демидовичу)",
          "locator": "Интервью: ответ о преподавании в НГУ, абзацы о первых двух лекциях, их разборе и самостоятельном курсе (web L148–150)",
          "supporting_fragment_summary": "Мальцев лично сопровождал преподавательское становление Журавлёва: разбирал лекции и поручал самостоятельное преподавание.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Мальцев лично сопровождал преподавательское становление Журавлёва: разбирал лекции и поручал самостоятельное преподавание.",
      "supported_relation_scope": "INFLUENCE; documented personal pedagogical mentorship, no claim of dissertation supervision",
      "locator": [
        "Интервью: ответ о преподавании в НГУ, абзацы о первых двух лекциях, их разборе и самостоятельном курсе (web L148–150)"
      ],
      "temporal_scope": [
        "Начало преподавания в НГУ: 1961; ретроспективное интервью 2012"
      ],
      "verification_status": "PASS04C_APPROVED",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Ю.И. Журавлёв: Мехматяне вспоминают, 3 (интервью В. Демидовичу)"
      ],
      "source_url": [
        "https://litbook.ru/article/2908/"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE",
      "public_wording": "Влияние"
    },
    "GH001": {
      "relation_id": "GH001",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B015",
      "target_entity_id": "P001",
      "source_entity": "Пафнутий Львович Чебышёв",
      "target_entity": "Андрей Андреевич Марков (старший)",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://mathshistory.st-andrews.ac.uk/Biographies/Markov/",
          "source_title": "J.J. O’Connor, E.F. Robertson / University of St Andrews: Andrei Markov",
          "locator": "Biography, абзац о поступлении 1874 и лекциях Чебышёва",
          "supporting_fragment_summary": "Именное академическое историческое исследование прямо устанавливает посещение Марковым лекций Чебышёва.",
          "retrieval_status": "INDEXED_TEXT"
        }
      ],
      "supported_claim": "Марков слушал лекции Чебышёва.",
      "supported_relation_scope": "TEACHING / lecture attendance; не запись о научном руководителе",
      "locator": [
        "Biography, абзац о поступлении 1874 и лекциях Чебышёва"
      ],
      "temporal_scope": [
        "1874–1878"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "INDEXED_TEXT"
      ],
      "source_title": [
        "J.J. O’Connor, E.F. Robertson / University of St Andrews: Andrei Markov"
      ],
      "source_url": [
        "https://mathshistory.st-andrews.ac.uk/Biographies/Markov/"
      ],
      "confidence": "MEDIUM"
    },
    "GH002": {
      "relation_id": "GH002",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P007",
      "target_entity_id": "B016",
      "source_entity": "Сергей Алексеевич Лебедев",
      "target_entity": "Всеволод Сергеевич Бурцев",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://ipmce.ru/about/history/",
          "source_title": "ИТМиВТ: История института",
          "locator": "Абзац о лаборатории №2, после избрания Лебедева академиком; web L164",
          "supporting_fragment_summary": "Бурцев назван учеником Лебедева и руководителем лаборатории №2.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Бурцев назван учеником Лебедева.",
      "supported_relation_scope": "TEACHING; не конкретная PhD-защита",
      "locator": [
        "Абзац о лаборатории №2, после избрания Лебедева академиком; web L164"
      ],
      "temporal_scope": [
        "1950-е"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "ИТМиВТ: История института"
      ],
      "source_url": [
        "https://ipmce.ru/about/history/"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "GH003": {
      "relation_id": "GH003",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P003",
      "target_entity_id": "P016",
      "source_entity": "Андрей Николаевич Колмогоров",
      "target_entity": "Яков Григорьевич Синай",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.princeton.edu/news/2014/03/26/sinai-receives-abel-prize-lifelong-influence-mathematics",
          "source_title": "Источник: www.princeton.edu",
          "locator": "SINAI: Биография; подпись фотографии",
          "supporting_fragment_summary": "Колмогоров — докторский руководитель Синая; Синай консультировал/руководил Конторовичем.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Назван докторский руководитель.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "SINAI: Биография; подпись фотографии"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.princeton.edu"
      ],
      "source_url": [
        "https://www.princeton.edu/news/2014/03/26/sinai-receives-abel-prize-lifelong-influence-mathematics"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "GH004": {
      "relation_id": "GH004",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B017",
      "target_entity_id": "P016",
      "source_entity": "Вениамин Фёдорович Каган",
      "target_entity": "Яков Григорьевич Синай",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "INFLUENCE",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://abelprize.no/sites/default/files/2021-05/Abel%20prize%202014%20Yakov%20G.%20Sina%20Biography_Russian.pdf",
          "source_title": "Абелевская премия 2014: Яков Синай, биография",
          "locator": "PDF p.1, абзац о деде Вениамине Кагане",
          "supporting_fragment_summary": "Официальная биография прямо сообщает о большом влиянии Кагана на Синая.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Каган оказал влияние на Синая.",
      "supported_relation_scope": "INFLUENCE; не научное руководство",
      "locator": [
        "PDF p.1, абзац о деде Вениамине Кагане"
      ],
      "temporal_scope": [
        "До поступления Синая в МГУ в 1952"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Абелевская премия 2014: Яков Синай, биография"
      ],
      "source_url": [
        "https://abelprize.no/sites/default/files/2021-05/Abel%20prize%202014%20Yakov%20G.%20Sina%20Biography_Russian.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "GH005": {
      "relation_id": "GH005",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P016",
      "target_entity_id": "B018",
      "source_entity": "Яков Григорьевич Синай",
      "target_entity": "Александр Конторович",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.princeton.edu/news/2014/03/26/sinai-receives-abel-prize-lifelong-influence-mathematics",
          "source_title": "Источник: www.princeton.edu",
          "locator": "SINAI: Биография; подпись фотографии",
          "supporting_fragment_summary": "Колмогоров — докторский руководитель Синая; Синай консультировал/руководил Конторовичем.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Прямое свидетельство академического наставничества.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "SINAI: Биография; подпись фотографии"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.princeton.edu"
      ],
      "source_url": [
        "https://www.princeton.edu/news/2014/03/26/sinai-receives-abel-prize-lifelong-influence-mathematics"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "GH006": {
      "relation_id": "GH006",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B019",
      "target_entity_id": "P017",
      "source_entity": "Илья Афанасьевич Кибель",
      "target_entity": "Гурий Иванович Марчук",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://icmmg.nsc.ru/sites/default/files/pubs/akademiya-300.pdf",
          "source_title": "Российская академия наук: 300 лет истории / Гурий Иванович Марчук",
          "locator": "PDF p.16 / печатная с.736, верх страницы",
          "supporting_fragment_summary": "Модели атмосферы Марчук начал под руководством Кибеля; рядом указана кандидатская 1952.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Кибель руководил работой Марчука по моделям атмосферы.",
      "supported_relation_scope": "TEACHING / scientific supervision",
      "locator": [
        "PDF p.16 / печатная с.736, верх страницы"
      ],
      "temporal_scope": [
        "До защиты 1952"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Российская академия наук: 300 лет истории / Гурий Иванович Марчук"
      ],
      "source_url": [
        "https://icmmg.nsc.ru/sites/default/files/pubs/akademiya-300.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "GH007": {
      "relation_id": "GH007",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P017",
      "target_entity_id": "B020",
      "source_entity": "Гурий Иванович Марчук",
      "target_entity": "Валентин Павлович Дымников",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "COLLABORATION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.prometeus.nsc.ru/science/schools/marchuk/biblio/page3.ssi",
          "source_title": "ГПНТБ СО РАН: Библиография Г.И. Марчука",
          "locator": "Библиографическая запись №1008",
          "supporting_fragment_summary": "Марчук, Дымников, Залесный — соавторы монографии по геофизической гидродинамике.",
          "retrieval_status": "INDEXED_TEXT"
        }
      ],
      "supported_claim": "Марчук и Дымников совместно написали конкретную монографию.",
      "supported_relation_scope": "COLLABORATION / coauthorship",
      "locator": [
        "Библиографическая запись №1008"
      ],
      "temporal_scope": [
        "1987"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "INDEXED_TEXT"
      ],
      "source_title": [
        "ГПНТБ СО РАН: Библиография Г.И. Марчука"
      ],
      "source_url": [
        "https://www.prometeus.nsc.ru/science/schools/marchuk/biblio/page3.ssi"
      ],
      "confidence": "MEDIUM"
    },
    "GH008": {
      "relation_id": "GH008",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P003",
      "target_entity_id": "P018",
      "source_entity": "Андрей Николаевич Колмогоров",
      "target_entity": "Евгений Борисович Дынкин",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://pi.math.cornell.edu/m/Research/Genealogy/Dynkin/Dynkin",
          "source_title": "Cornell: Genealogy Tree of Dynkin’s School",
          "locator": "Верхняя биографическая карточка: Ph.D. (1948), Advisor",
          "supporting_fragment_summary": "Cornell прямо указывает Колмогорова научным руководителем Дынкина.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Колмогоров — научный руководитель Дынкина.",
      "supported_relation_scope": "TEACHING / PhD supervision",
      "locator": [
        "Верхняя биографическая карточка: Ph.D. (1948), Advisor"
      ],
      "temporal_scope": [
        "PhD 1948"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Cornell: Genealogy Tree of Dynkin’s School"
      ],
      "source_url": [
        "https://pi.math.cornell.edu/m/Research/Genealogy/Dynkin/Dynkin"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "GH009": {
      "relation_id": "GH009",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P018",
      "target_entity_id": "B021",
      "source_entity": "Евгений Борисович Дынкин",
      "target_entity": "Анатолий Владимирович Скороход",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.imath.kiev.ua/deppage/stochastic/Skorokhod/skorokhod_narys.html",
          "source_title": "Источник: www.imath.kiev.ua",
          "locator": "SKOROKHOD: Аспирантура, 1953–1956",
          "supporting_fragment_summary": "Прямо указано обучение под руководством Е. Б. Дынкина; источник на украинском.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Прямо указано руководство аспирантурой в 1953–1956.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "SKOROKHOD: Аспирантура, 1953–1956"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.imath.kiev.ua"
      ],
      "source_url": [
        "https://www.imath.kiev.ua/deppage/stochastic/Skorokhod/skorokhod_narys.html"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "GH010": {
      "relation_id": "GH010",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P018",
      "target_entity_id": "P016",
      "source_entity": "Евгений Борисович Дынкин",
      "target_entity": "Яков Григорьевич Синай",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "COMMON_SCHOOL_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://pi.math.cornell.edu/m/Research/Genealogy/Dynkin/Dynkin",
          "source_title": "Cornell: Genealogy Tree of Dynkin’s School",
          "locator": "Биографическая карточка Дынкина: Ph.D. (1948), Advisor Kolmogorov",
          "supporting_fragment_summary": "Cornell прямо указывает Колмогорова научным руководителем Дынкина.",
          "retrieval_status": "RETRIEVED_TEXT"
        },
        {
          "source_url": "https://abelprize.no/sites/default/files/2021-05/Abel%20prize%202014%20Yakov%20G.%20Sina%20Biography_Russian.pdf",
          "source_title": "Абелевская премия 2014: Яков Синай, биография",
          "locator": "PDF p.1, второй биографический абзац: научный руководитель Синая — Колмогоров (после степеней 1957/1960/1963)",
          "supporting_fragment_summary": "Колмогоров указан научным руководителем Синая.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Дынкин и Синай принадлежат научному кругу Колмогорова.",
      "supported_relation_scope": "COMMON_SCHOOL_CONTEXT; направленная передача Дынкин → Синай не установлена",
      "locator": [
        "Биографическая карточка Дынкина: Ph.D. (1948), Advisor Kolmogorov",
        "PDF p.1, второй биографический абзац: научный руководитель Синая — Колмогоров (после степеней 1957/1960/1963)"
      ],
      "temporal_scope": [
        "Дынкин: PhD 1948; Синай: кандидатская степень 1960"
      ],
      "verification_status": "PASS04C_APPROVED",
      "retrieval_status": [
        "RETRIEVED_TEXT",
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Cornell: Genealogy Tree of Dynkin’s School",
        "Абелевская премия 2014: Яков Синай, биография"
      ],
      "source_url": [
        "https://pi.math.cornell.edu/m/Research/Genealogy/Dynkin/Dynkin",
        "https://abelprize.no/sites/default/files/2021-05/Abel%20prize%202014%20Yakov%20G.%20Sina%20Biography_Russian.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE",
      "public_wording": "Общая научная школа Колмогорова"
    },
    "GM001": {
      "relation_id": "GM001",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B022",
      "target_entity_id": "P019",
      "source_entity": "Евгений Евгеньевич Тыртышников",
      "target_entity": "Иван Валерьевич Оселедец",
      "route_id": "R010 | R011 | VK81_V03",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://istina.msu.ru/dissertations/4787525/",
          "source_title": "Источник: istina.msu.ru",
          "locator": "OSELEDETS: Автор; Научный руководитель",
          "supporting_fragment_summary": "Оселедец, кандидатская 2007, руководитель Тыртышников.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Карточка диссертации подтверждает руководителя.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "OSELEDETS: Автор; Научный руководитель"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: istina.msu.ru"
      ],
      "source_url": [
        "https://istina.msu.ru/dissertations/4787525/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "GM002": {
      "relation_id": "GM002",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P017",
      "target_entity_id": "B022",
      "source_entity": "Гурий Иванович Марчук",
      "target_entity": "Евгений Евгеньевич Тыртышников",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "INSTITUTIONAL_SCHOOL_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.sbras.info/articles/organizaciya-nauki/uchenyy-strateg-chelovek",
          "source_title": "СО РАН: Учёный. Стратег. Человек",
          "locator": "Абзац о выступлении Тыртышникова, после фото Здание ВЦ",
          "supporting_fragment_summary": "Тыртышников описывает продолжение организационных принципов Марчука в ИВМ РАН.",
          "retrieval_status": "INDEXED_TEXT"
        }
      ],
      "supported_claim": "В институте продолжаются организационные принципы основателя Марчука.",
      "supported_relation_scope": "INSTITUTIONAL_SCHOOL_CONTEXT, не личное ученичество/научная генеалогия",
      "locator": [
        "Абзац о выступлении Тыртышникова, после фото Здание ВЦ"
      ],
      "temporal_scope": [
        "ИВМ РАН; выступление к столетию, 2025"
      ],
      "verification_status": "PASS04C_APPROVED",
      "retrieval_status": [
        "INDEXED_TEXT"
      ],
      "source_title": [
        "СО РАН: Учёный. Стратег. Человек"
      ],
      "source_url": [
        "https://www.sbras.info/articles/organizaciya-nauki/uchenyy-strateg-chelovek"
      ],
      "confidence": "MEDIUM",
      "public_wording": "Продолжение институциональных принципов Марчука в ИВМ РАН"
    },
    "GM003": {
      "relation_id": "GM003",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P019",
      "target_entity_id": "B023",
      "source_entity": "Иван Валерьевич Оселедец",
      "target_entity": "Максим Владимирович Рахуба",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.inm.ras.ru/wp-content/uploads/dis-sovet/disser/%D0%A0%D0%B0%D1%85%D1%83%D0%B1%D0%B0_%D0%94%D0%B8%D1%81%D1%81%D0%B5%D1%80%D1%82%D0%B0%D1%86%D0%B8%D1%8F-1.pdf",
          "source_title": "Рахуба М.В. Тензорные методы решения многомерных частичных задач на собственные значения",
          "locator": "PDF p.1, титульный лист, поле Научный руководитель",
          "supporting_fragment_summary": "Оселедец И.В. прямо указан научным руководителем.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Оселедец — научный руководитель кандидатской Рахубы.",
      "supported_relation_scope": "TEACHING / dissertation supervision",
      "locator": [
        "PDF p.1, титульный лист, поле Научный руководитель"
      ],
      "temporal_scope": [
        "Москва 2017"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Рахуба М.В. Тензорные методы решения многомерных частичных задач на собственные значения"
      ],
      "source_url": [
        "https://www.inm.ras.ru/wp-content/uploads/dis-sovet/disser/%D0%A0%D0%B0%D1%85%D1%83%D0%B1%D0%B0_%D0%94%D0%B8%D1%81%D1%81%D0%B5%D1%80%D1%82%D0%B0%D1%86%D0%B8%D1%8F-1.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "GM004": {
      "relation_id": "GM004",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P019",
      "target_entity_id": "B024",
      "source_entity": "Иван Валерьевич Оселедец",
      "target_entity": "Евгений Петрович Фролов",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.skoltech.ru/en/education/phd-defenses/evgeny-frolov/",
          "source_title": "Источник: www.skoltech.ru",
          "locator": "FROLOV: Candidate / Supervisor",
          "supporting_fragment_summary": "Фролов, защита 2018; supervisor Ivan Oseledets.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Страница защиты подтверждает supervisor.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "FROLOV: Candidate / Supervisor"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.skoltech.ru"
      ],
      "source_url": [
        "https://www.skoltech.ru/en/education/phd-defenses/evgeny-frolov/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "GM005": {
      "relation_id": "GM005",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P020",
      "target_entity_id": "P022",
      "source_entity": "Александр Игоревич Панов",
      "target_entity": "Алексей Константинович Ковалёв",
      "route_id": "R013",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.hse.ru/sci/diss/682448753",
          "source_title": "Источник: www.hse.ru",
          "locator": "KOVALEV: Соискатель / Руководитель",
          "supporting_fragment_summary": "Ковалёв, защита 2022; руководитель Александр И. Панов.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "В карточке диссертации указан Панов.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "KOVALEV: Соискатель / Руководитель"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.hse.ru"
      ],
      "source_url": [
        "https://www.hse.ru/sci/diss/682448753"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "GM006": {
      "relation_id": "GM006",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P020",
      "target_entity_id": "B025",
      "source_entity": "Александр Игоревич Панов",
      "target_entity": "Пётр Викторович Кудеров",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://mipt.ru/upload/dissertatsionnye-sovety-/fmn/%D0%9A%D1%83%D0%B4%D0%B5%D1%80%D0%BE%D0%B2%20%D0%9F.%D0%92./%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%20%D0%9D%D0%A0%20%D0%9A%D1%83%D0%B4%D0%B5%D1%80%D0%BE%D0%B2.pdf",
          "source_title": "Отзыв научного руководителя на диссертацию Кудерова П.В.",
          "locator": "PDF p.1 заголовок/имя; p.2 подпись Научный руководитель, Панов Александр Игоревич",
          "supporting_fragment_summary": "Документ связывает конкретную диссертацию Кудерова с руководителем Пановым.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Панов — научный руководитель диссертации Кудерова.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "PDF p.1 заголовок/имя; p.2 подпись Научный руководитель, Панов Александр Игоревич"
      ],
      "temporal_scope": [
        "Диссертационный период; рукописная дата не расшифрована"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Отзыв научного руководителя на диссертацию Кудерова П.В."
      ],
      "source_url": [
        "https://mipt.ru/upload/dissertatsionnye-sovety-/fmn/%D0%9A%D1%83%D0%B4%D0%B5%D1%80%D0%BE%D0%B2%20%D0%9F.%D0%92./%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%20%D0%9D%D0%A0%20%D0%9A%D1%83%D0%B4%D0%B5%D1%80%D0%BE%D0%B2.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "GM007": {
      "relation_id": "GM007",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P021",
      "target_entity_id": "B026",
      "source_entity": "Егор Иванович Ершов",
      "target_entity": "Виталий Вячеславович Гулевский",
      "route_id": "VK81_V04",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.hse.ru/edu/vkr/639006697",
          "source_title": "Источник: www.hse.ru",
          "locator": "GULEVSKY: Студент / Руководитель",
          "supporting_fragment_summary": "ВКР Гулевского о быстром преобразовании Хафа; руководитель Егор Ершов. Проверено по индексированному тексту HSE; open недоступен.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Карточка ВКР прямо связывает студента и руководителя.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "GULEVSKY: Студент / Руководитель"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.hse.ru"
      ],
      "source_url": [
        "https://www.hse.ru/edu/vkr/639006697"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "GM008": {
      "relation_id": "GM008",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B027",
      "target_entity_id": "P023",
      "source_entity": "Владимир Львович Арлазаров",
      "target_entity": "Валентин Андреевич Малых",
      "route_id": "R012 | R105 | R112 | VK81_V02",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.ispras.ru/dcouncil/docs/diss/2019/malyh/dissertacija-malyh.pdf",
          "source_title": "Источник: www.ispras.ru",
          "locator": "MALYKH: Титульный лист, PDF p.1",
          "supporting_fragment_summary": "Валентин Малых; тема обработки текстов; научный руководитель Владимир Львович Арлазаров. Текст PDF доступен; screenshot API вернул cache miss.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Титульный лист прямо подтверждает руководителя.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "MALYKH: Титульный лист, PDF p.1"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.ispras.ru"
      ],
      "source_url": [
        "https://www.ispras.ru/dcouncil/docs/diss/2019/malyh/dissertacija-malyh.pdf"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "E007": {
      "relation_id": "E007",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P004",
      "target_entity_id": "P005",
      "source_entity": "Алексей Андреевич Ляпунов",
      "target_entity": "Сергей Всеволодович Яблонский",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "COLLABORATION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.computer-museum.ru/books/lyapunov-90.pdf",
          "source_title": "А.А. Ляпунов: Очерки жизни и творчества. Воспоминания. Письма (2001)",
          "locator": "PDF p.20, библиографическое примечание: совместные статьи Ляпунова и Яблонского 1960 и 1964",
          "supporting_fragment_summary": "Книга содержит библиографию совместных статей, датированную переписку и примечание об участии Шрейдера в семинарах.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Ляпунов и Яблонский — соавторы работ по теоретической кибернетике.",
      "supported_relation_scope": "COLLABORATION / joint publications",
      "locator": [
        "PDF p.20, библиографическое примечание: совместные статьи Ляпунова и Яблонского 1960 и 1964"
      ],
      "temporal_scope": [
        "1960, 1964, 1968; издание 2001"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "А.А. Ляпунов: Очерки жизни и творчества. Воспоминания. Письма (2001)"
      ],
      "source_url": [
        "https://www.computer-museum.ru/books/lyapunov-90.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "E009": {
      "relation_id": "E009",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P004",
      "target_entity_id": "P009",
      "source_entity": "Алексей Андреевич Ляпунов",
      "target_entity": "Леонид Витальевич Канторович",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "SCIENTIFIC_CORRESPONDENCE",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.computer-museum.ru/books/lyapunov-90.pdf",
          "source_title": "А.А. Ляпунов: Очерки жизни и творчества. Воспоминания. Письма (2001)",
          "locator": "PDF pp.363–364, письмо №41 Канторовича Ляпунову, 29.12.1960",
          "supporting_fragment_summary": "Книга содержит библиографию совместных статей, датированную переписку и примечание об участии Шрейдера в семинарах.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Сохранилось письмо Канторовича Ляпунову от 29.12.1960 с запросом о заседании Совета кибернетики.",
      "supported_relation_scope": "SCIENTIFIC_CORRESPONDENCE; no school or idea transmission",
      "locator": [
        "PDF pp.363–364, письмо №41 Канторовича Ляпунову, 29.12.1960"
      ],
      "temporal_scope": [
        "29.12.1960"
      ],
      "verification_status": "PASS04C_APPROVED",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "А.А. Ляпунов: Очерки жизни и творчества. Воспоминания. Письма (2001)"
      ],
      "source_url": [
        "https://www.computer-museum.ru/books/lyapunov-90.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE",
      "public_wording": "Переписка: письмо Канторовича Ляпунову, 1960"
    },
    "E015": {
      "relation_id": "E015",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P013",
      "target_entity_id": "P014",
      "source_entity": "Алексей Яковлевич Червоненкис",
      "target_entity": "Владимир Наумович Вапник",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "COLLABORATION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.ipu.ru/node/11937",
          "source_title": "Источник: www.ipu.ru",
          "locator": "VC: История совместных исследований; публикации",
          "supporting_fragment_summary": "Прямо описаны совместные исследования Вапника и Червоненкиса и статистическое обучение.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Совместные исследования и публикации установлены.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VC: История совместных исследований; публикации"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.ipu.ru"
      ],
      "source_url": [
        "https://www.ipu.ru/node/11937"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "E023": {
      "relation_id": "E023",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P012",
      "target_entity_id": "B010",
      "source_entity": "Юрий Евгеньевич Нестеров",
      "target_entity": "Аркадий Семёнович Немировский",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "COLLABORATION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.isye.gatech.edu/users/arkadi-nemirovski",
          "source_title": "Источник: www.isye.gatech.edu",
          "locator": "NEMIROVSKI: Representative Publications",
          "supporting_fragment_summary": "Указаны совместные публикации Нестерова и Немировского.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Совместные публикации установлены.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "NEMIROVSKI: Representative Publications"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.isye.gatech.edu"
      ],
      "source_url": [
        "https://www.isye.gatech.edu/users/arkadi-nemirovski"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "E024": {
      "relation_id": "E024",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P009",
      "target_entity_id": "B011",
      "source_entity": "Леонид Витальевич Канторович",
      "target_entity": "Виктор Валентинович Новожилов",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "SHARED_SCIENTIFIC_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.isa.ru/index.php?Itemid=61&id=235&lang=en&option=com_content&view=article",
          "source_title": "ИСА РАН: L.V. Kantorovich",
          "locator": "Абзац о Lenin Prize (1965), вместе с Немчиновым и Новожиловым",
          "supporting_fragment_summary": "Подтверждена общая премия за математико-экономические методы. Конкретная совместная работа этим не установлена.",
          "retrieval_status": "INDEXED_TEXT; OPEN_ERROR"
        }
      ],
      "supported_claim": "Канторович и Новожилов — совместные лауреаты премии 1965.",
      "supported_relation_scope": "SHARED_SCIENTIFIC_CONTEXT; не доказательство конкретной COLLABORATION",
      "locator": [
        "Абзац о Lenin Prize (1965), вместе с Немчиновым и Новожиловым"
      ],
      "temporal_scope": [
        "1965"
      ],
      "verification_status": "PASS04C_APPROVED",
      "retrieval_status": [
        "INDEXED_TEXT; OPEN_ERROR"
      ],
      "source_title": [
        "ИСА РАН: L.V. Kantorovich"
      ],
      "source_url": [
        "https://www.isa.ru/index.php?Itemid=61&id=235&lang=en&option=com_content&view=article"
      ],
      "confidence": "MEDIUM",
      "public_wording": "Общий научно-экономический контекст; лауреаты Ленинской премии 1965 года"
    },
    "E025": {
      "relation_id": "E025",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P009",
      "target_entity_id": "B012",
      "source_entity": "Леонид Витальевич Канторович",
      "target_entity": "Марк Константинович Гавурин",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "COLLABORATION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://emmras.ru/issue-2011-4-10-4/",
          "source_title": "Экономика и математические методы, №4 (2011)",
          "locator": "Оглавление: Применение математических методов в вопросах анализа грузопотоков; авторы, с.53–74",
          "supporting_fragment_summary": "Издательская запись переиздания фиксирует авторов Гавурина и Канторовича.",
          "retrieval_status": "INDEXED_TEXT; OPEN_ERROR"
        }
      ],
      "supported_claim": "Канторович и Гавурин — соавторы конкретной работы.",
      "supported_relation_scope": "COLLABORATION / coauthorship",
      "locator": [
        "Оглавление: Применение математических методов в вопросах анализа грузопотоков; авторы, с.53–74"
      ],
      "temporal_scope": [
        "Работа 1949, переиздание 2011"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "INDEXED_TEXT; OPEN_ERROR"
      ],
      "source_title": [
        "Экономика и математические методы, №4 (2011)"
      ],
      "source_url": [
        "https://emmras.ru/issue-2011-4-10-4/"
      ],
      "confidence": "MEDIUM"
    },
    "E026": {
      "relation_id": "E026",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B013",
      "target_entity_id": "P009",
      "source_entity": "Лазарь Аронович Люстерник",
      "target_entity": "Леонид Витальевич Канторович",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "INFLUENCE",
      "evidence_status": "MISSING",
      "evidence_refs": [],
      "supported_claim": "Влияние Люстерника на Канторовича не установлено проверенным фрагментом.",
      "supported_relation_scope": "UNESTABLISHED",
      "locator": [],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "RECOVERY_ATTEMPTED_NOT_ESTABLISHED",
      "retrieval_status": [
        "NO_ADEQUATE_RELATION_FRAGMENT_RECOVERED"
      ],
      "source_title": [],
      "source_url": [],
      "confidence": "LOW_FOR_RELATION_TRUTH"
    },
    "BH001_HOP_1": {
      "relation_id": "BH001_HOP_1",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B003",
      "target_entity_id": "P010",
      "source_entity": "Павел Сергеевич Александров",
      "target_entity": "Андрей Николаевич Тихонов",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://samarskii.ru/articles/1956/1956-001.pdf",
          "source_title": "А.Н. Тихонов: к пятидесятилетию (1956)",
          "locator": "Начало биографического очерка, абзац Тихонов начал свою научную работу в возрасте 18 лет",
          "supporting_fragment_summary": "Александров, один из авторов очерка, непосредственно назван руководителем ранней научной работы Тихонова.",
          "retrieval_status": "INDEXED_TEXT; OPEN_TIMEOUT"
        }
      ],
      "supported_claim": "Александров руководил ранней научной работой Тихонова.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "Начало биографического очерка, абзац Тихонов начал свою научную работу в возрасте 18 лет"
      ],
      "temporal_scope": [
        "С возраста 18 лет; очерк 1956"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "INDEXED_TEXT; OPEN_TIMEOUT"
      ],
      "source_title": [
        "А.Н. Тихонов: к пятидесятилетию (1956)"
      ],
      "source_url": [
        "https://samarskii.ru/articles/1956/1956-001.pdf"
      ],
      "confidence": "MEDIUM"
    },
    "BH003_HOP_1": {
      "relation_id": "BH003_HOP_1",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P011",
      "target_entity_id": "P012",
      "source_entity": "Борис Теодорович Поляк",
      "target_entity": "Юрий Евгеньевич Нестеров",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.mathnet.ru/PresentFiles/24798/lecture_september_13_2019.pdf",
          "source_title": "Александр Гасников: Non Convex Optimization for Data Science (титул 29.07.2019; filename 13.09.2019)",
          "locator": "PDF p.44 / слайд 44: Nesterov’s fast gradient (momentum) method, первая строка",
          "supporting_fragment_summary": "Лектор прямо называет Поляка руководителем Нестерова; дата 1983 относится к изложению разработки метода, не принимается как точная дата защиты.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Поляк указан руководителем Нестерова.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "PDF p.44 / слайд 44: Nesterov’s fast gradient (momentum) method, первая строка"
      ],
      "temporal_scope": [
        "Диссертационный период начала 1980-х; лекция 2019"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Александр Гасников: Non Convex Optimization for Data Science (титул 29.07.2019; filename 13.09.2019)"
      ],
      "source_url": [
        "https://www.mathnet.ru/PresentFiles/24798/lecture_september_13_2019.pdf"
      ],
      "confidence": "MEDIUM"
    },
    "BH004_HOP_1": {
      "relation_id": "BH004_HOP_1",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B029",
      "target_entity_id": "P020",
      "source_entity": "Геннадий Семёнович Осипов",
      "target_entity": "Александр Игоревич Панов",
      "route_id": "R013",
      "company_endpoint": false,
      "relation_type": "COLLABORATION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://rairi.frccsc.ru/employees/7",
          "source_title": "Источник: rairi.frccsc.ru",
          "locator": "PANOV: Образование; Научная работа; Проекты",
          "supporting_fragment_summary": "Осипов назван научным руководителем Панова; перечислены совместные проекты. Указаны RL/robotics-направления самого Панова.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Совместные проекты подтверждают текущий COLLABORATION; отдельно есть научное руководство, но семантику не расширяем.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "PANOV: Образование; Научная работа; Проекты"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: rairi.frccsc.ru"
      ],
      "source_url": [
        "https://rairi.frccsc.ru/employees/7"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "BH005_HOP_1": {
      "relation_id": "BH005_HOP_1",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B030",
      "target_entity_id": "B026",
      "source_entity": "Михаил Викторович Игнатьев",
      "target_entity": "Виталий Вячеславович Гулевский",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.hse.ru/org/persons/225528543/",
          "source_title": "НИУ ВШЭ: Гулевский Виталий Вячеславович",
          "locator": "Обучение в аспирантуре → Научный руководитель",
          "supporting_fragment_summary": "Указан Игнатьев Михаил Викторович. Не путать с руководителем более ранней ВКР Егором Ершовым.",
          "retrieval_status": "INDEXED_TEXT"
        }
      ],
      "supported_claim": "Игнатьев Михаил Викторович указан руководителем аспиранта Гулевского.",
      "supported_relation_scope": "TEACHING / postgraduate supervision",
      "locator": [
        "Обучение в аспирантуре → Научный руководитель"
      ],
      "temporal_scope": [
        "Аспирантура; точный период требует карточки"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "INDEXED_TEXT"
      ],
      "source_title": [
        "НИУ ВШЭ: Гулевский Виталий Вячеславович"
      ],
      "source_url": [
        "https://www.hse.ru/org/persons/225528543/"
      ],
      "confidence": "MEDIUM"
    },
    "BH006_HOP_1": {
      "relation_id": "BH006_HOP_1",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B028",
      "target_entity_id": "B027",
      "source_entity": "Александр Семёнович Кронрод",
      "target_entity": "Владимир Львович Арлазаров",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://arzamas.academy/materials/2233",
          "source_title": "Владимир Арлазаров: «Игры помогли нам понять, как человек решает трудные логические задачи»",
          "locator": "Начало рассказа о лаборатории и шахматной программе",
          "supporting_fragment_summary": "В первом лице Кронрод назван учителем Арлазарова.",
          "retrieval_status": "INDEXED_TEXT"
        }
      ],
      "supported_claim": "Арлазаров сам называет Кронрода своим учителем.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "Начало рассказа о лаборатории и шахматной программе"
      ],
      "temporal_scope": [
        "Период работы в лаборатории Кронрода"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "INDEXED_TEXT"
      ],
      "source_title": [
        "Владимир Арлазаров: «Игры помогли нам понять, как человек решает трудные логические задачи»"
      ],
      "source_url": [
        "https://arzamas.academy/materials/2233"
      ],
      "confidence": "MEDIUM"
    },
    "BH006_HOP_2": {
      "relation_id": "BH006_HOP_2",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B001",
      "target_entity_id": "B028",
      "source_entity": "Николай Николаевич Лузин",
      "target_entity": "Александр Семёнович Кронрод",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.computer-museum.ru/articles/galglory_ru/4759/",
          "source_title": "К столетию со дня рождения Александра Семеновича Кронрода",
          "locator": "Абзац о возвращении Лузина в МГУ, web L300–301",
          "supporting_fragment_summary": "Кронрод назван последним учеником Лузина; описано представление его Лузиным Адамару как своего ученика.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Лузин представлял Кронрода как своего ученика.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "Абзац о возвращении Лузина в МГУ, web L300–301"
      ],
      "temporal_scope": [
        "1945"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "К столетию со дня рождения Александра Семеновича Кронрода"
      ],
      "source_url": [
        "https://www.computer-museum.ru/articles/galglory_ru/4759/"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "TB001": {
      "relation_id": "TB001",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B028",
      "target_entity_id": "P011",
      "source_entity": "Александр Семёнович Кронрод",
      "target_entity": "Борис Теодорович Поляк",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "INFLUENCE",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://7i.7iskusstv.com/y2020/nomer7/bpoljak/",
          "source_title": "Источник: 7i.7iskusstv.com",
          "locator": "POLYAK: Авторские воспоминания, студенческая работа и новые учителя",
          "supporting_fragment_summary": "Поляк описывает руководство Иванцова, обучение у Брудно/Кронрода и впечатление от семинара. Не формальное PhD-руководство всех троих.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Личное свидетельство влияния семинара; не перенос конкретного метода.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "POLYAK: Авторские воспоминания, студенческая работа и новые учителя"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: 7i.7iskusstv.com"
      ],
      "source_url": [
        "https://7i.7iskusstv.com/y2020/nomer7/bpoljak/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "TB002": {
      "relation_id": "TB002",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B031",
      "target_entity_id": "B029",
      "source_entity": "Дмитрий Александрович Поспелов",
      "target_entity": "Геннадий Семёнович Осипов",
      "route_id": "R013 | R116",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://rairi.frccsc.ru/news/32",
          "source_title": "Источник: rairi.frccsc.ru",
          "locator": "RAI: Начало статьи о Поспелове",
          "supporting_fragment_summary": "Осипов назван прямым учеником/соратником Поспелова.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Осипов прямо назван учеником Поспелова.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "RAI: Начало статьи о Поспелове"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: rairi.frccsc.ru"
      ],
      "source_url": [
        "https://rairi.frccsc.ru/news/32"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "T11_004": {
      "relation_id": "T11_004",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P007",
      "target_entity_id": "B034",
      "source_entity": "Сергей Алексеевич Лебедев",
      "target_entity": "Лев Наумович Дашевский",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "COLLABORATION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.icfcst.kiev.ua/MUSEUM/LEBEDEV/L_MESM_r.html",
          "source_title": "МЭСМ — первый в континентальной Европе компьютер",
          "locator": "Абзац В проектировании, монтаже, отладке и эксплуатации МЭСМ",
          "supporting_fragment_summary": "Дашевский и Шкабара поимённо указаны участниками создания МЭСМ в лаборатории Лебедева.",
          "retrieval_status": "INDEXED_TEXT"
        }
      ],
      "supported_claim": "Совместная работа с Лебедевым над МЭСМ.",
      "supported_relation_scope": "COLLABORATION / named engineering project",
      "locator": [
        "Абзац В проектировании, монтаже, отладке и эксплуатации МЭСМ"
      ],
      "temporal_scope": [
        "1948–1951"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "INDEXED_TEXT"
      ],
      "source_title": [
        "МЭСМ — первый в континентальной Европе компьютер"
      ],
      "source_url": [
        "https://www.icfcst.kiev.ua/MUSEUM/LEBEDEV/L_MESM_r.html"
      ],
      "confidence": "MEDIUM"
    },
    "T11_005": {
      "relation_id": "T11_005",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B034",
      "target_entity_id": "P008",
      "source_entity": "Лев Наумович Дашевский",
      "target_entity": "Виктор Михайлович Глушков",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "COLLABORATION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://yushchenko.infoua.net/publikaciyi.html",
          "source_title": "Катерина Ющенко: Публікації / семейный архив",
          "locator": "Статьи №4: «Цифровая автоматическая машина Киев», 1960, с.13–31, авторы Глушков и Дашевский",
          "supporting_fragment_summary": "Библиография фиксирует совместное авторство Глушкова и Ющенко; статья 1960 также включает Дашевского и Шкабару.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Поимённое совместное авторство публикации о машине Киев.",
      "supported_relation_scope": "COLLABORATION / совместная публикация; не единоличное создание машины и не авторство адресного языка",
      "locator": [
        "Статьи №4: «Цифровая автоматическая машина Киев», 1960, с.13–31, авторы Глушков и Дашевский"
      ],
      "temporal_scope": [
        "1960–1964"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Катерина Ющенко: Публікації / семейный архив"
      ],
      "source_url": [
        "https://yushchenko.infoua.net/publikaciyi.html"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "T11_006": {
      "relation_id": "T11_006",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P007",
      "target_entity_id": "B035",
      "source_entity": "Сергей Алексеевич Лебедев",
      "target_entity": "Екатерина Алексеевна Шкабара",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "COLLABORATION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.icfcst.kiev.ua/MUSEUM/LEBEDEV/L_MESM_r.html",
          "source_title": "МЭСМ — первый в континентальной Европе компьютер",
          "locator": "Абзац В проектировании, монтаже, отладке и эксплуатации МЭСМ",
          "supporting_fragment_summary": "Дашевский и Шкабара поимённо указаны участниками создания МЭСМ в лаборатории Лебедева.",
          "retrieval_status": "INDEXED_TEXT"
        }
      ],
      "supported_claim": "Совместная работа с Лебедевым над МЭСМ.",
      "supported_relation_scope": "COLLABORATION / named engineering project",
      "locator": [
        "Абзац В проектировании, монтаже, отладке и эксплуатации МЭСМ"
      ],
      "temporal_scope": [
        "1948–1951"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "INDEXED_TEXT"
      ],
      "source_title": [
        "МЭСМ — первый в континентальной Европе компьютер"
      ],
      "source_url": [
        "https://www.icfcst.kiev.ua/MUSEUM/LEBEDEV/L_MESM_r.html"
      ],
      "confidence": "MEDIUM"
    },
    "T11_007": {
      "relation_id": "T11_007",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B035",
      "target_entity_id": "P008",
      "source_entity": "Екатерина Алексеевна Шкабара",
      "target_entity": "Виктор Михайлович Глушков",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "COLLABORATION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://yushchenko.infoua.net/publikaciyi.html",
          "source_title": "Катерина Ющенко: Публікації / семейный архив",
          "locator": "Статьи №4: «Цифровая автоматическая машина Киев», 1960, с.13–31, авторы Шкабара и Глушков",
          "supporting_fragment_summary": "Библиография фиксирует совместное авторство Глушкова и Ющенко; статья 1960 также включает Дашевского и Шкабару.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Поимённое совместное авторство публикации о машине Киев.",
      "supported_relation_scope": "COLLABORATION / совместная публикация; не единоличное создание машины и не авторство адресного языка",
      "locator": [
        "Статьи №4: «Цифровая автоматическая машина Киев», 1960, с.13–31, авторы Шкабара и Глушков"
      ],
      "temporal_scope": [
        "1960–1964"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Катерина Ющенко: Публікації / семейный архив"
      ],
      "source_url": [
        "https://yushchenko.infoua.net/publikaciyi.html"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "T11_009": {
      "relation_id": "T11_009",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B036",
      "target_entity_id": "P015",
      "source_entity": "Михаил Алексеевич Лаврентьев",
      "target_entity": "Юрий Иванович Журавлёв",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "COLLABORATION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://litbook.ru/article/2908/",
          "source_title": "Ю.И. Журавлёв: Мехматяне вспоминают, 3 (интервью В. Демидовичу)",
          "locator": "Рассказ Журавлёва об организации Всесибирской олимпиады: три организатора — Лаврентьев, Ширков, Журавлёв",
          "supporting_fragment_summary": "Журавлёв подтверждает лекции Куроша и совместную организацию олимпиад с Лаврентьевым; кафедра Мальцева даёт институциональный контекст.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Лаврентьев и Журавлёв совместно организовали Всесибирскую олимпиаду.",
      "supported_relation_scope": "COLLABORATION / конкретная совместная образовательная работа",
      "locator": [
        "Рассказ Журавлёва об организации Всесибирской олимпиады: три организатора — Лаврентьев, Ширков, Журавлёв"
      ],
      "temporal_scope": [
        "Обучение с 1952; Сибирь 1960-е; интервью январь 2012"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Ю.И. Журавлёв: Мехматяне вспоминают, 3 (интервью В. Демидовичу)"
      ],
      "source_url": [
        "https://litbook.ru/article/2908/"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "T11_010": {
      "relation_id": "T11_010",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P004",
      "target_entity_id": "B037",
      "source_entity": "Алексей Андреевич Ляпунов",
      "target_entity": "Анатолий Иванович Китов",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.computer-museum.ru/galglory/lypunov2.htm",
          "source_title": "С.Н. Лебедева, Политехнический музей: Ляпунов — основоположник кибернетики",
          "locator": "Перечень участников семинара, Китов прямо обозначен учеником",
          "supporting_fragment_summary": "Автор музейного исследования прямо называет Китова учеником Ляпунова.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Китов — ученик Ляпунова.",
      "supported_relation_scope": "TEACHING; не PhD supervision",
      "locator": [
        "Перечень участников семинара, Китов прямо обозначен учеником"
      ],
      "temporal_scope": [
        "Семинар в 1950-е; исследование 2009"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "С.Н. Лебедева, Политехнический музей: Ляпунов — основоположник кибернетики"
      ],
      "source_url": [
        "https://www.computer-museum.ru/galglory/lypunov2.htm"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "T11_011": {
      "relation_id": "T11_011",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B038",
      "target_entity_id": "P008",
      "source_entity": "Николай Михайлович Амосов",
      "target_entity": "Виктор Михайлович Глушков",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "COLLABORATION",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.computer-museum.ru/galglory/glushkov_book_4_2.htm",
          "source_title": "В.М. Глушков: Исповедь учёного, 3–11 января 1982",
          "locator": "Абзац об отделе Амосова и аппарате сердце–лёгкие; web L295",
          "supporting_fragment_summary": "Глушков описывает работы своего института для Амосова, но не указывает собственное личное участие в разработке аппарата.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Институт Глушкова создавал аппаратуру для Амосова.",
      "supported_relation_scope": "INSTITUTIONAL_COLLABORATION; не установлен личный совместный исследовательский проект",
      "locator": [
        "Абзац об отделе Амосова и аппарате сердце–лёгкие; web L295"
      ],
      "temporal_scope": [
        "Конец 1950-х / начало 1960-х; воспоминания 1982"
      ],
      "verification_status": "PASS04C_APPROVED",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "В.М. Глушков: Исповедь учёного, 3–11 января 1982"
      ],
      "source_url": [
        "https://www.computer-museum.ru/galglory/glushkov_book_4_2.htm"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE",
      "relation_scope": "institutional",
      "public_wording": "Сотрудничество на уровне коллективов: институт Глушкова создавал аппаратуру для Амосова"
    },
    "T11_012": {
      "relation_id": "T11_012",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P008",
      "target_entity_id": "B039",
      "source_entity": "Виктор Михайлович Глушков",
      "target_entity": "Анатолий Александрович Стогний",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.computer-museum.ru/books/vt_face/4_glushkov_4.htm",
          "source_title": "Б.Н. Малиновский: Глушков / ученики",
          "locator": "Абзац «А.А. Стогний — один из первых аспирантов В.М. Глушкова», web L485",
          "supporting_fragment_summary": "Летичевский прямо назван учеником, Стогний — одним из первых аспирантов.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Названное отношение ученика/аспиранта Глушкова.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "Абзац «А.А. Стогний — один из первых аспирантов В.М. Глушкова», web L485"
      ],
      "temporal_scope": [
        "1950–1960-е; ретроспективная биография"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Б.Н. Малиновский: Глушков / ученики"
      ],
      "source_url": [
        "https://www.computer-museum.ru/books/vt_face/4_glushkov_4.htm"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "T11_013": {
      "relation_id": "T11_013",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P008",
      "target_entity_id": "B040",
      "source_entity": "Виктор Михайлович Глушков",
      "target_entity": "Александр Адольфович Летичевский",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.computer-museum.ru/books/vt_face/4_glushkov_4.htm",
          "source_title": "Б.Н. Малиновский: Глушков / ученики",
          "locator": "Абзац «Александр Летичевский — ученик В.М. Глушкова», web L481",
          "supporting_fragment_summary": "Летичевский прямо назван учеником, Стогний — одним из первых аспирантов.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Названное отношение ученика/аспиранта Глушкова.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "Абзац «Александр Летичевский — ученик В.М. Глушкова», web L481"
      ],
      "temporal_scope": [
        "1950–1960-е; ретроспективная биография"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Б.Н. Малиновский: Глушков / ученики"
      ],
      "source_url": [
        "https://www.computer-museum.ru/books/vt_face/4_glushkov_4.htm"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "T11_014": {
      "relation_id": "T11_014",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B041",
      "target_entity_id": "P015",
      "source_entity": "Александр Геннадиевич Курош",
      "target_entity": "Юрий Иванович Журавлёв",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://litbook.ru/article/2908/",
          "source_title": "Ю.И. Журавлёв: Мехматяне вспоминают, 3 (интервью В. Демидовичу)",
          "locator": "Первый курс: абзац о лекциях Куроша по высшей алгебре, web L64–66",
          "supporting_fragment_summary": "Журавлёв подтверждает лекции Куроша и совместную организацию олимпиад с Лаврентьевым; кафедра Мальцева даёт институциональный контекст.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Курош читал Журавлёву высшую алгебру на первом курсе.",
      "supported_relation_scope": "TEACHING / lecture attendance; не диссертационное руководство",
      "locator": [
        "Первый курс: абзац о лекциях Куроша по высшей алгебре, web L64–66"
      ],
      "temporal_scope": [
        "Обучение с 1952; Сибирь 1960-е; интервью январь 2012"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Ю.И. Журавлёв: Мехматяне вспоминают, 3 (интервью В. Демидовичу)"
      ],
      "source_url": [
        "https://litbook.ru/article/2908/"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "MLF001": {
      "relation_id": "MLF001",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B001",
      "target_entity_id": "B042",
      "source_entity": "Николай Николаевич Лузин",
      "target_entity": "Марк Аронович Айзерман",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.ipu.ru/node/11931",
          "source_title": "Источник: www.ipu.ru",
          "locator": "AIZERMAN: Биография до войны",
          "supporting_fragment_summary": "Лузин прямо назван учителем Айзермана; документирован вклад Айзермана в распознавание образов.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Лузин прямо назван учителем.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "AIZERMAN: Биография до войны"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.ipu.ru"
      ],
      "source_url": [
        "https://www.ipu.ru/node/11931"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "MLF002": {
      "relation_id": "MLF002",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B042",
      "target_entity_id": "P013",
      "source_entity": "Марк Аронович Айзерман",
      "target_entity": "Алексей Яковлевич Червоненкис",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "MISSING",
      "evidence_refs": [],
      "supported_claim": "Именное ученичество Червоненкиса у Айзермана не установлено.",
      "supported_relation_scope": "UNESTABLISHED",
      "locator": [],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "RECOVERY_ATTEMPTED_NOT_ESTABLISHED",
      "retrieval_status": [
        "NO_ADEQUATE_RELATION_FRAGMENT_RECOVERED"
      ],
      "source_title": [],
      "source_url": [],
      "confidence": "LOW_FOR_RELATION_TRUTH"
    },
    "MLF005": {
      "relation_id": "MLF005",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B043",
      "target_entity_id": "P007",
      "source_entity": "Карл Адольфович Круг",
      "target_entity": "Сергей Алексеевич Лебедев",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://computer-museum.ru/books/vt_face/3_lebedev.htm",
          "source_title": "Б.Н. Малиновский: Сергей Алексеевич Лебедев",
          "locator": "Абзац о дипломном проекте под руководством Круга",
          "supporting_fragment_summary": "Круг указан руководителем дипломного проекта Лебедева по устойчивости электростанций.",
          "retrieval_status": "INDEXED_TEXT"
        }
      ],
      "supported_claim": "Круг руководил дипломом Лебедева.",
      "supported_relation_scope": "TEACHING / diploma supervision",
      "locator": [
        "Абзац о дипломном проекте под руководством Круга"
      ],
      "temporal_scope": [
        "1928"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "INDEXED_TEXT"
      ],
      "source_title": [
        "Б.Н. Малиновский: Сергей Алексеевич Лебедев"
      ],
      "source_url": [
        "https://computer-museum.ru/books/vt_face/3_lebedev.htm"
      ],
      "confidence": "MEDIUM"
    },
    "PV46_SCHOOL_SHREIDER": {
      "relation_id": "PV46_SCHOOL_SHREIDER",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P004",
      "target_entity_id": "B007",
      "source_entity": "Алексей Андреевич Ляпунов",
      "target_entity": "Юлий Анатольевич Шрейдер",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "SEMINAR_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.computer-museum.ru/books/lyapunov-90.pdf",
          "source_title": "А.А. Ляпунов: Очерки жизни и творчества. Воспоминания. Письма (2001)",
          "locator": "PDF pp.470–473, письма Шрейдера Ляпунову 08.10.1968 и 08.11.1968",
          "supporting_fragment_summary": "Книга содержит библиографию совместных статей, датированную переписку и примечание об участии Шрейдера в семинарах.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Шрейдер участвовал в семинарах Ляпунова и обсуждал с ним исследования в письмах.",
      "supported_relation_scope": "SEMINAR_AND_CORRESPONDENCE_CONTEXT; самостоятельная преемственность школы не сформулирована",
      "locator": [
        "PDF pp.470–473, письма Шрейдера Ляпунову 08.10.1968 и 08.11.1968"
      ],
      "temporal_scope": [
        "Переписка 08.10.1968 и 08.11.1968; участие в семинарах"
      ],
      "verification_status": "PASS04C_APPROVED",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "А.А. Ляпунов: Очерки жизни и творчества. Воспоминания. Письма (2001)"
      ],
      "source_url": [
        "https://www.computer-museum.ru/books/lyapunov-90.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE",
      "public_wording": "Участник семинаров Ляпунова; научная переписка"
    },
    "PV46_INFLUENCE_GAMBURTSEV": {
      "relation_id": "PV46_INFLUENCE_GAMBURTSEV",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B009",
      "target_entity_id": "P004",
      "source_entity": "Григорий Александрович Гамбурцев",
      "target_entity": "Алексей Андреевич Ляпунов",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "INFLUENCE",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://journals.eco-vector.com/0002-3337/article/download/11650/pdf",
          "source_title": "Гамбурцев, Физика Земли №2, 2019",
          "locator": "PDF p.9 / печатная с.198; Фрагменты из воспоминаний, подпункт А.А. Ляпунов (с.279)",
          "supporting_fragment_summary": "Ляпунов лично сообщает о сильном впечатлении от физического подхода Гамбурцева.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Научный подход Гамбурцева производил сильное впечатление на Ляпунова.",
      "supported_relation_scope": "INFLUENCE; не ученичество",
      "locator": [
        "PDF p.9 / печатная с.198; Фрагменты из воспоминаний, подпункт А.А. Ляпунов (с.279)"
      ],
      "temporal_scope": [
        "Ретроспективное свидетельство о периоде до 1955; перепечатано 2019"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Гамбурцев, Физика Земли №2, 2019"
      ],
      "source_url": [
        "https://journals.eco-vector.com/0002-3337/article/download/11650/pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "NN001": {
      "relation_id": "NN001",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B044",
      "target_entity_id": "B045",
      "source_entity": "Леонид Исаакович Мандельштам",
      "target_entity": "Александр Александрович Андронов",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://museum.unn.ru/novosti/fazovyj-portret-akademik-andronov-i-ego-vremya/",
          "source_title": "Музей ННГУ: Фазовый портрет — академик Андронов и его время",
          "locator": "Абзац о научном руководителе и теме нелинейных осцилляторов",
          "supporting_fragment_summary": "Мандельштам прямо назван научным руководителем Андронова.",
          "retrieval_status": "INDEXED_TEXT"
        }
      ],
      "supported_claim": "Мандельштам руководил научной работой Андронова.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "Абзац о научном руководителе и теме нелинейных осцилляторов"
      ],
      "temporal_scope": [
        "Аспирантура Андронова"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "INDEXED_TEXT"
      ],
      "source_title": [
        "Музей ННГУ: Фазовый портрет — академик Андронов и его время"
      ],
      "source_url": [
        "https://museum.unn.ru/novosti/fazovyj-portret-akademik-andronov-i-ego-vremya/"
      ],
      "confidence": "MEDIUM"
    },
    "NN002": {
      "relation_id": "NN002",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B045",
      "target_entity_id": "B046",
      "source_entity": "Александр Александрович Андронов",
      "target_entity": "Юрий Исаакович Неймарк",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://itmm.unn.ru/about/history/memorial/yurij-isaakovich-nejmark/",
          "source_title": "ННГУ: Юрий Исаакович Неймарк",
          "locator": "Абзацы об аспирантуре и защите Горелика, web L40–41,57",
          "supporting_fragment_summary": "Андронов пригласил Неймарка в аспирантуру и поставил задачу; Неймарк прямо назван его учеником.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Андронов — учитель Неймарка.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "Абзацы об аспирантуре и защите Горелика, web L40–41,57"
      ],
      "temporal_scope": [
        "После окончания университета; до докторской 1956"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "ННГУ: Юрий Исаакович Неймарк"
      ],
      "source_url": [
        "https://itmm.unn.ru/about/history/memorial/yurij-isaakovich-nejmark/"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "NN003": {
      "relation_id": "NN003",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B046",
      "target_entity_id": "B047",
      "source_entity": "Юрий Исаакович Неймарк",
      "target_entity": "Юрий Григорьевич Васин",
      "route_id": "VK81_V06",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://itmm.unn.ru/about/history/memorial/yurij-grigorevich-vasin/",
          "source_title": "Источник: itmm.unn.ru",
          "locator": "VASIN: Кандидатская диссертация 1971",
          "supporting_fragment_summary": "Прямо назван руководитель Ю. И. Неймарк. Soft hyphens мешают простому поиску фамилии; проверен сам абзац.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Прямо указано руководство кандидатской 1971 года.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VASIN: Кандидатская диссертация 1971"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: itmm.unn.ru"
      ],
      "source_url": [
        "https://itmm.unn.ru/about/history/memorial/yurij-grigorevich-vasin/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "NN004": {
      "relation_id": "NN004",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B046",
      "target_entity_id": "B048",
      "source_entity": "Юрий Исаакович Неймарк",
      "target_entity": "Роман Григорьевич Стронгин",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://itmm.unn.ru/about/chairs/kafedra-teorii-upravleniya-i-dinamiki-sistem/nemnogo-istorii/",
          "source_title": "ННГУ: Немного истории кафедры ТУиДС",
          "locator": "Абзац об аспирантах Стронгине и Федоткине; web L56",
          "supporting_fragment_summary": "Неймарк назван научным руководителем Стронгина.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Неймарк руководил аспирантурой Стронгина.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "Абзац об аспирантах Стронгине и Федоткине; web L56"
      ],
      "temporal_scope": [
        "Начальный период кафедры, после 1958"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "ННГУ: Немного истории кафедры ТУиДС"
      ],
      "source_url": [
        "https://itmm.unn.ru/about/chairs/kafedra-teorii-upravleniya-i-dinamiki-sistem/nemnogo-istorii/"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "AIG001": {
      "relation_id": "AIG001",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P007",
      "target_entity_id": "B049",
      "source_entity": "Сергей Алексеевич Лебедев",
      "target_entity": "Зиновий Львович Рабинович",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.computer-museum.ru/galglory/Rabinovich_short.pdf",
          "source_title": "А.Ю. Нитусов: Зиновий Львович Рабинович",
          "locator": "PDF p.1 абзац 2; p.4 абзац о принятии в аспирантуру после экзаменов 1947",
          "supporting_fragment_summary": "Рабинович прямо назван аспирантом Лебедева, описано поступление к нему.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Рабинович поступил к Лебедеву в аспирантуру.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "PDF p.1 абзац 2; p.4 абзац о принятии в аспирантуру после экзаменов 1947"
      ],
      "temporal_scope": [
        "1947–1948"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "А.Ю. Нитусов: Зиновий Львович Рабинович"
      ],
      "source_url": [
        "https://www.computer-museum.ru/galglory/Rabinovich_short.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "AIG002": {
      "relation_id": "AIG002",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B050",
      "target_entity_id": "P008",
      "source_entity": "Аксель Иванович Берг",
      "target_entity": "Виктор Михайлович Глушков",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "INFLUENCE",
      "evidence_status": "MISSING",
      "evidence_refs": [],
      "supported_claim": "Персональное влияние Берга на Глушкова не локализовано.",
      "supported_relation_scope": "UNESTABLISHED",
      "locator": [],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "RECOVERY_ATTEMPTED_NOT_ESTABLISHED",
      "retrieval_status": [
        "NO_ADEQUATE_RELATION_FRAGMENT_RECOVERED"
      ],
      "source_title": [],
      "source_url": [],
      "confidence": "LOW_FOR_RELATION_TRUTH"
    },
    "AIG003": {
      "relation_id": "AIG003",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B051",
      "target_entity_id": "P008",
      "source_entity": "Игорь Андреевич Полетаев",
      "target_entity": "Виктор Михайлович Глушков",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "INFLUENCE",
      "evidence_status": "MISSING",
      "evidence_refs": [],
      "supported_claim": "Рецепция Полетаева Глушковым не подтверждена.",
      "supported_relation_scope": "UNESTABLISHED",
      "locator": [],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "RECOVERY_ATTEMPTED_NOT_ESTABLISHED",
      "retrieval_status": [
        "NO_ADEQUATE_RELATION_FRAGMENT_RECOVERED"
      ],
      "source_title": [],
      "source_url": [],
      "confidence": "LOW_FOR_RELATION_TRUTH"
    },
    "AIG004": {
      "relation_id": "AIG004",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P008",
      "target_entity_id": "B052",
      "source_entity": "Виктор Михайлович Глушков",
      "target_entity": "Екатерина Логвиновна Ющенко",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "COLLABORATION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://yushchenko.infoua.net/publikaciyi.html",
          "source_title": "Катерина Ющенко: Публікації / семейный архив",
          "locator": "Монографии №3: «Киевская автоматическая цифровая вычислительная машина», Глушков и Ющенко, 1962",
          "supporting_fragment_summary": "Библиография фиксирует совместное авторство Глушкова и Ющенко; статья 1960 также включает Дашевского и Шкабару.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Поимённое совместное авторство публикации о машине Киев.",
      "supported_relation_scope": "COLLABORATION / совместная публикация; не единоличное создание машины и не авторство адресного языка",
      "locator": [
        "Монографии №3: «Киевская автоматическая цифровая вычислительная машина», Глушков и Ющенко, 1962"
      ],
      "temporal_scope": [
        "1960–1964"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Катерина Ющенко: Публікації / семейный архив"
      ],
      "source_url": [
        "https://yushchenko.infoua.net/publikaciyi.html"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "AIG005": {
      "relation_id": "AIG005",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B038",
      "target_entity_id": "B053",
      "source_entity": "Николай Михайлович Амосов",
      "target_entity": "Лора Михайловна Касаткина",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.icfcst.kiev.ua/MUSEUM/Amoscience_printed_u.html",
          "source_title": "О.С. Касаткін: М.М. Амосов — основоположник біокібернетичних технологій",
          "locator": "AMOSOV: Авторское вступление; школа Амосова",
          "supporting_fragment_summary": "Александр и Лора Касаткины сами названы первыми аспирантами Амосова; статья описывает школу.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Авторское свидетельство аспирантуры у Амосова.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "AMOSOV: Авторское вступление; школа Амосова"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "О.С. Касаткін: М.М. Амосов — основоположник біокібернетичних технологій"
      ],
      "source_url": [
        "https://www.icfcst.kiev.ua/MUSEUM/Amoscience_printed_u.html"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "AIG006": {
      "relation_id": "AIG006",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B038",
      "target_entity_id": "B054",
      "source_entity": "Николай Михайлович Амосов",
      "target_entity": "Александр Михайлович Касаткин",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.icfcst.kiev.ua/MUSEUM/Amoscience_printed_u.html",
          "source_title": "О.С. Касаткін: М.М. Амосов — основоположник біокібернетичних технологій",
          "locator": "AMOSOV: Авторское вступление; школа Амосова",
          "supporting_fragment_summary": "Александр и Лора Касаткины сами названы первыми аспирантами Амосова; статья описывает школу.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Авторское свидетельство аспирантуры у Амосова.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "AMOSOV: Авторское вступление; школа Амосова"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "О.С. Касаткін: М.М. Амосов — основоположник біокібернетичних технологій"
      ],
      "source_url": [
        "https://www.icfcst.kiev.ua/MUSEUM/Amoscience_printed_u.html"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "AIG007": {
      "relation_id": "AIG007",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B038",
      "target_entity_id": "B055",
      "source_entity": "Николай Михайлович Амосов",
      "target_entity": "Эрнст Михайлович Куссуль",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "SCHOOL_CONTINUITY",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.icfcst.kiev.ua/MUSEUM/Amoscience_printed_u.html",
          "source_title": "О.С. Касаткін: М.М. Амосов — основоположник біокібернетичних технологій",
          "locator": "Раздел «Нейрокомп’ютери»: передача отдела Куссулю в 1988–1989 и сохранение подхода Амосова",
          "supporting_fragment_summary": "Амосов прямо вспоминает, что Шкабара познакомила его с кибернетикой; отдельный абзац описывает направление Куссуля.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "В биокибернетической школе Амосова направление Куссуля продолжало моделирование нейроподобных сетей.",
      "supported_relation_scope": "SCHOOL_CONTINUITY; не утверждение о PhD-руководстве",
      "locator": [
        "Раздел «Нейрокомп’ютери»: передача отдела Куссулю в 1988–1989 и сохранение подхода Амосова"
      ],
      "temporal_scope": [
        "Биокибернетический период с конца 1950-х"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "О.С. Касаткін: М.М. Амосов — основоположник біокібернетичних технологій"
      ],
      "source_url": [
        "https://www.icfcst.kiev.ua/MUSEUM/Amoscience_printed_u.html"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "AIG008": {
      "relation_id": "AIG008",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B035",
      "target_entity_id": "B038",
      "source_entity": "Екатерина Алексеевна Шкабара",
      "target_entity": "Николай Михайлович Амосов",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "INFLUENCE",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.icfcst.kiev.ua/MUSEUM/Amoscience_printed_u.html",
          "source_title": "О.С. Касаткін: М.М. Амосов — основоположник біокібернетичних технологій",
          "locator": "Цитата Амосова ближе к концу: Шкабара познакомила его с кибернетикой",
          "supporting_fragment_summary": "Амосов прямо вспоминает, что Шкабара познакомила его с кибернетикой; отдельный абзац описывает направление Куссуля.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Шкабара ввела Амосова в кибернетику по его собственному свидетельству.",
      "supported_relation_scope": "INFLUENCE",
      "locator": [
        "Цитата Амосова ближе к концу: Шкабара познакомила его с кибернетикой"
      ],
      "temporal_scope": [
        "Биокибернетический период с конца 1950-х"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "О.С. Касаткін: М.М. Амосов — основоположник біокібернетичних технологій"
      ],
      "source_url": [
        "https://www.icfcst.kiev.ua/MUSEUM/Amoscience_printed_u.html"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "PA001": {
      "relation_id": "PA001",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P004",
      "target_entity_id": "B056",
      "source_entity": "Алексей Андреевич Ляпунов",
      "target_entity": "Ольга Сергеевна Кулагина",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://old.mccme.ru/free-books/uspenskii/vau_book3.pdf",
          "source_title": "В.А. Успенский: Труды по нематематике, книга 3",
          "locator": "PDF p.40 / печатная с.39, Итоги работы секции алгоритмов машинного перевода, абзац 2",
          "supporting_fragment_summary": "Стенограмма доклада 21.05.1958 прямо указывает руководство Ляпунова работой Кулагиной и Мельчука.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Кулагина работала под руководством Ляпунова над машинным переводом.",
      "supported_relation_scope": "TEACHING / research supervision; не конкретная степень",
      "locator": [
        "PDF p.40 / печатная с.39, Итоги работы секции алгоритмов машинного перевода, абзац 2"
      ],
      "temporal_scope": [
        "Работы с середины 1950-х; доклад 21.05.1958"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "В.А. Успенский: Труды по нематематике, книга 3"
      ],
      "source_url": [
        "https://old.mccme.ru/free-books/uspenskii/vau_book3.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "PA002": {
      "relation_id": "PA002",
      "relation_class": "HISTORICAL",
      "source_entity_id": "B057",
      "target_entity_id": "B058",
      "source_entity": "Алексей Григорьевич Ивахненко",
      "target_entity": "Владимир Семёнович Степашко",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.gmdh.net/AG/AG.htm",
          "source_title": "Олексій Григорович Івахненко: Життєвий і творчий шлях ученого (МННЦ ІТС, 2003)",
          "locator": "Главные этапы научной деятельности; заключительные абзацы о киевской школе; web lines 80–81",
          "supporting_fragment_summary": "Степашко прямо назван учеником Ивахненко и продолжателем индуктивного моделирования.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Степашко — ученик Ивахненко.",
      "supported_relation_scope": "TEACHING; не утверждать конкретное PhD-руководство без записи о защите",
      "locator": [
        "Главные этапы научной деятельности; заключительные абзацы о киевской школе; web lines 80–81"
      ],
      "temporal_scope": [
        "К моменту издания 2003; точные годы ученичества не указаны"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Олексій Григорович Івахненко: Життєвий і творчий шлях ученого (МННЦ ІТС, 2003)"
      ],
      "source_url": [
        "https://www.gmdh.net/AG/AG.htm"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "PA003": {
      "relation_id": "PA003",
      "relation_class": "HISTORICAL",
      "source_entity_id": "P006",
      "target_entity_id": "B059",
      "source_entity": "Андрей Петрович Ершов",
      "target_entity": "Александр Семёнович Нариньяни",
      "route_id": "",
      "company_endpoint": false,
      "relation_type": "TEACHING",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.computer-museum.ru/books/programmer_path.pdf",
          "source_title": "И.А. Крайнева, Н.А. Черемных: Путь программиста",
          "locator": "PDF p.186 / печатная с.186, глава Школа информатики академика Ершова; абзац о бывших аспирантах",
          "supporting_fragment_summary": "Нариньяни прямо назван бывшим аспирантом Ершова; описан совет перейти к задачам ИИ.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Нариньяни — бывший аспирант Ершова.",
      "supported_relation_scope": "TEACHING",
      "locator": [
        "PDF p.186 / печатная с.186, глава Школа информатики академика Ершова; абзац о бывших аспирантах"
      ],
      "temporal_scope": [
        "Аспирантура до организации группы ИИ 1973; ретроспективное издание"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "И.А. Крайнева, Н.А. Черемных: Путь программиста"
      ],
      "source_url": [
        "https://www.computer-museum.ru/books/programmer_path.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "R003:S01": {
      "relation_id": "R003:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P012",
      "target_entity_id": "T001",
      "source_entity": "Юрий Евгеньевич Нестеров",
      "target_entity": "Nesterov acceleration",
      "route_id": "R003",
      "company_endpoint": false,
      "relation_type": "PERSON_TO_METHOD",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://research.yandex.com/publications/nesterov-finds-graal-optimal-and-adaptive-gradient-method-for-convex-optimization",
          "source_title": "Источник: research.yandex.com",
          "locator": "GRAAL: Authors; Abstract",
          "supporting_fragment_summary": "Нестерова ускорение названо и используется в исследовании авторов Yandex Research.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Авторство ускорения названо.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "GRAAL: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: research.yandex.com"
      ],
      "source_url": [
        "https://research.yandex.com/publications/nesterov-finds-graal-optimal-and-adaptive-gradient-method-for-convex-optimization"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R003:S02": {
      "relation_id": "R003:S02",
      "relation_class": "MODERN",
      "source_entity_id": "T001",
      "target_entity_id": "O001",
      "source_entity": "Nesterov acceleration",
      "target_entity": "Yandex Research",
      "route_id": "R003",
      "company_endpoint": false,
      "relation_type": "METHOD_TO_RESEARCH_SUBDIVISION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://research.yandex.com/publications/nesterov-finds-graal-optimal-and-adaptive-gradient-method-for-convex-optimization",
          "source_title": "Источник: research.yandex.com",
          "locator": "GRAAL: Authors; Abstract",
          "supporting_fragment_summary": "Нестерова ускорение названо и используется в исследовании авторов Yandex Research.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Использование метода в исследовании названо.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "GRAAL: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: research.yandex.com"
      ],
      "source_url": [
        "https://research.yandex.com/publications/nesterov-finds-graal-optimal-and-adaptive-gradient-method-for-convex-optimization"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R003:S03": {
      "relation_id": "R003:S03",
      "relation_class": "MODERN",
      "source_entity_id": "O001",
      "target_entity_id": "C_YANDEX",
      "source_entity": "Yandex Research",
      "target_entity": "Яндекс",
      "route_id": "R003",
      "company_endpoint": true,
      "relation_type": "SUBDIVISION_TO_COMPANY",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://research.yandex.com/publications/nesterov-finds-graal-optimal-and-adaptive-gradient-method-for-convex-optimization",
          "source_title": "Источник: research.yandex.com",
          "locator": "GRAAL: Authors; Abstract",
          "supporting_fragment_summary": "Нестерова ускорение названо и используется в исследовании авторов Yandex Research.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Аффилиация указана.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "GRAAL: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: research.yandex.com"
      ],
      "source_url": [
        "https://research.yandex.com/publications/nesterov-finds-graal-optimal-and-adaptive-gradient-method-for-convex-optimization"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R007:S01": {
      "relation_id": "R007:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P001",
      "target_entity_id": "T002",
      "source_entity": "Андрей Андреевич Марков (старший)",
      "target_entity": "Optimization with Markovian noise",
      "route_id": "R007",
      "company_endpoint": false,
      "relation_type": "EPONYMOUS_CONCEPT_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://research.yandex.com/publications/first-order-methods-with-markovian-noise-from-acceleration-to-variational-inequalities",
          "source_title": "Источник: research.yandex.com",
          "locator": "MARKOV: Authors; Abstract",
          "supporting_fragment_summary": "Исследование Markovian noise и аффилиация Yandex Research; не биографическая линия от Маркова.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Эпонимический контекст, не личная генеалогия.",
      "supported_relation_scope": "EPONYMIC_CONTEXT",
      "locator": [
        "MARKOV: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: research.yandex.com"
      ],
      "source_url": [
        "https://research.yandex.com/publications/first-order-methods-with-markovian-noise-from-acceleration-to-variational-inequalities"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R007:S02": {
      "relation_id": "R007:S02",
      "relation_class": "MODERN",
      "source_entity_id": "T002",
      "target_entity_id": "O001",
      "source_entity": "Optimization with Markovian noise",
      "target_entity": "Yandex Research",
      "route_id": "R007",
      "company_endpoint": false,
      "relation_type": "EPONYMOUS_CONCEPT_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://research.yandex.com/publications/first-order-methods-with-markovian-noise-from-acceleration-to-variational-inequalities",
          "source_title": "Источник: research.yandex.com",
          "locator": "MARKOV: Authors; Abstract",
          "supporting_fragment_summary": "Исследование Markovian noise и аффилиация Yandex Research; не биографическая линия от Маркова.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Исследовательское направление и аффилиация.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "MARKOV: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: research.yandex.com"
      ],
      "source_url": [
        "https://research.yandex.com/publications/first-order-methods-with-markovian-noise-from-acceleration-to-variational-inequalities"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R007:S03": {
      "relation_id": "R007:S03",
      "relation_class": "MODERN",
      "source_entity_id": "O001",
      "target_entity_id": "C_YANDEX",
      "source_entity": "Yandex Research",
      "target_entity": "Яндекс",
      "route_id": "R007",
      "company_endpoint": true,
      "relation_type": "EPONYMOUS_CONCEPT_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://research.yandex.com/publications/first-order-methods-with-markovian-noise-from-acceleration-to-variational-inequalities",
          "source_title": "Источник: research.yandex.com",
          "locator": "MARKOV: Authors; Abstract",
          "supporting_fragment_summary": "Исследование Markovian noise и аффилиация Yandex Research; не биографическая линия от Маркова.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Аффилиация указана.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "MARKOV: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: research.yandex.com"
      ],
      "source_url": [
        "https://research.yandex.com/publications/first-order-methods-with-markovian-noise-from-acceleration-to-variational-inequalities"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R010:S02": {
      "relation_id": "R010:S02",
      "relation_class": "MODERN",
      "source_entity_id": "P019",
      "target_entity_id": "T006",
      "source_entity": "Иван Валерьевич Оселедец",
      "target_entity": "Matrix factorization / ALS → vector retrieval",
      "route_id": "R010",
      "company_endpoint": false,
      "relation_type": "METHOD_FAMILY_VECTOR_RETRIEVAL_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/abs/1603.06038",
          "source_title": "Источник: arxiv.org",
          "locator": "TENSOR: Authors; Abstract",
          "supporting_fragment_summary": "Оселедец и Фролов — соавторы работы о тензорных рекомендательных методах; не источник внедрения их алгоритма в компании.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Составной узел шире конкретной tensor-работы.",
      "supported_relation_scope": "METHOD_FAMILY_CONTEXT",
      "locator": [
        "TENSOR: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: arxiv.org"
      ],
      "source_url": [
        "https://arxiv.org/abs/1603.06038"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R010:S03": {
      "relation_id": "R010:S03",
      "relation_class": "MODERN",
      "source_entity_id": "B024",
      "target_entity_id": "T006",
      "source_entity": "Евгений Петрович Фролов",
      "target_entity": "Matrix factorization / ALS → vector retrieval",
      "route_id": "R010",
      "company_endpoint": false,
      "relation_type": "METHOD_FAMILY_VECTOR_RETRIEVAL_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/abs/1603.06038",
          "source_title": "Источник: arxiv.org",
          "locator": "TENSOR: Authors; Abstract",
          "supporting_fragment_summary": "Оселедец и Фролов — соавторы работы о тензорных рекомендательных методах; не источник внедрения их алгоритма в компании.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Method-family, не deployment.",
      "supported_relation_scope": "METHOD_FAMILY_CONTEXT",
      "locator": [
        "TENSOR: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: arxiv.org"
      ],
      "source_url": [
        "https://arxiv.org/abs/1603.06038"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R010:S04": {
      "relation_id": "R010:S04",
      "relation_class": "MODERN",
      "source_entity_id": "T006",
      "target_entity_id": "C_OZON",
      "source_entity": "Matrix factorization / ALS → vector retrieval",
      "target_entity": "Ozon",
      "route_id": "R010",
      "company_endpoint": true,
      "relation_type": "METHOD_FAMILY_VECTOR_RETRIEVAL_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/ozontech/articles/1063304/",
          "source_title": "Источник: habr.com",
          "locator": "OZON: Описание кандидатогенерации",
          "supporting_fragment_summary": "Команда Ozon описывает ALS, эмбеддинги, ANN/KNN. Не атрибутирует production-алгоритм Оселедцу/Фролову.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Современный продуктовый метод описан.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "OZON: Описание кандидатогенерации"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/ozontech/articles/1063304/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R011:S02": {
      "relation_id": "R011:S02",
      "relation_class": "MODERN",
      "source_entity_id": "P019",
      "target_entity_id": "T006",
      "source_entity": "Иван Валерьевич Оселедец",
      "target_entity": "Matrix factorization / ALS → vector retrieval",
      "route_id": "R011",
      "company_endpoint": false,
      "relation_type": "METHOD_FAMILY_PARALLEL",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/abs/1603.06038",
          "source_title": "Источник: arxiv.org",
          "locator": "TENSOR: Authors; Abstract",
          "supporting_fragment_summary": "Оселедец и Фролов — соавторы работы о тензорных рекомендательных методах; не источник внедрения их алгоритма в компании.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Method-family контекст.",
      "supported_relation_scope": "METHOD_FAMILY_CONTEXT",
      "locator": [
        "TENSOR: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: arxiv.org"
      ],
      "source_url": [
        "https://arxiv.org/abs/1603.06038"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R011:S03": {
      "relation_id": "R011:S03",
      "relation_class": "MODERN",
      "source_entity_id": "B024",
      "target_entity_id": "T006",
      "source_entity": "Евгений Петрович Фролов",
      "target_entity": "Matrix factorization / ALS → vector retrieval",
      "route_id": "R011",
      "company_endpoint": false,
      "relation_type": "METHOD_FAMILY_PARALLEL",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/abs/1603.06038",
          "source_title": "Источник: arxiv.org",
          "locator": "TENSOR: Authors; Abstract",
          "supporting_fragment_summary": "Оселедец и Фролов — соавторы работы о тензорных рекомендательных методах; не источник внедрения их алгоритма в компании.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Method-family контекст.",
      "supported_relation_scope": "METHOD_FAMILY_CONTEXT",
      "locator": [
        "TENSOR: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: arxiv.org"
      ],
      "source_url": [
        "https://arxiv.org/abs/1603.06038"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R011:S04": {
      "relation_id": "R011:S04",
      "relation_class": "MODERN",
      "source_entity_id": "T006",
      "target_entity_id": "C_AVITO",
      "source_entity": "Matrix factorization / ALS → vector retrieval",
      "target_entity": "Avito",
      "route_id": "R011",
      "company_endpoint": true,
      "relation_type": "METHOD_FAMILY_PARALLEL",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://mpra.ub.uni-muenchen.de/82808/1/paper2.pdf",
          "source_title": "Combination of Content-Based User Profiling and Local Collective Embeddings for Job Recommendation",
          "locator": "PDF p.2 (article p.1), authors/affiliations and Abstract; §1 identifies Xing competition",
          "supporting_fragment_summary": "Авторы с аффилиацией Avito применили факторизацию в решении RecSys Challenge 2017 на данных Xing. Не устанавливает production Avito.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Команда Avito исследовала матричную факторизацию в конкурсной задаче.",
      "supported_relation_scope": "RESEARCH_METHOD_USE; не production platform deployment",
      "locator": [
        "PDF p.2 (article p.1), authors/affiliations and Abstract; §1 identifies Xing competition"
      ],
      "temporal_scope": [
        "RecSys Challenge 2017"
      ],
      "verification_status": "CONTEXT_ONLY_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Combination of Content-Based User Profiling and Local Collective Embeddings for Job Recommendation"
      ],
      "source_url": [
        "https://mpra.ub.uni-muenchen.de/82808/1/paper2.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "R012:S02": {
      "relation_id": "R012:S02",
      "relation_class": "MODERN",
      "source_entity_id": "P023",
      "target_entity_id": "R001",
      "source_entity": "Валентин Андреевич Малых",
      "target_entity": "NLP / language-model research",
      "route_id": "R012",
      "company_endpoint": false,
      "relation_type": "HUMAN_LINEAGE_TO_FIELD_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.ispras.ru/dcouncil/docs/diss/2019/malyh/dissertacija-malyh.pdf",
          "source_title": "Источник: www.ispras.ru",
          "locator": "MALYKH: Титульный лист, PDF p.1",
          "supporting_fragment_summary": "Валентин Малых; тема обработки текстов; научный руководитель Владимир Львович Арлазаров. Текст PDF доступен; screenshot API вернул cache miss.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Авторская диссертация о NLP.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "MALYKH: Титульный лист, PDF p.1"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.ispras.ru"
      ],
      "source_url": [
        "https://www.ispras.ru/dcouncil/docs/diss/2019/malyh/dissertacija-malyh.pdf"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R012:S03": {
      "relation_id": "R012:S03",
      "relation_class": "MODERN",
      "source_entity_id": "R001",
      "target_entity_id": "C_MWS",
      "source_entity": "NLP / language-model research",
      "target_entity": "MWS AI",
      "route_id": "R012",
      "company_endpoint": true,
      "relation_type": "HUMAN_LINEAGE_TO_FIELD_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/mts_ai/articles/809713/",
          "source_title": "Как мы в MTS AI собрали команду исследователей меньше, чем за год",
          "locator": "Подзаголовок «Валентин Малых, руководитель направления NLP-исследований MTS AI»",
          "supporting_fragment_summary": "Компания прямо описывает роль Малых в NLP-исследованиях.",
          "retrieval_status": "RETRIEVED_TEXT"
        },
        {
          "source_url": "https://ar2025.mts.ru/mts-segodnya/operaczionnyj-obzor/",
          "source_title": "МТС: Годовой отчёт 2025 / Операционный обзор",
          "locator": "MWS AI → Научная деятельность и поддержка сообщества разработчиков; web L1704–1705",
          "supporting_fragment_summary": "Малых назван в команде фундаментальных исследований MWS AI; описана работа над языковыми моделями.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "NLP-исследования Малых документированы в MTS AI в 2024 и в MWS AI в отчёте за 2025.",
      "supported_relation_scope": "HUMAN_LINEAGE_TO_FIELD_CONTEXT; датированные research endpoints, не автоматическая атрибуция каждого продукта",
      "locator": [
        "Подзаголовок «Валентин Малых, руководитель направления NLP-исследований MTS AI»",
        "MWS AI → Научная деятельность и поддержка сообщества разработчиков; web L1704–1705"
      ],
      "temporal_scope": [
        "23.04.2024",
        "Отчётный 2025 год"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT",
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Как мы в MTS AI собрали команду исследователей меньше, чем за год",
        "МТС: Годовой отчёт 2025 / Операционный обзор"
      ],
      "source_url": [
        "https://habr.com/ru/companies/mts_ai/articles/809713/",
        "https://ar2025.mts.ru/mts-segodnya/operaczionnyj-obzor/"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "R013:S04": {
      "relation_id": "R013:S04",
      "relation_class": "MODERN",
      "source_entity_id": "P022",
      "target_entity_id": "T007",
      "source_entity": "Алексей Константинович Ковалёв",
      "target_entity": "Embodied AI / robotic replanning",
      "route_id": "R013",
      "company_endpoint": false,
      "relation_type": "INSTITUTIONAL_EMBODIED_AI_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/html/2507.05135v1",
          "source_title": "Источник: arxiv.org",
          "locator": "LERA: Authors/affiliations; Abstract",
          "supporting_fragment_summary": "Ковалёв и Александр И. Панов — авторы робототехнического replanning; AIRI указано в аффилиациях. Не источник передачи метода в другой банк.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Исследователь — автор робототехнической работы.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "LERA: Authors/affiliations; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: arxiv.org"
      ],
      "source_url": [
        "https://arxiv.org/html/2507.05135v1"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R013:S05": {
      "relation_id": "R013:S05",
      "relation_class": "MODERN",
      "source_entity_id": "T007",
      "target_entity_id": "C_AIRI",
      "source_entity": "Embodied AI / robotic replanning",
      "target_entity": "AIRI",
      "route_id": "R013",
      "company_endpoint": true,
      "relation_type": "INSTITUTIONAL_EMBODIED_AI_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/html/2507.05135v1",
          "source_title": "Источник: arxiv.org",
          "locator": "LERA: Authors/affiliations; Abstract",
          "supporting_fragment_summary": "Ковалёв и Александр И. Панов — авторы робототехнического replanning; AIRI указано в аффилиациях. Не источник передачи метода в другой банк.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Аффилиация AIRI указана.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "LERA: Authors/affiliations; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: arxiv.org"
      ],
      "source_url": [
        "https://arxiv.org/html/2507.05135v1"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R014:S01": {
      "relation_id": "R014:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P013",
      "target_entity_id": "S001",
      "source_entity": "Алексей Яковлевич Червоненкис",
      "target_entity": "Statistical learning / ШАД",
      "route_id": "R014",
      "company_endpoint": false,
      "relation_type": "PERSON_TO_SCHOOL",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://yandex.ru/company/news/2007-0920",
          "source_title": "Источник: yandex.ru",
          "locator": "Y2007: Преподаватели первого семестра",
          "supporting_fragment_summary": "Официальный архив Яндекса прямо называет Червоненкиса преподавателем. Дополнительный источник, не записанный в R014.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Преподавание подтверждено; для проверки использован дополнительный официальный архив 2007.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "Y2007: Преподаватели первого семестра"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: yandex.ru"
      ],
      "source_url": [
        "https://yandex.ru/company/news/2007-0920"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R014:S02": {
      "relation_id": "R014:S02",
      "relation_class": "MODERN",
      "source_entity_id": "S001",
      "target_entity_id": "C_YANDEX",
      "source_entity": "Statistical learning / ШАД",
      "target_entity": "Яндекс",
      "route_id": "R014",
      "company_endpoint": true,
      "relation_type": "SCHOOL_TO_COMPANY",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://yandex.ru/company/news/2007-0920",
          "source_title": "Источник: yandex.ru",
          "locator": "Y2007: Преподаватели первого семестра",
          "supporting_fragment_summary": "Официальный архив Яндекса прямо называет Червоненкиса преподавателем. Дополнительный источник, не записанный в R014.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Школа Яндекса; официальный архив.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "Y2007: Преподаватели первого семестра"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: yandex.ru"
      ],
      "source_url": [
        "https://yandex.ru/company/news/2007-0920"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R015:S01": {
      "relation_id": "R015:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P013",
      "target_entity_id": "T003",
      "source_entity": "Алексей Яковлевич Червоненкис",
      "target_entity": "Sponsored-search ad allocation",
      "route_id": "R015",
      "company_endpoint": false,
      "relation_type": "AUTHOR_TO_METHOD",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.pleiades.online/abstract/autorc/15/autorc1315_abstract.pdf",
          "source_title": "Источник: www.pleiades.online",
          "locator": "ADS: Publisher abstract, DOI 10.1134/S0005117915070164",
          "supporting_fragment_summary": "Соавторы Сорокина/Червоненкис; тестирование алгоритма на данных Яндекса. Alternate publisher URL того же DOI.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Соавтор метода.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "ADS: Publisher abstract, DOI 10.1134/S0005117915070164"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.pleiades.online"
      ],
      "source_url": [
        "https://www.pleiades.online/abstract/autorc/15/autorc1315_abstract.pdf"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R015:S02": {
      "relation_id": "R015:S02",
      "relation_class": "MODERN",
      "source_entity_id": "X003",
      "target_entity_id": "T003",
      "source_entity": "Анна Сорокина",
      "target_entity": "Sponsored-search ad allocation",
      "route_id": "R015",
      "company_endpoint": false,
      "relation_type": "COAUTHOR_TO_METHOD",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.pleiades.online/abstract/autorc/15/autorc1315_abstract.pdf",
          "source_title": "Источник: www.pleiades.online",
          "locator": "ADS: Publisher abstract, DOI 10.1134/S0005117915070164",
          "supporting_fragment_summary": "Соавторы Сорокина/Червоненкис; тестирование алгоритма на данных Яндекса. Alternate publisher URL того же DOI.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Соавтор метода.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "ADS: Publisher abstract, DOI 10.1134/S0005117915070164"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.pleiades.online"
      ],
      "source_url": [
        "https://www.pleiades.online/abstract/autorc/15/autorc1315_abstract.pdf"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R015:S03": {
      "relation_id": "R015:S03",
      "relation_class": "MODERN",
      "source_entity_id": "T003",
      "target_entity_id": "C_YANDEX",
      "source_entity": "Sponsored-search ad allocation",
      "target_entity": "Яндекс",
      "route_id": "R015",
      "company_endpoint": true,
      "relation_type": "METHOD_TO_COMPANY_DATA_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.pleiades.online/abstract/autorc/15/autorc1315_abstract.pdf",
          "source_title": "Источник: www.pleiades.online",
          "locator": "ADS: Publisher abstract, DOI 10.1134/S0005117915070164",
          "supporting_fragment_summary": "Соавторы Сорокина/Червоненкис; тестирование алгоритма на данных Яндекса. Alternate publisher URL того же DOI.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Именно данные Яндекса, не production.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "ADS: Publisher abstract, DOI 10.1134/S0005117915070164"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.pleiades.online"
      ],
      "source_url": [
        "https://www.pleiades.online/abstract/autorc/15/autorc1315_abstract.pdf"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R016:S01": {
      "relation_id": "R016:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P003",
      "target_entity_id": "X004",
      "source_entity": "Андрей Николаевич Колмогоров",
      "target_entity": "Альберт Ширяев",
      "route_id": "R016",
      "company_endpoint": false,
      "relation_type": "HUMAN_LINEAGE",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://dataschool.yandex.com/profile/shiryaev",
          "source_title": "Источник: dataschool.yandex.com",
          "locator": "SHAD: Биография и преподавание",
          "supporting_fragment_summary": "Страница прямо называет Колмогорова учителем Ширяева и сообщает о преподавании стохастики в ШАД.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Прямое указание учителя.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "SHAD: Биография и преподавание"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: dataschool.yandex.com"
      ],
      "source_url": [
        "https://dataschool.yandex.com/profile/shiryaev"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R016:S02": {
      "relation_id": "R016:S02",
      "relation_class": "MODERN",
      "source_entity_id": "X004",
      "target_entity_id": "S002",
      "source_entity": "Альберт Ширяев",
      "target_entity": "Ширяев / стохастика / ШАД",
      "route_id": "R016",
      "company_endpoint": false,
      "relation_type": "PERSON_TO_SCHOOL",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://dataschool.yandex.com/profile/shiryaev",
          "source_title": "Источник: dataschool.yandex.com",
          "locator": "SHAD: Биография и преподавание",
          "supporting_fragment_summary": "Страница прямо называет Колмогорова учителем Ширяева и сообщает о преподавании стохастики в ШАД.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Курс стохастики в ШАД.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "SHAD: Биография и преподавание"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: dataschool.yandex.com"
      ],
      "source_url": [
        "https://dataschool.yandex.com/profile/shiryaev"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R016:S03": {
      "relation_id": "R016:S03",
      "relation_class": "MODERN",
      "source_entity_id": "S002",
      "target_entity_id": "C_YANDEX",
      "source_entity": "Ширяев / стохастика / ШАД",
      "target_entity": "Яндекс",
      "route_id": "R016",
      "company_endpoint": true,
      "relation_type": "SCHOOL_TO_COMPANY",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://dataschool.yandex.com/profile/shiryaev",
          "source_title": "Источник: dataschool.yandex.com",
          "locator": "SHAD: Биография и преподавание",
          "supporting_fragment_summary": "Страница прямо называет Колмогорова учителем Ширяева и сообщает о преподавании стохастики в ШАД.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Институциональный образовательный контекст.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "SHAD: Биография и преподавание"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: dataschool.yandex.com"
      ],
      "source_url": [
        "https://dataschool.yandex.com/profile/shiryaev"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R017:S01": {
      "relation_id": "R017:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P015",
      "target_entity_id": "X005",
      "source_entity": "Юрий Иванович Журавлёв",
      "target_entity": "Константин Рудаков",
      "route_id": "R017",
      "company_endpoint": false,
      "relation_type": "SCHOOL_AND_TEACHING_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://alexanderdyakonov.wordpress.com/2022/02/09/zhuravlev/",
          "source_title": "А.Г. Дьяконов: Журавлёв Юрий Иванович (личные воспоминания)",
          "locator": "Абзац Самый яркий пример здесь — Рудаков",
          "supporting_fragment_summary": "Коллега/ученик описывает конкретный сценарий научного обучения Рудакова Журавлёвым.",
          "retrieval_status": "INDEXED_TEXT"
        }
      ],
      "supported_claim": "Рудаков — ученик Журавлёва, по именному свидетельству участника научной школы.",
      "supported_relation_scope": "SCHOOL_AND_TEACHING_CONTEXT",
      "locator": [
        "Абзац Самый яркий пример здесь — Рудаков"
      ],
      "temporal_scope": [
        "Ретроспективный текст 09.02.2022"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "INDEXED_TEXT"
      ],
      "source_title": [
        "А.Г. Дьяконов: Журавлёв Юрий Иванович (личные воспоминания)"
      ],
      "source_url": [
        "https://alexanderdyakonov.wordpress.com/2022/02/09/zhuravlev/"
      ],
      "confidence": "MEDIUM"
    },
    "R017:S02": {
      "relation_id": "R017:S02",
      "relation_class": "MODERN",
      "source_entity_id": "X005",
      "target_entity_id": "X006",
      "source_entity": "Константин Рудаков",
      "target_entity": "Константин Воронцов",
      "route_id": "R017",
      "company_endpoint": false,
      "relation_type": "SCHOOL_AND_TEACHING_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://istina.msu.ru/workers/24427974/all/",
          "source_title": "ИСТИНА МГУ: Константин Рудаков / Руководство диссертациями",
          "locator": "Раздел Руководство диссертациями: записи 1999 (Локальные базисы...) и 2010 (Комбинаторная теория...), web L431–457",
          "supporting_fragment_summary": "Рудаков указан руководителем кандидатской и консультантом докторской Воронцова.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Рудаков руководил кандидатской Воронцова и консультировал докторскую.",
      "supported_relation_scope": "SCHOOL_AND_TEACHING_CONTEXT / named dissertation supervision",
      "locator": [
        "Раздел Руководство диссертациями: записи 1999 (Локальные базисы...) и 2010 (Комбинаторная теория...), web L431–457"
      ],
      "temporal_scope": [
        "1999, 2010"
      ],
      "verification_status": "EXPLICIT_RELATION_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "ИСТИНА МГУ: Константин Рудаков / Руководство диссертациями"
      ],
      "source_url": [
        "https://istina.msu.ru/workers/24427974/all/"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "R017:S03": {
      "relation_id": "R017:S03",
      "relation_class": "MODERN",
      "source_entity_id": "X006",
      "target_entity_id": "S003",
      "source_entity": "Константин Воронцов",
      "target_entity": "Школа распознавания / ШАД",
      "route_id": "R017",
      "company_endpoint": false,
      "relation_type": "SCHOOL_AND_TEACHING_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://shad.yandex.ru/teachers",
          "source_title": "Источник: shad.yandex.ru",
          "locator": "SHAD_TEACHERS: Внесли вклад в развитие ШАДа",
          "supporting_fragment_summary": "Воронцов включён в преподавательский/образовательный контекст; не подтверждает всю генеалогию.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Образовательный вклад подтверждён.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "SHAD_TEACHERS: Внесли вклад в развитие ШАДа"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: shad.yandex.ru"
      ],
      "source_url": [
        "https://shad.yandex.ru/teachers"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R017:S04": {
      "relation_id": "R017:S04",
      "relation_class": "MODERN",
      "source_entity_id": "S003",
      "target_entity_id": "C_YANDEX",
      "source_entity": "Школа распознавания / ШАД",
      "target_entity": "Яндекс",
      "route_id": "R017",
      "company_endpoint": true,
      "relation_type": "SCHOOL_AND_TEACHING_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://shad.yandex.ru/teachers",
          "source_title": "Источник: shad.yandex.ru",
          "locator": "SHAD_TEACHERS: Внесли вклад в развитие ШАДа",
          "supporting_fragment_summary": "Воронцов включён в преподавательский/образовательный контекст; не подтверждает всю генеалогию.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Принадлежность ШАД Яндексу.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "SHAD_TEACHERS: Внесли вклад в развитие ШАДа"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: shad.yandex.ru"
      ],
      "source_url": [
        "https://shad.yandex.ru/teachers"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R019:S01": {
      "relation_id": "R019:S01",
      "relation_class": "MODERN",
      "source_entity_id": "X001",
      "target_entity_id": "T004",
      "source_entity": "Борис Вейсфейлер",
      "target_entity": "Weisfeiler–Leman / higher-order GNN",
      "route_id": "R019",
      "company_endpoint": false,
      "relation_type": "HIGHER_ORDER_WL_THEORY_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/abs/1810.02244",
          "source_title": "Источник: arxiv.org",
          "locator": "WL: Authors; Abstract",
          "supporting_fragment_summary": "Higher-order GNN / k-WL theoretical comparison. Исторические эпонимы не авторы этой современной статьи.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Эпоним WL в составном узле higher-order GNN.",
      "supported_relation_scope": "EPONYMIC_CONTEXT",
      "locator": [
        "WL: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: arxiv.org"
      ],
      "source_url": [
        "https://arxiv.org/abs/1810.02244"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R019:S02": {
      "relation_id": "R019:S02",
      "relation_class": "MODERN",
      "source_entity_id": "X002",
      "target_entity_id": "T004",
      "source_entity": "Андрей Леман",
      "target_entity": "Weisfeiler–Leman / higher-order GNN",
      "route_id": "R019",
      "company_endpoint": false,
      "relation_type": "HIGHER_ORDER_WL_THEORY_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/abs/1810.02244",
          "source_title": "Источник: arxiv.org",
          "locator": "WL: Authors; Abstract",
          "supporting_fragment_summary": "Higher-order GNN / k-WL theoretical comparison. Исторические эпонимы не авторы этой современной статьи.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Эпоним WL, не авторство современной GNN.",
      "supported_relation_scope": "EPONYMIC_CONTEXT",
      "locator": [
        "WL: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: arxiv.org"
      ],
      "source_url": [
        "https://arxiv.org/abs/1810.02244"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R019:S03": {
      "relation_id": "R019:S03",
      "relation_class": "MODERN",
      "source_entity_id": "T004",
      "target_entity_id": "T005",
      "source_entity": "Weisfeiler–Leman / higher-order GNN",
      "target_entity": "WalkGNN",
      "route_id": "R019",
      "company_endpoint": false,
      "relation_type": "HIGHER_ORDER_WL_THEORY_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/html/2412.11888v1",
          "source_title": "GNN Applied to Ego-nets for Friend Suggestions",
          "locator": "WALK: Authors; §§1–2, 4.2; refs29,40",
          "supporting_fragment_summary": "Замятин/VK; higher-order theoretical motivation; VK data/live A/B. Не устанавливает exact-WL deployment или авторство Core ML как команды.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Прямо поддержан именно THEORETICAL CONTEXT; не exact-WL implementation.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "WALK: Authors; §§1–2, 4.2; refs29,40"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "GNN Applied to Ego-nets for Friend Suggestions"
      ],
      "source_url": [
        "https://arxiv.org/html/2412.11888v1"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R019:S04": {
      "relation_id": "R019:S04",
      "relation_class": "MODERN",
      "source_entity_id": "T005",
      "target_entity_id": "C_VK",
      "source_entity": "WalkGNN",
      "target_entity": "VK",
      "route_id": "R019",
      "company_endpoint": true,
      "relation_type": "HIGHER_ORDER_WL_THEORY_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/html/2412.11888v1",
          "source_title": "GNN Applied to Ego-nets for Friend Suggestions",
          "locator": "WALK: Authors; §§1–2, 4.2; refs29,40",
          "supporting_fragment_summary": "Замятин/VK; higher-order theoretical motivation; VK data/live A/B. Не устанавливает exact-WL deployment или авторство Core ML как команды.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Данные/исследование/live experiment VK.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "WALK: Authors; §§1–2, 4.2; refs29,40"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "GNN Applied to Ego-nets for Friend Suggestions"
      ],
      "source_url": [
        "https://arxiv.org/html/2412.11888v1"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R020:S01": {
      "relation_id": "R020:S01",
      "relation_class": "MODERN",
      "source_entity_id": "X007",
      "target_entity_id": "T005",
      "source_entity": "Евгений Замятин",
      "target_entity": "WalkGNN",
      "route_id": "R020",
      "company_endpoint": false,
      "relation_type": "MODERN_RESEARCHER_TO_MODEL",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/html/2412.11888v1",
          "source_title": "GNN Applied to Ego-nets for Friend Suggestions",
          "locator": "WALK: Authors; §§1–2, 4.2; refs29,40",
          "supporting_fragment_summary": "Замятин/VK; higher-order theoretical motivation; VK data/live A/B. Не устанавливает exact-WL deployment или авторство Core ML как команды.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Автор WalkGNN указан.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "WALK: Authors; §§1–2, 4.2; refs29,40"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "GNN Applied to Ego-nets for Friend Suggestions"
      ],
      "source_url": [
        "https://arxiv.org/html/2412.11888v1"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R020:S02": {
      "relation_id": "R020:S02",
      "relation_class": "MODERN",
      "source_entity_id": "T005",
      "target_entity_id": "O003",
      "source_entity": "WalkGNN",
      "target_entity": "VK Core ML",
      "route_id": "R020",
      "company_endpoint": false,
      "relation_type": "TEAM_RESEARCH_CONTEXT",
      "evidence_status": "INHERITED",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/html/2412.11888v1",
          "source_title": "GNN Applied to Ego-nets for Friend Suggestions",
          "locator": "Authors/affiliations; Abstract; эксперимент Ego-VK / online A/B",
          "supporting_fragment_summary": "Работа устанавливает WalkGNN, авторство и VK, но не называет Core ML командой этой работы.",
          "retrieval_status": "RETRIEVED_TEXT"
        },
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/552162/",
          "source_title": "Графовые нейронные сети для рекомендации друзей ВКонтакте",
          "locator": "Вводное представление автора/команды; описание EGOML",
          "supporting_fragment_summary": "Автор связан с Core ML в материале 2021 о EGOML; это другой проект/период.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "WalkGNN связан с VK; автор ранее представлен в Core ML.",
      "supported_relation_scope": "AUTHOR_AFFILIATION_AT_DIFFERENT_DATE; не MODEL_TO_TEAM",
      "locator": [
        "Authors/affiliations; Abstract; эксперимент Ego-VK / online A/B",
        "Вводное представление автора/команды; описание EGOML"
      ],
      "temporal_scope": [
        "2024",
        "2021"
      ],
      "verification_status": "PASS04C_APPROVED",
      "retrieval_status": [
        "RETRIEVED_TEXT",
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "GNN Applied to Ego-nets for Friend Suggestions",
        "Графовые нейронные сети для рекомендации друзей ВКонтакте"
      ],
      "source_url": [
        "https://arxiv.org/html/2412.11888v1",
        "https://habr.com/ru/companies/vk/articles/552162/"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE",
      "public_wording": "Контекст VK; принадлежность WalkGNN к Core ML не подтверждена"
    },
    "R020:S03": {
      "relation_id": "R020:S03",
      "relation_class": "MODERN",
      "source_entity_id": "O003",
      "target_entity_id": "C_VK",
      "source_entity": "VK Core ML",
      "target_entity": "VK",
      "route_id": "R020",
      "company_endpoint": true,
      "relation_type": "TEAM_TO_COMPANY",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/552162/",
          "source_title": "Графовые нейронные сети для рекомендации друзей ВКонтакте",
          "locator": "CORE: Вступление; EGOML",
          "supporting_fragment_summary": "Замятин прямо представляет Core ML ВКонтакте в 2021 году. Алгоритм статьи — EGOML, не WalkGNN 2024.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Команда VK названа автором.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "CORE: Вступление; EGOML"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Графовые нейронные сети для рекомендации друзей ВКонтакте"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/552162/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R026:S01": {
      "relation_id": "R026:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P019",
      "target_entity_id": "R002",
      "source_entity": "Иван Валерьевич Оселедец",
      "target_entity": "Recommender / personalization research",
      "route_id": "R026",
      "company_endpoint": false,
      "relation_type": "COLLABORATION_RESEARCH_INSTITUTIONAL_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/abs/1603.06038",
          "source_title": "Источник: arxiv.org",
          "locator": "TENSOR: Authors; Abstract",
          "supporting_fragment_summary": "Оселедец и Фролов — соавторы работы о тензорных рекомендательных методах; не источник внедрения их алгоритма в компании.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Исследование рекомендаций и соавторство.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TENSOR: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: arxiv.org"
      ],
      "source_url": [
        "https://arxiv.org/abs/1603.06038"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R026:S02": {
      "relation_id": "R026:S02",
      "relation_class": "MODERN",
      "source_entity_id": "B024",
      "target_entity_id": "R002",
      "source_entity": "Евгений Петрович Фролов",
      "target_entity": "Recommender / personalization research",
      "route_id": "R026",
      "company_endpoint": false,
      "relation_type": "COLLABORATION_RESEARCH_INSTITUTIONAL_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/abs/1603.06038",
          "source_title": "Источник: arxiv.org",
          "locator": "TENSOR: Authors; Abstract",
          "supporting_fragment_summary": "Оселедец и Фролов — соавторы работы о тензорных рекомендательных методах; не источник внедрения их алгоритма в компании.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Исследование рекомендаций и соавторство.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TENSOR: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: arxiv.org"
      ],
      "source_url": [
        "https://arxiv.org/abs/1603.06038"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R026:S03": {
      "relation_id": "R026:S03",
      "relation_class": "MODERN",
      "source_entity_id": "R002",
      "target_entity_id": "C_AIRI",
      "source_entity": "Recommender / personalization research",
      "target_entity": "AIRI",
      "route_id": "R026",
      "company_endpoint": true,
      "relation_type": "COLLABORATION_RESEARCH_INSTITUTIONAL_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://airi.net/ru/airium/mentors/evgeniy-frolov/",
          "source_title": "Источник: airi.net",
          "locator": "AIRI: Биография",
          "supporting_fragment_summary": "Руководитель технологий персонализации AIRI, специализация recommender systems. Страница найдена через индексированный текст после ошибки open.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Направление AIRI подтверждено.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "AIRI: Биография"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: airi.net"
      ],
      "source_url": [
        "https://airi.net/ru/airium/mentors/evgeniy-frolov/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R101:S01": {
      "relation_id": "R101:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P003",
      "target_entity_id": "TT001",
      "source_entity": "Андрей Николаевич Колмогоров",
      "target_entity": "Суперкомпьютер «Колмогоров»",
      "route_id": "R101",
      "company_endpoint": false,
      "relation_type": "NAMESAKE_INSTITUTIONAL_RECOGNITION",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://t-technologies.ru/ar2025t-technologies/index.html",
          "source_title": "Источник: t-technologies.ru",
          "locator": "TNAMESAKE: История, 2019–2020",
          "supporting_fragment_summary": "Зафиксирован суперкомпьютер «Колмогоров»; эпонимическое прочтение не доказывает передачу технологий математика.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Имя компьютера подтверждено; эпонимический смысл требует явной атрибуции.",
      "supported_relation_scope": "EPONYMIC_CONTEXT",
      "locator": [
        "TNAMESAKE: История, 2019–2020"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: t-technologies.ru"
      ],
      "source_url": [
        "https://t-technologies.ru/ar2025t-technologies/index.html"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R101:S02": {
      "relation_id": "R101:S02",
      "relation_class": "MODERN",
      "source_entity_id": "TT001",
      "target_entity_id": "RT001",
      "source_entity": "Суперкомпьютер «Колмогоров»",
      "target_entity": "Technology History / Infrastructure",
      "route_id": "R101",
      "company_endpoint": false,
      "relation_type": "NAMESAKE_INSTITUTIONAL_RECOGNITION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://t-technologies.ru/ar2025t-technologies/index.html",
          "source_title": "Источник: t-technologies.ru",
          "locator": "TNAMESAKE: История, 2019–2020",
          "supporting_fragment_summary": "Зафиксирован суперкомпьютер «Колмогоров»; эпонимическое прочтение не доказывает передачу технологий математика.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Компьютер включён в историю технологий.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TNAMESAKE: История, 2019–2020"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: t-technologies.ru"
      ],
      "source_url": [
        "https://t-technologies.ru/ar2025t-technologies/index.html"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R101:S03": {
      "relation_id": "R101:S03",
      "relation_class": "MODERN",
      "source_entity_id": "RT001",
      "target_entity_id": "C_TBANK",
      "source_entity": "Technology History / Infrastructure",
      "target_entity": "Т‑Технологии",
      "route_id": "R101",
      "company_endpoint": true,
      "relation_type": "NAMESAKE_INSTITUTIONAL_RECOGNITION",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://t-technologies.ru/ar2025t-technologies/index.html",
          "source_title": "Источник: t-technologies.ru",
          "locator": "TNAMESAKE: История, 2019–2020",
          "supporting_fragment_summary": "Зафиксирован суперкомпьютер «Колмогоров»; эпонимическое прочтение не доказывает передачу технологий математика.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "История компании.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TNAMESAKE: История, 2019–2020"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: t-technologies.ru"
      ],
      "source_url": [
        "https://t-technologies.ru/ar2025t-technologies/index.html"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R102:S01": {
      "relation_id": "R102:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P020",
      "target_entity_id": "TT002",
      "source_entity": "Александр Игоревич Панов",
      "target_entity": "Reinforcement Learning",
      "route_id": "R102",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://rairi.frccsc.ru/employees/7",
          "source_title": "Источник: rairi.frccsc.ru",
          "locator": "PANOV: Образование; Научная работа; Проекты",
          "supporting_fragment_summary": "Осипов назван научным руководителем Панова; перечислены совместные проекты. Указаны RL/robotics-направления самого Панова.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Личные исследования RL подтверждены, не transfer.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "PANOV: Образование; Научная работа; Проекты"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: rairi.frccsc.ru"
      ],
      "source_url": [
        "https://rairi.frccsc.ru/employees/7"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R102:S02": {
      "relation_id": "R102:S02",
      "relation_class": "MODERN",
      "source_entity_id": "TT002",
      "target_entity_id": "RT002",
      "source_entity": "Reinforcement Learning",
      "target_entity": "T‑Lab / AI Research — RL & World Models",
      "route_id": "R102",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://education.tbank.ru/academy/t-lab/ai/",
          "source_title": "Источник: education.tbank.ru",
          "locator": "TLAB: Открытые проекты",
          "supporting_fragment_summary": "Cross-Embodied RL; World, Action & Reward Models. Прямая область исследований T-Lab, не участие исторических персон.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "RL проекта лаборатории.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TLAB: Открытые проекты"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: education.tbank.ru"
      ],
      "source_url": [
        "https://education.tbank.ru/academy/t-lab/ai/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R102:S03": {
      "relation_id": "R102:S03",
      "relation_class": "MODERN",
      "source_entity_id": "RT002",
      "target_entity_id": "C_TBANK",
      "source_entity": "T‑Lab / AI Research — RL & World Models",
      "target_entity": "Т‑Технологии",
      "route_id": "R102",
      "company_endpoint": true,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://ai.tbank.ru/research/",
          "source_title": "Источник: ai.tbank.ru",
          "locator": "TBANK: Области исследований; T-Lab",
          "supporting_fragment_summary": "Явно перечислены NLP, multimodal, OOD/generalization, RL; показан T-Lab. Не источник исторических родословных.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Институциональная принадлежность подтверждена.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TBANK: Области исследований; T-Lab"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: ai.tbank.ru"
      ],
      "source_url": [
        "https://ai.tbank.ru/research/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R103:S01": {
      "relation_id": "R103:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P022",
      "target_entity_id": "TT003",
      "source_entity": "Алексей Константинович Ковалёв",
      "target_entity": "Embodied AI / World Models",
      "route_id": "R103",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.hse.ru/sci/diss/682448753",
          "source_title": "Источник: www.hse.ru",
          "locator": "KOVALEV: Соискатель / Руководитель",
          "supporting_fragment_summary": "Ковалёв, защита 2022; руководитель Александр И. Панов.",
          "retrieval_status": "PASS04_RETAINED"
        },
        {
          "source_url": "https://arxiv.org/html/2507.05135v1",
          "source_title": "Источник: arxiv.org",
          "locator": "LERA: Authors/affiliations; Abstract",
          "supporting_fragment_summary": "Ковалёв и Александр И. Панов — авторы робототехнического replanning; AIRI указано в аффилиациях. Не источник передачи метода в другой банк.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Robotics/world-model field; не передача метода.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "KOVALEV: Соискатель / Руководитель",
        "LERA: Authors/affiliations; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.hse.ru",
        "Источник: arxiv.org"
      ],
      "source_url": [
        "https://www.hse.ru/sci/diss/682448753",
        "https://arxiv.org/html/2507.05135v1"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R103:S02": {
      "relation_id": "R103:S02",
      "relation_class": "MODERN",
      "source_entity_id": "TT003",
      "target_entity_id": "RT002",
      "source_entity": "Embodied AI / World Models",
      "target_entity": "T‑Lab / AI Research — RL & World Models",
      "route_id": "R103",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://education.tbank.ru/academy/t-lab/ai/",
          "source_title": "Источник: education.tbank.ru",
          "locator": "TLAB: Открытые проекты",
          "supporting_fragment_summary": "Cross-Embodied RL; World, Action & Reward Models. Прямая область исследований T-Lab, не участие исторических персон.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Embodied/world-model проекты.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TLAB: Открытые проекты"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: education.tbank.ru"
      ],
      "source_url": [
        "https://education.tbank.ru/academy/t-lab/ai/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R103:S03": {
      "relation_id": "R103:S03",
      "relation_class": "MODERN",
      "source_entity_id": "RT002",
      "target_entity_id": "C_TBANK",
      "source_entity": "T‑Lab / AI Research — RL & World Models",
      "target_entity": "Т‑Технологии",
      "route_id": "R103",
      "company_endpoint": true,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://ai.tbank.ru/research/",
          "source_title": "Источник: ai.tbank.ru",
          "locator": "TBANK: Области исследований; T-Lab",
          "supporting_fragment_summary": "Явно перечислены NLP, multimodal, OOD/generalization, RL; показан T-Lab. Не источник исторических родословных.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Институциональная принадлежность подтверждена.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TBANK: Области исследований; T-Lab"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: ai.tbank.ru"
      ],
      "source_url": [
        "https://ai.tbank.ru/research/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R104:S01": {
      "relation_id": "R104:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P006",
      "target_entity_id": "TT004",
      "source_entity": "Андрей Петрович Ершов",
      "target_entity": "AI for Software Engineering",
      "route_id": "R104",
      "company_endpoint": false,
      "relation_type": "HISTORICAL_FIELD_TO_AI4SWE_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.computer-museum.ru/books/n_ershov/4_ershov_programm.htm",
          "source_title": "Ершов: интервью / воспоминания о программировании",
          "locator": "Абзацы о четвёртом курсе и учителе; web L307–311,327–330",
          "supporting_fragment_summary": "Ершов прямо называет Ляпунова своим учителем, описывает курс и последующую самостоятельную работу над транслятором.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Работы Ершова по программированию/трансляторам — документированный исторический контекст.",
      "supported_relation_scope": "HISTORICAL_PROGRAMMING_FIELD; не участие в современных AI4SWE продуктах",
      "locator": [
        "Абзацы о четвёртом курсе и учителе; web L307–311,327–330"
      ],
      "temporal_scope": [
        "1950-е; воспоминания позднее"
      ],
      "verification_status": "CONTEXT_ONLY_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Ершов: интервью / воспоминания о программировании"
      ],
      "source_url": [
        "https://www.computer-museum.ru/books/n_ershov/4_ershov_programm.htm"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "R104:S02": {
      "relation_id": "R104:S02",
      "relation_class": "MODERN",
      "source_entity_id": "TT004",
      "target_entity_id": "RT003",
      "source_entity": "AI for Software Engineering",
      "target_entity": "T‑Bank R&D — Engineering Productivity",
      "route_id": "R104",
      "company_endpoint": false,
      "relation_type": "HISTORICAL_FIELD_TO_AI4SWE_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.tbank.ru/career/technologies/ai-assistant/",
          "source_title": "Источник: www.tbank.ru",
          "locator": "TASSIST: Как появился AI-ассистент",
          "supporting_fragment_summary": "Собственный продукт Т-Банка, релиз конца 2023 года. Не подтверждает наследование Ершова или точное R&D-подразделение.",
          "retrieval_status": "PASS04_RETAINED"
        },
        {
          "source_url": "https://rnd.tbank.ru/",
          "source_title": "Источник: rnd.tbank.ru",
          "locator": "TRND: Название/описание центра",
          "supporting_fragment_summary": "Центр исследований и разработок Т-Банка; bridge к конкретной команде требует отдельного локатора.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Продукт Т-Банка доказан; точная команда R&D/Engineering Productivity не связана локатором.",
      "supported_relation_scope": "PRODUCT_ECOSYSTEM_OR_TEAM_CONTEXT",
      "locator": [
        "TASSIST: Как появился AI-ассистент",
        "TRND: Название/описание центра"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.tbank.ru",
        "Источник: rnd.tbank.ru"
      ],
      "source_url": [
        "https://www.tbank.ru/career/technologies/ai-assistant/",
        "https://rnd.tbank.ru/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R104:S03": {
      "relation_id": "R104:S03",
      "relation_class": "MODERN",
      "source_entity_id": "RT003",
      "target_entity_id": "C_TBANK",
      "source_entity": "T‑Bank R&D — Engineering Productivity",
      "target_entity": "Т‑Технологии",
      "route_id": "R104",
      "company_endpoint": true,
      "relation_type": "HISTORICAL_FIELD_TO_AI4SWE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://rnd.tbank.ru/",
          "source_title": "Источник: rnd.tbank.ru",
          "locator": "TRND: Название/описание центра",
          "supporting_fragment_summary": "Центр исследований и разработок Т-Банка; bridge к конкретной команде требует отдельного локатора.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "R&D принадлежит Т-Банку.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TRND: Название/описание центра"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: rnd.tbank.ru"
      ],
      "source_url": [
        "https://rnd.tbank.ru/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R105:S02": {
      "relation_id": "R105:S02",
      "relation_class": "MODERN",
      "source_entity_id": "P023",
      "target_entity_id": "TT005",
      "source_entity": "Валентин Андреевич Малых",
      "target_entity": "NLP / LLM",
      "route_id": "R105",
      "company_endpoint": false,
      "relation_type": "HUMAN_LINEAGE_TO_FIELD_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.ispras.ru/dcouncil/docs/diss/2019/malyh/dissertacija-malyh.pdf",
          "source_title": "Источник: www.ispras.ru",
          "locator": "MALYKH: Титульный лист, PDF p.1",
          "supporting_fragment_summary": "Валентин Малых; тема обработки текстов; научный руководитель Владимир Львович Арлазаров. Текст PDF доступен; screenshot API вернул cache miss.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "NLP Малых подтверждено; NLP/LLM составной узел шире диссертации.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "MALYKH: Титульный лист, PDF p.1"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.ispras.ru"
      ],
      "source_url": [
        "https://www.ispras.ru/dcouncil/docs/diss/2019/malyh/dissertacija-malyh.pdf"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R105:S03": {
      "relation_id": "R105:S03",
      "relation_class": "MODERN",
      "source_entity_id": "TT005",
      "target_entity_id": "RT004",
      "source_entity": "NLP / LLM",
      "target_entity": "T‑Bank AI Research",
      "route_id": "R105",
      "company_endpoint": false,
      "relation_type": "HUMAN_LINEAGE_TO_FIELD_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://ai.tbank.ru/research/",
          "source_title": "Источник: ai.tbank.ru",
          "locator": "TBANK: Области исследований; T-Lab",
          "supporting_fragment_summary": "Явно перечислены NLP, multimodal, OOD/generalization, RL; показан T-Lab. Не источник исторических родословных.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "NLP/LLM-направление.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TBANK: Области исследований; T-Lab"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: ai.tbank.ru"
      ],
      "source_url": [
        "https://ai.tbank.ru/research/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R105:S04": {
      "relation_id": "R105:S04",
      "relation_class": "MODERN",
      "source_entity_id": "RT004",
      "target_entity_id": "C_TBANK",
      "source_entity": "T‑Bank AI Research",
      "target_entity": "Т‑Технологии",
      "route_id": "R105",
      "company_endpoint": true,
      "relation_type": "HUMAN_LINEAGE_TO_FIELD_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://ai.tbank.ru/research/",
          "source_title": "Источник: ai.tbank.ru",
          "locator": "TBANK: Области исследований; T-Lab",
          "supporting_fragment_summary": "Явно перечислены NLP, multimodal, OOD/generalization, RL; показан T-Lab. Не источник исторических родословных.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Институциональная принадлежность подтверждена.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TBANK: Области исследований; T-Lab"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: ai.tbank.ru"
      ],
      "source_url": [
        "https://ai.tbank.ru/research/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R106:S01": {
      "relation_id": "R106:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P021",
      "target_entity_id": "TT006",
      "source_entity": "Егор Иванович Ершов",
      "target_entity": "Computer Vision / Multimodal AI",
      "route_id": "R106",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://airi.net/ru/airium/mentors/egor-ershov/",
          "source_title": "Источник: airi.net",
          "locator": "EGOR: Биография",
          "supporting_fragment_summary": "Компьютерное зрение/вычислительная фотография подтверждены индексированным текстом AIRI. Не доказательство происхождения корпоративной мультимодальной модели.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "CV/вычислительная фотография подтверждены; расширение к корпоративному multimodal — контекст.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "EGOR: Биография"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: airi.net"
      ],
      "source_url": [
        "https://airi.net/ru/airium/mentors/egor-ershov/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R106:S02": {
      "relation_id": "R106:S02",
      "relation_class": "MODERN",
      "source_entity_id": "TT006",
      "target_entity_id": "RT004",
      "source_entity": "Computer Vision / Multimodal AI",
      "target_entity": "T‑Bank AI Research",
      "route_id": "R106",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://ai.tbank.ru/research/",
          "source_title": "Источник: ai.tbank.ru",
          "locator": "TBANK: Области исследований; T-Lab",
          "supporting_fragment_summary": "Явно перечислены NLP, multimodal, OOD/generalization, RL; показан T-Lab. Не источник исторических родословных.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Multimodal/CV-направление.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TBANK: Области исследований; T-Lab"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: ai.tbank.ru"
      ],
      "source_url": [
        "https://ai.tbank.ru/research/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R106:S03": {
      "relation_id": "R106:S03",
      "relation_class": "MODERN",
      "source_entity_id": "RT004",
      "target_entity_id": "C_TBANK",
      "source_entity": "T‑Bank AI Research",
      "target_entity": "Т‑Технологии",
      "route_id": "R106",
      "company_endpoint": true,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://ai.tbank.ru/research/",
          "source_title": "Источник: ai.tbank.ru",
          "locator": "TBANK: Области исследований; T-Lab",
          "supporting_fragment_summary": "Явно перечислены NLP, multimodal, OOD/generalization, RL; показан T-Lab. Не источник исторических родословных.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Институциональная принадлежность подтверждена.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TBANK: Области исследований; T-Lab"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: ai.tbank.ru"
      ],
      "source_url": [
        "https://ai.tbank.ru/research/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R107:S01": {
      "relation_id": "R107:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P015",
      "target_entity_id": "TT007",
      "source_entity": "Юрий Иванович Журавлёв",
      "target_entity": "Recognition / OOD / Generalization",
      "route_id": "R107",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://cs.msu.ru/persons/6",
          "source_title": "Источник: cs.msu.ru",
          "locator": "ZHURAVLEV: Биография, диссертация; научные интересы",
          "supporting_fragment_summary": "Ляпунов назван руководителем; кафедра Мальцева — институциональный контекст. Распознавание образов — область Журавлёва.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Распознавание доказано; OOD/generalization — сопоставление поля.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "ZHURAVLEV: Биография, диссертация; научные интересы"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: cs.msu.ru"
      ],
      "source_url": [
        "https://cs.msu.ru/persons/6"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R107:S02": {
      "relation_id": "R107:S02",
      "relation_class": "MODERN",
      "source_entity_id": "TT007",
      "target_entity_id": "RT004",
      "source_entity": "Recognition / OOD / Generalization",
      "target_entity": "T‑Bank AI Research",
      "route_id": "R107",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://ai.tbank.ru/research/",
          "source_title": "Источник: ai.tbank.ru",
          "locator": "TBANK: Области исследований; T-Lab",
          "supporting_fragment_summary": "Явно перечислены NLP, multimodal, OOD/generalization, RL; показан T-Lab. Не источник исторических родословных.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "OOD/generalization-направление.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TBANK: Области исследований; T-Lab"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: ai.tbank.ru"
      ],
      "source_url": [
        "https://ai.tbank.ru/research/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R107:S03": {
      "relation_id": "R107:S03",
      "relation_class": "MODERN",
      "source_entity_id": "RT004",
      "target_entity_id": "C_TBANK",
      "source_entity": "T‑Bank AI Research",
      "target_entity": "Т‑Технологии",
      "route_id": "R107",
      "company_endpoint": true,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://ai.tbank.ru/research/",
          "source_title": "Источник: ai.tbank.ru",
          "locator": "TBANK: Области исследований; T-Lab",
          "supporting_fragment_summary": "Явно перечислены NLP, multimodal, OOD/generalization, RL; показан T-Lab. Не источник исторических родословных.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Институциональная принадлежность подтверждена.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TBANK: Области исследований; T-Lab"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: ai.tbank.ru"
      ],
      "source_url": [
        "https://ai.tbank.ru/research/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R108:S01": {
      "relation_id": "R108:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P013",
      "target_entity_id": "TT008",
      "source_entity": "Алексей Яковлевич Червоненкис",
      "target_entity": "Statistical Learning / Generalization",
      "route_id": "R108",
      "company_endpoint": false,
      "relation_type": "FIELD_FOUNDATION_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.ipu.ru/node/11937",
          "source_title": "Источник: www.ipu.ru",
          "locator": "VC: История совместных исследований; публикации",
          "supporting_fragment_summary": "Прямо описаны совместные исследования Вапника и Червоненкиса и статистическое обучение.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Statistical-learning foundation, не компания.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "VC: История совместных исследований; публикации"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.ipu.ru"
      ],
      "source_url": [
        "https://www.ipu.ru/node/11937"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R108:S02": {
      "relation_id": "R108:S02",
      "relation_class": "MODERN",
      "source_entity_id": "P014",
      "target_entity_id": "TT008",
      "source_entity": "Владимир Наумович Вапник",
      "target_entity": "Statistical Learning / Generalization",
      "route_id": "R108",
      "company_endpoint": false,
      "relation_type": "FIELD_FOUNDATION_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.ipu.ru/node/11937",
          "source_title": "Источник: www.ipu.ru",
          "locator": "VC: История совместных исследований; публикации",
          "supporting_fragment_summary": "Прямо описаны совместные исследования Вапника и Червоненкиса и статистическое обучение.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Statistical-learning foundation, не компания.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "VC: История совместных исследований; публикации"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.ipu.ru"
      ],
      "source_url": [
        "https://www.ipu.ru/node/11937"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R108:S03": {
      "relation_id": "R108:S03",
      "relation_class": "MODERN",
      "source_entity_id": "TT008",
      "target_entity_id": "RT004",
      "source_entity": "Statistical Learning / Generalization",
      "target_entity": "T‑Bank AI Research",
      "route_id": "R108",
      "company_endpoint": false,
      "relation_type": "FIELD_FOUNDATION_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://ai.tbank.ru/research/",
          "source_title": "Источник: ai.tbank.ru",
          "locator": "TBANK: Области исследований; T-Lab",
          "supporting_fragment_summary": "Явно перечислены NLP, multimodal, OOD/generalization, RL; показан T-Lab. Не источник исторических родословных.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Generalization-направление.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TBANK: Области исследований; T-Lab"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: ai.tbank.ru"
      ],
      "source_url": [
        "https://ai.tbank.ru/research/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R108:S04": {
      "relation_id": "R108:S04",
      "relation_class": "MODERN",
      "source_entity_id": "RT004",
      "target_entity_id": "C_TBANK",
      "source_entity": "T‑Bank AI Research",
      "target_entity": "Т‑Технологии",
      "route_id": "R108",
      "company_endpoint": true,
      "relation_type": "FIELD_FOUNDATION_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://ai.tbank.ru/research/",
          "source_title": "Источник: ai.tbank.ru",
          "locator": "TBANK: Области исследований; T-Lab",
          "supporting_fragment_summary": "Явно перечислены NLP, multimodal, OOD/generalization, RL; показан T-Lab. Не источник исторических родословных.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Институциональная принадлежность подтверждена.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TBANK: Области исследований; T-Lab"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: ai.tbank.ru"
      ],
      "source_url": [
        "https://ai.tbank.ru/research/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R109:S01": {
      "relation_id": "R109:S01",
      "relation_class": "MODERN",
      "source_entity_id": "B056",
      "target_entity_id": "TT009",
      "source_entity": "Ольга Сергеевна Кулагина",
      "target_entity": "Mathematical Linguistics → NLP",
      "route_id": "R109",
      "company_endpoint": false,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.mathnet.ru/rus/ivm2979",
          "source_title": "Источник: www.mathnet.ru",
          "locator": "KULAGINA: Библиографическая запись",
          "supporting_fragment_summary": "Статья О. С. Кулагиной о машинном переводе с французского, 1958. Не о Discovery AI. Запись доступна в поисковом индексе.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Машинный перевод — историческое поле, не современные LLM.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "KULAGINA: Библиографическая запись"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.mathnet.ru"
      ],
      "source_url": [
        "https://www.mathnet.ru/rus/ivm2979"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R109:S02": {
      "relation_id": "R109:S02",
      "relation_class": "MODERN",
      "source_entity_id": "B059",
      "target_entity_id": "TT009",
      "source_entity": "Александр Семёнович Нариньяни",
      "target_entity": "Mathematical Linguistics → NLP",
      "route_id": "R109",
      "company_endpoint": false,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://search.rsl.ru/ru/record/01009650258",
          "source_title": "РГБ: Моделирование языковой деятельности в интеллектуальных системах",
          "locator": "Каталожная запись 01009650258, MARC 245$c и 260$c / Сведения об ответственности",
          "supporting_fragment_summary": "Нариньяни — редактор книги о моделировании языковой деятельности, 1987.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Нариньяни документированно участвовал в историческом поле языкового моделирования.",
      "supported_relation_scope": "HISTORICAL_NLP_FIELD_CONTEXT; не персональная связь с нынешними T-bank/Sber/Discovery AI",
      "locator": [
        "Каталожная запись 01009650258, MARC 245$c и 260$c / Сведения об ответственности"
      ],
      "temporal_scope": [
        "1987"
      ],
      "verification_status": "CONTEXT_ONLY_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "РГБ: Моделирование языковой деятельности в интеллектуальных системах"
      ],
      "source_url": [
        "https://search.rsl.ru/ru/record/01009650258"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "R109:S03": {
      "relation_id": "R109:S03",
      "relation_class": "MODERN",
      "source_entity_id": "TT009",
      "target_entity_id": "RT004",
      "source_entity": "Mathematical Linguistics → NLP",
      "target_entity": "T‑Bank AI Research",
      "route_id": "R109",
      "company_endpoint": false,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://ai.tbank.ru/research/",
          "source_title": "Источник: ai.tbank.ru",
          "locator": "TBANK: Области исследований; T-Lab",
          "supporting_fragment_summary": "Явно перечислены NLP, multimodal, OOD/generalization, RL; показан T-Lab. Не источник исторических родословных.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "NLP/LLM-направление.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TBANK: Области исследований; T-Lab"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: ai.tbank.ru"
      ],
      "source_url": [
        "https://ai.tbank.ru/research/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R109:S04": {
      "relation_id": "R109:S04",
      "relation_class": "MODERN",
      "source_entity_id": "RT004",
      "target_entity_id": "C_TBANK",
      "source_entity": "T‑Bank AI Research",
      "target_entity": "Т‑Технологии",
      "route_id": "R109",
      "company_endpoint": true,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://ai.tbank.ru/research/",
          "source_title": "Источник: ai.tbank.ru",
          "locator": "TBANK: Области исследований; T-Lab",
          "supporting_fragment_summary": "Явно перечислены NLP, multimodal, OOD/generalization, RL; показан T-Lab. Не источник исторических родословных.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Институциональная принадлежность подтверждена.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "TBANK: Области исследований; T-Lab"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: ai.tbank.ru"
      ],
      "source_url": [
        "https://ai.tbank.ru/research/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R110:S01": {
      "relation_id": "R110:S01",
      "relation_class": "MODERN",
      "source_entity_id": "X001",
      "target_entity_id": "SB001",
      "source_entity": "Борис Вейсфейлер",
      "target_entity": "Weisfeiler–Lehman / Graph ML",
      "route_id": "R110",
      "company_endpoint": false,
      "relation_type": "NAMED_METHOD_DIRECT_RESEARCH",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.researchgate.net/publication/338789303_Linking_Bank_Clients_using_Graph_Neural_Networks_Powered_by_Rich_Transactional_Data",
          "source_title": "Источник: www.researchgate.net",
          "locator": "SBER_WL: Author affiliations; §5.4, Table2; ref1968",
          "supporting_fragment_summary": "Sberbank Risk Modeling and Research; WL-SEAL исследован явно. Это исследовательский эксперимент, не доказательство production deployment.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Историческое авторство WL, не современной банковской GNN.",
      "supported_relation_scope": "EPONYMIC_CONTEXT",
      "locator": [
        "SBER_WL: Author affiliations; §5.4, Table2; ref1968"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.researchgate.net"
      ],
      "source_url": [
        "https://www.researchgate.net/publication/338789303_Linking_Bank_Clients_using_Graph_Neural_Networks_Powered_by_Rich_Transactional_Data"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R110:S02": {
      "relation_id": "R110:S02",
      "relation_class": "MODERN",
      "source_entity_id": "X002",
      "target_entity_id": "SB001",
      "source_entity": "Андрей Леман",
      "target_entity": "Weisfeiler–Lehman / Graph ML",
      "route_id": "R110",
      "company_endpoint": false,
      "relation_type": "NAMED_METHOD_DIRECT_RESEARCH",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.researchgate.net/publication/338789303_Linking_Bank_Clients_using_Graph_Neural_Networks_Powered_by_Rich_Transactional_Data",
          "source_title": "Источник: www.researchgate.net",
          "locator": "SBER_WL: Author affiliations; §5.4, Table2; ref1968",
          "supporting_fragment_summary": "Sberbank Risk Modeling and Research; WL-SEAL исследован явно. Это исследовательский эксперимент, не доказательство production deployment.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Историческое авторство WL, не современной банковской GNN.",
      "supported_relation_scope": "EPONYMIC_CONTEXT",
      "locator": [
        "SBER_WL: Author affiliations; §5.4, Table2; ref1968"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.researchgate.net"
      ],
      "source_url": [
        "https://www.researchgate.net/publication/338789303_Linking_Bank_Clients_using_Graph_Neural_Networks_Powered_by_Rich_Transactional_Data"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R110:S03": {
      "relation_id": "R110:S03",
      "relation_class": "MODERN",
      "source_entity_id": "SB001",
      "target_entity_id": "RS001",
      "source_entity": "Weisfeiler–Lehman / Graph ML",
      "target_entity": "Sberbank Risk Modeling & Research",
      "route_id": "R110",
      "company_endpoint": false,
      "relation_type": "NAMED_METHOD_DIRECT_RESEARCH",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.researchgate.net/publication/338789303_Linking_Bank_Clients_using_Graph_Neural_Networks_Powered_by_Rich_Transactional_Data",
          "source_title": "Источник: www.researchgate.net",
          "locator": "SBER_WL: Author affiliations; §5.4, Table2; ref1968",
          "supporting_fragment_summary": "Sberbank Risk Modeling and Research; WL-SEAL исследован явно. Это исследовательский эксперимент, не доказательство production deployment.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Эксперимент WL-SEAL описан.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "SBER_WL: Author affiliations; §5.4, Table2; ref1968"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.researchgate.net"
      ],
      "source_url": [
        "https://www.researchgate.net/publication/338789303_Linking_Bank_Clients_using_Graph_Neural_Networks_Powered_by_Rich_Transactional_Data"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R110:S04": {
      "relation_id": "R110:S04",
      "relation_class": "MODERN",
      "source_entity_id": "RS001",
      "target_entity_id": "C_SBER",
      "source_entity": "Sberbank Risk Modeling & Research",
      "target_entity": "Сбер",
      "route_id": "R110",
      "company_endpoint": true,
      "relation_type": "NAMED_METHOD_DIRECT_RESEARCH",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://www.researchgate.net/publication/338789303_Linking_Bank_Clients_using_Graph_Neural_Networks_Powered_by_Rich_Transactional_Data",
          "source_title": "Источник: www.researchgate.net",
          "locator": "SBER_WL: Author affiliations; §5.4, Table2; ref1968",
          "supporting_fragment_summary": "Sberbank Risk Modeling and Research; WL-SEAL исследован явно. Это исследовательский эксперимент, не доказательство production deployment.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Аффилиация, не production deployment.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "SBER_WL: Author affiliations; §5.4, Table2; ref1968"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.researchgate.net"
      ],
      "source_url": [
        "https://www.researchgate.net/publication/338789303_Linking_Bank_Clients_using_Graph_Neural_Networks_Powered_by_Rich_Transactional_Data"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R111:S01": {
      "relation_id": "R111:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P006",
      "target_entity_id": "SB002",
      "source_entity": "Андрей Петрович Ершов",
      "target_entity": "AI for Software Engineering",
      "route_id": "R111",
      "company_endpoint": false,
      "relation_type": "HISTORICAL_PROGRAMMING_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.computer-museum.ru/books/n_ershov/4_ershov_programm.htm",
          "source_title": "Ершов: интервью / воспоминания о программировании",
          "locator": "Абзацы о четвёртом курсе и учителе; web L307–311,327–330",
          "supporting_fragment_summary": "Ершов прямо называет Ляпунова своим учителем, описывает курс и последующую самостоятельную работу над транслятором.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Работы Ершова по программированию/трансляторам — документированный исторический контекст.",
      "supported_relation_scope": "HISTORICAL_PROGRAMMING_FIELD; не участие в современных AI4SWE продуктах",
      "locator": [
        "Абзацы о четвёртом курсе и учителе; web L307–311,327–330"
      ],
      "temporal_scope": [
        "1950-е; воспоминания позднее"
      ],
      "verification_status": "CONTEXT_ONLY_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Ершов: интервью / воспоминания о программировании"
      ],
      "source_url": [
        "https://www.computer-museum.ru/books/n_ershov/4_ershov_programm.htm"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "R111:S02": {
      "relation_id": "R111:S02",
      "relation_class": "MODERN",
      "source_entity_id": "B052",
      "target_entity_id": "SB002",
      "source_entity": "Екатерина Логвиновна Ющенко",
      "target_entity": "AI for Software Engineering",
      "route_id": "R111",
      "company_endpoint": false,
      "relation_type": "HISTORICAL_PROGRAMMING_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://yushchenko.infoua.net/publikaciyi.html",
          "source_title": "Катерина Ющенко: Публікації / семейный архив",
          "locator": "Монографии №3 (1962); статьи №4 (1960, с.13–31); монография №6 (1964)",
          "supporting_fragment_summary": "Библиография фиксирует совместное авторство Глушкова и Ющенко; статья 1960 также включает Дашевского и Шкабару.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Ющенко документированно работала над языками и автоматизацией программирования.",
      "supported_relation_scope": "HISTORICAL_PROGRAMMING_CONTEXT; не авторство AI4SWE",
      "locator": [
        "Монографии №3 (1962); статьи №4 (1960, с.13–31); монография №6 (1964)"
      ],
      "temporal_scope": [
        "1960–1964"
      ],
      "verification_status": "CONTEXT_ONLY_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Катерина Ющенко: Публікації / семейный архив"
      ],
      "source_url": [
        "https://yushchenko.infoua.net/publikaciyi.html"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "R111:S03": {
      "relation_id": "R111:S03",
      "relation_class": "MODERN",
      "source_entity_id": "SB002",
      "target_entity_id": "RS002",
      "source_entity": "AI for Software Engineering",
      "target_entity": "GigaCode / NLP Core R&D",
      "route_id": "R111",
      "company_endpoint": false,
      "relation_type": "HISTORICAL_PROGRAMMING_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/kak-v-sbere/vacancies/nlp-research-sd",
          "source_title": "Источник: developers.sber.ru",
          "locator": "GIGACODE: Заголовок вакансии; Team lead",
          "supporting_fragment_summary": "GigaCode назван AI-ассистентом разработчика, указана GigaCode RnD. История языков Ершова/Ющенко не доказывается этой вакансией.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "AI-ассистент GigaCode назван.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "GIGACODE: Заголовок вакансии; Team lead"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/kak-v-sbere/vacancies/nlp-research-sd"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R111:S04": {
      "relation_id": "R111:S04",
      "relation_class": "MODERN",
      "source_entity_id": "RS002",
      "target_entity_id": "C_SBER",
      "source_entity": "GigaCode / NLP Core R&D",
      "target_entity": "Сбер",
      "route_id": "R111",
      "company_endpoint": true,
      "relation_type": "HISTORICAL_PROGRAMMING_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/kak-v-sbere/vacancies/nlp-research-sd",
          "source_title": "Источник: developers.sber.ru",
          "locator": "GIGACODE: Заголовок вакансии; Team lead",
          "supporting_fragment_summary": "GigaCode назван AI-ассистентом разработчика, указана GigaCode RnD. История языков Ершова/Ющенко не доказывается этой вакансией.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Команда Сбера названа.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "GIGACODE: Заголовок вакансии; Team lead"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/kak-v-sbere/vacancies/nlp-research-sd"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R112:S02": {
      "relation_id": "R112:S02",
      "relation_class": "MODERN",
      "source_entity_id": "P023",
      "target_entity_id": "SB003",
      "source_entity": "Валентин Андреевич Малых",
      "target_entity": "NLP / LLM",
      "route_id": "R112",
      "company_endpoint": false,
      "relation_type": "HUMAN_LINEAGE_TO_FIELD_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.ispras.ru/dcouncil/docs/diss/2019/malyh/dissertacija-malyh.pdf",
          "source_title": "Источник: www.ispras.ru",
          "locator": "MALYKH: Титульный лист, PDF p.1",
          "supporting_fragment_summary": "Валентин Малых; тема обработки текстов; научный руководитель Владимир Львович Арлазаров. Текст PDF доступен; screenshot API вернул cache miss.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Историческое NLP-поле, не происхождение GigaChat.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "MALYKH: Титульный лист, PDF p.1"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.ispras.ru"
      ],
      "source_url": [
        "https://www.ispras.ru/dcouncil/docs/diss/2019/malyh/dissertacija-malyh.pdf"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R112:S03": {
      "relation_id": "R112:S03",
      "relation_class": "MODERN",
      "source_entity_id": "SB003",
      "target_entity_id": "RS003",
      "source_entity": "NLP / LLM",
      "target_entity": "GigaChat",
      "route_id": "R112",
      "company_endpoint": false,
      "relation_type": "HUMAN_LINEAGE_TO_FIELD_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/docs/ru/gigachat/guides/main",
          "source_title": "Источник: developers.sber.ru",
          "locator": "GIGACHAT: Документация GigaChat",
          "supporting_fragment_summary": "Документация продукта; не биографии исторических лиц и не научное руководство.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Модель / документированный продукт.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "GIGACHAT: Документация GigaChat"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/docs/ru/gigachat/guides/main"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R112:S04": {
      "relation_id": "R112:S04",
      "relation_class": "MODERN",
      "source_entity_id": "RS003",
      "target_entity_id": "C_SBER",
      "source_entity": "GigaChat",
      "target_entity": "Сбер",
      "route_id": "R112",
      "company_endpoint": true,
      "relation_type": "HUMAN_LINEAGE_TO_FIELD_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/docs/ru/gigachat/guides/main",
          "source_title": "Источник: developers.sber.ru",
          "locator": "GIGACHAT: Документация GigaChat",
          "supporting_fragment_summary": "Документация продукта; не биографии исторических лиц и не научное руководство.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Официальная экосистема; требуется отдельный ownership locator.",
      "supported_relation_scope": "PRODUCT_ECOSYSTEM_OR_TEAM_CONTEXT",
      "locator": [
        "GIGACHAT: Документация GigaChat"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/docs/ru/gigachat/guides/main"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R113:S01": {
      "relation_id": "R113:S01",
      "relation_class": "MODERN",
      "source_entity_id": "B056",
      "target_entity_id": "SB004",
      "source_entity": "Ольга Сергеевна Кулагина",
      "target_entity": "Mathematical Linguistics → NLP",
      "route_id": "R113",
      "company_endpoint": false,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.mathnet.ru/rus/ivm2979",
          "source_title": "Источник: www.mathnet.ru",
          "locator": "KULAGINA: Библиографическая запись",
          "supporting_fragment_summary": "Статья О. С. Кулагиной о машинном переводе с французского, 1958. Не о Discovery AI. Запись доступна в поисковом индексе.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Математическая лингвистика, не GigaChat.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "KULAGINA: Библиографическая запись"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.mathnet.ru"
      ],
      "source_url": [
        "https://www.mathnet.ru/rus/ivm2979"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R113:S02": {
      "relation_id": "R113:S02",
      "relation_class": "MODERN",
      "source_entity_id": "B059",
      "target_entity_id": "SB004",
      "source_entity": "Александр Семёнович Нариньяни",
      "target_entity": "Mathematical Linguistics → NLP",
      "route_id": "R113",
      "company_endpoint": false,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://search.rsl.ru/ru/record/01009650258",
          "source_title": "РГБ: Моделирование языковой деятельности в интеллектуальных системах",
          "locator": "Каталожная запись 01009650258, MARC 245$c и 260$c / Сведения об ответственности",
          "supporting_fragment_summary": "Нариньяни — редактор книги о моделировании языковой деятельности, 1987.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Нариньяни документированно участвовал в историческом поле языкового моделирования.",
      "supported_relation_scope": "HISTORICAL_NLP_FIELD_CONTEXT; не персональная связь с нынешними T-bank/Sber/Discovery AI",
      "locator": [
        "Каталожная запись 01009650258, MARC 245$c и 260$c / Сведения об ответственности"
      ],
      "temporal_scope": [
        "1987"
      ],
      "verification_status": "CONTEXT_ONLY_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "РГБ: Моделирование языковой деятельности в интеллектуальных системах"
      ],
      "source_url": [
        "https://search.rsl.ru/ru/record/01009650258"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "R113:S03": {
      "relation_id": "R113:S03",
      "relation_class": "MODERN",
      "source_entity_id": "SB004",
      "target_entity_id": "RS003",
      "source_entity": "Mathematical Linguistics → NLP",
      "target_entity": "GigaChat",
      "route_id": "R113",
      "company_endpoint": false,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/docs/ru/gigachat/guides/main",
          "source_title": "Источник: developers.sber.ru",
          "locator": "GIGACHAT: Документация GigaChat",
          "supporting_fragment_summary": "Документация продукта; не биографии исторических лиц и не научное руководство.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "NLP/LLM-интерфейс продукта.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "GIGACHAT: Документация GigaChat"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/docs/ru/gigachat/guides/main"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R113:S04": {
      "relation_id": "R113:S04",
      "relation_class": "MODERN",
      "source_entity_id": "RS003",
      "target_entity_id": "C_SBER",
      "source_entity": "GigaChat",
      "target_entity": "Сбер",
      "route_id": "R113",
      "company_endpoint": true,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/docs/ru/gigachat/guides/main",
          "source_title": "Источник: developers.sber.ru",
          "locator": "GIGACHAT: Документация GigaChat",
          "supporting_fragment_summary": "Документация продукта; не биографии исторических лиц и не научное руководство.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Официальная экосистема; ownership locator отдельно.",
      "supported_relation_scope": "PRODUCT_ECOSYSTEM_OR_TEAM_CONTEXT",
      "locator": [
        "GIGACHAT: Документация GigaChat"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/docs/ru/gigachat/guides/main"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R114:S01": {
      "relation_id": "R114:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P021",
      "target_entity_id": "SB005",
      "source_entity": "Егор Иванович Ершов",
      "target_entity": "Multimodal AI / Computer Vision",
      "route_id": "R114",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://airi.net/ru/airium/mentors/egor-ershov/",
          "source_title": "Источник: airi.net",
          "locator": "EGOR: Биография",
          "supporting_fragment_summary": "Компьютерное зрение/вычислительная фотография подтверждены индексированным текстом AIRI. Не доказательство происхождения корпоративной мультимодальной модели.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "CV/вычислительная фотография подтверждены; расширение к корпоративному multimodal — контекст.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "EGOR: Биография"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: airi.net"
      ],
      "source_url": [
        "https://airi.net/ru/airium/mentors/egor-ershov/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R114:S02": {
      "relation_id": "R114:S02",
      "relation_class": "MODERN",
      "source_entity_id": "SB005",
      "target_entity_id": "RS004",
      "source_entity": "Multimodal AI / Computer Vision",
      "target_entity": "Kandinsky / Multimodal AI",
      "route_id": "R114",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/kak-v-sbere/teams/kandinsky",
          "source_title": "Источник: developers.sber.ru",
          "locator": "KANDINSKY: Мы создаём и развиваем; Pretrain",
          "supporting_fragment_summary": "Multimodal, World Model, SFT/RL названы прямо. Не источник участия Панова, Ершова, Журавлёва и других в Kandinsky.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Multimodal описано.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "KANDINSKY: Мы создаём и развиваем; Pretrain"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/kak-v-sbere/teams/kandinsky"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R114:S03": {
      "relation_id": "R114:S03",
      "relation_class": "MODERN",
      "source_entity_id": "RS004",
      "target_entity_id": "C_SBER",
      "source_entity": "Kandinsky / Multimodal AI",
      "target_entity": "Сбер",
      "route_id": "R114",
      "company_endpoint": true,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/kak-v-sbere/teams/kandinsky",
          "source_title": "Источник: developers.sber.ru",
          "locator": "KANDINSKY: Мы создаём и развиваем; Pretrain",
          "supporting_fragment_summary": "Multimodal, World Model, SFT/RL названы прямо. Не источник участия Панова, Ершова, Журавлёва и других в Kandinsky.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Современный продуктовый контур Сбера; не генеалогия.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "KANDINSKY: Мы создаём и развиваем; Pretrain"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/kak-v-sbere/teams/kandinsky"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R115:S01": {
      "relation_id": "R115:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P020",
      "target_entity_id": "SB006",
      "source_entity": "Александр Игоревич Панов",
      "target_entity": "Reinforcement Learning / World Models",
      "route_id": "R115",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://rairi.frccsc.ru/employees/7",
          "source_title": "Источник: rairi.frccsc.ru",
          "locator": "PANOV: Образование; Научная работа; Проекты",
          "supporting_fragment_summary": "Осипов назван научным руководителем Панова; перечислены совместные проекты. Указаны RL/robotics-направления самого Панова.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "RL/robotics Панова; не участие в Kandinsky.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "PANOV: Образование; Научная работа; Проекты"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: rairi.frccsc.ru"
      ],
      "source_url": [
        "https://rairi.frccsc.ru/employees/7"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R115:S02": {
      "relation_id": "R115:S02",
      "relation_class": "MODERN",
      "source_entity_id": "SB006",
      "target_entity_id": "RS004",
      "source_entity": "Reinforcement Learning / World Models",
      "target_entity": "Kandinsky / Multimodal AI",
      "route_id": "R115",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/kak-v-sbere/teams/kandinsky",
          "source_title": "Источник: developers.sber.ru",
          "locator": "KANDINSKY: Мы создаём и развиваем; Pretrain",
          "supporting_fragment_summary": "Multimodal, World Model, SFT/RL названы прямо. Не источник участия Панова, Ершова, Журавлёва и других в Kandinsky.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "RL и World Model прямо перечислены.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "KANDINSKY: Мы создаём и развиваем; Pretrain"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/kak-v-sbere/teams/kandinsky"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R115:S03": {
      "relation_id": "R115:S03",
      "relation_class": "MODERN",
      "source_entity_id": "RS004",
      "target_entity_id": "C_SBER",
      "source_entity": "Kandinsky / Multimodal AI",
      "target_entity": "Сбер",
      "route_id": "R115",
      "company_endpoint": true,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/kak-v-sbere/teams/kandinsky",
          "source_title": "Источник: developers.sber.ru",
          "locator": "KANDINSKY: Мы создаём и развиваем; Pretrain",
          "supporting_fragment_summary": "Multimodal, World Model, SFT/RL названы прямо. Не источник участия Панова, Ершова, Журавлёва и других в Kandinsky.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Современный продуктовый контур Сбера; не генеалогия.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "KANDINSKY: Мы создаём и развиваем; Pretrain"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/kak-v-sbere/teams/kandinsky"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R116:S02": {
      "relation_id": "R116:S02",
      "relation_class": "MODERN",
      "source_entity_id": "B029",
      "target_entity_id": "SB007",
      "source_entity": "Геннадий Семёнович Осипов",
      "target_entity": "LLM Agents",
      "route_id": "R116",
      "company_endpoint": false,
      "relation_type": "HISTORICAL_AI_CONTEXT_TO_AGENT_SYSTEMS",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://rairi.frccsc.ru/employees/7",
          "source_title": "Источник: rairi.frccsc.ru",
          "locator": "PANOV: Образование; Научная работа; Проекты",
          "supporting_fragment_summary": "Осипов назван научным руководителем Панова; перечислены совместные проекты. Указаны RL/robotics-направления самого Панова.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Агенты/интеллектуальные системы — поле, не происхождение LLM.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "PANOV: Образование; Научная работа; Проекты"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: rairi.frccsc.ru"
      ],
      "source_url": [
        "https://rairi.frccsc.ru/employees/7"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R116:S03": {
      "relation_id": "R116:S03",
      "relation_class": "MODERN",
      "source_entity_id": "SB007",
      "target_entity_id": "RS005",
      "source_entity": "LLM Agents",
      "target_entity": "GigaChain / Agents",
      "route_id": "R116",
      "company_endpoint": false,
      "relation_type": "HISTORICAL_AI_CONTEXT_TO_AGENT_SYSTEMS",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/docs/ru/gigachain/overview",
          "source_title": "Источник: developers.sber.ru",
          "locator": "GIGACHAIN: Вступление; раздел Агенты",
          "supporting_fragment_summary": "Официально описан набор решений LLM/Agents/RAG. Подтверждает современный продуктовый контекст, не линию Поспелова.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "LLM agents документированы.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "GIGACHAIN: Вступление; раздел Агенты"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/docs/ru/gigachain/overview"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R116:S04": {
      "relation_id": "R116:S04",
      "relation_class": "MODERN",
      "source_entity_id": "RS005",
      "target_entity_id": "C_SBER",
      "source_entity": "GigaChain / Agents",
      "target_entity": "Сбер",
      "route_id": "R116",
      "company_endpoint": true,
      "relation_type": "HISTORICAL_AI_CONTEXT_TO_AGENT_SYSTEMS",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/docs/ru/gigachain/overview",
          "source_title": "Источник: developers.sber.ru",
          "locator": "GIGACHAIN: Вступление; раздел Агенты",
          "supporting_fragment_summary": "Официально описан набор решений LLM/Agents/RAG. Подтверждает современный продуктовый контекст, не линию Поспелова.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Официальный продуктовый контур.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "GIGACHAIN: Вступление; раздел Агенты"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/docs/ru/gigachain/overview"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R117:S01": {
      "relation_id": "R117:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P015",
      "target_entity_id": "SB008",
      "source_entity": "Юрий Иванович Журавлёв",
      "target_entity": "Pattern Recognition → CV",
      "route_id": "R117",
      "company_endpoint": false,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://cs.msu.ru/persons/6",
          "source_title": "Источник: cs.msu.ru",
          "locator": "ZHURAVLEV: Биография, диссертация; научные интересы",
          "supporting_fragment_summary": "Ляпунов назван руководителем; кафедра Мальцева — институциональный контекст. Распознавание образов — область Журавлёва.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Распознавание образов — контекст.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "ZHURAVLEV: Биография, диссертация; научные интересы"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: cs.msu.ru"
      ],
      "source_url": [
        "https://cs.msu.ru/persons/6"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R117:S02": {
      "relation_id": "R117:S02",
      "relation_class": "MODERN",
      "source_entity_id": "B042",
      "target_entity_id": "SB008",
      "source_entity": "Марк Аронович Айзерман",
      "target_entity": "Pattern Recognition → CV",
      "route_id": "R117",
      "company_endpoint": false,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.ipu.ru/node/11931",
          "source_title": "Источник: www.ipu.ru",
          "locator": "AIZERMAN: Биография до войны",
          "supporting_fragment_summary": "Лузин прямо назван учителем Айзермана; документирован вклад Айзермана в распознавание образов.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Распознавание образов — контекст.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "AIZERMAN: Биография до войны"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.ipu.ru"
      ],
      "source_url": [
        "https://www.ipu.ru/node/11931"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R117:S03": {
      "relation_id": "R117:S03",
      "relation_class": "MODERN",
      "source_entity_id": "B046",
      "target_entity_id": "SB008",
      "source_entity": "Юрий Исаакович Неймарк",
      "target_entity": "Pattern Recognition → CV",
      "route_id": "R117",
      "company_endpoint": false,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://vestnik.unn.ru/ru/nomera?anum=5324",
          "source_title": "ННГУ: Огрубленное статистическое исследование прикладных динамических систем методами распознавания образов, II",
          "locator": "Карточка статьи: авторы, аннотация, №6, 2012, с.164–174",
          "supporting_fragment_summary": "Неймарк — автор работы о методах распознавания образов.",
          "retrieval_status": "INDEXED_TEXT"
        }
      ],
      "supported_claim": "Работы Неймарка относятся к распознаванию образов.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTEXT; не связь с конкретной современной CV-моделью",
      "locator": [
        "Карточка статьи: авторы, аннотация, №6, 2012, с.164–174"
      ],
      "temporal_scope": [
        "2012"
      ],
      "verification_status": "CONTEXT_ONLY_FRAGMENT",
      "retrieval_status": [
        "INDEXED_TEXT"
      ],
      "source_title": [
        "ННГУ: Огрубленное статистическое исследование прикладных динамических систем методами распознавания образов, II"
      ],
      "source_url": [
        "https://vestnik.unn.ru/ru/nomera?anum=5324"
      ],
      "confidence": "MEDIUM"
    },
    "R117:S04": {
      "relation_id": "R117:S04",
      "relation_class": "MODERN",
      "source_entity_id": "B047",
      "target_entity_id": "SB008",
      "source_entity": "Юрий Григорьевич Васин",
      "target_entity": "Pattern Recognition → CV",
      "route_id": "R117",
      "company_endpoint": false,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://itmm.unn.ru/about/history/memorial/yurij-grigorevich-vasin/",
          "source_title": "Источник: itmm.unn.ru",
          "locator": "VASIN: Кандидатская диссертация 1971",
          "supporting_fragment_summary": "Прямо назван руководитель Ю. И. Неймарк. Soft hyphens мешают простому поиску фамилии; проверен сам абзац.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Распознавание/видеоинформация подтверждены; корпоративная связь — контекст.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "VASIN: Кандидатская диссертация 1971"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: itmm.unn.ru"
      ],
      "source_url": [
        "https://itmm.unn.ru/about/history/memorial/yurij-grigorevich-vasin/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R117:S05": {
      "relation_id": "R117:S05",
      "relation_class": "MODERN",
      "source_entity_id": "SB008",
      "target_entity_id": "RS004",
      "source_entity": "Pattern Recognition → CV",
      "target_entity": "Kandinsky / Multimodal AI",
      "route_id": "R117",
      "company_endpoint": false,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/kak-v-sbere/teams/kandinsky",
          "source_title": "Источник: developers.sber.ru",
          "locator": "KANDINSKY: Мы создаём и развиваем; Pretrain",
          "supporting_fragment_summary": "Multimodal, World Model, SFT/RL названы прямо. Не источник участия Панова, Ершова, Журавлёва и других в Kandinsky.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Современное multimodal направление.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "KANDINSKY: Мы создаём и развиваем; Pretrain"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/kak-v-sbere/teams/kandinsky"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "R117:S06": {
      "relation_id": "R117:S06",
      "relation_class": "MODERN",
      "source_entity_id": "RS004",
      "target_entity_id": "C_SBER",
      "source_entity": "Kandinsky / Multimodal AI",
      "target_entity": "Сбер",
      "route_id": "R117",
      "company_endpoint": true,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://developers.sber.ru/kak-v-sbere/teams/kandinsky",
          "source_title": "Источник: developers.sber.ru",
          "locator": "KANDINSKY: Мы создаём и развиваем; Pretrain",
          "supporting_fragment_summary": "Multimodal, World Model, SFT/RL названы прямо. Не источник участия Панова, Ершова, Журавлёва и других в Kandinsky.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Современный продуктовый контур Сбера; не генеалогия.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "KANDINSKY: Мы создаём и развиваем; Pretrain"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: developers.sber.ru"
      ],
      "source_url": [
        "https://developers.sber.ru/kak-v-sbere/teams/kandinsky"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V01:S01": {
      "relation_id": "VK81_V01:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P023",
      "target_entity_id": "VK81_T_APPLIED_RESEARCH",
      "source_entity": "Валентин Андреевич Малых",
      "target_entity": "Applied research / NLP",
      "route_id": "VK81_V01",
      "company_endpoint": false,
      "relation_type": "DIRECT_PERSON_INSTITUTION + RESEARCH",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://val.maly.hk/resume/one-page-cv.pdf",
          "source_title": "Valentin Malykh — Research Scientist / CV",
          "locator": "CV: PDF p.1, Education / Experience",
          "supporting_fragment_summary": "VK.com Applied Research Scientist, 2018–2019; текстовая классификация и суммаризация. Отдельное подразделение с официальным именем VK Research не указано.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Текстовые задачи VK, 2018–2019.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "CV: PDF p.1, Education / Experience"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Valentin Malykh — Research Scientist / CV"
      ],
      "source_url": [
        "https://val.maly.hk/resume/one-page-cv.pdf"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V01:S02": {
      "relation_id": "VK81_V01:S02",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_T_APPLIED_RESEARCH",
      "target_entity_id": "VK81_O_VK_RESEARCH",
      "source_entity": "Applied research / NLP",
      "target_entity": "VK Research",
      "route_id": "VK81_V01",
      "company_endpoint": false,
      "relation_type": "DIRECT_PERSON_INSTITUTION + RESEARCH",
      "evidence_status": "INHERITED",
      "evidence_refs": [
        {
          "source_url": "https://val.maly.hk/resume/one-page-cv.pdf",
          "source_title": "Valentin Malykh — Research Scientist / CV",
          "locator": "PDF p.1 Experience, VK.com, 2018–2019",
          "supporting_fragment_summary": "Установлена работа в VK.com, но промежуточная сущность VK Research здесь не названа.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Датированная аффилиация VK.com установлена; конкретное промежуточное подразделение не установлено.",
      "supported_relation_scope": "COMPANY_AFFILIATION_ONLY",
      "locator": [
        "PDF p.1 Experience, VK.com, 2018–2019"
      ],
      "temporal_scope": [
        "2018–2019"
      ],
      "verification_status": "ROUTE_CONTEXT_NOT_PROMOTED",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Valentin Malykh — Research Scientist / CV"
      ],
      "source_url": [
        "https://val.maly.hk/resume/one-page-cv.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "VK81_V01:S03": {
      "relation_id": "VK81_V01:S03",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_O_VK_RESEARCH",
      "target_entity_id": "C_VK",
      "source_entity": "VK Research",
      "target_entity": "VK",
      "route_id": "VK81_V01",
      "company_endpoint": true,
      "relation_type": "DIRECT_PERSON_INSTITUTION + RESEARCH",
      "evidence_status": "INHERITED",
      "evidence_refs": [
        {
          "source_url": "https://val.maly.hk/resume/one-page-cv.pdf",
          "source_title": "Valentin Malykh — Research Scientist / CV",
          "locator": "PDF p.1 Experience, VK.com, 2018–2019",
          "supporting_fragment_summary": "Установлена работа в VK.com, но промежуточная сущность VK Research здесь не названа.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Датированная аффилиация VK.com установлена; конкретное промежуточное подразделение не установлено.",
      "supported_relation_scope": "COMPANY_AFFILIATION_ONLY",
      "locator": [
        "PDF p.1 Experience, VK.com, 2018–2019"
      ],
      "temporal_scope": [
        "2018–2019"
      ],
      "verification_status": "ROUTE_CONTEXT_NOT_PROMOTED",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Valentin Malykh — Research Scientist / CV"
      ],
      "source_url": [
        "https://val.maly.hk/resume/one-page-cv.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "VK81_V02:S02": {
      "relation_id": "VK81_V02:S02",
      "relation_class": "MODERN",
      "source_entity_id": "P023",
      "target_entity_id": "VK81_T_APPLIED_RESEARCH",
      "source_entity": "Валентин Андреевич Малых",
      "target_entity": "Applied research / NLP",
      "route_id": "VK81_V02",
      "company_endpoint": false,
      "relation_type": "HUMAN_LINEAGE_TO_PAST_CORPORATE_RESEARCH",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://val.maly.hk/",
          "source_title": "Источник: val.maly.hk",
          "locator": "MALYKH_WEB: Who am I",
          "supporting_fragment_summary": "Автор сообщает о прошлой работе в VK.com и NLP Research Head в MTS AI; эта страница сама по себе не датированный документ о MWS AI.",
          "retrieval_status": "PASS04_RETAINED"
        },
        {
          "source_url": "https://val.maly.hk/resume/one-page-cv.pdf",
          "source_title": "Valentin Malykh — Research Scientist / CV",
          "locator": "CV: PDF p.1, Education / Experience",
          "supporting_fragment_summary": "VK.com Applied Research Scientist, 2018–2019; текстовая классификация и суммаризация. Отдельное подразделение с официальным именем VK Research не указано.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Прошлая исследовательская работа VK.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "MALYKH_WEB: Who am I",
        "CV: PDF p.1, Education / Experience"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: val.maly.hk",
        "Valentin Malykh — Research Scientist / CV"
      ],
      "source_url": [
        "https://val.maly.hk/",
        "https://val.maly.hk/resume/one-page-cv.pdf"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V02:S03": {
      "relation_id": "VK81_V02:S03",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_T_APPLIED_RESEARCH",
      "target_entity_id": "VK81_O_VK_RESEARCH",
      "source_entity": "Applied research / NLP",
      "target_entity": "VK Research",
      "route_id": "VK81_V02",
      "company_endpoint": false,
      "relation_type": "HUMAN_LINEAGE_TO_PAST_CORPORATE_RESEARCH",
      "evidence_status": "INHERITED",
      "evidence_refs": [
        {
          "source_url": "https://val.maly.hk/resume/one-page-cv.pdf",
          "source_title": "Valentin Malykh — Research Scientist / CV",
          "locator": "PDF p.1 Experience, VK.com, 2018–2019",
          "supporting_fragment_summary": "Установлена работа в VK.com, но промежуточная сущность VK Research здесь не названа.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Датированная аффилиация VK.com установлена; конкретное промежуточное подразделение не установлено.",
      "supported_relation_scope": "COMPANY_AFFILIATION_ONLY",
      "locator": [
        "PDF p.1 Experience, VK.com, 2018–2019"
      ],
      "temporal_scope": [
        "2018–2019"
      ],
      "verification_status": "ROUTE_CONTEXT_NOT_PROMOTED",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Valentin Malykh — Research Scientist / CV"
      ],
      "source_url": [
        "https://val.maly.hk/resume/one-page-cv.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "VK81_V02:S04": {
      "relation_id": "VK81_V02:S04",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_O_VK_RESEARCH",
      "target_entity_id": "C_VK",
      "source_entity": "VK Research",
      "target_entity": "VK",
      "route_id": "VK81_V02",
      "company_endpoint": true,
      "relation_type": "HUMAN_LINEAGE_TO_PAST_CORPORATE_RESEARCH",
      "evidence_status": "INHERITED",
      "evidence_refs": [
        {
          "source_url": "https://val.maly.hk/resume/one-page-cv.pdf",
          "source_title": "Valentin Malykh — Research Scientist / CV",
          "locator": "PDF p.1 Experience, VK.com, 2018–2019",
          "supporting_fragment_summary": "Установлена работа в VK.com, но промежуточная сущность VK Research здесь не названа.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Датированная аффилиация VK.com установлена; конкретное промежуточное подразделение не установлено.",
      "supported_relation_scope": "COMPANY_AFFILIATION_ONLY",
      "locator": [
        "PDF p.1 Experience, VK.com, 2018–2019"
      ],
      "temporal_scope": [
        "2018–2019"
      ],
      "verification_status": "ROUTE_CONTEXT_NOT_PROMOTED",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "Valentin Malykh — Research Scientist / CV"
      ],
      "source_url": [
        "https://val.maly.hk/resume/one-page-cv.pdf"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "VK81_V03:S02": {
      "relation_id": "VK81_V03:S02",
      "relation_class": "MODERN",
      "source_entity_id": "P019",
      "target_entity_id": "VK81_T_ALS_EMBEDDINGS",
      "source_entity": "Иван Валерьевич Оселедец",
      "target_entity": "ALS / embeddings",
      "route_id": "VK81_V03",
      "company_endpoint": false,
      "relation_type": "METHOD_FAMILY_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/abs/1603.06038",
          "source_title": "Источник: arxiv.org",
          "locator": "TENSOR: Authors; Abstract",
          "supporting_fragment_summary": "Оселедец и Фролов — соавторы работы о тензорных рекомендательных методах; не источник внедрения их алгоритма в компании.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Method family, не алгоритм VK.",
      "supported_relation_scope": "METHOD_FAMILY_CONTEXT",
      "locator": [
        "TENSOR: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: arxiv.org"
      ],
      "source_url": [
        "https://arxiv.org/abs/1603.06038"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V03:S03": {
      "relation_id": "VK81_V03:S03",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_T_ALS_EMBEDDINGS",
      "target_entity_id": "O003",
      "source_entity": "ALS / embeddings",
      "target_entity": "VK Core ML",
      "route_id": "VK81_V03",
      "company_endpoint": false,
      "relation_type": "METHOD_FAMILY_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/683152/",
          "source_title": "Источник: habr.com",
          "locator": "VKALS: Вступление; ALS",
          "supporting_fragment_summary": "Сотрудники Core ML описывают implicit ALS для VK Музыки.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "ALS команды Core ML.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKALS: Вступление; ALS"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/683152/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V03:S04": {
      "relation_id": "VK81_V03:S04",
      "relation_class": "MODERN",
      "source_entity_id": "O003",
      "target_entity_id": "C_VK",
      "source_entity": "VK Core ML",
      "target_entity": "VK",
      "route_id": "VK81_V03",
      "company_endpoint": true,
      "relation_type": "METHOD_FAMILY_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/683152/",
          "source_title": "Источник: habr.com",
          "locator": "VKALS: Вступление; ALS",
          "supporting_fragment_summary": "Сотрудники Core ML описывают implicit ALS для VK Музыки.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Core ML VK.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKALS: Вступление; ALS"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/683152/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V03:S05": {
      "relation_id": "VK81_V03:S05",
      "relation_class": "MODERN",
      "source_entity_id": "B024",
      "target_entity_id": "VK81_T_ALS_EMBEDDINGS",
      "source_entity": "Евгений Петрович Фролов",
      "target_entity": "ALS / embeddings",
      "route_id": "VK81_V03",
      "company_endpoint": false,
      "relation_type": "METHOD_FAMILY_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://arxiv.org/abs/1603.06038",
          "source_title": "Источник: arxiv.org",
          "locator": "TENSOR: Authors; Abstract",
          "supporting_fragment_summary": "Оселедец и Фролов — соавторы работы о тензорных рекомендательных методах; не источник внедрения их алгоритма в компании.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Method family, не алгоритм VK.",
      "supported_relation_scope": "METHOD_FAMILY_CONTEXT",
      "locator": [
        "TENSOR: Authors; Abstract"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: arxiv.org"
      ],
      "source_url": [
        "https://arxiv.org/abs/1603.06038"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V03:S06": {
      "relation_id": "VK81_V03:S06",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_T_ALS_EMBEDDINGS",
      "target_entity_id": "O003",
      "source_entity": "ALS / embeddings",
      "target_entity": "VK Core ML",
      "route_id": "VK81_V03",
      "company_endpoint": false,
      "relation_type": "METHOD_FAMILY_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/683152/",
          "source_title": "Источник: habr.com",
          "locator": "VKALS: Вступление; ALS",
          "supporting_fragment_summary": "Сотрудники Core ML описывают implicit ALS для VK Музыки.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "ALS команды Core ML.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKALS: Вступление; ALS"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/683152/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V03:S07": {
      "relation_id": "VK81_V03:S07",
      "relation_class": "MODERN",
      "source_entity_id": "O003",
      "target_entity_id": "C_VK",
      "source_entity": "VK Core ML",
      "target_entity": "VK",
      "route_id": "VK81_V03",
      "company_endpoint": true,
      "relation_type": "METHOD_FAMILY_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/683152/",
          "source_title": "Источник: habr.com",
          "locator": "VKALS: Вступление; ALS",
          "supporting_fragment_summary": "Сотрудники Core ML описывают implicit ALS для VK Музыки.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Core ML VK.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKALS: Вступление; ALS"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/683152/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V04:S02": {
      "relation_id": "VK81_V04:S02",
      "relation_class": "MODERN",
      "source_entity_id": "B026",
      "target_entity_id": "VK81_T_VLM_MULTIMODAL",
      "source_entity": "Виталий Вячеславович Гулевский",
      "target_entity": "VLM / multimodal",
      "route_id": "VK81_V04",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.hse.ru/edu/vkr/639006697",
          "source_title": "Источник: www.hse.ru",
          "locator": "GULEVSKY: Студент / Руководитель",
          "supporting_fragment_summary": "ВКР Гулевского о быстром преобразовании Хафа; руководитель Егор Ершов. Проверено по индексированному тексту HSE; open недоступен.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Хаф/CV не равны VLM; только поле.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "GULEVSKY: Студент / Руководитель"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.hse.ru"
      ],
      "source_url": [
        "https://www.hse.ru/edu/vkr/639006697"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V04:S03": {
      "relation_id": "VK81_V04:S03",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_T_VLM_MULTIMODAL",
      "target_entity_id": "VK81_O_AI_VK",
      "source_entity": "VLM / multimodal",
      "target_entity": "AI VK",
      "route_id": "VK81_V04",
      "company_endpoint": false,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/1057830/",
          "source_title": "Источник: habr.com",
          "locator": "VKVLM: Вступление; Идея",
          "supporting_fragment_summary": "Руководитель группы AI VK описывает VLM для видеопоиска; нет генеалогии от исторических школ.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "VLM-проект AI VK.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKVLM: Вступление; Идея"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/1057830/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V04:S04": {
      "relation_id": "VK81_V04:S04",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_O_AI_VK",
      "target_entity_id": "C_VK",
      "source_entity": "AI VK",
      "target_entity": "VK",
      "route_id": "VK81_V04",
      "company_endpoint": true,
      "relation_type": "FIELD_LINEAGE_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/1057830/",
          "source_title": "Источник: habr.com",
          "locator": "VKVLM: Вступление; Идея",
          "supporting_fragment_summary": "Руководитель группы AI VK описывает VLM для видеопоиска; нет генеалогии от исторических школ.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "AI VK / VK подтверждено.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKVLM: Вступление; Идея"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/1057830/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V05:S01": {
      "relation_id": "VK81_V05:S01",
      "relation_class": "MODERN",
      "source_entity_id": "B056",
      "target_entity_id": "VK81_T_DISCOVERY_AI",
      "source_entity": "Ольга Сергеевна Кулагина",
      "target_entity": "Discovery AI",
      "route_id": "VK81_V05",
      "company_endpoint": false,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.mathnet.ru/rus/ivm2979",
          "source_title": "Источник: www.mathnet.ru",
          "locator": "KULAGINA: Библиографическая запись",
          "supporting_fragment_summary": "Статья О. С. Кулагиной о машинном переводе с французского, 1958. Не о Discovery AI. Запись доступна в поисковом индексе.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Исторический MT-контекст.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "KULAGINA: Библиографическая запись"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.mathnet.ru"
      ],
      "source_url": [
        "https://www.mathnet.ru/rus/ivm2979"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V05:S02": {
      "relation_id": "VK81_V05:S02",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_T_DISCOVERY_AI",
      "target_entity_id": "VK81_O_AI_VK",
      "source_entity": "Discovery AI",
      "target_entity": "AI VK",
      "route_id": "VK81_V05",
      "company_endpoint": false,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/1054358/",
          "source_title": "Источник: habr.com",
          "locator": "VKDISCOVERY: Вступление",
          "supporting_fragment_summary": "Разработчик AI VK описывает Discovery AI и постепенное внедрение; не источник методов Кулагиной/Нариньяни.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Discovery AI от AI VK.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKDISCOVERY: Вступление"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/1054358/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V05:S03": {
      "relation_id": "VK81_V05:S03",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_O_AI_VK",
      "target_entity_id": "C_VK",
      "source_entity": "AI VK",
      "target_entity": "VK",
      "route_id": "VK81_V05",
      "company_endpoint": true,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/1054358/",
          "source_title": "Источник: habr.com",
          "locator": "VKDISCOVERY: Вступление",
          "supporting_fragment_summary": "Разработчик AI VK описывает Discovery AI и постепенное внедрение; не источник методов Кулагиной/Нариньяни.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "AI VK / VK.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKDISCOVERY: Вступление"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/1054358/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V05:S04": {
      "relation_id": "VK81_V05:S04",
      "relation_class": "MODERN",
      "source_entity_id": "B059",
      "target_entity_id": "VK81_T_DISCOVERY_AI",
      "source_entity": "Александр Семёнович Нариньяни",
      "target_entity": "Discovery AI",
      "route_id": "VK81_V05",
      "company_endpoint": false,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://search.rsl.ru/ru/record/01009650258",
          "source_title": "РГБ: Моделирование языковой деятельности в интеллектуальных системах",
          "locator": "Каталожная запись 01009650258, MARC 245$c и 260$c / Сведения об ответственности",
          "supporting_fragment_summary": "Нариньяни — редактор книги о моделировании языковой деятельности, 1987.",
          "retrieval_status": "RETRIEVED_TEXT"
        }
      ],
      "supported_claim": "Нариньяни документированно участвовал в историческом поле языкового моделирования.",
      "supported_relation_scope": "HISTORICAL_NLP_FIELD_CONTEXT; не персональная связь с нынешними T-bank/Sber/Discovery AI",
      "locator": [
        "Каталожная запись 01009650258, MARC 245$c и 260$c / Сведения об ответственности"
      ],
      "temporal_scope": [
        "1987"
      ],
      "verification_status": "CONTEXT_ONLY_FRAGMENT",
      "retrieval_status": [
        "RETRIEVED_TEXT"
      ],
      "source_title": [
        "РГБ: Моделирование языковой деятельности в интеллектуальных системах"
      ],
      "source_url": [
        "https://search.rsl.ru/ru/record/01009650258"
      ],
      "confidence": "HIGH_FOR_STATED_SCOPE"
    },
    "VK81_V05:S05": {
      "relation_id": "VK81_V05:S05",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_T_DISCOVERY_AI",
      "target_entity_id": "VK81_O_AI_VK",
      "source_entity": "Discovery AI",
      "target_entity": "AI VK",
      "route_id": "VK81_V05",
      "company_endpoint": false,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/1054358/",
          "source_title": "Источник: habr.com",
          "locator": "VKDISCOVERY: Вступление",
          "supporting_fragment_summary": "Разработчик AI VK описывает Discovery AI и постепенное внедрение; не источник методов Кулагиной/Нариньяни.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Discovery AI от AI VK.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKDISCOVERY: Вступление"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/1054358/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V05:S06": {
      "relation_id": "VK81_V05:S06",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_O_AI_VK",
      "target_entity_id": "C_VK",
      "source_entity": "AI VK",
      "target_entity": "VK",
      "route_id": "VK81_V05",
      "company_endpoint": true,
      "relation_type": "MULTI_PERSON_NLP_FIELD_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/1054358/",
          "source_title": "Источник: habr.com",
          "locator": "VKDISCOVERY: Вступление",
          "supporting_fragment_summary": "Разработчик AI VK описывает Discovery AI и постепенное внедрение; не источник методов Кулагиной/Нариньяни.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "AI VK / VK.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKDISCOVERY: Вступление"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/1054358/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V06:S01": {
      "relation_id": "VK81_V06:S01",
      "relation_class": "MODERN",
      "source_entity_id": "P015",
      "target_entity_id": "VK81_T_VLM_MULTIMODAL",
      "source_entity": "Юрий Иванович Журавлёв",
      "target_entity": "VLM / multimodal",
      "route_id": "VK81_V06",
      "company_endpoint": false,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://cs.msu.ru/persons/6",
          "source_title": "Источник: cs.msu.ru",
          "locator": "ZHURAVLEV: Биография, диссертация; научные интересы",
          "supporting_fragment_summary": "Ляпунов назван руководителем; кафедра Мальцева — институциональный контекст. Распознавание образов — область Журавлёва.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Распознавание — контекст, не VLM ancestry.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "ZHURAVLEV: Биография, диссертация; научные интересы"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: cs.msu.ru"
      ],
      "source_url": [
        "https://cs.msu.ru/persons/6"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V06:S02": {
      "relation_id": "VK81_V06:S02",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_T_VLM_MULTIMODAL",
      "target_entity_id": "VK81_O_AI_VK",
      "source_entity": "VLM / multimodal",
      "target_entity": "AI VK",
      "route_id": "VK81_V06",
      "company_endpoint": false,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/1057830/",
          "source_title": "Источник: habr.com",
          "locator": "VKVLM: Вступление; Идея",
          "supporting_fragment_summary": "Руководитель группы AI VK описывает VLM для видеопоиска; нет генеалогии от исторических школ.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "VLM-проект AI VK.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKVLM: Вступление; Идея"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/1057830/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V06:S03": {
      "relation_id": "VK81_V06:S03",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_O_AI_VK",
      "target_entity_id": "C_VK",
      "source_entity": "AI VK",
      "target_entity": "VK",
      "route_id": "VK81_V06",
      "company_endpoint": true,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/1057830/",
          "source_title": "Источник: habr.com",
          "locator": "VKVLM: Вступление; Идея",
          "supporting_fragment_summary": "Руководитель группы AI VK описывает VLM для видеопоиска; нет генеалогии от исторических школ.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "AI VK / VK подтверждено.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKVLM: Вступление; Идея"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/1057830/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V06:S04": {
      "relation_id": "VK81_V06:S04",
      "relation_class": "MODERN",
      "source_entity_id": "B042",
      "target_entity_id": "VK81_T_VLM_MULTIMODAL",
      "source_entity": "Марк Аронович Айзерман",
      "target_entity": "VLM / multimodal",
      "route_id": "VK81_V06",
      "company_endpoint": false,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://www.ipu.ru/node/11931",
          "source_title": "Источник: www.ipu.ru",
          "locator": "AIZERMAN: Биография до войны",
          "supporting_fragment_summary": "Лузин прямо назван учителем Айзермана; документирован вклад Айзермана в распознавание образов.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Распознавание — контекст, не VLM ancestry.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "AIZERMAN: Биография до войны"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: www.ipu.ru"
      ],
      "source_url": [
        "https://www.ipu.ru/node/11931"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V06:S05": {
      "relation_id": "VK81_V06:S05",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_T_VLM_MULTIMODAL",
      "target_entity_id": "VK81_O_AI_VK",
      "source_entity": "VLM / multimodal",
      "target_entity": "AI VK",
      "route_id": "VK81_V06",
      "company_endpoint": false,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/1057830/",
          "source_title": "Источник: habr.com",
          "locator": "VKVLM: Вступление; Идея",
          "supporting_fragment_summary": "Руководитель группы AI VK описывает VLM для видеопоиска; нет генеалогии от исторических школ.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "VLM-проект AI VK.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKVLM: Вступление; Идея"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/1057830/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V06:S06": {
      "relation_id": "VK81_V06:S06",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_O_AI_VK",
      "target_entity_id": "C_VK",
      "source_entity": "AI VK",
      "target_entity": "VK",
      "route_id": "VK81_V06",
      "company_endpoint": true,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/1057830/",
          "source_title": "Источник: habr.com",
          "locator": "VKVLM: Вступление; Идея",
          "supporting_fragment_summary": "Руководитель группы AI VK описывает VLM для видеопоиска; нет генеалогии от исторических школ.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "AI VK / VK подтверждено.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKVLM: Вступление; Идея"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/1057830/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V06:S08": {
      "relation_id": "VK81_V06:S08",
      "relation_class": "MODERN",
      "source_entity_id": "B047",
      "target_entity_id": "VK81_T_VLM_MULTIMODAL",
      "source_entity": "Юрий Григорьевич Васин",
      "target_entity": "VLM / multimodal",
      "route_id": "VK81_V06",
      "company_endpoint": false,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "CONTEXTUAL",
      "evidence_refs": [
        {
          "source_url": "https://itmm.unn.ru/about/history/memorial/yurij-grigorevich-vasin/",
          "source_title": "Источник: itmm.unn.ru",
          "locator": "VASIN: Кандидатская диссертация 1971",
          "supporting_fragment_summary": "Прямо назван руководитель Ю. И. Неймарк. Soft hyphens мешают простому поиску фамилии; проверен сам абзац.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "Анализ видеоинформации подтверждён; переход к VLM — лишь сопоставление поля.",
      "supported_relation_scope": "HISTORICAL_FIELD_CONTINUITY_CONTEXT",
      "locator": [
        "VASIN: Кандидатская диссертация 1971"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "CONTEXT_BOUNDARY_REVIEWED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: itmm.unn.ru"
      ],
      "source_url": [
        "https://itmm.unn.ru/about/history/memorial/yurij-grigorevich-vasin/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V06:S09": {
      "relation_id": "VK81_V06:S09",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_T_VLM_MULTIMODAL",
      "target_entity_id": "VK81_O_AI_VK",
      "source_entity": "VLM / multimodal",
      "target_entity": "AI VK",
      "route_id": "VK81_V06",
      "company_endpoint": false,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/1057830/",
          "source_title": "Источник: habr.com",
          "locator": "VKVLM: Вступление; Идея",
          "supporting_fragment_summary": "Руководитель группы AI VK описывает VLM для видеопоиска; нет генеалогии от исторических школ.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "VLM-проект AI VK.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKVLM: Вступление; Идея"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/1057830/"
      ],
      "confidence": "PASS04_RETAINED"
    },
    "VK81_V06:S10": {
      "relation_id": "VK81_V06:S10",
      "relation_class": "MODERN",
      "source_entity_id": "VK81_O_AI_VK",
      "target_entity_id": "C_VK",
      "source_entity": "AI VK",
      "target_entity": "VK",
      "route_id": "VK81_V06",
      "company_endpoint": true,
      "relation_type": "MULTI_SOURCE_PATTERN_RECOGNITION_CONTEXT",
      "evidence_status": "DIRECT",
      "evidence_refs": [
        {
          "source_url": "https://habr.com/ru/companies/vk/articles/1057830/",
          "source_title": "Источник: habr.com",
          "locator": "VKVLM: Вступление; Идея",
          "supporting_fragment_summary": "Руководитель группы AI VK описывает VLM для видеопоиска; нет генеалогии от исторических школ.",
          "retrieval_status": "PASS04_RETAINED"
        }
      ],
      "supported_claim": "AI VK / VK подтверждено.",
      "supported_relation_scope": "PASS04 retained; see original fragment and binding scope",
      "locator": [
        "VKVLM: Вступление; Идея"
      ],
      "temporal_scope": [
        "Not newly established in PASS04B; consult PASS04 source"
      ],
      "verification_status": "PASS04_RETAINED_NOT_REAUDITED",
      "retrieval_status": [
        "PASS04_RETAINED"
      ],
      "source_title": [
        "Источник: habr.com"
      ],
      "source_url": [
        "https://habr.com/ru/companies/vk/articles/1057830/"
      ],
      "confidence": "PASS04_RETAINED"
    }
  }
};

