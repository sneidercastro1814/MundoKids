import { useState } from "react";

/*  QUESTION BANK: 6 subjects × 3 levels × 20 questions = 360 total */
const Q = {
  math: {
    0: [
      {q:"¿Cuánto es 3 + 4?",o:["5","6","7","8"],c:2,e:"3 + 4 = 7"},
      {q:"¿Cuánto es 10 - 3?",o:["6","7","8","9"],c:1,e:"10 - 3 = 7"},
      {q:"¿Cuánto es 2 × 5?",o:["8","9","10","11"],c:2,e:"2 × 5 = 10"},
      {q:"¿Cuántos lados tiene un triángulo?",o:["2","3","4","5"],c:1,e:"3 lados"},
      {q:"¿Cuánto es 6 + 6?",o:["10","11","12","13"],c:2,e:"6 + 6 = 12"},
      {q:"¿Cuánto es 15 - 8?",o:["5","6","7","8"],c:2,e:"15 - 8 = 7"},
      {q:"¿Cuánto es 3 × 3?",o:["6","8","9","12"],c:2,e:"3 × 3 = 9"},
      {q:"¿Cuánto es 20 ÷ 4?",o:["4","5","6","7"],c:1,e:"20 ÷ 4 = 5"},
      {q:"¿Qué número viene después del 99?",o:["98","100","101","999"],c:1,e:"100"},
      {q:"¿Cuántas decenas hay en 50?",o:["3","4","5","6"],c:2,e:"5 decenas"},
      {q:"¿Cuánto es 8 + 7?",o:["13","14","15","16"],c:2,e:"8 + 7 = 15"},
      {q:"¿Qué figura tiene 4 lados iguales?",o:["Triángulo","Círculo","Cuadrado","Pentágono"],c:2,e:"Cuadrado"},
      {q:"¿Cuánto es 5 + 9?",o:["12","13","14","15"],c:2,e:"5 + 9 = 14"},
      {q:"¿Cuánto es 18 - 9?",o:["7","8","9","10"],c:2,e:"18 - 9 = 9"},
      {q:"¿Cuánto es 4 × 4?",o:["12","14","16","18"],c:2,e:"4 × 4 = 16"},
      {q:"¿Cuánto es 12 ÷ 3?",o:["3","4","5","6"],c:1,e:"12 ÷ 3 = 4"},
      {q:"¿Qué número es mayor: 47 o 74?",o:["47","74","Iguales","Ninguno"],c:1,e:"74 > 47"},
      {q:"¿Cuántos lados tiene un hexágono?",o:["4","5","6","8"],c:2,e:"6 lados"},
      {q:"¿Cuánto es 7 + 5?",o:["11","12","13","14"],c:1,e:"7 + 5 = 12"},
      {q:"¿Cuánto es 2 × 8?",o:["14","15","16","18"],c:2,e:"2 × 8 = 16"}
    ],
    1: [
      {q:"¿Cuánto es 45 + 38?",o:["73","83","84","93"],c:1,e:"83"},
      {q:"¿Cuánto es 7 × 8?",o:["54","56","58","63"],c:1,e:"56"},
      {q:"¿Cuánto es ½ de 80?",o:["20","30","40","50"],c:2,e:"40"},
      {q:"¿Cuánto es 9 × 9?",o:["72","80","81","90"],c:2,e:"81"},
      {q:"¿Cuántos minutos tiene 1 hora?",o:["30","45","60","100"],c:2,e:"60"},
      {q:"¿Cuánto es 144 ÷ 12?",o:["10","11","12","13"],c:2,e:"12"},
      {q:"¿Cuánto es 25 × 4?",o:["75","90","100","125"],c:2,e:"100"},
      {q:"¿Qué es un número par?",o:["Termina en 1,3,5","Termina en 0,2,4,6,8","Mayor que 10","Tiene 2 cifras"],c:1,e:"Termina en 0,2,4,6,8"},
      {q:"¿Cuánto es 1000 - 357?",o:["543","633","643","743"],c:2,e:"643"},
      {q:"Perímetro de cuadrado lado 5:",o:["10","15","20","25"],c:2,e:"P=4×5=20"},
      {q:"¿Cuánto es 6²?",o:["12","24","36","48"],c:2,e:"36"},
      {q:"¿Cuánto es 3/6 simplificado?",o:["1/3","1/2","2/3","2/6"],c:1,e:"1/2"},
      {q:"¿Cuánto es 11 × 11?",o:["111","121","131","141"],c:1,e:"121"},
      {q:"¿Cuánto es 250 + 750?",o:["900","950","1000","1100"],c:2,e:"1000"},
      {q:"¿Cuánto es 8 × 7?",o:["48","54","56","63"],c:2,e:"56"},
      {q:"¿Cuántos cm hay en 1 metro?",o:["10","50","100","1000"],c:2,e:"100 cm"},
      {q:"¿Cuánto es ¼ de 100?",o:["10","20","25","50"],c:2,e:"25"},
      {q:"¿Cuánto es 15 × 3?",o:["35","40","45","50"],c:2,e:"45"},
      {q:"¿Cuál es el doble de 35?",o:["60","65","70","75"],c:2,e:"70"},
      {q:"¿Cuánto es 96 ÷ 8?",o:["10","11","12","13"],c:2,e:"12"}
    ],
    2: [
      {q:"¿Cuánto es 256 × 4?",o:["924","1004","1024","1044"],c:2,e:"1024"},
      {q:"¿25% de 200?",o:["25","40","50","75"],c:2,e:"50"},
      {q:"¿Cuánto es 3/4 + 1/4?",o:["4/8","4/4","2/4","6/4"],c:1,e:"4/4 = 1"},
      {q:"Área rectángulo 8×5cm:",o:["26","30","40","45"],c:2,e:"40 cm²"},
      {q:"¿Cuánto es 2³?",o:["6","8","9","12"],c:1,e:"8"},
      {q:"¿Cuánto es √81?",o:["7","8","9","10"],c:2,e:"9"},
      {q:"MCM de 4 y 6:",o:["2","8","12","24"],c:2,e:"12"},
      {q:"¿15% de 300?",o:["30","35","40","45"],c:3,e:"45"},
      {q:"¿Cuánto es 5!?",o:["25","60","100","120"],c:3,e:"120"},
      {q:"Si x+7=15, x=?",o:["6","7","8","9"],c:2,e:"8"},
      {q:"¿0.5 × 0.5?",o:["0.1","0.25","0.50","1.0"],c:1,e:"0.25"},
      {q:"Volumen cubo lado 3:",o:["9","18","27","36"],c:2,e:"27 cm³"},
      {q:"¿√144?",o:["10","11","12","14"],c:2,e:"12"},
      {q:"¿3² + 4²?",o:["20","25","30","49"],c:1,e:"25"},
      {q:"¿30% de 150?",o:["30","40","45","50"],c:2,e:"45"},
      {q:"Si 2x=18, x=?",o:["6","7","8","9"],c:3,e:"9"},
      {q:"¿7/8 - 3/8?",o:["1/2","4/8","3/4","1/4"],c:0,e:"4/8 = 1/2"},
      {q:"Hipotenusa catetos 3 y 4:",o:["5","6","7","8"],c:0,e:"5"},
      {q:"¿10³?",o:["30","100","1000","10000"],c:2,e:"1000"},
      {q:"MCD de 12 y 18:",o:["2","3","6","9"],c:2,e:"6"}
    ]
  },
  english: {
    0: [
      {q:"'Perro' in English:",o:["Cat","Dog","Bird","Fish"],c:1,e:"Dog"},
      {q:"What color is the sky?",o:["Red","Blue","Green","Yellow"],c:1,e:"Blue"},
      {q:"'Manzana' in English:",o:["Orange","Banana","Apple","Grape"],c:2,e:"Apple"},
      {q:"Opposite of 'hot':",o:["Warm","Cool","Cold","Icy"],c:2,e:"Cold"},
      {q:"'Hola' in English:",o:["Bye","Hello","Thanks","Sorry"],c:1,e:"Hello"},
      {q:"Which animal can fly?",o:["Dog","Fish","Bird","Cat"],c:2,e:"Bird"},
      {q:"After 'nine' comes:",o:["Eight","Ten","Eleven","Seven"],c:1,e:"Ten"},
      {q:"Cat legs:",o:["2","4","6","8"],c:1,e:"4"},
      {q:"Color of grass:",o:["Blue","Red","Green","Yellow"],c:2,e:"Green"},
      {q:"'Gracias' in English:",o:["Sorry","Please","Thank you","Hello"],c:2,e:"Thank you"},
      {q:"After Monday:",o:["Sunday","Tuesday","Wednesday","Friday"],c:1,e:"Tuesday"},
      {q:"'Libro' in English:",o:["Table","Book","Chair","Pen"],c:1,e:"Book"},
      {q:"'Casa' in English:",o:["Car","House","Horse","Cat"],c:1,e:"House"},
      {q:"Opposite of 'big':",o:["Tall","Small","Fast","Long"],c:1,e:"Small"},
      {q:"'Agua' in English:",o:["Fire","Water","Wind","Earth"],c:1,e:"Water"},
      {q:"'Rojo' in English:",o:["Blue","Green","Red","Yellow"],c:2,e:"Red"},
      {q:"'Gato' in English:",o:["Dog","Cat","Rat","Bat"],c:1,e:"Cat"},
      {q:"After March:",o:["February","April","May","June"],c:1,e:"April"},
      {q:"'Escuela' in English:",o:["Store","School","Church","Hospital"],c:1,e:"School"},
      {q:"'Feliz' in English:",o:["Sad","Happy","Angry","Tired"],c:1,e:"Happy"}
    ],
    1: [
      {q:"Plural of 'child':",o:["Childs","Childes","Children","Childrens"],c:2,e:"Children"},
      {q:"'Beautiful' means:",o:["Feo","Pequeño","Hermoso","Rápido"],c:2,e:"Hermoso"},
      {q:"Past of 'run':",o:["Runned","Running","Ran","Runed"],c:2,e:"Ran"},
      {q:"'I ___ a student.'",o:["am","is","are","be"],c:0,e:"I am"},
      {q:"Opposite of 'always':",o:["Often","Sometimes","Never","Usually"],c:2,e:"Never"},
      {q:"Which is a verb?",o:["House","Beautiful","Jump","Quick"],c:2,e:"Jump"},
      {q:"'She ___ to school.'",o:["go","goes","going","goed"],c:1,e:"goes"},
      {q:"'Library' means:",o:["Librería","Biblioteca","Libre","Libreta"],c:1,e:"Biblioteca"},
      {q:"Past of 'eat':",o:["Eated","Eating","Ate","Eaten"],c:2,e:"Ate"},
      {q:"'How old ___ you?'",o:["is","am","are","be"],c:2,e:"are"},
      {q:"Plural of 'mouse':",o:["Mouses","Mices","Mice","Mousies"],c:2,e:"Mice"},
      {q:"'Kitchen' means:",o:["Baño","Sala","Cocina","Cuarto"],c:2,e:"Cocina"},
      {q:"Past of 'go':",o:["Goed","Goes","Went","Gone"],c:2,e:"Went"},
      {q:"'Newspaper' means:",o:["Periódico","Papel","Revista","Carta"],c:0,e:"Periódico"},
      {q:"'They ___ playing.'",o:["is","am","are","was"],c:2,e:"are"},
      {q:"Opposite of 'cheap':",o:["Free","Expensive","Small","Easy"],c:1,e:"Expensive"},
      {q:"'Breakfast' means:",o:["Almuerzo","Cena","Desayuno","Merienda"],c:2,e:"Desayuno"},
      {q:"Past of 'write':",o:["Writed","Wroted","Wrote","Written"],c:2,e:"Wrote"},
      {q:"'We ___ from Colombia.'",o:["is","am","are","be"],c:2,e:"are"},
      {q:"'Homework' means:",o:["Casa","Tarea","Trabajo","Hogar"],c:1,e:"Tarea"}
    ],
    2: [
      {q:"Present Perfect: 'I have ___'",o:["went","gone","go","going"],c:1,e:"gone"},
      {q:"'Perseverance' means:",o:["Pereza","Persistencia","Éxito","Talento"],c:1,e:"Persistencia"},
      {q:"Conditional sentence:",o:["She runs","If it rains, I'll stay","He sleeps","They went"],c:1,e:"If...will"},
      {q:"'Un-' prefix means:",o:["Again","Before","Not/opposite","Too much"],c:2,e:"Not/opposite"},
      {q:"Synonym of 'enormous':",o:["Tiny","Huge","Average","Thin"],c:1,e:"Huge"},
      {q:"Passive: 'Dog bit man'",o:["Man bit dog","Man was bitten","Man is biting","Dog was bit"],c:1,e:"Was bitten"},
      {q:"'Although' is a:",o:["Noun","Verb","Conjunction","Adverb"],c:2,e:"Conjunction"},
      {q:"'She ___ it by tomorrow.'",o:["finish","finished","will have finished","has finished"],c:2,e:"Future Perfect"},
      {q:"'Idiom' means:",o:["Verbo","Expresión figurativa","Sustantivo","Pronombre"],c:1,e:"Expresión figurativa"},
      {q:"'I wish I ___ taller.'",o:["am","was","were","be"],c:2,e:"were (subjunctive)"},
      {q:"'Deadline' means:",o:["Línea muerta","Fecha límite","Final","Fin de semana"],c:1,e:"Fecha límite"},
      {q:"'Neither...___ '",o:["or","and","nor","but"],c:2,e:"nor"},
      {q:"'Reliable' means:",o:["Relajado","Confiable","Relativo","Religioso"],c:1,e:"Confiable"},
      {q:"'Thoroughly' means:",o:["Rápido","Minuciosamente","Triste","Fuerte"],c:1,e:"Minuciosamente"},
      {q:"'Whom' replaces:",o:["Subject","Object","Place","Time"],c:1,e:"Object"},
      {q:"'Despite' is similar to:",o:["Because","Although","Therefore","Moreover"],c:1,e:"Although"},
      {q:"'Ought to' expresses:",o:["Ability","Advice/obligation","Permission","Possibility"],c:1,e:"Advice"},
      {q:"'Seldom' means:",o:["Siempre","A veces","Rara vez","Nunca"],c:2,e:"Rara vez"},
      {q:"'Whose' asks about:",o:["Place","Time","Possession","Reason"],c:2,e:"Possession"},
      {q:"'Had been' is:",o:["Present","Past Perfect","Future","Simple Past"],c:1,e:"Past Perfect"}
    ]
  },
  science: {
    0: [
      {q:"¿Planetas del sistema solar?",o:["7","8","9","10"],c:1,e:"8"},
      {q:"¿Plantas necesitan para fotosíntesis?",o:["Solo agua","Luz, agua y CO₂","Solo tierra","Lluvia"],c:1,e:"Luz, agua y CO₂"},
      {q:"¿Huesos del cuerpo adulto?",o:["106","206","306","406"],c:1,e:"206"},
      {q:"¿Qué animal es mamífero?",o:["Serpiente","Águila","Ballena","Lagarto"],c:2,e:"Ballena"},
      {q:"¿Qué bombea la sangre?",o:["Pulmones","Hígado","Corazón","Riñón"],c:2,e:"Corazón"},
      {q:"¿Estado del agua a 0°C?",o:["Líquido","Gaseoso","Sólido","Plasma"],c:2,e:"Sólido"},
      {q:"¿Herbívoros comen...?",o:["Carne","Plantas","Insectos","Todo"],c:1,e:"Plantas"},
      {q:"¿Planeta más cercano al Sol?",o:["Venus","Tierra","Marte","Mercurio"],c:3,e:"Mercurio"},
      {q:"¿Cuántos sentidos?",o:["3","4","5","6"],c:2,e:"5"},
      {q:"¿Estrella que da luz y calor?",o:["Luna","Sol","Marte","Venus"],c:1,e:"Sol"},
      {q:"¿Plantas producen qué gas?",o:["CO₂","Nitrógeno","Oxígeno","Helio"],c:2,e:"Oxígeno"},
      {q:"¿Dónde viven los peces?",o:["Tierra","Agua","Aire","Arena"],c:1,e:"Agua"},
      {q:"¿Órgano más grande?",o:["Corazón","Hígado","Piel","Cerebro"],c:2,e:"Piel"},
      {q:"¿Las aves tienen...?",o:["Pelo","Escamas","Plumas","Aletas"],c:2,e:"Plumas"},
      {q:"¿De qué está hecho el hielo?",o:["Aire","Tierra","Agua","Fuego"],c:2,e:"Agua"},
      {q:"¿Colores del arcoíris?",o:["5","6","7","8"],c:2,e:"7"},
      {q:"¿Planeta rojo?",o:["Venus","Júpiter","Marte","Saturno"],c:2,e:"Marte"},
      {q:"¿Reptiles sangre...?",o:["Caliente","Fría","Tibia","No tienen"],c:1,e:"Fría"},
      {q:"¿El Sol es una...?",o:["Planeta","Luna","Estrella","Cometa"],c:2,e:"Estrella"},
      {q:"¿Parte que absorbe agua?",o:["Hojas","Tallo","Raíz","Flores"],c:2,e:"Raíz"}
    ],
    1: [
      {q:"¿Qué es la fotosíntesis?",o:["Respiración","Plantas hacen alimento","Ciclo agua","Reproducción"],c:1,e:"Plantas hacen alimento"},
      {q:"¿Capas de la Tierra?",o:["2","3","4","5"],c:2,e:"4"},
      {q:"¿Qué es el ADN?",o:["Proteína","Material genético","Célula","Hormona"],c:1,e:"Material genético"},
      {q:"Unidad básica de la vida:",o:["Átomo","Tejido","Célula","Órgano"],c:2,e:"Célula"},
      {q:"¿Luna produce...?",o:["Viento","Mareas","Lluvias","Terremotos"],c:1,e:"Mareas"},
      {q:"¿Qué es ecosistema?",o:["Solo animales","Seres vivos+ambiente","Solo plantas","Clima"],c:1,e:"Seres vivos + ambiente"},
      {q:"¿Gas que respiramos?",o:["CO₂","Nitrógeno","Oxígeno","Helio"],c:2,e:"Oxígeno"},
      {q:"Sistema que transporta sangre:",o:["Nervioso","Digestivo","Circulatorio","Óseo"],c:2,e:"Circulatorio"},
      {q:"¿Agua hierve a...?",o:["50°C","75°C","100°C","150°C"],c:2,e:"100°C"},
      {q:"¿Cromosomas humanos?",o:["23","36","46","64"],c:2,e:"46"},
      {q:"¿Procesa alimentos?",o:["Corazón","Estómago","Pulmón","Cerebro"],c:1,e:"Estómago"},
      {q:"¿Tipo de roca: granito?",o:["Sedimentaria","Ígnea","Metamórfica","Orgánica"],c:1,e:"Ígnea"},
      {q:"¿Hueso más largo?",o:["Húmero","Tibia","Fémur","Radio"],c:2,e:"Fémur"},
      {q:"¿Evaporación es...?",o:["Sólido a líquido","Líquido a gas","Gas a líquido","Sólido a gas"],c:1,e:"Líquido a gas"},
      {q:"¿Vitamina del Sol?",o:["A","B","C","D"],c:3,e:"D"},
      {q:"¿Cerebro: sistema...?",o:["Digestivo","Circulatorio","Nervioso","Óseo"],c:2,e:"Nervioso"},
      {q:"¿Cuántos pulmones?",o:["1","2","3","4"],c:1,e:"2"},
      {q:"¿Condensación es...?",o:["Líquido a gas","Gas a líquido","Sólido a gas","Líquido a sólido"],c:1,e:"Gas a líquido"},
      {q:"¿Planeta más grande?",o:["Tierra","Marte","Júpiter","Saturno"],c:2,e:"Júpiter"},
      {q:"¿Fotosíntesis ocurre en...?",o:["Raíz","Tallo","Hojas","Flores"],c:2,e:"Hojas"}
    ],
    2: [
      {q:"¿Mitosis es...?",o:["Muerte celular","División celular","Unión","Nutrición"],c:1,e:"División celular"},
      {q:"¿Electrón tiene carga...?",o:["Positiva","Negativa","Neutra","Variable"],c:1,e:"Negativa"},
      {q:"Símbolo Fe:",o:["Flúor","Fósforo","Hierro","Francio"],c:2,e:"Hierro"},
      {q:"¿Capa de ozono protege de...?",o:["Lluvia","Rayos UV","Viento","Frío"],c:1,e:"Rayos UV"},
      {q:"¿pH del agua pura?",o:["0","5","7","14"],c:2,e:"7 (neutro)"},
      {q:"¿Gas más abundante?",o:["O₂","CO₂","N₂","Argón"],c:2,e:"Nitrógeno (78%)"},
      {q:"¿Qué es ATP?",o:["Gen","Moneda energética","Proteína","Lípido"],c:1,e:"Energía celular"},
      {q:"Velocidad de la luz:",o:["300 km/s","3000 km/s","300000 km/s","3M km/s"],c:2,e:"300000 km/s"},
      {q:"¿Taxonomía estudia...?",o:["Impuestos","Clasificar seres vivos","Fósiles","Planetas"],c:1,e:"Clasificar seres vivos"},
      {q:"¿Nervios craneales?",o:["8 pares","10 pares","12 pares","14 pares"],c:2,e:"12 pares"},
      {q:"¿Ósmosis es...?",o:["Solvente cruza membrana","Respiración","Digestión","Contracción"],c:0,e:"Paso por membrana"},
      {q:"¿Meiosis produce...?",o:["Células normales","Gametos","Proteínas","Energía"],c:1,e:"Gametos"},
      {q:"Unidad de corriente:",o:["Volt","Ampere","Ohm","Watt"],c:1,e:"Ampere"},
      {q:"¿Isótopo?",o:["Otro átomo","Mismo elem, dif neutrones","Molécula","Ion"],c:1,e:"Mismo elem, dif neutrones"},
      {q:"¿Conservación de masa?",o:["Newton","Lavoisier","Einstein","Dalton"],c:1,e:"Lavoisier"},
      {q:"Respiración celular:",o:["Ribosoma","Núcleo","Mitocondria","Lisosoma"],c:2,e:"Mitocondria"},
      {q:"¿Catalizador?",o:["Frena","Acelera reacción","Crea energía","Destruye"],c:1,e:"Acelera"},
      {q:"Símbolo del sodio:",o:["So","Sd","Na","No"],c:2,e:"Na"},
      {q:"Enlace compartiendo e-:",o:["Iónico","Covalente","Metálico","Puente H"],c:1,e:"Covalente"},
      {q:"¿Genotipo es...?",o:["Apariencia","Composición genética","Fenotipo","Cariotipo"],c:1,e:"Composición genética"}
    ]
  },
  history: {
    0: [
      {q:"¿Quién descubrió América?",o:["Magallanes","Colón","Pizarro","Cortés"],c:1,e:"Colón (1492)"},
      {q:"¿Pirámides en qué continente?",o:["Asia","Europa","África","América"],c:2,e:"África"},
      {q:"¿Escritura egipcia?",o:["Cuneiforme","Jeroglíficos","Alfabeto","Runas"],c:1,e:"Jeroglíficos"},
      {q:"¿Dinosaurios con humanos?",o:["Sí","No","Algunos","A veces"],c:1,e:"No"},
      {q:"¿Quién hizo el Coliseo?",o:["Griegos","Egipcios","Romanos","Mayas"],c:2,e:"Romanos"},
      {q:"¿Gran Muralla en...?",o:["Japón","India","China","Corea"],c:2,e:"China"},
      {q:"¿Caballeros: época?",o:["Prehistoria","Edad Media","Moderna","Futuro"],c:1,e:"Edad Media"},
      {q:"¿Mona Lisa la pintó...?",o:["Picasso","Da Vinci","Miguel Ángel","Dalí"],c:1,e:"Da Vinci"},
      {q:"¿Un siglo dura...?",o:["10 años","50 años","100 años","1000 años"],c:2,e:"100 años"},
      {q:"¿Olimpiadas las crearon...?",o:["Romanos","Griegos","Egipcios","Chinos"],c:1,e:"Griegos"},
      {q:"¿Prehistoria es...?",o:["Antes de escritura","Después de Roma","Edad Media","Siglo XX"],c:0,e:"Antes de la escritura"},
      {q:"¿Incas en...?",o:["Europa","Asia","África","América del Sur"],c:3,e:"América del Sur"},
      {q:"¿Quién fue Cleopatra?",o:["Reina de Roma","Reina de Egipto","Reina de Grecia","Reina de Persia"],c:1,e:"Reina de Egipto"},
      {q:"¿Vikingos eran de...?",o:["África","Asia","Escandinavia","América"],c:2,e:"Escandinavia"},
      {q:"¿Egipcios escribían en...?",o:["Papel","Papiro","Tela","Madera"],c:1,e:"Papiro"},
      {q:"¿Aztecas en...?",o:["Perú","México","Brasil","Argentina"],c:1,e:"México"},
      {q:"¿Marco Polo fue...?",o:["Soldado","Explorador","Rey","Pintor"],c:1,e:"Explorador"},
      {q:"¿Samurái de...?",o:["China","India","Japón","Corea"],c:2,e:"Japón"},
      {q:"¿Primera escritura?",o:["Alfabeto","Cuneiforme","Jeroglíficos","Latina"],c:1,e:"Cuneiforme"},
      {q:"¿Gladiadores en...?",o:["Castillos","Coliseos","Templos","Pirámides"],c:1,e:"Coliseos"}
    ],
    1: [
      {q:"¿Caída Roma Occidental?",o:["376","410","476","527"],c:2,e:"476 d.C."},
      {q:"¿Primer emperador Roma?",o:["César","Augusto","Nerón","Trajano"],c:1,e:"Augusto"},
      {q:"¿Rev. Francesa fue...?",o:["Guerra","Contra monarquía","Descubrimiento","Fiesta"],c:1,e:"Contra monarquía"},
      {q:"¿Siglo descubrimiento América?",o:["XIV","XV","XVI","XVII"],c:1,e:"XV"},
      {q:"¿Renacimiento fue...?",o:["Guerra","Movimiento cultural","Imperio","Religión"],c:1,e:"Movimiento cultural"},
      {q:"¿Simón Bolívar fue...?",o:["Rey","Libertador","Emperador","Faraón"],c:1,e:"Libertador"},
      {q:"¿1ra Guerra Mundial?",o:["1814-1818","1914-1918","1939-1945","1950-1953"],c:1,e:"1914-1918"},
      {q:"¿Machu Picchu lo hicieron...?",o:["Mayas","Aztecas","Incas","Olmecas"],c:2,e:"Incas"},
      {q:"¿Don Quijote lo escribió...?",o:["Shakespeare","Cervantes","Neruda","Borges"],c:1,e:"Cervantes"},
      {q:"¿Edad Media fue...?",o:["Siglos V-XV","I-V","XV-XX","Antes de Cristo"],c:0,e:"Siglos V al XV"},
      {q:"¿Napoleón nació en...?",o:["Francia","Italia","España","Córcega"],c:3,e:"Córcega"},
      {q:"¿Alejandro Magno gobernó...?",o:["Roma","Macedonia","Persia","Egipto"],c:1,e:"Macedonia"},
      {q:"¿Imprenta la inventó...?",o:["Da Vinci","Gutenberg","Galileo","Colón"],c:1,e:"Gutenberg"},
      {q:"¿Rev. Industrial en...?",o:["Francia","Alemania","Inglaterra","España"],c:2,e:"Inglaterra"},
      {q:"¿Julio César fue...?",o:["Emperador","Dictador romano","Rey griego","Faraón"],c:1,e:"Dictador romano"},
      {q:"¿Democracia nació en...?",o:["Roma","Atenas","Egipto","Persia"],c:1,e:"Atenas"},
      {q:"¿Feudalismo en...?",o:["Prehistoria","Edad Media","Moderna","S.XX"],c:1,e:"Edad Media"},
      {q:"¿Hernán Cortés?",o:["Explorador Polo","Conquistador México","Pirata","Emperador"],c:1,e:"Conquistador de México"},
      {q:"¿Pólvora inventada en...?",o:["Europa","América","China","India"],c:2,e:"China"},
      {q:"¿Juana de Arco fue...?",o:["Reina","Heroína francesa","Emperatriz","Monja"],c:1,e:"Heroína francesa"}
    ],
    2: [
      {q:"¿Rev. Rusa: año?",o:["1905","1914","1917","1921"],c:2,e:"1917"},
      {q:"¿Guerra Fría fue...?",o:["Guerra con hielo","EE.UU. vs URSS","En Ártico","Medieval"],c:1,e:"EE.UU. vs URSS"},
      {q:"¿Muro de Berlín cayó en...?",o:["1985","1989","1991","1993"],c:1,e:"1989"},
      {q:"¿Tratado fin 1ra Guerra?",o:["Versalles","Westfalia","Tordesillas","Roma"],c:0,e:"Versalles"},
      {q:"¿Hombre en la Luna?",o:["1965","1967","1969","1971"],c:2,e:"1969"},
      {q:"¿Feudalismo era...?",o:["Moderno","Vasallaje medieval","Democracia","Religión"],c:1,e:"Vasallaje"},
      {q:"¿Derechos del Hombre?",o:["Rev. Americana","Rev. Francesa","Rev. Industrial","Rev. Rusa"],c:1,e:"Rev. Francesa"},
      {q:"¿Inicio 2da Guerra?",o:["1935","1937","1939","1941"],c:2,e:"1939"},
      {q:"¿Capital Bizantina?",o:["Roma","Constantinopla","Atenas","Alejandría"],c:1,e:"Constantinopla"},
      {q:"¿Gandhi fue...?",o:["Emperador","Líder pacifista","Rey","General"],c:1,e:"Líder pacifista"},
      {q:"¿Holocausto fue...?",o:["Fiesta","Genocidio nazi","Guerra","Tratado"],c:1,e:"Genocidio nazi"},
      {q:"¿Relatividad?",o:["Newton","Einstein","Galileo","Hawking"],c:1,e:"Einstein"},
      {q:"¿Mandela fue...?",o:["Presidente Kenya","Anti-apartheid","Rey","General"],c:1,e:"Anti-apartheid"},
      {q:"¿Hiroshima: año?",o:["1943","1944","1945","1946"],c:2,e:"1945"},
      {q:"¿Ilustración fue...?",o:["Arte","Movimiento de la razón","Guerra","Religión"],c:1,e:"Razón/Luces"},
      {q:"¿Napoleón fue...?",o:["Rey Italia","Emperador francés","Zar","Papa"],c:1,e:"Emperador francés"},
      {q:"¿ONU se creó en...?",o:["1919","1939","1945","1950"],c:2,e:"1945"},
      {q:"¿Apartheid fue...?",o:["Fiesta","Segregación racial","Tratado","Gobierno"],c:1,e:"Segregación racial"},
      {q:"¿Rev. Cubana: año?",o:["1949","1953","1959","1962"],c:2,e:"1959"},
      {q:"¿MLK fue...?",o:["Presidente","Derechos civiles","General","Científico"],c:1,e:"Derechos civiles"}
    ]
  },
  religion: {
    0: [
      {q:"¿Quién construyó el arca?",o:["Moisés","Abraham","Noé","David"],c:2,e:"Noé"},
      {q:"¿Dónde nació Jesús?",o:["Nazaret","Jerusalén","Belén","Roma"],c:2,e:"Belén"},
      {q:"¿Cuántos mandamientos?",o:["5","7","10","12"],c:2,e:"10"},
      {q:"¿Primer hombre: Biblia?",o:["Noé","Abraham","Adán","Moisés"],c:2,e:"Adán"},
      {q:"¿Libro sagrado cristiano?",o:["Corán","Torá","Biblia","Vedas"],c:2,e:"Biblia"},
      {q:"¿Venció a Goliat?",o:["Moisés","Sansón","David","Josué"],c:2,e:"David"},
      {q:"¿Cuántos apóstoles?",o:["7","10","12","15"],c:2,e:"12"},
      {q:"¿Moisés cruzó qué mar?",o:["Muerto","Rojo","Mediterráneo","Jordán"],c:1,e:"Mar Rojo"},
      {q:"¿Fiesta de resurrección?",o:["Navidad","Pascua","Pentecostés","Adviento"],c:1,e:"Pascua"},
      {q:"¿Bautizó a Jesús?",o:["Pedro","Pablo","Juan Bautista","Santiago"],c:2,e:"Juan el Bautista"},
      {q:"¿Días de creación?",o:["3","5","6","7"],c:2,e:"6 (descansó el 7mo)"},
      {q:"¿Madre de Jesús?",o:["Sara","María","Eva","Rut"],c:1,e:"María"},
      {q:"¿1er milagro de Jesús?",o:["Caminar agua","Agua en vino","Curar ciego","Panes"],c:1,e:"Agua en vino"},
      {q:"¿Mandamientos en qué monte?",o:["Sinaí","Calvario","Tabor","Carmelo"],c:0,e:"Monte Sinaí"},
      {q:"¿Jesús multiplicó panes y...?",o:["Uvas","Peces","Corderos","Manzanas"],c:1,e:"Peces"},
      {q:"¿Abraham fue...?",o:["Padre de Israel","Rey Egipto","Apóstol","Profeta"],c:0,e:"Padre del pueblo"},
      {q:"¿Símbolo del cristianismo?",o:["Estrella","Media luna","Cruz","Loto"],c:2,e:"La Cruz"},
      {q:"¿Navidad celebra...?",o:["Muerte","Nacimiento de Jesús","Resurrección","Ascensión"],c:1,e:"Nacimiento"},
      {q:"¿Jonás fue tragado por...?",o:["Serpiente","Gran pez","Cocodrilo","León"],c:1,e:"Gran pez"},
      {q:"¿Padre Nuestro es una...?",o:["Canción","Oración","Parábola","Ley"],c:1,e:"Oración"}
    ],
    1: [
      {q:"¿Libros de la Biblia católica?",o:["66","72","73","80"],c:2,e:"73"},
      {q:"¿Sacramento con agua?",o:["Comunión","Bautismo","Confirmación","Matrimonio"],c:1,e:"Bautismo"},
      {q:"¿Virtudes teologales?",o:["Paz,amor,bien","Fe,esperanza,caridad","Verdad,justicia","Amor,bondad"],c:1,e:"Fe, esperanza, caridad"},
      {q:"¿Cuaresma es...?",o:["Navidad","40 días antes Pascua","Fin de año","Mes de María"],c:1,e:"40 días"},
      {q:"¿Líder Iglesia Católica?",o:["Obispo","Papa","Cardenal","Sacerdote"],c:1,e:"El Papa"},
      {q:"¿Parábola del hijo...?",o:["Buen samaritano","Hijo pródigo","Sembrador","Oveja"],c:1,e:"Hijo pródigo"},
      {q:"¿1er libro de Biblia?",o:["Éxodo","Salmos","Génesis","Mateo"],c:2,e:"Génesis"},
      {q:"¿Traicionó a Jesús?",o:["Pedro","Judas","Tomás","Pablo"],c:1,e:"Judas"},
      {q:"¿Crucifixión en...?",o:["Belén","Nazaret","Gólgota","Betania"],c:2,e:"Gólgota"},
      {q:"¿Pentecostés es...?",o:["Nacimiento","Espíritu Santo","Muerte","Creación"],c:1,e:"Venida del Espíritu Santo"},
      {q:"¿Mandamiento mayor?",o:["No robar","Amar a Dios y prójimo","No mentir","Honrar padres"],c:1,e:"Amar"},
      {q:"¿Cuántos sacramentos?",o:["5","6","7","8"],c:2,e:"7"},
      {q:"¿Negó a Jesús 3 veces?",o:["Judas","Pedro","Juan","Tomás"],c:1,e:"Pedro"},
      {q:"¿Bienaventuranzas en...?",o:["Génesis","Éxodo","Mateo","Apocalipsis"],c:2,e:"Mateo"},
      {q:"¿Adviento es...?",o:["Antes de Navidad","Después Pascua","Cuaresma","Semana Santa"],c:0,e:"Antes de Navidad"},
      {q:"¿Cuántos evangelios?",o:["2","3","4","5"],c:2,e:"4"},
      {q:"¿Pablo antes era...?",o:["Pedro","Saulo","Simón","Santiago"],c:1,e:"Saulo"},
      {q:"¿Parábola es...?",o:["Mandamiento","Relato con enseñanza","Oración","Profecía"],c:1,e:"Relato con enseñanza"},
      {q:"¿Fruto del Espíritu?",o:["Riqueza","Amor,paz,paciencia","Fuerza","Inteligencia"],c:1,e:"Amor, paz, paciencia"},
      {q:"¿Último libro AT?",o:["Malaquías","Daniel","Zacarías","Amós"],c:0,e:"Malaquías"}
    ],
    2: [
      {q:"¿Concilio del credo?",o:["Trento","Nicea","Vaticano I","Éfeso"],c:1,e:"Nicea (325)"},
      {q:"¿Religiones abrahámicas?",o:["2","3","4","5"],c:1,e:"3"},
      {q:"¿Libro sagrado Islam?",o:["Biblia","Torá","Corán","Vedas"],c:2,e:"Corán"},
      {q:"¿Fundó protestantismo?",o:["Calvino","Lutero","Enrique VIII","Zwinglio"],c:1,e:"Lutero"},
      {q:"¿Trinidad es...?",o:["3 dioses","1 Dios, 3 personas","3 religiones","3 profetas"],c:1,e:"1 Dios en 3 personas"},
      {q:"¿Religión de Buda?",o:["Hinduismo","Budismo","Taoísmo","Sintoísmo"],c:1,e:"Budismo"},
      {q:"¿Evangelios son...?",o:["Cartas","4 relatos de Jesús","Profecías","Salmos"],c:1,e:"4 relatos"},
      {q:"¿Encíclica es...?",o:["Salmo","Carta del Papa","Sacramento","Concilio"],c:1,e:"Carta del Papa"},
      {q:"¿Eucaristía significa...?",o:["Perdón","Acción de gracias","Oración","Sacrificio"],c:1,e:"Acción de gracias"},
      {q:"¿5 pilares de...?",o:["Cristianismo","Judaísmo","Islam","Hinduismo"],c:2,e:"Islam"},
      {q:"¿Reforma protestante fue...?",o:["Reforma papal","Ruptura con Roma","Concilio","Cruzada"],c:1,e:"Ruptura con Roma"},
      {q:"¿Hinduismo: Brahman es...?",o:["Solo un dios","Principio universal","Ateísmo","Profeta"],c:1,e:"Principio universal"},
      {q:"¿Karma es...?",o:["Destino fijo","Causa y efecto","Un dios","Templo"],c:1,e:"Causa y efecto"},
      {q:"¿Trento respondió a...?",o:["Cruzadas","Reforma","Islam","Cisma"],c:1,e:"Reforma protestante"},
      {q:"¿Torá es sagrada para...?",o:["Cristianos","Judíos","Budistas","Hindúes"],c:1,e:"Judíos"},
      {q:"¿Ecumenismo es...?",o:["Secta","Diálogo iglesias","Sacramento","Libro"],c:1,e:"Diálogo entre iglesias"},
      {q:"¿Shari'a es...?",o:["Templo","Ley islámica","Oración","Fiesta"],c:1,e:"Ley islámica"},
      {q:"¿Reencarnación es...?",o:["Resurrección","Alma renace","Vida eterna","Cielo"],c:1,e:"Alma renace"},
      {q:"¿Doctrina social promueve...?",o:["Riqueza","Justicia social","Poder","Aislamiento"],c:1,e:"Justicia social"},
      {q:"¿'Católico' significa...?",o:["Único","Universal","Santo","Antiguo"],c:1,e:"Universal"}
    ]
  },
  physics: {
    0: [
      {q:"¿Qué nos sostiene en el suelo?",o:["Viento","Gravedad","Magnetismo","Electricidad"],c:1,e:"Gravedad"},
      {q:"¿Energía en movimiento?",o:["Potencial","Cinética","Térmica","Química"],c:1,e:"Cinética"},
      {q:"¿Luz más rápida que sonido?",o:["Sí","No","Igual","Depende"],c:0,e:"Sí"},
      {q:"¿Mide temperatura?",o:["Balanza","Termómetro","Regla","Cronómetro"],c:1,e:"Termómetro"},
      {q:"¿Todos los colores de luz?",o:["Negro","Rojo","Blanco","Azul"],c:2,e:"Blanco"},
      {q:"¿Circuito necesita...?",o:["Solo cables","Fuente energía","Solo bombillo","Solo switch"],c:1,e:"Fuente de energía"},
      {q:"¿El hielo flota?",o:["Sí","No","A veces","Depende"],c:0,e:"Sí (menos denso)"},
      {q:"¿Forma de la Tierra?",o:["Plana","Cuadrada","Esférica","Triangular"],c:2,e:"Esférica"},
      {q:"¿Fuerza que frena?",o:["Gravedad","Fricción","Magnetismo","Inercia"],c:1,e:"Fricción"},
      {q:"¿Peso se mide con...?",o:["Regla","Termómetro","Báscula","Cronómetro"],c:2,e:"Báscula"},
      {q:"¿Arcoíris por...?",o:["Viento","Refracción","Gravedad","Magnetismo"],c:1,e:"Refracción"},
      {q:"¿Imán atrae...?",o:["Madera","Metales","Plástico","Vidrio"],c:1,e:"Metales"},
      {q:"¿Sonido necesita...?",o:["Vacío","Medio material","Imán","Color"],c:1,e:"Medio material"},
      {q:"¿Frotar manos produce...?",o:["Gravedad","Calor/fricción","Magnetismo","Luz"],c:1,e:"Calor por fricción"},
      {q:"¿Manzana cae hacia...?",o:["Arriba","Abajo","Lateral","Diagonal"],c:1,e:"Abajo (gravedad)"},
      {q:"¿Sólido tiene...?",o:["Sin forma","Forma definida","Invisible","Siempre frío"],c:1,e:"Forma definida"},
      {q:"¿Sol calienta por...?",o:["Contacto","Radiación","Conducción","Convección"],c:1,e:"Radiación"},
      {q:"¿Espejo refleja...?",o:["Sonido","Luz","Calor","Gravedad"],c:1,e:"Luz"},
      {q:"¿Reloj mide...?",o:["Peso","Temperatura","Tiempo","Distancia"],c:2,e:"Tiempo"},
      {q:"¿Electricidad va por...?",o:["Madera","Conductores","Aire","Plástico"],c:1,e:"Conductores"}
    ],
    1: [
      {q:"F = m × a es:",o:["1ra Newton","2da Newton","3ra Newton","Ley Ohm"],c:1,e:"2da ley de Newton"},
      {q:"¿Unidad de fuerza?",o:["Metro","Kilo","Newton","Julio"],c:2,e:"Newton (N)"},
      {q:"¿Inercia es...?",o:["Fuerza","Resistencia al cambio","Energía","Onda"],c:1,e:"Resistencia al cambio"},
      {q:"Velocidad = ?",o:["m×a","d÷t","F×d","m×g"],c:1,e:"distancia / tiempo"},
      {q:"¿Sonido: onda...?",o:["Electromagnética","Mecánica","Gravitacional","Nuclear"],c:1,e:"Mecánica"},
      {q:"¿Unidad de energía?",o:["Watt","Newton","Julio","Amperio"],c:2,e:"Julio (J)"},
      {q:"3ra ley Newton:",o:["F=ma","Inercia","Acción-reacción","Gravitación"],c:2,e:"Acción y reacción"},
      {q:"Presión = ?",o:["F×A","F÷A","m×v","E÷t"],c:1,e:"F / A"},
      {q:"¿Circuito serie?",o:["Paralelo","Uno tras otro","Sin R","Sin batería"],c:1,e:"Uno tras otro"},
      {q:"¿Voltímetro mide...?",o:["Corriente","Resistencia","Voltaje","Potencia"],c:2,e:"Voltaje"},
      {q:"¿Unidad potencia?",o:["Julio","Newton","Watt","Pascal"],c:2,e:"Watt"},
      {q:"¿Frecuencia es...?",o:["Amplitud","Ciclos/segundo","Velocidad","Longitud"],c:1,e:"Ciclos/segundo (Hz)"},
      {q:"¿Energía almacenada?",o:["Cinética","Potencial","Térmica","Mecánica"],c:1,e:"Potencial"},
      {q:"¿Amperímetro mide...?",o:["Voltaje","Corriente","Resistencia","Potencia"],c:1,e:"Corriente"},
      {q:"¿Palanca es máquina...?",o:["Compleja","Simple","Eléctrica","Magnética"],c:1,e:"Simple"},
      {q:"¿Calor se transfiere por...?",o:["Solo radiación","Cond+conv+rad","Solo convección","Magnetismo"],c:1,e:"3 formas"},
      {q:"¿Unidad resistencia?",o:["Volt","Ampere","Ohm","Watt"],c:2,e:"Ohm"},
      {q:"Densidad = ?",o:["m×v","m÷v","F÷A","v÷t"],c:1,e:"masa / volumen"},
      {q:"¿Eco es...?",o:["Reflexión sonido","Refracción","Absorción","Difracción"],c:0,e:"Reflexión del sonido"},
      {q:"¿Newton descubrió...?",o:["Electricidad","Gravedad","Relatividad","Célula"],c:1,e:"Gravedad"}
    ],
    2: [
      {q:"Velocidad de la luz:",o:["3×10⁶","3×10⁸","3×10¹⁰","3×10⁴"],c:1,e:"3×10⁸ m/s"},
      {q:"E=mc² establece:",o:["Fuerza","Masa-energía","Velocidad","Presión"],c:1,e:"Equivalencia masa-energía"},
      {q:"¿Partícula positiva?",o:["Electrón","Neutrón","Protón","Fotón"],c:2,e:"Protón"},
      {q:"Ley de Ohm:",o:["F=ma","V=IR","E=mc²","P=F/A"],c:1,e:"V = I × R"},
      {q:"¿Fotón es...?",o:["Materia","Partícula de luz","Átomo","Electrón"],c:1,e:"Partícula de luz"},
      {q:"¿Entropía mide...?",o:["Orden","Desorden","Energía","Temperatura"],c:1,e:"Desorden"},
      {q:"Unidad carga:",o:["Volt","Ampere","Coulomb","Ohm"],c:2,e:"Coulomb"},
      {q:"¿Refracción es...?",o:["Rebote","Cambio dirección","Absorción","Difracción"],c:1,e:"Cambio dirección entre medios"},
      {q:"¿Relatividad?",o:["Newton","Bohr","Einstein","Planck"],c:2,e:"Einstein"},
      {q:"¿Termodinámica estudia...?",o:["Luz","Calor y energía","Movimiento","Sonido"],c:1,e:"Calor y energía"},
      {q:"¿Semiconductor?",o:["Aislante","Conductor","Cond. intermedia","Imán"],c:2,e:"Conductividad intermedia"},
      {q:"1ra ley termodinámica:",o:["Entropía sube","Energía se conserva","Cero absoluto","F=ma"],c:1,e:"Conservación energía"},
      {q:"¿Difracción es...?",o:["Rebote","Onda bordea obstáculo","Absorción","Reflexión"],c:1,e:"Rodea obstáculos"},
      {q:"¿Quarks forman...?",o:["Electrones","Protones/neutrones","Fotones","Átomos"],c:1,e:"Protones y neutrones"},
      {q:"¿Heisenberg?",o:["Todo relativo","Incertidumbre","F=ma","Conservación"],c:1,e:"Incertidumbre"},
      {q:"¿Plasma es...?",o:["Líquido","4to estado","Sólido especial","Gas frío"],c:1,e:"4to estado (gas ionizado)"},
      {q:"¿Efecto Doppler?",o:["Cambio frecuencia","Reflexión","Absorción","Difracción"],c:0,e:"Cambio frecuencia por movimiento"},
      {q:"¿Bosón de Higgs da...?",o:["Carga","Masa","Velocidad","Color"],c:1,e:"Masa"},
      {q:"¿Fusión nuclear?",o:["Romper átomos","Unir núcleos","Quemar","Enfriar"],c:1,e:"Unir núcleos"},
      {q:"¿Planck: mecánica...?",o:["Clásica","Cuántica","Relativista","Newtoniana"],c:1,e:"Cuántica"}
    ]
  }
};

