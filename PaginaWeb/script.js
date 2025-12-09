// Navegación entre páginas
document.addEventListener('DOMContentLoaded', function() {
    // Obtener la página actual desde la URL
    const currentPage = window.location.pathname.split('/').pop() || 'principal.html';
    
    // Actualizar menú activo
    const navPrincipal = document.getElementById('navPrincipal');
    const navTaller = document.getElementById('navTaller');
    const navExportacion = document.getElementById('navExportacion');
    
    if (navPrincipal) navPrincipal.classList.remove('active');
    if (navTaller) navTaller.classList.remove('active');
    if (navExportacion) navExportacion.classList.remove('active');
    
    if (currentPage === 'principal.html' || currentPage === '') {
        if (navPrincipal) navPrincipal.classList.add('active');
    } else if (currentPage === 'taller.html') {
        if (navTaller) navTaller.classList.add('active');
    } else if (currentPage === 'exportacion.html') {
        if (navExportacion) navExportacion.classList.add('active');
    }
    
    // Menú móvil
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainMenu = document.getElementById('mainMenu');
    
    if (mobileMenuBtn && mainMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mainMenu.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const menuLinks = document.querySelectorAll('#mainMenu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainMenu) mainMenu.classList.remove('active');
        });
    });
    
    // Manejo del formulario de contacto principal
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulación de envío
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const servicio = document.getElementById('servicio').value;
            
            alert(`Gracias ${nombre}, hemos recibido su mensaje. Nos pondremos en contacto con usted en ${email} para el servicio de ${servicio || 'interés general'}.`);
            
            // Resetear formulario
            contactForm.reset();
        });
    }
    
    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Solo aplicar si no es un enlace a otra página
            if (this.getAttribute('href').startsWith('#') && 
                !this.getAttribute('href').includes('.html')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});