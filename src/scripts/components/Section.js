export default class Section {
    constructor({items, renderer}, cardsContainerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._cardsContainerSelector = cardsContainerSelector
        this._conteiner = document.querySelector(this._cardsContainerSelector);
    }

    addItem(item) {

        this._conteiner.prepend(this._renderer(item));

    }

    rendererAll() {
        this._items.forEach(item => {
            this.addItem(item);
        })
    }
}