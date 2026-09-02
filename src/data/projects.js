export const PROJECTS = [
  {
    slug: "geoguessrAI",
    category: "computer-vision",
    status: "finalizado",

    title: {
      es: "Geoguessr AI",
      ca: "Geoguessr AI",
      en: "Geoguessr AI",
    },

    description: {
      es: "Predice el país y el continente de una imagen a nivel de calle. Dataset construido desde Mapillary, dos enfoques de clasificación (SIFT + BoVW con SVM, y MobileNetV2 con Grad-CAM) y una app de escritorio para jugar contra la IA.",
      ca: "Prediu el país i el continent d'una imatge a nivell de carrer. Dataset construït des de Mapillary, dos enfocaments de classificació (SIFT + BoVW amb SVM, i MobileNetV2 amb Grad-CAM) i una app d'escriptori per jugar contra la IA.",
      en: "Predicts the country and continent of a street-level image. Dataset built from Mapillary, two classification approaches (SIFT + BoVW with SVM, and MobileNetV2 with Grad-CAM) and a desktop app to play against the AI.",
    },

    tags: ["Python", "OpenCV", "TensorFlow", "PyQt5"],
    repo: "https://github.com/Manmaru68/GeoguessrAI",
    gallery: [
    "../public/images/geoguessrAI/orb.png",
    "../public/images/geoguessrAI/gradcam.png",
    "../public/images/geoguessrAI/Game.png",
    ],

    details: [
      {
        title: { es: "Cómo funciona", ca: "Com funciona", en: "How it works" },
        text: {
          es: "El sistema combina dos enfoques: uno clásico basado en SIFT y Bag of Visual Words con SVM, y otro moderno con MobileNetV2 usando Grad-CAM para visualizar en qué zonas de la imagen se fija el modelo.",
          ca: "El sistema combina dos enfocaments: un de clàssic basat en SIFT i Bag of Visual Words amb SVM, i un altre de modern amb MobileNetV2 usant Grad-CAM per visualitzar en quines zones de la imatge es fixa el model.",
          en: "The system combines two approaches: a classic one based on SIFT and Bag of Visual Words with SVM, and a modern one with MobileNetV2 using Grad-CAM to visualize where the model focuses on the image.",
        },
      },
      {
        title: { es: "Dataset", ca: "Dataset", en: "Dataset" },
        text: {
          es: "Dataset propio construido a partir de imágenes reales de Mapillary, con puntos distribuidos y balanceados por país y continente.",
          ca: "Dataset propi construït a partir d'imatges reals de Mapillary, amb punts distribuïts i balancejats per país i continent.",
          en: "Custom dataset built from real Mapillary images, with points distributed and balanced by country and continent.",
        },
      },
      {
        title: { es: "Resultados", ca: "Resultats", en: "Results" },
        text: {
          es: "El enfoque clásico (BoVW + ORB) alcanzó como máximo un 29,6% de precisión por continente con regresión logística, frente al 14,4% del azar, con África como continente mejor identificado. El enfoque moderno superó ampliamente estos resultados: la versión en TensorFlow logró un 75% de precisión por continente y un 60% por país, gracias a una capa de atención, fine-tuning y data augmentation; la versión en PyTorch, más ligera y sin GPU dedicada, obtuvo un 62% y un 40% respectivamente. Las visualizaciones con Grad-CAM confirman que el modelo neuronal aprende a fijarse en arquitectura, vegetación y otros elementos relevantes de la escena, en lugar de zonas poco informativas como el cielo.",
          ca: "L'enfocament clàssic (BoVW + ORB) va assolir com a màxim un 29,6% de precisió per continent amb regressió logística, davant del 14,4% de l'atzar, amb l'Àfrica com a continent millor identificat. L'enfocament modern va superar àmpliament aquests resultats: la versió amb TensorFlow va aconseguir un 75% de precisió per continent i un 60% per país, gràcies a una capa d'atenció, fine-tuning i data augmentation; la versió amb PyTorch, més lleugera i sense GPU dedicada, va obtenir un 62% i un 40% respectivament. Les visualitzacions amb Grad-CAM confirmen que el model neuronal aprèn a fixar-se en arquitectura, vegetació i altres elements rellevants de l'escena, en lloc de zones poc informatives com el cel.",
          en: "The classic approach (BoVW + ORB) reached a maximum of 29.6% continent accuracy with logistic regression, versus 14.4% for random chance, with Africa being the best-identified continent. The modern approach far surpassed these results: the TensorFlow version achieved 75% continent accuracy and 60% country accuracy thanks to an attention layer, fine-tuning, and data augmentation; the lighter, GPU-independent PyTorch version reached 62% and 40% respectively. Grad-CAM visualizations confirm the neural model learns to focus on architecture, vegetation, and other relevant scene elements rather than uninformative areas like the sky.",
        },
      },
    ],
  },

  {
    slug: "fractalPaws",
    category: "juegos",
    status: "activo",

    title: {
      es: "Fractal Paws",
      ca: "Fractal Paws",
      en: "Fractal Paws",
    },

    description: {
      es: "Juego de puzzles y aventura en 3D desarrollado con Unity, centrado en la exploración, la resolución de acertijos y la interacción con el entorno. El proyecto combina sistemas de gameplay, animación, navegación de NPCs, efectos visuales y una narrativa basada en la exploración.",
      ca: "Joc de puzles i aventura en 3D desenvolupat amb Unity, centrat en l'exploració, la resolució d'endevinalles i la interacció amb l'entorn. El projecte combina sistemes de gameplay, animació, navegació de NPCs, efectes visuals i una narrativa basada en l'exploració.",
      en: "A 3D puzzle-adventure game developed with Unity, focused on exploration, puzzle-solving, and interaction with the environment. The project combines gameplay systems, animation, NPC navigation, visual effects, and an exploration-based narrative.",
    },

    tags: ["Unity", "C#", "Blender", "3D Animation", "Music Development"],
    noRepo: {
      es: "Repositorio privado por el momento. Si quieres ver el código fuente, contáctame.",
      ca: "Repositori privat de moment. Si vols veure el codi font, contacta'm.",
      en: "Private repository yet. If you want to see the source code, contact me."
    },
    gallery: [],
  },

  {
    slug: "tentaCar",
    category: "robotica",
    status: "finalizado",

    title: {
      es: "TentaCar",
      ca: "TentaCar",
      en: "TentaCar",
    },

    description: {
      es: "Robot autónomo tipo Roomba que detecta objetos caídos en el suelo, los recoge con una pinza robótica y los almacena en un cubo, pensado para personas mayores o con movilidad reducida. Combina Raspberry Pi, detección de objetos con EfficientDet-lite0, detección de paredes por contornos y navegación con el algoritmo Bug2.",
      ca: "Robot autònom tipus Roomba que detecta objectes caiguts al terra, els recull amb una pinça robòtica i els emmagatzema en un cubell, pensat per a persones grans o amb mobilitat reduïda. Combina Raspberry Pi, detecció d'objectes amb EfficientDet-lite0, detecció de parets per contorns i navegació amb l'algorisme Bug2.",
      en: "Autonomous Roomba-style robot that detects objects on the floor, picks them up with a robotic gripper and stores them in a bin, designed for elderly or mobility-impaired people. Combines a Raspberry Pi, EfficientDet-lite0 object detection, contour-based wall detection and Bug2 navigation.",
    },

    tags: ["Python", "Raspberry Pi", "OpenCV", "TensorFlow Lite", "Robótica"],
    repo: "https://github.com/Manmaru68/TentaCar",
    
    gallery: [
      "../public/images/tentaCar/Tentacar.jpeg",
      "../public/images/tentaCar/Bug2Algo.gif",
      "../public/images/tentaCar/pinza.gif",
      "../public/images/tentaCar/coger_objeto.gif",
    ],

    details: [
      {
        title: { es: "Visión y detección de objetos", ca: "Visió i detecció d'objectes", en: "Vision and object detection" },
        text: {
          es: "Una cámara conectada a la Raspberry Pi Zero captura frames del entorno cada pocos segundos. Mediante PiCamera2 y el modelo preentrenado EfficientDet-lite0 se detectan los objetos presentes en la imagen. Como el modelo también reconoce objetos grandes (como neveras) y no distingue paredes, se aplica un algoritmo de contornos Canny junto con el análisis de suavidad de la superficie frontal para diferenciar una pared de un objeto recogible.",
          ca: "Una càmera connectada a la Raspberry Pi Zero captura frames de l'entorn cada pocs segons. Mitjançant PiCamera2 i el model preentrenat EfficientDet-lite0 es detecten els objectes presents a la imatge. Com que el model també reconeix objectes grans (com neveres) i no distingeix parets, s'aplica un algorisme de contorns Canny juntament amb l'anàlisi de suavitat de la superfície frontal per diferenciar una paret d'un objecte recollible.",
          en: "A camera connected to the Raspberry Pi Zero captures frames of the environment every few seconds. Using PiCamera2 and the pretrained EfficientDet-lite0 model, objects in the image are detected. Since the model also recognizes large objects (like fridges) and doesn't distinguish walls, a Canny edge-detection algorithm combined with surface-smoothness analysis is used to tell a wall apart from a pickable object.",
        },
      },
      {
        title: { es: "Navegación y esquiva de obstáculos", ca: "Navegació i esquiva d'obstacles", en: "Navigation and obstacle avoidance" },
        text: {
          es: "Cuando no hay una pared por delante, el robot se orienta y avanza hacia el objeto usando un sensor de proximidad y trigonometría básica para calcular ángulo y distancia. Si aparece una pared o columna en el camino, se activa el algoritmo Bug2, que esquiva el obstáculo desplazándose hacia la derecha hasta encontrar de nuevo una ruta libre hacia el objetivo.",
          ca: "Quan no hi ha una paret al davant, el robot s'orienta i avança cap a l'objecte fent servir un sensor de proximitat i trigonometria bàsica per calcular angle i distància. Si apareix una paret o columna pel camí, s'activa l'algorisme Bug2, que esquiva l'obstacle desplaçant-se cap a la dreta fins a trobar de nou una ruta lliure cap a l'objectiu.",
          en: "When there's no wall ahead, the robot orients itself and moves toward the object using a proximity sensor and basic trigonometry to calculate angle and distance. If a wall or column appears in its path, the Bug2 algorithm kicks in, skirting the obstacle to the right until it finds a clear route to the target again.",
        },
      },
      {
        title: { es: "Pinza y manipulación", ca: "Pinça i manipulació", en: "Gripper and manipulation" },
        text: {
          es: "Una vez el robot está posicionado frente al objeto, se captura un frame para localizarlo con precisión y se calculan los ángulos de cinemática inversa de cada servo (con una relación 1:2 en el servo de rotación) para situar la pinza justo encima. La pinza cierra, vuelve a la posición inicial, gira 90° y deja caer el objeto dentro del cubo de almacenamiento del robot.",
          ca: "Un cop el robot està posicionat davant l'objecte, es captura un frame per localitzar-lo amb precisió i es calculen els angles de cinemàtica inversa de cada servo (amb una relació 1:2 al servo de rotació) per situar la pinça just a sobre. La pinça tanca, torna a la posició inicial, gira 90° i deixa caure l'objecte dins el cubell d'emmagatzematge del robot.",
          en: "Once the robot is positioned in front of the object, a frame is captured to precisely locate it, and inverse kinematics angles are calculated for each servo (with a 1:2 ratio on the rotation servo) to place the gripper right above it. The gripper closes, returns to its initial position, rotates 90° and drops the object into the robot's storage bin.",
        },
      },
    ],
  },

  {
    slug: "candycrush",
    category: "juegos",
    status: "finalizado",

    title: {
      es: "Candy Crush",
      ca: "Candy Crush",
      en: "Candy Crush",
    },

    description: {
      es: "Clon del clásico juego de puzzles Candy Crush, desarrollado en C++ sobre una arquitectura orientada a objetos: gestión de tablero, detección de combinaciones (matches), caramelos especiales y un bucle de juego con máquina de estados.",
      ca: "Clon del joc clàssic de puzles Candy Crush, desenvolupat en C++ sobre una arquitectura orientada a objectes: gestió de tauler, detecció de combinacions (matches), caramel·ls especials i un bucle de joc amb màquina d'estats.",
      en: "Clone of the classic Candy Crush puzzle game, developed in C++ over an object-oriented architecture: board management, combination detection (matches), special candies and a game loop with a state machine.",
    },

    tags: ["C++", "SDL2", "Desarrollo de Videojuegos", "Match-3", "Puzzle", "POO", "Máquina de Estados"],
    repo: "https://github.com/Manmaru68/Candy-Crush",
  
    details: [
      {
        title: { 
          es: "Lógica del tablero y combinaciones", 
          ca: "Lògica del tauler i combinacions", 
          en: "Board logic and match detection" 
        },
        text: {
          es: "El tablero se gestiona mediante una matriz que valida movimientos y busca combinaciones horizontales, verticales y en forma de L o T. Al detectar grupos de tres o más caramelos, estos se eliminan, activando la gravedad para que caigan nuevas piezas y desencadenando reacciones en cadena (cascadas) de forma automatizada.",
          ca: "El tauler es gestiona mitjançant una matriu que valida moviments i busca combinacions horitzontals, verticals i en forma de L o T. En detectar grups de tres o més caramels, aquests s'eliminen, activant la gravetat perquè caiguin noves peces i desencadenant reaccions en cadena (cascades) de manera automatitzada.",
          en: "The board is managed via a matrix that validates moves and searches for horizontal, vertical, and L or T-shaped matches. When groups of three or more candies are detected, they are removed, activating gravity for new pieces to fall and triggering automated chain reactions (cascades)."
        }
      },
      {
        title: { 
          es: "Tipos de caramelos y mecánicas", 
          ca: "Tipus de caramels i mecàniques", 
          en: "Candy types and mechanics" 
        },
        text: {
          es: "Aplicando programación orientada a objetos, se diferencian caramelos normales y especiales. Al hacer combinaciones mayores a tres, el algoritmo genera caramelos rayados, envueltos o bombas de color, cada uno con un patrón destructivo único. El nivel finaliza al recolectar el objetivo de colores antes de agotar el contador de turnos.",
          ca: "Aplicant programació orientada a objectes, es diferencien caramels normals i especials. En fer combinacions majors a tres, l'algorisme genera caramels ratllats, embolcallats o bombes de color, cadascun amb un patró destructiu únic. El nivell finalitza en recol·lectar l'objectiu de colors abans d'esgotar el comptador de torns.",
          en: "Applying object-oriented programming, normal and special candies are differentiated. When making combinations larger than three, the algorithm generates striped, wrapped, or color bomb candies, each with a unique destructive pattern. The level ends when the color target is collected before running out of turns."
        }
      },
      {
        title: { 
          es: "Bucle de juego y renderizado", 
          ca: "Bucle de joc i renderització", 
          en: "Game loop and rendering" 
        },
        text: {
          es: "El flujo principal está regido por una máquina de estados que intercala la espera de interacción del jugador, el cálculo de físicas básicas y la resolución de la lógica en cascada. El apartado visual se apoya en una librería externa basada en SDL2, un patrón Singleton para gestionar los recursos en memoria y la renderización de sprites en coordenadas precisas.",
          ca: "El flux principal està regit per una màquina d'estats que intercala l'espera d'interacció del jugador, el càlcul de físiques bàsiques i la resolució de la lògica en cascada. L'apartat visual es recolza en una llibreria externa basada en SDL2, un patró Singleton per gestionar els recursos en memòria i la renderització de sprites en coordenades precises.",
          en: "The main flow is governed by a state machine that alternates between waiting for player input, calculating basic physics, and resolving cascade logic. The visual aspect relies on an external SDL2-based library, a Singleton pattern to manage memory resources, and rendering sprites at precise coordinates."
        }
      }
    ],
  },

  {
    slug: "iworld",
    category: "web",
    status: "finalizado",

    title: {
      es: "iWorld — Tienda online",
      ca: "iWorld — Botiga online",
      en: "iWorld — Online Store",
    },

    description: {
      es: "Tienda online de tecnología inspirada en la experiencia de compra de Apple, desarrollada con PHP, PostgreSQL y JavaScript. Incluye catálogo dinámico, búsqueda de productos, autenticación de usuarios, gestión de perfiles, carrito de compra, procesamiento de pedidos e historial de compras.",
      ca: "Botiga online de tecnologia inspirada en l'experiència de compra d'Apple, desenvolupada amb PHP, PostgreSQL i JavaScript. Inclou catàleg dinàmic, cerca de productes, autenticació d'usuaris, gestió de perfils, cistella de compra, processament de comandes i historial de compres.",
      en: "Technology online store inspired by the Apple shopping experience, developed with PHP, PostgreSQL and JavaScript. It includes a dynamic catalogue, product search, user authentication, profile management, shopping cart, order processing and purchase history.",
    },

    tags: [
      "PHP",
      "PostgreSQL",
      "JavaScript",
      "jQuery",
      "HTML5",
      "CSS3",
      "E-commerce",
      "Web Development",
      "MVC",
      "Sessions",
      "AJAX"
    ],

    repo: "https://github.com/Manmaru68/iWorld",

    details: [
      {
        title: {
          es: "Catálogo y navegación dinámica",
          ca: "Catàleg i navegació dinàmica",
          en: "Dynamic catalogue and navigation"
        },
        text: {
          es: "El catálogo se genera dinámicamente a partir de los datos almacenados en PostgreSQL, organizando los productos por categorías como iPhone, Mac, iPad y AirPods. La navegación permite acceder directamente a cada categoría y localizar productos mediante un sistema de búsqueda en tiempo real.",
          ca: "El catàleg es genera dinàmicament a partir de les dades emmagatzemades a PostgreSQL, organitzant els productes per categories com iPhone, Mac, iPad i AirPods. La navegació permet accedir directament a cada categoria i localitzar productes mitjançant un sistema de cerca en temps real.",
          en: "The catalogue is dynamically generated from data stored in PostgreSQL, organizing products into categories such as iPhone, Mac, iPad and AirPods. Navigation provides direct access to each category and allows products to be located through a real-time search system."
        }
      },

      {
        title: {
          es: "Autenticación y gestión de usuarios",
          ca: "Autenticació i gestió d'usuaris",
          en: "Authentication and user management"
        },
        text: {
          es: "El sistema incorpora registro e inicio de sesión mediante sesiones PHP, permitiendo autenticarse con nombre de usuario o correo electrónico. Los usuarios pueden modificar sus datos personales, dirección, población, código postal y fotografía de perfil. Las contraseñas se almacenan mediante hashing con password_hash().",
          ca: "El sistema incorpora registre i inici de sessió mitjançant sessions PHP, permetent autenticar-se amb nom d'usuari o correu electrònic. Els usuaris poden modificar les seves dades personals, adreça, població, codi postal i fotografia de perfil. Les contrasenyes s'emmagatzemen mitjançant hashing amb password_hash().",
          en: "The system includes registration and login through PHP sessions, allowing users to authenticate with either their username or email address. Users can update their personal information, address, city, postal code and profile picture. Passwords are stored using password_hash()."
        }
      },

      {
        title: {
          es: "Carrito y procesamiento de pedidos",
          ca: "Cistella i processament de comandes",
          en: "Shopping cart and order processing"
        },
        text: {
          es: "El carrito se gestiona mediante sesiones PHP y permite añadir, eliminar y modificar cantidades de productos, manteniendo automáticamente el número de unidades y el precio total. Los usuarios autenticados pueden tramitar el pedido, que se almacena en PostgreSQL junto con sus productos, cantidades y precios.",
          ca: "La cistella es gestiona mitjançant sessions PHP i permet afegir, eliminar i modificar quantitats de productes, mantenint automàticament el nombre d'unitats i el preu total. Els usuaris autenticats poden tramitar la comanda, que s'emmagatzema a PostgreSQL juntament amb els seus productes, quantitats i preus.",
          en: "The shopping cart is managed through PHP sessions and allows products to be added, removed and updated while automatically maintaining the total quantity and price. Authenticated users can submit their order, which is stored in PostgreSQL together with its products, quantities and prices."
        }
      },

      {
        title: {
          es: "Comunicación asíncrona e interacción",
          ca: "Comunicació asíncrona i interacció",
          en: "Asynchronous communication and interaction"
        },
        text: {
          es: "JavaScript y jQuery se utilizan para crear una experiencia más dinámica, realizando peticiones AJAX y Fetch para consultar detalles de productos, actualizar el carrito y cargar el historial de compras sin necesidad de recargar continuamente la página. La interfaz también incorpora menús desplegables, pop-ups y navegación dinámica entre secciones.",
          ca: "JavaScript i jQuery s'utilitzen per crear una experiència més dinàmica, realitzant peticions AJAX i Fetch per consultar detalls de productes, actualitzar la cistella i carregar l'historial de compres sense necessitat de recarregar contínuament la pàgina. La interfície també incorpora menús desplegables, pop-ups i navegació dinàmica entre seccions.",
          en: "JavaScript and jQuery are used to create a more dynamic experience, making AJAX and Fetch requests to retrieve product details, update the cart and load purchase history without continuously reloading the page. The interface also includes dropdown menus, pop-ups and dynamic section navigation."
        }
      }
    ],
  },

  {
    slug: "phantomedit",
    category: "web",
    status: "finalizado",

    title: {
      es: "PhantomEdit",
      ca: "PhantomEdit",
      en: "PhantomEdit",
    },

    description: {
      es: "Aplicación web de edición de imágenes mediante instrucciones en lenguaje natural, con entrada por texto o audio, almacenamiento en Google Cloud Storage y procesamiento asíncrono mediante un servicio externo.",
      ca: "Aplicació web d'edició d'imatges mitjançant instruccions en llenguatge natural, amb entrada per text o àudio, emmagatzematge a Google Cloud Storage i processament asíncron mitjançant un servei extern.",
      en: "Web application for image editing through natural-language instructions, supporting text or audio input, Google Cloud Storage and asynchronous processing through an external service.",
    },

    tags: [
      "PHP",
      "JavaScript",
      "Google Cloud",
      "Google Cloud Storage",
      "HTML5",
      "CSS3",
      "cURL",
      "MediaRecorder API",
      "Procesamiento de Imágenes",
      "Arquitectura MVC",
      "APIs REST"
    ],

    repo: "https://github.com/Manmaru68/PhantomEdit",

    details: [
      {
        title: {
          es: "Edición mediante texto o audio",
          ca: "Edició mitjançant text o àudio",
          en: "Text or audio-based editing"
        },
        text: {
          es: "La aplicación permite subir una imagen y describir los cambios mediante texto o una grabación de audio desde el navegador. El frontend utiliza la API MediaRecorder para capturar instrucciones de voz y envía la petición al backend en formato multipart/form-data.",
          ca: "L'aplicació permet pujar una imatge i descriure els canvis mitjançant text o una gravació d'àudio des del navegador. El frontend utilitza l'API MediaRecorder per capturar instruccions de veu i envia la petició al backend en format multipart/form-data.",
          en: "The application lets users upload an image and describe the desired changes using text or an audio recording from the browser. The frontend uses the MediaRecorder API to capture voice instructions and sends the request to the backend as multipart/form-data."
        }
      },
      {
        title: {
          es: "Almacenamiento y procesamiento asíncrono",
          ca: "Emmagatzematge i processament asíncron",
          en: "Storage and asynchronous processing"
        },
        text: {
          es: "Las imágenes originales y los archivos de audio se almacenan en Google Cloud Storage. Cada edición recibe un requestId único y se envía a un servicio externo de procesamiento. El frontend consulta periódicamente el estado de la petición hasta que la imagen editada está disponible.",
          ca: "Les imatges originals i els fitxers d'àudio s'emmagatzemen a Google Cloud Storage. Cada edició rep un requestId únic i s'envia a un servei extern de processament. El frontend consulta periòdicament l'estat de la petició fins que la imatge editada està disponible.",
          en: "Original images and audio files are stored in Google Cloud Storage. Each edit receives a unique requestId and is sent to an external processing service. The frontend periodically checks the request status until the edited image becomes available."
        }
      },
      {
        title: {
          es: "Arquitectura y API",
          ca: "Arquitectura i API",
          en: "Architecture and API"
        },
        text: {
          es: "El backend separa el enrutamiento, la gestión HTTP, la lógica de negocio y el almacenamiento mediante index.php, ImageController, ImageService y GoogleCloudStorage. La aplicación expone endpoints para crear una edición y consultar su estado, manteniendo el procesamiento desacoplado de la interfaz.",
          ca: "El backend separa l'enrutament, la gestió HTTP, la lògica de negoci i l'emmagatzematge mitjançant index.php, ImageController, ImageService i GoogleCloudStorage. L'aplicació exposa endpoints per crear una edició i consultar-ne l'estat, mantenint el processament desacoblat de la interfície.",
          en: "The backend separates routing, HTTP handling, business logic and storage through index.php, ImageController, ImageService and GoogleCloudStorage. The application exposes endpoints to create an edit request and check its status, keeping processing decoupled from the interface."
        }
      }
    ],
  },

  {
    slug: "pokemon-yuuki",
    category: "juegos",
    status: "activo",

    title: {
      es: "Pokémon Yuuki",
      ca: "Pokémon Yuuki",
      en: "Pokémon Yuuki",
    },

    description: {
      es: "Fan game de Pokémon desarrollado sobre Pokémon Essentials y RPG Maker XP, con una región original, historia propia, personajes, Fakemon, ocho gimnasios con desafíos temáticos, Alto Mando, Team Yuuki y contenido de postgame.",
      ca: "Fan game de Pokémon desenvolupat sobre Pokémon Essentials i RPG Maker XP, amb una regió original, història pròpia, personatges, Fakemon, vuit gimnasos amb reptes temàtics, Alt Comandament, Team Yuuki i contingut de postgame.",
      en: "Pokémon fan game developed with Pokémon Essentials and RPG Maker XP, featuring an original region, custom story, characters, Fakemon, eight gyms with themed challenges, an Elite Four, Team Yuuki and post-game content.",
    },

    tags: [
      "Pokémon Essentials",
      "RPG Maker XP",
      "Ruby",
      "RGSS",
      "Desarrollo de Videojuegos",
      "Game Design",
      "Fangame",
      "Fakemon",
      "Pokémon",
      "IA",
      "Diseño de Niveles"
    ],

    repo: "https://github.com/Manmaru68/Pokemon-Yuuki",

    details: [
      {
        title: {
          es: "Región, gimnasios y exploración",
          ca: "Regió, gimnasos i exploració",
          en: "Region, gyms and exploration"
        },
        text: {
          es: "El proyecto construye una aventura Pokémon propia mediante una colección extensa de mapas, rutas, ciudades, cuevas, islas, montañas, gimnasios, centros Pokémon y otras localizaciones. Los ocho gimnasios presentan tipos y desafíos diferentes, como pruebas de listening, laberintos, puzzles de hielo o preguntas inversas.",
          ca: "El projecte construeix una aventura Pokémon pròpia mitjançant una col·lecció extensa de mapes, rutes, ciutats, coves, illes, muntanyes, gimnasos, centres Pokémon i altres localitzacions. Els vuit gimnasos presenten tipus i reptes diferents, com proves de listening, laberints, puzles de gel o preguntes inverses.",
          en: "The project builds an original Pokémon adventure through an extensive collection of maps, routes, cities, caves, islands, mountains, gyms, Pokémon Centers and other locations. The eight gyms feature different types and challenges, including listening tests, mazes, ice puzzles and reverse questions."
        }
      },
      {
        title: {
          es: "Historia y Team Yuuki",
          ca: "Història i Team Yuuki",
          en: "Story and Team Yuuki"
        },
        text: {
          es: "La aventura gira alrededor de Alex y de los acontecimientos relacionados con Team Yuuki, una organización antagonista que aparece progresivamente a lo largo de la región.",
          ca: "L'aventura gira al voltant d'Alex i dels esdeveniments relacionats amb Team Yuuki, una organització antagonista que apareix progressivament al llarg de la regió.",
          en: "The adventure follows Alex and the events surrounding Team Yuuki, an antagonist organization introduced progressively throughout the region."
        }
      },
      {
        title: {
          es: "Fakemon, sistemas y extensión del motor",
          ca: "Fakemon, sistemes i extensió del motor",
          en: "Fakemon, systems and engine extensions"
        },
        text: {
          es: "El proyecto amplía Pokémon Essentials mediante datos PBS, scripts Ruby y plugins. Incluye Fakemon y formas personalizadas, movimientos, habilidades, entrenadores, encuentros y recursos propios, además de plugins para IA mejorada, selección de género, herramientas adicionales y correcciones del motor.",
          ca: "El projecte amplia Pokémon Essentials mitjançant dades PBS, scripts Ruby i plugins. Inclou Fakemon i formes personalitzades, moviments, habilitats, entrenadors, trobades i recursos propis, a més de plugins per a una IA millorada, selecció de gènere, eines addicionals i correccions del motor.",
          en: "The project extends Pokémon Essentials through PBS data, Ruby scripts and plugins. It includes custom Fakemon and forms, moves, abilities, trainers, encounters and original resources, together with plugins for improved AI, gender selection, additional tools and engine fixes."
        }
      }
    ],
  },

  {
    slug: "f1-2d",
    category: "juegos",
    status: "finalizado",
    title: {
      es: "F1 2D",
      ca: "F1 2D",
      en: "F1 2D",
    },
    description: {
      es: "Videojuego de carreras de Fórmula 1 en 2D desarrollado con Java 17 y Swing/AWT, con modos QUALY y RACE, IA basada en racing line, slipstream, cronometraje por sectores, penalizaciones, colisiones y una estrategia de testing avanzada.",
      ca: "Videojoc de curses de Fórmula 1 en 2D desenvolupat amb Java 17 i Swing/AWT, amb modes QUALY i RACE, IA basada en racing line, slipstream, cronometratge per sectors, penalitzacions, col·lisions i una estratègia de testing avançada.",
      en: "2D Formula 1 racing game developed with Java 17 and Swing/AWT, featuring QUALY and RACE modes, racing-line AI, slipstream, sector timing, penalties, collision detection, and an extensive testing strategy.",
    },
    
    details: [
      {
        title: {
          es: "Simulación de carrera",
          ca: "Simulació de cursa",
          en: "Race simulation",
        },
        text: {
          es: "Conducción 2D con QUALY y RACE, carrera a 3 vueltas, cuenta atrás, checkpoints, 3 sectores, tiempos por vuelta, penalizaciones, vueltas inválidas y clasificación en tiempo real.",
          ca: "Conducció 2D amb QUALY i RACE, cursa de 3 voltes, compte enrere, checkpoints, 3 sectors, temps per volta, penalitzacions, voltes invàlides i classificació en temps real.",
          en: "2D driving with QUALY and RACE, a 3-lap race, countdown, checkpoints, 3 sectors, lap timing, penalties, invalid laps, and real-time classification.",
        },
      },
      {
        title: {
          es: "IA, racing line y slipstream",
          ca: "IA, racing line i slipstream",
          en: "AI, racing line and slipstream",
        },
        text: {
          es: "Rivales IA con distintos niveles de habilidad, waypoints, velocidad objetivo, distancia de frenado y racing line. El slipstream se activa desde la segunda vuelta a menos de 100 píxeles y depende del skill level.",
          ca: "Rivals IA amb diferents nivells d'habilitat, waypoints, velocitat objectiu, distància de frenada i racing line. El slipstream s'activa des de la segona volta a menys de 100 píxels i depèn del skill level.",
          en: "AI rivals with different skill levels, waypoints, target speed, braking distance, and racing lines. Slipstream activates from lap two within 100 pixels and scales with skill level.",
        },
      },
      {
        title: {
          es: "Testing y calidad",
          ca: "Testing i qualitat",
          en: "Testing and quality",
        },
        text: {
          es: "Estrategia de pruebas documentada con TDD, caja negra, caja blanca, particiones, valores frontera, pairwise, data-driven testing, Mockito, JaCoCo y Checkstyle, además de un flujo de CI descrito en el informe TQS.",
          ca: "Estratègia de proves documentada amb TDD, caixa negra, caixa blanca, particions, valors frontera, pairwise, data-driven testing, Mockito, JaCoCo i Checkstyle, a més d'un flux de CI descrit a l'informe TQS.",
          en: "Documented testing strategy using TDD, black-box, white-box, partitions, boundary values, pairwise, data-driven testing, Mockito, JaCoCo, and Checkstyle, plus a CI workflow described in the TQS report.",
        },
      },
    ],

    tags: [
      "Java 17",
      "Java Swing",
      "Java AWT",
      "Maven",
      "JUnit 5",
      "Mockito",
      "JaCoCo",
      "Checkstyle",
      "Inteligencia Artificial",
      "Racing Line",
      "Slipstream",
      "Desarrollo de Videojuegos",
      "Testing",
      "TDD",
      "Caja Negra",
      "Caja Blanca",
      "Data-Driven Testing",
      "MVC",
    ],
    repo: "https://github.com/Manmaru68/F1_2D",
    gallery: [
      "../public/images/f1_2d/1.png",
      "../public/images/f1_2d/2.png",
    ],

  },

  {
    slug: "proximo-proyecto",
    category: "otros",
    status: "próximamente",

    title: {
      es: "Próximo proyecto",
      ca: "Proper projecte",
      en: "Next project",
    },

    description: {
      es: "Todavía no hay nada aquí.",
      ca: "Encara no hi ha res aquí.",
      en: "Nothing here yet.",
    },

    tags: [],
    repo: null,
    image: null,
  },
];

export const CATEGORY_LABELS = {
  "computer-vision": { es: "Visión por Computador", ca: "Visió per Computador", en: "Computer Vision" },
  "juegos": { es: "Juegos", ca: "Jocs", en: "Games" },
  "robotica": { es: "Robótica", ca: "Robòtica", en: "Robotics" },
  "web": { es: "Desarrollo Web", ca: "Desenvolupament Web", en: "Web Development" },
  "otros": { es: "Otros", ca: "Altres", en: "Other" },
};

export const CATEGORY_COLOR = {
  "computer-vision": "#1AA79A",
  "juegos": "#6C4CE0",
  "robotica": "#11d31b",
  "web": "#ce2d2d",
  "otros": "#F4C531",
};

export const colorFor = (category) =>
  CATEGORY_COLOR[category] || CATEGORY_COLOR.otros;

export const labelFor = (category, language) =>
  (CATEGORY_LABELS[category] || CATEGORY_LABELS.otros)[language];