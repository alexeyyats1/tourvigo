<script>
// База данных аэропортов и городов
window.AIRPORT_DATABASE = {
    // Россия
    "Москва": { code: "MOW", country: "Россия", translitLower: "moscow" },
    "Санкт-Петербург": { code: "LED", country: "Россия", translitLower: "saint-petersburg" },
    "Сочи": { code: "AER", country: "Россия", translitLower: "sochi" },
    "Казань": { code: "KZN", country: "Россия", translitLower: "kazan" },
    "Екатеринбург": { code: "SVX", country: "Россия", translitLower: "ekaterinburg" },
    "Новосибирск": { code: "OVB", country: "Россия", translitLower: "novosibirsk" },
    "Краснодар": { code: "KRR", country: "Россия", translitLower: "krasnodar" },
    "Минеральные Воды": { code: "MRV", country: "Россия", translitLower: "mineralnye-vody" },
    "Калининград": { code: "KGD", country: "Россия", translitLower: "kaliningrad" },
    "Владивосток": { code: "VVO", country: "Россия", translitLower: "vladivostok" },
    "Иркутск": { code: "IKT", country: "Россия", translitLower: "irkutsk" },
    "Байкал": { code: "IKT", country: "Россия", translitLower: "baykal" },
    "Архангельск": { code: "ARH", country: "Россия", translitLower: "arkhangelsk" },
    "Мурманск": { code: "MMK", country: "Россия", translitLower: "murmansk" },
    "Петропавловск-Камчатский": { code: "PKC", country: "Россия", translitLower: "petropavlovsk-kamchatskiy" },
    "Камчатка": { code: "PKC", country: "Россия", translitLower: "kamchatka" },
    "Алтай": { code: "BAX", country: "Россия", translitLower: "altay" },
    "Кисловодск": { code: "MRV", country: "Россия", translitLower: "kislovodsk" },
    "Пятигорск": { code: "MRV", country: "Россия", translitLower: "pyatigorsk" },
    "Геленджик": { code: "GDZ", country: "Россия", translitLower: "gelendzhik" },
    "Анапа": { code: "AAQ", country: "Россия", translitLower: "anapa" },
    "Вологда": { code: "VGD", country: "Россия", translitLower: "vologda" },
    "Череповец": { code: "CEE", country: "Россия", translitLower: "cherepovets" },
    "Майкоп": { code: "MRV", country: "Россия", translitLower: "maykop" },
    "Адыгея": { code: "MRV", country: "Россия", translitLower: "maykop" },
    
    // Дополнительные российские города
    "Нижний Новгород": { code: "GOJ", country: "Россия", translitLower: "nizhny-novgorod" },
    "Самара": { code: "KUF", country: "Россия", translitLower: "samara" },
    "Омск": { code: "OMS", country: "Россия", translitLower: "omsk" },
    "Ростов-на-Дону": { code: "ROV", country: "Россия", translitLower: "rostov-na-donu" },
    "Уфа": { code: "UFA", country: "Россия", translitLower: "ufa" },
    "Красноярск": { code: "KJA", country: "Россия", translitLower: "krasnoyarsk" },
    "Пермь": { code: "PEE", country: "Россия", translitLower: "perm" },
    "Воронеж": { code: "VOZ", country: "Россия", translitLower: "voronezh" },
    "Волгоград": { code: "VOG", country: "Россия", translitLower: "volgograd" },
    "Саратов": { code: "RTW", country: "Россия", translitLower: "saratov" },
    "Тюмень": { code: "TJM", country: "Россия", translitLower: "tyumen" },
    "Тольятти": { code: "KUF", country: "Россия", translitLower: "tolyatti" },
    "Ижевск": { code: "IJK", country: "Россия", translitLower: "izhevsk" },
    "Барнаул": { code: "BAX", country: "Россия", translitLower: "barnaul" },
    "Ульяновск": { code: "ULY", country: "Россия", translitLower: "ulyanovsk" },
    "Иваново": { code: "IWA", country: "Россия", translitLower: "ivanovo" },
    "Тверь": { code: "KLD", country: "Россия", translitLower: "tver" },
    "Ставрополь": { code: "STW", country: "Россия", translitLower: "stavropol" },
    "Белгород": { code: "EGO", country: "Россия", translitLower: "belgorod" },
    "Курск": { code: "URS", country: "Россия", translitLower: "kursk" },
    "Калуга": { code: "KLF", country: "Россия", translitLower: "kaluga" },
    "Орёл": { code: "OEL", country: "Россия", translitLower: "orel" },
    "Смоленск": { code: "LNX", country: "Россия", translitLower: "smolensk" },
    "Муром": { code: "VKO", country: "Россия", translitLower: "murom" },
    "Домодедово": { code: "DME", country: "Россия", translitLower: "domodedovo" },
    "Внуково": { code: "VKO", country: "Россия", translitLower: "vnukovo" },
    "Шереметьево": { code: "SVO", country: "Россия", translitLower: "sheremetyevo" },
    "Жуковский": { code: "ZIA", country: "Россия", translitLower: "zhukovsky" },
    "Пулково": { code: "LED", country: "Россия", translitLower: "pulkovo" },
    
    // Крым
    "Симферополь": { code: "SIP", country: "Россия", translitLower: "simferopol" },
    "Севастополь": { code: "UKS", country: "Россия", translitLower: "sevastopol" },
    "Ялта": { code: "SIP", country: "Россия", translitLower: "yalta" },
    
    // Ближнее зарубежье
    "Минск": { code: "MSQ", country: "Беларусь", translitLower: "minsk" },
    "Гомель": { code: "GME", country: "Беларусь", translitLower: "gomel" },
    "Витебск": { code: "VTB", country: "Беларусь", translitLower: "vitebsk" },
    
    "Алматы": { code: "ALA", country: "Казахстан", translitLower: "almaty" },
    "Астана": { code: "NQZ", country: "Казахстан", translitLower: "astana" },
    "Шымкент": { code: "CIT", country: "Казахстан", translitLower: "shymkent" },
    "Актобе": { code: "AKX", country: "Казахстан", translitLower: "aktobe" },
    
    "Ташкент": { code: "TAS", country: "Узбекистан", translitLower: "tashkent" },
    "Самарканд": { code: "SKD", country: "Узбекистан", translitLower: "samarkand" },
    "Бухара": { code: "BHK", country: "Узбекистан", translitLower: "bukhara" },
    
    "Баку": { code: "GYD", country: "Азербайджан", translitLower: "baku" },
    "Гянджа": { code: "KVD", country: "Азербайджан", translitLower: "ganja" },
    
    "Ереван": { code: "EVN", country: "Армения", translitLower: "erevan" },
    "Гюмри": { code: "LWN", country: "Армения", translitLower: "gyumri" },
    
    "Тбилиси": { code: "TBS", country: "Грузия", translitLower: "tbilisi" },
    "Батуми": { code: "BUS", country: "Грузия", translitLower: "batumi" },
    "Кутаиси": { code: "KUT", country: "Грузия", translitLower: "kutaisi" },
    
    "Киев": { code: "KBP", country: "Украина", translitLower: "kyiv" },
    "Львов": { code: "LWO", country: "Украина", translitLower: "lviv" },
    "Одесса": { code: "ODS", country: "Украина", translitLower: "odessa" },
    "Харьков": { code: "HRK", country: "Украина", translitLower: "kharkiv" },
    
    "Кишинёв": { code: "KIV", country: "Молдова", translitLower: "chisinau" },
    
    "Вильнюс": { code: "VNO", country: "Литва", translitLower: "vilnius" },
    "Рига": { code: "RIX", country: "Латвия", translitLower: "riga" },
    "Таллин": { code: "TLL", country: "Эстония", translitLower: "tallinn" },
    
    // Европа
    "Берлин": { code: "BER", country: "Германия", translitLower: "berlin" },
    "Мюнхен": { code: "MUC", country: "Германия", translitLower: "munich" },
    "Франкфурт": { code: "FRA", country: "Германия", translitLower: "frankfurt" },
    "Гамбург": { code: "HAM", country: "Германия", translitLower: "hamburg" },
    "Кёльн": { code: "CGN", country: "Германия", translitLower: "cologne" },
    
    "Париж": { code: "PAR", country: "Франция", translitLower: "paris" },
    "Марсель": { code: "MRS", country: "Франция", translitLower: "marseille" },
    "Лион": { code: "LYS", country: "Франция", translitLower: "lyon" },
    "Ницца": { code: "NCE", country: "Франция", translitLower: "nice" },
    
    "Рим": { code: "FCO", country: "Италия", translitLower: "rome" },
    "Милан": { code: "MIL", country: "Италия", translitLower: "milan" },
    "Венеция": { code: "VCE", country: "Италия", translitLower: "venice" },
    "Флоренция": { code: "FLR", country: "Италия", translitLower: "florence" },
    "Неаполь": { code: "NAP", country: "Италия", translitLower: "naples" },
    
    "Прага": { code: "PRG", country: "Чехия", translitLower: "prague" },
    "Вена": { code: "VIE", country: "Австрия", translitLower: "vienna" },
    "Будапешт": { code: "BUD", country: "Венгрия", translitLower: "budapest" },
    "Варшава": { code: "WAW", country: "Польша", translitLower: "warsaw" },
    "Краков": { code: "KRK", country: "Польша", translitLower: "krakow" },
    
    "Мадрид": { code: "MAD", country: "Испания", translitLower: "madrid" },
    "Барселона": { code: "BCN", country: "Испания", translitLower: "barcelona" },
    "Валенсия": { code: "VLC", country: "Испания", translitLower: "valencia" },
    "Севилья": { code: "SVQ", country: "Испания", translitLower: "seville" },
    
    "Лиссабон": { code: "LIS", country: "Португалия", translitLower: "lisbon" },
    "Порту": { code: "OPO", country: "Португалия", translitLower: "porto" },
    
    "Амстердам": { code: "AMS", country: "Нидерланды", translitLower: "amsterdam" },
    "Брюссель": { code: "BRU", country: "Бельгия", translitLower: "brussels" },
    "Лондон": { code: "LON", country: "Великобритания", translitLower: "london" },
    "Эдинбург": { code: "EDI", country: "Великобритания", translitLower: "edinburgh" },
    "Дублин": { code: "DUB", country: "Ирландия", translitLower: "dublin" },
    
    "Стокгольм": { code: "ARN", country: "Швеция", translitLower: "stockholm" },
    "Осло": { code: "OSL", country: "Норвегия", translitLower: "oslo" },
    "Копенгаген": { code: "CPH", country: "Дания", translitLower: "copenhagen" },
    "Хельсинки": { code: "HEL", country: "Финляндия", translitLower: "helsinki" },
    
    "Афины": { code: "ATH", country: "Греция", translitLower: "athens" },
    "Салоники": { code: "SKG", country: "Греция", translitLower: "thessaloniki" },
    
    // Турция
    "Анталья": { code: "AYT", country: "Турция", translitLower: "antalya" },
    "Стамбул": { code: "IST", country: "Турция", translitLower: "istanbul" },
    "Анкара": { code: "ESB", country: "Турция", translitLower: "ankara" },
    "Измир": { code: "ADB", country: "Турция", translitLower: "izmir" },
    "Бодрум": { code: "BJV", country: "Турция", translitLower: "bodrum" },
    "Даламан": { code: "DLM", country: "Турция", translitLower: "dalaman" },
    
    // Египет
    "Каир": { code: "CAI", country: "Египет", translitLower: "cairo" },
    "Хургада": { code: "HRG", country: "Египет", translitLower: "hurghada" },
    "Шарм-эль-Шейх": { code: "SSH", country: "Египет", translitLower: "sharm-el-sheikh" },
    "Александрия": { code: "HBE", country: "Египет", translitLower: "alexandria" },
    
    // ОАЭ
    "Дубай": { code: "DXB", country: "ОАЭ", translitLower: "dubai" },
    "Абу-Даби": { code: "AUH", country: "ОАЭ", translitLower: "abu-dhabi" },
    "Шарджа": { code: "SHJ", country: "ОАЭ", translitLower: "sharjah" },
    
    // Азия
    "Пхукет": { code: "HKT", country: "Таиланд", translitLower: "phuket" },
    "Бангкок": { code: "BKK", country: "Таиланд", translitLower: "bangkok" },
    "Паттайя": { code: "BKK", country: "Таиланд", translitLower: "pattaya" },
    "Чиангмай": { code: "CNX", country: "Таиланд", translitLower: "chiang-mai" },
    "Самуи": { code: "USM", country: "Таиланд", translitLower: "samui" },
    
    "Бали": { code: "DPS", country: "Индонезия", translitLower: "bali" },
    "Джакарта": { code: "CGK", country: "Индонезия", translitLower: "jakarta" },
    
    "Сингапур": { code: "SIN", country: "Сингапур", translitLower: "singapore" },
    
    "Куала-Лумпур": { code: "KUL", country: "Малайзия", translitLower: "kuala-lumpur" },
    
    "Манила": { code: "MNL", country: "Филиппины", translitLower: "manila" },
    "Себу": { code: "CEB", country: "Филиппины", translitLower: "cebu" },
    
    "Токио": { code: "TYO", country: "Япония", translitLower: "tokyo" },
    "Осака": { code: "OSA", country: "Япония", translitLower: "osaka" },
    "Киото": { code: "UKY", country: "Япония", translitLower: "kyoto" },
    
    "Сеул": { code: "SEL", country: "Южная Корея", translitLower: "seoul" },
    
    "Пекин": { code: "BJS", country: "Китай", translitLower: "beijing" },
    "Шанхай": { code: "SHA", country: "Китай", translitLower: "shanghai" },
    "Гуанчжоу": { code: "CAN", country: "Китай", translitLower: "guangzhou" },
    "Гонконг": { code: "HKG", country: "Китай", translitLower: "hong-kong" },
    
    "Тайбэй": { code: "TPE", country: "Тайвань", translitLower: "taipei" },
    
    "Ханой": { code: "HAN", country: "Вьетнам", translitLower: "hanoi" },
    "Хошимин": { code: "SGN", country: "Вьетнам", translitLower: "ho-chi-minh" },
    "Нячанг": { code: "CXR", country: "Вьетнам", translitLower: "nha-trang" },
    "Фукуок": { code: "PQC", country: "Вьетнам", translitLower: "phu-quoc" },
    
    "Пномпень": { code: "PNH", country: "Камбоджа", translitLower: "phnom-penh" },
    "Сиемреап": { code: "REP", country: "Камбоджа", translitLower: "siem-reap" },
    
    "Вьентьян": { code: "VTE", country: "Лаос", translitLower: "vientiane" },
    
    "Янгон": { code: "RGN", country: "Мьянма", translitLower: "yangon" },
    
    // Северная Америка
    "Нью-Йорк": { code: "NYC", country: "США", translitLower: "new-york" },
    "Лос-Анджелес": { code: "LAX", country: "США", translitLower: "los-angeles" },
    "Майами": { code: "MIA", country: "США", translitLower: "miami" },
    "Лас-Вегас": { code: "LAS", country: "США", translitLower: "las-vegas" },
    "Чикаго": { code: "CHI", country: "США", translitLower: "chicago" },
    "Сан-Франциско": { code: "SFO", country: "США", translitLower: "san-francisco" },
    
    "Торонто": { code: "YYZ", country: "Канада", translitLower: "toronto" },
    "Ванкувер": { code: "YVR", country: "Канада", translitLower: "vancouver" },
    "Монреаль": { code: "YUL", country: "Канада", translitLower: "montreal" },
    
    "Мехико": { code: "MEX", country: "Мексика", translitLower: "mexico-city" },
    "Канкун": { code: "CUN", country: "Мексика", translitLower: "cancun" },
    
    // Южная Америка
    "Рио-де-Жанейро": { code: "RIO", country: "Бразилия", translitLower: "rio-de-janeiro" },
    "Сан-Паулу": { code: "SAO", country: "Бразилия", translitLower: "sao-paulo" },
    "Буэнос-Айрес": { code: "BUE", country: "Аргентина", translitLower: "buenos-aires" },
    "Лима": { code: "LIM", country: "Перу", translitLower: "lima" },
    "Сантьяго": { code: "SCL", country: "Чили", translitLower: "santiago" },
    
    // Африка
    "Кейптаун": { code: "CPT", country: "ЮАР", translitLower: "cape-town" },
    "Йоханнесбург": { code: "JNB", country: "ЮАР", translitLower: "johannesburg" },
    "Марракеш": { code: "RAK", country: "Марокко", translitLower: "marrakech" },
    "Касабланка": { code: "CMN", country: "Марокко", translitLower: "casablanca" },
    "Найроби": { code: "NBO", country: "Кения", translitLower: "nairobi" },
    
    // Австралия и Океания
    "Сидней": { code: "SYD", country: "Австралия", translitLower: "sydney" },
    "Мельбурн": { code: "MEL", country: "Австралия", translitLower: "melbourne" },
    "Окленд": { code: "AKL", country: "Новая Зеландия", translitLower: "auckland" },
    "Фиджи": { code: "NAN", country: "Фиджи", translitLower: "fiji" }
};

