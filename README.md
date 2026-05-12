# 📚 BiblioSmart · Guía PostgreSQL
### Biblioteca Municipal de Medellín · SENA ADSO 228118

Aplicación web estática con la guía completa de PostgreSQL para el sistema BiblioSmart. Cinco módulos progresivos desde la configuración DBA hasta la automatización con triggers.

---

## 🗂️ Estructura del proyecto

```
bibliomedellin/
├── index.html   ← Página principal con los 5 módulos
├── style.css    ← Estilos (diseño editorial verde/dorado)
├── app.js       ← Navegación, highlight SQL, botones de copia
└── README.md    ← Este archivo
```

## 📖 Módulos incluidos

| # | Módulo | Contenido |
|---|--------|-----------|
| 01 | Infraestructura y Seguridad | Roles, bases de datos, mínimo privilegio |
| 02 | Modelado Físico | DDL, tipos ENUM, FK, índices |
| 03 | JOINs y Relaciones | INNER, LEFT, FULL OUTER JOIN, datos de prueba |
| 04 | Vistas y Procedimientos | VIEW, FUNCTION, PROCEDURE, comparativa |
| 05 | Triggers y Automatización | Trigger de ciclo de vida + auditoría |

## 🚀 Despliegue en la nube (gratis)

### Opción A · GitHub Pages

```bash
# 1. Crear repositorio en GitHub
# 2. Subir los archivos
git init
git add .
git commit -m "feat: guía PostgreSQL BiblioSmart"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/bibliomedellin.git
git push -u origin main

# 3. En GitHub → Settings → Pages → Source: main / root
# URL: https://TU_USUARIO.github.io/bibliomedellin/
```

### Opción B · GitLab Pages

```bash
# 1. Crear repositorio en GitLab
git init
git add .
git commit -m "feat: guía PostgreSQL BiblioSmart"
git remote add origin https://gitlab.com/TU_USUARIO/bibliomedellin.git
git push -u origin main
```

Crear el archivo `.gitlab-ci.yml` en la raíz:

```yaml
pages:
  stage: deploy
  script:
    - mkdir -p public
    - cp index.html style.css app.js public/
  artifacts:
    paths:
      - public
  only:
    - main
```

```bash
git add .gitlab-ci.yml
git commit -m "ci: configurar GitLab Pages"
git push
# URL: https://TU_USUARIO.gitlab.io/bibliomedellin/
```

### Opción C · Netlify (más fácil, sin comandos)

1. Ir a [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
2. Arrastrar la carpeta `bibliomedellin/` completa
3. Netlify genera un URL inmediatamente

### Opción D · Vercel

```bash
npm install -g vercel
cd bibliomedellin
vercel
# Seguir las instrucciones del CLI
```

## 🛠️ Uso local

No requiere servidor. Abrir directamente en el navegador:

```bash
# Opción 1: abrir el archivo directamente
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux

# Opción 2: servidor local simple con Python
python3 -m http.server 8080
# Luego abrir http://localhost:8080
```

## ✨ Características

- ✅ Sin dependencias externas (sin frameworks, sin npm)
- ✅ Responsive: funciona en móvil, tablet y desktop
- ✅ Botón "Copiar" en cada bloque de código SQL
- ✅ Script SQL completo consolidado para copiar en un clic
- ✅ Diagrama ER interactivo con todas las entidades
- ✅ Sidebar con navegación y barra de progreso
- ✅ Highlight de sintaxis SQL integrado

## 📋 Sistema BiblioSmart

**Base de datos:** `biblioteca_medellin`  
**Usuario:** `admin_biblioteca` / `Medellin2026*`  
**Motor:** PostgreSQL 16+

**Tablas:** autores, libros, libro_autor (N:M), sedes, ejemplares, usuarios, prestamos, log_prestamos

---

*Ing. Luis Eladio Porras Camargo · Instructor ADSO · SENA CDMC Itagüí*
