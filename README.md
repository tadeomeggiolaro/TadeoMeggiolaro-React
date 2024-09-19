# Ecommerce Familiar de Prendas Recicladas

Este es un proyecto de ecommerce creado por nuestra familia, donde nos dedicamos a la confección y venta de prendas de ropa a partir de telas recicladas. Nuestro enfoque está en la moda sustentable, contribuyendo a reducir el desperdicio textil y crear productos únicos que respeten el medio ambiente.

## Tecnologías Usadas

Este proyecto utiliza un conjunto moderno de tecnologías frontend y herramientas de desarrollo para garantizar rendimiento y escalabilidad. A continuación, se detallan las principales tecnologías empleadas:

### Frontend

- **React**: Versión `^18.3.1`. Utilizado para construir interfaces de usuario reactivas y modulares. Nos permite organizar la aplicación en componentes reutilizables.
- **React DOM**: Versión `^18.3.1`. Maneja el rendering de los componentes React en el navegador.
- **React Router DOM**: Versión `^6.26.1`. Implementa la navegación entre diferentes rutas dentro de la aplicación, facilitando una experiencia de usuario fluida sin recargas de página.
- **React Icons**: Versión `^5.2.1`. Ofrece una librería de íconos fáciles de integrar en los componentes de la interfaz.

### Firebase

- **Firebase**: Versión `^10.13.1`. Usamos Firebase para la autenticación de usuarios, la base de datos en tiempo real y el almacenamiento de imágenes de productos.

### Herramientas de Desarrollo

- **Vite**: Versión `^5.3.4`. Un moderno bundler para proyectos frontend. Proporciona un entorno de desarrollo rápido y eficiente, con soporte para módulos de ES nativos y HMR (Hot Module Replacement).
- **ESLint**: Versión `^8.57.0`. Utilizado para mantener la calidad del código asegurando el cumplimiento de estándares de estilo y sintaxis.
  - **eslint-plugin-react**: Versión `^7.34.3`. Ayuda a seguir las mejores prácticas al desarrollar con React.
  - **eslint-plugin-react-hooks**: Versión `^4.6.2`. Asegura que los hooks de React se utilicen correctamente.
  - **eslint-plugin-react-refresh**: Versión `^0.4.7`. Mejora el flujo de trabajo de desarrollo habilitando actualizaciones rápidas de los componentes sin perder el estado.
- **@vitejs/plugin-react-swc**: Versión `^3.5.0`. Plugin para integrar React con Vite, utilizando la compilación optimizada con SWC (un compilador más rápido que Babel).
- **@types/react y @types/react-dom**: Paquetes de tipos para habilitar TypeScript en los componentes React, asegurando una mejor experiencia de desarrollo y prevención de errores.

## Instalación

Sigue los siguientes pasos para ejecutar el proyecto localmente:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu_usuario/ecommerce-reciclado.git
Navega a la carpeta del proyecto:


cd ecommerce-reciclado
Instala las dependencias usando npm o yarn:


npm install

yarn install
Inicia el servidor de desarrollo:


npm run dev

yarn dev
Abre el navegador y ve a http://localhost:3000 para ver la aplicación en acción.

Scripts Disponibles
En el proyecto puedes ejecutar los siguientes comandos:

npm run dev: Inicia el servidor de desarrollo de Vite con Hot Module Replacement (HMR).
npm run build: Compila la aplicación para producción en la carpeta dist.
npm run preview: Sirve la aplicación compilada para previsualización.
npm run lint: Ejecuta ESLint para analizar el código y detectar errores o problemas de estilo.
