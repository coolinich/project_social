/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./js/app.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ \"../node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popper.js */ \"../node_modules/popper.js/dist/esm/popper.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _controls_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/login */ \"./js/controls/login.js\");\n/* harmony import */ var _controls_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/register */ \"./js/controls/register.js\");\n/* harmony import */ var _controls_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/home */ \"./js/controls/home.js\");\n/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guard/auth.guard */ \"./js/guard/auth.guard.js\");\n// Libs\n\n\n // Styles\n\n // Pages\n\n\n\n // Guard\n\n\nvar guard = new _guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__[\"AuthGuard\"]();\nvar path = window.location.pathname;\nvar page = path.split('/').pop().slice(0, -5);\n\nswitch (page) {\n  case 'login':\n    guard.check(page);\n    Object(_controls_login__WEBPACK_IMPORTED_MODULE_4__[\"LoginPage\"])();\n    break;\n\n  case 'index':\n    guard.check(page);\n    Object(_controls_home__WEBPACK_IMPORTED_MODULE_6__[\"HomePage\"])();\n    break;\n\n  case 'register':\n    guard.check(page);\n    Object(_controls_register__WEBPACK_IMPORTED_MODULE_5__[\"SignupPage\"])();\n    break;\n}\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/config/env.js":
/*!**************************!*\
  !*** ./js/config/env.js ***!
  \**************************/
/*! exports provided: env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"env\", function() { return env; });\nvar env = {\n  apiUrl: \"https://mostlikedperson-api.herokuapp.com/api\"\n};\n\n//# sourceURL=webpack:///./js/config/env.js?");

/***/ }),

