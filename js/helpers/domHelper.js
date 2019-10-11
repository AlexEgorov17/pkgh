class DomHelper {

    //#region  Создание элемента
    createElement(tagName = 'div', content = '', className = '') {
        const parent = document.getElementById('root')

        let newElement = document.createElement(tagName)
        newElement.innerHTML = content;
        newElement.classList.value = className
        parent.appendChild(newElement)
    }
    //#endregion

    //#region удаление всех элементов одного класса
    removeElementsByClassName(className) {
        const elements = document.querySelectorAll(className);

        elements.forEach(el => el.remove())
    }
    //#endregion
}

let domHelper = new DomHelper()
module.exports.domHelper = domHelper;