var button = document.querySelector('.popup-map');
var map = document.querySelector('.modal-map');
var close = map.querySelector('.modal-close');
var buttonFooter = document.querySelector('.popup-map-link')


button.addEventListener('click', function (evt) {
  evt.preventDefault();
  map.classList.add('modal-show');
});

buttonFooter.addEventListener('click', function (evt) {
  evt.preventDefault();
  map.classList.add('modal-show');
});


close.addEventListener('click', function (evt) {
  evt.preventDefault();
  map.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (map.classList.contains('modal-show')) {
      evt.preventDefault();
      map.classList.remove('modal-show');
    }
  }
})

