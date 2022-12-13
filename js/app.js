/** @format */

'use strict';

// Accordian
class Accordion {
  constructor(element) {
    element.addEventListener('click', this._toggleContent.bind(this, element));
  }

  _openContent(trigger, el, heightLimit) {
    el.style.height = heightLimit + 'px';
    trigger.classList.add('is-collapsed');
  }

  _closeContent(trigger, el) {
    el.style.height = '0px';
    trigger.classList.remove('is-collapsed');
  }

  _toggleContent(element) {
    if (element.classList.contains('is-collapsed')) {
      this._closeContent(element, element.nextElementSibling);
    } else {
      const contentHeight = element.nextElementSibling.querySelectorAll(
        '[data-accordion="content"]',
      )[0].offsetHeight;

      for (const e of document.querySelectorAll('[data-accordion="trigger"]')) {
        this._closeContent(element, e.nextElementSibling);
        e.classList.remove('is-collapsed');
      }

      this._openContent(element, element.nextElementSibling, contentHeight);
    }
  }
}

/* Initialize */
for (const e of document.querySelectorAll('[data-accordion="trigger"]')) {
  const newAccordion = new Accordion(e);
  newAccordion;
}
