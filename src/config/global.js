export default {
  global: {
    componenteFormativo: 'Plan de mercadeo',
    descripcionCurso:
      ' A través de este componente formativo el aprendiz debe apropiar los elementos de entrada requeridos para la elaboración del plan de mercadeo en su primera fase para su idea de negocio o proyecto productivo conociendo las estrategias propicias para cada una de las variables de mercadeo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    //fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      // {
      //   nombreRuta: 'introduccion',
      //   icono: 'fas fa-info',
      //   titulo: 'Introducción',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Plan de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Mercadeo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Objetivos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estrategias',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Tácticas',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Planes de acción',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Cronograma',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Presupuesto',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Control',
            hash: 't_1_8',
          },
        ],
      },
      // {
      //   nombreRuta: 'tema2',
      //   icono: 'far fa-file-alt',
      //   numero: '2',
      //   titulo: 'Producción Audiovisual',
      //   desarrolloContenidos: true,
      //   subMenu: [
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '2.1',
      //       titulo: 'Infografía Animada',
      //       hash: 't_2_1',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '2.2',
      //       titulo: 'Video Motion',
      //       hash: 't_2_2',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '2.3',
      //       titulo: 'Motion + Presentador',
      //       hash: 't_2_3',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '2.4',
      //       titulo: 'Animación 2D',
      //       hash: 't_2_4',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '2.5',
      //       titulo: 'Video interactivo',
      //       hash: 't_2_5',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '2.6',
      //       titulo: 'Infografías',
      //       hash: 't_2_6',
      //     },
      //   ],
      // },
      // {
      //   nombreRuta: 'tema3',
      //   icono: 'far fa-file-alt',
      //   numero: '3',
      //   titulo: 'Fundamentación Textil',
      //   desarrolloContenidos: true,
      //   subMenu: [
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '3.1',
      //       titulo:
      //         'Clasificación y conceptualización de las fibras naturales, químicas (artificiales y sintéticas).',
      //       hash: 't_3_1',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '3.2',
      //       titulo: 'Identificación fibras por combustión',
      //       hash: 't_3_2',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '3.3',
      //       titulo: 'Clasificación de los hilos',
      //       hash: 't_3_3',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '3.4',
      //       titulo: 'Clasificación de tejidos',
      //       hash: 't_3_4',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '3.5',
      //       titulo: 'Caracterización de los tejidos',
      //       hash: 't_3_5',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '3.6',
      //       titulo: 'Procesos textiles',
      //       hash: 't_3_6',
      //     },
      //   ],
      // },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Armstrong, G. & Kotler, P. (2013). Fundamentos de Marketing. Ed. 11. México. Person Educación.',
    },
    {
      referencia:
        'Hoyos, R. (2013) Plan de Marketing. Diseño, implementación y control. Bogotá. Ecoe Ediciones.',
    },
    {
      referencia:
        'Kotler, P. & Amstrong, G. (2017). Fundamentos de marketing. 13 Ed. México. Pearson Education',
    },
    {
      referencia:
        'Kotler, P; Keller, K. (2016). Dirección de marketing. Ed. 15. México. Pearson.',
    },
    {
      referencia:
        'Ocampo, M. (2011) Comunicación Empresarial. 2 ed. Bogotá. Ecoe Ediciones.',
    },
    {
      referencia:
        'Prettel, G. (2016). Marketing, una herramienta para el crecimiento. Bogotá. Ediciones de la U.',
    },
    {
      referencia:
        'Prieto, J. E. (2013). Investigación de mercados. Ed. 2. Bogotá. Ecoe Ediciones.',
    },
    {
      referencia:
        'Sainz, J.M. (2016) El plan de marketing en la práctica. Ed.21. Madrid. Libros profesionales ESIC.',
    },
    {
      referencia:
        'Soria, M. (2017) Plan de marketing empresarial. Madrid. Editorial ECP.',
    },
  ],
  glosario: [
    {
      termino:
        'Análisis DOFA (debilidades, amenazas, fortalezas, oportunidades)',
      significado:
        'Su objetivo consiste en ayudar a una empresa a encontrar sus factores estratégicos críticos, para usarlos, una vez identificados, y apoyar en ellos los cambios organizacionales: consolidando las fortalezas, minimizando las debilidades, aprovechando las ventajas de las oportunidades y eliminando o reduciendo las amenazas.',
    },
    {
      termino: 'Desarrollo de nuevos mercados',
      significado:
        'Es la combinación productos actuales con nuevos mercados. En este caso el objetivo de la estrategia consiste en identificar nuevos mercados en los cuales nuestros productos puedan ser valorados. Los nuevos mercados pueden incluir nuevos segmentos de consumidores, mercados nacionales no explorados o incluso mercados internacionales.',
    },
    {
      termino: 'Desarrollo de productos',
      significado:
        'Es la combinación nuevos productos en mercados actuales. El objetivo de esta estrategia consiste en crear y desarrollar productos novedosos (ya sea por calidad, diseño, nuevas funciones, etc.) que puedan ser vendidos en el mercado actual.',
    },
    {
      termino: 'Diversificación',
      significado:
        'Es la combinación nuevos productos en nuevos mercados. Acá el objetivo de la estrategia consiste en abrir nuevos mercados a través de la venta de productos nuevos. Es una estrategia riesgosa pero que puede ser rentable si es llevada a cabo con éxito.',
    },
    {
      termino: 'Estrategia Penetración de mercado',
      significado:
        'Es la combinación de mercados y productos actuales. En este caso la estrategia tiene como objetivo incrementar la cuota en el mercado, ósea aumentar las ventas con los mismos productos.',
    },
    {
      termino: 'Matriz ANSOFF',
      significado:
        'Es una herramienta de análisis estratégico y de marketing que se enfoca en identificar las oportunidades de crecimiento de una empresa.',
    },
    {
      termino: 'Matriz BCG (BOSTON CONSULTING GROUP)',
      significado:
        'También llamada matriz de crecimiento-participación o análisis portfolio se trata de un método gráfico que sirve para realizar un análisis cuantitativo de la cartera de productos de una empresa. Dicha matriz está constituida sobre dos factores: la tasa de crecimiento en el mercado (eje Y) y la participación (cuota) relativa de mercado (eje X). En función de los ejes de la matriz se definen los siguientes tipos de productos: Estrella, Interrogativo, Vaca lechera o Perro.',
    },
    {
      termino:
        'Matriz DE MCKINSEY (o de posición competitiva/atractivo del sector)',
      significado:
        'El objetivo de esta matriz consiste en situar los distintos negocios de la organización según el doble criterio de su posición competitiva en el conjunto de la industria y el nivel del atractivo de la propia industria. Si distinguimos en la matriz tres zonas para cada dimensión (alta, media y baja), podremos identificar nuevas posiciones relativas de las que se deducen distintas opciones estratégicas para los negocios en ellas ubicados.',
    },
    {
      termino: 'Plan Táctico',
      significado:
        'Conjunto de decisiones que desarrollan las operaciones de cada día. Es posterior a la estrategia.',
    },
    {
      termino: 'Planes de Acción',
      significado:
        'Conjuntos de programas y proyectos propuestos los cuales pueden ser tanto de un horizonte a corto plazo como una formulación a largo plazo. El propósito de estos planes es garantizar que el plan estratégico se llegue a poner en la práctica.',
    },
    {
      termino: 'Seguimiento, Medición y Mejora de la Estrategia',
      significado:
        'Proceso que permite analizar periódicamente, a través de un conjunto de indicadores estratégicos y operacionales si se van alcanzando los objetivos estratégicos.',
    },
  ],
  complementario: [
    {
      texto: 'Kotler,2016, Dirección de marketing',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4273&pg=1',
    },
    {
      texto: 'Prettel,2016, Marketing, una herramienta para el crecimiento',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5684&pg=1 ',
    },
    {
      texto: 'Prieto, E. 2013, Investigación de mercados',
      tipo: 'Libro',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=4870549&ppg=1',
    },
    {
      texto: 'Hoyos, R. (2013) Plan de Marketing',
      tipo: 'Libro',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=3213503&ppg=1',
    },
    {
      texto: 'Kotler & Amstrong, 2017 Fundamentos de marketing',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4393&pg=1 ',
    },
    {
      texto: 'Soria, M. (2017) Plan de marketing empresaria',
      tipo: 'Libro',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=5214046&ppg=1',
    },
    {
      texto: 'Sainz, J.M. (2016) El plan de marketing en la práctica',
      tipo: 'Libro',
      link:
        'https://www-alfaomegacloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alfaomegacloud-com.bdigital.sena.edu.co/reader/el-plan-de-marketing-en-la-practica?location=1',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Claudia Juliana León Pinto',
        cargo: 'Experta temática',
        centro: 'Centro de servicio empresariales y turísticos',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Jesús Libardo Acero cruz',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Daniel Ricardo Mutis Gómez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Validación de diseño y contenido',
        centro: 'CENTRO PARA LA INDUSTRIA DE LA COMUNICACIÓN GRÁFICA',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