/***/ "./js/controls/home.js":
/*!*****************************!*\
  !*** ./js/controls/home.js ***!
  \*****************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePage\", function() { return HomePage; });\n/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/user */ \"./js/services/user.js\");\n/* harmony import */ var _services_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/image */ \"./js/services/image.js\");\n/* harmony import */ var _services_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/comment */ \"./js/services/comment.js\");\n/* harmony import */ var _ui_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../ui/user */ \"./js/ui/user.js\");\n/* harmony import */ var _ui_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../ui/image */ \"./js/ui/image.js\");\n/* harmony import */ var _ui_imageModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../ui/imageModal */ \"./js/ui/imageModal.js\");\n/* harmony import */ var _modules_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../modules/message */ \"./js/modules/message.js\");\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nvar $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\nfunction HomePage() {\n  // Init User Service\n  var user = new _services_user__WEBPACK_IMPORTED_MODULE_0__[\"UserService\"](); // Init User Service\n\n  var imageService = new _services_image__WEBPACK_IMPORTED_MODULE_1__[\"ImageService\"](); // Init Comments Service\n\n  var commentService = new _services_comment__WEBPACK_IMPORTED_MODULE_2__[\"CommentService\"](); // Init User UI\n\n  var userUI = new _ui_user__WEBPACK_IMPORTED_MODULE_3__[\"UserUI\"](); // Init Image UI\n\n  var imageUI = new _ui_image__WEBPACK_IMPORTED_MODULE_4__[\"ImageUI\"](); // Init Image Modal UI\n\n  var imageModal = new _ui_imageModal__WEBPACK_IMPORTED_MODULE_5__[\"ImageModal\"](); //Init Message Module\n\n  var message = new _modules_message__WEBPACK_IMPORTED_MODULE_6__[\"Message\"]();\n  message.init(); // UI page elements\n\n  var inputCover = document.getElementById(\"coverImg\");\n  var photosInputs = document.getElementById('userPhotos');\n  var photosCards = document.querySelector('.images-wrap .row.images'); // UI modal elements\n\n  var addCommentForm = document.forms[\"addCommentForm\"];\n  var addCommentInput = document.forms[\"addCommentForm\"][\"comment\"];\n  var commentsWrap = document.querySelector(\".current-image-comments-wrap\"); // function gets all info about user and added it to layout \n\n  function onLoad(e) {\n    user.getInfo().then(function (data) {\n      userUI.renderUserInfo(data);\n      return data;\n    }).then(function (data) {\n      imageUI.clearContainer();\n      data.my_images.forEach(function (img) {\n        return imageUI.addImage(img);\n      });\n    }).catch(function (error) {\n      console.log(error);\n    });\n  } // function for uploading and show new cover image in layout\n\n\n  function onCoverUpload(e) {\n    if (inputCover.files.length) {\n      var _inputCover$files = _slicedToArray(inputCover.files, 1),\n          newCover = _inputCover$files[0];\n\n      user.uploadCover(newCover).then(user.getInfo).then(function (data) {\n        return userUI.setCover(data.cover);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  } // function for uploading and showing all user's images in layout\n\n\n  function onImagesUpload(e) {\n    if (photosInputs.files.length) {\n      var _photosInputs$files = _toArray(photosInputs.files),\n          newImages = _photosInputs$files.slice(0);\n\n      user.uploadImages(newImages).then(function (response) {\n        user.getInfo().then(function (data) {\n          imageUI.clearContainer();\n          data.my_images.forEach(function (img) {\n            return imageUI.addImage(img);\n          });\n        }).catch(function (res) {\n          return message.show({\n            text: res.message,\n            error: res.error\n          });\n        });\n      }).catch(function (res) {\n        return message.show({\n          text: res.message,\n          error: res.error\n        });\n      });\n    }\n  } // function for removing one image from server and layout\n\n\n  function onImageCard(e) {\n    if (e.target.classList.contains('on-hover')) {\n      var currentImgId = e.target.closest('.img-wrap').dataset.imgId;\n      imageService.getInfo(currentImgId).then(function (res) {\n        $('#imageModal').modal('toggle');\n        return res;\n      }).then(function (res) {\n        return imageModal.renderInfo(res);\n      }).catch(function (res) {\n        return message.show({\n          text: res.message,\n          error: res.error\n        });\n      });\n      return;\n    }\n\n    if (e.target.parentElement.classList.contains('remove-wrap')) {\n      var _currentImgId = e.target.closest('.img-wrap').dataset.imgId;\n      imageService.getInfo(_currentImgId).then(function (res) {\n        imageService.remove(res).then(function (res) {\n          return imageUI.removeImage(_currentImgId);\n        }).catch(function (res) {\n          return message.show({\n            text: res.message,\n            error: res.error\n          });\n        });\n      }).catch(function (res) {\n        return message.show({\n          text: res.message,\n          error: res.error\n        });\n      });\n      return;\n    }\n  } // function for adding comment to image\n\n\n  function onCommentSubmit(e) {\n    e.preventDefault();\n    var currentImgId = document.querySelector('.current-image-stats').dataset.imgId;\n\n    if (addCommentInput.value) {\n      commentService.add(currentImgId, addCommentInput.value).then(function (res) {\n        imageService.getInfo(currentImgId).then(function (res) {\n          imageModal.updateCommentsInfo(res);\n          addCommentForm.reset();\n        }).catch(function (res) {\n          return console.log('Error with comments refresh');\n        });\n      }).catch(function (res) {\n        return console.log(res);\n      });\n    } else console.log('Empty edit field');\n  } // function which handles clicks to edit and remove buttons on comment and execute corresponding actions\n\n\n  function onCommentClick(e) {\n    var currentImgId = document.querySelector('.current-image-stats').dataset.imgId;\n    /* Вопросы: \r\n    1. мне не нравится, что тут внутри обработчика еще один обработчик, но не придумала как сделать по-другому, \r\n    ведь изначально нет всех элементов в DOM;\r\n    2. вопрос уникальности форм редактирования - я сделала через разметку и id, не знаю, есть ли еще варианты;\r\n    3. тут и в onImageCard просится switch/case вместо if, но не знаю, как для него написать условия\r\n    */\n\n    if (e.target.parentElement.classList.contains('edit-comment-wrap')) {\n      var commentId = e.target.closest(\"[data-comment-id]\").dataset.commentId;\n      var commentTextArea = document.querySelector(\"[data-comment-id=\\\"\".concat(commentId, \"\\\"] p.comment-text\"));\n      var commentEditForm = document.forms[\"editCommentForm-\".concat(commentId)];\n      var editCommentInput = commentEditForm.elements[0];\n      if (!editCommentInput.value) editCommentInput.value = commentTextArea.innerText;\n      commentTextArea.classList.toggle('d-none');\n      commentEditForm.parentElement.classList.toggle('d-none');\n      commentEditForm.addEventListener(\"submit\", function (e) {\n        e.preventDefault();\n        commentService.edit(commentId, editCommentInput.value).then(function (res) {\n          if (res.error) console.log(\"\".concat(res.message));else {\n            imageService.getInfo(currentImgId).then(function (res) {\n              imageModal.updateCommentsInfo(res);\n            }).catch(function (res) {\n              return console.log('Error with comments refresh');\n            });\n            commentEditForm.reset();\n          }\n        }).catch(function (res) {\n          return console.log(res);\n        });\n      });\n      return;\n    }\n\n    if (e.target.parentElement.classList.contains('delete-comment-wrap')) {\n      var _commentId = e.target.closest(\"[data-comment-id]\").dataset.commentId;\n      commentService.remove(_commentId, currentImgId).then(function (res) {\n        imageService.getInfo(currentImgId).then(function (res) {\n          imageModal.updateCommentsInfo(res);\n        }).catch(function (res) {\n          return console.log('Error with comments refresh');\n        });\n      }).catch(function (res) {\n        return console.log(res);\n      });\n      return;\n    }\n  } // Events\n\n\n  window.addEventListener(\"load\", onLoad);\n  inputCover.addEventListener(\"change\", onCoverUpload);\n  photosInputs.addEventListener(\"change\", onImagesUpload);\n  photosCards.addEventListener(\"click\", onImageCard);\n  addCommentForm.addEventListener(\"submit\", onCommentSubmit);\n  commentsWrap.addEventListener(\"click\", onCommentClick); // Remove loader\n\n  $('#imageModal').on('hidden.bs.modal', function (e) {\n    return imageModal.loaderToggle();\n  });\n}\n\n//# sourceURL=webpack:///./js/controls/home.js?");

/***/ }),

