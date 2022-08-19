/* eslint-disable quote-props,  comma-dangle */
"use strict";

// Colores
const c = {
	"w": "#ffffff", // Blanco
	"br": "#bc8f8f", // Marrón
	"o": "#ffc6d00", // Naranja
	"p": "#ed5d92", // Rosado
	"lp": "#ffb7c5", // Rosado claro
	"r": "#ff0606", // Rojo
	"g": "#f04ff1c", // Verde
	"lg": "#f4ee35d", // Verde claro
	"v": "#f8f127e", // Violeta
	"lv": "#f9f00d4", // Violeta claro
	"b": "#f004eff", // Azul
	"lb": "#08b3e5", // Azul claro
	"gr": "#778899", // Gris
	"y": "#fdff00", // Amarillo
};

// Registros de claves disponibles:
//   name    -- Nombre del elemento del menú
//   color   -- Color del elemento del menú
//   keybind -- Configuración de teclas de acceso rápido
//   ifcmd   -- Filtrar (mostrar) un elemento de menú si se encuentra el comando especificado
//   ifnocmd -- Filtrar (mostrar) un elemento del menú si no se encuentra el comando especificado
//   class   -- Filtrar (mostrar) elemento de menú por clase de juego:
//                  warrior, lancer, slayer, berserker, sorcerer, archer, priest,
//                  elementalist, soulless, engineer, fighter, assassin, glaiver
//
// Comandos incorporados:
//   mm et  [quest] [instance] -- Teletransportación de vanguardia
//   mm use [id Artículos]      -- Usar artículo del inventario

// Configuración de tragamonedas premium
module.exports.premium = [
	// { command: "bank", id: 60264 },
	// { command: "broker", id: 60265 },
	// { command: "store", id: 60262 },
];

