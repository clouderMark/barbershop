var back = document.querySelector('.gallery-button-back');
var next = document.querySelector('.gallery-button-next');
var gallery = ['img/interier.jpg', 'img/6yvceB8zbYg.jpg', 'img/KSV0956.jpg', 'img/ZRE1798.jpg'];
var photo = document.querySelector('.photo');
var photoLink = document.querySelector('.photo-link');
var popupPhoto = document.querySelector('.modal-photo');
var close = popupPhoto.querySelector('.modal-close');
var image = popupPhoto.querySelector('.image');
var linkBack = popupPhoto.querySelector('.popup-back-photo-link');
var linkNext = popupPhoto.querySelector('.popup-next-photo-link')
var n = 0;
back.disabled = true;
var counter = function(mark) {
  if (mark) {
    n++;
  } else {
    n--;
  }
  if (n === 0) {
    back.disabled = true;
  }
  if (n > 0) {
    back.disabled = false;
  }
  if (n === gallery.length - 1) {
    next.disabled = true;
  }
  if (n < gallery.length - 1) {
    next.disabled = false;
  }
  return n;
};

next.addEventListener('click', function(evt) {
  evt.preventDefault();
  back.disabled = false;
  photo.src = gallery[counter(true)];
  if (n === gallery.length -1) {
    next.disabled = true;
  }
});

back.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (n === 1) {
    back.disabled = true;
  }
    photo.src = gallery[counter(false)];
    next.disabled = false;
});



photoLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  image.src = gallery[n];

  popupPhoto.classList.add('modal-show')

});



linkBack.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log(n);
  image.src = gallery[counter(false)];
  photo.src = image.src;
  if (n < 0) {
    image.src = gallery[0];
    n = 0;
    photo.src = image.src;
    
  }
  
  console.log(n);
  
});

linkNext.addEventListener('click', function(evt) {
  evt.preventDefault();
  image.src = gallery[counter(true)];
  photo.src = image.src;
  if (n > gallery.length - 1) {
    image.src = gallery[gallery.length - 1];
    n = gallery.length - 1;
    photo.src = image.src;
    
  }
  console.log(n);
})


close.addEventListener ('click', function(evt) {
  evt.preventDefault();
  popupPhoto.classList.remove('modal-show');
})


