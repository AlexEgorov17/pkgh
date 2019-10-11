const {domHelper} = require('../helpers/domHelper')

class Shop {
    constructor(products) {
        this.products = products;

        this.initBuyBtn()
    }   

    //#region  Рендеринг массива 
    renderProducts(collection) {
        collection.map(product => {
            return domHelper.createElement('p', `${product.label} - ${product.price} рублей. category: ${product.category}`, 'bear-li')
        })
    }
    //#endregion

    //#region  инициализация кнопки "приобрести товар"
    initBuyBtn() {
        domHelper.createElement('button', `Приобрести товар`)
        this.bindBuyBtn()
    }
    //#endregion
    
    //#region события для кнопки "приобрести товар"
    bindBuyBtn() {
        let buyBtn = document.getElementsByTagName('button')[0];

        buyBtn.addEventListener('click', () => {
            let productId = prompt('Введите категорию товара. 0 - bear 1 - gold bear', 0);
            productId = parseInt(productId)

            if(isNaN(productId)) return alert(`Вы должны ввести число!`)
            let buyedItems = this.filterCollection(this.products, productId, 'category');
            if(buyedItems.length < 1) return alert(`Товаров категории ${productId} не найдено`)

            domHelper.removeElementsByClassName('.bear-li')
            this.renderProducts(buyedItems) 
        })
    }
    //#endregion

    //#region фильтрация массива
    filterCollection(collection, value, obj) {
        return collection.filter(item => item[obj] === value)
    }
    //#endregion
}

module.exports.Shop = Shop;

