!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./js/app/index.js")}({"./js/app/index.js":
/*!*************************!*\
  !*** ./js/app/index.js ***!
  \*************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("const { Shop } = __webpack_require__(/*! ../shop/shop */ \"./js/shop/shop.js\");\nlet shop;\n\nconst shopItems = [{ category: 0, label: 'bear', price: 70 }, { category: 1, label: 'gold bear 2', price: 120 }, { category: 0, label: 'bear 3333', price: 70 }, { category: 1, label: 'gold bear 33', price: 120 }, { category: 0, label: 'bear 223', price: 70 }, { category: 1, label: 'gold bear dsd', price: 120 }, { category: 0, label: 'bear sds', price: 70 }, { category: 1, label: 'gold bear dsds', price: 120 }, { category: 0, label: 'bear dsqq', price: 70 }, { category: 1, label: 'gold bea qqqr', price: 120 }];\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    shop = new Shop(shopItems);\n});\n\n//# sourceURL=webpack:///./js/app/index.js?")},"./js/helpers/domHelper.js":
/*!*********************************!*\
  !*** ./js/helpers/domHelper.js ***!
  \*********************************/
/*! no static exports found */function(module,exports){eval("class DomHelper {\n\n    //#region  Создание элемента\n    createElement(tagName = 'div', content = '', className = '') {\n        const parent = document.getElementById('root');\n\n        let newElement = document.createElement(tagName);\n        newElement.innerHTML = content;\n        newElement.classList.value = className;\n        parent.appendChild(newElement);\n    }\n    //#endregion\n\n    //#region удаление всех элементов одного класса\n    removeElementsByClassName(className) {\n        const elements = document.querySelectorAll(className);\n\n        elements.forEach(el => el.remove());\n    }\n    //#endregion\n}\n\nlet domHelper = new DomHelper();\nmodule.exports.domHelper = domHelper;\n\n//# sourceURL=webpack:///./js/helpers/domHelper.js?")},"./js/shop/shop.js":
/*!*************************!*\
  !*** ./js/shop/shop.js ***!
  \*************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("const { domHelper } = __webpack_require__(/*! ../helpers/domHelper */ \"./js/helpers/domHelper.js\");\n\nclass Shop {\n    constructor(products) {\n        this.products = products;\n\n        this.initBuyBtn();\n    }\n\n    //#region  Рендеринг массива \n    renderProducts(collection) {\n        collection.map(product => {\n            return domHelper.createElement('p', `${product.label} - ${product.price} рублей. category: ${product.category}`, 'bear-li');\n        });\n    }\n    //#endregion\n\n    //#region  инициализация кнопки \"приобрести товар\"\n    initBuyBtn() {\n        domHelper.createElement('button', `Приобрести товар`);\n        this.bindBuyBtn();\n    }\n    //#endregion\n\n    //#region события для кнопки \"приобрести товар\"\n    bindBuyBtn() {\n        let buyBtn = document.getElementsByTagName('button')[0];\n\n        buyBtn.addEventListener('click', () => {\n            let productId = prompt('Введите категорию товара. 0 - bear 1 - gold bear', 0);\n            productId = parseInt(productId);\n\n            if (isNaN(productId)) return alert(`Вы должны ввести число!`);\n            let buyedItems = this.filterCollection(this.products, productId, 'category');\n            if (buyedItems.length < 1) return alert(`Товаров категории ${productId} не найдено`);\n\n            domHelper.removeElementsByClassName('.bear-li');\n            this.renderProducts(buyedItems);\n        });\n    }\n    //#endregion\n\n    //#region фильтрация массива\n    filterCollection(collection, value, obj) {\n        return collection.filter(item => item[obj] === value);\n    }\n    //#endregion\n}\n\nmodule.exports.Shop = Shop;\n\n//# sourceURL=webpack:///./js/shop/shop.js?")}});