/***/ "./js/controls/login.js":
/*!******************************!*\
  !*** ./js/controls/login.js ***!
  \******************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginPage\", function() { return LoginPage; });\n/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth */ \"./js/services/auth.js\");\n/* harmony import */ var _modules_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../modules/message */ \"./js/modules/message.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../modules/validation */ \"./js/modules/validation.js\");\n\n\n\nfunction LoginPage() {\n  // Init Auth Service\n  var auth = new _services_auth__WEBPACK_IMPORTED_MODULE_0__[\"AuthService\"](); // Init Message Module\n\n  var message = new _modules_message__WEBPACK_IMPORTED_MODULE_1__[\"Message\"]();\n  message.init(); // Login UI elements\n\n  var form = document.forms[\"loginForm\"];\n  var emailInput = form.elements[\"email\"];\n  var passwordInput = form.elements[\"password\"];\n  var formModal = document.forms[\"resetPswForm\"];\n  var emailModalInput = formModal[\"emailModal\"]; // Login handler - validates data in Login form, if correct - calls API to login and save user's data to localStorage\n\n  function submitHandler(e) {\n    e.preventDefault();\n    var validation = new _modules_validation__WEBPACK_IMPORTED_MODULE_2__[\"Validation\"](form);\n    validation.init();\n    if (!validation.check()) return message.show({\n      text: \"Fill in all marked fields correctly\",\n      error: true\n    });\n    auth.login(emailInput.value, passwordInput.value).then(function (res) {\n      if (!res.error) {\n        localStorage.setItem(\"social_user_id\", res.id);\n        localStorage.setItem(\"social_user_token\", res.token);\n        window.location = \"index.html\";\n      } else {\n        message.show({\n          text: res.message,\n          error: res.error\n        });\n      }\n    }).catch(function (error) {\n      console.log(error);\n    });\n  } // Reset password handler - validates data in Reset Password form in modal dialog, if correct - calls API to reset password\n\n\n  function resetPswHandler(e) {\n    e.preventDefault();\n    var validation = new _modules_validation__WEBPACK_IMPORTED_MODULE_2__[\"Validation\"](formModal);\n    validation.init();\n    if (!validation.check()) return message.show({\n      text: \"Fill in valid email\",\n      error: true\n    });\n    auth.resetPsw(emailModalInput.value).then(function (res) {\n      message.show({\n        text: res.message,\n        error: res.error\n      });\n\n      if (!res.error) {\n        $('.modal').modal('toggle');\n        formModal.reset();\n      }\n    }).catch(function (error) {\n      console.log(error);\n    });\n  }\n\n  form.addEventListener(\"submit\", submitHandler);\n  formModal.addEventListener(\"submit\", resetPswHandler);\n}\n\n//# sourceURL=webpack:///./js/controls/login.js?");

/***/ }),

/***/ "./js/controls/register.js":
/*!*********************************!*\
  !*** ./js/controls/register.js ***!
  \*********************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignupPage\", function() { return SignupPage; });\n/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth */ \"./js/services/auth.js\");\n/* harmony import */ var _modules_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../modules/message */ \"./js/modules/message.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../modules/validation */ \"./js/modules/validation.js\");\n\n\n\nfunction SignupPage() {\n  //Init signUp service\n  //const signUp = new signUpService();\n  //Init auth service\n  var signUp = new _services_auth__WEBPACK_IMPORTED_MODULE_0__[\"AuthService\"](); //Init Message Module\n\n  var message = new _modules_message__WEBPACK_IMPORTED_MODULE_1__[\"Message\"]();\n  message.init(); //Registation UI elements\n\n  var form = document.forms[\"signUpForm\"];\n  var emailInput = form.elements[\"email\"];\n  var passwordInput = form.elements[\"password\"];\n  var nicknameInput = form.elements[\"nick_name\"];\n  var first_nameInput = form.elements[\"first_name\"];\n  var last_nameInput = form.elements[\"last_name\"];\n  var phoneInput = form.elements[\"phone\"];\n  var gender_orientationInput = form.elements[\"gender\"];\n  var cityInput = form.elements[\"city\"];\n  var countryInput = form.elements[\"country\"];\n  var date_of_birth_dayInput = form.elements[\"day_of_birth\"];\n  var date_of_birth_monthInput = form.elements[\"month_of_birth\"];\n  var date_of_birth_yearInput = form.elements[\"year_of_birth\"]; //Registration handler - validates data in Registration form, if correct - creates object with data from Registration form, calls for register function and shows message with result\n\n  function submitHandler(e) {\n    e.preventDefault();\n    var validation = new _modules_validation__WEBPACK_IMPORTED_MODULE_2__[\"Validation\"](form);\n    validation.init();\n    if (!validation.check()) return message.show({\n      text: \"Fill in all marked fields correctly\",\n      error: true\n    });\n    var newUser = {\n      email: emailInput.value,\n      password: passwordInput.value,\n      nickname: nicknameInput.value,\n      first_name: first_nameInput.value,\n      last_name: last_nameInput.value,\n      phone: phoneInput.value,\n      gender_orientation: gender_orientationInput.value,\n      city: cityInput.value,\n      country: countryInput.value,\n      date_of_birth_day: date_of_birth_dayInput.value,\n      date_of_birth_month: date_of_birth_monthInput.value,\n      date_of_birth_year: date_of_birth_yearInput.value\n    };\n    signUp.register(newUser).then(function (res) {\n      if (!res.error) {\n        message.show({\n          text: res.message,\n          error: res.error\n        });\n        setTimeout(function () {\n          return window.location = \"login.html\";\n        }, 3000);\n      } else {\n        message.show({\n          text: res.message,\n          error: res.error\n        });\n        passwordInput.value = '';\n      }\n    }).catch(function (error) {\n      console.log(error);\n    });\n  } // Event handlers for registration form\n\n\n  form.addEventListener(\"submit\", submitHandler);\n}\n\n//# sourceURL=webpack:///./js/controls/register.js?");

