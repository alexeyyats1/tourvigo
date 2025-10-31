// База данных аэропортов и городов
export const AIRPORT_DATABASE: Record<string, { code: string; country: string; translitLower: string }> = {
    // Россия
    "москва": { code: "MOW", country: "Россия", translitLower: "moscow" },
    "санкт-петербург": { code: "LED", country: "Россия", translitLower: "saint-petersburg" },
    "сочи": { code: "AER", country: "Россия", translitLower: "sochi" },
    "казань": { code: "KZN", country: "Россия", translitLower: "kazan" },
    "екатеринбург": { code: "SVX", country: "Россия", translitLower: "ekaterinburg" },
    "новосибирск": { code: "OVB", country: "Россия", translitLower: "novosibirsk" },
    "краснодар": { code: "KRR", country: "Россия", translitLower: "krasnodar" },
    "минеральные воды": { code: "MRV", country: "Россия", translitLower: "mineralnye-vody" },
    "калининград": { code: "KGD", country: "Россия", translitLower: "kaliningrad" },
    "владивосток": { code: "VVO", country: "Россия", translitLower: "vladivostok" },
    "иркутск": { code: "IKT", country: "Россия", translitLower: "irkutsk" },
    "байкал": { code: "IKT", country: "Россия", translitLower: "baykal" },
    "архангельск": { code: "ARH", country: "Россия", translitLower: "arkhangelsk" },
    "мурманск": { code: "MMK", country: "Россия", translitLower: "murmansk" },
    "петропавловск-камчатский": { code: "PKC", country: "Россия", translitLower: "petropavlovsk-kamchatskiy" },
    "камчатка": { code: "PKC", country: "Россия", translitLower: "kamchatka" },
    "алтай": { code: "BAX", country: "Россия", translitLower: "altay" },
    "кисловодск": { code: "MRV", country: "Россия", translitLower: "kislovodsk" },
    "пятигорск": { code: "MRV", country: "Россия", translitLower: "pyatigorsk" },
    "геленджик": { code: "GDZ", country: "Россия", translitLower: "gelendzhik" },
    "анапа": { code: "AAQ", country: "Россия", translitLower: "anapa" },
    "вологда": { code: "VGD", country: "Россия", translitLower: "vologda" },
    "череповец": { code: "CEE", country: "Россия", translitLower: "cherepovets" },
    "майкоп": { code: "MRV", country: "Россия", translitLower: "maykop" },
    "адыгея": { code: "MRV", country: "Россия", translitLower: "maykop" },
    "нижний новгород": { code: "GOJ", country: "Россия", translitLower: "nizhny-novgorod" },
    "самара": { code: "KUF", country: "Россия", translitLower: "samara" },
    "омск": { code: "OMS", country: "Россия", translitLower: "omsk" },
    "ростов-на-дону": { code: "ROV", country: "Россия", translitLower: "rostov-na-donu" },
    "уфа": { code: "UFA", country: "Россия", translitLower: "ufa" },
    "красноярск": { code: "KJA", country: "Россия", translitLower: "krasnoyarsk" },
    "пермь": { code: "PEE", country: "Россия", translitLower: "perm" },
    "воронеж": { code: "VOZ", country: "Россия", translitLower: "voronezh" },
    "волгоград": { code: "VOG", country: "Россия", translitLower: "volgograd" },
    "саратов": { code: "RTW", country: "Россия", translitLower: "saratov" },
    "тюмень": { code: "TJM", country: "Россия", translitLower: "tyumen" },
    "тольятти": { code: "KUF", country: "Россия", translitLower: "tolyatti" },
    "ижевск": { code: "IJK", country: "Россия", translitLower: "izhevsk" },
    "барнаул": { code: "BAX", country: "Россия", translitLower: "barnaul" },
    "ульяновск": { code: "ULY", country: "Россия", translitLower: "ulyanovsk" },
    "симферополь": { code: "SIP", country: "Россия", translitLower: "simferopol" },
    "севастополь": { code: "UKS", country: "Россия", translitLower: "sevastopol" },
    "ялта": { code: "SIP", country: "Россия", translitLower: "yalta" },
    
    // Ближнее зарубежье
    "минск": { code: "MSQ", country: "Беларусь", translitLower: "minsk" },
    "алматы": { code: "ALA", country: "Казахстан", translitLower: "almaty" },
    "астана": { code: "NQZ", country: "Казахстан", translitLower: "astana" },
    "ташкент": { code: "TAS", country: "Узбекистан", translitLower: "tashkent" },
    "самарканд": { code: "SKD", country: "Узбекистан", translitLower: "samarkand" },
    "бухара": { code: "BHK", country: "Узбекистан", translitLower: "bukhara" },
    "баку": { code: "GYD", country: "Азербайджан", translitLower: "baku" },
    "ереван": { code: "EVN", country: "Армения", translitLower: "erevan" },
    "тбилиси": { code: "TBS", country: "Грузия", translitLower: "tbilisi" },
    "батуми": { code: "BUS", country: "Грузия", translitLower: "batumi" },
    
    // Европа
    "берлин": { code: "BER", country: "Германия", translitLower: "berlin" },
    "мюнхен": { code: "MUC", country: "Германия", translitLower: "munich" },
    "париж": { code: "PAR", country: "Франция", translitLower: "paris" },
    "рим": { code: "FCO", country: "Италия", translitLower: "rome" },
    "милан": { code: "MIL", country: "Италия", translitLower: "milan" },
    "барселона": { code: "BCN", country: "Испания", translitLower: "barcelona" },
    "мадрид": { code: "MAD", country: "Испания", translitLower: "madrid" },
    "прага": { code: "PRG", country: "Чехия", translitLower: "prague" },
    "вена": { code: "VIE", country: "Австрия", translitLower: "vienna" },
    "лондон": { code: "LON", country: "Великобритания", translitLower: "london" },
    "амстердам": { code: "AMS", country: "Нидерланды", translitLower: "amsterdam" },
    
    // Турция и Египет
    "анталья": { code: "AYT", country: "Турция", translitLower: "antalya" },
    "стамбул": { code: "IST", country: "Турция", translitLower: "istanbul" },
    "каир": { code: "CAI", country: "Египет", translitLower: "cairo" },
    "хургада": { code: "HRG", country: "Египет", translitLower: "hurghada" },
    
    // ОАЭ
    "дубай": { code: "DXB", country: "ОАЭ", translitLower: "dubai" },
    "абу-даби": { code: "AUH", country: "ОАЭ", translitLower: "abu-dhabi" },
    
    // Азия
    "пхукет": { code: "HKT", country: "Таиланд", translitLower: "phuket" },
    "бангкок": { code: "BKK", country: "Таиланд", translitLower: "bangkok" },
    "бали": { code: "DPS", country: "Индонезия", translitLower: "bali" },
    "сингапур": { code: "SIN", country: "Сингапур", translitLower: "singapore" },
    "токио": { code: "TYO", country: "Япония", translitLower: "tokyo" },
    "сеул": { code: "SEL", country: "Южная Корея", translitLower: "seoul" },
};

