# Prueba_FrontEnd_Sithec
Replicar lo más fiel posible la landing page provista en Figma usando Angular 14 o superior.
📝 Documentación del Proyecto
Este proyecto es una aplicación web estática construida con Angular, enfocada en ofrecer una experiencia de usuario fluida y un diseño responsivo optimizado para una amplia gama de dispositivos.

💻 Stack Tecnológico
A continuación se detallan las tecnologías clave y las versiones utilizadas en el desarrollo de este proyecto.

Framework: Angular v15.2.0

Una plataforma para construir aplicaciones web front-end de alto rendimiento y escalabilidad. Se optó por el uso de Componentes Standalone para una arquitectura más modular, simplificando la estructura y el mantenimiento del código.

Lenguaje de Programación: TypeScript v4.9.4

Un superset de JavaScript con tipado estático, que mejora la calidad del código, facilita la detección de errores en tiempo de desarrollo y optimiza el proceso de refactorización.

Gestión de Estilos: LESS v4.1.3

Un preprocesador de CSS que extiende el lenguaje con variables, funciones, anidamiento y mixins, permitiendo la creación de hojas de estilo más organizadas y reutilizables.

Entorno de Ejecución: Node.js v18.10.0

El entorno de ejecución de JavaScript necesario para ejecutar Angular CLI y las dependencias del proyecto.

Gestor de Paquetes: npm v9.6.7

Se utilizó para la gestión de dependencias y la ejecución de scripts del proyecto.

⚙️ Guía de Instalación y Despliegue
Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno de desarrollo local.

Requisitos Previos
Asegúrate de tener instalados los siguientes componentes:

Node.js (versión recomendada: 18.x)

npm (versión recomendada: 9.x)

Angular CLI (versión recomendada: 15.x)

Instalación de Dependencias
Clona el repositorio desde GitHub:

Bash

git clone https://github.com/tu-usuario/tu-repositorio.git
Navega al directorio del proyecto:

Bash

cd nombre-del-proyecto
Instala las dependencias del proyecto:

Bash

npm install
Despliegue Local
Para iniciar la aplicación en un servidor de desarrollo local, ejecuta el siguiente comando:

Bash

ng serve
La aplicación estará disponible en http://localhost:4200/. El servidor monitoreará los cambios en el código y actualizará automáticamente la página.

📱 Estrategia de Diseño Responsivo
El diseño responsivo fue implementado utilizando un enfoque mobile-first con media queries en LESS. Esto asegura que la experiencia de usuario sea óptima en cualquier tamaño de pantalla, desde dispositivos móviles hasta monitores de escritorio.

Dispositivos Móviles (max-width: 992px): Los elementos de navegación de escritorio, como el menú completo y el botón de CTA, se ocultan. En su lugar, se activa un ícono de menú de hamburguesa que, al ser pulsado, revela un menú deslizable optimizado para la navegación táctil.

Dispositivos de Escritorio (min-width: 993px): La interfaz muestra el menú de navegación completo y estático.

📈 Potenciales Mejoras
Para llevar este proyecto al siguiente nivel, se proponen las siguientes mejoras, que podrían añadir nuevas funcionalidades y fortalecer la arquitectura:

Desarrollo de un Backend:

Integración de AWS (Amazon Web Services): Implementar un backend utilizando servicios de AWS como AWS Lambda y API Gateway. Esto permitiría funcionalidades dinámicas como el manejo de envíos de formularios y la autenticación de usuarios sin la necesidad de un servidor tradicional.

Servicio de Autenticación de Usuarios:

Implementar un sistema de autenticación completo utilizando Amazon Cognito. Esto permitiría a los usuarios registrarse, iniciar sesión y acceder a contenido protegido.

Refactorización y Optimización:

Revisar el código para optimizar el rendimiento y reducir el tamaño de los bundles de JavaScript, lo que mejoraría los tiempos de carga de la página.
