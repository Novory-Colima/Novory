## Fase 1 - Definir la estrategia
- ¿Quién es el cliente?
  Respuesta: El cliente inicial al que queremos llegar es a dueños de pequeños y medianos negocios como restaurantes, clínicas dentales, mueblerías, tiendas pequeñas de ropa. 
- ¿Qué problema tiene?
  Respuesta: El problema principal es que solo cuentan con una página (en facebook) para hacer publicidad, cosa que limita mucho su visibilidad, además de tener procesos repetitivos (como responder a clientes desde diferentes redes sociales, subir lead o publicidad, etc) que les quita tiempo para otros pendientes en su negocio. Con una página web y un chat personalizado para su negocio buscamos facilitar a sus clientes obtener información desde ubicación del lugar, servicios o productos que ofrecen y responderle dudas 24/7 sin limitación de horarios de atención limitados. 
- ¿Qué debe sentir cuando entra?
  Respuesta: Queremos que el nuestros cliente al entrar a nuestra página sienta profesionalismo, tenga claro lo que le ofrecemos y cómo esto le beneficia y ahorra tanto tiempo y dinero. Mostrarnos de forma profesional, pero también con un estilo más moderno, alejado de las clásicas páginas que no tienen esa personalidad de tecnología, profesionalismo y no transmiten seguridad y confianza al cliente. Hacerlo sentir que cuando nos contacte (a través de nuestra web) le atenderemos y resolveremos cualquiera de sus dudas acerca de lo que ofrecemos y como lo podemos ayudar. 
- ¿Qué acción queremos que haga?
  Respuesta: Queremos que muestre la marca de "Novory" como la agencia profesional y dedicada a ofrecer servicios de creación de páginas web, automatizaciones y chats personalizados para sus negocios o empresas. Además, mostrar nuestras habilidades y forma de trabajar, y dando también como referencia páginas y trabajos (nuestro portafolio) que hemos realizado a lo largo de nuestra historia como agencia. 
## Fase 2 - Arquitectura de la página
- Creemos algo parecido a esto: 
	/  
	│  
	├── Hero  
	├── Empresas que ayudamos  
	├── Problemas comunes  
	├── Servicios  
	├── Cómo trabajamos  
	├── Resultados  
	├── Casos de éxito  
	├── Preguntas frecuentes  
	├── CTA  
	└── Footer
	Con mucho más detalle y datos relevantes de la agencia y de los fundadores.
### Datos sobre mi visión
1. Público objetivo (respuesta):
	1. restaurantes
	2. dentistas
	3. abogados
	4. gimnasios
	5. mueblerías
	6. pequeños negocios locales
2. Nivel de imagen (respuesta):
	1. Oscuro y elegante
	2. profesional y moderno
	3. animaciones muy visuales
3. Colores elegidos:
	Negros / azules muy oscuros:  
		--color-2: #000000;  
		--color-10: #000022;  
		--color-20: #000033;  
		--color-40: #223377;  
		--color-50: #223388;
	Grises / negros medios:  
		--color-12: #333333;  
		--color-19: #444444;  
		--color-55: #444499;  
		--color-56: #4433bb; (este es más azulado oscuro pero lo dejo aquí por cercanía)  
		--color-35: #4444aa;  
		--color-8: #4444cc;  
		--color-11: #4444dd;  
		--color-34: #4455bb;  
		--color-18: #4444bb;  
		--color-1: #ffffff; (nota: blanco incluido más abajo; aquí estaba por error de proximidad — lo colocaré correctamente en sección de claros)
	Blancos / muy claros:  
		--color-1: #ffffff;  
		--color-9: #eeeeee;  
		--color-33: #eeeeff;  
		--color-13: #eeffff;  
		--color-45: #ddffff;  
		--color-32: #ddeeff;
	Grises claros / neutrales:  
		--color-3: #bbbbbb;  
		--color-21: #aaaaaa;  
		--color-27: #999999;  
		--color-48: #9999cc;  
		--color-16: #777777;  
		--color-23: #555555;  
		--color-26: #666666;  
		--color-47: #5555cc;  
		--color-44: #5555bb;
	Azules muy claros / cianes:  
		--color-25: #6699ff;  
		--color-49: #66bbff;  
		--color-17: #66aaff;  
		--color-28: #77bbff;  
		--color-39: #77ccff;  
		--color-51: #77aaff;  
		--color-29: #5577ff;  
		--color-30: #4477ff;  
		--color-24: #4466ff;  
		--color-31: #4466ee;  
		--color-41: #4466dd;  
		--color-36: #5566cc;  
		--color-43: #5566dd;  
		--color-37: #5566ee;  
		--color-42: #5577ee;  
		--color-14: #5588ff;  
		--color-38: #5599ff;  
		--color-22: #4455ff;  
		--color-15: #4455cc;  
		--color-6: #4455ee;  
		--color-7: #4455dd;  
		--color-34: #4455bb;  
		--color-5: #dddddd;
	Morados / añil / lavanda:  
		--color-53: #443399;  
		--color-54: #8899dd;  
		--color-52: #7788dd;  
		--color-46: #6688ee;
	Otros / ajustes finales:  
		--color-4: #cccccc;  
		--color-33: #eeeeff; (ya listado entre muy claros)  
		--color-21: #aaaaaa; (ya listado en grises claros)
4. Secciones de la página
	- Sobre nosotros
	- Servicios
		- Desarrollo Web
		- Optimización del SEO (local)
		- Automatizaciones
	- Portafolio
	- Blog
	- Contacto
5. Acciones que pueda hacer el visitante:
	1. Llenar un formulario con sus datos (nombre, correo, número de teléfono, negocio, mensaje descriptivo), enviarlo a una conversación con un chat personalizado de nuestra agencia en whatsapp.
6. Tecnologías que usarémos:
	1. AStro
	2. Tailwind
	3. Motion One
	4. GSAP
	5. Lenirs
	6. View Transitions
	7. Iconify
	8. MDX
	9. Astro Content Collections
7. Que tanto queremos impresionar: 
	1. 10 = queremos una experiencia que haga pensar "quiero trabajar con ellos" apenas vean nuestra página.
8. Referencias que tenemos: 
	1. Página de referencia con la cuál queremos estructurar la página para la agencia Novory: [Astro Rocket — Astro 7 starter theme — Astro Rocket](https://astrorocket.dev/)
	2. Página de referencia para las secciones y acomodo guía para la página de la agencia Novory: [Astrolify — Ship your SaaS faster](https://astrolify.vercel.app/#)
	