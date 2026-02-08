/**
 * Validation du formulaire de contact et feedback utilisateur
 */
(function () {
    'use strict';

    var form = document.querySelector('form');
    if (!form) return;

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    function showError(input, message) {
        var existing = input.parentNode.querySelector('.error-msg');
        if (existing) existing.remove();
        if (!message) return;
        var span = document.createElement('span');
        span.className = 'error-msg';
        span.textContent = message;
        span.setAttribute('role', 'alert');
        input.parentNode.appendChild(span);
    }

    function clearError(input) {
        var existing = input.parentNode.querySelector('.error-msg');
        if (existing) existing.remove();
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        clearError(nameInput);
        clearError(emailInput);
        clearError(messageInput);

        var valid = true;
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Veuillez entrer votre nom.');
            valid = false;
        }
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Veuillez entrer votre email.');
            valid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            showError(emailInput, 'Veuillez entrer un email valide.');
            valid = false;
        }
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Veuillez entrer un message.');
            valid = false;
        }

        if (!valid) return;

        // Pas de backend : afficher un message de confirmation
        var btn = form.querySelector('button[type="submit"]');
        var originalText = btn.textContent;
        btn.textContent = 'Envoi en cours...';
        btn.disabled = true;

        setTimeout(function () {
            btn.textContent = 'Message envoyé !';
            btn.style.background = 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)';
            form.reset();
            setTimeout(function () {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = '';
            }, 3000);
        }, 800);
    });

    nameInput.addEventListener('input', function () { clearError(nameInput); });
    emailInput.addEventListener('input', function () { clearError(emailInput); });
    messageInput.addEventListener('input', function () { clearError(messageInput); });
})();
