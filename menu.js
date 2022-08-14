/* eslint-disable quote-props,  comma-dangle */
"use strict";

// Colores
const c = {
	"w": "#ffffff", // Blanco
	"br": "#bc8f8f", // Marrón
	"o": "#ffc6d00", // Naranja
	"p": "#ed5d92", // Rosado
	"lp": "#ffb7c5", // Rosado-Claro
	"r": "#ff0606", // Rojo
	"g": "#f04ff1c", // Verde
	"lg": "#f4ee35d", // Verde-Claro
	"v": "#f8f127e", // Violeta
	"lv": "#f9f00d4", // Violeta-Claro
	"b": "#f004eff", // Azul
	"lb": "#08b3e5", // Azul-Claro
	"gr": "#778899", // Gris
	"y": "#fdff00", // Amarillo
};

// Claves de registro disponibles:
//   name    -- El nombre del elemento del menú
//   color   -- El color del elemento del menú
//   keybind -- Configuración de teclas de acceso rápido
//   ifcmd   -- Filtrar (mostrar) un elemento de menú si se encuentra el comando especificado
//   ifnocmd -- Filtrar (mostrar) un elemento del menú si no se encuentra el comando especificado
//   class   -- Filtrar (mostrar) elemento de menú por clase de juego:
//                  warrior, lancer, slayer, berserker, sorcerer, archer, priest,
//                  elementalist, soulless, engineer, fighter, assassin, glaiver
//
// Comandos incorporados:
//   mm et  [quest] [instance] -- Teletransportación de vanguardia (Presionando la tecla H)
//   mm use [id Artículo]      -- Usar artículo del inventario