const SUBJS = [
  {id:"math",nm:"Matemáticas",em:"🔢",cl:"#FF6B6B",bg:"#FFF0F0",ms:"🦊",ds:"Números y operaciones"},
  {id:"english",nm:"Inglés",em:"🇬🇧",cl:"#58CC02",bg:"#F0FFF4",ms:"🦉",ds:"Learn English!"},
  {id:"science",nm:"Ciencias",em:"🔬",cl:"#1CB0F6",bg:"#F0F8FF",ms:"🐸",ds:"Mundo natural"},
  {id:"history",nm:"Historia",em:"🏛️",cl:"#A78BFA",bg:"#F5F0FF",ms:"🦁",ds:"Grandes eventos"},
  {id:"religion",nm:"Religión",em:"✝️",cl:"#F59E0B",bg:"#FFFBEB",ms:"🕊️",ds:"Fe y valores"},
  {id:"physics",nm:"Física",em:"⚛️",cl:"#EC4899",bg:"#FDF2F8",ms:"🐱",ds:"Leyes del universo"},
];

const LVS = ["Fácil", "Medio", "Difícil"];
const LVI = ["🌱", "🌟", "🔥"];
const RND = 8;

/* COMPONENTS */
function Confetti({ on }) {
  if (!on) return null;
  const ps = Array.from({ length: 50 }, (_, i) => ({
    i, x: Math.random() * 100, d: Math.random() * 0.6,
    t: 1 + Math.random() * 2, r: Math.random() * 360,
    c: ["#FF6B6B","#58CC02","#1CB0F6","#FFD93D","#A78BFA","#FF9F43","#EC4899"][i % 7],
    s: 5 + Math.random() * 10
  }));
  return (
    <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:9999,overflow:"hidden"}}>
      {ps.map(p => (
        <div key={p.i} style={{
          position:"absolute", left:p.x+"%", top:"-12px",
          width:p.s, height:p.s, borderRadius: p.s > 10 ? "50%" : "2px",
          background:p.c, transform:"rotate("+p.r+"deg)",
          animation:"confFall "+p.t+"s ease-in "+p.d+"s forwards"
        }}/>
      ))}
    </div>
  );
}

