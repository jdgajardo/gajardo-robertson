// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.gif",
    title: "BOUND",
    about: "Accesorio para mochilas, que habilita cualquier tipo mochila para ser utilizada en un contexto de outdoor o mas técnico.",
}, {
    figure: "media/foto-02.jpg",
    title: "Modelos 3D y Renders",
    about: "Conocimientos intermedios de modelado 3D de sólidos y manufactura de renders fotorrealistas y fotomontajes.",
}, {
    figure: "media/foto-03.jpg",
    title: "GAJA Marca De Ropa",
    about: "Marca de ropa independiente que pretende expandir la diversidad y la hermandad universal.",
}, {
    figure: "media/foto-04.jpg",
    title: "Diseño de Identidad ",
    about: "“Mórfosis” Area de investigación FAB LAB Santiago. Unidad modular para realizar cualquier ejemplar tipográfico.",
}, {
    figure: "media/foto-05.jpg",
    title: "Colaboración",
    about: "Intervención gráfica junto a Junky “Paradox/@junkyparadox.”  Fotografías intervenidas gráficamente.",
}, {
    figure: "media/foto-06.jpg",
    title: "Estructura de resistencia.",
    about: "“Presa” material, caucho prensado + cola fría. Para ser utilizada en muros de boulders. Realizado en ramo Estructura y materiales.",
}, {
    figure: "media/foto-07.jpg",
    title: "Banca + Sombreador",
    about: "Listones de madera + slackline Creación de un octágono que proporciona un lugar para los transeúntes en el Parque Forestal de Santiago para que puedan descansar, leer o cerrar los ojos durante un par de minutos. Examen de primer año, diseño de plan común, Universidad del Desarrollo",
  }, {
      figure: "media/foto-08.jpg",
      title: "Mapping Casa Central",
      about: "Mapping 3d que explica el concepto de la teoría endosimbiotica.",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
