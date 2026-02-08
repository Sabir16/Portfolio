/**
 * Améliorations globales du portfolio (réactivité, accessibilité, UX)
 */
(function () {
    'use strict';

    // Ouvrir les liens externes (http/https) dans un nouvel onglet si pas déjà fait
    document.querySelectorAll('a[href^="http"]').forEach(function (a) {
        if (!a.hasAttribute('target')) a.setAttribute('target', '_blank');
        if (!a.hasAttribute('rel')) a.setAttribute('rel', 'noopener noreferrer');
    });

    // Feedback visuel rapide sur les clics des liens de la nav (optionnel)
    document.querySelectorAll('nav a').forEach(function (link) {
        link.addEventListener('click', function () {
            link.style.opacity = '0.8';
            setTimeout(function () { link.style.opacity = ''; }, 150);
        });
    });
})();
