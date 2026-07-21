# Horama Apps

Portafolio e incubadora pública de [Horama Apps](https://github.com/horama-apps).

## Actualizar aplicaciones

Toda la información visible de las aplicaciones vive en [`data/apps.yaml`](data/apps.yaml):

- identidad y colores;
- descripción, pitch y audiencia;
- versión y etapa;
- funcionalidades;
- roadmap;
- tipo de apoyo buscado.

Agregar un bloque nuevo en `apps:` crea automáticamente su tarjeta en el inicio y su ruta `/{slug}`.
Al iniciar o compilar el proyecto, el YAML se transforma automáticamente en un módulo incluido en el sitio; no es necesario editar `apps.generated.ts`.

Las traducciones inglesas del contenido de cada aplicación viven en [`data/en.yaml`](data/en.yaml). Los textos comunes de navegación e interfaz están en [`lib/i18n.tsx`](lib/i18n.tsx). Las rutas españolas permanecen en `/{slug}` y sus equivalentes inglesas se generan en `/en/{slug}`.

## Desarrollo

```bash
npm install
npm run dev
```

## Publicación en GitHub Pages

Cada push a `main` genera la versión estática y la publica con GitHub Actions. En la configuración del repositorio, **Pages → Build and deployment** debe usar **GitHub Actions**.
