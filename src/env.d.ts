/// <reference types="vite/client" />

// Assets comunes
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';
declare module '*.avif';
declare module '*.ico';

// CSS
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';

// CSS Modules (si usas *.module.css)
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// Fuentes y binarios
declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.eot';
declare module '*.otf';

// Otros tipos
declare module '*.mp3';
declare module '*.mp4';
declare module '*.webm';
declare module '*.worker.ts';
declare module '*.worker.js';

// WASM (si trabajas con wasm)
declare module '*.wasm';

// Si necesitas importar SVG como React component (ver paso 5)
