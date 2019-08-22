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
    address: '.js-address',
    siteNavClose: '.js-site-nav-close',
    addressClose: '.address-close',
  };

  var Classes = {
    siteNavClose: 'site-nav--close',
    addressClose: 'address--close',
  };

  var siteNav = document.querySelector(Selector.siteNav);
  var address = document.querySelector(Selector.address);
  var siteNavClose = document.querySelector(Selector.siteNav);
  var addressClose = document.querySelector(Selector.address);

  var heightSiteNav = 'none';
  var heightAddress = 'none';
  var flagKnowHeightElement = false;

  if (window.innerWidth < 768) {
    if (!flagKnowHeightElement) {
      heightSiteNav = siteNav.offsetHeight + 'px';
      heightAddress = address.offsetHeight + 'px';
      flagKnowHeightElement = true;
    }
    siteNav.classList.add(Classes.siteNavClose);
    address.classList.add(Classes.addressClose);
  }

  var onResize = function () {
    if (!flagKnowHeightElement) {
      if (window.innerWidth < 768) {
        heightSiteNav = siteNav.offsetHeight + 'px';
        heightAddress = address.offsetHeight + 'px';
        flagKnowHeightElement = true;
        siteNav.classList.add(Classes.siteNavClose);
        address.classList.add(Classes.addressClose);
      }
      window.removeEventListener('resize', onResize);
    }
  };

  window.addEventListener('resize', onResize);

  var closedElement = function (element, style, height) {
    element.classList.toggle(style);
    element.style = '';
    if (!element.classList.contains(style)) {
      element.style.maxHeight = height;
    }
  };

  siteNavClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closedElement(siteNav, Classes.siteNavClose, heightSiteNav);
  });

  addressClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closedElement(address, Classes.addressClose, heightAddress);
  });
}());
