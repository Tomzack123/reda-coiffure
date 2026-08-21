// Reda Coiffure — comportements de la page

document.addEventListener('DOMContentLoaded', () => {

  // Le lien "Réserver en ligne" n'est pas encore branché à un système de
  // réservation. En attendant, on informe la personne au lieu de la laisser
  // cliquer sur un lien mort.
  const bookingLink = document.querySelector('.btn-line');
  if (bookingLink) {
    bookingLink.addEventListener('click', (e) => {
      if (bookingLink.getAttribute('href') === '#') {
        e.preventDefault();
        alert("La réservation en ligne arrive bientôt — pour l'instant, appelez le salon au (438) 922-5770.");
      }
    });
  }

  // Fermeture douce du menu mobile si jamais un lien de nav est cliqué
  // (utile si un menu burger est ajouté plus tard).
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
    });
  });

});