/***/ }),

/***/ "./js/guard/auth.guard.js":
/*!********************************!*\
  !*** ./js/guard/auth.guard.js ***!
  \********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthGuard\", function() { return AuthGuard; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AuthGuard =\n/*#__PURE__*/\nfunction () {\n  function AuthGuard() {\n    _classCallCheck(this, AuthGuard);\n  }\n\n  _createClass(AuthGuard, [{\n    key: \"check\",\n    value: function check(currentPage) {\n      console.log(currentPage); // Get token \n\n      var token = localStorage.getItem(\"social_user_token\"); // Get id\n\n      var id = localStorage.getItem(\"social_user_id\");\n      if ((!token || !id) && currentPage !== 'login') return window.location = './login.html';\n      if (token && id && currentPage === 'login') return window.location = './index.html';\n      if (token && id && currentPage === 'register') return window.location = './index.html';\n    }\n  }]);\n\n  return AuthGuard;\n}();\n\n//# sourceURL=webpack:///./js/guard/auth.guard.js?");

/***/ }),

/***/ "./js/modules/message.js":
/*!*******************************!*\
  !*** ./js/modules/message.js ***!
  \*******************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Message =\n/*#__PURE__*/\nfunction () {\n  function Message() {\n    _classCallCheck(this, Message);\n\n    this._messageContainer;\n  } // Adds container for messages and initials _messageContainer property\n\n\n  _createClass(Message, [{\n    key: \"init\",\n    value: function init() {\n      this._setContainer();\n    } // Adds message to layout\n\n  }, {\n    key: \"show\",\n    value: function show(_ref) {\n      var text = _ref.text,\n          error = _ref.error;\n\n      var template = Message._createMessageTemplate(text, error);\n\n      this._messageContainer.insertAdjacentHTML(\"afterbegin\", template);\n    } // Creates container for messages\n\n  }, {\n    key: \"_setContainer\",\n    value: function _setContainer() {\n      var template = \"<div class='message-container'></div>\";\n      document.body.insertAdjacentHTML(\"afterbegin\", template);\n      this._messageContainer = document.querySelector(\".message-container\");\n    } // Creates template for message\n\n  }], [{\n    key: \"_createMessageTemplate\",\n    value: function _createMessageTemplate(text, error) {\n      return \"\\n            <div class=\\\"alert \".concat(error ? 'alert-danger' : 'alert-success', \"\\\">\").concat(text, \"</div>\\n        \");\n    }\n  }]);\n\n  return Message;\n}();\n\n//# sourceURL=webpack:///./js/modules/message.js?");

/***/ }),

/***/ "./js/modules/validation.js":
/*!**********************************!*\
  !*** ./js/modules/validation.js ***!
  \**********************************/
/*! exports provided: Validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Validation\", function() { return Validation; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Validation =\n/*#__PURE__*/\nfunction () {\n  function Validation(form) {\n    _classCallCheck(this, Validation);\n\n    this._form = form;\n    this._inputs = this._form.querySelectorAll(\"[data-pattern]\");\n  } // Add event handlers for all _inputs on _form\n\n\n  _createClass(Validation, [{\n    key: \"init\",\n    value: function init() {\n      this._setEvents();\n    } // Checks if values in _inputs match corresponding data-pattern regexp and if not, marked input as invalid  \n\n  }, {\n    key: \"check\",\n    value: function check() {\n      var state = true;\n\n      this._inputs.forEach(function (input) {\n        var regExp = new RegExp(input.dataset.pattern);\n\n        if (!regExp.test(input.value)) {\n          input.classList.add(\"is-invalid\");\n          state = false;\n        }\n      });\n\n      return state;\n    } // Creates event handlers for all _inputs on _form for \"focus\" event\n\n  }, {\n    key: \"_setEvents\",\n    value: function _setEvents() {\n      var _this = this;\n\n      this._inputs.forEach(function (input) {\n        return input.addEventListener(\"focus\", function (e) {\n          return _this._onFocusHandler(e);\n        });\n      });\n    } // Removes \"is-invalid\" class on element\n\n  }, {\n    key: \"_onFocusHandler\",\n    value: function _onFocusHandler(e) {\n      e.target.classList.remove(\"is-invalid\");\n    }\n  }]);\n\n  return Validation;\n}();\n\n//# sourceURL=webpack:///./js/modules/validation.js?");

/***/ }),

