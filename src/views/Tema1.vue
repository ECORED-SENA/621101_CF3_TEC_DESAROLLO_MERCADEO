<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Plan de mercadeo
    .row.mb-5.justify-content-center
      .col-lg-5
        figure
          img(src='@/assets/curso/img1.svg', alt='Texto que describa la imagen')
      .col-lg-6.my-auto
        p El plan de mercadeo es el instrumento central para dirigir y coordinar el esfuerzo de marketing, el cual opera en dos niveles: estratégico y táctico. El plan estratégico de marketing establece los mercados meta y la propuesta de valor de la empresa con base en el análisis de las mejores oportunidades de mercado. El plan táctico de marketing específica las tácticas del mismo, incluyendo las características del producto, la promoción, comercialización y fijación de precios, los canales de ventas y el servicio (Kotler, 2016).
    p.mb-5 La dirección de marketing maneja dos herramientas básicas de planificación: el plan de marketing estratégico en el medio o largo plazo y su concreción práctica en el plan anual operativo de marketing (Sainz, 2017). 
    .row.mb-5.justify-content-center
      .col-lg-6
        figure
          img(src='@/assets/curso/img2.svg', alt='Texto que describa la imagen')
          figcaption Fuente: José María Sainz, 2016
    h3 Importancia 
    p.mb-5 El plan de marketing es una herramienta que permite a una organización hacer un análisis de su situación actual para conocer con certeza sus principales 
      b debilidades y fortalezas,
      b-none  al igual que las oportunidades y amenazas del entorno. Gracias a esto la organización puede aclarar el 
      b pensamiento estratégico y definir prioridades 
      b-none en la asignación de recursos. Este plan, ayuda a la empresa a generar una disciplina en torno a la cultura de planear y supervisar las actividades de marketing de manera 
      b formal, sistemática y permanente.
      b-none  (Hoyos, 2013)
      br
      br
      |Adicional Keller (2016) recalca “El plan de marketing es uno de los resultados más importantes del proceso de marketing; proporciona dirección y enfoque para la marca, producto o empresa; informa y motiva a los participantes dentro y fuera de la organización en cuanto a sus metas de marketing y la manera de alcanzarlas”.
      h3 Alcance
      p.mb-5 Las empresas, dependiendo de su tamaño, nivel de crecimiento, sector o industria, tipo de liderazgo, entre otros; tienen diferentes formas de diseñar su plan de mercadeo, pero lo importante es el proceso de preparación de este, que debe ser adecuado y dinámico. En todo caso, el plan debe contener como mínimo los elementos que se presentan en la siguiente gráfica. (Prieto, 2013).
    .row.mb-5.justify-content-center
      .col-lg-5
        figure
          img.mb-5(src='@/assets/curso/img3.svg', alt='Texto que describa la imagen')
          figcaption Fuente: Prieto, 2013
    #t_1_1.titulo-segundo
      h2 1.1 Mercadeo
    .row.mb-5.justify-content-center
      .col-lg-6.my-auto
        p El marketing es la ciencia que después de estudiar el comportamiento de los mercados (personas naturales, empresas y sociedad) e identificado el nivel de competencia, permite diseñar productos, capaces de satisfacer necesidades, generar mayor valor, lograr relaciones perdurables, así como la implementación de estrategias idóneas de (producto, precio, comunicación y distribución) para el estímulo, respuesta y el posicionamiento de la marca y por lógica derivación el crecimiento de la compañía (Prettel, 2016).
      .col-lg-5
        figure
          img(src='@/assets/curso/img4.svg', alt='Texto que describa la imagen')
    h3 Evolución del marketing
    p.mb-5 José María Sainz (2016) explica la evolución del marketing en el siguiente gráfico en donde inicia con un marketing indiscriminado o de masas que pretende abarcar la totalidad del mercado con las mismas estrategias, pasa a un marketing segmentado dirigido a segmentos estratégicos específicos como el público objetivo o target y finalmente al marketing digital (B2B o B2C), en donde se crea una relación continua con el cliente y la comunicación fluye en ambos sentidos. Teniendo esta evolución una repercusión importante en el alcance y contenido del plan de marketing.
    .tarjeta--gris.p-4.text-center.mb-3  
      h4.mb-0 Evolución del marketing
    .row.mb-5
      .col-lg-4
        .cuadros--rojo.p-3.text-center.text-white.mb-5
          h3 Totalidad del mercado
        img.mb-5(src='@/assets/curso/img5.svg', alt='Texto que describa la imagen' style='height: 210px')
        h3.text-center Marketing de masas
          br
          br
        hr
        p.mb-5.text-center La comunicación va dirigida al mercado en su conjunto.
        .cuadros--rojo.p-3.text-center.text-white
          h3 Marketing indiscriminado
      .col-lg-4
        .cuadros--naranja.p-3.text-center.text-white.mb-5
          h3 Mercado objetivo
        img.mb-5(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen' style='height:210px')
        h3.text-center Marketing dirigido al segmento estratégico público objetivo - target
        hr
        p.mb-5.text-center La comunicación va dirigida a cada segmento que se ha tomado como objetivo.
        .cuadros--rojo.p-3.text-center.text-white
          h3 Marketing segmentado
      .col-lg-4
        .cuadros--rojo.p-3.text-center.text-white.mb-5
          h3 Cliente individualizado
        img.mb-5(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen' style='height:210px')
        h3.text-center Marketing individualizado (B2B o B2C)
        hr
        p.mb-5.text-center Se centra en crear una relación continuada con el cliente - usuario y en promover un flujo de comunicaciones en ambos sentidos.
        .cuadros--rojo.p-3.text-center.text-white
          h3 Marketing digital
    h3 Marketing estratégico y marketing táctico
    p.mb-5 Para Ricardo Hoyos (2013), el marketing, involucra un componente táctico y un componente estratégico. El componente o plano táctico debe definir lo que se conoce como la mezcla de marketing para cada producto, es decir las políticas de producto, de distribución, de precio y de comunicación con sus mercados meta; adicionalmente debe generar procesos de consecución o captura de clientes nuevos, fidelización de estos y recuperación de los clientes perdidos.
      br
      br
      |El componente o plano estratégico del marketing está relacionado especialmente con la construcción de marcas poderosas, entendida una marca poderosa como aquella que es conocida por un número grande de consumidores, es deseada, es comprada y por supuesto es asociada a elementos positivos. En esta perspectiva estratégica el papel del marketing es colocar la marca en la mente y en el corazón de los consumidores (Hoyos,2013).
    .row.mb-5.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/img8.svg', alt='Texto que describa la imagen')
    h3 Análisis de la situación
    p.mb-5 El primer paso para realizar un plan de marketing es realizar un análisis de la situación. El éxito de todas las empresas depende de su capacidad de adaptarse al entorno que las rodea (Soria,2017). Es por esto que se analiza el microentorno y el macroentorno como lo vimos anteriormente. 
      br
      br
      |El microentorno está compuesto, por la misma empresa (ambiente interno), la cual presenta retos y limitaciones a todo proceso de marketing como por ejemplo problemas de presupuesto, problemas de capacidad de producción y tecnología, problemas de recurso humano, problemas de información y especialmente problemas de cultura, es decir organizaciones con poca orientación al mercado y una cultura poco dada a la innovación y a los cambios en general. El análisis de la organización se realizará mediante el análisis de la cadena de valor, entendida esta como la suma armónica de funciones que se llevan a cabo para diseñar, fabricar, entregar y servir productos y servicios. Se encuentran otros elementos relevantes como los proveedores, los canales y los públicos. (Hoyos,2013) 
      br
      br
      |El macroentorno está compuesto por seis variables: las fuerzas político-legales, las fuerzas socioeconómicas, las fuerzas demográficas, las fuerzas tecnológicas, las fuerzas económicas y las fuerzas ambientales o ecológicas. (Hoyos,2013)
    .row.mb-5.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/img9.svg', alt='Texto que describa la imagen')
    #t_1_2.titulo-segundo
      h2 1.2 Objetivos
    .row.mb-5.justify-content-center
      .col-lg-6.my-auto
        p Para Ricardo Hoyos (2013) los objetivos se pueden definir a corto y a largo plazo. Los objetivos a corto plazo pueden dividirse en dos: los básicos, es decir los que son comunes a todo tipo de negocio y los particulares, aquellos que se fijan dependiendo del tipo de negocio o empresa de la que se esté hablando. 
          br
          br
          |Los objetivos a largo plazo son los que le generan posibilidades a una compañía de mantenerse en el tiempo y ayudan a que los de corto plazo se alcancen de una manera relativamente más cómoda. El principal objetivo de marketing es construir una marca fuerte o poderosa, pues al fin y al cabo una marca es el principal activo de una compañía (Hoyos,2013).
      .col-lg-5
        figure
          img(src='@/assets/curso/img10.svg', alt='Texto que describa la imagen')
    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5.text-center
          table
            caption Fuente: Hoyos, 2013
            thead
              tr
                th.cuadros--rojo.fst-strong.text-white Objetivos estrategicos
                th.cuadros--naranja.fst-strong.text-white Objetivos operativos
            tbody
              tr
                td Share of mind (Recordación de marca)
                td Ventas, cartera, rentabilidad
              tr
                td Top of mind (Posicionamiento)
                td Lanzamiento de nuevos productos
              tr
                td Top of heart (Preferencia de marca)
                td Vinculación de nuevos clientes 
              tr
                td Participación y cobertura de mercado
                td Deserción, retención, recuperación y satisfacción de clientes
              tr
                td Calidad de clientes (A, B, C)
                td Deserción de vendedores
    h3 Formulación de objetivos
    p.mb-5 Sainz (2016) señala algunos principios básicos en la formulación de los objetivos de marketing.         
    .row.mb-1.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img11.svg' alt='AvatarTop' style='width: 102px')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Los objetivos de marketing se supeditarán siempre a los objetivos y estrategias corporativas.
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img12.svg' alt='AvatarTop' style='width: 102px')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Deben ser concretos por tanto cuantitativos, realistas, alcanzables, motor de la actividad comercial y coherentes entre sí y con los recursos con que cuenta la organización. La esencia de todo objetivo es solucionar un problema de la organización o sacar rendimiento de una oportunidad de mercado.
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img13.svg' alt='AvatarTop' style='width: 102px')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Cuantificar definiendo con precisión las fechas en las que los queremos alcanzar, en qué áreas geográficas, para qué tipo de productos o servicios.
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img14.svg' alt='AvatarTop' style='width: 102px')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Están sustentados sobre supuestos o hipótesis de partida o escenarios que se habrán contemplado en el análisis de la situación.
    p.mb-5 Un objetivo comienza con un verbo de acción o consecución (aumentar, explotar, consolidar, penetrar...), propone un resultado clave a lograr y un plazo de ejecución. El objetivo establece el «qué» y el «cuándo» más que el «cómo» y el «por qué».
    h4 Ejemplos
    ul.lista-ul--color.mb-5
      li 
        i.fas.fa-angle-right
        | Lograr una distribución de las ventas, por zonas geográficas acordes con el mercado potencial.
      li 
        i.fas.fa-angle-right
        | Lograr una distribución de las ventas, por zonas geográficas acordes con el mercado potencial.
      li 
        i.fas.fa-angle-right
        | Fidelizar clientes y consumidores durante el año 2022. 
    #t_1_3.titulo-segundo
      h2 1.3 Estraregias
    .row.mb-5.justify-content-center
      .col-lg-6.my-auto
        p “La estrategia, el sentido de la oportunidad y del momento exacto son las altas cumbres del marketing. Todo lo demás son apenas colinas”. Al Ries 
          br
          br
          |Una estrategia indica cómo se va a cumplir un objetivo, mientras que una táctica es el modo particular con el que se va a concretar la estrategia escogida. Por lo general, una estrategia se construye con más de una táctica y un objetivo puede ser conseguido mediante la utilización de estrategias alternativas; es el estratega quien escoge la mejor estrategia a seguir (Hoyos,2013).
      .col-lg-5
        figure
          img(src='@/assets/curso/img15.svg', alt='Texto que describa la imagen')
    h3 Estrategias competitivas
    p.mb-5 Michael Porter (1997) afirma que una empresa debe desarrollar una ventaja competitiva, la cual se puede obtener mediante la selección de una estrategia dentro de tres posibilidades: 
    ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.mb-4
              span 1
            p 
              b Liderazgo en costos: 
              b-none  ser líder en costos implica ser aquella empresa dentro de un mercado global que tiene los costos de producción más bajos, lo que le permite dos cosas: trasladar este costo al consumidor, apareciendo con el precio más bajo del mercado, o simplemente aumentar los niveles de utilidad de la empresa, ser el más barato es la elección de la mayoría de las empresas (Hoyos,2013).
          li 
            .lista-ol--cuadro__vineta.mb-4
              span 2
            p 
              b Diferenciación: 
              b-none consiste en tener una oferta de valor que difiere en lo fundamental de la competencia. La diferenciación se puede obtener de varias fuentes: el producto, uno debidamente diferenciado en cuanto a características, componentes, funcionalidad, empaque, etc. La imagen de los puntos de venta, la publicidad, el personal, el servicio y la marca son maneras de diferenciarse de la competencia en el mercado (Hoyos,2013).
          li 
            .lista-ol--cuadro__vineta.mb-4
              span 3
            p
              b Enfoque o segmentación:
              b-none consiste en seleccionar una parte pequeña del mercado (segmentos o nichos) y volverse fuerte en dicho segmento, desplegando una estrategia de liderazgo en costos o diferenciación bajo las condiciones explicadas anteriormente para estos dos aspectos. El enfoque es un camino estratégico adecuado para las empresas pequeñas que no tienen recursos suficientes para competir en el mercado total (Hoyos,2013).
    .row.mb-5.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/img16.svg', alt='Texto que describa la imagen')
    h3 Estrategias de crecimiento
    p.mb-5 Las estrategias de crecimiento o expansión de producto/mercado se explican en la Matriz de Ansoff (1957) que ofrece 4 estrategias a seguir:
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta.mb-4
          span 1
        p 
          b Penetración de mercado: 
          b-none es una estrategia que consiste en venderle a los mismos más de lo mismo, lo que significa que los compradores habituales de una marca compren más producto mediante diversas tácticas como reducción de precio, promociones de ventas o más presencia de producto en el mercado (más distribución). También se puede lograr más penetración generando hábitos de consumo diferentes, como es el caso de Alka-Seltzer, que mediante la publicidad ha tratado de habituar a los consumidores a ingerir dos pastillas por ocasión de uso (Hoyos,2013).
      li 
        .lista-ol--cuadro__vineta.mb-4
          span 2
        p 
          b Desarrollo de mercados: 
          b-none consiste en lograr más ventas llegando a nuevos mercados con los productos que actualmente comercializa la compañía. La idea es que el empresario salga a venderle a nuevos mercados geográficos (que busque mercado en otros barrios, otros pueblos, otras ciudades u otros países). También es posible desarrollar mercados mediante una expansión psicográfica, esto es, llegar a personas con características muy particulares de personalidad y estilos de vida (Hoyos,2013).
      li 
        .lista-ol--cuadro__vineta.mb-4
          span 3
        p 
          b Desarrollo de productos:  
          b-none  se pueden desarrollar nuevos productos para venderle a los consumidores actuales. Esta es una posibilidad interesante, ya que se parte del supuesto de que los clientes actuales aceptarán con gusto las nuevas propuestas de productos que se les haga; un cliente satisfecho con una empresa siempre estará dispuesto a comprarle otros productos a esta empresa; aquí la condición primordial es que se tenga una base de clientes debidamente fidelizada (Hoyos, 2013).
      li 
        .lista-ol--cuadro__vineta.mb-4
          span 4
        p 
          b Diversificación: 
          b-none  cuando una empresa encuentra posible salir a incursionar en otros negocios, por lo que se puede acudir entonces a una diversificación concéntrica o a una diversificación pura. La primera significa que la empresa desarrolla nuevos productos para nuevos mercados utilizando su Know How (saber hacer): por ejemplo, una empresa que fabrica utensilios plásticos para el hogar puede decidir incursionar en el negocio de juguetes plásticos para niños. La diversificación pura significa que la empresa decide incursionar fabricando productos totalmente diferentes a los que fabrica actualmente para ofrecérselos a mercados que no está cubriendo; en el ejemplo anterior, el de la empresa de utensilios plásticos para el hogar, la diversificación podrá darse cuando esta empresa decide fabricar ropa industrial, un producto que no tiene relación tecnológica ni de otro orden con los productos que fab
    p.mb-5 Estas estrategias son una herramienta útil en los casos en los que la empresa se ha marcado objetivos de crecimiento. Y resulta de gran utilidad sobre todo en las Pymes, dado que este tipo de empresas raramente cuenta con productos líderes. (Sainz,2016)
    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5.text-center
          table
            caption Fuente: Matriz de Ansoff (1957)
            thead
              tr
                th.cuadros--rojo.fst-strong.text-white Matriz
                th.cuadros--naranja-claro.fst-strong Mercados existentes
            tbody
              tr
                td.cuadros--naranja-claro.fst-strong Productos existentes
                td.tarjeta--gris Penetración de mercado
              tr
                td.cuadros--naranja-claro.fst-strong Nuevos productos
                td.tarjeta--gris Desarrollo de producto
    h3 Estrategias de cooperativismo
    p.mb-5 Las empresas se organizan y asocian voluntariamente para hacer frente a las necesidades del mercado. Es una fuerza económica que propicia la inclusión financiera hacia los más necesitados, creando oportunidades de desarrollo social, económico y ambiental.
      br
      br
      |Para Philip Kotler (2017) las cadenas corporativas son dos o más tiendas que ejercen el control. Su tamaño les permite comprar en grandes volúmenes a precios más bajos y obtener economías de promoción; pueden contratar a especialistas para administrar áreas como fijación de precios, promoción, comercialización, control de inventarios y pronóstico de ventas.
    .row.mb-1.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img17.svg' alt='AvatarTop' style='width: 102px')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              h4 Cadena voluntaria
              p Conjunto de minoristas independientes patrocinados por un mayorista que se agrupan para realizar compras y comercializar.
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img18.svg' alt='AvatarTop' style='width: 102px')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              h4 Cooperativa de minoristas
              p Grupo de minoristas independientes que se unen para establecer una operación central de mayoreo, de propiedad común, que realiza actividades de comercialización y promoción en forma   conjunta.
    h3 Estrategias posicionamiento.
    p.mb-5 Lambin (1991) define el posicionamiento de la siguiente forma: «valorar un producto por sus características o atributos más diferenciadores (objetivos o reales) en comparación con los productos de la competencia y respecto a los compradores para quienes ese elemento de diferenciación es importante». (Sainz,2016).
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta.mb-4
          span 1
        p 
          b Posicionamiento físico: 
          b-none como su propio nombre indica, es el que sirve para definir las características físicas y técnicas del producto en el punto de venta. Los consumidores pueden otorgar alguna o ninguna importancia a los atributos del producto, o bien percibir esos rasgos de forma diferente a la que esperan. Además, se debe tener en cuenta que las actitudes de los consumidores hacia los productos se basan fundamentalmente en atributos simbólicos, sociales, psicológicos. (Soria,2017)
      li 
        .lista-ol--cuadro__vineta.mb-4
          span 2
        p 
          b Posicionamiento perceptual: 
          b-none es un término que hace referencia a la posición que ocupa el producto en la mente del consumidor o frente a su competencia. Es la imagen que un producto o servicio tiene frente a su público objetivo, y se basa en características físicas, atributos simbólicos o la forma en que los rasgos definitorios son comunicados. Es importante para descubrir nuevas oportunidades de entrada en los mercados, identificar la oportunidad de mercado o ajustar la posición de la oferta actual. (Soria,2017)
      li 
        .lista-ol--cuadro__vineta.mb-4
          span 3
        p 
          b Posicionamiento de marca:   
          b-none para María del Mar Soria (2017) el posicionamiento de marca se desarrolla a partir de los siguientes factores:
          br
          br
          ul.lista-ul--color.mb-5
            li 
              i.fas.fa-angle-right
              | Es un elemento que sirve para diferenciar a la empresa de sus competidores.

            li 
              i.fas.fa-angle-right
              | Debe basarse en modelos y acciones únicas, inimitables. Es la única manera de que la competencia no pueda invadir la estrategia. 
            li 
              i.fas.fa-angle-right
              | Debe proporcionar beneficios importantes para el consumidor. 
            li 
              i.fas.fa-angle-right
              | Debe ser coherente e ir de la mano del plan de comunicación. 
            li 
              i.fas.fa-angle-right
              | El posicionamiento siempre debe ser alcanzable y real. 
            li 
              i.fas.fa-angle-right
              | Debe estar basado en un presupuesto asumible
    h3 Debe estar basado en un presupuesto asumible
    p.mb-5 Cuando un consumidor se acerca a una marca ya sea en el punto de venta, en Internet o en cualquier otro soporte publicitario, busca la adquisición del mismo para obtener un beneficio, satisfacer una necesidad o cumplir un deseo. (Soria,2017).
      br
      br
      |Los consumidores favorecerán a los productos que ofrezcan la mayor calidad, el mejor desempeño y las características más innovadoras. Bajo este concepto, la estrategia de marketing se enfoca en realizar mejoras continuas al producto (Amstrong, 2013).
      br
      br
      | Para (Prieto, 2013) para definir las estrategias de producto es necesario responder las siguientes preguntas:
    .row.mb-5.justify-content-center
      .col-lg-5
        figure
          img(src='@/assets/curso/img19.svg', alt='Texto que describa la imagen')
      .col-lg-6.my-auto
        ul.lista-ul--color.mb-5
          li 
            i.fas.fa-angle-right
            | ¿Mediante qué sistema se definen los precios en la compañía?

          li 
            i.fas.fa-angle-right
            | ¿Qué participación tienen los precios en nuestro marketing mix?

          li 
            i.fas.fa-angle-right
            | ¿El precio es clave en el posicionamiento?

          li 
            i.fas.fa-angle-right
            | ¿Los cambios en los precios inciden en el mercado objetivo?

          li 
            i.fas.fa-angle-right
            | ¿Realizamos análisis comparativo de precios con la competencia?

          li 
            i.fas.fa-angle-right
            | ¿Estamos dispuestos a cambiar los precios según el comportamiento del mercado?

          li 
            i.fas.fa-angle-right
            | ¿Consideramos el precio como algo diferente al valor de los productos?
    h3 Estrategias de lanzamiento de precios 
    p.mb-5 María del Mar Soria (2017 divide la estrategia de lanzamiento de precios en dos:
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img20.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Producto innovador.
          b-none  Es una acción orientada fundamentalmente a penetrar en un mercado concreto. Normalmente, cuando un producto se lanza al mercado por primera vez, se establece un precio bajo. El principal objetivo de bajar los precios responde a la necesidad de tener éxito frente a la competencia.
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img21.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Producto no innovador.
          b-none  Se trata de artículos que imitan a otros de las mismas características, y que generalmente han tenido buena aceptación en el mercado.
        ul.lista-ul--color.mb-5
          li 
            i.fas.fa-angle-right
            | Estrategia de primera. Sirve para lanzar productos que no son nuevos, pero aun así se lanzan con un precio alto.

          li 
            i.fas.fa-angle-right
            | Estrategia de buen valor. Se trata de productos de alta calidad a precios accesibles.
          li 
            i.fas.fa-angle-right
            | Estrategia de cargo excesivo. Son artículos de una calidad que no justifica su precio, generalmente elevado.
          li 
            i.fas.fa-angle-right
            | Estrategia de economía. Se venden productos de calidad media a un precio adaptado a todos los bolsillos.
    h3 Estrategias de fijación de precios de mezclas de productos
    p.mb-5 Teniendo en cuenta la explicación de Soria (2017) las estrategias de fijación de precios de mezclas de producto se dividen en tres:
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img22.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Estrategia de línea de productos. 
          b-none Consiste en ofrecer líneas de productos de distintas categorías y precios a partir de la diferencia que se establece en el costo de producción que tiene cada uno o las valoraciones que tienen por los consumidores. También se fijan los precios en función del comportamiento de la competencia.
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img23.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Estrategia de precio opcional.
          b-none Se comercializa un producto básico a un precio más bajo. Sin embargo, y a diferencia de las estrategias anteriores, aquí es habitual que se ofrezcan complementos o accesorios que hacen que el precio básico ascienda en función de lo que se adquiera fuera de ese paquete simple.
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img24.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Estrategias de precio cautivo.
          b-none Se ofrece un producto básico a un precio accesible, pero en este caso los complementos son necesarios y tiene un precio elevado. Se trata de accesorios que son imprescindibles para el buen funcionamiento del producto.
    h3 Estrategias de fijación de ajuste de precios
    p.mb-5 Soria (2017) describe a continuación las estrategias de fijación de ajuste de precios.
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img25.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Descuentos y complementos.
          b-none  Como su propio nombre indica, se trata de acciones orientadas a recompensar a los consumidores habituales con acciones que favorecen que refuerce la actitud positiva. Un ejemplo claro es poder aprovecharse de ofertas por ser clientes. 
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img26.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Segmentos.
          b-none Este concepto se refiere a la acción basada en ofrecer un mismo producto a diferentes precios. En esta decisión influye el tipo de consumidor, el lugar de consumo o el momento o estación del año en el que se produce la compra.  
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img27.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Precios psicológicos.
          b-none Es una estrategia basada en la influencia en la mente del consumidor. En general, los clientes piensan que cuanto más costoso es un producto, mayor será su calidad. Es una idea que incluye de forma determinante en la compra, y que también traslada la idea de exclusividad y lujo.
    h3 Estrategias diferenciales
    p.mb-5 Soria (2017) describe que las estrategias diferenciales se basan en la venta de un mismo producto a distintos precios. La acción está orientada a investigar a los diferentes tipos y perfiles de consumidores, así como el momento y lugar de compra para incrementar el volumen de ventas y beneficios. La estrategia se puede desarrollar mediante las siguientes acciones:
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img28.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Descuentos aleatorios.
          b-none Se trata de ofertas orientadas a reducir el precio de un producto u ofrecer, por ejemplo, dos por el precio de uno. El comprador no debe saber con demasiada antelación que se le va a ofrecer. 
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img29.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Descuentos periódicos.
          b-none Como su propio nombre indica, las ofertas se producen con una temporalidad determinada. El ejemplo más claro lo encontramos en las rebajas.  
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Descuentos en segundo mercado.
          b-none Se lanzan ofertas para un determinado segmento de clientes, que cumplen unos requisitos concretos.  
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img31.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Descuentos orientados a reducir el riesgo.
          b-none Se trata de ofertas y promociones que se adelantan a posibles descensos en las ventas, y que generalmente sucede en épocas o estaciones poco propicias para la adquisición de productos determinados. Un ejemplo lo podemos encontrar en bañadores o sombrillas de playa. 
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img32.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Estrategias de descuentos por volumen. 
          b-none Son acciones que se basan en la reducción de precios cuando se adquiere un amplio volumen de productos homogéneos. Los descuentos pueden ser de dos tipos:
        ul.lista-ul--color.mb-5
          li 
            i.fas.fa-angle-right
            p
              b Acumulables.
              b-none  La compra se ejecuta cuando el cliente ha acumulado un volumen suficiente de incentivos que le permiten realizar una compra a un coste muy reducido o incluso de forma gratuita. La forma de poder llegar al incentivo es mediante puntos.
          li 
            i.fas.fa-angle-right
            p
              b No acumulables.
              b-none El descuento se aplica por cada compra realizada.
    h3 Estrategias competitivas
    p.mb-5 Para Soria (2017) Se trata de estrategias que fijan precios competitivos para sus productos o servicios. Un precio competitivo es aquel que es capaz de igualar a otro en perfección o en propiedades. De este modo, los precios se pueden fijar en función del comportamiento de la competencia. Puede estar por encima o por debajo de los mismos productos que comercializan otras empresas del sector. Las más relevantes son: 
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta.mb-4
          span 1
        p 
          b Integración hacia adelante. 
          b-none Consiste en obtener el control de la mayor parte de los distribuidores o minoristas con los que trabajan todas las empresas del sector. 
      li 
        .lista-ol--cuadro__vineta.mb-4
          span 2 
        p 
          b  Integración hacia atrás.
          b-none Se trata de hacerse con el control de casi la totalidad de los proveedores.
      li 
        .lista-ol--cuadro__vineta.mb-4
          span 3
        p 
          b  Integración horizontal.
          b-none Sucede cuando la empresa consigue realizar sinergias y/o controlar a los competidores de la compañía. Ocurre sobre todo cuando una empresa se fusiona con otra competidora, o cuando se produce una absorción.
    h3 Estrategias de precios para lanzamiento de productos.
    p.mb-5 Para Soria (2017) la estrategia de fijación de precios para nuevos productos se da de dos formas:
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img29.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Fijación de precios por descremado.
          b-none Consiste en establecer un precio alto. El objetivo es obtener amplios beneficios. La estrategia se dirige a públicos con poder adquisitivo suficiente para adquirir estos costosos productos. Si bien es cierto que con esta estrategia la venta no es tan alta como si se tratara de un bien más económico, sí que tiene un margen suficiente que le permite obtener beneficios importantes. 
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Fijación de precios para penetrar en el mercado.
          b-none Como su propio nombre indica, el principal fin de esta acción es integrar al producto y atraer a un amplio mercado. Por ello, y para atraer a un volumen alto de consumidores, la tendencia es bajar los precios.
    h3.mb-5 Estrategias segmentación
    .row.mb-5.justify-content-center
      .col-lg-4
        figure
          img(src='@/assets/curso/img5.svg', alt='Texto que describa la imagen')
      .col-lg-6.my-auto
        h3 Marketing indiferenciado
        p Con una estrategia de marketing no diferenciado (o marketing masivo), una empresa podría decidir ignorar las diferencias que haya entre los segmentos de mercado y dirigirse al mercado completo con una oferta. Esta estrategia se enfoca en los aspectos comunes de las necesidades de los consumidores, no en los aspectos diferentes. La compañía diseña un producto y un programa de marketing que atraerá al mayor número de compradores. Es difícil desarrollar un producto o una marca que satisfaga a todos los consumidores (Armstrong,2017).
    .row.mb-5.justify-content-center
      .col-lg-6.my-auto
        h3 Marketing diferenciado
        p Con una estrategia de marketing diferenciado (o marketing segmentado), una empresa decide dirigirse a varios segmentos del mercado y diseña ofertas específicas para cada segmento. Al ofrecer productos y marketing variados para los segmentos, las empresas esperan obtener mayores ventas y una posición más fuerte dentro de cada segmento de mercado (Armstrong,2017).
      .col-lg-5
        figure
          img(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen')
    .row.mb-5.justify-content-center
      .col-lg-5
        figure
          img(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen')
      .col-lg-6.my-auto
        h3 Marketing  concentrado
        p Cuando se emplea una estrategia de marketing concentrado, en vez de buscar una pequeña participación en un gran mercado, la compañía busca obtener una participación importante en un segmento específico o en unos cuantos segmentos o nichos más pequeños. Por medio del marketing concentrado, una empresa obtiene una firme posición en el mercado gracias a su mayor conocimiento de las necesidades de los clientes ubicados en los nichos que atiende (Armstrong,2017).
    h3 Micromarketing
    p.mb-5 Es la práctica de adaptar los productos y programas de marketing a los gustos de individuos y lugares específicos. En vez de ver un cliente en cada individuo, los especialistas en micromarketing ven al individuo que hay en cada cliente. Este tipo de marketing incluye el marketing local que implica adaptar las marcas y las promociones a las necesidades y los deseos de grupos de consumidores locales y el marketing individual que adapta los productos y programas de marketing a las necesidades y preferencias de clientes individuales (Armstrong,2017).
    h3 Especialista en nichos
    p.mb-5 Esta estrategia es apropiada para una marca pequeña, y consiste en escoger un mercado muy pequeño (nicho) y volverse fuerte a través de una oferta muy diferenciada, con productos premiun y un alto valor agregado, lo cual permitirá cobrar precios más altos, ofrecer soluciones de producto a la medida (masificación personalizada) y, por tanto, obtener márgenes más altos (Hoyos,2013).
    .row.mb-5.justify-content-center
      .col-lg-10 
        img(src='@/assets/curso/img35.svg', alt='Texto que describa la imagen')
    h3 Estrategias de distribución
    p.mb-5 La logística es el área de conocimiento económica que estudia la gestión de las actividades encaminadas a trasladar de manera óptima los materiales desde su adquisición, por parte del productor, hasta su venta al comprador final, dentro de la logística del producto adquiere una gran importancia el conjunto de actividades que están vinculadas a la distribución del bien o servicio. Con ello nos referimos a aquellas cuyo objetivo se encuentra íntimamente relacionado con la circulación del producto desde que lo lanza la empresa productora o fabricante hasta que llega al consumidor final (Gil, 1997).
      br
      br
      | Para Prieto (2103) para definir las estrategias de plaza o distribución es necesario responder las siguientes preguntas:
    .row.mb-5.justify-content-center
      .col-lg-5
        figure
          img(src='@/assets/curso/img19.svg', alt='Texto que describa la imagen')
      .col-lg-6.my-auto
        ul.lista-ul--color.mb-5
          li 
            i.fas.fa-angle-right
            | ¿Cada canal tiene buen desempeño en el mercado objetivo?

          li 
            i.fas.fa-angle-right
            | ¿Se ha hecho una selección apropiada de la intensidad de la distribución?

          li 
            i.fas.fa-angle-right
            | ¿Tenemos una mezcla de canales rentable?

          li 
            i.fas.fa-angle-right
            | ¿Los costos de los canales justifican la participación en el mercado?

          li 
            i.fas.fa-angle-right
            | ¿El cliente está recibiendo un servicio de óptima calidad?

          li 
            i.fas.fa-angle-right
            | ¿Cómo está funcionando la administración de los canales?

          li 
            i.fas.fa-angle-right
            | ¿Los canales actuales pueden ser objeto de mejoramiento?

          li 
            i.fas.fa-angle-right
            | ¿Existe un canal que marca la diferencia y lo sostenemos?

          li 
            i.fas.fa-angle-right
            | ¿El equipo logístico es el más adecuado?

          li 
            i.fas.fa-angle-right
            | ¿Damos capacitación en el servicio al cliente?

          li 
            i.fas.fa-angle-right
            | ¿Las relaciones con los intermediarios son buenas? 
    p.mb-5 Soria (2017), describe cuatro tipos de fórmulas de distribución que puede seleccionar el responsable de ventas para su correcto posicionamiento en el mercado:
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img36.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Distribución exclusiva.
          b-none Se le otorga al intermediario la posibilidad de que pueda realizar él mismo la venta. Debe realizar este servicio en exclusiva, de manera que no puede comercializar productos de la competencia. Por lo general, la distribución exclusiva es elegida como fórmula por marcas ya asentadas en el mercado. Así, se trata de un modelo altamente eficaz porque se dirige a un mercado que ya conoce el producto y lo consume de forma habitual. Por ello, es un sistema también que genera una alta colaboración entre fabricante y distribuidor.
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img37.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Distribución selectiva.
          b-none Se trata de un sistema basado en escoger un número pequeño de distribuidores, de manera que el o los intermediarios no tienen por qué dedicarse de forma exclusiva a la comercialización de los productos de la marca. Este modelo es rentable porque no es excesivamente costoso, ya que los puntos de venta son menos que en otros casos y no se invierte demasiado en gastos de envío o transporte del bien o producto. 
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img38.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Distribución intensiva. 
          b-none Se desarrolla cuando se pretende llegar al máximo número posible de puntos de venta. Por ello, y en especial en este caso, se multiplican los intermediarios que participan en la cadena de distribución. Facilita la fiabilidad del cliente sobre el producto y la credibilidad sobre la marca, además de no permitir de este modo la entrada de competencia que sea fuerte. 
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img39.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b E-commerce. 
          b-none Se estandariza como estrategia de distribución para grandes y pequeñas marcas. Aunque puede adquirir múltiples formas, se basa en la implementación de un canal de distribución específico a través de Internet que permite desarrollar de forma efectiva y ágil las relaciones entre el fabricante y el distribuidor final.
    h3 Estrategias comunicación
    p.mb-5 Las políticas de comunicación de una empresa corresponden al conjunto de herramientas y procedimientos que sirven para difundir la imagen de marca de una compañía y conseguir, mediante diversas técnicas y elementos, que a medio y largo plazo la organización obtenga beneficios en términos de venta. (Soria,2017).
      br
      br
      | De acuerdo con Prieto (2013), para definir la estrategia promocional es necesario responder las siguientes preguntas:
    .row.mb-5.justify-content-center
      .col-lg-5
        figure
          img(src='@/assets/curso/img19.svg', alt='Texto que describa la imagen')
      .col-lg-6.my-auto
        ul.lista-ul--color.mb-5
          li 
            i.fas.fa-angle-right
            | ¿La estrategia de publicidad está integrada al posicionamiento?

          li 
            i.fas.fa-angle-right
            | ¿Tenemos capacidad financiera para los planes promocionales?

          li 
            i.fas.fa-angle-right
            | ¿Cómo se están llevando a cabo los programas de promoción y ventas?

          li 
            i.fas.fa-angle-right
            | ¿Utilizamos técnicas apropiadas de merchandising para nuestros productos?

          li 
            i.fas.fa-angle-right
            | ¿Hacemos evaluación al plan integral de comunicaciones?

          li 
            i.fas.fa-angle-right
            | ¿Nuestros colaboradores reciben capacitación en publicidad, promoción, ventas y merchandising?

          li 
            i.fas.fa-angle-right
            | ¿La política de descuentos está en concordancia con la competencia?
    h3 Promoción de ventas
    p.mb-5 Soria (2017), define la promoción de ventas como el conjunto de técnicas orientadas a fortalecer o aumentar la comercialización de un producto, bien o servicio entre el público de interés. Exige un procedimiento muy riguroso y estudiado basado en el fin principal de captar la atención del consumidor. Algunas de las técnicas más empleadas a tales efectos son:
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img40.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Ofertas.
          b-none Se trata de facilitar al cliente una propuesta especial mediante la cual se beneficia en el precio al adquirir un determinado producto.
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img41.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Descuentos.
          b-none También es una propuesta beneficiosa para el bolsillo del consumidor. En este caso, sin embargo, el ofrecimiento está basado en una reducción del precio del producto.
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img42.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Cupones.
          b-none  Se trata de vales o bonos que se le otorga al cliente para que pueda, mediante esta credencial, cambiar el producto, canjearlo y, en definitiva, lograr un beneficio.
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img43.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Sorteos. 
          b-none Consiste en organizar una actividad que permita al cliente ganar algo. Venta personal. La promoción del producto se basa en el contacto directo entre el vendedor y el consumidor. En ocasiones se produce en el propio domicilio del este último, pues es la fuerza de venta la que se dirige a buscar al cliente.
    h3.mb-5 Estrategias de Marketing multicanal
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img44.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Correo personalizado o mailing. 
          b-none Se trata de envíos personalizados a cada cliente a su domicilio. Suelen contener mensajes informativos sobre un producto o línea de productos, así como ofertas, promociones, llamadas a eventos, etc. Con la irrupción de las Nuevas Tecnologías y el amplio uso del correo electrónico se ha estandarizado el empleo del denominado newsletter o un canal de suscripción al que el público interesado se inscribe mediante una página web para recibir periódicamente información sobre la marca (Soria,2017).
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img45.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Marketing Oline. 
          b-none Modelo de comunicación comercial para la empresa basado en lanzar una serie de mensajes a través de Internet, y en la aplicación de técnicas concretas para llegar al público que se encuentra en el soporte digital (Soria,2017).
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img46.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Social media marketing. 
          b-none Define una estrategia en redes sociales que trata de un “lugar en Internet donde las personas publican y comparten todo tipo de información, personal y profesional, con terceras personas, conocidos y absolutos desconocidos”. (Celaya, 2008)
    .row.mb-5.justify-content-center
      .col-auto
        img(src='@/assets/curso/img47.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-sm-9.my-auto
        p
          b Community manager. 
          b-none Se dedica fundamentalmente a implementar la estrategia de marketing digital cuyas funciones son: crear contenidos relevantes para los usuarios de la marca, dinamizar las comunidades virtuales en las que está presente la empresa, crear lazos con todos los públicos (internos y externos) que rodean a la compañía y elaborar informes semanales de resultados: analítica web. 
    #t_1_4.titulo-segundo
      h2 1.4 Tácticas
    .row.mb-5.justify-content-center
      .col-10
        img(src='@/assets/curso/img48.svg', alt='Texto que describa la imagen')
    p.mb-5 Las tácticas determinan el modo particular con que se concreta la estrategia, abarcan todas las actividades que se llevan a cabo, es descriptiva y debe explicar el detalle para su realización.
      br
      br
      |Ocampo (2011), define la táctica como “la acción sistematizada que se aplica en un momento preestablecido. Implica la planeación detallada de tiempos, movimientos y recursos. La sumatoria de las tácticas expresan las estrategias en la práctica. Esta segmentación de las acciones permite el seguimiento y la medición de cada una de las tareas que se realizan en el marco de una estrategia”.
    #t_1_5.titulo-segundo
      h2 1.5 Planes de acción
    .row.mb-5.justify-content-center
      .col-10
        img(src='@/assets/curso/img49.svg', alt='Texto que describa la imagen')
    p.mb-5 Cada táctica se convierte en un plan de acción o un programa que es un documento que detalla la táctica empleada en el plan de marketing. El estratega define las fechas de inicio y de terminación de la estrategia, y designa al responsable de la actividad y los controles que se van a realizar para asegurar el éxito de la táctica. En el programa también se define el presupuesto a invertir y el cronograma de la actividad. Vale la pena aclarar que el presupuesto de cada actividad o programa se incluirá en el presupuesto general, al igual que el cronograma de cada actividad o programa será incluido en el cronograma general de la empresa (Hoyos,2013).
    #t_1_6.titulo-segundo
      h2 1.6 Cronogramas
    .row.mb-5.justify-content-center
      .col-10
        img(src='@/assets/curso/img50.svg', alt='Texto que describa la imagen')
    p.mb-5 Cada táctica, plan de acción o programa incluye las fechas específicas para su realización. Estas fechas se llevan al cronograma general para tener un documento consolidado de todas las actividades que incluye el plan de marketing. El cronograma es una herramienta que permite ejecutar cada una de las acciones en los momentos oportunos de tal manera que se garantice la consecución de los objetivos. Además de ser una herramienta de planeación ayuda a controlar que las acciones de marketing se realicen tal como se ha previsto (Hoyos,2013).
    #t_1_7.titulo-segundo
      h2 1.7 Presupuesto
    .row.mb-5.justify-content-center
      .col-10
        img(src='@/assets/curso/img51.svg', alt='Texto que describa la imagen')
    p.mb-5 Es un documento que recoge de manera consolidada los presupuestos de cada una de los planes o programas diseñados dentro del plan de marketing. En el presupuesto se presentan los ingresos y la inversión total que se va a realizar para cumplir con los objetivos planteados. Se incluyen los gastos discriminados por cada una de las actividades de marketing, se deben relacionar el egreso relacionado con la nómina, la administrativa del departamento de marketing y la de la fuerza de ventas. Se deben incluir los gastos relacionados con las comunicaciones de marketing (publicidad, relaciones públicas y promoción de ventas entre otros. Adicionalmente se pueden incluir gastos relacionados con el desarrollo de nuevos productos y con todos los procesos de investigación asociados a esta actividad y otras que se vayan a realizar dentro del plan. 
      b El presupuesto es una herramienta gerencial que debe ser monitoreada de manera regular para hacer el control del gasto, para no excederse en el mismo o para no dejar rubros sin ejecutar (Hoyos,2013).
      br
      br
      | La inversión destinada al plan de marketing estará determinada por los objetivos de la campaña y el público al que la marca se dirige. A mayor volumen de fines propuestos y de consumidores, más presupuesto se requerirá (Soria,2017).
    #t_1_8.titulo-segundo
      h2 1.8 Control
    .row.mb-5.justify-content-center
      .col-10
        img(src='@/assets/curso/img52.svg', alt='Texto que describa la imagen')
    p.mb-5 El marketing considera cuatro grandes elementos del proceso administrativo: la planeación, la organización, la dirección y el control. La planeación incluye la recolección de información de los hechos que se producen en el mercado y en la empresa misma, y su correspondiente análisis para encontrar las oportunidades de mejoramiento lo que debe conducir a la fijación de objetivos, diseño de estrategias y asignación de recursos. Luego se avanza al proceso de organización, en donde se revisan la estructura del área, los procedimientos, los manuales y demás elementos que permitirán abordar la siguiente etapa que es la dirección o puesta en marcha de la estrategia; finalmente se encuentra el proceso de control, en donde se verifica que lo que se planeó se esté ejecutando de manera adecuada y que se estén obteniendo los resultados buscados (Hoyos,2013).
      br
      br
      |La auditoría de marketing se comprende como un proceso de revisión sistemático, crítico e imparcial de la operación de marketing; de los objetivos básicos y las políticas que orientan los procesos de marketing, así como de los métodos procedimientos y personas, y la organización o estructura empleada para alcanzar los objetivos (Hoyos,2013).
    h3 Técnica del cliente oculto
    p.mb-5 En los controles de marketing se puede utilizar la técnica de cliente oculto o comprador misterioso, consiste en que una persona de la misma empresa o contratada externamente para ello, se hace pasar por cliente para conocer de primera mano y de manera totalmente real el nivel de servicio que presta una persona, una oficina o punto de venta. Para tal efecto, el comprador incógnito puede realizar una evaluación parcial simplemente solicitando información (cotizaciones, condiciones, características de los productos, etc.) sin llegar a realizar la compra; para esto puede valerse de diversos medios como solicitudes por Internet, llamadas telefónicas o —lo que más se recomienda— de manera personal; incluso se pueden llegar a utilizar cámaras para registrar hechos, algunas situaciones que se comunicarían mejor con imágenes como filas desmedidas, locaciones en mal estado, la agresividad de un vendedor o la desidia de una persona en la superficie de venta, etc. La técnica también se conoce como la seudocompra. La función del comprador incógnito también puede y debe llegar al punto de realizar la compra, con el fin de conocer de manera integral el nivel de atención en todo el ciclo del proceso (Hoyos,2013).
    .row.mb-5.justify-content-center
      .col-10
        img(src='@/assets/curso/img53.svg', alt='Texto que describa la imagen')
    h3 Indicadores de gestión
    p.mb-5 Para lograr una detallada evaluación y control de los resultados del plan de marketing Hoyos (2013) nos ilustra ejemplos de indicadores:
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center.text-center
              p.my-3.d-inline-block
                b Cumplimiento de ventas  =
              p.d-inline-block.ps-2
                b Ventas logradas
                  hr.hr.m-0
                b Ventas planeadas
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center.text-center
              p.my-3.d-inline-block
                b Nivel de satisfacción   =
              p.d-inline-block.ps-2
                b Cientes satisfechos
                  hr.hr.m-0
                b Clientes insatisfechos
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center.text-center
              p.my-3.d-inline-block
                b Retención de clientes   =
              p.d-inline-block.ps-2
                b Clientes totales  -  Desertores
                  hr.hr.m-0
                b Clientes totales
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center.text-center
              p.my-3.d-inline-block
                b Top of heart   =
              p.d-inline-block.ps-2
                b Porcentaje de personas que prefieren una marca
                  hr.hr.m-0
                b Total de encuestados





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
