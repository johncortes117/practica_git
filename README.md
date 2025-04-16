# Tu Huella Digital - Práctica de GitHub

![GitHub Collaboration](https://i.imgur.com/6n3iIUg.png)

## 📝 Descripción

Este repositorio contiene una página web colaborativa diseñada para practicar los conceptos básicos de Git y GitHub. El objetivo principal es que cada participante aprenda a clonar un repositorio, crear una rama, realizar cambios, hacer commit y enviar un Pull Request.

La página web está diseñada para mostrar las contribuciones de cada participante en forma de tarjetas personalizadas, creando un mosaico digital colaborativo.

## 🚀 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)

## 🎯 Objetivo del proyecto

Este proyecto sirve como ejercicio práctico para un curso de GitHub, permitiendo a los participantes:

1. Practicar el flujo de trabajo básico de Git
2. Experimentar con la colaboración en GitHub
3. Entender cómo funcionan las contribuciones a proyectos open source
4. Aprender a resolver conflictos en Git

## 👨‍💻 Cómo contribuir

Para añadir tu contribución a este proyecto, sigue estos pasos:

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/[usuario]/tu-huella-digital.git
   cd tu-huella-digital
   ```

2. **Crea una nueva rama con tu nombre**
   ```bash
   git checkout -b contribucion-[tu-nombre]
   ```

3. **Abre el archivo `index.html` y añade tu tarjeta personalizada**
   
   Busca la sección con el id `contributions` y añade tu tarjeta usando esta estructura:
   ```html
   <div class="card glow-effect">
     <div class="card-header">
       <div class="avatar">
         <i class="fas fa-user"></i>
       </div>
       <span class="author">Tu Nombre</span>
     </div>
     <div class="card-body">
       <p>Tu mensaje personalizado aquí</p>
     </div>
     <div class="card-footer">
       <span class="date">16 de abril, 2025</span>
       <span class="tag">#TuEtiqueta</span>
     </div>
   </div>
   ```

4. **Guarda el archivo y realiza un commit con tus cambios**
   ```bash
   git add index.html
   git commit -m "Añadida mi contribución: [Tu Nombre]"
   ```

5. **Sube tus cambios a GitHub**
   ```bash
   git push origin contribucion-[tu-nombre]
   ```

6. **Crea un Pull Request**
   - Ve a la página del repositorio en GitHub
   - Haz clic en "Compare & pull request"
   - Rellena la información solicitada
   - Haz clic en "Create pull request"

## 🎨 Personalización

No es necesario modificar los archivos CSS o JavaScript, ya que los estilos están predefinidos. Simplemente añade tu tarjeta siguiendo la estructura proporcionada y será mostrada con un estilo consistente pero único.

## 📱 Vista previa

Para ver la página web localmente:
1. Abre el archivo `index.html` en tu navegador web
2. Navega para ver todas las contribuciones
3. Haz clic en el botón flotante "?" para ver instrucciones detalladas

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

---

*Este proyecto fue creado como parte de un curso de GitHub. Fecha: Abril 2025.*