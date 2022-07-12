import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
    constructor(selecortPopup, configPopup, {imageSelector, captionSelector}) {
        super(selecortPopup, configPopup);
        this._imageSelector = imageSelector;
        this._captionSelector = captionSelector;
        this._imageElement = document.querySelector(`.${this._imageSelector}`);
        this._captionElement = document.querySelector(`.${this._captionSelector}`);
    }

    openPopup = ({link, name}) => {
        this._imageElement.src = link;
        this._imageElement.alt = name;
        this._captionElement.textContent = name;
        super.openPopup();
    }

    closePopup() {
        super.closePopup();
    }


}