// Configuración del menú
module.exports.categories = {
	"Comerciantes": [
		{ command: "bank", name: "Banco", color: c.lp },
		{ command: "pbank", name: "Banco de Mascota", color: c.lp },
		{ command: "cbank", name: "Banco de Ropas", color: c.lp },
		{ command: "gbank", name: "Banco de Guild", color: c.lp },
		{ command: "ab", name: "Auto Banco", color: c.p, ifcmd: "ab" },
		{},
		{ command: "broker", name: "Broker", color: c.lb },
		{ command: "store", name: "Merchant", color: c.g },
		{ command: "sstore", name: "Specialty", color: c.g },
		{ command: "ssstore", name: "Magic", color: c.lg },
		{ command: "bel", name: "Belicarium", color: c.v },
		{},
		{ command: "vng", name: "Vanguard", color: c.b },
		{ command: "vgc", name: "Crystal", color: c.b },
		{ command: "guard", name: "Master Supplies", color: c.lb },
		{ command: "ffstore", name: "Fish", color: c.w },
		{ command: "vstore", name: "Peddler's", color: c.lb },
		{},
		{ command: "acraft", name: "Alchemy", color: c.y },
		{ command: "scraft", name: "Smelting", color: c.y },
		{ command: "pcraft", name: "Processing", color: c.y },
		{ command: "ecraft", name: "Etching", color: c.y },
		{ command: "fstore", name: "Food", color: c.y },		
		{ command: "m $Merchant", name: "Comerciante", color: c.o, ifcmd: "bh" },
		{},
		{ command: "muhrak", name: "Muhrak", color: c.r },		
	],
		"Principal": [
		{ command: "tp zone", name: "Teleport", color: c.b, ifcmd: "tp" },
		{ command: "tp to", name: "Zona", color: c.r, ifcmd: "tp" },
		{ command: "m $Dung", name: "Dungeons", color: c.y, ifnocmd: "dg" },
		{ command: "dg", name: "Dungeons", color: c.y, ifcmd: "dg" },
		{ command: "box", name: "OpenBox", color: c.v, ifcmd: "box" },
		{ ifcmd: "tp"},
		{ command: "translate send", name: "Autotraducir", color: c.lb, ifcmd: "translate" },
		{ command: "food", name: "AutoFood", color: c.p, ifcmd: "food" },
		{ command: "loot auto", name: "AutoLoot", color: c.lp, ifcmd: "loot" },
		{ ifcmd: "bh"},
		{ command: "mm", name: "Mystery-Merchant", color: c.y, ifcmd: "bh" },
		{ command: "mm scan", name: "Búsqueda", color: c.o, ifcmd: "bh" },
		{ command: "mm stop", name: "Detener", color: c.r, ifcmd: "bh" },
		{ command: "mm loc", name: "Ubicaciones", color: c.b, ifcmd: "bh" },
		{ command: "bh move", name: "Teleport al npc", color: c.lg, ifcmd: "tr" },
	    { ifcmd: "bh"},
		{ command: "wb", name: "World-Boss", color: c.lb, ifcmd: "bh" },
		{ command: "wb scan", name: "Búsqueda", color: c.o, ifcmd: "bh" },
		{ command: "wb stop", name: "Detener", color: c.r, ifcmd: "bh" },
		{ command: "wb loc", name: "Ubicaciones", color: c.b, ifcmd: "bh" },
		],
	"Módulos": [
		{ command: "pot", name: "AutoPot", color: c.lb, ifcmd: "pot" },
		{ command: "camera", name: "CameraControl", color: c.g, ifcmd: "camera" },
		{ command: "u ui", name: "Unicast", color: c.p, ifcmd: "u" },
		{ command: "ngsp ui", name: "NGSP", color: c.r, ifcmd: "ngsp" },
		{ command: "fps", name: "FPS Menú", color: c.y, ifcmd: "fps" },
	],
	"Misceláneas": [
		{ command: "m drop", name: "Salir del grupo", color: c.y },
		{ command: "m reset", name: "Reiniciar", color: c.g },
		{ command: "m lobby", name: "Selección de PJ", color: c.p },
		{ command: "m exit", name: "Salida Rápida", color: c.r },
		{},		
		{ command: "m et 98311 9069", name: "Highwatch", color: c.o,},	
		{ command: "invg", name: "Auto Guild", color: c.lg, ifcmd: "invg" },
		{ command: "lfg", name: "Auto LFG", color: c.lg, ifcmd: "lfg" },
		{ifcmd: "cc", ifcmd: "ar"},
		{ command: "cc", name: "AntiCC", color: c.lp, ifcmd: "cc" },
		{ command: "ar", name: "AutoRetaliate", color: c.lp, ifcmd: "ar" },
		{ ifcmd: "drk"},		
		{ command: "drk", name: "Alas de Darkan", color: c.p, ifcmd: "drk" },
		{ ifcmd: "tp"},		
	//	{ command: "tp back", name: "Cancelar tp", color: c.o, ifcmd: "tp" },
		{ command: "tp blink 100", name: "TP Adelante", ifcmd: "tp" },
		{ command: "tp up 500", name: "TP Arriba", ifcmd: "tp" },
		{ command: "tp down 250", name: "TP Abajo", ifcmd: "tp" },
		{ command: "tp drop -1", name: "Suicidarte", color: c.r, ifcmd: "tp" },
	],	
	"Guía (Tera-Guía)": [
		{ command: "guia", name: "On/off", color: c.o },
		{ command: "guia ui", name: "GUI", ifcmd: "guia" },
		{ command: "guia voice", name: "Texto a Voz (TTS)", color: c.y, ifcmd: "guia" },
		{ command: "guia spawnObject", name: "Objetos", color: c.y, ifcmd: "guia" },
		{ command: "guia stream", name: "Stream", color: c.lb, ifcmd: "guia" },
		{},
		{ command: "m $Lang", name: "Idioma", color: c.g, ifcmd: "guia" },
		{ command: "m $Gender", name: "Género", color: c.p, ifcmd: "guia" },
		{ command: "guia help", name: "Ayuda", color: c.y, ifcmd: "guia" },
		{ command: "guia debug ui", name: "Debug", color: c.r, ifcmd: "guia" },
	],
	"Debug": [
		{ command: "npcsummoner", name: "Debug_NPC", color: c.y, ifcmd: "npcsummoner" },
	],
};
module.exports.pages = {
    "Dung": {
		"Teletransportarse a las dungeons": [
		{ command: "m et 1106 9027", name: "Manaya's Core", color: c.r },
		{},
		{ command: "m et 2162 9044", name: "Bahaar's Sanctum", color: c.r },
		{},
		{ command: "m et 2169 3026", name: "Corrupted Skynest", color: c.r },
		{},
		{ command: "m et 2149 9716", name: "Sky Cruiser", color: c.r },
		{},
		{ command: "m et 98356 2050", name: "Commander Residence", color: c.y },
		{},
		{ command: "m et 2171 3027", name: "Forbidden Arena", color: c.v },
		{},
		{ command: "m et 2173 3102", name: "Draakon Arena", color: c.v },
		{},
		{ command: "m et 2181 9757", name: "Akeron's Inferno", color: c.lv },	
		{},
		{ command: "m et 2168 3023", name: "Akalath Quarantine", color: c.o },
		{},		
		{ command: "m et 2167 3201", name: "Gossamer Vault", color: c.lg },
		{},
		{ command: "m et 2129 9070", name: "Manglemire", color: c.lg },
		{},
		{ command: "m et 2142 9781", name: "Velik's Sanctuary", color: c.lg },
		{},
		{ command: "m et 2140 9780", name: "Velik's Hold", color: c.lg },
		{},
		{ command: "m et 2122 9811", name: "Abscess", color: c.o },
		{},
		{ command: "m et 2175 9053", name: "Kezzel Gorge", color: c.lb },		
		{},
		{ command: "m et 2103 9754", name: "Bathysmal Rise", color: c.lb },
		{},
		{ command: "m et 2137 9770", name: "Ruinous Manor", color: c.o },
		{},
		{ command: "m et 2133 9769", name: "Lilith's Keep", color: c.y },
		{},
		{ command: "m et 2150 9055", name: "Ravenous Gorge", color: c.y },
		{},
		{ command: "m et 2139 9710", name: "Broken Prison", color: c.lg },
		{},
		{ command: "m et 2101 9809", name: "Macellarius Catacombs", color: c.g },
		{},
		{ command: "m et 2154 9739", name: "Red Refuge", color: c.o },
		{},
		{ command: "m et 2152 9735", name: "RK-9 Kennel", color: c.g },
		{},
		{ command: "m et 2328 13", name: "Bam", color: c.o },
		{},
		{ command: "m et 7001 230", name: "Sun Feslival", color: c.o },
		{},
		{ command: "m et 7003 210", name: "Beach Party", color: c.o },
		{},
		{ command: "m et 800002 9088", name: "Sinestral Manor", color: c.lb },
		{},
		{ command: "m et 800003 9979", name: "Saravash's Ascent", color: c.lb },
		{},
		{ command: "m et 800004 9089", name: "Cultists' Refuge", color: c.lb },
		{},
		{ command: "m et 800005 9071", name: "Necromancer Tomb", color: c.lb },
		{},
		{ command: "m et 800006 9072", name: "Golden Labyrinth", color: c.lb },
		{},
		{ command: "m et 800009 9076", name: "Labyrinth of Terror", color: c.lb },
		{},
		{ command: "m et 800010 9073", name: "Ebon Tower", color: c.lb },
		{},
	]
},
 "Merchant": {
	"Mystery-Merchant": [
		{ command: "m et 98311 9069", name: "Highwatch", color: c.o,},
		{ command: "mm", name: "Mystery-Merchant", color: c.y, ifcmd: "bh" },
		{ command: "mm scan", name: "Búsqueda", color: c.g, ifcmd: "bh" },
		{ command: "mm stop", name: "Detener", color: c.r, ifcmd: "bh" },
		{ command: "mm loc", name: "Ubicaciónes", color: c.b, ifcmd: "bh" },
	],
	"Neighborhood": [
		{ command: "veracun", name: "Veracun (Velika)", color: c.y },
		{},
		{ command: "alluman", name: "Alluman (Allemantheia)", color: c.y },
		{},
		{ command: "kaidera", name: "Kaidera (Kaiator)", color: c.y },
		{},
		{ command: "vardung", name: "Vardung (Island of Dawn)", color: c.lp },
	],	
	"Val-Oriyn": [		
		{ command: "varrek1", name: "Varrek (Savage Reach)", color: c.lb },
		{},
		{ command: "varrek2", name: "Varrek (Ex-Prima)", color: c.lb },
		{},
		{ command: "varrek3", name: "Varrek (Spring Valley)", color: c.lb },
		{},
		{ command: "varrek4", name: "Varrek (Highwatch)", color: c.lb },
		{},
		{ command: "varrek5", name: "Varrek (Arx-Umbra)", color: c.lb },
	],	
	"Arcadia": [
		{ command: "arcun1", name: "Arcun (Forest / Lumbertown)", color: c.y },
		{},
		{ command: "arcun2", name: "Arcun (Oblivion Woods / Кресцентия)", color: c.y },
		{},
		{ command: "arcun3", name: "Arcun (Tuwangi)", color: c.y },
		{},
		{ command: "arcun4", name: "Arcun (Valley of the Titans)", color: c.y },
		{},
		{ command: "arcun5", name: "Arcun (Silent Hills)", color: c.y },
	],	
	"Val-Aureum": [
		{ command: "viady1", name: "Viadu (Исполинские развалины)", color: c.lg },
		{},
		{ command: "viady2", name: "Viadu (Вольноземье)", color: c.lg },
		{},
		{ command: "viady3", name: "Viadu (Утес Василисков / Чебика)", color: c.lg },
		{},
		{ command: "viady4", name: "Viadu (Аурумская дорога / Тулуфан)", color: c.lg },
	],	
	"Ostgarath": [		
		{ command: "eteral1", name: "Eteral (Фирмаунт)", color: c.o },
		{},		
		{ command: "eteral2", name: "Eteral (Долина Вознесения / Кастаника)", color: c.o },
		{},		
		{ command: "eteral3", name: "Eteral (Остров Серпентис)", color: c.o },
		{},		
		{ command: "eteral4", name: "Eteral (Изрезанный берег / Гавань Головорезов)", color: c.o },
		{},		
		{ command: "eteral5", name: "Eteral (Остров Мистмур)", color: c.o },
	],	
	"Poporia": [		
		{ command: "foretta1", name: "Foretta (Утесы Безумия)", color: c.p },
		{},
		{ command: "foretta2", name: "Foretta (Долина Клыка)", color: c.p },
		{},
		{ command: "foretta3", name: "Foretta (Ущелье Параанон / Пополион)", color: c.p },
		{},
		{ command: "foretta4", name: "Foretta (Озеро слез / Пора-Элину)", color: c.p },
	],
	"Essenia": [		
		{ command: "ezart1", name: "Ezart (Блаженное озеро / Тралион)", color: c.r },
		{},		
		{ command: "ezart2", name: "Ezart (Эссенийский хребет)", color: c.r },
		{},		
		{ command: "ezart3", name: "Ezart (Гибельный лес)", color: c.r },
		{},		
		{ command: "ezart4", name: "Ezart (Извечный лес)", color: c.r },
		{},		
		{ command: "ezart5", name: "Ezart (Извечный лес 2)", color: c.r },
	],
	"Westonia": [		
		{ command: "storan1", name: "Storan (Предел Бурь)", color: c.g },
		{},
		{ command: "storan2", name: "Storan (Гора Тираннас / Akarum)", color: c.g },
		{},
		{ command: "storan3", name: "Storan (Морозный предел / Блеклый камень)", color: c.g },
	],
	"Veritas District": [		
		{ command: "versa1", name: "Versa (Убежище Балдера / Бастион)", color: c.o },
	],
	"Val-Elenium": [		
		{ command: "viace1", name: "Viace (Вирмовое ущелье / Эления)", color: c.lp },
		{},		
		{ command: "viace2", name: "Viace (Тор-Эксул)", color: c.lp },
		{},		
		{ command: "viace3", name: "Viace (Каньон Сиенна)", color: c.lp },
	],
	"Val-Palrada": [		
		{ command: "vaneva1", name: "Vaneva (Зона карантина / Фронтера)", color: c.lg },
		{},
		{ command: "vaneva2", name: "Vaneva (Свирепая долина)", color: c.lg },
	],
	"Silvanot/Loakun": [
		{ command: "loacun1", name: "Loahcun (Долина пиков)", color: c.lv },
		{},
		{ command: "loacun2", name: "Loahcun (Долина Проклятых / Хабере)", color: c.lv },	
		{},	
		{ command: "silvette1", name: "Silvette (Силивуд / Скитера-Фэй)", color: c.lv },
		{},
		{ command: "silvette2", name: "Silvette (Дрожащий лес / Дрэгонфолл)", color: c.lv },
		{},
		{ command: "silvette3", name: "Silvette (Шепчущие леса)", color: c.lv },
		{},
		{ command: "silvette4", name: "Silvette (Амена-Кватла)", color: c.lv },
	],
	"Val-Tirkai": [		
		{ command: "lotica1", name: "Lotica (Питомник аргонов / Аванпост следопытов)", color: c.br },
		{},
		{ command: "lotica2", name: "Lotica (Лес Тиркай)", color: c.br },
	],
	"РHelkan-District": [		
		{ command: "hecurn", name: "Hecurn (Хановарские предместья / Зульфикарская крепость)", color: c.bl },
	],
	"Val Kaeli": [		
		{ command: "locarnum1", name: "Locarnum (Аргония / Канстрия)", color: c.o },
		{},
		{ command: "locarnum2", name: "Locarnum (Гранаркус)", color: c.o },
	]
},
 "Lang": {
	"Cambiar el idioma": [
		{ command: "guia auto", name: "Auto", color: c.w, ifcmd: "guia" },
		{},
		{ command: "guia en", name: "Ingles", color: c.b, ifcmd: "guia" },
		{},
		{ command: "guia es", name: "Español", color: c.g, ifcmd: "guia" },
	]
},
 "Gender": {
	"Cambiar Género de voz": [
		{ command: "guia male", name: "Masculino", color: c.g, ifcmd: "guia" },
		{},
		{ command: "guia female", name: "Femenino", color: c.p, ifcmd: "guia" },
	]
  }
};