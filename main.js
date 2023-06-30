(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e,r,o,i,u){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"_handleLike",(function(){a._changeLike(a._likeButton,a._cardId)})),n(this,"_handleDelete",(function(){a._openDeleteCardPopup(a)})),n(this,"_handleCardClick",(function(){a._openPopupImage(a._cardData)})),this._cardData=e,this._name=e.name,this._link=e.link,this._cardId=e._id,this._ownerId=e.owner._id,this._likes=e.likes,this._myId=e.myid,this._likesLength=e.likes.length,this._selectorTemplate=r,this._openPopupImage=o,this._openDeleteCardPopup=i,this._changeLike=u}var r,o;return r=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._selectorTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){this._likeButton.addEventListener("click",this._handleLike),this._deleteButton.addEventListener("click",this._handleDelete),this._placeImage.addEventListener("click",this._handleCardClick)}},{key:"_changeDeleteButtonDisplay",value:function(){this._myId===this._ownerId?this._deleteButton.style.display="block":this._deleteButton.style.display="none"}},{key:"updateLikesCount",value:function(t){this._likes=t,this._likeCounter.textContent=t.length}},{key:"toogleLike",value:function(){this._likeButton.classList.toggle("card__like-button_active")}},{key:"isLikedByMe",value:function(){var t=this;return this._likes.find((function(e){return e._id===t._myId}))}},{key:"_checkLikes",value:function(){var t=this;this._likes.forEach((function(e){e._id!==t._myId||t._likeButton.classList.add("card__like-button_active")})),this._likeCounter.textContent=this._likesLength}},{key:"removeCard",value:function(){this._cloneElement.remove()}},{key:"createCard",value:function(){return this._cloneElement=this._getTemplate(),this._placeImage=this._cloneElement.querySelector(".card__image"),this._likeButton=this._cloneElement.querySelector(".card__like-button"),this._deleteButton=this._cloneElement.querySelector(".card__delete-button"),this._placeName=this._cloneElement.querySelector(".card__place-name"),this._likeCounter=this._cloneElement.querySelector(".card__likes-counter"),this._placeImage.src=this._cardData.link,this._placeImage.alt=this._cardData.name,this._placeName.textContent=this._cardData.name,this._likeCounter.textContent=this._likes.length,this._changeDeleteButtonDisplay(),this._checkLikes(),this._setEventListeners(),this._cloneElement}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function a(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}var l=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"enableValidation",(function(){r._formButton=r._form.querySelector(r._submitButtonSelector),r._formInputs=Array.from(r._form.querySelectorAll(r._inputSelector)),r._setEventListeners()})),a(this,"_setEventListeners",(function(){r.disableButton(r._formButton),r._formInputs.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValidity(t),r._hasInvalidInput(r._formInputs)?r.disableButton(r._formButton):r._enableButton(r._formButton)}))}))})),a(this,"_checkInputValidity",(function(t){var e=document.querySelector("#".concat(t.id,"-error"));t.checkValidity()?(t.classList.remove(r._inputErrorClass),e.textContent=""):(t.classList.add(r._inputErrorClass),e.textContent=t.validationMessage)})),a(this,"_enableButton",(function(){r._formButton.classList.remove(r._inactiveButtonClass),r._formButton.removeAttribute("disabled",!0)})),a(this,"disableButton",(function(){r._formButton.classList.add(r._inactiveButtonClass),r._formButton.setAttribute("disabled",!0)})),a(this,"_hasInvalidInput",(function(){return r._formInputs.some((function(t){return!t.validity.valid}))})),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._textErrorClass=e.textErrorClass,this._form=n}var e,n;return e=t,(n=[{key:"resetErrorInput",value:function(){var t=this;this._formInputs.forEach((function(e){var n=t._form.querySelector("#".concat(e.id,"-error"));e.validity.valid||t._hideInputError(n,e)})),this.disableButton()}},{key:"_hideInputError",value:function(t,e){e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._textErrorClass)}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function p(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var h=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"_handleOverlayClose",(function(t){t.target.classList.contains("popup_opened")&&n.close()})),p(this,"_handleCloseButton",(function(){n.close()})),p(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._handleCloseButton),this._popup.addEventListener("click",this._handleOverlayClose)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}function g(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(n);if(r){var o=_(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=v(n=o.call(this,t)),a=function(t){n._popupImage.src=t.link,n._popupImage.alt=t.name,n._imagePopupDescription.textContent=t.name,b((e=v(n),_(i.prototype)),"open",e).call(e)},(u=g(u="open"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupImage=n._popup.querySelector(".popup__card-image"),n._imagePopupDescription=n._popup.querySelector(".popup__card-description"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(h);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var E=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderer=r}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var P=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e.profileNameSelector),this._profileJob=document.querySelector(e.profileJobSelector),this._profileAvatar=document.querySelector(e.profileAvatar)}var e,n;return e=t,(n=[{key:"setUserInfo",value:function(t){var e=t.username,n=t.description,r=t.userphoto;this._profileName.textContent=e,this._profileJob.textContent=n,this._profileAvatar.src=r}},{key:"getUserInfo",value:function(){return{username:this._profileName.textContent,description:this._profileJob.textContent}}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFunction=e,n._form=n._popup.querySelector(".popup__container"),n._inputList=n._form.querySelectorAll(".popup__input"),n._saveButton=n._form.querySelector(".popup__save-button"),n._defaultSaveButtonText=n._saveButton.textContent,n}return e=u,(n=[{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"_getInputValues",value:function(){var t=this;return this._values={},this._inputList.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setEventListeners",value:function(){var t=this;I(T(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._saveButton.textContent="Сохранение...",t._submitFunction(t._getInputValues())}))}},{key:"setDefaultText",value:function(){this._saveButton.textContent=this._defaultSaveButtonText}},{key:"close",value:function(){I(T(u.prototype),"close",this).call(this),this._form.reset()}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,N(r.key),r)}}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},z.apply(this,arguments)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}function N(t){var e=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===x(e)?e:String(e)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(r);if(o){var n=U(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return A(t)}(this,t)});function u(t,e){var n,r,o,a,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=A(r=i.call(this,t)),c=function(t){z((n=A(r),U(u.prototype)),"open",n).call(n),r._element=t},(a=N(a="open"))in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,r._submitFunction=e,r._form=r._popup.querySelector(".popup__container"),r}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;z(U(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitFunction(t._element)}))}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var M=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject}},{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.username,about:t.description})}).then(this._checkResponse)}},{key:"setAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.userphoto})}).then(this._checkResponse)}},{key:"addCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.placename,link:t.placelink})}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),H=document.querySelector(".profile__edit-button"),$=document.querySelector(".profile__add-button"),G=document.forms.profile,K=document.forms.placeCard,Q=document.forms.avatar,W=(document.forms.deleteCard,{formSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error"});function X(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Z=new M({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"961112be-ea9b-423a-bd3d-e30631a423a3","Content-Type":"application/json"}}),tt=new P({profileNameSelector:".profile__name",profileJobSelector:".profile__description",profileAvatar:".profile__avatar"}),et=new S(".popup_image");et.setEventListeners();var nt=new V(".popup_delete",(function(t){Z.deleteCard(t._cardId).then((function(e){t.removeCard(e),nt.close()})).catch((function(t){console.log(t)}))}));function rt(t){var e=new o(t,"#card-template",et.open,nt.open,(function(){e.isLikedByMe()?Z.deleteLike(t._id).then((function(t){e.updateLikesCount(t.likes),e.toogleLike()})).catch((function(t){console.log(t)})):Z.addLike(t._id).then((function(t){e.updateLikesCount(t.likes),e.toogleLike()})).catch((function(t){console.log(t)}))}));return e.createCard()}nt.setEventListeners();var ot=new E({renderer:function(t){ot.addItem(rt(t))}},".element"),it=new R(".popup_edit",(function(t){Z.setUserInfo(t).then((function(t){tt.setUserInfo({username:t.name,description:t.about,userphoto:t.avatar}),it.close()})).catch((function(t){console.log(t)})).finally((function(){return it.setDefaultText()}))}));it.setEventListeners();var ut=new R(".popup_add",(function(t){Promise.all([Z.addCard(t)]).then((function(t){var e=X(t,1)[0];e.myId=e.owner._id,ot.addItem(rt(e)),ut.close()})).catch((function(t){console.log(t)})).finally((function(){return ut.setDefaultText()}))}));ut.setEventListeners();var at=new R(".popup_userphoto",(function(t){Z.setAvatar(t).then((function(t){tt.setUserInfo({username:t.name,description:t.about,userphoto:t.avatar}),at.close()})).catch((function(t){console.log(t)})).finally((function(){return at.setDefaultText()}))}));document.querySelector(".profile__avatar-button").addEventListener("click",(function(){st.resetErrorInput(),at.open()})),at.setEventListeners(),$.addEventListener("click",(function(){ct.resetErrorInput(),ut.open()}));var ct=new l(W,K),lt=new l(W,G),st=new l(W,Q);ct.enableValidation(),lt.enableValidation(),st.enableValidation(),H.addEventListener("click",(function(){it.setInputValues(tt.getUserInfo()),it.open()})),Promise.all([Z.getInfo(),Z.getCards()]).then((function(t){var e=X(t,2),n=e[0],r=e[1];r.forEach((function(t){return t.myid=n._id})),tt.setUserInfo({username:n.name,description:n.about,userphoto:n.avatar}),ot.renderItems(r.reverse())})).catch((function(t){console.log(t)}))})();