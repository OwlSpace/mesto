export default class Section {
    constructor({items, renderer}, cardsContainer) {
        this._items = items;
        this._renderer = renderer;
        this._conteiner = cardsContainer;
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