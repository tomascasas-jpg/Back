// PRIMERA LINEA — cargar variables de entorno
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = ["http://localhost:5500", "http://127.0.0.1:5500"];
// ── MIDDLEWARES ──────────────────────────────────────────
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
// ── DATOS ────────────────────────────────────────────────
// Reemplazar con los artículos reales del grupo
const articulos = [
  {
    id: 1,
    titulo: "Unidad Potabilizadora de Agua",
    subtitulo: "UPA-OSE",
    autor: "Natalia Sánchez",
    imagen:
      "https://www.ose.com.uy/media/images/agua_upa_001_1005.jpg?timestamp=20180302141925",
    descripcion: "Descripcion de la Imagen.",
    contenido: "Contenido completo del artículo.",
    tituloEN: "Titulo del artículo EN",
    subtituloEN: "Subtitulo del artículo EN",
    imagenEN: "URL de la Imagen EN",
    descripcionEN: "Descripcion de la Imagen EN",
    contenidoEN: "Contenido completo del artículo EN",
    bibliografia: "Bibliografía del artículo",
    fecha: "Fecha de publicación",
  },
  {
    id: 2,
    titulo: "El latido de la Innovación",
    subtitulo: "El Origen Uruguayo del Marcapasos sin cables",
    autor: "Erik Sawchuk",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawKbASFhas3BJdhNu9L_NDREF0bgAGgu_qA&s",
    descripcion:
      "Ya es posible implantar marcapasos sin cables y sin necesidad de realizar ninguna incisión quirúrgica.",
    contenido: `      El concepto de origen no solo remite al inicio cronológico de un suceso, sino a la raíz de una necesidad humana que despierta el ingenio. En el marco de nuestra revista digital INNURU (Innovación Uruguaya), explorar los inventos nacionales nos obliga a volver a un hito de la medicina global: el desarrollo e implantación del primer marcapasos cardíaco crónicamente exitoso en América Latina. Este logro, gestado en Uruguay en 1960 por los doctores Orestes Fiandra y Roberto Rubio, constituye el nacimiento de la hibridación entre tecnología y biología. Hoy, en el siglo XXI, presenciamos la evolución de aquella semilla inicial a través del marcapasos sin cables, una tecnología milimétrica que revoluciona la medicina y despierta profundas reflexiones sobre la técnica (téchne) y los límites de la vida. Para comprender la magnitud de este dispositivo, es imperativo trazar su genealogía. En 1960, el doctor Fiandra lideró el implante exitoso del primer marcapasos de larga duración en un ser humano. Este origen respondió al paso del mythos al logos: la de la comunidad médica a aceptar un fallo cardíaco como un destino trágico e inevitable. La razón demostró que el ritmo vital podía restaurarse artificialmente, inaugurando el concepto del ser humano simbiótico, aquel que coexiste con la tecnología dentro de su propia biología.                                                                                                                    
                                                                                                                                                
    No obstante, la historia de la técnica pule sus imperfecciones a través de la experiencia y el avance de los materiales. Los cables tradicionales de los sistemas convencionales sufrían desgaste mecánico por fatiga debido a los millones de latidos anuales, sumado a los riesgos de infección en el bolsillo subcutáneo donde se alojaba el generador. El marcapasos sin cables supera este límite histórico: es una cápsula milimétrica alojada directamente en el miocardio. Su evolución actual hacia sistemas multicámara, donde dos cápsulas independientes se comunican inalámbricamente mediante pulsos de baja frecuencia, según documenta The New England Journal of Medicine, evoca el asombro (thauma) que Aristóteles situaba en el origen de la filosofía: la capacidad de maravillarse ante los mecanismos que imitan la naturaleza para preservarla. Esta transición técnica demuestra cómo el saber instrumental humano avanza resolviendo vulnerabilidades previas, modificando la propia práctica médica quirúrgica hacia procedimientos transcatéter mínimamente invasivos que reducen drásticamente los tiempos de recuperación hospitalaria y los riesgos asociados a la cirugía tradicional.                                                                                                                        
                                                                                                                                                
A pesar de las notables ventajas médicas, al final de su vida útil (unos 12 años), el dispositivo queda cubierto por fibrosis; el propio cuerpo lo encapsula. La European Heart Rhythm Association señala que extraerlo en pacientes ancianos es tan riesgoso que es más seguro dejarlo inerte y colocar uno nuevo al lado, pudiendo el corazón albergar hasta tres cápsulas. Filosóficamente, la frontera entre physis (naturaleza) y téchne (artefacto) se desvanece de manera fáctica. El cuerpo ya no solo usa una herramienta, sino que aloja sus "cadáveres" tecnológicos, convirtiendo la carne viva en un archivo de su propia historia técnica. Desde una perspectiva analítica, este fenómeno nos sitúa ante la condición del ser humano contemporáneo en la sociedad tecnológica. La técnica ya no es un elemento externo u ortopédico que se porta externamente, sino que se transforma en geología íntima del órgano vital. El corazón pasa a ser un contenedor histórico donde conviven el tejido biológico y los estratos de silicio y titanio de las tecnologías obsoletas que prolongaron la existencia del sujeto, planteando preguntas existenciales sobre la pureza de lo orgánico en la era de la medicina bioelectrónica.                                                                                                                                                                                                    
                                                                                                                                      
En la sociedad actual, la proliferación de estas tecnologías altera profundamente las nociones de longevidad, vejez y muerte. La extensión de la vida mediante algoritmos microelectrónicos introduce dilemas éticos que trascienden el ámbito clínico: la gestión del final de la vida en pacientes portadores de soportes vitales autónomos e imperturbables. Asimismo, como resalta la Sociedad Española de Cardiología en sus análisis de seguridad y herramientas de extracción, la creciente dependencia de dispositivos intracardíacos exige una infraestructura sanitaria de alta especialización, evidenciando tensiones socioeconómicas respecto a la equidad en el acceso a innovaciones médicas de vanguardia en contextos globales desiguales. Por tanto, el estudio retrospectivo de este hito nos permite valorar la dimensión socio-política de la salud tecnológica en el presente.                                                                              
                                                                                                                          
      Conclusión                                                                                                           
En conclusión, el marcapasos sin cables es el capítulo más reciente de una innovación con raíz uruguaya. Su análisis en INNURU demuestra que el valor del origen no es un punto estático ni una reliquia histórica, sino un impulso continuo por preservar la vida. Sus dilemas presentes nos recuerdan que cada solución técnica trae consigo nuevas preguntas éticas, confirmando que la ciencia y la filosofía avanzan al mismo ritmo, como un corazón sincronizado que se niega a detenerse ante las limitaciones de la temporalidad biológica.`,
    tituloEN:
      "Appendix: The Challenge of Extraction and the Multichamber Future of the Leadless Pacemaker",
    subtituloEN:
      "Innovation in the lifecycle management of implantable cardiac devices",
    imagenEN:
      "https://i0.wp.com/www.vivirenelche.com/wp-content/uploads/2024/09/Marcapasos-sin-cables-en-el-Hospital-General-de-Elche-3.jpg?resize=777%2C437&ssl=1",
    descripcionEN: "The actual size of the leadless pacemaker",
    contenidoEN: `   Introduction                                                       
                                                                                                                                             
The consolidation of the leadless pacemaker in current clinical practice represents one of the most significant qualitative leaps in modern electrophysiology. However, beyond the obvious aesthetic advantages and the drastic reduction in initial infections, this technology raises complex technical questions and development horizons that promise to completely transform the treatment of severe arrhythmias.                                                                                               
                                                                                                                                     
   The Dilemma of Removal and End-of-Life
                                                                                                                                 
One of the most intense debates at medical conferences revolves around what to do when the device's battery—whose average lifespan is around 12 years—runs out. Because the device is implanted directly in the myocardial tissue, it eventually becomes covered by a layer of fibrosis (the body's own tissue).                                                                                                              

According to a study published in the Spanish Society of Cardiology, the success rate for percutaneous removal of these devices years after implantation is extremely high when using specific loop catheters, but it is not without risk of tissue tearing. For this reason, the guidelines of the European Heart Rhythm Association (EHRA) suggest that in elderly patients it is clinically safer to "leave" the old pacemaker inside the ventricle and place a new one next to it, since the heart's space can accommodate up to three of these microdevices without altering the function of the tricuspid valve.                                                                             
                                                                                                                             
   Wireless Synchronization: The Leap to Two Chambers
                                                                                                                                   
The major historical limitation of leadless pacemakers was that they could only stimulate a single chamber of the heart (the right ventricle). This made them unsuitable for patients requiring coordinated action between the atrium and ventricle.
However, the prestigious New England Journal of Medicine (NEJM) documented the success of new dual-chamber, leadless pacemaker systems.   These devices consist of two independent capsules (one in the atrium and one in the ventricle) that communicate with each other using low-frequency intracardiac energy pulses, achieving perfect synchronization without a single millimeter of wire.                                                                                                    
                                                                                                                              
   Conclusion
                                                                                                                                   
The leadless pacemaker has gone from being an exotic alternative to becoming the standard of cardiac innovation. Resolving the management of its lifecycle and perfecting wireless communication between multiple intra-essential devices not only validates the theories of medical pioneers but also ensures longevity with a lower complication rate for millions of patients worldwide.`,
    bibliografia: `      Bibliografía                                       
                                                                                                                                                                      
    European Society of Cardiology. (2023). Clinical guidelines and consensus on the management of leadless devices at the end of their useful life. European Heart Rhythm Association. https://www.escardio.org/communities/associations/ehra/                                                                                                        
                                                                                                                                                  
Fiandra, O. (1960). El marcapasos implantable: historia de un hito médico en el Uruguay. Revista Uruguaya de Cardiología, 15(2), 45-52.                                                                                                        
                                                                                                                                                               
Knops, R. E., Reddy, V. Y., Ip, J. E., Barr, C., Bennett, M. T., Cantillon, D. J., Dizon, J. M., Houmsse, M., Kusumoto, F. M., Moore, S., Neuzil, P., Schaerf, R. H., Shoda, M., Sperzel, J., Sagi, V., & Garambone, V. (2023). A dual-chamber leadless pacemaker. The New England Journal of Medicine, 388(25), 2360-2370. https://doi.org/10.1056/NEJMoa2300080                                                                                                                              
                                                                                                                                  
Sociedad Española de Cardiología. (2024). Análisis de seguridad sobre la viabilidad y herramientas de extracción a largo plazo de dispositivos intracardíacos transcatéter. https://secardiologia.es/`,
    fecha: "02/7/2026",
  },
  {
    id: 3,
    titulo: "La vuelta olímpica",
    subtitulo: "Uruguay y el gesto que cambió el fútbol para siempre",
    autor:
      "                                                                                                                                     Tomas Casas",
    imagen:
      "https://media.elobservador.com.uy/p/9b78fe2df4b9a0ee6bc2e0ac1bd61ede/adjuntos/362/imagenes/100/360/0100360101/1200x675/smart/uruguay-vuelta-sombreroswebp.webp",
    descripcion:
      "                                                            Uruguay dando la primer vuelta olimpica",
    contenido: `Existe un gesto en el fútbol que se repite en cada rincón del mundo, en cada estadio y en cada categoría, cada vez que alguien gana algo, los jugadores toman la pelota, o la copa, o simplemente sus cuerpos cansados, y dan una vuelta al campo saludando al público que los ovaciona. Se llama “Vuelta Olímpica”. Hoy nadie se detiene a pensar de dónde viene ese ritual. Pero tiene una historia concreta, un lugar de nacimiento, una fecha, y unos protagonistas que la historia casi olvidó.
                                                                                                                                        Todo empezó en París. El 9 de junio de 1924, en el Stade Olympique Yves-du-Manoir de Colombes, Uruguay disputó la final del torneo de fútbol de los Juegos Olímpicos contra Suiza y ganó 3 a 0. La selección celeste había llegado a Europa casi de incógnito. El diario francés Le Temps había escrito antes del torneo: "Nos apena que sean tan torpes estos jóvenes sudamericanos, han venido desde tan lejos y tendrán que volver después del primer partido". Lo que siguió fue exactamente lo opuesto: : Uruguay goleó a Yugoslavia 7-0, venció a Estados Unidos 3-0, a Francia 5-1 y a Países Bajos 2-1, antes de consagrarse campeón olímpico ante más de 40.000 personas.
                                                                                                                                           Al terminar ese partido final, algo ocurrió que nadie había visto antes. Los jugadores uruguayos, encabezados por su capitán José Nasazzi y por José Leandro Andrade, apodado "La Maravilla Negra", caminaron por la pista de atletismo que rodeaba el campo de juego y saludaron al público en las cuatro tribunas. La gente los aclamaba, les tiraba flores y sombreros al campo. Ellos caminaban, saludaban, algunos lloraban. Así nació la vuelta olímpica, aunque todavía no se llamaba así.
                                                                                                                                          El nombre llegó unos meses después, el 2 de octubre de 1924, en Buenos Aires. Uruguay regresó a Sudamérica convertido en campeón del mundo y jugó un partido amistoso contra Argentina en el estadio de Sportivo Barracas. Según registros de la época recogidos por el diario La Nación, más de 50.000 personas se agolparon en un estadio que tenía capacidad para 37.000, lo que obligó a posponer el partido que originalmente estaba pactado para el 28 de septiembre. Ese 2 de octubre, antes de comenzar el encuentro, la selección uruguaya dio una vuelta al campo para saludar al público argentino que los había ido a ver. Fue ese mismo día, en ese mismo estadio, cuando el gol que marcó Cesáreo Onzari, directamente desde un córner, recibió el nombre de "gol olímpico" porque la FIFA acababa de reglamentarlo y los rivales eran los campeones olímpicos. Y fue ese mismo día cuando el gesto de dar la vuelta al campo recibió por primera vez el nombre de "vuelta olímpica".
                                                                                                                                          Lo que hace aún más notable esta historia es que Uruguay tenía solo un millón y medio de habitantes en aquel momento, y fue la primera selección del continente americano en ganar un torneo internacional de estas características. Eran, para los europeos, unos perfectos desconocidos. Esa subestimación fue, paradójicamente, parte de lo que hizo tan poderoso el gesto final: no fue una celebración calculada ni una puesta en escena, fue la reacción espontánea de once jugadores que no podían creer lo que acababan de lograr y que quisieron compartirlo con quienes los habían acompañado.
                                                                                                                                          Desde entonces, la tradición se extendió primero por toda Sudamérica y luego por el resto del mundo. Hoy la vuelta olímpica es uno de los rituales más universales del deporte, practicado en fútbol, básquetbol, atletismo y cualquier competencia donde haya un campeón y un estadio. Hasta tiene sus variantes: el club uruguayo Defensor Sporting, por ejemplo, tiene la costumbre de dar la vuelta en sentido horario, al revés de la tradición, desde 1976, cuando fue el primer equipo "chico" en ganar el campeonato uruguayo, en un gesto que muchos leyeron también como un desafío silencioso a la dictadura que gobernaba el país en aquel entonces.
                                                                                                                                          Ganar un título olímpico siendo un país tan pequeño no fue un detalle menor, fue el centro de la hazaña. En 1924 ninguna otra selección de América había logrado algo similar. Medirse y ganarle a potencias europeas con muchísimos más recursos no era solo un resultado deportivo: era la prueba de que el talento y el trabajo colectivo podían estar por encima del tamaño del país.
                                                                                                                                          Cien años después, el gesto que nació en un estadio parisino sigue vivo. Cada vez que un equipo lo hace, sin saberlo, está repitiendo lo que hizo Uruguay en 1924: agradecer, celebrar, y recorrer el espacio donde ocurrió algo grande. Es uno de esos pocos inventos uruguayos que el mundo adoptó sin preguntar de dónde venía. Ya es hora de que se sepa.`,
    tituloEN: "The Kick That Named Itself",
    subtituloEN: "The Origin of the “Olympic Goal",
    imagenEN:
      "https://fotos.perfil.com/2021/09/30/trim/987/555/cesario-onzari-20210930-1237600.jpg?webp",
    descripcionEN:
      "                              A corner kick like this one, in Buenos Aires, created a new word in football",
    contenidoEN: `Some words in football are so common that nobody asks where they came from. "Olympic goal" is one of them. Anyone who has watched a match has probably heard a commentator shout it: a goal scored directly from a corner kick, with no other player touching the ball. But that phrase was born on one specific afternoon, in one specific stadium, almost exactly when another football tradition was born too.
                                                                                                                                        The story begins on October 2, 1924, in Buenos Aires. Uruguay had just won the football tournament at the Paris Olympics, becoming the first South American team to win an international title of that scale. On their way home, they stopped in Argentina to play a friendly match. The game had to be postponed from its original date because more than 50,000 fans crowded into a stadium built for 37,000 people. Everyone wanted to see the new champions
                                                                                                                                        During that match, Argentine player Cesáreo Onzari took a corner kick and the ball flew directly into the Uruguayan goal, without touching any other player. Today this would not seem unusual, but in 1924 it was something almost nobody had seen. FIFA had only just changed the rules that same year to allow a goal to be scored straight from a corner. Before that, the ball had to touch another player first. Onzari's goal was one of the earliest examples of the new rule in action, and it happened against the reigning Olympic champions. Journalists covering the match needed a way to describe it, and "Olympic goal" was the name that stuck, linking the goal forever to the Olympic title Uruguay had just won.
                                                                                                                                        This origin story did not happen alone. That same day, the Uruguayan players walked around the field to salute the crowd. That gesture would later be remembered as the first "vuelta olímpica," or olympic lap, another tradition football still repeats today, in every stadium, after every title. Two new traditions were born minutes apart, on the same field, because of the same Olympic triumph.
                                                                                                                                        Why does this origin matter almost a hundred years later? It shows how language in sports is not invented by committees, it is invented by moments. A corner kick that surprised everyone needed a name, and the name fans chose connected a single goal to an entire nation's victory. Every time someone says "olympic goal" today, they are still talking, without knowing it, about Uruguay and a packed stadium in Buenos Aires. Origins like this remind us that the words we use without thinking usually started as something nobody had ever said before.
    `,
    bibliografia: `                                                                                                                                    Bibliografía 
                                                                                                                                       Vuelta Olímpica: Wikipedia                                                                                                                                   
https://es.wikipedia.org/wiki/Vuelta_ol%C3%ADmpica
                                                                                                                                   Batlle,N. (2012) Uruguayos Campeones, la vuelta olímpica, NICOBATLLE, rinconcito de Uruguay                                                                                                    
https://nicobatlle.wordpress.com/2012/07/27/uruguayos-campeones-la-vuelta-olimpica/
                                                                                                                                   Marcel,J. (2026) Uruguay la vuelta olímpica y su historia, El Gráfico  
https://www.elgrafico.com.ar/articulo/%C2%A1habla-memoria!/100672/uruguay-la-vuelta-olimpica-y-su-historia
`,
    fecha: "02/7/2026",
  },
  {
    id: 4,
    titulo: "La Mamografía",
    subtitulo: "La importancia de la detección temprana de cáncer de mama",
    autor: "Victoria Roland",
    imagen:
      "https://sanicur.es/wp-content/uploads/2024/10/ecografia-mamaria-mamografia.webp",
    descripcion: "Descripcion de la Imagen.",
    contenido: "",
    tituloEN: "Titulo del artículo EN",
    subtituloEN: "Subtitulo del artículo EN",
    imagenEN:
      "https://thumbs.dreamstime.com/b/s%C3%ADmbolo-de-la-muestra-del-rosa-de-la-conciencia-del-c%C3%A1ncer-de-pecho-para-la-enfermedad-de-la-ayuda-69813394.jpg?w=992",
    descripcionEN: "Pink ribbon for breast cancer awareness.",
    contenidoEN: "Contenido completo del artículo EN",
    bibliografia: "Bibliografía del artículo",
    fecha: "Fecha de publicación",
  },
];
// ── RUTAS ────────────────────────────────────────────────
// GET /articulos → devuelve todos los artículos
app.get("/articulos", (req, res) => {
  res.json(articulos);
});
// GET /articulos/:id → devuelve un artículo por id
app.get("/articulos/:id", (req, res) => {
  const id = Number(req.params.id);
  const articulo = articulos.find((a) => a.id === id);
  if (!articulo) {
    return res.status(404).json({ error: "Artículo no encontrado" });
  }
  res.json(articulo);
});
// POST /articulos → crea un artículo nuevo
app.post("/articulos", (req, res) => {
  const {
    titulo,
    subtitulo,
    imagen,
    autor,
    categoria,
    descripcion,
    contenido,
    tituloEN,
    subtituloEN,
    imagenEN,
    contenidoEN,
    descripcionEN,
    bibliografia,
    fecha,
  } = req.body;

  if (!titulo || !autor || !descripcion) {
    return res.status(400).json({
      error: "Los campos título, autor y descripción son obligatorios",
    });
  }
  const nuevo = {
    id: articulos.length + 1,
    titulo,
    subtitulo,
    autor,
    imagen,
    categoria: categoria || "Sin categoría",
    descripcion,
    contenido,
    tituloEN,
    subtituloEN,
    imagenEN,
    contenidoEN,
    descripcionEN,
    bibliografia,
    fecha,
  };
  articulos.push(nuevo);
  res.status(201).json(nuevo);
});
// ── 404 ──────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});
// ── ERROR HANDLER ─────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Error interno del servidor" });
});
// ── INICIAR SERVIDOR ──────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
