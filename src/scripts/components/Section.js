export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector);
        // this._initialCards = items;
        this._renderer = renderer;
    }

    // renderItems() {
    //     this._initialCards.forEach(element => {
    //         this.renderer(element);
    //     });
    // }

     renderItems(dataCard) {
        dataCard.forEach(element => {
            this._renderer(element)
        })
    }

    addItem(elementDom) {
        this._container.prepend(elementDom);
    }
}