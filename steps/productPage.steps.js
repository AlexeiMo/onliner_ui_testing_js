const productPage = require('../pages/product.page')
const allure = require('@wdio/allure-reporter').default
const log = require('@wdio/logger').default
const logger = log('test-basic')

class ProductPageSteps {

    moveToProductTraders() {
        logger.info('Move to product traders')
        allure.startStep('Move to product traders')
        productPage.clickProductTraders()
        allure.endStep()
    }

    addProductToCart(index) {
        logger.info('Add specified product to cart')
        allure.startStep('Add specified product to cart')
        browser.waitUntil(() => {
            return productPage.buyProductButtons.length > 0
        })
        productPage.clickBuyProductButton(index)
        allure.endStep()
    }

    openCartPage() {
        logger.info('Opening cart page')
        allure.startStep('Opening cart page')
        productPage.clickCartButton()
        allure.endStep()
    }

    acceptLocation() {
        logger.info('Accepting location popup')
        allure.startStep('Accepting location popup')
        productPage.moveToLocationButton()
        productPage.clickLocationButton()
        allure.endStep()
    }

}

module.exports = new ProductPageSteps()