export const COUNTRY_CODES: Record<string, string> = {
    "Россия": "russia",
    "Беларусь": "belarus",
    "Казахстан": "kazakhstan",
    "Узбекистан": "uzbekistan",
    "Азербайджан": "azerbaijan",
    "Армения": "armenia",
    "Грузия": "georgia",
    "Турция": "turkey",
    "Египет": "egypt",
    "ОАЭ": "uae",
    "Таиланд": "thailand",
    "Германия": "germany",
    "Франция": "france",
    "Италия": "italy",
    "Испания": "spain",
    "Чехия": "czech_republic",
    "Австрия": "austria",
    "Великобритания": "united_kingdom",
    "Нидерланды": "netherlands",
};

export function findAirportCode(cityName: string) {
    if (!cityName) return null;
    
    const cityLower = cityName.toLowerCase().trim();
    
    // Точное совпадение
    if (AIRPORT_DATABASE[cityLower]) {
        return AIRPORT_DATABASE[cityLower];
    }
    
    // Частичное совпадение
    for (const [key, value] of Object.entries(AIRPORT_DATABASE)) {
        if (cityLower.includes(key) || key.includes(cityLower)) {
            return value;
        }
    }
    
    return null;
}

export function transliterate(text: string): string {
    const map: Record<string, string> = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
        'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
        'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
        'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
        ' ': '-', '-': '-'
    };
    
    return text.split('').map(char => {
        const lower = char.toLowerCase();
        return map[lower] || char;
    }).join('');
}

export function getNearestMajorCity(fromCity: string) {
    const fromCityLower = fromCity.toLowerCase();
    const spbRegion = ['санкт-петербург', 'петербург', 'спб', 'архангельск', 'мурманск', 'петрозаводск', 'вологда', 'псков', 'новгород', 'череповец'];
    
    for (let city of spbRegion) {
        if (fromCityLower.includes(city) || city.includes(fromCityLower)) {
            return { code: 'LED', name: 'Санкт-Петербург', translit: 'saint-petersburg' };
        }
    }
    
    return { code: 'MOW', name: 'Москва', translit: 'moscow' };
}
