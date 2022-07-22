import {
    api,
    user
} from '../constants/constants.js';
import {newCardsContainer} from '../../pages/index.js';

export function deleteCardHandler(cardId, deleteCardsCallback, toggleButtonCaptionCallback, closePopupCallback) {
    toggleButtonCaptionCallback(true);
    api.deleteCard(cardId)
        .then((cardId) => {
            deleteCardsCallback();
            closePopupCallback();
        })
        .finally(() => toggleButtonCaptionCallback(false))

}

export function cardLikeHandler(cardId, isLiked, setLikesCallback) {
    api.toggleLike(cardId, isLiked)
        .then(({likes}) => {
            setLikesCallback(likes);
        })
        .catch((err) => console.log(err))

}

export const handleCardSubmit = (data, toggleButtonCaptionCallback, closePopupCallback) => {
    toggleButtonCaptionCallback(true);
    api.addingNewCard(data)
        .then((res) => {
            newCardsContainer.addItem(res);
            closePopupCallback();
        })
        .catch((err) => console.log(err))
        .finally(() => toggleButtonCaptionCallback(false))
}

export function updateUserInfo(dataProfile, toggleButtonCaptionCallback, closePopupCallback) {
    toggleButtonCaptionCallback(true);
    const data = {
        name: dataProfile.title,
        about: dataProfile.job
    }
    api.editProfileData(data)
        .then((res) => {
            user.setUserInfo(res);
            closePopupCallback();
        })
        .catch((err) => console.log(err))
        .finally(() => toggleButtonCaptionCallback(false))
}

export function updateAvatarUser(data, toggleButtonCaptionCallback, closePopupCallback) {
    toggleButtonCaptionCallback(true);
    api.editAvatar(data.url)
        .then((res) => {
            user.setUserInfo(res);
            closePopupCallback();
        })
        .catch((err) => console.log(err))
        .finally(() => toggleButtonCaptionCallback(false))

}

export function promisAll() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([infoProfile, cards]) => {
            user.setUserInfo(infoProfile);
            newCardsContainer.rendererAll(cards);
        })
        .catch((err) => console.log(err));
}