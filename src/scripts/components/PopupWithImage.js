import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(containerPopup, configPopup, {imageSelector, captionSelector}) {
        super(containerPopup, configPopup);
        this._imageSelector = imageSelector;
        this._captionSelector = captionSelector;
        this._imageElement = containerPopup.querySelector(`.${this._imageSelector}`);
        this._captionElement = containerPopup.querySelector(`.${this._captionSelector}`);
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