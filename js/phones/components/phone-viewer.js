// import Component from '/js/component.js';

export default class PhoneViewer {
  constructor({
    element,
    button = document.querySelector('[data-button="back"]'),
  }) {
    this._element = element;
    this._button = button;
  }

  show(phoneDetails) {
    this._phoneDetails = phoneDetails;
    this._element.hidden = false;
    this._render();
  }

  goBack(PhoneCatalog) {
    this._phoneCatalog = PhoneCatalog;
    this._button.addEventListener('click', () => {
      this._element.hide();
    });
  }


  _render() {
    const phone = this._phoneDetails;
    this._element.innerHTML = `
    <img class="phone" src="${phone.images[0]}">

    <button data-button="back">Back</button>
    <button>Add to basket</button>


    <h1>${phone.name}</h1>

    <p>${phone.description}</p>

    <ul class="phone-thumbs">
      <li>
        <img src="${phone.images[0]}">
      </li>
      <li>
        <img src="${phone.images[1]}">
      </li>
      <li>
        <img src="${phone.images[2]}">
      </li>
      <li>
        <img src="${phone.images[3]}">
      </li>
      <li>
        <img src="${phone.images[4]}">
      </li>
      <li>
        <img src="${phone.images[5]}">
      </li>
    </ul>
    `;
  }
}