/***/ "./js/services/auth.js":
/*!*****************************!*\
  !*** ./js/services/auth.js ***!
  \*****************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthService\", function() { return AuthService; });\n/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/env */ \"./js/config/env.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar AuthService =\n/*#__PURE__*/\nfunction () {\n  function AuthService() {\n    _classCallCheck(this, AuthService);\n  }\n\n  _createClass(AuthService, [{\n    key: \"login\",\n\n    /**\n     * login - function for login user\n     * @param {String} email email of existing user;\n     * @param {String} password corresponding password\n     * @returns {Promise} which can be resolved with data from server response or error  \n     */\n    value: function login(email, password) {\n      return new Promise(function (resolve, reject) {\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/auth/login\"), {\n          method: \"POST\",\n          body: JSON.stringify({\n            email: email,\n            password: password\n          }),\n          headers: {\n            \"Content-type\": \"application/json\"\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n    /**\n     * resetPsw - function for password reseting \n     * @param {String} email email of existing user;\n     * @returns {Promise} which can be resolved with data from server response or error  \n     */\n\n  }, {\n    key: \"resetPsw\",\n    value: function resetPsw(email) {\n      return new Promise(function (resolve, reject) {\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/auth/reset-password\"), {\n          method: \"POST\",\n          body: JSON.stringify({\n            email: email\n          }),\n          headers: {\n            \"Content-type\": \"application/json\"\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n    /**\n     * register - function for registering of new user\n     * @param {Object} newUser - object with the keys: \n     * email: \"denis.m.pcspace@gmail.com\",\n     * password: \"dmgame12345\",\n     * nickname: \"dmgame\",\n     * first_name: \"Denis\",\n     * last_name: \"Mescheryakov\",\n     * phone: \"0631234567\",\n     * gender_orientation: \"male\", // or \"female\"\n     * city: \"Kharkiv\",\n     * country: \"Ukrane\",\n     * date_of_birth_day: 01,\n     * date_of_birth_month: 03,\n     * date_of_birth_year: 1989\n     * @returns {Promise} which can be resolved with data from server response or error  \n    */\n\n  }, {\n    key: \"register\",\n    value: function register(newUser) {\n      return new Promise(function (resolve, reject) {\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/auth/signup\"), {\n          method: \"POST\",\n          body: JSON.stringify(newUser),\n          headers: {\n            \"Content-type\": \"application/json\"\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n  }]);\n\n  return AuthService;\n}();\n\n//# sourceURL=webpack:///./js/services/auth.js?");

/***/ }),

/***/ "./js/services/comment.js":
/*!********************************!*\
  !*** ./js/services/comment.js ***!
  \********************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CommentService\", function() { return CommentService; });\n/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/env */ \"./js/config/env.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar CommentService =\n/*#__PURE__*/\nfunction () {\n  function CommentService() {\n    _classCallCheck(this, CommentService);\n  }\n\n  _createClass(CommentService, [{\n    key: \"add\",\n\n    /**\r\n     * @param {String} id of image\r\n     * @param {String} text text of new comment\r\n     * @returns {Promise} which can be resolved with data from server response or error\r\n    */\n    value: function add(id, text) {\n      return new Promise(function (resolve, reject) {\n        // Get token\n        var token = localStorage.getItem(\"social_user_token\"); // Get user id\n\n        var _id = localStorage.getItem(\"social_user_id\");\n\n        if (!token || !id) return reject(\"Error. Unauthorized.\");\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/comment/\").concat(id), {\n          method: \"POST\",\n          body: JSON.stringify({\n            \"comment_text\": text\n          }),\n          headers: {\n            \"x-access-token\": token,\n            \"Content-type\": \"application/json\"\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n    /**\r\n     * @param {String} id id of comment\r\n     * @param {String} imgId id of corresponding image\r\n     * @returns {Promise} which can be resolved with data from server response or error\r\n    */\n\n  }, {\n    key: \"remove\",\n    value: function remove(id, imgId) {\n      return new Promise(function (resolve, reject) {\n        // Get token\n        var token = localStorage.getItem(\"social_user_token\"); // Get user id\n\n        var _id = localStorage.getItem(\"social_user_id\");\n\n        if (!token || !id) return reject(\"Error. Unauthorized.\");\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/comment/\").concat(id), {\n          method: \"DELETE\",\n          body: JSON.stringify({\n            image_id: imgId\n          }),\n          headers: {\n            \"x-access-token\": token,\n            \"Content-type\": \"application/json\"\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n    /**\r\n     * @param {String} id id of comment\r\n     * @param {String} text new text of comment\r\n     * @returns {Promise} which can be resolved with data from server response or error\r\n    */\n\n  }, {\n    key: \"edit\",\n    value: function edit(id, text) {\n      return new Promise(function (resolve, reject) {\n        // Get token\n        var token = localStorage.getItem(\"social_user_token\"); // Get user id\n\n        var _id = localStorage.getItem(\"social_user_id\");\n\n        if (!token || !id) return reject(\"Error. Unauthorized.\");\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/comment/\").concat(id), {\n          method: \"PUT\",\n          body: JSON.stringify({\n            comment_text: text\n          }),\n          headers: {\n            \"x-access-token\": token,\n            \"Content-type\": \"application/json\"\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n  }]);\n\n  return CommentService;\n}();\n\n//# sourceURL=webpack:///./js/services/comment.js?");

/***/ }),

