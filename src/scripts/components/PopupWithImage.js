import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, configPopup, {imageSelector, captionSelector}) {
        super(popupSelector, configPopup);
        this._imageSelector = imageSelector;
        this._captionSelector = captionSelector;
        this._imageElement = this._popup.querySelector(this._imageSelector);
        this._captionElement = this._popup.querySelector(this._captionSelector);
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