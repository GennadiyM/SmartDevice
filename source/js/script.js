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

  var Classes = {
    overlayShow: 'overlay--show',
    formFeedbackShow: 'form-feedback--show',
  };

  var formFeedback = document.querySelector(Selector.formFeedback);
  var buttonOpenModal = document.querySelector(Selector.buttonOpenModal);
  var buttonCloseModal = document.querySelector(Selector.buttonCloseModal);
  var overlay = document.querySelector(Selector.overlay);

  var onCloseModal = function (evt) {
    evt.preventDefault();
    formFeedback.classList.remove(Classes.formFeedbackShow);
    overlay.classList.remove(Classes.overlayShow);
    buttonCloseModal.removeEventListener('click', onCloseModal);
    overlay.removeEventListener('click', onCloseModal);
    document.removeEventListener('keydown', onEscCloseModal);
  };

  var onOpenModal = function (evt) {
    evt.preventDefault();
    formFeedback.classList.add(Classes.formFeedbackShow);
    overlay.classList.add(Classes.overlayShow);
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
    adress: '.js-address',
    siteNavClose: '.js-site-nav-close',
    adressClose: '.address-close',
  };

  var Classes = {
    siteNavClose: 'site-nav--close',
    adressClose: 'address--close',
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
    siteNav.classList.add(Classes.siteNavClose);
    adress.classList.add(Classes.adressClose);
  }

  window.addEventListener('resize', function () {
    if (!flagKnowHeightElement) {
      if (window.innerWidth < 768) {
        heightSiteNav = siteNav.offsetHeight + 'px';
        heightAdress = adress.offsetHeight + 'px';
        flagKnowHeightElement = true;
        siteNav.classList.add(Classes.siteNavClose);
        adress.classList.add(Classes.adressClose);
      }
    }
  });

  siteNavClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    siteNav.classList.toggle(Classes.siteNavClose);
    siteNav.style = '';
    if (!siteNav.classList.contains(Classes.siteNavClose)) {
      siteNav.style.maxHeight = heightSiteNav;
    }
  });

  adressClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    adress.classList.toggle(Classes.adressClose);
    adress.style = '';
    if (!adress.classList.contains(Classes.adressClose)) {
      adress.style.maxHeight = heightAdress;
    }
  });
}());