/***/ "./js/services/image.js":
/*!******************************!*\
  !*** ./js/services/image.js ***!
  \******************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageService\", function() { return ImageService; });\n/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/env */ \"./js/config/env.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar ImageService =\n/*#__PURE__*/\nfunction () {\n  function ImageService() {\n    _classCallCheck(this, ImageService);\n  }\n\n  _createClass(ImageService, [{\n    key: \"getInfo\",\n\n    /**\n     * getInfo - function for getting info about one image\n     * @param {id} id of image to get it's info\n     * @return {Promise} which can be resolved with data from server response (details about one image) or error\n     */\n    value: function getInfo(id) {\n      return new Promise(function (resolve, reject) {\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/image-info/\").concat(id)).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n    /**\n     * remove - function for deleting of one earlier uploaded image from server\n     * @param {String} image_id id of image which should be deleted\n     * @return {Promise} which can be resolved with data from server response or error\n     */\n\n  }, {\n    key: \"remove\",\n    value: function remove(_ref) {\n      var _id = _ref._id,\n          url = _ref.url;\n      return new Promise(function (resolve, reject) {\n        // Get token\n        var token = localStorage.getItem(\"social_user_token\"); // Get user id\n\n        var id = localStorage.getItem(\"social_user_id\");\n        if (!token || !id) return reject({\n          message: \"Not Authorised, please, sign in again!\",\n          error: true\n        });\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/remove-photo/\").concat(id), {\n          method: \"DELETE\",\n          body: JSON.stringify({\n            image_id: _id,\n            image_url: url.match(/userPhotos-.+$/)[0]\n          }),\n          headers: {\n            \"x-access-token\": token,\n            \"Content-type\": \"application/json\"\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n  }]);\n\n  return ImageService;\n}();\n\n//# sourceURL=webpack:///./js/services/image.js?");

/***/ }),

/***/ "./js/services/user.js":
/*!*****************************!*\
  !*** ./js/services/user.js ***!
  \*****************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserService\", function() { return UserService; });\n/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/env */ \"./js/config/env.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar UserService =\n/*#__PURE__*/\nfunction () {\n  function UserService() {\n    _classCallCheck(this, UserService);\n  }\n\n  _createClass(UserService, [{\n    key: \"getInfo\",\n\n    /**\n     * getInfo - function for retrieving all data about user\n     * @returns {Promise} which can be resolved with data from server response (object with user's data) or error\n    */\n    value: function getInfo() {\n      return new Promise(function (resolve, reject) {\n        // Get user id\n        var id = localStorage.getItem(\"social_user_id\");\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/get-info/\").concat(id)).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n    /**\n     * uploadCover - function for changing cover Image for user\n     * @param {File Object} file which should be uploaded to server\n     * @returns {Promise} which can be resolved with data from server response or error\n    */\n\n  }, {\n    key: \"uploadCover\",\n    value: function uploadCover(file) {\n      return new Promise(function (resolve, reject) {\n        var formData = new FormData();\n        formData.append(\"coverImg\", file); // Get token\n\n        var token = localStorage.getItem(\"social_user_token\"); // Get user id\n\n        var id = localStorage.getItem(\"social_user_id\");\n        if (!token || !id) return reject(\"Error. Unauthorized.\");\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/upload-cover/\").concat(id), {\n          method: \"POST\",\n          body: formData,\n          headers: {\n            \"x-access-token\": token\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n    /**\n     * uploadImages - function for uploading images for user\n     * @param {Array} files Array of files which should be uploaded to server\n     * @returns {Promise} which can be resolved with data from server response or error\n    */\n\n  }, {\n    key: \"uploadImages\",\n    value: function uploadImages(files) {\n      return new Promise(function (resolve, reject) {\n        var formData = new FormData();\n        files.forEach(function (photo, i) {\n          formData.append(\"userPhotos\", photo);\n        }); // // Get token\n\n        var token = localStorage.getItem(\"social_user_token\"); // Get user id\n\n        var id = localStorage.getItem(\"social_user_id\");\n        if (!token || !id) return reject(\"Error. Unauthorized.\");\n        fetch(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"env\"].apiUrl, \"/public/users/upload-photos/\").concat(id), {\n          method: \"POST\",\n          body: formData,\n          headers: {\n            \"Accept\": \"application/json, text/plain, */*\",\n            \"x-access-token\": token\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n  }]);\n\n  return UserService;\n}();\n\n//# sourceURL=webpack:///./js/services/user.js?");

/***/ }),

/***/ "./js/ui/image.js":
/*!************************!*\
  !*** ./js/ui/image.js ***!
  \************************/
