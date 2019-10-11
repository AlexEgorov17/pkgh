const {Shop} = require('../shop/shop')
let shop;

const shopItems = [
    {category: 0, label: 'bear', price: 70},
    {category: 1, label: 'gold bear 2', price: 120},
    {category: 0, label: 'bear 3333', price: 70},
    {category: 1, label: 'gold bear 33', price: 120},
    {category: 0, label: 'bear 223', price: 70},
    {category: 1, label: 'gold bear dsd', price: 120},
    {category: 0, label: 'bear sds', price: 70},
    {category: 1, label: 'gold bear dsds', price: 120},
    {category: 0, label: 'bear dsqq', price: 70},
    {category: 1, label: 'gold bea qqqr', price: 120},
]


document.addEventListener('DOMContentLoaded', () => {
    shop = new Shop(shopItems)
})  


