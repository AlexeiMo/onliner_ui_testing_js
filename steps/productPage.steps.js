const productPage = require('../pages/product.page')
const allure = require('@wdio/allure-reporter').default
const log = require('@wdio/logger').default
const logger = log('test-basic')

class ProductPageSteps {

    get moveToProdTradersMsg() { return 'Move to product traders' }
    get addProdToCartMsg() { return 'Add specified product to cart'}
    get openCartPageMsg() { return 'Opening cart page'}
    get acceptLocationMsg() { return 'Accepting location popup'}

    moveToProductTraders() {
        logger.info(this.moveToProdTradersMsg)
        allure.startStep(this.moveToProdTradersMsg)
        productPage.clickProductTraders()
        allure.endStep()
    }

    addProductToCart(index) {
        logger.info(this.addProdToCartMsg)
        allure.startStep(this.addProdToCartMsg)
        browser.waitUntil(() => {
            return productPage.buyProductButtons.length > 0
        })
        productPage.clickBuyProductButton(index)
        allure.endStep()
    }

    openCartPage() {
        logger.info(this.openCartPageMsg)
        allure.startStep(this.openCartPageMsg)
        productPage.clickCartButton()
        allure.endStep()
    }

    acceptLocation() {
        logger.info(this.acceptLocationMsg)
        allure.startStep(this.acceptLocationMsg)
        productPage.moveToLocationButton()
        productPage.clickLocationButton()
        allure.endStep()
    }

}

module.exports = new ProductPageSteps()