/*! exports provided: ImageUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageUI\", function() { return ImageUI; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ImageUI =\n/*#__PURE__*/\nfunction () {\n  function ImageUI() {\n    _classCallCheck(this, ImageUI);\n\n    this._imagesContainer = document.querySelector(\".images-wrap .row.images\");\n  } // Add one image to layout\n\n\n  _createClass(ImageUI, [{\n    key: \"addImage\",\n    value: function addImage(image) {\n      var template = ImageUI._imageTemplate(image);\n\n      this._imagesContainer.insertAdjacentHTML(\"afterbegin\", template);\n    } //  remove image from layout by id of image\n\n  }, {\n    key: \"removeImage\",\n    value: function removeImage(id) {\n      var imgTemplate = document.querySelector(\"div[data-img-id=\\\"\".concat(id, \"\\\"] img\")).closest('.col');\n\n      this._imagesContainer.removeChild(imgTemplate);\n    } // clear container with all user's uploaded images\n\n  }, {\n    key: \"clearContainer\",\n    value: function clearContainer() {\n      this._imagesContainer.innerHTML = \"\";\n    } // template of one image\n\n  }], [{\n    key: \"_imageTemplate\",\n    value: function _imageTemplate(_ref) {\n      var url = _ref.url,\n          views = _ref.views,\n          likes = _ref.likes,\n          _id = _ref._id;\n      return \"\\n        <div class=\\\"col-4 col\\\">\\n            <div class=\\\"img-wrap\\\" data-img-id=\\\"\".concat(_id, \"\\\">\\n                <img src=\\\"\").concat(url, \"\\\" alt=\\\"\\\">\\n                <div class=\\\"on-hover d-flex flex-column justify-content-between\\\">\\n                    <div class=\\\"remove-wrap d-flex\\\">\\n                        <i class=\\\"fas fa-trash-alt ml-auto\\\"></i>\\n                    </div>\\n\\n                    <div class=\\\"img-info d-flex align-items-center\\\">\\n                        <span class=\\\"views-count d-flex align-items-center\\\">\\n                            <i class=\\\"fas fa-eye\\\"></i>\\n                            \").concat(views.length, \"\\n                        </span>\\n                        <span class=\\\"likes-count d-flex align-items-center ml-5\\\">\\n                            <i class=\\\"fas fa-thumbs-up\\\"></i>\\n                            \").concat(likes.length, \"\\n                        </span>\\n                        \\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n        <!-- /.col-4 col -->\\n        \");\n    }\n  }]);\n\n  return ImageUI;\n}();\n\n//# sourceURL=webpack:///./js/ui/image.js?");

/***/ }),

/***/ "./js/ui/imageModal.js":
/*!*****************************!*\
  !*** ./js/ui/imageModal.js ***!
  \*****************************/
/*! exports provided: ImageModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageModal\", function() { return ImageModal; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ImageModal =\n/*#__PURE__*/\nfunction () {\n  function ImageModal() {\n    _classCallCheck(this, ImageModal);\n\n    this._imageInfoContainer = document.querySelector(\"#imageModal .current-image-info\");\n    this._imgTag = document.querySelector(\".current-image img\");\n    this._commentContainer = document.querySelector(\".current-image-comments-wrap\");\n    this._loader = document.getElementById(\"loading\");\n  } // function for rendering content in modal (calls all required methods)\n\n\n  _createClass(ImageModal, [{\n    key: \"renderInfo\",\n    value: function renderInfo(image) {\n      this.clearModal();\n      this.clearComments();\n      this.setBaseInfo(image);\n      this.setImg(image);\n      this.setComments(image);\n      this.loaderToggle();\n    } // function for updating only blocks of comments in modal\n\n  }, {\n    key: \"updateCommentsInfo\",\n    value: function updateCommentsInfo(image) {\n      this.clearComments();\n      this.setComments(image);\n    } // function for changing states of loader in modal\n\n  }, {\n    key: \"loaderToggle\",\n    value: function loaderToggle() {\n      this._loader.classList.toggle(\"hidden\");\n    } // function adds info about image to modal layout\n\n  }, {\n    key: \"setBaseInfo\",\n    value: function setBaseInfo(image) {\n      var template = ImageModal._basicInfoTemplate(image);\n\n      this._imageInfoContainer.insertAdjacentHTML(\"afterbegin\", template);\n    } // function adds URL of image to modal layout\n\n  }, {\n    key: \"setImg\",\n    value: function setImg(_ref) {\n      var url = _ref.url;\n      this._imgTag.src = url;\n    } // function adds all comments for image to layout\n\n  }, {\n    key: \"setComments\",\n    value: function setComments(_ref2) {\n      var comments = _ref2.comments,\n          owner = _ref2.owner;\n      var template = \"\";\n      comments.forEach(function (comment) {\n        return template += ImageModal._commentTemplate(comment, owner._id);\n      });\n\n      this._commentContainer.insertAdjacentHTML(\"afterbegin\", template);\n    } // clears container with info about image\n\n  }, {\n    key: \"clearModal\",\n    value: function clearModal() {\n      this._imageInfoContainer.innerHTML = \"\";\n    } // clears container with comments\n\n  }, {\n    key: \"clearComments\",\n    value: function clearComments() {\n      this._commentContainer.innerHTML = \"\";\n    } // template of one comment\n\n  }], [{\n    key: \"_commentTemplate\",\n    value: function _commentTemplate(_ref3, ownerId) {\n      var owner = _ref3.owner,\n          avatar = _ref3.avatar,\n          full_name = _ref3.full_name,\n          text = _ref3.text,\n          time_update = _ref3.time_update,\n          _id = _ref3._id,\n          sub_comments = _ref3.sub_comments;\n      var currentUserId = localStorage.getItem(\"social_user_id\");\n      var isOwner = currentUserId == owner || currentUserId == ownerId;\n      return \"\\n        <div class=\\\"comment-item\\\" data-comment-id=\\\"\".concat(_id, \"\\\" mb-4\\\">\\n            <div class=\\\"comment-item-details d-flex\\\">\\n                <div class=\\\"comment-owner-avatar\\\">\\n                    <img src=\\\"\").concat(avatar, \"\\\" alt=\\\"\\\">\\n                </div>\\n                <!-- /.comment-owner -->\\n                <div class=\\\"comment-item-info d-flex flex-column\\\">\\n                    <h6 class=\\\"font-weight-bold\\\">\").concat(full_name, \"</h6>\\n                    <p class=\\\"comment-text\\\">\").concat(text, \"</p>\\n                    <div class=\\\"edit-comment-form mt-4 d-none\\\">\\n                        <form name=\\\"editCommentForm-\").concat(_id, \"\\\">\\n                            <input type=\\\"text\\\" name=\\\"editedComment-\").concat(_id, \"\\\" id=\\\"editedComment-\").concat(_id, \"\\\" class=\\\"form-control form-control-sm\\\" value=\\\"\").concat(text, \"\\\" required>\\n                            <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-sm mt-3\\\">Submit</button>\\n                        </form>\\n                    </div>                       \\n                    <!-- /.edit-comment-form -->\\n                    <span class=\\\"text-secondary\\\">\").concat(time_update, \"</span>\\n                </div>\\n                <!-- /.comment-item-info -->\\n                <div class=\\\"ml-auto\\\">\\n                    \").concat(isOwner ? '<div class=\"edit-comment-wrap\"><i class=\"fas fa-edit\"></i></div> <div class=\"delete-comment-wrap\"><i class=\"fas fa-trash-alt\"></i></div>' : '', \"\\n                </div>\\n            </div>\\n            <!-- /.comment-item-details -->\\n            <div class=\\\"sub-comments\\\"></div>\\n            <!-- /.sub-comments -->\\n        </div>\\n        <!-- /.comment-item -->\\n        \");\n    } // template of image info \n\n  }, {\n    key: \"_basicInfoTemplate\",\n    value: function _basicInfoTemplate(_ref4) {\n      var _id = _ref4._id,\n          owner = _ref4.owner,\n          views = _ref4.views,\n          likes = _ref4.likes;\n      return \"\\n            <div class=\\\"owner-info d-flex align-items-center\\\">\\n                <div class=\\\"owner-avatar\\\">\\n                    <img src=\\\"\".concat(owner.avatar, \"\\\" alt=\\\"\\\">\\n                </div>\\n                <!-- /.owner-avatar -->\\n                <div class=\\\"d-flex flex-column\\\">\\n                    <span class=\\\"font-weight-bold\\\">\").concat(owner.full_name, \"</span>\\n                    <span class=\\\"text-secondary\\\">\").concat(owner.city, \"</span>\\n                </div>\\n            </div>\\n            <!-- /.owner-info -->\\n            <div class=\\\"current-image-stats d-flex ml-auto\\\" data-img-id=\\\"\").concat(_id, \"\\\">\\n                <div class=\\\"views-count d-flex flex-column align-items-center\\\">\\n                    <i class=\\\"fas fa-eye\\\"></i>\\n                    <span class=\\\"font-weight-bold\\\">\").concat(views.length, \"</span>\\n                </div>\\n                <div class=\\\"likes-count d-flex flex-column align-items-center ml-4\\\">\\n                    <i class=\\\"fas fa-thumbs-up\\\"></i>\\n                    <span class=\\\"font-weight-bold\\\">\").concat(likes.length, \"</span>\\n                </div>\\n            </div>\\n            <!-- /.image-statistics -->\\n        \");\n    }\n  }]);\n\n  return ImageModal;\n}();\n\n//# sourceURL=webpack:///./js/ui/imageModal.js?");

/***/ }),

