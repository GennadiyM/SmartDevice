'use strict';

(function () {
  var Keydown = {
    enter: 13,
    esc: 27
  };

  var Selector = {
    formFeedback: '.js-form-feedback',
    buttonOpenModal: '.js-open-modal',
    buttonCloseModal: '.js-close-feedback',
    overlay: '.overlay',
  };

  var Clases = {
    overlayShow: 'overlay--show',
    formFeedbackShow: 'form-feedback--show',
  };

  var formFeedback = document.querySelector(Selector.formFeedback);
  var buttonOpenModal = document.querySelector(Selector.buttonOpenModal);
  var buttonCloseModal = document.querySelector(Selector.buttonCloseModal);
  var overlay = document.querySelector(Selector.overlay);

  var onCloseModal = function (evt) {
    evt.preventDefault();
    formFeedback.classList.remove(Clases.formFeedbackShow);
    overlay.classList.remove(Clases.overlayShow);
    buttonCloseModal.removeEventListener('click', onCloseModal);
    overlay.removeEventListener('click', onCloseModal);
    document.removeEventListener('keydown', onEscCloseModal);
  };

  var onOpenModal = function (evt) {
    evt.preventDefault();
    formFeedback.classList.add(Clases.formFeedbackShow);
    overlay.classList.add(Clases.overlayShow);
    buttonCloseModal.addEventListener('click', onCloseModal);
    overlay.addEventListener('click', onCloseModal);
    document.addEventListener('keydown', onEscCloseModal);
  };

  var onEscCloseModal = function (evt) {
    if (evt.keyCode === Keydown.esc) {
      onCloseModal(evt);
    }
  };

  buttonOpenModal.addEventListener('click', onOpenModal);
}());

(function () {
  var Selector = {
    siteNav: '.js-site-nav',
    adress: '.js-adress',
    siteNavClose: '.js-site-nav-close',
    adressClose: '.adress-close',
  };

  var Clases = {
    siteNavClose: 'site-nav--close',
    adressClose: 'adress--close',
  };

  var siteNav = document.querySelector(Selector.siteNav);
  var adress = document.querySelector(Selector.adress);
  var siteNavClose = document.querySelector(Selector.siteNav);
  var adressClose = document.querySelector(Selector.adress);

  var heightSiteNav = 'none';
  var heightAdress = 'none';
  var flagKnowHeightElement = false;

  if (window.innerWidth < 768) {
    if (!flagKnowHeightElement) {
      heightSiteNav = siteNav.offsetHeight + 'px';
      heightAdress = adress.offsetHeight + 'px';
      flagKnowHeightElement = true;
    }
    siteNav.classList.add(Clases.siteNavClose);
    adress.classList.add(Clases.adressClose);
  }

  window.addEventListener('resize', function () {
    if (!flagKnowHeightElement) {
      if (window.innerWidth < 768) {
        heightSiteNav = siteNav.offsetHeight + 'px';
        heightAdress = adress.offsetHeight + 'px';
        flagKnowHeightElement = true;
        siteNav.classList.add(Clases.siteNavClose);
        adress.classList.add(Clases.adressClose);
      }
    }
  });

  siteNavClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    siteNav.classList.toggle(Clases.siteNavClose);
    siteNav.style = '';
    if (!siteNav.classList.contains(Clases.siteNavClose)) {
      siteNav.style.maxHeight = heightSiteNav;
    }
  });

  adressClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    adress.classList.toggle(Clases.adressClose);
    adress.style = '';
    if (!adress.classList.contains(Clases.adressClose)) {
      adress.style.maxHeight = heightAdress;
    }
  });
}());
