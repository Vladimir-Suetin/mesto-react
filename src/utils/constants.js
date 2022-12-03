// Cелекторы
const selectors = {
  profile: '.profile',
  profileEditButton: '.profile__edit-button',
  popupEditProfile: '.popup_edit_profile',
  popupEditAvatar: '.popup_avatar',
  popupProfileNameInput: '.popup__name_value',
  popupProfileJobInput: '.popup__job_value',
  popupCloseButton: '.popup__close-icon',
  listCardPhotoGrid: '.cards__photo-grid',
  popupAddImage: '.popup_add_image',
  popupImageNameInput: '.popup__name-image',
  popupImageLinkInput: '.popup__link-image',
  imageAddButton: '.profile__add-button',
  templateCard: '.template-list',
  templateCardElement: '.element',
  templateTitleImageCard: '.element__title',
  templateLinkImageCard: '.element__mask-group',
  templateElementButtonRemove: '.element__button-remove',
  templateLikeButton: '.element__like-button',
  popup: '.popup',
  popupFormAddImage: '.popup__container_add-image',
  popupFormEditProfile: '.popup__container_edit-profile',
  popupFieldError: 'popup__field_error',
  popupSubmitButton: '.popup__submit-button',
  popupFormEditAvatar: '.popup__container_edit_avatar',
  editAvatarButton: '.profile__avatar-edit-button',
};

// Поиск элементов в документе
const profile = document.querySelector(selectors.profile);
const profileEditButton = profile.querySelector(selectors.profileEditButton);
const popupEditProfile = document.querySelector(selectors.popupEditProfile);
const popupEditAvatar = document.querySelector(selectors.popupEditAvatar);
const popupAddImage = document.querySelector(selectors.popupAddImage);
const imageAddButton = profile.querySelector(selectors.imageAddButton);
const popupFormAddImage = popupAddImage.querySelector(selectors.popupFormAddImage);
const popupFormEditProfile = popupEditProfile.querySelector(selectors.popupFormEditProfile);
const popupFormEditAvatar = popupEditAvatar.querySelector(selectors.popupFormEditAvatar);
const editAvatarButton = profile.querySelector(selectors.editAvatarButton);

const objectValidation = {
  formSelector: '.popup__container',
  inputSelector: '.popup__field',
  errorSelector: '.popup__error',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__field_type_error',
};

export {
  selectors,
  objectValidation,
  profileEditButton,
  popupEditProfile,
  imageAddButton,
  popupFormAddImage,
  popupFormEditProfile,
  popupFormEditAvatar,
  editAvatarButton,
};