/***/ "./js/ui/user.js":
/*!***********************!*\
  !*** ./js/ui/user.js ***!
  \***********************/
/*! exports provided: UserUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserUI\", function() { return UserUI; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar UserUI =\n/*#__PURE__*/\nfunction () {\n  function UserUI() {\n    _classCallCheck(this, UserUI);\n\n    this._cover = document.querySelector(\".user-cover\");\n    this._userAvatar = document.querySelector(\".user-ava\");\n    this._userName = document.querySelector(\".user-name\");\n  }\n  /**\n   * renderUserInfo function which adds user's data to layout\n   * @param {Object} user object with user's data and minimal keys avatar, cover, full_name\n   */\n\n\n  _createClass(UserUI, [{\n    key: \"renderUserInfo\",\n    value: function renderUserInfo(_ref) {\n      var avatar = _ref.avatar,\n          cover = _ref.cover,\n          full_name = _ref.full_name;\n      this.setCover(cover);\n      this.setAvatar(avatar);\n      this.setName(full_name);\n    }\n    /**\n     * @param {String} url address of file which should be added as background\n     */\n\n  }, {\n    key: \"setCover\",\n    value: function setCover(url) {\n      this._cover.style.background = \"url(\\\"\".concat(url, \"\\\") no-repeat center / cover\");\n    }\n    /**\n     * @param {String} url address of file which should be added as user's avatar\n     */\n\n  }, {\n    key: \"setAvatar\",\n    value: function setAvatar(url) {\n      var template = \"<img src=\\\"\".concat(url, \"\\\" alt=\\\"\\\">\");\n\n      this._userAvatar.insertAdjacentHTML(\"afterbegin\", template);\n    }\n    /**\n     * @param {String} name string which is shown as user's name\n     */\n\n  }, {\n    key: \"setName\",\n    value: function setName(name) {\n      this._userName.textContent = name;\n    }\n  }]);\n\n  return UserUI;\n}();\n\n//# sourceURL=webpack:///./js/ui/user.js?");

/***/ })

/******/ });