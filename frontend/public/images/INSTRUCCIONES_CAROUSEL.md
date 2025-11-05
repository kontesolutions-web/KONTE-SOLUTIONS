# 🎠 Instrucciones para el Carousel de Imágenes

## ¿Qué es el carousel?

El carousel es un componente que permite mostrar múltiples imágenes de tus plantillas. Los usuarios pueden navegar entre ellas usando las flechas ◀ ▶ que aparecen al pasar el mouse sobre la imagen.

---

## 📸 Imágenes necesarias

### Plantilla 1 - Finanzas Personales

**Imagen principal (OBLIGATORIA):**
- `dashboard-preview.png`

**Imágenes adicionales (OPCIONALES):**
- `dashboard-preview-2.png` - Segunda vista del dashboard
- `dashboard-preview-3.png` - Tercera vista del dashboard

### Plantilla 2 - CRM y Gestión

**Imagen principal (OBLIGATORIA):**
- `crm-preview.png`

**Imágenes adicionales (OPCIONALES):**
- `crm-preview-2.png` - Segunda vista del CRM
- `crm-preview-3.png` - Tercera vista del CRM

---

## 🎯 Recomendaciones de imágenes

### ¿Qué capturas tomar?

**Para la Plantilla de Finanzas:**
1. Vista general del dashboard con gráficos
2. Vista del formulario de entrada de datos
3. Vista de reportes y análisis

**Para la Plantilla CRM:**
1. Vista de la lista de clientes
2. Vista del calendario/agenda de citas
3. Vista del panel de facturación

### Especificaciones técnicas:
- **Formato:** PNG o JPG
- **Tamaño recomendado:** 1200x800px (ratio 3:2)
- **Peso máximo:** 500KB por imagen
- **Calidad:** Alta resolución pero optimizada

### Consejos para mejores capturas:
✅ Usa datos de ejemplo realistas (no datos reales de clientes)
✅ Asegúrate de que la interfaz se vea limpia y profesional
✅ Captura en modo día (fondo claro) para mejor visibilidad
✅ Incluye suficiente contenido para mostrar funcionalidad
✅ Evita capturas con barras de scroll visibles

---

## 📂 Cómo agregar las imágenes

### Paso 1: Prepara tus capturas
Toma las capturas de pantalla de tus plantillas reales.

### Paso 2: Renombra los archivos
Asegúrate de que tengan EXACTAMENTE estos nombres:
- `dashboard-preview.png`
- `dashboard-preview-2.png`
- `dashboard-preview-3.png`
- `crm-preview.png`
- `crm-preview-2.png`
- `crm-preview-3.png`

### Paso 3: Coloca los archivos
Copia todos los archivos a:
```
/app/frontend/public/images/
```

### Paso 4: Recarga la página
Presiona F5 o Ctrl+R (Cmd+R en Mac) para ver tus imágenes.

---

## 🔄 Comportamiento del carousel

### Si solo tienes 1 imagen:
- Se mostrará solo esa imagen
- Las flechas de navegación NO aparecerán

### Si tienes 2 o 3 imágenes:
- Se mostrará la primera imagen por defecto
- Aparecerán flechas ◀ ▶ para navegar
- Puedes hacer clic en las flechas para ver otras imágenes

### Si no tienes ninguna imagen:
- Se mostrará un placeholder gris con un icono
- El texto dirá "Vista previa del [nombre]"
- Incluirá el mensaje "Coloca tus capturas en /images/"

---

## 🎨 Personalización avanzada

### ¿Quieres más de 3 imágenes?

Edita el archivo `/app/frontend/src/pages/Home.jsx` y agrega más rutas en el array `templateImages`:

```javascript
const templateImages = {
  finanzas: [
    '/images/dashboard-preview.png',
    '/images/dashboard-preview-2.png',
    '/images/dashboard-preview-3.png',
    '/images/dashboard-preview-4.png',  // ← Agregar aquí
    '/images/dashboard-preview-5.png',  // ← Y aquí
  ],
  // ...
};
```

---

## ✅ Checklist antes de publicar

- [ ] Tengo al menos 1 imagen por plantilla
- [ ] Las imágenes tienen los nombres correctos
- [ ] Las imágenes están en la carpeta `/images/`
- [ ] Las capturas son de buena calidad
- [ ] No hay datos sensibles en las capturas
- [ ] He probado el carousel en la web
- [ ] Las flechas de navegación funcionan correctamente

---

## 🆘 Problemas comunes

### "No se ve mi imagen"
✅ Verifica que el nombre sea EXACTO (mayúsculas/minúsculas importan)
✅ Confirma que está en `/app/frontend/public/images/`
✅ Recarga la página con F5 o Ctrl+Shift+R

### "Las flechas no aparecen"
✅ Solo tienes 1 imagen (las flechas requieren 2 o más)
✅ Las otras imágenes no se cargaron correctamente

### "La imagen se ve pixelada"
✅ Sube una imagen de mayor resolución (mínimo 1200px ancho)
✅ Usa PNG en vez de JPG si tiene texto

---

¡Listo! Ahora tu landing page mostrará tus plantillas de forma profesional con el carousel de imágenes. 🎉
