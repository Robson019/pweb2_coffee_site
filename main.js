function changeImage(id, way) {
    let image = document.getElementById(id);

    image.classList.add('fade');

    setTimeout(function() {
      image.src = way;

      image.classList.remove('fade');
    }, 300);
}

var header = document.querySelector('header');
var scrollPos = 0;
var isScrolling = false;

// Evento de rolagem da página
window.addEventListener('scroll', function() {
  isScrolling = true;
});

// Verificar o estado de rolagem a cada 250ms
setInterval(function() {
  if (isScrolling) {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos > scrollPos) {
      // Rolar para baixo
      header.classList.add('hide');
    } else {
      // Rolar para cima
      header.classList.remove('hide');
    }

    scrollPos = currentScrollPos;
    isScrolling = false;
  }
}, 0);

// Evento de clique em links
document.addEventListener('click', function(event) {
  var target = event.target;

  if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
    // Clicou em um link para uma âncora na página
    var anchor = document.querySelector(target.getAttribute('href'));
    if (anchor) {
      event.preventDefault();

      var offset = anchor.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  }
});

