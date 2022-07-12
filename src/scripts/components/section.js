export default class Section {
    constructor({items, renderer}, selectorContainer) {
        this._items = items;
        this._renderer = renderer;
        this._selectorContainer = selectorContainer;
        this._conteiner = document.querySelector(`.${this._selectorContainer}`)
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