window.COUNTRY_CODES = {
    // Европа
    "Россия": "russia",
    "Беларусь": "belarus",
    "Украина": "ukraine",
    "Польша": "poland",
    "Чехия": "czech_republic",
    "Германия": "germany",
    "Франция": "france",
    "Италия": "italy",
    "Испания": "spain",
    "Португалия": "portugal",
    "Великобритания": "united_kingdom",
    "Ирландия": "ireland",
    "Нидерланды": "netherlands",
    "Бельгия": "belgium",
    "Швейцария": "switzerland",
    "Австрия": "austria",
    "Венгрия": "hungary",
    "Румыния": "romania",
    "Болгария": "bulgaria",
    "Греция": "greece",
    "Хорватия": "croatia",
    "Сербия": "serbia",
    "Норвегия": "norway",
    "Швеция": "sweden",
    "Финляндия": "finland",
    "Дания": "denmark",
    "Исландия": "iceland",
    
    // Азия
    "Казахстан": "kazakhstan",
    "Узбекистан": "uzbekistan",
    "Азербайджан": "azerbaijan",
    "Армения": "armenia",
    "Грузия": "georgia",
    "Турция": "turkey",
    "Китай": "china",
    "Япония": "japan",
    "Южная Корея": "south_korea",
    "Индия": "india",
    "Вьетнам": "vietnam",
    "Таиланд": "thailand",
    "Индонезия": "indonesia",
    "Малайзия": "malaysia",
    "Сингапур": "singapore",
    "Филиппины": "philippines",
    "Шри-Ланка": "sri_lanka",
    "Мальдивы": "maldives",
    "ОАЭ": "uae",
    "Саудовская Аравия": "saudi_arabia",
    "Израиль": "israel",
    "Иордания": "jordan",
    
    // Северная Америка
    "США": "usa",
    "Канада": "canada",
    "Мексика": "mexico",
    "Куба": "cuba",
    "Доминикана": "dominican_republic",
    "Ямайка": "jamaica",
    "Багамы": "bahamas",
    
    // Южная Америка
    "Бразилия": "brazil",
    "Аргентина": "argentina",
    "Чили": "chile",
    "Перу": "peru",
    "Колумбия": "colombia",
    "Эквадор": "ecuador",
    "Уругвай": "uruguay",
    
    // Африка
    "Египет": "egypt",
    "Тунис": "tunisia",
    "Марокко": "morocco",
    "ЮАР": "south_africa",
    "Кения": "kenya",
    "Танзания": "tanzania",
    "Сейшелы": "seychelles",
    "Маврикий": "mauritius",
    
    // Океания
    "Австралия": "australia",
    "Новая Зеландия": "new_zealand",
    "Фиджи": "fiji",
    
    // Дополнительные популярные направления
    "Мальта": "malta",
    "Кипр": "cyprus",
    "Черногория": "montenegro",
    "Албания": "albania",
    "Словения": "slovenia",
    "Словакия": "slovakia",
    "Литва": "lithuania",
    "Латвия": "latvia",
    "Эстония": "estonia",
    "Люксембург": "luxembourg",
    "Монако": "monaco",
    "Андорра": "andorra",
    "Сан-Марино": "san_marino",
    "Ватикан": "vatican",
    "Лихтенштейн": "liechtenstein"
};
</script>

