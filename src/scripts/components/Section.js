export default class Section {
    constructor({renderer}, cardsContainerSelector) {
        this._renderer = renderer;
        this._cardsContainerSelector = cardsContainerSelector
        this._conteiner = document.querySelector(this._cardsContainerSelector);
    }

    addItem(item) {
        this._conteiner.prepend(this._renderer(item));
    }

    rendererAll(items) {
        items.reverse().forEach(item => {
            this.addItem(item);
        })
    }
}