function Mascot({ emoji, mood, size }) {
  const anims = {
    happy: "mBounce 0.6s ease",
    sad: "mShake 0.5s ease",
    idle: "mFloat 3s ease-in-out infinite",
    cheer: "mJump 0.8s ease"
  };
  return (
    <div style={{
      fontSize: size || 80,
      animation: anims[mood] || anims.idle,
      display: "inline-block",
      filter: mood === "sad" ? "saturate(0.5)" : "none",
      transition: "filter 0.3s"
    }}>
      {emoji}
    </div>
  );
}

function Hearts({ count }) {
  return (
    <div style={{display:"flex",gap:3}}>
      {Array.from({length:5}, (_, i) => (
        <span key={i} style={{
          fontSize:20, transition:"all 0.3s",
          opacity: i < count ? 1 : 0.2,
          transform: i < count ? "scale(1)" : "scale(0.8)",
          filter: i < count ? "none" : "grayscale(1)"
        }}>
          {i < count ? "❤️" : "🖤"}
        </span>
      ))}
    </div>
  );
}

function XPBar({ cur, total, color }) {
  const pct = Math.min((cur / total) * 100, 100);
  return (
    <div style={{width:"100%",height:14,background:"#E5E7EB",borderRadius:10,overflow:"hidden",position:"relative"}}>
      <div style={{
        height:"100%", borderRadius:10,
        background:"linear-gradient(90deg," + color + "," + color + "CC)",
        width: pct + "%",
        transition:"width 0.6s cubic-bezier(0.34,1.56,0.64,1)",
        boxShadow:"0 0 8px " + color + "60"
      }}>
        <div style={{position:"absolute",inset:0,borderRadius:10,background:"linear-gradient(180deg,rgba(255,255,255,0.35) 0%,transparent 60%)"}}/>
      </div>
    </div>
  );
}

