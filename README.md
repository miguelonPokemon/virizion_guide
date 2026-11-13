# Virizion Raid Guide

## 🚀 Despliegue Automático (GitHub Actions)
1. Sube este repositorio a GitHub.
2. Ve a **Settings > Pages** en tu repositorio de GitHub.
3. En **Build and deployment**, asegúrate de que el origen (*Source*) esté configurado en **GitHub Actions**.
4. Cada vez que hagas `git push` a la rama `main` o `master`, la acción de GitHub compilará el proyecto y lo publicará automáticamente.

## Ejecución Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```
