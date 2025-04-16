document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar la fecha actual en formato legible
    function getCurrentDate() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('es-ES', options);
    }

    // Configuración del modal de ayuda
    const showExampleBtn = document.getElementById('showExampleBtn');
    const exampleModal = document.getElementById('exampleModal');
    const closeModal = document.querySelector('.close-modal');
    const codeExample = document.getElementById('codeExample');

    // Generación del ejemplo de código para los participantes
    const exampleCode = `
    <div class="code-container">
        <pre><code>&lt;div class="card glow-effect"&gt;
    &lt;div class="card-header"&gt;
        &lt;div class="avatar"&gt;
            &lt;i class="fas fa-user"&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;span class="author"&gt;Tu Nombre&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="card-body"&gt;
        &lt;p&gt;Tu mensaje personalizado. Por ejemplo: "¡Aprendiendo Git y GitHub con este increíble proyecto!"&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="card-footer"&gt;
        &lt;span class="date"&gt;${getCurrentDate()}&lt;/span&gt;
        &lt;span class="tag"&gt;#TuEtiqueta&lt;/span&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
        <button class="copy-btn" id="copyCodeBtn">Copiar</button>
    </div>
    <div class="tip">
        <p><strong>Instrucciones:</strong></p>
        <ol>
            <li>Copia este código HTML y pégalo dentro del contenedor <code>cards-container</code> en el archivo index.html</li>
            <li>Personaliza el nombre, mensaje y etiqueta con tu información</li>
            <li>¡No necesitas preocuparte por los estilos, ya están predefinidos para que se vea increíble!</li>
            <li>Los colores de las tarjetas se alternan automáticamente para crear un diseño colorido</li>
        </ol>
    </div>`;

    codeExample.innerHTML = exampleCode;

    // Funcionalidad para mostrar el modal
    showExampleBtn.addEventListener('click', function() {
        exampleModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    });

    // Funcionalidad para cerrar el modal
    closeModal.addEventListener('click', function() {
        exampleModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    });

    // Cerrar modal también haciendo clic fuera del contenido
    window.addEventListener('click', function(e) {
        if (e.target === exampleModal) {
            exampleModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Funcionalidad para copiar el código de ejemplo
    document.getElementById('copyCodeBtn').addEventListener('click', function() {
        const codeText = document.querySelector('code').innerText;
        navigator.clipboard.writeText(codeText).then(function() {
            const originalText = this.innerText;
            this.innerText = '¡Copiado!';
            this.style.backgroundColor = 'var(--secondary)';
            
            setTimeout(() => {
                this.innerText = originalText;
                this.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }, 2000);
        }.bind(this)).catch(function(err) {
            console.error('Error al copiar: ', err);
        });
    });

    // Desplazamiento suave para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación para las tarjetas existentes
    const cards = document.querySelectorAll('.card');
    
    // Función para animar las tarjetas con un efecto de aparición escalonado
    function animateCards() {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }

    // Inicialmente esconder las tarjetas
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Animar las tarjetas después de un pequeño retraso
    setTimeout(animateCards, 500);
});