function StreakBadge({ streak }) {
  if (streak < 2) return null;
  return (
    <div style={{
      display:"inline-flex", alignItems:"center", gap:4,
      background:"linear-gradient(135deg,#FF9F43,#FF6B6B)",
      color:"#fff", borderRadius:20, padding:"4px 12px",
      fontWeight:900, fontSize:13,
      animation:"sPulse 2s ease-in-out infinite",
      boxShadow:"0 2px 8px rgba(255,107,107,0.4)"
    }}>
      🔥 {streak} racha
    </div>
  );
}

/* MAIN APP */
export default function App() {
  const [scr, setScr] = useState("home");
  const [sub, setSub] = useState(null);
  const [lv, setLv] = useState(0);
  const [qi, setQi] = useState(0);
  const [qs, setQs] = useState([]);
  const [sel, setSel] = useState(null);
  const [fb, setFb] = useState(null);
  const [sc, setSc] = useState(0);
  const [hp, setHp] = useState(5);
  const [xp, setXp] = useState(0);
  const [txp, setTxp] = useState(0);
  const [sk, setSk] = useState(0);
  const [cf, setCf] = useState(false);
  const [md, setMd] = useState("idle");
  const [shk, setShk] = useState(false);
  const [dn, setDn] = useState({});
  const [maxSk, setMaxSk] = useState(0);
  const [pf, setPf] = useState(false);
  const [games, setGames] = useState(0);
  const [hadPerfect, setHadPerfect] = useState(false);
  const [hadStreak, setHadStreak] = useState(false);

  const go = (s, l) => {
    const bank = Q[s.id] && Q[s.id][l] ? Q[s.id][l] : [];
    const shuffled = [...bank].sort(() => Math.random() - 0.5).slice(0, RND);
    setSub(s); setLv(l); setQs(shuffled); setQi(0); setSel(null); setFb(null);
    setSc(0); setHp(5); setXp(0); setSk(0); setMd("idle"); setScr("quiz");
  };

  const ans = (i) => {
    if (fb) return;
    setSel(i);
    const q = qs[qi];
    if (i === q.c) {
      const bonus = sk >= 3 ? 20 : sk >= 2 ? 15 : 10;
      setSc(s => s + 1);
      setXp(x => x + bonus);
      setSk(s => {
        const nw = s + 1;
        if (nw >= 3) setHadStreak(true);
        if (nw > maxSk) setMaxSk(nw);
        return nw;
      });
      setFb("ok"); setMd("happy");
      setCf(true); setTimeout(() => setCf(false), 2000);
    } else {
      setHp(h => h - 1); setSk(0); setFb("no"); setMd("sad");
      setShk(true); setTimeout(() => setShk(false), 500);
    }
    setTimeout(() => setMd("idle"), 1500);
  };

  const nxt = () => {
    if (qi + 1 >= qs.length || hp <= 0) {
      setTxp(t => t + xp); setGames(g => g + 1);
      if (sc >= qs.length) setHadPerfect(true);
      if (sc >= qs.length * 0.5 && sub) {
        setDn(d => ({ ...d, [sub.id + "-" + lv]: true }));
      }
      setMd("cheer"); setScr("result");
    } else {
      setQi(q => q + 1); setSel(null); setFb(null);
    }
  };

  const totalQ = Object.values(Q).reduce((a, lvls) => a + Object.values(lvls).reduce((b, arr) => b + arr.length, 0), 0);
  const completedLvls = Object.keys(dn).length;

  const ACHS = [
    {nm:"Primera Lección",ds:"Completa una ronda",em:"🎯",ok:completedLvls >= 1},
    {nm:"En Racha",ds:"3 seguidas correctas",em:"🔥",ok:hadStreak},
    {nm:"Perfección",ds:"8/8 en una ronda",em:"💎",ok:hadPerfect},
    {nm:"Explorador",ds:"Juega todas las materias",em:"🌍",ok:new Set(Object.keys(dn).map(k => k.split("-")[0])).size >= 6},
    {nm:"Nivel Medio",ds:"Desbloquea nivel medio",em:"⭐",ok:Object.keys(dn).some(k => k.endsWith("-0"))},
    {nm:"Maestro",ds:"3 niveles de una materia",em:"👑",ok:SUBJS.some(s => dn[s.id+"-0"] && dn[s.id+"-1"] && dn[s.id+"-2"])},
  ];

  const FF = "'Fredoka One', cursive";
  const FN = "'Nunito', sans-serif";

  /* HOME */
  if (scr === "home") {
    return (
      <div style={{minHeight:"100vh",fontFamily:FN,background:"linear-gradient(180deg,#1A3A5C 0%,#0F2440 100%)",padding:"16px 14px",position:"relative",overflow:"hidden"}}>
        <style>{CSS}</style>
        <div style={{position:"absolute",top:0,left:0,right:0,height:250,background:"radial-gradient(ellipse at 50% -20%,rgba(88,204,2,0.12) 0%,transparent 70%)"}}/>
        <div style={{maxWidth:460,margin:"0 auto",position:"relative",zIndex:1}}>
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:4}}>
            <button onClick={() => setPf(true)} style={{background:"rgba(255,255,255,0.12)",border:"none",borderRadius:14,padding:"8px 14px",color:"#fff",fontWeight:800,fontSize:13,cursor:"pointer",fontFamily:FN,backdropFilter:"blur(8px)"}}>
              👤 Perfil
            </button>
          </div>
          <div style={{textAlign:"center",marginBottom:18}}>
            <div style={{fontSize:60,animation:"mFloat 3s ease-in-out infinite"}}>🦉</div>
            <h1 style={{fontFamily:FF,fontSize:32,color:"#fff",margin:"0 0 2px",textShadow:"0 3px 10px rgba(0,0,0,0.3)"}}>MundoKids</h1>
            <p style={{color:"rgba(255,255,255,0.55)",fontWeight:700,fontSize:13,margin:0}}>¡Aprende jugando como nunca!</p>
            <div style={{display:"flex",justifyContent:"center",gap:8,marginTop:10,flexWrap:"wrap"}}>
              {txp > 0 && <div style={{background:"rgba(255,255,255,0.12)",borderRadius:20,padding:"5px 14px",color:"#FFD93D",fontWeight:900,fontSize:13}}>⚡ {txp} XP</div>}
              {completedLvls > 0 && <div style={{background:"rgba(255,255,255,0.12)",borderRadius:20,padding:"5px 14px",color:"#58CC02",fontWeight:900,fontSize:13}}>✅ {completedLvls}/18</div>}
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:11}}>
            {SUBJS.map((s, i) => {
              const prog = [0,1,2].filter(l => dn[s.id + "-" + l]).length;
              return (
                <button key={s.id} onClick={() => { setSub(s); setScr("path"); }}
                  style={{background:"#fff",border:"none",borderRadius:20,padding:"16px 12px",cursor:"pointer",textAlign:"center",boxShadow:"0 4px 0 " + s.cl + "50",transition:"transform 0.15s",animation:"slideUp 0.4s ease " + (i * 0.07) + "s both",fontFamily:FN,position:"relative",overflow:"hidden"}}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1.02)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; }}>
                  {prog > 0 && <div style={{position:"absolute",top:8,right:8,background:prog === 3 ? "#58CC02" : "#FFD93D",borderRadius:8,padding:"2px 6px",fontSize:10,fontWeight:900,color:"#fff"}}>{prog}/3</div>}
                  <div style={{fontSize:36,marginBottom:4}}>{s.em}</div>
                  <div style={{fontFamily:FF,fontSize:14,color:"#1F2937"}}>{s.nm}</div>
                  <div style={{fontSize:10,color:"#9CA3AF",fontWeight:700,marginTop:1}}>{s.ds}</div>
                  <div style={{marginTop:6,background:s.bg,border:"2px solid " + s.cl + "30",borderRadius:10,padding:"3px 0",color:s.cl,fontWeight:900,fontSize:11}}>¡Jugar! →</div>
                </button>
              );
            })}
          </div>
          <div style={{marginTop:14,background:"rgba(255,255,255,0.06)",borderRadius:14,padding:"10px 14px",display:"flex",alignItems:"center",gap:10,border:"1px solid rgba(255,255,255,0.08)"}}>
            <span style={{fontSize:22}}>📊</span>
            <div>
              <div style={{color:"#fff",fontWeight:800,fontSize:13}}>{totalQ} preguntas disponibles</div>
              <div style={{color:"rgba(255,255,255,0.4)",fontSize:11,fontWeight:600}}>{RND} por ronda · 3 niveles · 6 materias</div>
            </div>
          </div>
        </div>
        {/* PROFILE MODAL */}
        {pf && (
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={() => setPf(false)}>
            <div onClick={e => e.stopPropagation()} style={{background:"#fff",borderRadius:24,padding:24,maxWidth:380,width:"100%",maxHeight:"85vh",overflow:"auto",animation:"rPop 0.3s ease"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
                <h2 style={{fontFamily:FF,fontSize:22,color:"#1F2937",margin:0}}>👤 Mi Perfil</h2>
                <button onClick={() => setPf(false)} style={{background:"#F3F4F6",border:"none",borderRadius:10,width:32,height:32,fontSize:16,cursor:"pointer"}}>✕</button>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20}}>
                {[{l:"XP Total",v:txp,i:"⚡",b:"#FEF3C7"},{l:"Niveles",v:completedLvls+"/18",i:"✅",b:"#DCFCE7"},{l:"Partidas",v:games,i:"🎮",b:"#F0F8FF"},{l:"Mejor racha",v:maxSk,i:"🔥",b:"#FEE2E2"}].map(s => (
                  <div key={s.l} style={{background:s.b,borderRadius:14,padding:"12px 8px",textAlign:"center"}}>
                    <div style={{fontSize:20}}>{s.i}</div>
                    <div style={{fontWeight:900,fontSize:20,color:"#1F2937"}}>{s.v}</div>
                    <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700}}>{s.l}</div>
                  </div>
                ))}
              </div>
              <h3 style={{fontFamily:FF,fontSize:16,color:"#1F2937",marginBottom:8}}>🏆 Logros</h3>
              {ACHS.map(a => (
                <div key={a.nm} style={{display:"flex",alignItems:"center",gap:10,background:a.ok ? "#DCFCE7" : "#F9FAFB",borderRadius:12,padding:"8px 12px",marginBottom:6,border:"2px solid " + (a.ok ? "#58CC02" : "#E5E7EB"),opacity:a.ok ? 1 : 0.6}}>
                  <span style={{fontSize:24,filter:a.ok ? "none" : "grayscale(1)"}}>{a.em}</span>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:800,fontSize:13,color:a.ok ? "#15803D" : "#6B7280"}}>{a.nm}</div>
                    <div style={{fontSize:10,color:"#9CA3AF",fontWeight:600}}>{a.ds}</div>
                  </div>
                  {a.ok && <span>✅</span>}
                </div>
              ))}
              <h3 style={{fontFamily:FF,fontSize:16,color:"#1F2937",margin:"14px 0 8px"}}>📈 Progreso</h3>
              {SUBJS.map(s => {
                const p = [0,1,2].filter(l => dn[s.id+"-"+l]).length;
                return (
                  <div key={s.id} style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
                    <span style={{fontSize:20}}>{s.em}</span>
                    <div style={{flex:1}}>
                      <div style={{fontSize:11,fontWeight:800,color:"#374151",marginBottom:3}}>{s.nm}</div>
                      <XPBar cur={p} total={3} color={s.cl}/>
                    </div>
                    <span style={{fontSize:12,fontWeight:900,color:s.cl}}>{p}/3</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  /* PATH */
  if (scr === "path") {
    return (
      <div style={{minHeight:"100vh",fontFamily:FN,background:"linear-gradient(180deg," + sub.cl + "10 0%," + sub.bg + " 100%)",padding:"20px 16px"}}>
        <style>{CSS}</style>
        <div style={{maxWidth:400,margin:"0 auto"}}>
          <button onClick={() => setScr("home")} style={{background:"#fff",border:"2px solid #E5E7EB",borderRadius:14,padding:"8px 16px",fontWeight:800,cursor:"pointer",color:"#6B7280",marginBottom:18,fontSize:14,fontFamily:FN}}>← Volver</button>
          <div style={{textAlign:"center",marginBottom:24}}>
            <Mascot emoji={sub.ms} mood="idle" size={56}/>
            <h2 style={{fontFamily:FF,fontSize:26,color:sub.cl,margin:"4px 0"}}>{sub.nm}</h2>
            <p style={{color:"#9CA3AF",fontWeight:700,margin:0,fontSize:13}}>{sub.ds}</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:18,alignItems:"center",position:"relative"}}>
            <div style={{position:"absolute",top:30,bottom:30,left:"50%",width:4,background:"linear-gradient(180deg," + sub.cl + "40," + sub.cl + "10)",borderRadius:4,transform:"translateX(-50%)",zIndex:0}}/>
            {LVS.map((l, i) => {
              const key = sub.id + "-" + i;
              const comp = dn[key];
              const prev = i === 0 || dn[sub.id + "-" + (i - 1)];
              const act = !comp && prev;
              const off = i % 2 === 0 ? -35 : 35;
              return (
                <div key={l} style={{position:"relative",zIndex:1,marginLeft:off}}>
                  <button
                    onClick={() => { if (act || comp) go(sub, i); }}
                    disabled={!act && !comp}
                    style={{
                      width:66, height:66, borderRadius:"50%", border:"none",
                      cursor: (act || comp) ? "pointer" : "default",
                      background: comp ? "#58CC02" : act ? sub.cl : "#E5E7EB",
                      boxShadow: act ? ("0 6px 0 " + sub.cl + "80") : comp ? "0 4px 0 #46A302" : "0 4px 0 #CBD5E1",
                      display:"flex", alignItems:"center", justifyContent:"center", fontSize:28,
                      transform: act ? "scale(1.15)" : "scale(1)",
                      transition:"all 0.3s",
                      animation: act ? "nGlow 2s ease-in-out infinite" : "none",
                      opacity: (!act && !comp) ? 0.45 : 1
                    }}>
                    {comp ? "⭐" : act ? LVI[i] : "🔒"}
                  </button>
                  {act && (
                    <div style={{position:"absolute",top:-26,left:"50%",transform:"translateX(-50%)",background:sub.cl,color:"#fff",borderRadius:10,padding:"2px 10px",fontSize:11,fontWeight:800,animation:"fLabel 2s ease-in-out infinite",whiteSpace:"nowrap"}}>
                      ¡Jugar!
                      <div style={{position:"absolute",bottom:-5,left:"50%",transform:"translateX(-50%)",width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid " + sub.cl}}/>
                    </div>
                  )}
                  <div style={{textAlign:"center",marginTop:5,fontFamily:FF,fontSize:13,color:act ? sub.cl : comp ? "#58CC02" : "#CBD5E1"}}>{l}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  /* QUIZ */
  if (scr === "quiz") {
    const q = qs[qi];
    if (!q) return null;
    return (
      <div style={{minHeight:"100vh",fontFamily:FN,background:"#fff",display:"flex",flexDirection:"column"}}>
        <style>{CSS}</style>
        <Confetti on={cf}/>
        <div style={{padding:"12px 16px",display:"flex",alignItems:"center",gap:10,borderBottom:"2px solid #F3F4F6"}}>
          <button onClick={() => setScr("path")} style={{background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#9CA3AF",padding:4}}>✕</button>
          <div style={{flex:1}}><XPBar cur={qi + (fb ? 1 : 0)} total={qs.length} color={sub.cl}/></div>
          <Hearts count={hp}/>
        </div>
        <div style={{display:"flex",justifyContent:"center",padding:"5px 0",gap:6,flexWrap:"wrap"}}>
          <StreakBadge streak={sk}/>
          <div style={{background:sub.bg,borderRadius:20,padding:"3px 11px",fontWeight:900,fontSize:12,color:sub.cl}}>⚡ {xp} XP</div>
          <div style={{background:"#F3F4F6",borderRadius:20,padding:"3px 11px",fontWeight:900,fontSize:11,color:"#6B7280"}}>{qi + 1}/{qs.length}</div>
        </div>
        <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"4px 16px 16px",maxWidth:500,margin:"0 auto",width:"100%"}}>
          <Mascot emoji={sub.ms} mood={md} size={44}/>
          <div style={{background:"#F7F8FA",borderRadius:18,padding:"16px 20px",marginBottom:14,width:"100%",textAlign:"center",border:"2px solid #E5E7EB",animation:shk ? "shake 0.5s" : "none"}}>
            <p style={{fontFamily:FF,fontSize:17,color:"#1F2937",margin:0,lineHeight:1.4}}>{q.q}</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:8,width:"100%"}}>
            {q.o.map((op, i) => {
              let bg = "#fff", bd = "#E5E7EB", cl = "#1F2937", sh = "0 3px 0 #CBD5E1", ic = null;
              if (fb) {
                if (i === q.c) { bg = "#DCFCE7"; bd = "#58CC02"; cl = "#15803D"; sh = "0 3px 0 #46A302"; ic = "✅"; }
                else if (i === sel && i !== q.c) { bg = "#FEE2E2"; bd = "#FF4B4B"; cl = "#B91C1C"; sh = "0 3px 0 #EF4444"; ic = "❌"; }
              }
              return (
                <button key={i} onClick={() => ans(i)}
                  style={{
                    background:bg, border:"2.5px solid " + bd, color:cl,
                    borderRadius:14, padding:"13px 15px", fontWeight:800, fontSize:14,
                    cursor: fb ? "default" : "pointer", textAlign:"left",
                    boxShadow:sh, display:"flex", alignItems:"center", gap:11,
                    transition:"all 0.15s", fontFamily:FN,
                    animation: (fb && i === q.c) ? "cPop 0.4s" : (fb && i === sel && i !== q.c) ? "wShake 0.4s" : "none"
                  }}
                  onMouseEnter={e => { if (!fb) e.currentTarget.style.transform = "scale(1.02)"; }}
                  onMouseLeave={e => { if (!fb) e.currentTarget.style.transform = "scale(1)"; }}>
                  <span style={{
                    minWidth:28, height:28, borderRadius:"50%",
                    background: (fb && i === q.c) ? "#58CC02" : (fb && i === sel) ? "#FF4B4B" : "#F3F4F6",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:12, fontWeight:900,
                    color: (fb && (i === q.c || i === sel)) ? "#fff" : "#6B7280"
                  }}>
                    {ic || ["A","B","C","D"][i]}
                  </span>
                  <span style={{flex:1}}>{op}</span>
                </button>
              );
            })}
          </div>
          {fb && (
            <div style={{marginTop:12,width:"100%",borderRadius:14,padding:"11px 15px",background:fb === "ok" ? "#DCFCE7" : "#FEE2E2",border:"2px solid " + (fb === "ok" ? "#58CC02" : "#FF4B4B"),animation:"fadeUp 0.3s"}}>
              <p style={{fontWeight:900,color:fb === "ok" ? "#15803D" : "#B91C1C",margin:"0 0 2px",fontSize:14}}>{fb === "ok" ? "🎉 ¡Correcto!" : "😅 ¡Incorrecto!"}</p>
              <p style={{color:"#374151",margin:0,fontSize:12,fontWeight:600}}>{q.e}</p>
            </div>
          )}
          {fb && (
            <button onClick={nxt}
              style={{
                marginTop:12, width:"100%",
                background: fb === "ok" ? "#58CC02" : "#FF4B4B",
                color:"#fff", border:"none", borderRadius:14, padding:"14px",
                fontWeight:900, fontSize:15, cursor:"pointer",
                boxShadow: fb === "ok" ? "0 4px 0 #46A302" : "0 4px 0 #CC3E3E",
                fontFamily:FN
              }}
              onMouseDown={e => { e.currentTarget.style.transform = "translateY(2px)"; }}
              onMouseUp={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
              {(qi + 1 >= qs.length || hp <= 0) ? "Ver resultados →" : "Continuar →"}
            </button>
          )}
        </div>
      </div>
    );
  }

  /* RESULT */
  if (scr === "result") {
    const pct = Math.round((sc / qs.length) * 100);
    const st = sc >= qs.length ? 3 : sc >= qs.length * 0.6 ? 2 : sc >= 1 ? 1 : 0;
    const msgs = ["¡Sigue practicando!", "¡Buen intento!", "¡Muy bien!", "¡Perfecto!"];
    return (
      <div style={{minHeight:"100vh",fontFamily:FN,background:st >= 2 ? "linear-gradient(180deg,#58CC02,#46A302)" : "linear-gradient(180deg,#FF9F43,#FF6B6B)",display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
        <style>{CSS}</style>
        <Confetti on={st >= 2}/>
        <div style={{width:"100%",maxWidth:400,background:"#fff",borderRadius:26,padding:24,boxShadow:"0 12px 40px rgba(0,0,0,0.2)",textAlign:"center",animation:"rPop 0.5s cubic-bezier(0.34,1.56,0.64,1)"}}>
          <Mascot emoji={sub.ms} mood="cheer" size={56}/>
          <h2 style={{fontFamily:FF,fontSize:24,color:"#1F2937",margin:"2px 0"}}>{msgs[st]}</h2>
          <p style={{color:"#9CA3AF",margin:"0 0 12px",fontWeight:700,fontSize:13}}>{sub.nm} — {LVS[lv]}</p>
          <div style={{display:"flex",justifyContent:"center",gap:6,marginBottom:16,fontSize:36}}>
            {[0,1,2].map(i => (
              <span key={i} style={{animation:i < st ? ("sPop 0.4s ease " + (i * 0.15) + "s both") : "none", opacity:i < st ? 1 : 0.15}}>⭐</span>
            ))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:16}}>
            {[{l:"Correctas",v:sc+"/"+qs.length,i:"✅",b:"#DCFCE7"},{l:"XP",v:xp,i:"⚡",b:"#FEF3C7"},{l:"Vidas",v:hp,i:"❤️",b:"#FEE2E2"}].map(s => (
              <div key={s.l} style={{background:s.b,borderRadius:12,padding:"8px 4px"}}>
                <div style={{fontSize:16}}>{s.i}</div>
                <div style={{fontWeight:900,fontSize:17,color:"#1F2937"}}>{s.v}</div>
                <div style={{fontSize:10,color:"#9CA3AF",fontWeight:700}}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{marginBottom:16}}>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:11,fontWeight:800,color:"#6B7280",marginBottom:3}}>
              <span>Rendimiento</span><span>{pct}%</span>
            </div>
            <XPBar cur={sc} total={qs.length} color={sub.cl}/>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            <button onClick={() => go(sub, lv)} style={{background:sub.cl,color:"#fff",border:"none",borderRadius:14,padding:"13px",fontWeight:900,fontSize:14,cursor:"pointer",boxShadow:"0 4px 0 " + sub.cl + "80",fontFamily:FN}}>🔄 Intentar de nuevo</button>
            <button onClick={() => setScr("path")} style={{background:"#F3F4F6",color:"#374151",border:"none",borderRadius:14,padding:"13px",fontWeight:900,fontSize:14,cursor:"pointer",fontFamily:FN}}>📚 Otro nivel</button>
            <button onClick={() => setScr("home")} style={{background:"none",color:"#9CA3AF",border:"2px solid #E5E7EB",borderRadius:14,padding:"13px",fontWeight:900,fontSize:14,cursor:"pointer",fontFamily:FN}}>🏠 Inicio</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
* { box-sizing: border-box; margin: 0; }
body { margin: 0; background: #1A3A5C; overflow-x: hidden; }
@keyframes mFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
@keyframes mBounce { 0% { transform: scale(1); } 30% { transform: scale(1.3); } 60% { transform: scale(0.9); } 100% { transform: scale(1); } }
@keyframes mShake { 0%,100% { transform: translateX(0); } 20% { transform: translateX(-6px); } 40% { transform: translateX(6px); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
@keyframes mJump { 0% { transform: scale(1) translateY(0); } 30% { transform: scale(1.1) translateY(-20px); } 50% { transform: scale(0.95) translateY(0); } 70% { transform: scale(1.05) translateY(-8px); } 100% { transform: scale(1) translateY(0); } }
@keyframes confFall { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
@keyframes shake { 0%,100% { transform: translateX(0); } 20% { transform: translateX(-8px); } 40% { transform: translateX(8px); } 60% { transform: translateX(-6px); } 80% { transform: translateX(6px); } }
@keyframes cPop { 0% { transform: scale(1); } 40% { transform: scale(1.05); } 100% { transform: scale(1); } }
@keyframes wShake { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); } }
@keyframes sPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
@keyframes nGlow { 0%,100% { box-shadow: 0 6px 0 currentColor, 0 0 15px rgba(0,0,0,0.08); } 50% { box-shadow: 0 6px 0 currentColor, 0 0 25px rgba(0,0,0,0.15); } }
@keyframes fLabel { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-4px); } }
@keyframes slideUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
@keyframes fadeUp { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
@keyframes rPop { 0% { opacity: 0; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1); } }
@keyframes sPop { 0% { opacity: 0; transform: scale(0) rotate(-30deg); } 60% { transform: scale(1.3) rotate(10deg); } 100% { opacity: 1; transform: scale(1) rotate(0deg); } }
`;