// Configuración de Comerciantes premium
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
		{},
		{ command: "ab", name: "Auto Banco", color: c.p, ifcmd: "ab" },
		{},
		{ command: "broker", name: "Broker", color: c.lb },
		{ command: "store", name: "Merchant", color: c.g },
		{ command: "sstore", name: "Specialty Store", color: c.g },
		{ command: "ssstore", name: "Magic Material", color: c.lg },
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
		{},
		{ command: "muhrak", name: "Muhrak", color: c.r },
	],
	"Principal": [
		{ command: "tp zone", name: "Teleport", color: c.b, ifcmd: "tp" },
		{ command: "tp to", name: "Zona", color: c.r, ifcmd: "tp" },
		{ command: "m $Dang", name: "Dungeons", color: c.y, ifnocmd: "dg" },
		{ command: "dg", name: "Dungeons", color: c.y, ifcmd: "dg" },
		{ command: "box", name: "OpenBox", color: c.v, ifcmd: "box" },
		{ command: "m $Merchant", name: "Merchants", color: c.o },
		{ifcmd: "tp"},
	//	{ command: "tp back", name: "Cancelar tp", color: c.o, ifcmd: "tp" },
		{ command: "tp blink 100", name: "TP Adelante", ifcmd: "tp" },
		{ command: "tp up 500", name: "TP Arriba", ifcmd: "tp" },
		{ command: "tp down 250", name: "TP Abajo", ifcmd: "tp" },
		{ command: "tp drop -1", name: "Suicidarte", color: c.r, ifcmd: "tp" },
		{ifcmd: "tp"},
		{ command: "translate send", name: "AutoTraducir", color: c.lb, ifcmd: "translate" },
		{ command: "food", name: "AutoFood", color: c.p, ifcmd: "food" },
		{ command: "loot auto", name: "AutoLoot", color: c.lp, ifcmd: "loot" },
		{ command: "cc", name: "AntiCC", color: c.lp, ifcmd: "cc" },
		{ command: "ar", name: "AutoRetaliate", color: c.lp, ifcmd: "ar" },
		{ifcmd: "bh"},
		{ command: "mm", name: "Mystery-Merchant", color: c.y, ifcmd: "bh" },
		{ command: "mm scan", name: "Búsqueda", color: c.o, ifcmd: "bh" },
		{ command: "mm stop", name: "Detener", color: c.r, ifcmd: "bh" },
		{ command: "mm loc", name: "Ubicaciones", color: c.b, ifcmd: "bh" },
		{ command: "bh move", name: "Teleport al npc", color: c.lg, ifcmd: "tr" },
	    {ifcmd: "bh"},
		{ command: "wb", name: "World-Boss", color: c.lb, ifcmd: "bh" },
		{ command: "wb scan", name: "Búsqueda", color: c.o, ifcmd: "bh" },
		{ command: "wb stop", name: "Detener", color: c.r, ifcmd: "bh" },
		{ command: "wb loc", name: "Ubicaciones", color: c.b, ifcmd: "bh" },
		],
	"Módulos": [
		{ command: "m $Loger", name: "$$$$$$$$", color: c.r, ifcmd: "valkyrie", ifcmd: "sorc", ifcmd: "aoe", ifcmd: "logc" },
		{ command: "pot", name: "AutoPot", color: c.lb, ifcmd: "pot" },
		{ command: "camera", name: "CameraControl", color: c.g, ifcmd: "camera" },
		{ command: "u ui", name: "Unicast", color: c.p, ifcmd: "u" },
		{ command: "ngsp ui", name: "NGSP", color: c.r, ifcmd: "ngsp" },
		{ command: "fps", name: "FPS Menú", color: c.y, ifcmd: "fps" },
	],
	"Misceláneas": [
		{ command: "m drop", name: "Salir del grupo", color: c.y },
		{ command: "m reset", name: "Reiniciar", color: c.g },
		{ command: "m lobby", name: "Selección de Personajes", color: c.p },
		{},				
		{ command: "m exit", name: "Salida Rápida", color: c.r },
		{ command: "m et 98311 9069", name: "Highwatch", color: c.o,},	
		{ command: "invg", name: "Auto Guild", color: c.lg, ifcmd: "invg" },
		{ command: "lfg", name: "Auto LFG", color: c.lg, ifcmd: "lfg" },
		{ifcmd: "drk"},
		{ command: "drk", name: "Alas de Darkan", color: c.p, ifcmd: "drk" },
		
	],	
	"Tera Guía": [
		{ command: "guia", name: "On/Off", color: c.o },
		{ command: "guia gui", name: "Configuración", ifcmd: "guia" },
		{ command: "guia voice", name: "Texto a Voz", color: c.y, ifcmd: "guia" },
		{ command: "guia spawnObject", name: "Objetos", color: c.y, ifcmd: "guia" },
		{ command: "guia stream", name: "Stream", color: c.lb, ifcmd: "guia" },
		{ command: "guia debug ui", name: "Debug", color: c.b, ifcmd: "guia" },
	],
};
module.exports.pages = {
    "Dang": {		
		"Teleport a las Dungeons": [
		{ command: "m et 1106 9027", name: "Manaya's Core", color: c.r },
		{},
		{ command: "m et 2162 9044", name: "Bahaar's Sanctum", color: c.r },
		{},
		{ command: "m et 2169 3026", name: "Corrupted Skynest", color: c.r },
		{},
		{ command: "m et 2149 9716", name: "Sky Cruiser", color: c.r },
		{},
		{ command: "m et 2171 3027", name: "Forbidden Arena", color: c.v },
		{},
		{ command: "m et 2181 9757", name: "Akeron's Inferno", color: c.lv },	
		{},
		{ command: "m et 2167 3201", name: "Gossamer Vault", color: c.lg },
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
	]
},
 "Merchant": {
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
	],
},
"Loger":{
   "$Mod$": [
	   { command: "sorc", name: "Sorc on/off", color: c.r, ifcmd: "sorc", class: "sorcerer" },
	   { command: "sorc ui", name: "Sorc", color: c.lb, ifcmd: "sorc", class: "sorcerer" },
	   { command: "sorc automb", name: "Amp", color: c.o, ifcmd: "sorc", class: "sorcerer" },
	   { command: "sorc autoimp", name: "Collapse", color: c.o, ifcmd: "sorc", class: "sorcerer" },
	   { command: "sorc usebrooch", name: "Brooch", color: c.o, ifcmd: "sorc", class: "sorcerer" },
	   { ifcmd: "sorc" },
	   { command: "rod", name: "Rod", color: c.g, ifcmd: "rog", class: "priest" },
	   { command: "aoe", name: "AOE", color: c.o, ifcmd: "aoe", class: "priest" },
	   { command: "aoe distance 20", name: "AOE 20", color: c.v, ifcmd: "aoe", class: "priest" },
	   { command: "aoe distance 100", name: "AOE 100", color: c.v, ifcmd: "aoe", class: "priest" },
	   {ifcmd: "aoe", ifcmd: "rod"},
	   { command: "valkyrie", name: "Fast-Valk", color: c.o, ifcmd: "valkyrie", class: "glaiver" },
   ],
"Loger": [
   { command: "proxy reload packetslogger", name: "Recarga del registrador", color: c.p, ifcmd: "logs" },
   {ifcmd: "logs"},
   { command: "logc", name: "LOG C", color: c.bl, ifcmd: "logc" },
   { command: "logs", name: "LOG S", color: c.o, ifcmd: "logs" },
   {ifcmd: "logs"},
   { command: "lograw 1", name: "Raw on ", color: c.g, ifcmd: "logs" },
   { command: "lograw 0", name: "Raw off", color: c.r, ifcmd: "logs" },
//	{ command: "logpaste", name: "Paste", color: c.y, ifcmd: "logs" },
   {ifcmd: "logs"},
   { command: "sr", name: "Skil Main on/off", color: c.g, ifcmd: "sr" },
   { command: "sr r", name: "Skil Main reload", color: c.r, ifcmd: "sr" },
   {ifcmd: "sr"},		
   { command: "npcsummoner", name: "NPC_Debug", color: c.y, ifcmd: "npcsummoner" },
	]
}
};