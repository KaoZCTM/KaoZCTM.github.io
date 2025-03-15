/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

document.addEventListener('DOMContentLoaded', function() {
    // Inicializa todos los tooltips de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            trigger: 'manual'
        });
    });

    document.querySelectorAll('.copyEmail').forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            var tooltip = bootstrap.Tooltip.getInstance(this);
            tooltip.show();
        });

        element.addEventListener('mouseleave', function() {
            var tooltip = bootstrap.Tooltip.getInstance(this);
            setTimeout(function() {
                tooltip.hide();
            }, 500); // Hide the tooltip after x miliseconds
        });

        element.addEventListener('click', function() {
            var copyText = this.getAttribute('data-copy');
            
            var tempInput = document.createElement('input');
            tempInput.value = copyText;
            document.body.appendChild(tempInput);
            
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // For mobile devices
            
            document.execCommand('copy');
            
            document.body.removeChild(tempInput);
            
            var tooltip = bootstrap.Tooltip.getInstance(this);
            tooltip.hide();
            this.setAttribute('data-bs-original-title', '¡Copiado al portapapeles!');
            tooltip.show();
            
            setTimeout(() => {
                tooltip.hide();
                this.setAttribute('data-bs-original-title', 'Click para copiar');
            }, 1500); // Show the tooltip for x miliseconds
        });
    });
});